#
# WEPPY — One-line install script (Windows PowerShell)
#
# Usage:
#   irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
#
# Interactive 2 steps:
#   [1/2] Setup — install Roblox Studio Plugin via npx
#   [2/2] Register MCP with AI apps (user selection)
#

$ErrorActionPreference = "Stop"
$script:InstallLogPath = Join-Path ([System.IO.Path]::GetTempPath()) ("weppy-install-{0:yyyyMMdd-HHmmss}.log" -f (Get-Date))
$script:TranscriptStarted = $false
$script:NpmCommandPath = $null

# ── Utilities ──
function Write-Step($step, $msg) { Write-Host "`n[$step] $msg" -ForegroundColor Cyan -NoNewline; Write-Host "" }
function Write-Ok($msg) { Write-Host "  ✓ $msg" -ForegroundColor Green }
function Write-Warn($msg) { Write-Host "  ⚠ $msg" -ForegroundColor Yellow }
function Write-Fail($msg) { Write-Host "  ✗ $msg" -ForegroundColor Red }
function Write-Info($msg) { Write-Host "  [INFO] $msg" -ForegroundColor Blue }
function Stop-InstallTranscript() {
    if ($script:TranscriptStarted) {
        try { Stop-Transcript | Out-Null } catch {}
        $script:TranscriptStarted = $false
    }
}
function Pause-OnFailureIfInteractive() {
    if ($Host.Name -match 'ConsoleHost|Visual Studio Code Host') {
        try { Read-Host "Press Enter to exit" | Out-Null } catch {}
    }
}
function Abort-Install($msg) { throw $msg }

try {
    Start-Transcript -Path $script:InstallLogPath -Force | Out-Null
    $script:TranscriptStarted = $true
} catch {}

trap {
    $message = if ($_.Exception) { $_.Exception.Message } else { $_.ToString() }
    Write-Fail "Installation failed: $message"
    Write-Host "  Log saved to: $script:InstallLogPath" -ForegroundColor Yellow
    Pause-OnFailureIfInteractive
    Stop-InstallTranscript
    exit 1
}

function Confirm-Action($prompt) {
    if ($env:CI -eq 'true') {
        Write-Host "$prompt (Y/n): Y"
        return $true
    }
    $reply = Read-Host "$prompt (Y/n)"
    if ([string]::IsNullOrWhiteSpace($reply)) { $reply = "Y" }
    return $reply -match '^[Yy]'
}

function Resolve-NpmCommand() {
    if ($script:NpmCommandPath) {
        return $script:NpmCommandPath
    }

    $npmCommand = Get-Command npm.cmd -ErrorAction SilentlyContinue
    if (-not $npmCommand) {
        Abort-Install "npm.cmd not found. Check Node.js installation."
    }

    $script:NpmCommandPath = $npmCommand.Source
    return $script:NpmCommandPath
}

function Resolve-OptionalCliCommand($commandName) {
    $resolvedCommand = Get-Command $commandName -ErrorAction SilentlyContinue
    if ($resolvedCommand) {
        return $resolvedCommand.Source
    }

    $candidatePaths = @()

    if ($env:APPDATA) {
        $appDataNpmDir = Join-Path $env:APPDATA 'npm'
        $candidatePaths += (Join-Path $appDataNpmDir "$commandName.cmd")
        $candidatePaths += (Join-Path $appDataNpmDir $commandName)
    }

    foreach ($candidatePath in $candidatePaths) {
        if ([string]::IsNullOrWhiteSpace($candidatePath)) {
            continue
        }

        if (Test-Path $candidatePath) {
            return $candidatePath
        }
    }

    return $null
}

function Test-McpJsonConfigured($configPath) {
    if (-not (Test-Path $configPath)) {
        return $false
    }

    try {
        $config = Get-Content -Path $configPath -Raw | ConvertFrom-Json
        return $null -ne $config.mcpServers.'weppy-roblox-mcp'
    }
    catch {
        return $false
    }
}

