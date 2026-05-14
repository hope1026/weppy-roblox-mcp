---
name: weppy-roblox-mcp-guide
description: Use when controlling Roblox Studio through WEPPY Roblox MCP, choosing MCP tool actions, creating or checking UI Studio interfaces, running playtests, inspecting logs, or verifying direct Studio workflows.
---

# WEPPY Roblox MCP Guide

## Overview

Use this skill to operate Roblox Studio through WEPPY Roblox MCP with the right tool/action sequence. Keep exact action and parameter lookup in references so the main workflow stays small.

## Workflow

1. Check connection and tier before mutating Studio. Use Basic-safe status actions first when available.
2. Choose the narrowest MCP action that matches the request. Read `references/mcp-actions.md` for exact action names, params, tier, route, and aliases.
3. For UI work, run the UI Studio loop in `references/ui-studio.md` instead of ad hoc GUI mutation.
4. For play mode, test scripts, logs, or dashboard reports, use `references/playtest.md`.
5. Prefer purpose-built tools over `execute_luau`. Use arbitrary Luau only when no typed action covers the request.
6. After mutating Studio, verify with a readback action, preview/check, logs, or playtest output depending on the workflow.

## References

- `references/mcp-actions.md`: generated MCP tool/action/parameter reference.
- `references/ui-studio.md`: UI Studio design brief, create/update, preview, and Design Check loop.
- `references/playtest.md`: playtest controls, automated test runner, logs, and screenshot limitations.

## Guardrails

- Do not invent Roblox asset IDs. Use user-provided IDs or an explicit accepted asset search result.
- Do not call Edit-mode screenshot capture while a playtest is active.
- Do not present Design Check suggestions as mandatory failures.
- Do not expose raw action counts in user-facing marketing copy.
