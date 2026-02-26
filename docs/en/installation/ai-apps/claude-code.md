# Claude Code Setup

How to use Roblox MCP with [Claude Code](https://claude.ai/code) (terminal-based AI coding tool).

## Prerequisites

- **Claude Code** installed
- **Roblox Studio Plugin** installed

## Installation

```bash
npm install -g @anthropic-ai/claude-code
```

## Register MCP Server

### Method 1: Install from Marketplace (Recommended)

Run in Claude Code terminal:

```bash
# Add marketplace
/plugin marketplace add hope1026/roblox-mcp

# Install plugin
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

Verify installation:
```bash
/plugin list
```

### Method 2: Download Binary and Configure Manually

1. Download the latest release from [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Extract the ZIP and note the path to the Go binary for your platform
3. Create a `.mcp.json` file:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64
> On Windows, the filename ends with `.exe`

**Configuration file locations:**

| Scope | Path |
|-------|------|
| Project | `<project>/.mcp.json` |
| Global | `~/.claude/mcp.json` |

## Automatic Server Management

Claude Code manages MCP servers automatically:

- Starts automatically when needed
- Stops automatically when session ends
- No additional configuration required

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
2. Test in **Claude Code**:
   ```
   Create a blue part in Roblox Studio
   ```

## Troubleshooting

### Plugin installation failed

```bash
# Clear cache and retry
/plugin cache clear
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

### Server won't start

Test starting the server binary manually:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### MCP tools not visible

Check in Claude Code:
```
Show me the list of available MCP tools
```

## Reference

- [Claude Code Official Documentation](https://docs.anthropic.com/claude-code)
