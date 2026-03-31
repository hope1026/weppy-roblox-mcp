#
# WROX — One-line install script (Windows PowerShell)
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
$script:InstallLogPath = Join-Path ([System.IO.Path]::GetTempPath()) ("wrox-install-{0:yyyyMMdd-HHmmss}.log" -f (Get-Date))
$script:TranscriptStarted = $false
$script:NpmCommandPath = $null
$script:NpmGlobalPrefix = $null

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

function Get-NpmGlobalPrefix() {
    if ($script:NpmGlobalPrefix) {
        return $script:NpmGlobalPrefix
    }

    $script:NpmGlobalPrefix = (Invoke-Npm prefix -g 2>$null | Out-String).Trim()
    return $script:NpmGlobalPrefix
}

function Invoke-Npm {
    param(
        [Parameter(ValueFromRemainingArguments = $true)]
        [string[]]$Args
    )

    $npmCommandPath = Resolve-NpmCommand
    $output = & $npmCommandPath @Args
    if ($LASTEXITCODE -ne 0) {
        throw "npm $($Args -join ' ') failed with exit code $LASTEXITCODE"
    }

    return $output
}

function Resolve-OptionalCliCommand($commandName) {
    $resolvedCommand = Get-Command $commandName -ErrorAction SilentlyContinue
    if ($resolvedCommand) {
        return $resolvedCommand.Source
    }

    $candidatePaths = @()
    $npmPrefix = Get-NpmGlobalPrefix
    if ($npmPrefix) {
        $candidatePaths += (Join-Path $npmPrefix "$commandName.cmd")
        $candidatePaths += (Join-Path $npmPrefix $commandName)
    }

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

function Test-CodexConfigConfigured($configPath) {
    if (-not (Test-Path $configPath)) {
        return $false
    }

    return Select-String -Path $configPath -Pattern '^\s*\[mcp_servers\.weppy-roblox-mcp\]\s*$' -Quiet
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

function Test-LfsPointer($filePath) {
    if (-not (Test-Path $filePath)) { return $false }
    return Select-String -Path $filePath -Pattern "git-lfs.github.com/spec/v1" -Quiet
}

# ── Header ──
Write-Host ""
Write-Host "WROX Installer" -ForegroundColor White -BackgroundColor DarkCyan
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
# [1/3] MCP server install
# ═══════════════════════════════════
Write-Step "1/3" "Install @weppy/roblox-mcp via npm"

if (Confirm-Action "  Run npm install -g @weppy/roblox-mcp?") {
    try {
        Invoke-Npm install -g "@weppy/roblox-mcp"
        Write-Ok "Installed @weppy/roblox-mcp"
    }
    catch {
        Abort-Install "npm install failed: $_"
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
$npmPrefix = Get-NpmGlobalPrefix
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
    if (Test-LfsPointer $bundledPlugin) {
        Abort-Install "Bundled plugin payload is invalid (Git LFS pointer detected). Install the plugin from the GitHub release ZIP instead."
    }

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
Write-Host "  Automatic registration: Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI"
Write-Host "  Manual setup required: Codex App, Antigravity"

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
    $detectedNames += 'Codex CLI (configured)'
    $detectedTypes += 'codex-cli'
}
elseif ($codexCliCommand) {
    $detectedNames += 'Codex CLI'
    $detectedTypes += 'codex-cli'
}
else {
    $notDetected += 'Codex CLI (not found)'
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
                    if ($claudeCodeConfigured) {
                        Write-Ok "Already configured: $appName"
                    }
                    elseif ($claudeCodeCliCommand) {
                        & $claudeCodeCliCommand mcp add weppy-roblox-mcp -- npx -y "@weppy/roblox-mcp"
                        if ($LASTEXITCODE -ne 0) {
                            throw 'claude mcp add failed'
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
Write-Host "  2. Look for the WROX button in the Plugins tab"
Write-Host "  3. Click Connect and start building with AI!"
Write-Host ""
Write-Host "  Auto registration: Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI"
Write-Host "  Manual setup required: Codex App, Antigravity"
Write-Host ""
Write-Host "  Docs: https://github.com/hope1026/weppy-roblox-mcp" -ForegroundColor DarkGray
Write-Host ""

Stop-InstallTranscript
