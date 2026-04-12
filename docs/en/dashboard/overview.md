# Dashboard

> Monitor and manage the MCP server's status, connections, sync state, tool execution history, and game change log in real time from your web browser.

![WEPPY Dashboard Overview — Server status, recent changes, and session summary at a glance](../../assets/screenshots/dashboard/dashboard_overview.png)

## What Is the Dashboard?

The dashboard is a web-based monitoring interface provided by the MCP server. It opens automatically in your browser when the MCP server starts, letting you track every action the AI agent performs in Roblox Studio in real time.

- Visually monitor status without digging through terminal logs
- Track what the AI changed in Studio via the change history
- View sync status, connection state, and tool execution statistics in one place

## Pages

| Page | Description | Detailed Guide |
|------|-------------|----------------|
| [Overview](#overview) | Server/Plugin/Agent/Sync status cards, recent changes feed | This document |
| [Changelog](changelog.md) | Game change history — per-session cards, change summary, timeline, Before & After | [Detailed Guide](changelog.md) |
| [Connection](connection.md) | Server status, AI agent list, plugin connection info | [Detailed Guide](connection.md) |
| [Sync](sync.md) | Sync status, direction settings, logs | [Detailed Guide](sync.md) |
| [Playtest](playtest.md) | Playtest status, test history | [Detailed Guide](playtest.md) |
| [Tools](tools.md) | Tool execution history, statistics, tier distribution | [Detailed Guide](tools.md) |
| [Settings](settings.md) | License, log level, language | [Detailed Guide](settings.md) |

## How to Access

The dashboard opens automatically in your browser when the MCP server starts. To access it manually:

```
http://localhost:3002
```

> Set `DASHBOARD_AUTO_OPEN=false` to disable automatic opening (see the [Settings](settings.md) page).

## Connection States

The features available in the dashboard depend on the connection state:

| State | Condition | Available Pages |
|-------|-----------|-----------------|
| **Server disconnected** | Server not connected | Only the reconnection waiting screen is displayed |
| **Server connected** | Server connected, plugin not connected | Connection, Tools, Settings |
| **Studio connected** | Both server and plugin connected | All pages |

When the dashboard is in the **Server connected** state, the Overview, Changelog, Sync, and Playtest pages are inaccessible.

## Overview

The Overview page is the dashboard's home screen, providing a quick look at the entire system status.

### Status Cards

| Card | Information Displayed |
|------|-----------------------|
| **Server** | Server connection state (Online/Offline) |
| **Plugin** | Plugin connection state, Place info |
| **Agent** | Currently connected AI agent name |
| **Sync** | Sync state (Idle/Syncing/Error) |

### Recent Game Changes

Displays the most recent changes performed by the AI in Studio in real time (up to 20 items). Each item is shown with a change category icon, and clicking it navigates to the detailed view in [Changelog](changelog.md).

Category icons:
- Script — Script creation/modification
- Instance — Instance creation/deletion/movement
- Property — Property changes
- Lighting — Lighting/environment settings
- Terrain — Terrain changes
- Asset — Asset insertion

### Session Change Summary

Aggregates the current session's change statistics by category (e.g., "4 scripts · 3 properties").

## Real-Time Updates

The dashboard uses SSE (Server-Sent Events) to update data in real time:

- Server status: polled every 5 seconds
- Change feed, connection events: SSE real-time streaming
- On SSE disconnection: automatic reconnection after 3 seconds

## Related Documents

- [Changelog](changelog.md) — Game change history tracking
- [Connection](connection.md) — Server/Agent/Plugin connection status
- [Sync](sync.md) — Sync status monitoring
- [Playtest](playtest.md) — Playtest history
- [Tools](tools.md) — Tool execution history/statistics
- [Settings](settings.md) — License, server settings, language
- [Full Tool Reference](../tools/overview.md)
- [Sync Deep Dive](../sync/overview.md)
