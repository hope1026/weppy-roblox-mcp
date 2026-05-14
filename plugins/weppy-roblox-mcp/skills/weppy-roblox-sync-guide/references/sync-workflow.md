# Sync Workflow Reference

WEPPY sync mirrors Roblox Studio content into local files under `weppy-project-sync`.

## Lifecycle

1. Check the connected place and sync status.
2. Start full sync from Studio while Studio is in edit mode.
3. Let incremental Studio changes flow to files according to direction policy.
4. Let local file changes become reverse pending changes according to direction policy.
5. Use sync history, progress, and read/write actions for inspection and targeted edits.
6. Stop sync before changing project root or when Studio disconnects.

## Directions

Direction values:
- `forward`: Studio is authoritative.
- `reverse`: local files are authoritative.
- `bidirectional`: both sides can change; conflicts require resolution.

Category keys:
- `scripts`
- `values`
- `data`
- `containers`
- `services`

Default direction is `forward`. Default apply mode is `manual`. Basic tier forces safer manual behavior; Pro enables broader bidirectional workflows.

## Multi-Place

The project sync root is `${resolvedProjectRoot}/weppy-project-sync`. Place data is isolated in `place_<id>/` directories. The runtime keeps one active project sync root and stores place metadata separately.
