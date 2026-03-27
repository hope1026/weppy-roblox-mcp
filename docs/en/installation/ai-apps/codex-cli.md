# Codex CLI Setup

How to use Roblox MCP with [OpenAI Codex CLI](https://github.com/openai/codex) (terminal-based AI coding tool).

## Prerequisites

- **Node.js** (v18.0.0 or higher)
- **Roblox Studio Plugin** installed

## Installation

```bash
npm install -g @openai/codex
```

## Register MCP Server

### Method 1: CLI Command (Recommended)

```bash
codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp
```

### Method 2: Edit Configuration File Directly

Add the following content to `~/.codex/config.toml`:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "npx"
args = ["-y", "@weppy/roblox-mcp"]
```

**Configuration file locations:**

| OS | Path |
|----|------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **WROX** → **Connect**
2. Run **Codex CLI** and enter:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Troubleshooting

### Server won't start

Run the MCP server directly to check for errors:
```bash
npx -y @weppy/roblox-mcp
```

### Connection failed

- Verify the Roblox Studio plugin is in **Connected** state
- Check if port 3002 is blocked by a firewall

## Reference

- [Codex CLI GitHub](https://github.com/openai/codex)
- [Codex MCP Official Documentation](https://developers.openai.com/codex/mcp/)
- [Codex Configuration Reference](https://developers.openai.com/codex/config-reference/)
