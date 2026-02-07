# Antigravity Setup

How to use Roblox MCP with [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** is Google's agentic development platform where AI agents autonomously navigate between code editing, terminal, and browser to perform complex tasks.

## Prerequisites

1. **Antigravity** installed (supports macOS, Windows, Linux)
2. **Roblox Studio Plugin** installed

## Register MCP Server

### Method 1: Install from MCP Store (Recommended)

1. Open Antigravity
2. Go to **Settings** → **MCP**
3. Search for `weppy-roblox-mcp` in the MCP Store
4. Click **Install**

### Method 2: Edit Configuration File Directly

1. In Antigravity, click **...** menu → **MCP Servers** → **Manage MCP Servers** → **View raw config**

2. Add the following content to the `mcp_config.json` file:

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

3. After saving, click **Refresh** in **Manage MCP Servers**

**Configuration file locations:**

| OS | Path |
|----|------|
| macOS/Linux | `~/.gemini/antigravity/mcp_config.json` |
| Windows | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |

### Method 3: Ask the Agent

You can also ask the Antigravity Agent directly:

```
Add Roblox MCP (@weppy/roblox-mcp) as an MCP server
```

## Important: Use Absolute Paths

> **Note**: Antigravity does not support the `${workspaceFolder}` variable. You must use **absolute paths**.

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "PROJECT_ROOT": "/Users/username/projects/my-roblox-game"
      }
    }
  }
}
```

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
2. Enter in **Antigravity**:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Using Skills

Combined with Antigravity's **Skills** system, you can create more powerful workflows:

- Define Roblox development workflows per project
- Package frequently used tasks as Skills
- Agent automatically plans, executes, and verifies tasks

## Supported Models

You can choose from the following models when using Roblox MCP in Antigravity:

| Model | Features |
|-------|----------|
| **Gemini 3 Pro** | Default model, free to use |
| **Claude Sonnet 4.5** | Anthropic model support |
| **GPT-OSS** | OpenAI model support |

## Troubleshooting

### Server won't start

Run the MCP server directly to check for errors:
```bash
npx -y @weppy/roblox-mcp
```

### Connection failed

- Verify the Roblox Studio plugin is in **Connected** state
- Check if port 3002 is blocked by a firewall
- Check server status in Settings → MCP

### Absolute path error

Using `${workspaceFolder}` will cause errors. Change to absolute paths:

```json
// Wrong
"args": ["--workspace", "${workspaceFolder}"]

// Correct
"args": ["--workspace", "/absolute/path/to/project"]
```

## Reference

- [Antigravity Getting Started Guide](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Antigravity MCP Integration Guide](https://composio.dev/blog/howto-mcp-antigravity)
- [Antigravity Skills Collection](https://github.com/sickn33/antigravity-awesome-skills)
