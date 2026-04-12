# Sync

> Monitor the current status, direction settings, and logs for Studio <-> local file synchronization.

![Sync — Sync status, direction settings, and logs](../../assets/screenshots/dashboard/dashboard_sync.png)

> For a detailed guide on the Sync feature itself, see the [Sync Deep Dive](../sync/overview.md).

## Overview

The Sync page provides a visual overview of the current state and settings for Studio <-> local file synchronization. It is accessible only when the dashboard is in the **Studio connected** state.

## Sync Status

Displays the current sync state:

| Status | Meaning |
|--------|---------|
| **Idle** | Waiting for sync |
| **Initializing** | Initial sync in progress |
| **Syncing** | Incremental sync in progress |
| **Error** | Sync error occurred |

The status card also shows the sync path, number of synced instances, and the current apply mode (Auto/Manual).

## Sync Directions

Shows sync directions by type in a table:

| Column | Description |
|--------|-------------|
| Type | Sync target type (Scripts, Values, Instances, Data, Services) |
| Direction | Sync direction (Local -> Studio, Studio -> Local) |
| Apply Mode | Apply mode (Auto/Manual) |

Check each type's sync direction to understand which changes are reflected in which direction.

## Sync Log

Displays sync events in chronological order. Each log entry includes a change type tag (create, update, delete, etc.) and the target path.

## Use Cases

### Checking Sync Status

```
"I want to verify that Sync is working properly"
```

Confirm that Sync Status is Idle and check the Sync Log to verify that recent changes were recorded normally.

### Understanding Sync Direction

```
"I want to know which direction script changes are synced"
```

Check the Direction for the Scripts type in the Sync Directions table.

## Related Documents

- [WEPPY Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Sync Deep Dive](../sync/overview.md)
