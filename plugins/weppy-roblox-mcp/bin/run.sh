#!/bin/bash
# run.sh - Platform-detecting wrapper for the weppy-roblox-mcp Go binary.
# Used by the Claude Code marketplace plugin.json as the MCP server command.

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Detect OS (darwin / linux)
OS=$(uname -s | tr '[:upper:]' '[:lower:]')

# Detect architecture
ARCH=$(uname -m)
case "$ARCH" in
  x86_64)         ARCH="amd64" ;;
  aarch64|arm64)  ARCH="arm64" ;;
  *)
    echo "Unsupported architecture: $ARCH" >&2
    exit 1
    ;;
esac

BINARY="$DIR/weppy-roblox-mcp-${OS}-${ARCH}"

if [ ! -f "$BINARY" ]; then
  echo "Error: MCP server binary not found: $BINARY" >&2
  echo "Supported platforms: darwin-amd64, darwin-arm64, linux-amd64, linux-arm64" >&2
  exit 1
fi

# Ensure executable (first run after download may lack execute bit)
chmod +x "$BINARY" 2>/dev/null || true

exec "$BINARY" "$@"
