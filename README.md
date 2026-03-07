# Roblox MCP

> MCP server and plugin for Roblox Studio — control scripts, terrain, assets, and lighting with Claude Code, Cursor, Codex, and Gemini.

**English** | [한국어](docs/ko/README.md) | [日本語](docs/ja/README.md) | [Español](docs/es/README.md) | [Português](docs/pt-br/README.md) | [Bahasa Indonesia](docs/id/README.md)

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

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

> Any MCP-compatible AI client works. The server command is `npx -y @weppy/roblox-mcp`.

## Compatibility

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI |
|:-----------:|:--------------:|:------:|:---------:|:----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

**Requirements:** Node.js 18+, Roblox Studio, Windows 10+ or macOS 12+

## What It Does

### 1) MCP Tools: Direct execution in Studio from natural language

AI can directly handle scripts, instances, properties, terrain, lighting, assets, audio, and animation inside Studio.

- "Add particles + sound + cooldown when the player jumps."
- "Build a boss arena at map center and place collision-safe spawn points."
- "Change this module interface and update every dependent script."

This is not just code generation. It is **executable, production-oriented actions**.

### 2) Sync: Keep full project context stable for AI

AI works from a synchronized local mirror, so multi-file updates stay consistent.

![Sync workflow — Studio and local files synchronized in real time](docs/assets/screenshots/sync.png)

- Basic: one-way sync (Studio -> Local)
- Pro: bidirectional sync + per-type Direction/Apply Mode + history + multi-place

## Why It Matters

- Compress repetitive work: turn many manual edits into one request
- Change related files together: not just one target file
- Lower risk: rely on sync state and history before applying changes
- Better token efficiency (Pro): reduce round trips with bulk actions

## Docs

- [Installation Guide](docs/en/installation/README.md)
- [Tools Reference](docs/en/tools/overview.md)
- [Sync Deep Dive](docs/en/sync/overview.md)
- [Compatibility](docs/compatibility.md)
- [Troubleshooting](docs/troubleshooting.md)

## Pro Upgrade

Bidirectional Sync, advanced build capabilities, and AI token efficiency — all in one upgrade.

[Pro Upgrade Guide](docs/en/pro-upgrade.md)

---

[GitHub Issues](https://github.com/hope1026/roblox-mcp/issues) · [Discussions](https://github.com/hope1026/roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
