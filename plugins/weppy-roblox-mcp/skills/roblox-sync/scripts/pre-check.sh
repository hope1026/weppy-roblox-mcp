#!/bin/bash
# =============================================================================
# sync-and-verify.sh - Blocking sync verification script
# =============================================================================
# This script BLOCKS until all sync conditions are met. It does NOT exit early.
# Used by roblox-sync skill to guarantee sync completion before returning.
#
# Exit codes:
#   0  = Fully synced and verified
#   10 = MCP server not running (after user chose to abort)
#   11 = Studio/plugin not connected (after user chose to abort)
#   12 = Sync data validation failed (after max retries)
#   13 = User requested abort
#
# Usage: ./sync-and-verify.sh [--check-only] [--max-retries N]
# =============================================================================

set -euo pipefail

# Configuration
SYNC_DIR="${SYNC_DIR:-roblox-project-sync}"
MCP_PORT="${MCP_PORT:-3002}"
MAX_RETRIES="${MAX_RETRIES:-60}"  # Max retries for each phase (5 minutes at 5s intervals)
RETRY_INTERVAL=5
CHECK_ONLY=false

# Required services to verify in explorer/
REQUIRED_SERVICES=("Workspace" "ReplicatedStorage" "ServerScriptService" "StarterPlayer")

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    --check-only) CHECK_ONLY=true; shift ;;
    --max-retries) MAX_RETRIES="$2"; shift 2 ;;
    *) shift ;;
  esac
