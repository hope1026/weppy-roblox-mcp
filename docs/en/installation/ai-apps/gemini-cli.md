# Gemini CLI Setup

How to use Roblox MCP with [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Prerequisites

1. **Gemini CLI** installed
   ```bash
   npm install -g @google/gemini-cli
   ```

2. **Roblox Studio Plugin** installed

## Register MCP Server

### Method 1: CLI Command (Recommended)

Register with a single command in your terminal:

```bash
gemini mcp add weppy-roblox-mcp <path-to>/weppy-roblox-mcp-<os>-<arch> --trust
```

> The `--trust` flag skips confirmation prompts for each tool call.
>
> Download the binary from [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest). `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64

To register globally, add `-s user`:

```bash
gemini mcp add weppy-roblox-mcp <path-to>/weppy-roblox-mcp-<os>-<arch> -s user --trust
```

### Method 2: Edit Configuration File

Add the following content to `.gemini/settings.json`:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
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
gemini mcp add weppy-roblox-mcp <path-to>/weppy-roblox-mcp-<os>-<arch> --trust -e MCP_PORT=3002
```

**Configuration file:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>",
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
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
./weppy-roblox-mcp-<os>-<arch>
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
