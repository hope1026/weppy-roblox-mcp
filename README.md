# Weppy Roblox MCP

[한국어](docs/README.ko.md)

> AI-powered Roblox Studio integration for Claude Code

## What is this?

Weppy Roblox MCP enables **Claude Code** to directly interact with Roblox Studio. Create instances, modify properties, write scripts, and build games using natural language.

### Features

- **76+ Tools** - Comprehensive Roblox Studio operations
- **Real-time Integration** - Direct communication with Studio via SSE
- **Natural Language** - Describe what you want, AI builds it
- **Auto-managed** - Server starts automatically with Claude Code

## Quick Start

### 1. Install Plugin in Claude Code

```bash
# Add the marketplace
/plugin marketplace add hope1026/roblox-mcp

# Install the plugin
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

### 2. Install Roblox Studio Plugin

Download and install the Roblox Studio plugin:

**Windows:**
```
%LOCALAPPDATA%\Roblox\Plugins\WeppyRobloxMCP.rbxm
```

**macOS:**
```
~/Documents/Roblox/Plugins/WeppyRobloxMCP.rbxm
```

Restart Roblox Studio after installation.

### 3. Connect

1. Open Roblox Studio
2. Open the **Weppy MCP** widget from the Plugins menu
3. Click **Connect** - you should see "Connected" status
4. Start chatting with Claude Code about your game!

## Example Prompts

Try these prompts with Claude Code:

```
"Create a red brick at position (10, 5, 10)"

"Add a script that makes parts spin when touched"

"Build a simple obstacle course with 5 platforms"

"Change all parts named 'Floor' to use Neon material"

"Create a leaderboard system for tracking player scores"
```

## Available Tools

| Category | Tools | Examples |
|----------|-------|----------|
| **Instance** | 12 | create, delete, clone, move |
| **Property** | 10 | get/set properties, attributes |
| **Script** | 10 | create, edit, search scripts |
| **Search** | 8 | find by name, class, property |
| **Selection** | 12 | get/set Studio selection |
| **Bulk** | 8 | mass operations |
| **Tag** | 5 | CollectionService tags |
| **Asset** | 6 | insert models, packages |
| **Environment** | 5 | lighting, atmosphere, sky |

## Troubleshooting

### "Not Connected" in Studio

1. Restart Claude Code to ensure the MCP server is running
2. Check that port 3002 is not blocked by firewall
3. Restart the Studio plugin

### AI can't see my changes

1. Ask Claude to use `get_selection` to refresh
2. Make sure you've saved your place

## Security

- Server runs on **localhost only** (127.0.0.1)
- No external network access
- Protected paths (CoreGui, CorePackages) are blocked

## Links

- [GitHub Repository](https://github.com/hope1026/roblox-mcp)
- [Issue Tracker](https://github.com/hope1026/roblox-mcp/issues)

## License

This software is provided under a custom license that allows free use for game development but prohibits resale of the software itself. See [LICENSE](LICENSE) for details.

**Allowed:** Use for game development, commercial games, personal projects
**Not Allowed:** Reselling the software, creating competing products

---

Made with love for the Roblox community
