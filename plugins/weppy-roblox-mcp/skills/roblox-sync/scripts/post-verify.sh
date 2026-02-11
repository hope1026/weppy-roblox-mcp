#!/bin/bash
# =============================================================================
# verify-sync-complete.sh - Post-sync verification script
# =============================================================================
# Verifies the folder-based sync structure is complete and valid.
# Explorer mirrors Roblox Studio hierarchy with _index.json per folder.
#
# Exit codes:
#   0  = Sync fully verified
#   1  = Verification failed
# =============================================================================

set -euo pipefail

SYNC_DIR="${SYNC_DIR:-roblox-project-sync}"
EXPLORER_DIR="$SYNC_DIR/explorer"

# Required service folders
REQUIRED_SERVICES=("Workspace" "ReplicatedStorage" "ServerScriptService" "StarterPlayer" "StarterGui" "Lighting" "ServerStorage")

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_success() { echo -e "${GREEN}[PASS]${NC} $1"; }
log_fail() { echo -e "${RED}[FAIL]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }

verify_service() {
  local service="$1"
  local service_dir="$EXPLORER_DIR/$service"
  # Check folder exists
  if [ ! -d "$service_dir" ]; then
    log_fail "$service: Folder not found"
    return 1
  fi

  # Check _tree.json (new format) or _index.json (legacy) exists
  local index_file="$service_dir/_tree.json"
  if [ ! -f "$index_file" ]; then
    index_file="$service_dir/_index.json"
  fi
  if [ ! -f "$index_file" ]; then
    log_fail "$service: _tree.json not found"
    return 1
  fi

  # Check file has content
  local size
  size=$(stat -f %z "$index_file" 2>/dev/null || stat -c %s "$index_file" 2>/dev/null || echo "0")
  if [ "$size" -lt 20 ]; then
    log_fail "$service: $(basename $index_file) too small (${size} bytes)"
    return 1
  fi

  # Check JSON has required fields
  if ! grep -q '"name"' "$index_file" 2>/dev/null; then
    log_fail "$service: $(basename $index_file) missing 'name' field"
    return 1
  fi

  if ! grep -q '"className"' "$index_file" 2>/dev/null; then
    log_fail "$service: $(basename $index_file) missing 'className' field"
    return 1
  fi

  # Workspace must have children (Camera, Terrain always exist)
  if [[ "$service" == "Workspace" ]]; then
    local child_count
    child_count=$(grep -o '"childCount":\s*[0-9]*' "$index_file" | grep -o '[0-9]*' || echo "0")
    if [ "$child_count" -lt 2 ]; then
      log_fail "$service: Must have children (childCount: $child_count, expected >= 2)"
      return 1
    fi
  fi

  # Count files in service folder (excluding _index.json)
  local file_count
  file_count=$(find "$service_dir" -type f ! -name '_index.json' 2>/dev/null | wc -l | tr -d ' ')

  # For services that may be empty (new project), just warn
  if [[ "$service" != "Workspace" && "$service" != "Lighting" && "$service" != "StarterPlayer" ]]; then
    local child_count
    child_count=$(grep -o '"childCount":\s*[0-9]*' "$index_file" | grep -o '[0-9]*' || echo "0")
    if [ "$child_count" -eq 0 ]; then
      log_warn "$service: Empty (childCount: 0) - normal for new project"
    fi
  fi

  log_success "$service: Verified (_index.json: ${size}B, files: ${file_count})"
  return 0
}

main() {
  echo "========================================"
  echo "  Post-Sync Verification (Folder Mode)"
  echo "========================================"
  echo ""

  # Check explorer directory exists
  if [ ! -d "$EXPLORER_DIR" ]; then
    log_fail "Explorer directory not found: $EXPLORER_DIR"
    echo ""
    echo "VERIFICATION=failed"
    echo "REASON=explorer_dir_missing"
    exit 1
  fi

  local failed=0
  local passed=0

  # Check each required service
  for service in "${REQUIRED_SERVICES[@]}"; do
    if verify_service "$service"; then
      passed=$((passed + 1))
    else
      failed=$((failed + 1))
    fi
  done

  echo ""
  echo "========================================"

  # Check timestamp
  if [ -f "$SYNC_DIR/last-sync.txt" ]; then
    local last_sync
    last_sync=$(cat "$SYNC_DIR/last-sync.txt")
    echo "Last sync: $last_sync"
  else
    log_fail "No timestamp found"
    failed=$((failed + 1))
  fi

  # Count total scripts synced
  local script_count=0
  if [ -d "$EXPLORER_DIR" ]; then
    script_count=$(find "$EXPLORER_DIR" \( -name "*.luau" -o -name "*.lua" \) -type f 2>/dev/null | wc -l | tr -d ' ')
  fi
  echo "Scripts synced: $script_count"

  # Final result
  echo ""
  if [ "$failed" -eq 0 ]; then
    echo -e "${GREEN}SYNC VERIFIED: $passed/${#REQUIRED_SERVICES[@]} services OK${NC}"
    echo ""
    echo "VERIFICATION=passed"
    echo "SERVICES_OK=$passed"
    echo "SERVICES_TOTAL=${#REQUIRED_SERVICES[@]}"
    echo "SCRIPTS_SYNCED=$script_count"
    exit 0
  else
    echo -e "${RED}SYNC INCOMPLETE: $failed services failed${NC}"
    echo ""
    echo "VERIFICATION=failed"
    echo "SERVICES_FAILED=$failed"
    echo "SERVICES_TOTAL=${#REQUIRED_SERVICES[@]}"
    exit 1
  fi
}

main "$@"
