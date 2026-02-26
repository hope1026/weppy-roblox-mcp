# Roblox MCP Sync Deep Dive

Sync connects Roblox Studio state and local files so AI can read and modify the full project context reliably.

## Why Sync matters

Without Sync, AI only sees snippets pasted into chat. With Sync enabled, AI works from the whole project.

- Apply refactors consistently across multiple scripts
- Review risky changes quickly using history
- Keep source-of-truth clear between Studio and local files

## How it works

![Sync workflow — Studio tree mirrored to local files](../../assets/screenshots/sync.png)

1. Full Sync: initial mirror from Studio tree/instances to local files
2. Incremental Sync: continuous update of new changes
3. History/Status tracking: inspect what changed, when, and in which direction

Default local path is `roblox-project-sync/place_{placeId}/explorer`.

## Basic vs Pro

| Item | Basic | Pro |
|------|------|-----|
| Sync direction | Studio -> Local | Bidirectional |
| Per-type Direction | Not supported | Supported (Scripts / Values / Containers / Data / Services) |
| Per-type Apply Mode | Not supported | Supported (Auto / Manual) |
| Status/history APIs | Not supported | Supported (`status`, `history`, `progress`) |
| `manage_sync` tool | Not supported | Supported |
| Multi-place sync | Not supported | Supported (up to 3 places) |

## Sync targets and default exclusions

Default syncable services:

- `Workspace`
- `Lighting`
- `ReplicatedStorage`
- `ServerStorage`
- `ServerScriptService`
- `StarterGui`
- `StarterPlayer`
- `StarterPack`
- `ReplicatedFirst`
- `SoundService`
- `Chat`
- `LocalizationService`

Default exclusions:

- Classes: `Terrain`, `Camera`
- Security-restricted paths: `CoreGui`, `CorePackages`, `RobloxScript`, `RobloxScriptSecurity`

## Direction and Apply Mode

### Direction (per-type sync direction)

- `forward`: Studio -> Local
- `reverse`: Local -> Studio
- `bidirectional`: both directions

Types are managed separately: `scripts`, `values`, `containers`, `data`, `services`.

### Apply Mode (how reverse changes are applied)

- `manual`: user confirms before applying to Studio
- `auto`: detected changes are auto-applied

In Pro, Direction and Apply Mode can be controlled per type.

## `manage_sync` action guide (Pro)

| Action | Description | Key params |
|------|------|-----------|
| `status` | Check current sync state for a place | `placeId` |
| `config` | Get sync configuration | `placeId` |
| `history` | Query change history | `placeId`, `query.limit`, `query.offset` |
| `directions` | Get per-type direction settings | `placeId` |
| `read_file` | Read a synced file | `placeId`, `instancePath` |
| `write_file` | Write a synced file | `placeId`, `instancePath`, `content` |
| `progress` | Get realtime sync progress/throughput | `placeId` |

## Recommended workflow

### 1) Start safely

- Complete Full Sync first to establish a stable baseline
- Start with `manual` apply mode to reduce risk

### 2) Work with AI

- "Check sync status, then summarize only risky changes from recent history"
- "Refactor scripts in `ServerScriptService` first and include history output"

### 3) Resolve conflicts

When changes are detected on both Studio and local sides during bidirectional sync, a conflict resolution dialog appears.

![Local Changes Detected — conflict resolution options (Studio Priority / Local Priority / Per-File)](../../assets/screenshots/sync_conflict.png)

- **Studio Priority**: overwrite with Studio state as the source of truth
- **Local Priority**: apply local files to Studio
- **Per-File**: choose which side takes priority for each file individually

### 4) Recover when needed

- Track recent entries with `history`
- Inspect target file with `read_file`
- Restore content with `write_file`, then verify Studio state

## Related docs

- [Tools Overview](../tools/overview.md)
- [Pro Upgrade Guide](../pro-upgrade.md)
