# Roblox MCP - MCP Server for Roblox Studio | AI Game Development with Claude, Codex, Cursor & Gemini

> **WEPPY** is an MCP server that lets AI coding agents control a live Roblox Studio session - create and edit scripts, instances, terrain, lighting, assets, audio, and animations through natural language.

**Action-based tool surface · Bidirectional sync · Automated playtest · UI Studio · Multi-place support**

**English** | [한국어](https://weppyai.com/ko) | [日本語](https://weppyai.com/ja) | [Español](https://weppyai.com/es) | [Português](https://weppyai.com/pt-br) | [Bahasa Indonesia](https://weppyai.com/id) | [Deutsch](https://weppyai.com/de)

[![Demo - AI building a Roblox game in real time](https://img.youtube.com/vi/puQB4u1VlMw/maxresdefault.jpg)](https://youtu.be/puQB4u1VlMw)

## Why WEPPY (Weppy Roblox MCP)?

AI coding agents like Claude, Codex, and Gemini are powerful, but they cannot see or modify anything inside Roblox Studio. The DataModel, scripts, terrain, and lighting are invisible to external tools. Without a bridge, AI can only generate code snippets that you must paste manually.

**WEPPY** bridges AI agents and Roblox Studio. AI directly creates and modifies instances, scripts, properties, terrain, and more inside Studio, and the changes are reflected immediately in Studio and the dashboard so you can see exactly what changed.

No copy-pasting code. AI does the work, you review the results.

## Quick Install

Install with the guided web page.

👉 **[Install Page](https://weppyai.com/en/install)**

### Terminal One-Line Install

If you're comfortable with the terminal, install everything in one line.

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Then reopen your AI app and restart Roblox Studio.

Automatic MCP registration supports Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, and Antigravity.
For Claude Code, the installer also tries to add and install the WEPPY AI Agent Plugin. For Codex, it adds the WEPPY AI Agent Plugin marketplace and then asks you to install WEPPY Roblox MCP from Plugin Directory.

### Manual Install

If the one-line install does not work, or automatic installation is not available in your environment:

**Step 1** - Use the web install page for the Roblox Studio plugin and app-specific setup.

👉 **[Web Install Page](https://weppyai.com/en/install)**

**Step 2** - Register the MCP server with your AI app:

```bash
npx -y @weppy/roblox-mcp@latest
```

Supported AI apps are Claude Code, Claude Desktop, Cursor, Codex CLI, Codex App, Gemini CLI, and Antigravity.

> Any MCP-compatible AI client works. The server command is `npx -y @weppy/roblox-mcp@latest`.

### Optional WEPPY AI Agent Plugin

Claude Code and Codex can also use the WEPPY AI Agent Plugin. The MCP server command above is enough to use WEPPY; the plugin adds client-native setup and workflow guidance.

**Claude Code**

```bash
claude plugin marketplace add hope1026/weppy-roblox-mcp --scope user
claude plugin install weppy-roblox-mcp@hope1026-roblox-mcp --scope user
```

**Codex**

```bash
codex plugin marketplace add hope1026/weppy-roblox-mcp
```

After adding the Codex marketplace, restart Codex, open Plugin Directory, and install **WEPPY Roblox MCP**.

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

![Sync workflow - Studio and local files synchronized in real time](https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/docs/assets/screenshots/plugin/sync/sync-overview.png)

### 3) Playtest: Let AI run and verify tests automatically

AI can control Roblox Studio playtests directly. It can start and stop Play (F5) or Run (F8), inject test scripts, collect logs, and generate local reports automatically.

- "Start a Run-mode playtest and check whether the NPC reaches the target."
- "Write a test that verifies the SpawnLocation is above the ground and run it."
- "Validate that the script I just changed runs without errors in playtest."

![WEPPY Playtest Dashboard - Test history and detailed report](https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/docs/assets/screenshots/dashboard/dashboard_playtest.png)

### 4) UI Studio: Build and inspect in-game UI

UI Studio lets AI agents create in-game UI that matches your game's style, or analyze the UI you already have and suggest improvements.

- Clarify the UI goal with guided questions about purpose, screen, target devices, and visual direction
- Create or refine game-style menus, HUDs, buttons, labels, image panels, and other Roblox UI elements directly in Studio
- Capture the result, compare before/after changes, and follow dashboard suggestions for layout, readability, touch targets, and safe areas

![WEPPY UI Studio - Roblox Studio showing AI-generated in-game UI](https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/docs/assets/screenshots/dashboard/dashboard_ui_roblox_studio.png)

### 5) WEPPY Dashboard: Monitor AI work in real time

The MCP server provides a web dashboard where you can check connection status, tool execution history, sync state, UI Studio history, and game change logs in real time.

- Server/Plugin/Agent connection status at a glance
- Compare every change the AI made via Before & After in Changelog
- Analyze workflow with tool execution history, UI Studio captures, and statistics

![WEPPY Dashboard Overview - Server status, recent changes, and session summary](https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/docs/assets/screenshots/dashboard/dashboard_overview.png)

### 6) WEPPY Roblox Explorer: Browse Studio hierarchy in VSCode

View the full instance tree of your Roblox Studio place directly inside VSCode. Navigate services, open synced scripts and property files, and track sync status - all without switching to Studio.
WEPPY Roblox Explorer is a companion VSCode extension for sync data generated by WEPPY. Tree browsing works from synced files, and live sync state or direction indicators are enhanced when the local MCP server is running.
Install from [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) or [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer).

- Class icons matching Studio for instant recognition
- Click to open synced scripts and property files
- Multi-place support with sync status indicators

![WEPPY Roblox Explorer - Studio instance tree displayed in VSCode sidebar](https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/docs/assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Use Cases

- **Rapid prototyping**: Describe a game mechanic in natural language and watch AI build it in Studio
- **Bulk refactoring**: Rename a module interface and update every dependent script in one request
- **Terrain & environment**: Generate procedural terrain, set lighting/atmosphere, place assets - all from a single prompt
- **UI design**: Generate in-game UI, capture previews, and iterate on Design Check suggestions
- **Multi-file consistency**: AI reads the full project via Sync and applies changes across related scripts together
- **Asset integration**: Search the Creator Store, insert models, and configure properties without leaving your editor

## Why It Matters

- Compress repetitive work: turn many manual edits into one request
- Change related files together: not just one target file
- Lower risk: rely on sync state and history before applying changes
- Better token efficiency (Pro): reduce round trips with bulk actions

## Docs

Detailed guides and app-specific setup now live on the web.

- [Web Docs Hub](https://weppyai.com/ko/docs)
- [Install Guide](https://weppyai.com/en/install)
- [Pro Upgrade](https://weppyai.com/en/plans)

For app setup details, open the web docs hub and choose the relevant AI client guide.

## FAQ

### How do I connect Claude Code to Roblox Studio?
Install from the web install page or add the WEPPY AI Agent Plugin for Claude Code with the commands above. The WEPPY AI Agent Plugin uses `npx -y @weppy/roblox-mcp@latest` as the MCP server command.

### How do I use Codex CLI with Roblox Studio?
Install the Roblox Studio plugin, then add the MCP server config to Codex CLI. You can also add the Codex plugin marketplace and install WEPPY Roblox MCP from Plugin Directory.

### Does Roblox MCP work with Cursor?
Yes. Any MCP-compatible AI client works.

### Can AI build Roblox games with this?
Yes. AI can create instances, write scripts, generate terrain, set up lighting, insert assets, configure physics, and more - all inside a live Roblox Studio session. It goes beyond code generation to executable actions.

### What is the difference between Basic and Pro?
Basic (Free) includes MCP tool execution and one-way sync (Studio -> Local). Pro adds bidirectional sync, UI Studio, bulk operations, terrain generation, spatial analysis, audio/animation control, and multi-place support. See the Pro upgrade page.

### How is Weppy different from other Roblox MCP servers?
Weppy uses action-based dispatching instead of separate tools for each function. This reduces AI token consumption significantly. It also provides bidirectional project sync and multi-place support, which most alternatives lack.

### Is it safe? Can AI break my game?
The server runs on localhost only (127.0.0.1:3002). Forbidden paths (CoreGui, CorePackages) are blocked. Rate limiting (450 req/min) and 30-second timeouts prevent runaway operations. All changes are trackable via sync history.

## Pro Upgrade

Bidirectional Sync, UI Studio, advanced build capabilities, and AI token efficiency - all in one upgrade.

[Pro Upgrade Guide](https://weppyai.com/en/plans)

## License

This repository is licensed under `AGPL-3.0`.

Commercial licensing is available separately. See [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md).

Use of the Weppy name and logos is governed by [TRADEMARKS.md](TRADEMARKS.md).

---

[![npm version](https://img.shields.io/npm/v/@weppy/roblox-mcp)](https://www.npmjs.com/package/@weppy/roblox-mcp) [![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/) [![Smithery](https://smithery.ai/badge/@hope1026/weppy-roblox-mcp)](https://smithery.ai/server/@hope1026/weppy-roblox-mcp)

[![Roblox MCP on Glama](https://glama.ai/mcp/servers/hope1026/roblox-mcp/badges/card.svg)](https://glama.ai/mcp/servers/hope1026/roblox-mcp)

[GitHub Issues](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
