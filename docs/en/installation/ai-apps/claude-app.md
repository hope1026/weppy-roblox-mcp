# Claude Desktop App Setup

How to use Roblox MCP with [Claude Desktop App](https://claude.ai/download).

## Prerequisites

- **Claude Desktop App** installed
- **Roblox Studio Plugin** installed

## Register MCP Server

### Method 1: Desktop Extensions (Recommended)

> One-click installation available like browser extensions since 2026

1. Claude Desktop → **Settings** → **Extensions**
2. Search for `weppy-roblox-mcp`
3. Click **Install**

### Method 2: Edit Configuration File Directly

1. Claude Desktop → **Settings** → **Developers** → Click **Edit Config**

2. Download the MCP server binary for your platform from [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest).

3. Add the following content to the `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> Replace `<path-to>` with the actual directory where you downloaded the binary.
> `<os>`: `darwin`, `linux`, `windows` / `<arch>`: `amd64`, `arm64`
> On Windows, the filename ends with `.exe` (e.g., `weppy-roblox-mcp-windows-amd64.exe`).

4. **Completely quit** and restart Claude Desktop

**Configuration file locations:**

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
2. Start a new conversation in **Claude Desktop** and test:
   ```
   Create a blue part in Roblox Studio
   ```

## Troubleshooting

### MCP server not loading

1. **Check JSON syntax**: Validate configuration file with an online JSON validator
2. **Fully restart Claude Desktop**: After configuration changes, completely quit and restart the app
3. **Verify paths**: Check that command and args are correct

### Server won't start

Run the MCP server binary directly to check for errors:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Connection failed

- Verify the Roblox Studio plugin is in **Connected** state
- Check if port 3002 is blocked by a firewall

## Reference

- [Claude Desktop MCP Official Guide](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [MCP Server Connection Guide](https://modelcontextprotocol.io/docs/develop/connect-local-servers)
