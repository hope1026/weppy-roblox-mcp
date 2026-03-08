# Installation Guide

To use Roblox MCP, you need to install **two things**.

```
AI App (Claude, Codex, Gemini, etc.)
       │
   MCP Server ← Converts AI commands into a format Roblox understands
       │
Roblox Studio Plugin ← Executes commands inside Studio
```

When an AI app says "Create a blue part", the MCP server converts this request, and the Roblox Studio plugin actually creates the part.

---

## Step 1: Install Roblox Studio Plugin

Download the plugin file from GitHub, then place it in Roblox Studio's Plugins folder.

👉 [Plugin Installation Guide](roblox-plugin.md)

---

## Step 2: Register MCP Server with AI App

Register the MCP server with your AI app. You can use it with any AI app that supports MCP.

| AI App | Installation Guide |
|--------|-------------------|
| Claude Code | [Setup Instructions](ai-apps/claude-code.md) |
| Claude Desktop | [Setup Instructions](ai-apps/claude-app.md) |
| Codex CLI | [Setup Instructions](ai-apps/codex-cli.md) |
| Codex Desktop | [Setup Instructions](ai-apps/codex-app.md) |
| Gemini CLI | [Setup Instructions](ai-apps/gemini-cli.md) |
| Antigravity | [Setup Instructions](ai-apps/antigravity.md) |

> Even if your AI app isn't listed above, you can use it if it supports MCP. The MCP server command is `npx -y @weppy/roblox-mcp`.

---

## Optional: Install Roblox Explorer (VSCode Extension)

Browse synced instance trees inside VSCode with Roblox class icons.

👉 [Roblox Explorer Installation Guide](roblox-explorer.md)

---

## After Installation

1. Open **Roblox Studio**, go to Plugins tab and click **W-MCP** → **Connect**
2. Test in your **AI app** with:

```
Create a blue part in Roblox Studio
```

If the part is created successfully, installation is complete!
