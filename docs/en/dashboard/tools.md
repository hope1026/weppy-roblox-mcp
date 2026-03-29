# Tools

> View the execution history and statistics of MCP tools run by the AI.

![Tools — Tool execution history and statistics](../../assets/screenshots/dashboard/dashboard_tools.png)

## Overview

The Tools page provides the execution history and statistics of MCP tools run by the AI. It consists of two sub-tabs: **History** and **Statistics**. It is accessible whenever the dashboard is in the **Server connected** or **Studio connected** state.

## History Tab

Shows tool execution records in a chronological table:

| Column | Description |
|--------|-------------|
| Time | Execution time |
| Tool.Action | Executed tool and action (e.g., `query_instances.get_instance`) |
| Duration | Execution duration |
| Status | Result status (OK/Error) |
| Tier | Tier used (Basic/Pro) |

Features:
- **Tool filter** dropdown to show only a specific tool
- Pagination for browsing large volumes of records
- New execution records are added in real time

## Statistics Tab

Provides visual analysis of tool usage statistics:

- **Tier distribution** — Basic/Pro tool usage ratio
- **Per-tool statistics** — Call count and average response time for each tool
- **Per-action breakdown** — Detailed statistics for each action within a tool

## Basic Tier-Exclusive Features

Additional UI is displayed for Basic tier users:

- **Tier Usage Progress** — Usage progress bar
- **Basic vs Pro comparison modal** — Information about additional Pro tier features

## Use Cases

### Analyzing Tool Performance

```
"I want to know which tool takes the longest"
```

Check the average response time per tool in the Statistics tab.

### Tracking Errors

```
"I want to find out why the tool I just ran failed"
```

Find items with an Error status in the History tab to view detailed information.

## Related Documents

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Settings](settings.md)
- [Full Tool Reference](../tools/overview.md)
