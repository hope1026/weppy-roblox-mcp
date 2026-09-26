---
name: weppy-roblox-game-feel-guide
description: Suggest context-sensitive Roblox game feel improvements for combat impact, reward collection, movement, and interaction feedback when users ask for polish, responsiveness, or help with a specific feel problem. Preserve the user's intent and game concept; ordinary game creation alone does not call for a polish pass.
---

# WEPPY Roblox Game Feel Guide

Help the user find feedback that serves their particular game. These are optional design techniques, not a required style or a checklist every game should satisfy.

## Start with the intended experience

Use the request and available project context to understand the desired feeling, pace, visual and audio language, control rules, and relevant accessibility preferences. Preserve explicit user choices over genre conventions. A genre label alone does not establish what this game should feel like.

Ask a focused question only when missing intent would materially change the recommendation. Reuse what the user already told you; conditional suggestions can be enough when the context is incomplete.

Quiet, abrupt, awkward, delayed, restrained, and highly precise responses can all be intentional. More animation, shake, sound, or input forgiveness is not automatically better. Keeping the current behavior or adding nothing is a valid recommendation. Do not introduce combat into a non-combat game or redesign its mechanics to create a use for an effect.

## Offer fitting options

Read the relevant sections of [game-feel-patterns.md](references/game-feel-patterns.md):

- **Combat impact:** hit confirmation, selective hitstop, anticipation, and recovery.
- **Reward collection:** authoritative rewards and optional presentation timing.
- **Movement:** input buffering, edge grace, and landing feedback.
- **Interaction feedback:** input acknowledgement, pending results, and success feedback.

Connect each useful option to the user's stated goal or an observed problem. Explain the expected benefit, the cost or mismatch to watch for, and how to judge the result. Offer only as many options as the task needs; do not invent problems to reach a quota. Treat durations, strengths, and curves as tunable choices, not universal defaults.

If a technique conflicts with the concept or an explicit preference, omit it. Do not keep promoting a declined effect through a different name. If the user requests an effect despite a tradeoff, help them realize that intent within the authorized scope.

## Match the requested level of action

A request for advice stays advisory. A request to implement or tune already authorizes work within that scope; do not add a separate approval step just because this guide was loaded. Loading this skill does not itself authorize edits to the game.

When implementation is requested, keep presentation changes distinct from damage, rewards, input rules, or other gameplay semantics. Check before changing semantics that the request actually includes those changes. For Studio operations, use the available `weppy-roblox-mcp-guide`; for edits to synced files, follow the available `weppy-roblox-sync-guide`. This guide does not define new tool actions or replace those workflows.

Evaluate the result against the intended experience, preferably with a focused before/after play comparison. Check responsiveness, readability, repeated events, and relevant interruption cases. A still screenshot can show composition but cannot establish timing or control feel. State what was observed and what remains a subjective tuning choice; do not claim universal improvement.
