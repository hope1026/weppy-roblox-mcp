# Connection

> Monitor the connection status of the server, AI agents, and plugins all in one place.

![Connection — Server status, AI agents, and plugin connection info](../../assets/screenshots/dashboard/dashboard_connection.png)

## Overview

The Connection page lets you monitor all connection states of the MCP system in one place. It is accessible whenever the server is connected (L1 or above).

## Server Status

Displays key server information:

| Field | Description |
|-------|-------------|
| Status | Connection status badge (Online/Offline) |
| Version | MCP server version |
| PID | Server process ID |
| Uptime | Server uptime |
| Session ID | Current session identifier |
| Exec Path | Server executable path |

## AI Agents

Displays a table of currently connected AI agents:

| Column | Description |
|--------|-------------|
| Name | Agent name (e.g., Claude Code) |
| PID | Agent process ID |
| Working Dir | Agent working directory |
| Connected | Time since connection |

All agents are listed when multiple are connected simultaneously.

## Plugins

Displays a list of connected Roblox Studio plugins:

| Column | Description |
|--------|-------------|
| Place | Place name |
| Client ID | Plugin client identifier |
| Last Seen | Time of last communication |
| Version | Plugin version |

## Connection Log

Displays connection-related events in real time. Agent/plugin connect/disconnect events are automatically appended via SSE.

## Use Cases

### Diagnosing Connection Issues

```
"It seems like the AI isn't connecting to Studio"
```

Check whether Server Status is Online and whether a plugin appears in the Plugins table. You can trace connect/disconnect events in the Connection Log.

### Checking Agents

```
"I want to see which AI is currently connected"
```

Check the name, PID, and working directory of connected agents in the AI Agents table.

## Related Documents

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
