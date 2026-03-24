#
# Weppy Roblox MCP — One-line install script (Windows PowerShell)
#
# Usage:
#   irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
#
# Interactive 3 steps:
#   [1/3] MCP server install (npm)
#   [2/3] Roblox Studio Plugin install (.rbxm)
#   [3/3] Register MCP with AI apps (user selection)
#

$ErrorActionPreference = "Stop"

# ── Utilities ──
function Write-Step($step, $msg) { Write-Host "`n[$step] $msg" -ForegroundColor Cyan -NoNewline; Write-Host "" }
function Write-Ok($msg) { Write-Host "  ✓ $msg" -ForegroundColor Green }
function Write-Warn($msg) { Write-Host "  ⚠ $msg" -ForegroundColor Yellow }
function Write-Fail($msg) { Write-Host "  ✗ $msg" -ForegroundColor Red }
function Write-Info($msg) { Write-Host "  [INFO] $msg" -ForegroundColor Blue }

function Confirm-Action($prompt) {
    $reply = Read-Host "$prompt (Y/n)"
    if ([string]::IsNullOrWhiteSpace($reply)) { $reply = "Y" }
    return $reply -match '^[Yy]'
}

# Add MCP server to JSON config file (PowerShell 5.1 compatible — edits JSON via node)
function Add-McpToConfig($configPath) {
    $parentDir = Split-Path $configPath -Parent
    if (-not (Test-Path $parentDir)) { New-Item -ItemType Directory -Path $parentDir -Force | Out-Null }
    $env:MCP_CONFIG_PATH = $configPath
    try {
        node -e @"
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
Write-Host "Weppy Roblox MCP Installer" -ForegroundColor White -BackgroundColor DarkCyan
Write-Host "AI-powered Roblox Studio integration" -ForegroundColor DarkGray
Write-Host ("=" * 40)

# ── Node.js check ──
try {
    $nodeVersion = (node -v) -replace 'v', ''
    $majorVersion = [int]($nodeVersion.Split('.')[0])
    if ($majorVersion -lt 18) {
        Write-Fail "Node.js 18 or higher required (current: v$nodeVersion)"
        Write-Host "  Upgrade: https://nodejs.org"
        exit 1
    }
    Write-Ok "Node.js v$nodeVersion detected"
}
catch {
    Write-Fail "Node.js is not installed"
    Write-Host "  Install Node.js 18+: https://nodejs.org"
    exit 1
}

# ═══════════════════════════════════
# [1/3] MCP server install
# ═══════════════════════════════════
Write-Step "1/3" "Install @weppy/roblox-mcp via npm"

if (Confirm-Action "  Run npm install -g @weppy/roblox-mcp?") {
    try {
        npm install -g "@weppy/roblox-mcp"
        Write-Ok "Installed @weppy/roblox-mcp"
    }
    catch {
        Write-Fail "npm install failed: $_"
        exit 1
    }
}
else {
    Write-Warn "MCP server install skipped"
}

# ═══════════════════════════════════
# [2/3] Roblox Studio Plugin install
# ═══════════════════════════════════
Write-Step "2/3" "Install Roblox Studio Plugin"

$pluginsDir = Join-Path $env:LOCALAPPDATA "Roblox\Plugins"
$pluginName = "WeppyRobloxMCP.rbxm"

# Search for .rbxm in npm global path
$npmPrefix = (npm prefix -g 2>$null).Trim()
$bundledPlugin = $null
$searchPaths = @(
    (Join-Path $npmPrefix "node_modules\@weppy\roblox-mcp\plugins\weppy-roblox-mcp\roblox-plugin\$pluginName"),
    (Join-Path $npmPrefix "node_modules\@weppy\roblox-mcp\roblox-plugin\$pluginName")
)
foreach ($p in $searchPaths) {
    if (Test-Path $p) {
        $bundledPlugin = $p
        break
    }
}

if ($bundledPlugin) {
    Write-Host "  → $pluginsDir\$pluginName"
    if (Confirm-Action "  Copy plugin to Roblox Plugins folder?") {
        if (-not (Test-Path $pluginsDir)) {
            New-Item -ItemType Directory -Path $pluginsDir -Force | Out-Null
        }
        Copy-Item $bundledPlugin -Destination (Join-Path $pluginsDir $pluginName) -Force
        Write-Ok "Plugin installed → $pluginsDir\$pluginName"
    }
    else {
        Write-Warn "Plugin install skipped"
    }
}
else {
    Write-Warn "Bundled plugin file not found"
    Write-Info "Will be installed automatically on first MCP server run"
}

# ═══════════════════════════════════
# [3/3] Register MCP with AI apps
# ═══════════════════════════════════
Write-Step "3/3" "Register MCP with AI apps"

$detectedNames = @()
$detectedTypes = @()
$notDetected = @()

# Claude Code CLI
if (Get-Command claude -ErrorAction SilentlyContinue) {
    $detectedNames += "Claude Code (CLI)"
    $detectedTypes += "claude-code"
}
else {
    $notDetected += "Claude Code CLI (not found)"
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

# Codex CLI
if (Get-Command codex -ErrorAction SilentlyContinue) {
    $detectedNames += "Codex CLI"
    $detectedTypes += "codex-cli"
}
else {
    $notDetected += "Codex CLI (not found)"
}

# Gemini CLI
if (Get-Command gemini -ErrorAction SilentlyContinue) {
    $detectedNames += "Gemini CLI"
    $detectedTypes += "gemini-cli"
}
else {
    $notDetected += "Gemini CLI (not found)"
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
    $selection = Read-Host "  Select apps to register (comma-separated, 'a' for all, 'n' to skip)"
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
                    claude mcp add weppy-roblox-mcp -- npx -y "@weppy/roblox-mcp"
                    Write-Ok "Registered: $appName"
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
                    try { codex mcp remove weppy-roblox-mcp *> $null } catch {}
                    codex mcp add weppy-roblox-mcp -- npx -y "@weppy/roblox-mcp"
                    Write-Ok "Registered: $appName"
                }
                "gemini-cli" {
                    # Config path/format is best-effort — update when CLI stabilizes
                    $geminiConfig = Join-Path $env:USERPROFILE ".gemini\settings.json"
                    Add-McpToConfig $geminiConfig
                    Write-Ok "Registered: $appName"
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
Write-Host "  2. Look for the W-MCP button in the Plugins tab"
Write-Host "  3. Click Connect and start building with AI!"
Write-Host ""
Write-Host "  Docs: https://github.com/hope1026/weppy-roblox-mcp" -ForegroundColor DarkGray
Write-Host ""
