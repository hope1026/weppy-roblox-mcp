# Gemini CLI Setup

How to use Roblox MCP with [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Prerequisites

1. **Node.js** (v18.0.0 or higher)
   ```bash
   node --version
   ```

2. **Gemini CLI** installed
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Roblox Studio Plugin** installed

## Register MCP Server

### Method 1: CLI Command (Recommended)

Register with a single command in your terminal:

```bash
gemini mcp add weppy-roblox-mcp npx --trust -- -y @weppy/roblox-mcp
```

> The `--trust` flag skips confirmation prompts for each tool call.

To register globally, add `-s user`:

```bash
gemini mcp add weppy-roblox-mcp npx -s user --trust -- -y @weppy/roblox-mcp
```

### Method 2: Edit Configuration File

Add the following content to `.gemini/settings.json`:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"]
    }
  }
}
```

**Configuration file locations:**
| Scope | Path |
|-------|------|
| Project | `<project>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Method 3: Using Environment Variables

If specific environment variables are needed:

**CLI:**
```bash
gemini mcp add weppy-roblox-mcp npx --trust -e HTTP_PORT=3002 -- -y @weppy/roblox-mcp
```

**Configuration file:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_PORT": "3002"
      }
    }
  }
}
```

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **WEPPY** → **Connect**
2. Run **Gemini CLI** and enter:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Check MCP Server Status

You can check connected server status with the `/mcp` command in Gemini CLI:

```
/mcp
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
- Check server status with `/mcp` command

### Tool conflicts

If multiple MCP servers have tools with the same name, they will be prefixed with `serverAlias__toolName` format.

## Reference

- [Gemini CLI MCP Official Documentation](https://geminicli.com/docs/tools/mcp-server/)
- [Gemini CLI Configuration Guide](https://geminicli.com/docs/get-started/configuration/)
