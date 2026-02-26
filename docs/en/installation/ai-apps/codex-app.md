# Codex App Setup

How to use Roblox MCP with [OpenAI Codex App](https://openai.com/codex/) (macOS).

> **Released February 2, 2026** - Native macOS app supporting multi-agent workflows

## Prerequisites

- **Codex App** installed (macOS)
- **Roblox Studio Plugin** installed

## Register MCP Server

### Auto-sync with Codex CLI Settings

If you've already configured MCP in Codex CLI, you can use it in the app **without additional setup**.

```
CLI session history and settings are automatically synced to the app.
```

### New Setup

Add in the app under **Settings** → **MCP Servers**:

```
Server name: weppy-roblox-mcp
Command: npx -y @weppy/roblox-mcp
```

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
2. Start a new conversation in **Codex App** and test:
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

- [Codex App Introduction](https://openai.com/index/introducing-the-codex-app/)
- [Codex MCP Official Documentation](https://developers.openai.com/codex/mcp/)
