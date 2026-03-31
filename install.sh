#!/usr/bin/env bash
#
# WROX — One-line install script (macOS/Linux)
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

INSTALL_LOG_FILE="$(mktemp "${TMPDIR:-/tmp}/wrox-install-XXXXXX.log" 2>/dev/null || true)"
if [ -z "${INSTALL_LOG_FILE:-}" ]; then
  INSTALL_LOG_FILE="${HOME}/wrox-install-error.log"
  : > "$INSTALL_LOG_FILE"
fi

if command -v tee >/dev/null 2>&1; then
  exec > >(tee -a "$INSTALL_LOG_FILE") 2>&1
fi

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

pause_on_failure_if_interactive() {
  if [ -t 1 ] && [ -r /dev/tty ]; then
    printf "\nPress Enter to exit..." >/dev/tty
    read -r _ </dev/tty || true
  fi
}

handle_install_error() {
  local exit_code=$?
  local line_no="$1"
  local failed_command="$2"

  trap - ERR

  printf "\n${RED}Installation failed.${NC}\n"
  printf "  Command: %s\n" "$failed_command"
  printf "  Line   : %s\n" "$line_no"
  printf "  Log    : %s\n" "$INSTALL_LOG_FILE"

  pause_on_failure_if_interactive
  exit "$exit_code"
}

trap 'handle_install_error "${LINENO}" "$BASH_COMMAND"' ERR

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

is_json_mcp_configured() {
  local config_path="$1"

  [ -f "$config_path" ] || return 1

  MCP_CONFIG_PATH="$config_path" node -e '
const fs = require("fs");
const configPath = process.env.MCP_CONFIG_PATH;
try {
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  process.exit(config?.mcpServers?.["weppy-roblox-mcp"] ? 0 : 1);
} catch {
  process.exit(1);
}
' >/dev/null 2>&1
}

is_codex_config_configured() {
  local config_path="$1"

  [ -f "$config_path" ] || return 1
  grep -Eq '^[[:space:]]*\[mcp_servers\.weppy-roblox-mcp\][[:space:]]*$' "$config_path"
}

resolve_optional_cli_command() {
  local command_name="$1"
  local npm_prefix=""

  if command -v "$command_name" >/dev/null 2>&1; then
    command -v "$command_name"
    return 0
  fi

  npm_prefix=$(npm prefix -g 2>/dev/null || true)
  if [ -n "$npm_prefix" ] && [ -x "$npm_prefix/bin/$command_name" ]; then
    printf "%s\n" "$npm_prefix/bin/$command_name"
    return 0
  fi

  return 1
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
printf "\n${BOLD}WROX Installer${NC}\n"
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

# Claude Code
CLAUDE_PROJECT_MCP_CONFIG="$PWD/.mcp.json"
CLAUDE_GLOBAL_MCP_CONFIG="$HOME/.claude/mcp.json"
CLAUDE_CLI_COMMAND="$(resolve_optional_cli_command claude 2>/dev/null || true)"

if is_json_mcp_configured "$CLAUDE_PROJECT_MCP_CONFIG" || is_json_mcp_configured "$CLAUDE_GLOBAL_MCP_CONFIG"; then
  DETECTED_NAMES+=("Claude Code (configured)")
  DETECTED_TYPES+=("claude-code")
elif [ -n "$CLAUDE_CLI_COMMAND" ]; then
  DETECTED_NAMES+=("Claude Code (CLI)")
  DETECTED_TYPES+=("claude-code")
else
  NOT_DETECTED+=("Claude Code (not found)")
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
CODEX_CONFIG="$HOME/.codex/config.toml"
CODEX_CLI_COMMAND="$(resolve_optional_cli_command codex 2>/dev/null || true)"
if is_codex_config_configured "$CODEX_CONFIG"; then
  DETECTED_NAMES+=("Codex CLI (configured)")
  DETECTED_TYPES+=("codex-cli")
elif [ -n "$CODEX_CLI_COMMAND" ]; then
  DETECTED_NAMES+=("Codex CLI")
  DETECTED_TYPES+=("codex-cli")
else
  NOT_DETECTED+=("Codex CLI (not found)")
fi

# Gemini CLI
# Gemini CLI
GEMINI_CONFIG="$HOME/.gemini/settings.json"
GEMINI_CLI_COMMAND="$(resolve_optional_cli_command gemini 2>/dev/null || true)"
if is_json_mcp_configured "$GEMINI_CONFIG"; then
  DETECTED_NAMES+=("Gemini CLI (configured)")
  DETECTED_TYPES+=("gemini-cli")
elif [ -n "$GEMINI_CLI_COMMAND" ]; then
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
        if is_json_mcp_configured "$CLAUDE_PROJECT_MCP_CONFIG" || is_json_mcp_configured "$CLAUDE_GLOBAL_MCP_CONFIG"; then
          success "Already configured: $app_name"
        elif [ -n "$CLAUDE_CLI_COMMAND" ] && "$CLAUDE_CLI_COMMAND" mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp 2>/dev/null; then
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
        if is_codex_config_configured "$CODEX_CONFIG"; then
          success "Already configured: $app_name"
        else
          [ -n "$CODEX_CLI_COMMAND" ] && "$CODEX_CLI_COMMAND" mcp remove weppy-roblox-mcp >/dev/null 2>&1 || true
        fi
        if is_codex_config_configured "$CODEX_CONFIG"; then
          :
        elif [ -n "$CODEX_CLI_COMMAND" ] && "$CODEX_CLI_COMMAND" mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp 2>/dev/null; then
          success "Registered: $app_name"
        elif is_codex_config_configured "$CODEX_CONFIG"; then
          success "Already configured: $app_name"
        else
          fail "Failed: $app_name"
        fi
        ;;
      gemini-cli)
        if is_json_mcp_configured "$GEMINI_CONFIG"; then
          success "Already configured: $app_name"
        elif add_mcp_to_config "$GEMINI_CONFIG"; then
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
printf "  2. Look for the ${BOLD}WROX${NC} button in the Plugins tab\n"
printf "  3. Click Connect and start building with AI!\n\n"
printf "  Auto registration: Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI\n"
printf "  Manual setup required: Codex App, Antigravity\n\n"
# shellcheck disable=SC2059
printf "  ${DIM}Docs: https://github.com/hope1026/weppy-roblox-mcp${NC}\n\n"
