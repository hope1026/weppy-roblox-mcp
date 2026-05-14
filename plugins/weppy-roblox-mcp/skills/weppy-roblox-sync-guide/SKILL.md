---
name: weppy-roblox-sync-guide
description: Use when working with WEPPY Roblox MCP Studio-local sync, bidirectional file mirrors, sync directions, multi-place project folders, conflicts, reverse apply, or Roblox Explorer context.
---

# WEPPY Roblox Sync Guide

## Overview

Use this skill when local files and Roblox Studio state must stay aligned through WEPPY sync. Load only the reference that matches the sync problem.

## Workflow

1. Inspect current place and sync status before changing files or directions.
2. Confirm the intended direction model: `forward`, `reverse`, or `bidirectional`.
3. Use the v2 nested directory format when reading or editing mirrored files.
4. Treat play mode as a sync suppression window; reconcile after play exits.
5. Resolve conflicts according to direction policy, not by silently overwriting both sides.
6. Verify by checking sync status, changed files, and Roblox Explorer when relevant.

## References

- `references/sync-workflow.md`: status, directions, apply modes, and runtime lifecycle.
- `references/sync-format.md`: v2 nested directory and file naming rules.
- `references/conflicts.md`: direction enforcement and conflict resolution.
- `references/roblox-explorer.md`: VSCode Explorer view over the sync mirror.

## Guardrails

- Do not start sync while Studio is in play mode.
- Do not migrate or delete old sync roots automatically.
- Do not assume one active sync root per place; the project has one active `weppy-project-sync` root with isolated `place_*` children.
- Do not treat `__MCP_*` temporary test instances as synced game content.
