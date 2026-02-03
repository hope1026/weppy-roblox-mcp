---
name: roblox-game-dev
description: Master orchestrator for Roblox game development. Use when creating games, adding features, or developing with Roblox Studio.
argument-hint: "[game description or feature request]"
---

# Roblox Game Development

Master orchestrator for Roblox game development using weppy-roblox-mcp.

## Workflow

```
USER REQUEST
     │
     ▼
┌─────────────────┐
│  1. SYNC        │  ← Use roblox-sync skill
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  2. PLAN        │  ← Analyze request, create plan
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  3. APPROVAL    │  ← User approves plan
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  4. DEVELOP     │  ← Execute with MCP tools
└────────┬────────┘
         │
    ┌────┴────┐
    │  SYNC   │  ← Re-sync after major changes (repeat as needed)
    └────┬────┘
         │
         ▼
┌─────────────────┐
│  5. COMPLETE    │  ← Final sync + Summary
└─────────────────┘
```

**IMPORTANT:** Run `roblox-sync` between development steps to keep local cache updated.

---

## Phase 1: SYNC

**Refer to:** `roblox-sync` skill

The sync skill handles:
- Connection check
- MCP tool loading
- Studio state synchronization
- Cache verification

**Wait for sync completion before proceeding.**

---

## Phase 2: PLAN

Analyze the user request and create a development plan:

1. **Understand requirements** - What does the user want?
2. **Check current state** - Read synced cache in `roblox-studio-sync/explorer/`
3. **Create task breakdown** - List specific tasks
4. **Identify assets needed** - Search using MCP tools

---

## Phase 3: APPROVAL

Present plan summary and get user approval before development.

---

## Phase 4: DEVELOP

> **CRITICAL:** Run `roblox-sync` after every major change to keep local cache in sync with Studio state.

### MCP Tools

Use `weppy-roblox-mcp` tools for all development tasks.

**Tool reference:** `references/mcp-tools.md`

For detailed parameters, check MCP tool definitions directly.

### Asset Search

**Primary method:** Use MCP `search_creator_store` tool directly for diversity.

```
search_creator_store({ query: "zombie R15 animated", assetType: "Model" })
```

**Secondary method:** If no suitable results or need verified assets, check `roblox-recommended-assets` skill.

### R15 Character Assets

When using R15 characters, apply animations from `references/animations.json`:

| Category | Animations |
|----------|------------|
| movement | idle, walk, run, jump, fall, climb, swim, swimIdle |
| combat | punch, slash, lunge, toolNone |
| emotes | wave, laugh, cheer, point, dance, dance2, dance3 |
| states | sit, death, gettingUp |

### Camera Focus

Always use `focus_camera_position` after creating/inserting objects:
- Set `respectAutoFocusSetting: true`
- Use appropriate distance and offset for object size

### Continuous Sync

Use `roblox-sync` skill to keep local cache updated during development:

| Timing | Action |
|--------|--------|
| After major changes | Re-sync affected services |
| After creating structures | Sync to verify hierarchy |
| Before next task | Ensure cache reflects current state |

This ensures accurate state awareness throughout development.

---

## Phase 5: COMPLETE

Provide summary:
- What was created
- What was modified
- Next steps for user

---

## Related Skills

| Skill | Purpose |
|-------|---------|
| `roblox-sync` | Studio synchronization |
| `roblox-recommended-assets` | Verified asset registry (use sparingly) |

---

## References

- `references/mcp-tools.md` - MCP tool list
- `references/animations.json` - R15 animation IDs