# Antigravity 설정에 canonical mcpServers 래퍼로 MCP 서버를 추가하고 legacy flat key를 정리
function Add-AntigravityMcpConfig($configPath) {
    $parentDir = Split-Path $configPath -Parent
    if (-not (Test-Path $parentDir)) { New-Item -ItemType Directory -Path $parentDir -Force | Out-Null }
    $env:MCP_CONFIG_PATH = $configPath
    try {
        node --input-type=commonjs -e @"
const fs = require('fs');
const configPath = process.env.MCP_CONFIG_PATH;
let config = {};
try { config = JSON.parse(fs.readFileSync(configPath, 'utf8')); } catch {}
if (!config || typeof config !== 'object' || Array.isArray(config)) {
  config = {};
}
const mcpServers = config.mcpServers;
if (mcpServers !== undefined && (typeof mcpServers !== 'object' || mcpServers === null || Array.isArray(mcpServers))) {
  throw new Error('Antigravity mcpServers must be an object');
}
const next = { ...config };
delete next['weppy-roblox-mcp'];
next.mcpServers = {
  ...(mcpServers || {}),
  'weppy-roblox-mcp': { command: 'npx', args: ['-y', '@weppy/roblox-mcp'] }
};
config = next;
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
"@
    } finally {
        Remove-Item Env:\MCP_CONFIG_PATH -ErrorAction SilentlyContinue
    }
}

function Test-AntigravityMcpConfigured($configPath) {
    if (-not (Test-Path $configPath)) {
        return $false
    }

    try {
        $config = Get-Content -Path $configPath -Raw | ConvertFrom-Json
        $hasLegacyFlatKey = $config.PSObject.Properties.Name -contains 'weppy-roblox-mcp'
        $server = $config.mcpServers.'weppy-roblox-mcp'
        $hasCanonicalArgs = ($server.args -is [System.Array]) -and ($server.args.Count -eq 2) -and ($server.args[0] -eq '-y') -and ($server.args[1] -eq '@weppy/roblox-mcp')
        return ($server.command -eq 'npx') -and $hasCanonicalArgs -and (-not $hasLegacyFlatKey)
    }
    catch {
        return $false
    }
}

function Test-CodexConfigConfigured($configPath) {
    if (-not (Test-Path $configPath)) {
        return $false
    }

    $env:MCP_CODEX_CONFIG_PATH = $configPath
    try {
        node --input-type=commonjs -e @'
const fs = require('fs');

const configPath = process.env.MCP_CODEX_CONFIG_PATH;
const serverName = 'weppy-roblox-mcp';
const expectedCommand = 'npx';
const expectedArgs = ['-y', '@weppy/roblox-mcp'];
const headerPattern = new RegExp(
  '^\\s*\\[\\s*mcp_servers\\.' + serverName.replace(/[.*+?^${}()|[\]\\\\]/g, '\\$&') + '\\s*\\]\\s*(?:#.*)?$'
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
    } else if (char === '#' && !inSingle && !inDouble) {
      return line.slice(0, index).trimEnd();
    }

    escaped = char === '\\' && !escaped;
    if (char !== '\\') {
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
    const char = line[index] ?? '';
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
    } else if (char === '#' && !inSingle && !inDouble) {
      break;
    }

    escaped = char === '\\' && !escaped;
    if (char !== '\\') {
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
  const lines = source.split('\n');
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
        blocks.push(activeLines.join('\n').trim());
      }
      activeLines = [line];
    } else if (activeLines !== null && isHeaderCandidate) {
      blocks.push(activeLines.join('\n').trim());
      activeLines = null;
    } else if (activeLines !== null) {
      activeLines.push(line);
    }

    state = advanceTripleQuoteState(line, state);
  }

  if (activeLines !== null) {
    blocks.push(activeLines.join('\n').trim());
  }

  return blocks;
}

