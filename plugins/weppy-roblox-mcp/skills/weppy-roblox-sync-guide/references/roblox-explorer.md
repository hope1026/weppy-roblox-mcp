# Roblox Explorer Reference

The WEPPY Roblox Explorer VSCode extension reads the local sync mirror. It does not talk directly to Roblox Studio for tree data.

## Data Source

Explorer reads from:

```text
weppy-project-sync/place_<id>/explorer/
```

It uses service `_tree.json` files plus adjacent synced script, props, and value files to render the tree and resolve file opens.

## What To Check

- Confirm the active place ID before interpreting Explorer output.
- If Explorer looks stale, verify sync status and whether the active sync root changed.
- Collision suffixes such as `~1` are path identity, not display decoration.
- File watch refresh depends on the mirrored files changing; plugin disconnection or play-mode suppression can make Explorer appear unchanged.

## User Guidance

When using Explorer as evidence, describe the synced path and place ID. If a user expects Studio state but Explorer shows old data, check sync status before editing local files.
