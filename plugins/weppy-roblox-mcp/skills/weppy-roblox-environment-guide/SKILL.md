---
name: weppy-roblox-environment-guide
description: Use when building natural Roblox backgrounds through WEPPY Roblox MCP - generating realistic terrain with biome presets, applying environment mood presets (lighting, atmosphere, sky, water), scattering props, and iterating with screenshot verification.
---

# WEPPY Roblox Environment Guide

## Workflow

1. Identify the requested background: biome (terrain shape), mood (time of day and weather), and props.
2. Read `references/environment-workflow.md` for the full generate -> mood -> scatter -> verify loop.
3. Read `references/preset-catalog.md` before choosing biome or mood presets or customizing them.
4. Generate terrain first with `manage_terrain` action `generate` using a biome preset. Terrain and mood are independent - either can be used alone.
5. Apply `manage_lighting` action `mood` for the scene atmosphere. Use `overrides` for fine-tuning instead of manual property calls.
6. Scatter props with `mutate_instances` action `scatter` after inserting one template instance per prop kind.
7. Verify visually with `manage_camera` action `screenshot` and iterate by changing seed or preset parameters.

Read `../weppy-roblox-mcp-guide/references/mcp-actions.md` for exact action schemas and parameters.

## Guardrails

- Regions longer than 1024 studs per side are rejected - split into tiles and enable `edgeBlend` so tiles connect seamlessly.
- Reuse the same `seed` to reproduce a result you liked; change only the parameter you want to move.
- Never invent skybox texture asset IDs. Only pass verified IDs through the `sky` section of `overrides`.
- All environment actions are Pro tier.