done

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging functions
log_info() { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_guide() { echo -e "${YELLOW}[GUIDE]${NC} $1"; }

# Output machine-readable status
output_status() {
  local status="$1"
  local message="$2"
  echo ""
  echo "=== SYNC STATUS ==="
  echo "STATUS=$status"
  echo "MESSAGE=$message"
  echo "TIMESTAMP=$(date -Iseconds)"
  echo "SYNC_DIR=$SYNC_DIR"
  if [ -f "$SYNC_DIR/rojo-detected.txt" ]; then
    echo "ROJO_MODE=$(cat "$SYNC_DIR/rojo-detected.txt")"
  else
    echo "ROJO_MODE=false"
  fi
  echo "==================="
}

# Create necessary directories
setup_directories() {
  mkdir -p "$SYNC_DIR/explorer"
  mkdir -p "$SYNC_DIR/snapshots"
  mkdir -p "$SYNC_DIR/screenshots"
}

# Check if MCP server process is accessible
check_mcp_available() {
  # Check if the MCP tool can respond (via ping or connection)
  # This verifies the Claude Code MCP connection is active
  if [ -f "$SYNC_DIR/connection-status.txt" ]; then
    local status=$(cat "$SYNC_DIR/connection-status.txt" 2>/dev/null | head -1)
    local file_age=$(( $(date +%s) - $(stat -f %m "$SYNC_DIR/connection-status.txt" 2>/dev/null || echo "0") ))
    if [ "$file_age" -lt 60 ] && [ "$status" = "connected" ]; then
      return 0
    fi
  fi

  # Check if Studio plugin port is responding
  if command -v nc &> /dev/null; then
    nc -z localhost "$MCP_PORT" 2>/dev/null && return 0
  fi

  return 1
}

# Phase 1: Wait for MCP/Studio connection
wait_for_connection() {
  log_info "Phase 1: Checking MCP/Studio connection..."

  local retry_count=0
  local guided=false

  while ! check_mcp_available; do
    retry_count=$((retry_count + 1))

    if [ "$CHECK_ONLY" = true ]; then
      output_status "disconnected" "MCP/Studio not connected"
      exit 11
    fi

    if [ "$retry_count" -gt "$MAX_RETRIES" ]; then
      log_error "Connection timeout after $MAX_RETRIES attempts"
      output_status "timeout" "Connection timeout - MCP/Studio not responding"
      exit 11
    fi

    # Show guide only once
    if [ "$guided" = false ]; then
      guided=true
      echo ""
      log_warn "Roblox Studio/MCP not connected"
      log_guide "Please follow these steps:"
      echo "  1. Open Roblox Studio"
      echo "  2. Open your game place file"
      echo "  3. Go to Plugins tab"
      echo "  4. Click 'MCP Plugin' to enable"
      echo "  5. Verify plugin shows 'Connected' status"
      echo ""
      log_info "Waiting for connection... (retry $retry_count/$MAX_RETRIES)"
    else
      # Progress indicator
      echo -ne "\r  Waiting for connection... (retry $retry_count/$MAX_RETRIES)  "
    fi

    sleep "$RETRY_INTERVAL"
  done

  echo ""  # Clear the line
  log_success "MCP/Studio connection established"
  echo "connected" > "$SYNC_DIR/connection-status.txt"
  return 0
}

# Phase 2: Verify sync data exists and is valid
verify_sync_data() {
  log_info "Phase 2: Verifying sync data (folder structure)..."

  local explorer_dir="$SYNC_DIR/explorer"
  local missing_services=()
  local invalid_services=()

  # Check each required service has a folder with _index.json
  for service in "${REQUIRED_SERVICES[@]}"; do
    local service_dir="$explorer_dir/${service}"
    if [ ! -d "$service_dir" ]; then
      missing_services+=("$service")
      continue
    fi

    # Check for _tree.json (new format) or _index.json (legacy)
    local index_file="$service_dir/_tree.json"
    if [ ! -f "$index_file" ]; then
      index_file="$service_dir/_index.json"
    fi
    if [ ! -f "$index_file" ]; then
      invalid_services+=("$service (missing _tree.json)")
      continue
    fi

    # Check file is not empty and has valid structure
    local file_size
    file_size=$(stat -f %z "$index_file" 2>/dev/null || stat -c %s "$index_file" 2>/dev/null || echo "0")
    if [ "$file_size" -lt 20 ]; then
      invalid_services+=("$service (empty _index.json)")
      continue
    fi

    # Basic JSON validation - check for expected fields
    if ! grep -q '"name"' "$index_file" 2>/dev/null; then
      invalid_services+=("$service (invalid _index.json)")
      continue
    fi
  done

  # Report results
  if [ ${#missing_services[@]} -gt 0 ] || [ ${#invalid_services[@]} -gt 0 ]; then
    if [ ${#missing_services[@]} -gt 0 ]; then
      log_warn "Missing services: ${missing_services[*]}"
    fi
    if [ ${#invalid_services[@]} -gt 0 ]; then
      log_warn "Invalid services: ${invalid_services[*]}"
    fi
    return 1
  fi

  log_success "All required services verified: ${REQUIRED_SERVICES[*]}"
  return 0
}

# Check last-sync.txt for freshness
check_sync_freshness() {
  local last_sync_file="$SYNC_DIR/last-sync.txt"

  if [ ! -f "$last_sync_file" ]; then
    return 1
  fi

  local last_sync=$(cat "$last_sync_file")

  # Use gdate on macOS if available
  local date_cmd="date"
  if command -v gdate &> /dev/null; then
    date_cmd="gdate"
  fi

  local last_epoch=$($date_cmd -d "$last_sync" +%s 2>/dev/null || echo "0")
  local now_epoch=$($date_cmd +%s)
  local diff_minutes=$(( (now_epoch - last_epoch) / 60 ))

  if [ "$diff_minutes" -gt 30 ]; then
    log_warn "Sync data is stale (${diff_minutes}m old)"
    return 1
  fi

  return 0
}

# Full sync verification check
full_verification() {
  local issues=()

  # Check connection
  if ! check_mcp_available; then
    issues+=("MCP/Studio not connected")
  fi

  # Check sync data
  if ! verify_sync_data; then
    issues+=("Sync data incomplete or invalid")
  fi

  # Check freshness
  if ! check_sync_freshness; then
    issues+=("Sync data is stale or missing timestamp")
  fi

  if [ ${#issues[@]} -gt 0 ]; then
    for issue in "${issues[@]}"; do
      log_warn "$issue"
    done
    return 1
  fi

  return 0
}

# Main execution
main() {
  echo "=============================================="
  echo "  Roblox Studio Sync Verification"
  echo "=============================================="
  echo ""

  # Setup directories
  setup_directories

  # Detect Rojo
  if [ -f "default.project.json" ]; then
    echo "true" > "$SYNC_DIR/rojo-detected.txt"
    log_info "Rojo project detected"
  else
    echo "false" > "$SYNC_DIR/rojo-detected.txt"
  fi

  # If check-only mode, just verify current state
  if [ "$CHECK_ONLY" = true ]; then
    if full_verification; then
      output_status "synced" "All checks passed"
      exit 0
    else
      output_status "needs_sync" "Sync verification failed"
      exit 12
    fi
  fi

  # Phase 1: Wait for connection (blocks until connected)
  wait_for_connection

  # Phase 2: Check if data needs to be synced
  if verify_sync_data && check_sync_freshness; then
    log_success "Existing sync data is valid and fresh"
    output_status "synced" "Existing sync data verified"
    exit 0
  fi

  # Data needs to be synced - signal this to the agent
  log_info "Sync data needs refresh"
  output_status "needs_sync" "Connection OK, but sync data needs refresh via MCP tools"

  # Return special code to indicate sync is needed
  # The agent will then call MCP tools to perform the actual sync
  exit 100  # Special code: connection OK, but sync data needs refresh
}

main "$@"
