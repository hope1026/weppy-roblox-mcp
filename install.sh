#!/usr/bin/env bash
#
# Weppy Roblox MCP — One-line install script (macOS/Linux)
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
#
# Interactive 3 steps:
#   [1/3] MCP server install (npm)
#   [2/3] Roblox Studio Plugin install (.rbxm)
#   [3/3] Register MCP with AI apps (user selection)
#

set -euo pipefail

# ── Color definitions ──
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
DIM='\033[2m'
BOLD='\033[1m'
NC='\033[0m'

# ── Utilities ──
# shellcheck disable=SC2059
info()    { printf "${BLUE}[INFO]${NC} %s\n" "$1"; }
# shellcheck disable=SC2059
success() { printf "${GREEN}  ✓${NC} %s\n" "$1"; }
# shellcheck disable=SC2059
warn()    { printf "${YELLOW}  ⚠${NC} %s\n" "$1"; }
# shellcheck disable=SC2059
fail()    { printf "${RED}  ✗${NC} %s\n" "$1"; }
# shellcheck disable=SC2059
step()    { printf "\n${BOLD}${CYAN}[%s]${NC} ${BOLD}%s${NC}\n" "$1" "$2"; }

# Y/n prompt (default Y)
confirm() {
  local prompt="$1"
  local reply
  printf "%s (Y/n): " "$prompt"
  read -r reply </dev/tty
  reply="${reply:-Y}"
  case "$reply" in
    [Yy]*) return 0 ;;
    *) return 1 ;;
  esac
}

# Add MCP server to JSON config file (path via env var — prevents shell injection)
add_mcp_to_config() {
  local config_path="$1"
  local parent_dir
  parent_dir=$(dirname "$config_path")
  mkdir -p "$parent_dir"
  MCP_CONFIG_PATH="$config_path" node -e '
const fs = require("fs");
const configPath = process.env.MCP_CONFIG_PATH;
let config = {};
try { config = JSON.parse(fs.readFileSync(configPath, "utf8")); } catch {}
if (!config.mcpServers) config.mcpServers = {};
config.mcpServers["weppy-roblox-mcp"] = { command: "npx", args: ["-y", "@weppy/roblox-mcp"] };
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
'
}

is_lfs_pointer() {
  local file_path="$1"

  if [ ! -f "$file_path" ]; then
    return 1
  fi

  grep -q "git-lfs.github.com/spec/v1" "$file_path"
}

# ── Header ──
# shellcheck disable=SC2059
printf "\n${BOLD}Weppy Roblox MCP Installer${NC}\n"
# shellcheck disable=SC2059
printf "${DIM}AI-powered Roblox Studio integration${NC}\n"
printf "%s\n" "════════════════════════════════════"

# ── Node.js check ──
if ! command -v node &>/dev/null; then
  fail "Node.js is not installed"
  printf "  Install Node.js 18+: https://nodejs.org\n"
  exit 1
fi

