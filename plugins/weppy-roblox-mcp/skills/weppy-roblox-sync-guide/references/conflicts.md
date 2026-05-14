# Sync Conflict Reference

Sync conflict handling follows direction policy. Do not resolve by guessing which side is newer without checking the direction and conflict payload.

## Enforcement

Studio to file:
- `forward` and `bidirectional` categories write Studio changes to local files.
- `reverse` categories do not write Studio changes to files; the local state is queued to restore Studio.

File to Studio:
- `reverse` and `bidirectional` categories become reverse pending changes.
- `forward` categories are treated as local dirty files that should be restored from Studio.

Post-play reconciliation:
- `forward` dirty files restore from Studio without a conflict dialog.
- `reverse` dirty files preserve local content and apply it back to Studio.
- `bidirectional` dirty files are the only category that should ask the user to choose Studio or Local.

## Resolution Semantics

`apply-studio` must overwrite disk content with the last Studio payload, not only update hashes. Script conflicts need source text. Props conflicts need the full serialized props payload.

## Temporary Instances

Instances whose names start with `__MCP_` are temporary WEPPY test/control objects and must not be treated as synced game content.
