# Roblox MCP — MCP Server for Roblox Studio | AI Game Development with Claude, Codex, Cursor & Gemini

> **WROX** is an MCP server that lets AI coding agents control a live Roblox Studio session — create and edit scripts, instances, terrain, lighting, assets, audio, and animations via natural language.

**Action-based tool surface · Bidirectional sync · Automated playtest · Multi-place support**

**English** | [한국어](docs/ko/README.md) | [日本語](docs/ja/README.md) | [Español](docs/es/README.md) | [Português](docs/pt-br/README.md) | [Bahasa Indonesia](docs/id/README.md)

[![Demo — AI building a Roblox game in real time](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Why WROX (Weppy Roblox MCP)?

AI coding agents like Claude, Codex, and Gemini are powerful — but they cannot see or modify anything inside Roblox Studio. The DataModel, scripts, terrain, and lighting are all invisible to external tools. Without a bridge, AI can only generate code snippets that you must paste manually.

**WROX** is a bridge between AI agents and Roblox Studio. AI directly creates and modifies instances, scripts, properties, terrain, and more inside Studio, and the changes are reflected immediately in Studio and the dashboard so you can **see exactly what changed**.

No copy-pasting code. AI does the work, you review the results.

## Quick Install

**One-line install** — installs the MCP server, Roblox Studio plugin, and registers with your AI apps:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Then restart Roblox Studio — done!

Automatic MCP registration currently supports **Claude Code, Claude Desktop, Cursor, Codex CLI, and Gemini CLI**.
**Codex App** and **Antigravity** still require manual setup after the script finishes.

If PowerShell execution is blocked on Windows, use the manual install path below. If you're using the ZIP package, you can run `setup-plugin.sh` / `setup-mcp.sh` on macOS or Linux, or `setup-plugin.bat` / `setup-mcp.bat` on Windows.

### Manual Install

If the one-line install does not work, or automatic installation is not available in your environment, use the manual install path below.

**Step 1** — Install the Roblox Studio plugin (bridge between Studio and AI):
[Plugin Installation Guide](docs/en/installation/roblox-plugin.md)

**Step 2** — Register the MCP server with your AI app:

```bash
npx -y @weppy/roblox-mcp
```

| AI App | Guide |
|--------|-------|
| Claude Code | [Setup](docs/en/installation/ai-apps/claude-code.md) |
| Claude Desktop | [Setup](docs/en/installation/ai-apps/claude-app.md) |
| Cursor | [Setup](docs/en/installation/ai-apps/cursor.md) |
| Codex CLI | [Setup](docs/en/installation/ai-apps/codex-cli.md) |
| Codex Desktop | [Setup](docs/en/installation/ai-apps/codex-app.md) |
| Gemini CLI | [Setup](docs/en/installation/ai-apps/gemini-cli.md) |
| Antigravity | [Setup](docs/en/installation/ai-apps/antigravity.md) |

> Any MCP-compatible AI client works. The server command is `npx -y @weppy/roblox-mcp`.

## Compatibility

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI | Antigravity |
|:-----------:|:--------------:|:------:|:---------:|:----------:|:-----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**Requirements:** Node.js 18+, Roblox Studio, Windows 10+ or macOS 12+

## What It Does

### 1) MCP Tools: Direct execution in Studio from natural language

AI can directly handle scripts, instances, properties, terrain, lighting, assets, audio, and animation inside Studio.

- "Add particles + sound + cooldown when the player jumps."
- "Build a boss arena at map center and place collision-safe spawn points."
- "Change this module interface and update every dependent script."
- "Generate terrain with mountains and rivers, then place spawn points on flat areas."
- "Search the Creator Store for a sword model and insert it into StarterPack."

### 2) Sync: Keep full project context stable for AI

AI works from a synchronized local mirror, so multi-file updates stay consistent.

- Basic: one-way sync (Studio -> Local)
- Pro: bidirectional sync + per-type Direction/Apply Mode + history + multi-place

![Sync workflow — Studio and local files synchronized in real time](docs/assets/screenshots/plugin/sync/sync-overview.png)

### 3) Playtest: Let AI run and verify tests automatically

AI can control Roblox Studio playtests directly. It can start and stop Play (F5) or Run (F8), inject test scripts, collect logs, and generate local reports automatically.

- "Start a Run-mode playtest and check whether the NPC reaches the target."
- "Write a test that verifies the SpawnLocation is above the ground and run it."
- "Validate that the script I just changed runs without errors in playtest."

![WROX Playtest Dashboard — Test history and detailed report](docs/assets/screenshots/dashboard/dashboard_playtest.png)

### 4) WROX Dashboard: Monitor AI work in real time

The MCP server provides a web dashboard where you can check connection status, tool execution history, sync state, and game change logs in real time.

- Server/Plugin/Agent connection status at a glance
- Compare every change the AI made via Before & After in Changelog
- Analyze workflow with tool execution history and statistics

![WROX WROX Dashboard Overview — Server status, recent changes, and session summary](docs/assets/screenshots/dashboard/dashboard_overview.png)

### 5) WROX Roblox Explorer: Browse Studio hierarchy in VSCode

View the full instance tree of your Roblox Studio place directly inside VSCode. Navigate services, open synced scripts and property files, and track sync status — all without switching to Studio.
WROX Roblox Explorer is a companion VSCode extension for sync data generated by WROX. Tree browsing works from synced files, and live sync state or direction indicators are enhanced when the local MCP server is running.
Install from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) or [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer).

- Class icons matching Studio for instant recognition
- Click to open synced scripts and property files
- Multi-place support with sync status indicators

![WROX Roblox Explorer — Studio instance tree displayed in VSCode sidebar](docs/assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Use Cases

- **Rapid prototyping**: Describe a game mechanic in natural language and watch AI build it in Studio
- **Bulk refactoring**: Rename a module interface and update every dependent script in one request
- **Terrain & environment**: Generate procedural terrain, set lighting/atmosphere, place assets — all from a single prompt
- **Multi-file consistency**: AI reads the full project via Sync and applies changes across related scripts together
- **Asset integration**: Search the Creator Store, insert models, and configure properties without leaving your editor

## Why It Matters

- Compress repetitive work: turn many manual edits into one request
- Change related files together: not just one target file
- Lower risk: rely on sync state and history before applying changes
- Better token efficiency (Pro): reduce round trips with bulk actions

## Docs

- [Installation Guide](docs/en/installation/README.md)
- [Tools Reference](docs/en/tools/overview.md)
- [Sync Deep Dive](docs/en/sync/overview.md)
- [WROX Dashboard Guide](docs/en/dashboard/overview.md)
- [WROX Roblox Explorer (VSCode Extension)](docs/en/installation/roblox-explorer.md)
- [Compatibility](docs/compatibility.md)
- [Troubleshooting](docs/troubleshooting.md)

### Workflow Guides

- [Instances & Properties](docs/en/tools/instances-and-properties.md) - search, creation, editing, tags
- [Scripting & Code Execution](docs/en/tools/scripting.md) - script management and Luau execution
- [World & Environment](docs/en/tools/world-and-environment.md) - lighting, terrain, camera
- [Assets & Effects](docs/en/tools/assets-and-effects.md) - asset insertion, tweening, effects
- [Playtest & Automated Tests](docs/en/tools/playtest.md) - playtest control and automated validation
- [System & Debugging](docs/en/tools/system-and-debugging.md) - connection, logs, batch execution

## FAQ

### How do I connect Claude Code to Roblox Studio?
Install the Roblox Studio plugin, then register the MCP server (`npx -y @weppy/roblox-mcp`) in Claude Code. Claude can then directly read and write scripts inside Studio. See [Claude Code Setup](docs/en/installation/ai-apps/claude-code.md).

### How do I use Codex CLI with Roblox Studio?
Install the plugin, then add the MCP server config to Codex CLI. See [Codex CLI Setup](docs/en/installation/ai-apps/codex-cli.md).

### Does Roblox MCP work with Cursor?
Yes. See [Cursor Setup](docs/en/installation/ai-apps/cursor.md). Any MCP-compatible AI client works.

### Can AI build Roblox games with this?
Yes. AI can create instances, write scripts, generate terrain, set up lighting, insert assets, configure physics, and more — all inside a live Roblox Studio session. It goes beyond code generation to executable actions.

### What is the difference between Basic and Pro?
Basic (Free) includes MCP tool execution and one-way sync (Studio -> Local). Pro adds bidirectional sync, bulk operations, terrain generation, spatial analysis, audio/animation control, and multi-place support. See the [Pro Upgrade Guide](docs/en/pro-upgrade.md).

### How is Weppy different from other Roblox MCP servers?
Weppy uses action-based dispatching instead of separate tools for each function. This reduces AI token consumption significantly. It also provides bidirectional project sync and multi-place support, which most alternatives lack.

### Is it safe? Can AI break my game?
The server runs on localhost only (127.0.0.1:3002). Forbidden paths (CoreGui, CorePackages) are blocked. Rate limiting (450 req/min) and 30-second timeouts prevent runaway operations. All changes are trackable via sync history.

## Pro Upgrade

Bidirectional Sync, advanced build capabilities, and AI token efficiency — all in one upgrade.

[Pro Upgrade Guide](docs/en/pro-upgrade.md)

## License

This repository is licensed under `AGPL-3.0`.

Commercial licensing is available separately. See [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md).

Use of the Weppy name and logos is governed by [TRADEMARKS.md](TRADEMARKS.md).

---

[![npm version](https://img.shields.io/npm/v/@weppy/roblox-mcp)](https://www.npmjs.com/package/@weppy/roblox-mcp) [![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/) [![Smithery](https://smithery.ai/badge/@hope1026/weppy-roblox-mcp)](https://smithery.ai/server/@hope1026/weppy-roblox-mcp)

[![Roblox MCP on Glama](https://glama.ai/mcp/servers/hope1026/roblox-mcp/badges/card.svg)](https://glama.ai/mcp/servers/hope1026/roblox-mcp)

[GitHub Issues](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
