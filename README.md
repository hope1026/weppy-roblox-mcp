# Roblox MCP

> Control Roblox Studio with AI. 140 tools to make game development easier.

## What can you do?

Tell AI what you want, and it executes directly in Roblox Studio:

```
"Create a red brick"                      → Part creation
"Change all parts to neon"                → Bulk modification
"Script that increases jump power on touch" → Auto-generate scripts
"Make it night and add stars"             → Environment settings
"Create mountain terrain"                 → Terrain generation
```

## Quick Start

### Step 1: Install Roblox Plugin

Search for **"W-MCP"** in the **Roblox Creator Store** and install.

Or download directly:
- [Install from Creator Store](https://create.roblox.com/store/asset/YOUR_ASSET_ID)

### Step 2: Configure MCP Server

Choose your AI app:

| AI App | Installation Guide |
|--------|-------------------|
| Claude Desktop | [Setup Guide](docs/en/installation/claude-desktop.md) |
| Claude Code | [Setup Guide](docs/en/installation/claude-code.md) |
| Cursor | [Setup Guide](docs/en/installation/cursor.md) |
| Codex CLI | [Setup Guide](docs/en/installation/codex-cli.md) |
| Gemini CLI | [Setup Guide](docs/en/installation/gemini-cli.md) |
| Other MCP Apps | [Setup Guide](docs/en/installation/other-clients.md) |

### Step 3: Connect

1. Launch Roblox Studio
2. Go to Plugins tab → Click **W-MCP**
3. Click **Connect** button
4. Confirm "Connected" status
5. Start developing with AI!

## 140 Tools

### Free Tools (68)

| Category | What you can do | Example Prompt |
|----------|-----------------|----------------|
| **Instance** | Create/delete/clone parts, models | "Create a red sphere" |
| **Script** | Write/edit/search code | "Script that disappears on touch" |
| **Property** | Change color, size, position | "Double this part's size" |
| **Selection** | Control selected items in Studio | "Duplicate selected items" |
| **Tag** | Manage CollectionService tags | "Add 'Enemy' tag to this part" |
| **Camera** | Move view, focus | "Move camera to this model" |
| **Log** | Check errors, debugging | "Show recent errors" |

### Pro Tools (72)

| Category | What you can do | Example Prompt |
|----------|-----------------|----------------|
| **Bulk Ops** | Create/modify hundreds at once | "Plant 100 trees" |
| **Asset** | Search/insert models | "Find and insert a free car model" |
| **Environment** | Lighting, weather, time | "Make it night and add fog" |
| **Terrain** | Create/modify Terrain | "Create mountain terrain" |
| **Raycast** | Collision detection, find positions | "Find 5 player spawn positions" |
| **Visualization** | Show areas, create markers | "Highlight this area in red" |

## Free vs Pro

| Feature | Free | Pro |
|---------|:----:|:---:|
| Basic Tools (68) | ✅ | ✅ |
| Pro Tools (72) | Daily quota | ✅ Unlimited |
| Bulk Operations | 10 limit | Unlimited |
| Asset Search/Insert | 5/day | Unlimited |
| Terrain Generation | 3/day | Unlimited |

## Example Prompts

### Beginner
```
"Create a red part at position (0, 5, 0)"
"Rename this part to 'Floor'"
"Delete selected parts"
"What's currently selected?"
```

### Intermediate
```
"Add a script that changes color on touch"
"Find all parts with 'Platform' tag"
"Duplicate this model 5 times in a row"
"Change lighting to evening mood"
```

### Advanced
```
"Create 100 tiles in a 10x10 grid"
"Find empty spaces in Workspace and suggest NPC spawn positions"
"Replace all 'player' with 'character' in this script"
"Generate mountain terrain and place 50 trees"
```

## Troubleshooting

### "Not Connected" displayed

1. Check if MCP server is running in your AI app
2. Allow port 3002 in firewall
3. Restart Studio plugin (Plugins → W-MCP → Reconnect)

### AI doesn't see changes

1. Ask AI to "sync current state"
2. Request `sync_workspace_state` tool usage

### Commands not executing

1. Verify plugin shows "Connected" status in Studio
2. Break complex commands into smaller steps

## Security

- Server runs on **localhost only** (127.0.0.1:3002)
- No external network access
- Protected paths blocked (CoreGui, CorePackages, etc.)
- 450 requests per minute limit

## Supported AI Apps

| App | Supported | Localhost |
|-----|:---------:|:---------:|
| Claude Desktop | ✅ | ✅ |
| Claude Code | ✅ | ✅ |
| Cursor | ✅ | ✅ |
| Codex CLI | ✅ | ✅ |
| Gemini CLI | ✅ | ✅ |
| Windsurf | ✅ | ✅ |
| Continue | ✅ | ✅ |
| Cline | ✅ | ✅ |
| ChatGPT Desktop | ✅ | ❌ (ngrok required) |

## Links

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [Issue Report](https://github.com/hope1026/roblox-mcp/issues)
- [Creator Store](https://create.roblox.com/store/asset/YOUR_ASSET_ID)

## License

Free to use for game development.

✅ **Allowed**: Game development, commercial games, personal projects
❌ **Not Allowed**: Software resale, creating competing products

---

Made for the Roblox community ❤️
