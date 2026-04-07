# Roblox Plugin Installation

How to install the plugin to connect AI agents with Roblox Studio.

## Automatic Installation (Recommended)

If the MCP server setup is complete, the plugin is **installed automatically**. No manual download or file copy is needed.

### How it works

1. When the MCP server runs for the first time, it places the plugin file (`WeppyRobloxMCP.rbxm`) into the Roblox Studio Plugins folder automatically.
2. When you start Roblox Studio, the **WROX** button appears in the Plugins tab.

### Connecting

1. Open any project in **Roblox Studio**
2. Go to **Plugins** tab → **WROX**

![WROX Button](../../assets/screenshots/plugin/installation/toolbar-button.png)

3. Click the **Connect** button in the plugin window
4. Once **"Connected"** status is displayed, you're ready

![Plugin Main Screen](../../assets/screenshots/plugin/installation/main-screen.png)

> If automatic installation did not work, follow the manual installation below.

---

## Manual Installation

Use this if automatic installation didn't work or you need to install a specific version.

### 1. Download Plugin

1. Open [GitHub Releases](https://github.com/hope1026/weppy-roblox-mcp/releases/latest)
2. Download `weppy-roblox-mcp-v{version}.zip`
3. Extract the ZIP file — you will find `roblox-plugin/WeppyRobloxMCP.rbxm`

### 2. Install Plugin

1. Open **Roblox Studio**
2. Click the **Plugins** tab in the top menu
3. Click the **Plugins Folder** button

![Open Plugins Folder](../../assets/screenshots/plugin/installation/plugins-menu.png)

4. **Copy** the `WeppyRobloxMCP.rbxm` file from the extracted folder into the opened Plugins folder
5. **Restart Roblox Studio**

### 3. Verify Installation

After restarting, the **WROX** button will appear in the Plugins tab.

![WROX Button](../../assets/screenshots/plugin/installation/toolbar-button.png)

### 4. Connect

Follow the same "Connecting" steps above — click Connect in the plugin.

---

## Settings (Optional)

Click the settings button in the top right of the plugin to change options.

![Settings Screen](../../assets/screenshots/plugin/installation/settings-screen.png)

- **Auto Connect**: Automatically connect to MCP server when Studio starts
- **Auto Reconnect**: Automatically attempt to reconnect when connection is lost
- **Auto Camera Focus**: Automatically move camera to created objects
- **Language**: Change the plugin UI language

## Tier Information

- Basic users install the same plugin package and use Basic policy (Studio → Local one-way sync).
- Pro subscribers unlock bidirectional sync and broader advanced tools after license activation.

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
