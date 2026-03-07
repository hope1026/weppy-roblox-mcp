# Compatibility

## Supported AI Clients

| Client | Basic | Pro | Setup guide |
|--------|:-----:|:---:|-------------|
| Claude Code | ✅ | ✅ | [Guide](en/installation/ai-apps/claude-code.md) |
| Claude Desktop | ✅ | ✅ | [Guide](en/installation/ai-apps/claude-app.md) |
| Cursor | ✅ | ✅ | MCP config: `npx -y @weppy/roblox-mcp` |
| Codex CLI | ✅ | ✅ | [Guide](en/installation/ai-apps/codex-cli.md) |
| Codex Desktop | ✅ | ✅ | [Guide](en/installation/ai-apps/codex-app.md) |
| Gemini CLI | ✅ | ✅ | [Guide](en/installation/ai-apps/gemini-cli.md) |
| Any MCP client | ✅ | ✅ | Server command: `npx -y @weppy/roblox-mcp` |

## System Requirements

| Requirement | Minimum |
|-------------|---------|
| Node.js | 18.0.0+ |
| Roblox Studio | Latest (keep auto-updated) |
| OS | Windows 10+ or macOS 12+ |
| Network | localhost:3002 must be accessible |

## Feature Matrix (Basic vs Pro)

| Feature | Basic | Pro |
|---------|:-----:|:---:|
| MCP tool execution (scripts, instances, properties) | ✅ | ✅ |
| Studio → Local one-way sync | ✅ | ✅ |
| Bidirectional sync (Local → Studio) | ❌ | ✅ |
| Per-type Direction and Apply Mode | ❌ | ✅ |
| Sync history and changelog | ❌ | ✅ |
| Multi-place support (up to 3 places) | ❌ | ✅ |
| Bulk operations (mass_create, mass_set) | ❌ | ✅ |
| Advanced spatial queries | ❌ | ✅ |
| Terrain generation and fill | ❌ | ✅ |
| Physics group management | ❌ | ✅ |
| Tween and animation control | ❌ | ✅ |
| Audio control | ❌ | ✅ |
| Lighting and atmosphere | ❌ | ✅ |

## MCP Tool Count

21 consolidated tools with action-based sub-commands. See [Tools Reference](en/tools/overview.md) for the full list.
