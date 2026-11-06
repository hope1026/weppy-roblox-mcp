---
name: weppy-roblox-game-presentation-guide
description: Help compose Roblox game worlds, characters, and in-game UI from a short game request or a visual refinement task, with context-sensitive presentation and UX recommendations. Use for game creation and visual decisions, not ordinary code fixes or MCP setup.
---

# WEPPY Roblox Game Presentation Guide

Help the player understand the game through its world, characters, and interface. These are optional design techniques, not a required look, production checklist, or approval process.

## Choose a useful first direction

Start from the user's request and existing project: what the player does, what the camera shows, what matters at this moment, and which inputs and displays the game supports. For a short creation request, choose a reasonable, revisable direction and build within the authorized scope. State consequential assumptions briefly; do not ask the user to approve every icon, opacity, image, or placement. Ask only when a missing choice materially changes the requested outcome.

An existing game's visual language and explicit choices take priority over these suggestions. A request to align one icon calls for that adjustment, not a new art direction. Keep advice-only work advisory; creation or repair already authorizes suitable scoped implementation. A declined suggestion need not be offered again.

For a new game, a useful starting point is one small scene seen through the intended camera: a character or existing avatar, a meaningful interaction, and the UI that supports it. Review these together before expanding when that helps. This is not a prerequisite for a small edit. Avoid inventing currencies, combat, rarity, inventories, or quests just to demonstrate a pattern.

For UI, start from the player's decision, camera and input context. Use the [game UI patterns](references/game-ui-patterns.md) for role anatomy, coherent visual direction and relevant state combinations. Preserve suitable project choices; technical sizing and platform evidence come from the UI Studio runtime guide.

If a generated UI concept or external gameplay screenshot search would help choose a direction, first ask whether the user wants that exploration unless it is already authorized. An ordinary UI creation request or an available image tool does not supply that consent. Follow only the chosen method, reuse explicit requests, and do not repeat a declined offer. An unanswered offer does not authorize exploration; continue suitable creation using the supplied references and project. Small edits may need no offer. See the [visual reference workflow](references/visual-reference-workflow.md) for presenting choices and distinguishing concepts from observed Studio results and production assets.

## Read only what the task needs

- [Game UI patterns](references/game-ui-patterns.md): player decisions, role anatomy, item-centered hierarchy, project visual direction, optical alignment and combined control states.
- [World and character presentation](references/world-and-character-presentation.md): camera, scale, movement space, wayfinding, silhouettes, and coherent presentation.
- [Visual reference workflow](references/visual-reference-workflow.md): learning from actual images, optional before-and-after examples for badges, text hierarchy, motion and resizable frames, and retaining project-specific decisions.

For image parts, consider the available `weppy-roblox-assets-guide` and its [generated assets reference](../weppy-roblox-assets-guide/references/generated-assets.md). Native shapes, existing assets, generated images, and intentional restraint are all viable. If useful tools are unavailable, continue with an honest supported alternative. Do not invent asset IDs or claim to have inspected images you could not open.

For Studio operations, use the available `weppy-roblox-mcp-guide`; for natural terrain, the `weppy-roblox-environment-guide`; for requested feedback tuning, the `weppy-roblox-game-feel-guide`. Loading this guide does not require those workflows or adding effects.

## Observe and adapt

When practical, look at the representative game view and relevant state transitions. Explain what you observed and improve what serves the request. A still image supports composition review, not proof of working interactions. If the user keeps a design, preserve it and report concrete unresolved issues without imposing a restyling loop. No fixed layout, transparency, image count, slice technique, visual score, screenshot quota, or review verdict is a condition for creation or delivery.

Reuse user corrections within their stated scope: one component, one screen, or this project. Existing project notes or tokens can retain those decisions; a new manifest is not required. Do not turn a local preference into a rule for unrelated games.
