# Roblox Plugin Installation

How to install the plugin to connect AI agents with Roblox Studio.

## 1. Download Plugin

1. Open [GitHub Releases](https://github.com/hope1026/weppy-roblox-mcp/releases/latest)
2. Download `weppy-roblox-mcp-v{version}.zip`
3. Extract the ZIP file - you will find `roblox-plugin/WeppyRobloxMCP.rbxm` and setup guides

Note:
- Basic users install the same plugin package and use Basic policy (Studio -> Local one-way sync)
- Pro subscribers unlock bidirectional sync and broader advanced tools after license activation

## 2. Install Plugin

1. Open **Roblox Studio**
2. Click the **Plugins** tab in the top menu
3. Click the **Plugins Folder** button

![Open Plugins Folder](../../assets/screenshots/plugins_menu.png)

4. **Copy** the `WeppyRobloxMCP.rbxm` file from the extracted folder into the opened Plugins folder
5. **Restart Roblox Studio**

## 3. Verify Installation

After restarting, the **WROX** button will appear in the Plugins tab.

![WROX Button](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. Connect to AI Agent

### Prerequisites

The MCP server must be installed. Complete the guide for your AI app first:

| AI App | Installation Guide |
|--------|-------------------|
| Claude Code | [Setup Guide](ai-apps/claude-code.md) |
| Claude Desktop | [Setup Guide](ai-apps/claude-app.md) |
| Cursor | [Setup Guide](ai-apps/cursor.md) |
| Codex CLI | [Setup Guide](ai-apps/codex-cli.md) |
| Codex Desktop | [Setup Guide](ai-apps/codex-app.md) |
| Gemini CLI | [Setup Guide](ai-apps/gemini-cli.md) |
| Antigravity | [Setup Guide](ai-apps/antigravity.md) |

### Connecting

1. Open any project in **Roblox Studio**
2. Go to **Plugins** tab -> **WROX**
3. Click the **Connect** button in the plugin window
4. Once **"Connected"** status is displayed, you're ready

![Plugin Main Screen](../../assets/screenshots/plugin_main.png)

## 5. Settings (Optional)

Click the settings button in the top right of the plugin to change options.

![Settings Screen](../../assets/screenshots/settings.png)

- **Auto Connect**: Automatically connect to MCP server when Studio starts
- **Auto Reconnect**: Automatically attempt to reconnect when connection is lost
- **Auto Camera Focus**: Automatically move camera to created objects
- **Language**: Change the plugin UI language

## Troubleshooting

### Plugin not visible

- Completely close and restart Roblox Studio
- Check if the file was properly copied to the Plugins Folder
- Verify the `.rbxm` file is not corrupted

### Cannot connect

- Verify the MCP server is running in your AI app
- Click the **Connect** button again in the plugin
- Check if port 3002 is being used by another program

### Connection frequently drops

- Enable the **Auto Reconnect** option in settings
- Try restarting your AI app
