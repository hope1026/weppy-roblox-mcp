#!/bin/bash
# =============================================================================
# update-metadata.sh - Update sync metadata after successful sync
# =============================================================================
# Updates last-sync timestamp and connection status.
# Run this after MCP data has been written to explorer/.
#
# Exit codes:
#   0 = Metadata updated
#   1 = Failed (sync directory not found)
# =============================================================================

set -euo pipefail

SYNC_DIR="${1:-roblox-studio-sync}"

if [ ! -d "$SYNC_DIR" ]; then
  echo "ERROR: Sync directory not found: $SYNC_DIR"
  exit 1
fi

date -Iseconds > "$SYNC_DIR/last-sync.txt"
echo "connected" > "$SYNC_DIR/connection-status.txt"

echo "METADATA=updated"
echo "TIMESTAMP=$(cat "$SYNC_DIR/last-sync.txt")"
echo "CONNECTION=connected"
