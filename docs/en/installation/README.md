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

## One-Line Install (Recommended)

Install everything in one command:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Then reopen your AI app and restart Roblox Studio.

If the installer fails, it writes an error log to a temporary file and keeps the console open in interactive runs so you can read the reason before exiting.

Automatic MCP registration supports **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, and Antigravity**.

If PowerShell execution is blocked on Windows, use the manual install path below. If you're using the ZIP package, you can also run `setup-plugin.bat` and `setup-mcp.bat`.

---

## Manual Install

If the one-line install does not work, or automatic installation is not available in your environment, use the manual install path below as an alternative.

### Step 1: Install Roblox Studio Plugin

Download the plugin file from GitHub, then place it in Roblox Studio's Plugins folder.

👉 [Plugin Installation Guide](https://weppy-web.pages.dev/en/install#plugin)

---

### Step 2: Register MCP Server with AI App

Register the MCP server with your AI app. You can use it with any AI app that supports MCP.

| AI App | Installation Guide |
|--------|-------------------|
| Claude Code | [Setup Instructions](ai-apps/claude-code.md) |
| Claude Desktop | [Setup Instructions](ai-apps/claude-app.md) |
| Cursor | [Setup Instructions](ai-apps/cursor.md) |
| Codex CLI | [Setup Instructions](ai-apps/codex-cli.md) |
| Codex Desktop | [Setup Instructions](ai-apps/codex-app.md) |
| Gemini CLI | [Setup Instructions](ai-apps/gemini-cli.md) |
| Antigravity | [Setup Instructions](ai-apps/antigravity.md) |

> Even if your AI app isn't listed above, you can use it if it supports MCP. The MCP server command is `npx -y @weppy/roblox-mcp`.

---

## Optional: Install WROX Roblox Explorer (VSCode Extension)

Browse synced instance trees inside VSCode with Roblox class icons.
This optional extension requires the Roblox MCP setup above, because it reads sync data from `wrox-project-sync` under your project root.

👉 [WROX Roblox Explorer Installation Guide](https://weppy-web.pages.dev/en/install#explorer)

Direct listings:
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

---

## After Installation

1. Open **Roblox Studio**, go to Plugins tab and click **WROX** → **Connect**
2. Test in your **AI app** with:

```
Create a blue part in Roblox Studio
```

If the part is created successfully, installation is complete!
