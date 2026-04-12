#!/usr/bin/env bash
#
# WEPPY — One-line install script (macOS/Linux)
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
#
# Interactive 2 steps:
#   [1/2] Setup — install Roblox Studio Plugin via npx
#   [2/2] Register MCP with AI apps (user selection)
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

INSTALL_LOG_FILE="$(mktemp "${TMPDIR:-/tmp}/weppy-install-XXXXXX.log" 2>/dev/null || true)"
if [ -z "${INSTALL_LOG_FILE:-}" ]; then
  INSTALL_LOG_FILE="${HOME}/weppy-install-error.log"
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
  if [ "${CI:-}" = "true" ]; then
    printf "%s (Y/n): Y\n" "$prompt"
    return 0
  fi
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
  MCP_CONFIG_PATH="$config_path" node --input-type=commonjs -e '
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

  MCP_CONFIG_PATH="$config_path" node --input-type=commonjs -e '
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

# Antigravity 설정에 canonical mcpServers 래퍼로 MCP 서버를 추가하고 legacy flat key를 정리
add_antigravity_mcp_config() {
  local config_path="$1"
  local parent_dir
  parent_dir=$(dirname "$config_path")
  mkdir -p "$parent_dir"
  MCP_CONFIG_PATH="$config_path" node --input-type=commonjs -e '
const fs = require("fs");
const configPath = process.env.MCP_CONFIG_PATH;
let config = {};
try { config = JSON.parse(fs.readFileSync(configPath, "utf8")); } catch {}
if (!config || typeof config !== "object" || Array.isArray(config)) {
  config = {};
}
const mcpServers = config.mcpServers;
if (mcpServers !== undefined && (typeof mcpServers !== "object" || mcpServers === null || Array.isArray(mcpServers))) {
  throw new Error("Antigravity mcpServers must be an object");
}
const next = { ...config };
delete next["weppy-roblox-mcp"];
next.mcpServers = {
  ...(mcpServers || {}),
  "weppy-roblox-mcp": { command: "npx", args: ["-y", "@weppy/roblox-mcp"] }
};
config = next;
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
'
}

is_antigravity_mcp_configured() {
  local config_path="$1"

  [ -f "$config_path" ] || return 1

  MCP_CONFIG_PATH="$config_path" node --input-type=commonjs -e '
const fs = require("fs");
const configPath = process.env.MCP_CONFIG_PATH;
function isJsonObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function hasExpectedCommandShape(value) {
  return (
    isJsonObject(value) &&
    value.command === "npx" &&
    Array.isArray(value.args) &&
    value.args.length === 2 &&
    value.args[0] === "-y" &&
    value.args[1] === "@weppy/roblox-mcp"
  );
}
try {
  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const canonical = config?.mcpServers?.["weppy-roblox-mcp"];
  const hasLegacyFlatKey = Object.prototype.hasOwnProperty.call(config, "weppy-roblox-mcp");
  process.exit(hasExpectedCommandShape(canonical) && !hasLegacyFlatKey ? 0 : 1);
} catch {
  process.exit(1);
}
' >/dev/null 2>&1
}

is_codex_config_configured() {
  local config_path="$1"

  [ -f "$config_path" ] || return 1
  MCP_CODEX_CONFIG_PATH="$config_path" node --input-type=commonjs <<'NODE' >/dev/null 2>&1
const fs = require("fs");

const configPath = process.env.MCP_CODEX_CONFIG_PATH;
const serverName = "weppy-roblox-mcp";
const expectedCommand = "npx";
const expectedArgs = ["-y", "@weppy/roblox-mcp"];
const headerPattern = new RegExp(
  "^\\s*\\[\\s*mcp_servers\\." + serverName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\s*\\]\\s*(?:#.*)?$",
);

function stripCommentOutsideStrings(line) {
  let inSingle = false;
  let inDouble = false;
  let escaped = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (char === '"' && !inSingle && !escaped) {
      inDouble = !inDouble;
    } else if (char === "'" && !inDouble && !escaped) {
      inSingle = !inSingle;
    } else if (char === "#" && !inSingle && !inDouble) {
      return line.slice(0, index).trimEnd();
    }

    escaped = char === "\\" && !escaped;
    if (char !== "\\") {
      escaped = false;
    }
  }

  return line.trimEnd();
}

