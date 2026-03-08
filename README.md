# Roblox MCP

> The MCP server that connects AI coding agents to Roblox Studio — control scripts, terrain, assets, lighting, audio, and animations via natural language.

**English** | [한국어](docs/ko/README.md) | [日本語](docs/ja/README.md) | [Español](docs/es/README.md) | [Português](docs/pt-br/README.md) | [Bahasa Indonesia](docs/id/README.md)

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## The Problem

AI coding agents like Claude, Codex, and Gemini are powerful — but they cannot see or modify anything inside Roblox Studio. The DataModel, scripts, terrain, and lighting are all invisible to external tools. Without a bridge, AI can only generate code snippets that you must paste manually.

## The Solution

Roblox MCP provides a real-time bridge between AI agents and the Roblox Studio DataModel. It exposes the full Roblox API surface as executable MCP tools, so AI can **directly create, read, modify, and delete** instances, scripts, properties, terrain, and more — inside a live Studio session.

This is not just code generation. It is **executable, production-oriented actions** running directly in Studio.

## Quick Install (5 minutes)

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

![Sync workflow — Studio and local files synchronized in real time](docs/assets/screenshots/sync.png)

- Basic: one-way sync (Studio -> Local)
- Pro: bidirectional sync + per-type Direction/Apply Mode + history + multi-place

### 3) Roblox Explorer: Browse Studio hierarchy in VSCode

View the full instance tree of your Roblox Studio place directly inside VSCode. Navigate services, open synced scripts and property files, and track sync status — all without switching to Studio.

![Roblox Explorer — Studio instance tree displayed in VSCode sidebar](docs/assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Class icons matching Studio for instant recognition
- Click to open synced scripts and property files
- Multi-place support with sync status indicators

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
- [Roblox Explorer (VSCode Extension)](docs/en/installation/roblox-explorer.md)
- [Compatibility](docs/compatibility.md)
- [Troubleshooting](docs/troubleshooting.md)

## FAQ

**How do I let Claude edit my Roblox scripts?**
Install the Roblox Studio plugin, then register the MCP server (`npx -y @weppy/roblox-mcp`) in Claude Code or Claude Desktop. Claude can then directly read and write scripts inside Studio.

**Can AI build Roblox games with this?**
Yes. AI can create instances, write scripts, generate terrain, set up lighting, insert assets, configure physics, and more — all inside a live Roblox Studio session. It goes beyond code generation to executable actions.

**Does it work with Cursor / Codex / Gemini?**
Yes. Any MCP-compatible AI client works. Setup guides are provided for Claude Code, Claude Desktop, Cursor, Codex CLI, Codex Desktop, Gemini CLI, and Antigravity.

**What is the difference between Basic and Pro?**
Basic includes MCP tool execution and one-way sync (Studio -> Local). Pro adds bidirectional sync, bulk operations, terrain generation, spatial analysis, audio/animation control, and multi-place support. See the [Pro Upgrade Guide](docs/en/pro-upgrade.md).

**Is it safe? Can AI break my game?**
The server runs on localhost only (127.0.0.1:3002). Forbidden paths (CoreGui, CorePackages) are blocked. Rate limiting (450 req/min) and 30-second timeouts prevent runaway operations. All changes are trackable via sync history.

## Pro Upgrade

Bidirectional Sync, advanced build capabilities, and AI token efficiency — all in one upgrade.

[Pro Upgrade Guide](docs/en/pro-upgrade.md)

---

[![npm version](https://img.shields.io/npm/v/@weppy/roblox-mcp)](https://www.npmjs.com/package/@weppy/roblox-mcp) [![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/) [![Smithery](https://smithery.ai/badge/@hope1026/roblox-mcp)](https://smithery.ai/server/@hope1026/roblox-mcp)

[GitHub Issues](https://github.com/hope1026/roblox-mcp/issues) · [Discussions](https://github.com/hope1026/roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
