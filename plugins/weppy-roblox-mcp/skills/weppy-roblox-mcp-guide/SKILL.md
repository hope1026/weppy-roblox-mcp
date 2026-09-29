---
name: weppy-roblox-mcp-guide
description: Use when controlling Roblox Studio through WEPPY Roblox MCP, choosing MCP tool actions, selecting among multiple connected Studio targets, creating or checking UI Studio interfaces, running playtests, inspecting logs, or verifying direct Studio workflows.
---

# WEPPY Roblox MCP Guide

## Overview

Use this skill to operate Roblox Studio through WEPPY Roblox MCP with the right tool/action sequence. Keep exact action and parameter lookup in references so the main workflow stays small.

## Workflow

1. Check connection, tier, and connected Studio targets before mutating Studio. Use Basic-safe status actions first when available.
2. If more than one Studio target is connected, read `references/multi-studio-routing.md`, select one target, and keep its selector on related calls.
3. Choose the narrowest MCP action that matches the request. Read `references/mcp-actions.md` for exact action names, params, tier, route, and aliases.
4. For UI work, follow `references/ui-studio.md` for review or authorized creation/repair, including the distinction between observed facts, official platform guidance, and AI recommendations.
5. For play mode, test scripts, logs, or dashboard reports, use `references/playtest.md`.
6. Prefer purpose-built tools over `execute_luau`. Use arbitrary Luau only when no typed action covers the request.
7. After mutating Studio, verify with a readback action, preview/check, logs, or playtest output depending on the workflow.

## References

- `references/mcp-actions.md`: generated MCP tool/action/parameter reference.
- `references/multi-studio-routing.md`: deterministic target selection and selector precedence.
- `references/ui-studio.md`: UI Studio design brief, create/update, preview, and Design Check loop.
- `references/playtest.md`: playtest controls, automated test runner, logs, and screenshot limitations.

## Guardrails

- Do not invent Roblox asset IDs. Use user-provided IDs or an explicit accepted asset search result.
- Do not call Edit-mode screenshot capture while a playtest is active.
- Do not present Design Check suggestions as mandatory failures.
- Do not expose raw action counts in user-facing marketing copy.
