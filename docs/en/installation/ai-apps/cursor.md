# Cursor Setup

How to use Roblox MCP with [Cursor](https://cursor.com/).

## Prerequisites

- **Cursor** installed
- **Node.js** (v18.0.0 or higher)
- **Roblox Studio Plugin** installed

## Register MCP Server

### Method 1: Project Configuration

Add the following to `.cursor/mcp.json` in your project:

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

### Method 2: Global Configuration

Add the same content to your global Cursor MCP config file.

**Configuration file locations:**

| Scope | Path |
|-------|------|
| Project | `<project>/.cursor/mcp.json` |
| Global (macOS/Linux) | `~/.cursor/mcp.json` |
| Global (Windows) | `%USERPROFILE%\\.cursor\\mcp.json` |

> If the file already exists, merge the `weppy-roblox-mcp` entry into the existing `mcpServers` object.

### Apply Changes

After editing the config, reload the Cursor window or restart the app.

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
2. In **Cursor**, enter:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Troubleshooting

### MCP server not showing up

- Check that the config file path is correct
- Verify the JSON syntax is valid
- Reload Cursor after editing the config

### Server won't start

Run the MCP server directly to check for errors:

```bash
npx -y @weppy/roblox-mcp
```

### Connection failed

- Verify the Roblox Studio plugin is in **Connected** state
- Check if port 3002 is blocked by a firewall

## Reference

- [Cursor MCP Documentation](https://docs.cursor.com/context/model-context-protocol)
