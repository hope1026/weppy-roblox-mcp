# WROX Roblox Explorer (VSCode · Antigravity Extension)

> **Optional** — Explorer is not required. All core features work with just MCP and the plugin. Install it when you want to browse the project structure in your editor.

Roblox Studio Explorer-like tree view for your editor. Browse synced instance trees, open scripts directly, and track sync status — all inside your editor.
This is a companion extension for WROX, not a standalone Roblox integration.

![WROX Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Requirements

- VSCode 1.85+ or Antigravity
- [Roblox MCP](../../../README.md) installed with Sync enabled (Basic or Pro)
- Sync has already generated `wrox-project-sync/place_*/.sync-meta.json` under your project root

## Installation

### VSCode

Search for **WROX Roblox Explorer** in the VSCode Extensions sidebar (`Ctrl+Shift+X` / `Cmd+Shift+X`) and click **Install**.

Or install directly from:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

### Antigravity

Antigravity is VSCode-based, so the same extension works. Search for **WROX Roblox Explorer** in the Antigravity Extensions tab and click **Install**.

---

Core tree browsing works from synced files on disk. Live sync state, direction indicators, and Explorer telemetry forwarding are available when the local MCP server is reachable.

## Features

- **Instance tree**: Service/instance hierarchy matching Roblox Studio
- **Roblox class icons**: Dark/light theme support with 200+ class icons
- **Multi-place**: Separate tree roots per synced place
- **Click-to-open**: Open backing files (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`)
- **Instance search**: QuickPick search across all services
- **Sync status badges**: See `modified`, `studio`, `conflict` states at a glance
- **Auto-refresh**: Tree updates automatically when sync files change (500ms debounce)
- **Copy instance path**: Right-click to copy `game.Workspace.Part` style paths

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `robloxExplorer.syncRoot` | `""` | Absolute path to the `wrox-project-sync` root. If empty, it is auto-discovered. WROX uses `{projectRoot}/wrox-project-sync`. |
| `robloxExplorer.hidePropsFiles` | `false` | Hide sync artifact files (`.props.json`, `_tree.json`, `.value.json`) in the default VSCode explorer. |
| `robloxExplorer.autoRefresh` | `true` | Auto-refresh tree when sync files change. |
| `robloxExplorer.showSyncStatus` | `true` | Show sync status decorations on tree items. |

## Commands

| Command | Description |
|---------|-------------|
| `WROX Explorer: Refresh` | Manually refresh the instance tree |
| `WROX Explorer: Search Instances` | Search instances across all services |
| `WROX Explorer: Open Backing File` | Open the file backing a selected instance |
| `WROX Explorer: Copy Instance Path` | Copy the full instance path (e.g. `game.Workspace.Part`) |
| `WROX Explorer: Reveal in Explorer` | Show the backing file in the default VSCode explorer |

## Related

- [Sync Deep Dive](../sync/overview.md)
- [Installation Guide](README.md)