function countTripleQuoteToggles(line, quote) {
  let count = 0;
  let inSingle = false;
  let inDouble = false;
  let escaped = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index] ?? "";
    const nextThree = line.slice(index, index + 3);
    const isOutsideStrings = !inSingle && !inDouble;

    if (isOutsideStrings && nextThree === quote.repeat(3)) {
      count += 1;
      index += 2;
      escaped = false;
      continue;
    }

    if (char === '"' && !inSingle && !escaped) {
      inDouble = !inDouble;
    } else if (char === "'" && !inDouble && !escaped) {
      inSingle = !inSingle;
    } else if (char === "#" && !inSingle && !inDouble) {
      break;
    }

    escaped = char === "\\" && !escaped;
    if (char !== "\\") {
      escaped = false;
    }
  }

  return count;
}

function advanceTripleQuoteState(line, state) {
  const next = { ...state };
  const tripleDoubleCount = countTripleQuoteToggles(line, '"');
  const tripleSingleCount = countTripleQuoteToggles(line, "'");

  if (!next.inTripleSingle && tripleDoubleCount % 2 === 1) {
    next.inTripleDouble = !next.inTripleDouble;
  }

  if (!next.inTripleDouble && tripleSingleCount % 2 === 1) {
    next.inTripleSingle = !next.inTripleSingle;
  }

  return next;
}

function isTomlTableHeaderLine(line) {
  const normalized = stripCommentOutsideStrings(line).trim();

  if (normalized.length === 0) {
    return false;
  }

  return /^\[\[.*\]\]$/.test(normalized) || /^\[.*\]$/.test(normalized);
}

function findAllCodexBlocks(source) {
  const lines = source.split("\n");
  const blocks = [];
  let activeLines = null;
  let state = {
    inTripleDouble: false,
    inTripleSingle: false,
  };

  for (const line of lines) {
    const isHeaderCandidate = !state.inTripleDouble && !state.inTripleSingle && isTomlTableHeaderLine(line);
    const isCodexHeader = isHeaderCandidate && headerPattern.test(line);

    if (isCodexHeader) {
      if (activeLines !== null) {
        blocks.push(activeLines.join("\n").trim());
      }
      activeLines = [line];
    } else if (activeLines !== null && isHeaderCandidate) {
      blocks.push(activeLines.join("\n").trim());
      activeLines = null;
    } else if (activeLines !== null) {
      activeLines.push(line);
    }

    state = advanceTripleQuoteState(line, state);
  }

  if (activeLines !== null) {
    blocks.push(activeLines.join("\n").trim());
  }

  return blocks;
}

function parseStringAssignment(value, key) {
  const match = new RegExp("^\\s*" + key + "\\s*=\\s*([\"'])([^\"']+)\\1\\s*$").exec(value);
  return match ? match[2] : null;
}

function parseTomlStringArray(value) {
  const match = /^\s*args\s*=\s*\[(.*)\]\s*$/ms.exec(value.trim());

  if (match === null) {
    return null;
  }

  const body = match[1] ?? "";
  const values = [];
  let cursor = 0;
  let expectValue = true;

  while (cursor < body.length) {
    while (cursor < body.length && /\s/.test(body[cursor] ?? "")) {
      cursor += 1;
    }

    if (cursor >= body.length) {
      break;
    }

    if (!expectValue) {
      if (body[cursor] !== ",") {
        return null;
      }
      cursor += 1;
      expectValue = true;
      continue;
    }

    const quote = body[cursor];
    if (quote !== '"' && quote !== "'") {
      return null;
    }

    cursor += 1;
    let token = "";
    let escaped = false;

    while (cursor < body.length) {
      const char = body[cursor] ?? "";

      if (char === quote && !escaped) {
        cursor += 1;
        values.push(token);
        break;
      }

      token += char;
      escaped = char === "\\" && !escaped;
      if (char !== "\\") {
        escaped = false;
      }
      cursor += 1;
    }

    if (cursor > body.length) {
      return null;
    }

    expectValue = false;
  }

  const leftover = body.slice(cursor).trim();
  if (leftover === ",") {
    return values;
  }

  return leftover.length === 0 ? values : null;
}

