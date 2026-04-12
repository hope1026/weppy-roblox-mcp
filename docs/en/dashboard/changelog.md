# Changelog

> Records every change the AI performs in Roblox Studio on a per-session basis, providing change summaries, timelines, and Before & After comparisons.

![Changelog — Per-session change card list](../../assets/screenshots/dashboard/dashboard_changelog1.png)

## Overview

The Changelog page tracks the history of game changes made by the AI agent in Studio. Changes are grouped by session, making it easy to see what kinds of changes occurred and how many in each session at a glance.

## Session Card List

The Changelog's main view shows a list of cards organized by session.

### Session Status

Each session card displays a status:

| Status | Meaning |
|--------|---------|
| **Active** | Currently in-progress session (updates in real time) |
| **Completed** | Finished session |
| **Bootstrap** | Initial sync session |

### Session Summary

Each card includes a summary of change counts by category:

- Script — Number of scripts created/modified
- Instance — Number of instances created/deleted/moved
- Property — Number of property changes
- Lighting — Number of lighting/environment changes
- Terrain — Number of terrain changes
- Asset — Number of assets inserted

### Filter Tabs

Use the tabs at the top to filter sessions:
- **All** — All sessions
- **Active** — In-progress sessions only
- **Completed** — Finished sessions only

## Session Detail View

Click a session card to enter the detail view.

![Changelog Detail View — Change summary, timeline, Before & After](../../assets/screenshots/dashboard/dashboard_changelog2.png)

### Change Summary

Visualizes the session's changes as 6 category cards:

| Category | Icon | Description |
|----------|------|-------------|
| Scripts | Script | Number of scripts created/modified |
| Instances | Instance | Number of instances created/deleted/moved |
| Properties | Property | Number of property changes |
| Lighting | Lighting | Number of lighting/environment changes |
| Terrain | Terrain | Number of terrain changes |
| Assets | Asset | Number of assets inserted |

### Change Timeline

Lists all changes within the session in chronological order.

- Each item shows a timestamp, change category tag, and target path
- Use the **Category** dropdown to filter by a specific category
- Click an item to expand the Before & After comparison view

### Before & After

Compares data before and after a change. Different levels of detail are provided depending on the change type:

| Confidence | Meaning | Example |
|------------|---------|---------|
| **exact** | Both before and after values are precisely recorded | Property changes, script modifications |
| **partial** | Only some information is recorded | Compound changes |
| **after-only** | Only the after value exists | New instance creation |
| **intent-only** | Only the intent is recorded | Deletions, etc. |

## Use Cases

### Verifying Work

```
"I want to check which scripts the AI just modified"
```

Filter the Active session by the Script category in Changelog to see the list of modified scripts and compare before/after code.

### Tracking Changes

```
"I want to review how Lighting was configured in yesterday's session"
```

Find the session in the Completed tab and filter by the Lighting category to view the change history and setting values.

### Debugging Issues

```
"I need to find when a specific instance was deleted"
```

Filter the timeline by the Instance category and trace delete-type changes chronologically.

## Related Documents

- [WEPPY Dashboard Overview](overview.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