function parseStringAssignment(value, key) {
  const match = new RegExp('^\\s*' + key + '\\s*=\\s*(["\\'])([^"\\']+)\\1\\s*$').exec(value);
  return match ? match[2] : null;
}

function parseTomlStringArray(value) {
  const match = /^\s*args\s*=\s*\[(.*)\]\s*$/ms.exec(value.trim());

  if (match === null) {
    return null;
  }

  const body = match[1] ?? '';
  const values = [];
  let cursor = 0;
  let expectValue = true;

  while (cursor < body.length) {
    while (cursor < body.length && /\s/.test(body[cursor] ?? '')) {
      cursor += 1;
    }

    if (cursor >= body.length) {
      break;
    }

    if (!expectValue) {
      if (body[cursor] !== ',') {
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
    let token = '';
    let escaped = false;

    while (cursor < body.length) {
      const char = body[cursor] ?? '';

      if (char === quote && !escaped) {
        cursor += 1;
        values.push(token);
        break;
      }

      token += char;
      escaped = char === '\\' && !escaped;
      if (char !== '\\') {
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
  if (leftover === ',') {
    return values;
  }

  return leftover.length === 0 ? values : null;
}

function collectArrayLines(lines, startIndex) {
  const collected = [stripCommentOutsideStrings(lines[startIndex] ?? '')];
  let bracketDepth = 0;
  let inSingle = false;
  let inDouble = false;
  let escaped = false;

  for (let lineIndex = startIndex; lineIndex < lines.length; lineIndex += 1) {
    const sanitized = stripCommentOutsideStrings(lines[lineIndex] ?? '');
    if (lineIndex !== startIndex) {
      collected.push(sanitized);
    }

    for (let index = 0; index < sanitized.length; index += 1) {
      const char = sanitized[index] ?? '';

      if (char === '"' && !inSingle && !escaped) {
        inDouble = !inDouble;
      } else if (char === "'" && !inDouble && !escaped) {
        inSingle = !inSingle;
      } else if (!inSingle && !inDouble) {
        if (char === '[') {
          bracketDepth += 1;
        } else if (char === ']') {
          bracketDepth -= 1;
        }
      }

      escaped = char === '\\' && !escaped;
      if (char !== '\\') {
        escaped = false;
      }
    }

    if (bracketDepth <= 0) {
      return {
        nextIndex: lineIndex,
        text: collected.join('\n'),
      };
    }
  }

  return null;
}

function parseCodexBlock(blockContent) {
  const lines = blockContent.split('\n');
  let command = null;
  let args = null;
  let hasConflict = false;
  let inTripleDouble = false;
  let inTripleSingle = false;

  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index] ?? '';
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
      const parsedCommand = parseStringAssignment(trimmed, 'command');
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

  for (const line of source.split('\n')) {
    tripleState = advanceTripleQuoteState(line, tripleState);

    for (let index = 0; index < line.length; index += 1) {
      const char = line[index] ?? '';

      if (!inSingle && !inDouble && char === '#') {
        break;
      }

      if (char === '"' && !inSingle && !escaped) {
        inDouble = !inDouble;
      } else if (char === "'" && !inDouble && !escaped) {
        inSingle = !inSingle;
      } else if (!inSingle && !inDouble) {
        if (char === '[') {
          bracketDepth += 1;
        } else if (char === ']') {
          bracketDepth -= 1;
          if (bracketDepth < 0) {
            return false;
          }
        } else if (char === '{') {
          braceDepth += 1;
        } else if (char === '}') {
          braceDepth -= 1;
          if (braceDepth < 0) {
            return false;
          }
        }
      }

      escaped = char === '\\' && !escaped;
      if (char !== '\\') {
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
  const source = fs.readFileSync(configPath, 'utf8');
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
'@
        return $LASTEXITCODE -eq 0
    }
    finally {
        Remove-Item Env:\MCP_CODEX_CONFIG_PATH -ErrorAction SilentlyContinue
    }
}

# Add MCP server to JSON config file (PowerShell 5.1 compatible — edits JSON via node)
function Add-McpToConfig($configPath) {
    $parentDir = Split-Path $configPath -Parent
    if (-not (Test-Path $parentDir)) { New-Item -ItemType Directory -Path $parentDir -Force | Out-Null }
    $env:MCP_CONFIG_PATH = $configPath
    try {
        node --input-type=commonjs -e @"
const fs = require('fs');
const configPath = process.env.MCP_CONFIG_PATH;
let config = {};
try { config = JSON.parse(fs.readFileSync(configPath, 'utf8')); } catch {}
if (!config.mcpServers) config.mcpServers = {};
config.mcpServers['weppy-roblox-mcp'] = { command: 'npx', args: ['-y', '@weppy/roblox-mcp'] };
fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n');
"@
    } finally {
        Remove-Item Env:\MCP_CONFIG_PATH -ErrorAction SilentlyContinue
    }
}

# ── Header ──
Write-Host ""
Write-Host "WEPPY Installer" -ForegroundColor White -BackgroundColor DarkCyan
Write-Host "AI-powered Roblox Studio integration" -ForegroundColor DarkGray
Write-Host ("=" * 40)

# ── Node.js check ──
try {
    $nodeVersion = (node -v) -replace 'v', ''
    $majorVersion = [int]($nodeVersion.Split('.')[0])
    if ($majorVersion -lt 18) {
        Abort-Install "Node.js 18 or higher required (current: v$nodeVersion). Upgrade: https://nodejs.org"
    }
    Write-Ok "Node.js v$nodeVersion detected"
}
catch {
    Abort-Install "Node.js is not installed. Install Node.js 18+: https://nodejs.org"
}

# ═══════════════════════════════════
# [1/2] Setup — Roblox Studio Plugin
# ═══════════════════════════════════
Write-Step "1/2" "Setup Roblox Studio Plugin"

if (Confirm-Action "  Run npx -y @weppy/roblox-mcp --setup?") {
    try {
        $npmCommandPath = Resolve-NpmCommand
        $npmDir = Split-Path $npmCommandPath -Parent
        $npxPath = Join-Path $npmDir "npx.cmd"
        if (-not (Test-Path $npxPath)) {
            $npxPath = "npx"
        }
        & $npxPath -y --package=@weppy/roblox-mcp weppy-roblox-mcp --setup
        if ($LASTEXITCODE -ne 0) {
            Write-Warn "Setup encountered a warning (non-blocking)"
        } else {
            Write-Ok "Setup complete"
        }
    }
    catch {
        Write-Warn "Setup encountered a warning: $_"
    }
}
else {
    Write-Warn "Setup skipped"
}

# ═══════════════════════════════════
# [2/2] Register MCP with AI apps
# ═══════════════════════════════════
Write-Step "2/2" "Register MCP with AI apps"
Write-Host "  Automatic registration: Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity"

$detectedNames = @()
$detectedTypes = @()
$notDetected = @()

$claudeProjectConfig = Join-Path (Get-Location).Path '.mcp.json'
$claudeGlobalConfig = Join-Path $env:USERPROFILE '.claude\mcp.json'
$claudeCodeConfigured = (Test-McpJsonConfigured $claudeProjectConfig) -or (Test-McpJsonConfigured $claudeGlobalConfig)
$claudeCodeCliCommand = Resolve-OptionalCliCommand 'claude'

if ($claudeCodeConfigured) {
    $detectedNames += 'Claude Code (configured)'
    $detectedTypes += 'claude-code'
}
elseif ($claudeCodeCliCommand) {
    $detectedNames += 'Claude Code (CLI)'
    $detectedTypes += 'claude-code'
}
else {
    $notDetected += 'Claude Code (not found)'
}

# Claude Desktop
$claudeDesktopConfig = Join-Path $env:APPDATA "Claude\claude_desktop_config.json"
if (Test-Path $claudeDesktopConfig) {
    $detectedNames += "Claude Desktop"
    $detectedTypes += "claude-desktop"
}
else {
    $notDetected += "Claude Desktop (config not found)"
}

# Cursor (detect only when mcp.json or binary exists)
$cursorDir = Join-Path $env:USERPROFILE ".cursor"
if ((Test-Path (Join-Path $cursorDir "mcp.json")) -or (Get-Command cursor -ErrorAction SilentlyContinue)) {
    $detectedNames += "Cursor"
    $detectedTypes += "cursor"
}
else {
    $notDetected += "Cursor (not found)"
}

$codexConfig = Join-Path $env:USERPROFILE '.codex\config.toml'
$codexConfigured = Test-CodexConfigConfigured $codexConfig
$codexCliCommand = Resolve-OptionalCliCommand 'codex'

if ($codexConfigured) {
    $detectedNames += 'Codex CLI/App (configured)'
    $detectedTypes += 'codex-cli'
}
elseif ($codexCliCommand) {
    $detectedNames += 'Codex CLI/App'
    $detectedTypes += 'codex-cli'
}
else {
    $notDetected += 'Codex CLI/App (not found)'
}

# Gemini CLI
$geminiConfig = Join-Path $env:USERPROFILE '.gemini\settings.json'
$geminiConfigured = Test-McpJsonConfigured $geminiConfig
$geminiCliCommand = Resolve-OptionalCliCommand 'gemini'

if ($geminiConfigured) {
    $detectedNames += 'Gemini CLI (configured)'
    $detectedTypes += "gemini-cli"
}
elseif ($geminiCliCommand) {
    $detectedNames += "Gemini CLI"
    $detectedTypes += "gemini-cli"
}
else {
    $notDetected += "Gemini CLI (not found)"
}

# Antigravity (unofficial path, auto-register if found)
$antigravityConfig = Join-Path $env:USERPROFILE '.gemini\antigravity\mcp_config.json'
$antigravityConfigured = Test-AntigravityMcpConfigured $antigravityConfig
$antigravityDirExists = Test-Path (Join-Path $env:USERPROFILE '.gemini\antigravity')

if ($antigravityConfigured) {
    $detectedNames += 'Antigravity (configured)'
    $detectedTypes += 'antigravity'
}
elseif ((Test-Path $antigravityConfig) -or $antigravityDirExists) {
    $detectedNames += 'Antigravity'
    $detectedTypes += 'antigravity'
}
else {
    $notDetected += 'Antigravity (not found)'
}

if ($detectedNames.Count -eq 0) {
    Write-Warn "No AI apps detected"
    Write-Info "Register MCP server manually: npx -y @weppy/roblox-mcp"
}
else {
    Write-Host ""
    Write-Host "  Detected:" -ForegroundColor White
    for ($i = 0; $i -lt $detectedNames.Count; $i++) {
        Write-Host "    $($i + 1). $($detectedNames[$i])" -ForegroundColor Green
    }

    if ($notDetected.Count -gt 0) {
        Write-Host ""
        Write-Host "  Not detected:" -ForegroundColor DarkGray
        foreach ($item in $notDetected) {
            Write-Host "    - $item" -ForegroundColor DarkGray
        }
    }

    Write-Host ""
    if ($env:CI -eq 'true') {
        Write-Host "  Select apps to register (comma-separated, 'a' for all, 'n' to skip): a"
        $selection = 'a'
    } else {
        $selection = Read-Host "  Select apps to register (comma-separated, 'a' for all, 'n' to skip)"
    }
    if ([string]::IsNullOrWhiteSpace($selection)) { $selection = "n" }

    $selectedIndices = @()
    switch -Regex ($selection) {
        '^[Nn]$' { Write-Warn "MCP registration skipped" }
        '^[Aa]$' { $selectedIndices = 0..($detectedNames.Count - 1) }
        default {
            foreach ($part in ($selection -split ',')) {
                $part = $part.Trim()
                if ($part -match '^\d+$') {
                    $idx = [int]$part - 1
                    if ($idx -ge 0 -and $idx -lt $detectedNames.Count) {
                        $selectedIndices += $idx
                    }
                }
            }
        }
    }

    foreach ($idx in $selectedIndices) {
        $appType = $detectedTypes[$idx]
        $appName = $detectedNames[$idx]

        try {
            switch ($appType) {
                "claude-code" {
                    if ($claudeCodeConfigured) {
                        Write-Ok "Already configured: $appName"
                    }
                    elseif ($claudeCodeCliCommand) {
                        & $claudeCodeCliCommand mcp add weppy-roblox-mcp -- npx -y "@weppy/roblox-mcp"
                        if ($LASTEXITCODE -ne 0) {
                            # CLI 실패 시 (Windows에서 -- 파싱 문제 등) JSON config에 직접 쓰기로 폴백
                            Add-McpToConfig $claudeGlobalConfig
                        }
                        Write-Ok "Registered: $appName"
                    }
                    else {
                        Write-Fail "Failed: $appName (CLI/config unavailable)"
                    }
                }
                "claude-desktop" {
                    Add-McpToConfig $claudeDesktopConfig
                    Write-Ok "Registered: $appName"
                }
                "cursor" {
                    $cursorConfig = Join-Path $env:USERPROFILE ".cursor\mcp.json"
                    Add-McpToConfig $cursorConfig
                    Write-Ok "Registered: $appName"
                }
                "codex-cli" {
                    if ($codexConfigured) {
                        Write-Ok "Already configured: $appName"
                    }
                    elseif ($codexCliCommand) {
                        try { & $codexCliCommand mcp remove weppy-roblox-mcp *> $null } catch {}
                        & $codexCliCommand mcp add weppy-roblox-mcp -- npx -y "@weppy/roblox-mcp"
                        if ($LASTEXITCODE -ne 0) {
                            throw 'codex mcp add failed'
                        }
                        Write-Ok "Registered: $appName"
                    }
                    else {
                        Write-Fail "Failed: $appName (CLI/config unavailable)"
                    }
                }
                "gemini-cli" {
                    if ($geminiConfigured) {
                        Write-Ok "Already configured: $appName"
                    }
                    else {
                        Add-McpToConfig $geminiConfig
                        Write-Ok "Registered: $appName"
                    }
                }
                "antigravity" {
                    if ($antigravityConfigured) {
                        Write-Ok "Already configured: $appName"
                    }
                    else {
                        Add-AntigravityMcpConfig $antigravityConfig
                        Write-Ok "Registered: $appName"
                    }
                }
            }
        }
        catch {
            Write-Fail "Failed: $appName ($_)"
        }
    }
}

# ═══════════════════════════════════
# Installation summary
# ═══════════════════════════════════
Write-Host ""
Write-Host ("=" * 40)
Write-Host "Installation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "  Next steps:"
Write-Host "  1. Restart Roblox Studio"
Write-Host "  2. Look for the WEPPY button in the Plugins tab"
Write-Host "  3. Click Connect and start building with AI!"
Write-Host ""
Write-Host "  Auto registration: Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity"
Write-Host ""
Write-Host "  Docs: https://github.com/hope1026/weppy-roblox-mcp" -ForegroundColor DarkGray
Write-Host ""

Stop-InstallTranscript