function collectArrayLines(lines, startIndex) {
  const collected = [stripCommentOutsideStrings(lines[startIndex] ?? "")];
  let bracketDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let escaped = false;

  for (let lineIndex = startIndex; lineIndex < lines.length; lineIndex += 1) {
    const sanitized = stripCommentOutsideStrings(lines[lineIndex] ?? "");
    if (lineIndex !== startIndex) {
      collected.push(sanitized);
    }

    for (let index = 0; index < sanitized.length; index += 1) {
      const char = sanitized[index] ?? "";

      if (char === '"' && !inSingle && !escaped) {
        inDouble = !inDouble;
      } else if (char === "'" && !inDouble && !escaped) {
        inSingle = !inSingle;
      } else if (!inSingle && !inDouble) {
        if (char === "[") {
          bracketDepth += 1;
        } else if (char === "]") {
          bracketDepth -= 1;
        }
      }

      escaped = char === "\\" && !escaped;
      if (char !== "\\") {
        escaped = false;
      }
    }

    if (bracketDepth <= 0) {
      return {
        nextIndex: lineIndex,
        text: collected.join("\n"),
      };
    }
  }

  return null;
}

function parseCodexBlock(blockContent) {
  const lines = blockContent.split("\n");
  let command = null;
  let args = null;
  let hasConflict = false;
  let inTripleDouble = false;
  let inTripleSingle = false;

  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    const sanitized = stripCommentOutsideStrings(line);
    const trimmed = sanitized.trim();

    if (inTripleDouble) {
      if (countTripleQuoteToggles(sanitized, '"') % 2 === 1) {
        inTripleDouble = false;
      }
      continue;
    }

    if (inTripleSingle) {
      if (countTripleQuoteToggles(sanitized, "'") % 2 === 1) {
        inTripleSingle = false;
      }
      continue;
    }

    if (countTripleQuoteToggles(sanitized, '"') % 2 === 1) {
      inTripleDouble = true;
      continue;
    }

    if (countTripleQuoteToggles(sanitized, "'") % 2 === 1) {
      inTripleSingle = true;
      continue;
    }

    if (trimmed.length === 0) {
      continue;
    }

    if (/^command\s*=/.test(trimmed)) {
      const parsedCommand = parseStringAssignment(trimmed, "command");
      if (command !== null || parsedCommand === null) {
        hasConflict = true;
      } else {
        command = parsedCommand;
      }
      continue;
    }

    if (/^args\s*=/.test(trimmed)) {
      const collected = collectArrayLines(lines, index);
      const parsedArgs = collected === null ? null : parseTomlStringArray(collected.text);

      if (args !== null || parsedArgs === null || collected === null) {
        hasConflict = true;
      } else {
        args = parsedArgs;
        index = collected.nextIndex;
      }
    }
  }

  return {
    args,
    command,
    hasConflict,
  };
}

function isStructurallySafe(source) {
  let bracketDepth = 0;
  let braceDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let escaped = false;
  let tripleState = {
    inTripleDouble: false,
    inTripleSingle: false,
  };

  for (const line of source.split("\n")) {
    tripleState = advanceTripleQuoteState(line, tripleState);

    for (let index = 0; index < line.length; index += 1) {
      const char = line[index] ?? "";

      if (!inSingle && !inDouble && char === "#") {
        break;
      }

      if (char === '"' && !inSingle && !escaped) {
        inDouble = !inDouble;
      } else if (char === "'" && !inDouble && !escaped) {
        inSingle = !inSingle;
      } else if (!inSingle && !inDouble) {
        if (char === "[") {
          bracketDepth += 1;
        } else if (char === "]") {
          bracketDepth -= 1;
          if (bracketDepth < 0) {
            return false;
          }
        } else if (char === "{") {
          braceDepth += 1;
        } else if (char === "}") {
          braceDepth -= 1;
          if (braceDepth < 0) {
            return false;
          }
        }
      }

      escaped = char === "\\" && !escaped;
      if (char !== "\\") {
        escaped = false;
      }
    }
  }

  return (
    !tripleState.inTripleDouble &&
    !tripleState.inTripleSingle &&
    bracketDepth === 0 &&
    braceDepth === 0 &&
    !inSingle &&
    !inDouble
  );
}

