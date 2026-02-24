# Roblox MCP

**English** | [한국어](docs/ko/README.md) | [日本語](docs/ja/README.md) | [Español](docs/es/README.md) | [Português](docs/pt-br/README.md) | [Bahasa Indonesia](docs/id/README.md)

> Tell AI what you want, and it happens in Roblox Studio.

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Core Capabilities

### 1) MCP Tools: Direct execution in Studio from natural language

The first pillar of Roblox MCP is **MCP tool execution**.
AI can directly handle scripts, instances, properties, terrain, lighting, assets, audio, and animation inside Studio.

- "Add particles + sound + cooldown when the player jumps."
- "Build a boss arena at map center and place collision-safe spawn points."
- "Change this module interface and update every dependent script."

This is not just code generation. It is **executable, production-oriented actions**.

### 2) Sync: Keep full project context stable for AI

The second pillar is **Project Sync**.
AI works from a synchronized local mirror, so multi-file updates stay consistent.

- Basic: one-way sync (Studio -> Local)
- Pro: bidirectional sync + per-type Direction/Apply Mode + history + multi-place

You keep source-of-truth clear and avoid losing change context.

## Immediate Value

- Compress repetitive work: turn many manual edits into one request
- Change related files together: not just one target file
- Lower risk: rely on sync state and history before applying changes
- Better token efficiency (Pro): reduce round trips with bulk actions

## Detailed Docs

- [Tools Overview](docs/en/tools/overview.md)
- [Sync Deep Dive](docs/en/sync/overview.md)

## Getting Started

Installation is complete in two steps:

1. **Install Roblox Studio Plugin** — Acts as a bridge between Studio and AI
2. **Register MCP Server with AI App** — Configure your AI app to recognize Roblox MCP

Takes just 5 minutes. 👉 [View Installation Guide](docs/en/installation/README.md)

## Pro Upgrade

Bidirectional Sync, advanced build capabilities, and AI token efficiency — all in one upgrade.

👉 [Pro Upgrade Guide](docs/en/pro-upgrade.md)

## Links

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [Issue Reports](https://github.com/hope1026/roblox-mcp/issues)
