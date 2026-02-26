# Antigravity Setup

How to use Roblox MCP with [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** is Google's agentic development platform where AI agents autonomously move between code editing, terminal, and browser to carry out complex tasks.

## Prerequisites

1. **Antigravity** installed (see official docs for supported OS/requirements)
2. **Node.js** (v18.0.0 or later, `npx` available)
3. **Roblox Studio plugin** installed

## Register MCP Server

In Antigravity, MCP servers are managed in the **agent pane (Agent pane)**.

### Manual registration via raw config (recommended)

1. In the agent pane, click **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

![Open MCP Servers menu](../../../assets/screenshots/antigravity/antigravity_mcp_services_menu.png)

2. Add/merge the following into the displayed config (JSON):

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

![Edit raw config](../../../assets/screenshots/antigravity/antigravity_mcp_raw.png)

3. After saving, do **Refresh** (or restart/refresh per the UI guidance)

> The actual path/name of the config file can vary by OS and Antigravity version, so always edit based on the location shown in **View raw config**.

### Optional: Adjust port/logs with environment variables

We recommend keeping the defaults (HTTP `127.0.0.1:3002`). If needed, you can set environment variables like this:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_HOST": "127.0.0.1",
        "HTTP_PORT": "3002",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## Connection Test

1. Open **Roblox Studio** → Plugins tab → **W-MCP** → **Connect**
2. In **Antigravity**, enter:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Troubleshooting

### When the server won't start

Run the MCP server directly to check for errors:
```bash
npx -y @weppy/roblox-mcp
```

### Connection failed

- Verify the Roblox Studio plugin is **Connected**
- Check whether port **3002** is blocked by a firewall
- Check server status in the agent pane **⋯** → **MCP Servers**
- (Advanced) If you changed `HTTP_PORT`, the Roblox Studio plugin/bridge must be configured to use the same port.

## References

- [Google Antigravity introduction](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [Antigravity Getting Started Guide (Codelab)](https://codelabs.developers.google.com/getting-started-google-antigravity)