NODE_VERSION=$(node -v | sed 's/v//' | cut -d. -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
  fail "Node.js 18 or higher required (current: $(node -v))"
  printf "  Upgrade: https://nodejs.org\n"
  exit 1
fi
success "Node.js $(node -v) detected"

# ═══════════════════════════════════
# [1/3] MCP server install
# ═══════════════════════════════════
step "1/3" "Install @weppy/roblox-mcp via npm"

if confirm "  Run npm install -g @weppy/roblox-mcp?"; then
  if npm install -g @weppy/roblox-mcp; then
    success "Installed @weppy/roblox-mcp"
  else
    fail "npm install failed"
    exit 1
  fi
else
  warn "MCP server install skipped"
fi

# ═══════════════════════════════════
# [2/3] Roblox Studio Plugin install
# ═══════════════════════════════════
step "2/3" "Install Roblox Studio Plugin"

PLUGINS_DIR="$HOME/Documents/Roblox/Plugins"
PLUGIN_NAME="WeppyRobloxMCP.rbxm"

# Search for .rbxm in npm global prefix
NPM_PREFIX=$(npm prefix -g 2>/dev/null)
BUNDLED_PLUGIN=""

# Search for .rbxm in npm global path
for search_dir in \
  "${NPM_PREFIX}/lib/node_modules/@weppy/roblox-mcp/plugins/weppy-roblox-mcp/roblox-plugin" \
  "${NPM_PREFIX}/lib/node_modules/@weppy/roblox-mcp/roblox-plugin"; do
  if [ -f "${search_dir}/${PLUGIN_NAME}" ]; then
    BUNDLED_PLUGIN="${search_dir}/${PLUGIN_NAME}"
    break
  fi
done

if [ -n "$BUNDLED_PLUGIN" ]; then
  if is_lfs_pointer "$BUNDLED_PLUGIN"; then
    fail "Bundled plugin payload is invalid (Git LFS pointer detected)"
    info "Install the plugin from the GitHub release ZIP instead"
    exit 1
  fi

  printf "  → %s/%s\n" "$PLUGINS_DIR" "$PLUGIN_NAME"
  if confirm "  Copy plugin to Roblox Plugins folder?"; then
    mkdir -p "$PLUGINS_DIR"
    cp "$BUNDLED_PLUGIN" "$PLUGINS_DIR/$PLUGIN_NAME"
    success "Plugin installed → $PLUGINS_DIR/$PLUGIN_NAME"
  else
    warn "Plugin install skipped"
  fi
else
  warn "Bundled plugin file not found"
  info "Will be installed automatically on first MCP server run"
fi

# ═══════════════════════════════════
# [3/3] Register MCP with AI apps
# ═══════════════════════════════════
step "3/3" "Register MCP with AI apps"
printf "  Automatic registration: Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI\n"
printf "  Manual setup required: Codex App, Antigravity\n"

MCP_COMMAND='npx -y @weppy/roblox-mcp'

# AI app detection
declare -a DETECTED_NAMES=()
declare -a DETECTED_TYPES=()
declare -a NOT_DETECTED=()

# Claude Code CLI
if command -v claude &>/dev/null; then
  DETECTED_NAMES+=("Claude Code (CLI)")
  DETECTED_TYPES+=("claude-code")
fi

# Claude Desktop (macOS)
CLAUDE_DESKTOP_CONFIG="$HOME/Library/Application Support/Claude/claude_desktop_config.json"
if [ -f "$CLAUDE_DESKTOP_CONFIG" ]; then
  DETECTED_NAMES+=("Claude Desktop")
  DETECTED_TYPES+=("claude-desktop")
elif [ "$(uname)" = "Darwin" ]; then
  NOT_DETECTED+=("Claude Desktop (config not found)")
fi

# Cursor (detect only when mcp.json or binary exists)
CURSOR_MCP_CONFIG="$HOME/.cursor/mcp.json"
if [ -f "$CURSOR_MCP_CONFIG" ] || command -v cursor &>/dev/null; then
  DETECTED_NAMES+=("Cursor")
  DETECTED_TYPES+=("cursor")
else
  NOT_DETECTED+=("Cursor (not found)")
fi

# Codex CLI
if command -v codex &>/dev/null; then
  DETECTED_NAMES+=("Codex CLI")
  DETECTED_TYPES+=("codex-cli")
else
  NOT_DETECTED+=("Codex CLI (not found)")
fi

# Gemini CLI
if command -v gemini &>/dev/null; then
  DETECTED_NAMES+=("Gemini CLI")
  DETECTED_TYPES+=("gemini-cli")
else
  NOT_DETECTED+=("Gemini CLI (not found)")
fi

if [ ${#DETECTED_NAMES[@]} -eq 0 ]; then
  warn "No AI apps detected"
  info "Register MCP server manually: $MCP_COMMAND"
else
  # shellcheck disable=SC2059
  printf "\n  ${BOLD}Detected:${NC}\n"
  for i in "${!DETECTED_NAMES[@]}"; do
    # shellcheck disable=SC2059
    printf "    ${GREEN}%d.${NC} %s\n" "$((i + 1))" "${DETECTED_NAMES[$i]}"
  done

  if [ ${#NOT_DETECTED[@]} -gt 0 ]; then
    # shellcheck disable=SC2059
    printf "\n  ${DIM}Not detected:${NC}\n"
    for item in "${NOT_DETECTED[@]}"; do
      # shellcheck disable=SC2059
      printf "    ${DIM}- %s${NC}\n" "$item"
    done
  fi

  # shellcheck disable=SC2059
  printf "\n  Select apps to register ${DIM}(comma-separated, 'a' for all, 'n' to skip)${NC}\n"
  printf "  → "
  read -r selection </dev/tty
  selection="${selection:-n}"

  # Parse selection
  declare -a SELECTED_INDICES=()
  case "$selection" in
    [Nn])
      warn "MCP registration skipped"
      ;;
    [Aa])
      for i in "${!DETECTED_NAMES[@]}"; do
        SELECTED_INDICES+=("$i")
      done
      ;;
    *)
      IFS=',' read -ra PARTS <<< "$selection"
      for part in "${PARTS[@]}"; do
        part=$(echo "$part" | tr -d ' ')
        if [[ "$part" =~ ^[0-9]+$ ]]; then
          idx=$((part - 1))
          if [ "$idx" -ge 0 ] && [ "$idx" -lt ${#DETECTED_NAMES[@]} ]; then
            SELECTED_INDICES+=("$idx")
          fi
        fi
      done
      ;;
  esac

  # Register selected apps
  for idx in "${SELECTED_INDICES[@]}"; do
    app_type="${DETECTED_TYPES[$idx]}"
    app_name="${DETECTED_NAMES[$idx]}"

    case "$app_type" in
      claude-code)
        if claude mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp 2>/dev/null; then
          success "Registered: $app_name"
        else
          fail "Failed: $app_name"
        fi
        ;;
      claude-desktop)
        if add_mcp_to_config "$CLAUDE_DESKTOP_CONFIG"; then
          success "Registered: $app_name"
        else
          fail "Failed: $app_name"
        fi
        ;;
      cursor)
        if add_mcp_to_config "$HOME/.cursor/mcp.json"; then
          success "Registered: $app_name"
        else
          fail "Failed: $app_name"
        fi
        ;;
      codex-cli)
        codex mcp remove weppy-roblox-mcp >/dev/null 2>&1 || true
        if codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp 2>/dev/null; then
          success "Registered: $app_name"
        else
          fail "Failed: $app_name"
        fi
        ;;
      gemini-cli)
        # Config path/format is best-effort — update when CLI stabilizes
        if add_mcp_to_config "$HOME/.gemini/settings.json"; then
          success "Registered: $app_name"
        else
          fail "Failed: $app_name"
        fi
        ;;
    esac
  done
fi

# ═══════════════════════════════════
# Installation summary
# ═══════════════════════════════════
# shellcheck disable=SC2059
printf "\n%s\n" "════════════════════════════════════"
# shellcheck disable=SC2059
printf "${BOLD}Installation complete!${NC}\n\n"
# shellcheck disable=SC2059
printf "  ${BOLD}Next steps:${NC}\n"
printf "  1. Restart Roblox Studio\n"
# shellcheck disable=SC2059
printf "  2. Look for the ${BOLD}W-MCP${NC} button in the Plugins tab\n"
printf "  3. Click Connect and start building with AI!\n\n"
printf "  Auto registration: Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI\n"
printf "  Manual setup required: Codex App, Antigravity\n\n"
# shellcheck disable=SC2059
printf "  ${DIM}Docs: https://github.com/hope1026/weppy-roblox-mcp${NC}\n\n"