try {
  const source = fs.readFileSync(configPath, "utf8");
  if (!isStructurallySafe(source)) {
    process.exit(1);
  }

  const blocks = findAllCodexBlocks(source);
  if (blocks.length !== 1) {
    process.exit(1);
  }

  const parsed = parseCodexBlock(blocks[0]);
  const isConfigured =
    !parsed.hasConflict &&
    parsed.command === expectedCommand &&
    Array.isArray(parsed.args) &&
    parsed.args.length === expectedArgs.length &&
    parsed.args.every((entry, index) => entry === expectedArgs[index]);

  process.exit(isConfigured ? 0 : 1);
} catch {
  process.exit(1);
}
NODE
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

# ── Header ──
# shellcheck disable=SC2059
printf "\n${BOLD}WEPPY Installer${NC}\n"
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
# [1/2] Setup — Roblox Studio Plugin
# ═══════════════════════════════════
step "1/2" "Setup Roblox Studio Plugin"

if confirm "  Run npx -y @weppy/roblox-mcp --setup?"; then
  setup_tmp_dir=""
  if setup_tmp_dir=$(mktemp -d "${TMPDIR:-/tmp}/weppy-setup-XXXXXX" 2>/dev/null); then
    :
  elif setup_tmp_dir=$(mktemp -d 2>/dev/null); then
    :
  fi

  if [ -n "${setup_tmp_dir:-}" ] && [ -d "$setup_tmp_dir" ]; then
    # stdin을 /dev/null로 격리: curl|bash 파이프 모드에서 stdio MCP 서버가
    # bash의 남은 스크립트 바이트를 소비해버리는 문제를 방지한다
    if (cd "$setup_tmp_dir" && npx -y @weppy/roblox-mcp --setup </dev/null); then
      success "Setup complete"
    else
      warn "Setup encountered a warning (non-blocking)"
    fi

    rm -rf "$setup_tmp_dir"
  else
    warn "Setup encountered a warning (failed to create temp working directory)"
  fi
else
  warn "Setup skipped"
fi

# ═══════════════════════════════════
# [2/2] Register MCP with AI apps
# ═══════════════════════════════════
step "2/2" "Register MCP with AI apps"
printf "  Automatic registration: Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity\n"

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

# Codex CLI / Codex App (share the same ~/.codex/config.toml)
CODEX_CONFIG="$HOME/.codex/config.toml"
CODEX_CLI_COMMAND="$(resolve_optional_cli_command codex 2>/dev/null || true)"
if is_codex_config_configured "$CODEX_CONFIG"; then
  DETECTED_NAMES+=("Codex CLI/App (configured)")
  DETECTED_TYPES+=("codex-cli")
elif [ -n "$CODEX_CLI_COMMAND" ]; then
  DETECTED_NAMES+=("Codex CLI/App")
  DETECTED_TYPES+=("codex-cli")
else
  NOT_DETECTED+=("Codex CLI/App (not found)")
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

# Antigravity (unofficial path, auto-register if found)
ANTIGRAVITY_CONFIG="$HOME/.gemini/antigravity/mcp_config.json"
if is_antigravity_mcp_configured "$ANTIGRAVITY_CONFIG"; then
  DETECTED_NAMES+=("Antigravity (configured)")
  DETECTED_TYPES+=("antigravity")
elif [ -f "$ANTIGRAVITY_CONFIG" ]; then
  DETECTED_NAMES+=("Antigravity")
  DETECTED_TYPES+=("antigravity")
elif [ -d "$HOME/.gemini/antigravity" ]; then
  DETECTED_NAMES+=("Antigravity")
  DETECTED_TYPES+=("antigravity")
else
  NOT_DETECTED+=("Antigravity (not found)")
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
  if [ "${CI:-}" = "true" ]; then
    selection="a"
    printf "a\n"
  else
    read -r selection </dev/tty
  fi
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
      antigravity)
        if is_antigravity_mcp_configured "$ANTIGRAVITY_CONFIG"; then
          success "Already configured: $app_name"
        elif add_antigravity_mcp_config "$ANTIGRAVITY_CONFIG"; then
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
printf "  2. Look for the ${BOLD}WEPPY${NC} button in the Plugins tab\n"
printf "  3. Click Connect and start building with AI!\n\n"
printf "  Auto registration: Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity\n\n"
# shellcheck disable=SC2059
printf "  ${DIM}Docs: https://github.com/hope1026/weppy-roblox-mcp${NC}\n\n"
