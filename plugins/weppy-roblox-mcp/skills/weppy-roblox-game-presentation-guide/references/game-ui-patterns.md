# Game UI Patterns

This reference owns visual composition decisions. Use the [UI Studio runtime guide](../../weppy-roblox-mcp-guide/references/ui-studio.md) for current execution, platform evidence and responsive guidance, and the [asset reference](../../weppy-roblox-assets-guide/references/generated-assets.md) for image delivery. Choose patterns for the actual game; no pattern is a fixed skin, completion checklist or reason to invent features.

## Read the player's decision

Identify what the player must notice, decide and do. Include the camera and input context, information urgency and frequency, actual data, and existing project art. A short request permits a reasonable revisable direction. A missing concept leaves genre and world art unspecified; it does not require a product-dashboard aesthetic or an automatic fantasy/SF preset.

Determine how the current UI should inform this request. An explicit temporary prototype can provide data and working actions while the appearance changes. An established design is a continuity reference when that matches the user's goal. Keep unknown status explicit, distinguish observations from inference, and judge function, layout, style and assets separately. Offer a concise recommendation grounded in the request and ask only about decisions that affect the result. Record the chosen scope through the UI Studio assessment guidance when useful.

If the screen job remains unclear after inspecting the project, a brief choice between concrete screen scopes can help: recommend one, allow a free-form answer and include a “decide for me” path. Ask only unknown decisions that affect the result. Selecting an authorized similar-game reference search can provide contextual examples; matching a genre is not a reason to copy an exact layout. Existing project visuals and explicit user choices take priority.

For first creation, compose from those decisions. For quality improvement, inspect the visible issue and controller before choosing a repair, refinement or recomposition. Preserve behavior, data and state meaning; if hierarchy is the problem, size and content allocation may change within scope. A narrow edit keeps its narrower boundary. Review-only ends at recommendations.

Screen job and presentation are separate: gameplay HUD supports the world view; inventory can be a focused overlay or a fuller screen; an intro supports entry to play. Share visual expression and state meanings across the game without copying one navigation shell, backdrop or layout into every screen. Modal focus does not authorize pausing the simulation or disabling controls.

## Start from the way the game plays

Use these examples to choose roles, relative locations and when each element appears. Pick the applicable pieces for each screen. A mixed game can use different rows at different moments. Check the actual camera, player task, input, Roblox UI, existing HUD and explicit preferences before choosing a position. Leave out roles unsupported by the game. Keep art direction separate from the layout.

| Play pattern | In-play HUD and controls | Screens opened separately |
| --- | --- | --- |
| First-person combat | Reserve the aim area. A central reticle and momentary hit or reload cue can follow the sightline. Try a compact ammo and weapon readout along a lower edge, with match information above the sightline when rounds matter. Show a quick-switch row only for selectable weapons. | A few weapons fit a short list and selected-weapon detail. A larger loadout can open from the lobby or on demand. |
| Collection and upgrades | Put currency near storage capacity when players use both to choose when to sell. Give collect or sell actions a reachable spot when available. Keep slower progression and boost details secondary. | Use a dense storage grid when players scan many items. Use an upgrade list when the decision is current value, new value and cost. |
| Running or obstacle courses | Keep timing, stage or checkpoint progress compact at an upper edge. Reserve the route and next landing area. Place retry or continue near the result only when the run ends or fails. | Cosmetics or level selection fit the start area or results when they exist. Omit a bag if there are no items to manage. |
| Vehicle racing | Preserve road and turn visibility. Try rank, lap and timing together up top, with speed and gear on a lower edge and boost near the appropriate input. Leave touch steering and pedals clear. | A garage or dealer can show the vehicle, compare handling or speed, and put price next to the purchase decision. |
| Action RPG | Put skills and cooldowns near their inputs, with player status and objectives at suitable edges. A small icon can disclose secondary menus while keeping combat clear. | Use a compact item grid for many comparable items, with details and equip state tied to selection. On smaller displays, let details replace or follow the grid. Add price and purchase availability for a shop. |

The [Roblox laser-tag wireframe](https://create.roblox.com/docs/tutorials/curriculums/user-interface-design/wireframe-your-layouts) and [Spellbound RPG example](https://create.roblox.com/docs/production/game-design/ui-ux-design) show why aiming, frequent controls and optional menus need different space and timing. The table applies those principles as examples. For Layout Plan, use the existing roles and preferences with a short reason for each chosen placement or visibility. Prefer real project evidence to an example when they disagree.

## Give each role a readable anatomy

Use these relationships as examples, not required widgets, positions, proportions or imagery:

| Role | Put the decision first | Avoid by habit |
| --- | --- | --- |
| Continuous status | Gauge/track and a prominent current value; a meaningful change or danger cue when that state exists | A small progress line buried in a document-like summary card |
| Resource readout | Recognizable sign or short label next to the value | A separate heading/body card for each number |
| Quick slot | Item identity, actual input cue and persistent equipment state | A row of identical text commands that hides which object is in hand |
| Context action | Target/action meaning, current binding and outcome | A permanent long explanation styled like an unrelated navigation button |
| Inventory | Readable slots for scanning owned items, with selection, equipment and stack count conveyed when relevant | A large card with a full description for every item in a dense bag |
| Shop | Readable merchandise, price, currency, relevant conditions and purchase availability | A generic action button that leaves the cost or purchase conditions unclear |
| Primary action | A verb and a visible, reachable action surface with relevant feedback | Giving navigation, passive data and execution the same emphasis |

Plan the composition alongside suitable parts. A frame's corners, a title banner's proportions and the smallest useful icon size inform spacing and hierarchy. When the user delegates a finished set, carry the visual direction through to the actual panel, button, slot and state treatments. Read the result in player order: object or value, current state, then action. Test whether badges and names remain readable at their intended size, and whether their position preserves the control and playfield. Use the runtime guide for choosing a direction, deciding when to pause for review and reporting unfinished work.

Before settling a new or redesigned screen, present an asset recommendation tied to a visible role. For an FPS HUD, you might recommend the current weapon artwork for the weapon indicator so it matches the equipment on screen. For an inventory, you might recommend the existing item art and a panel surface that fits the collection. If suitable art is unavailable or the user prefers native UI, recommend a concrete treatment within those constraints. The user chooses whether to apply the asset.

Item-first does not require generated art. Use coherent native silhouettes, reviewed symbols, existing item imagery or intentional text treatment. A large rectangular panel, a list/detail split, flatness or repeated cells can serve a game well. Judge their actual content and reading order. Added border art does not repair a weak hierarchy.

A selected object's appearance, name, relevant information and action can form one focused unit. A comparison may keep baseline and change together; equipment may relate slots to the avatar; crafting may link inputs and result. Use these only when the game has those decisions. Mark sample data briefly without filling player-facing descriptions with implementation explanations.

## Match item density to the screen's job

For a bag the player repeatedly scans, use compact, consistent slots with distinct icons and a stack count or equipment mark where the game has one. Let the chosen slot reveal its name, attributes and equip or use action in one detail area. Size the grid for the supported input and representative item count. A side detail panel can become an on-selection view on narrow screens. Empty cells can explain capacity when the game tracks it. A small equipment comparison can devote more space to each item.

For a shop, choose the presentation according to what the player needs before purchase. Comparable goods can share a card grid. Goods with important descriptions or terms can use rows or larger cards. Group different offers when the distinction helps, and keep the real currency, price, conditions and available action readable together. Preserve owned, locked and insufficient-funds states where the game supports them. Test selection and scrolling with representative items. [Roblox grid and table layouts](https://create.roblox.com/docs/ui/grid-table-layouts) · [Roblox shop guidance](https://create.roblox.com/docs/production/game-design/monetization-foundations#the-shop)

| Published Roblox example | Composition to study |
| --- | --- |
| [BotClash Simulator collection](https://prod.docsiteassets.roblox.com/assets/game-design/ui-ux-design/ui-ux-design-12.png) | Many compact object tiles with state marks and a larger selected-object view. |
| [Winds of Fortune clothing shop](https://prod.docsiteassets.roblox.com/assets/game-design/ui-ux-design/ui-ux-design-13.png) | Rows join the garment, name and currency price for scanning and comparison. |
| [Tower Defense Simulator shop](https://prod.docsiteassets.roblox.com/assets/game-design/ui-ux-design/ui-ux-design-10.png) | Large skin previews and a grouped crate grid coexist. Prices and locked state sit at the action area. |
| [DOORS shop](https://prod.docsiteassets.roblox.com/assets/game-design/monetization-foundations/monetization-foundation-4.png) | Comparable currency amounts form a row, with distinct space for offers whose use and limits require explanation. |

These are published reference captures. Use the layout relationships to reason about the actual task and supported devices, and take capacity, offers and states from the project.

## Apply the player's current context

Roblox's [UI/UX guidance](https://create.roblox.com/docs/production/game-design/ui-ux-design) asks what players are doing and what they need for the next decision. In a dense RPG-style inventory, readable object tiles and selected-item details can work together; show selection, equipment and directional focus as independent meanings, including when the selected and equipped items differ. A label, symbol or outline can reinforce the distinction without relying on color alone ([accessibility guidance](https://create.roblox.com/docs/production/publishing/accessibility#color-non-reliance)).

In an FPS-style view, consider the aim, target and normal movement sightline before placing UI. Present ammunition, reload and condition cues only when those states exist, using compact readable elements and brief meaningful feedback without obscuring the target. These examples do not prescribe positions or add mechanics. Adapt hints, focus and grouping to supported inputs and viewports, and label simulated or untested device coverage ([adaptive design](https://create.roblox.com/docs/production/publishing/adaptive-design)).

## Connect visual direction and roles

Let project art and explicit user choices set shape, material, typography, icon treatment, surface depth and motion. Reuse a small project vocabulary while allowing roles to differ: a quiet reading surface, a tactile action and a discrete object slot need not have identical borders or radii. Across different concepts, ask what changed beyond hue without forcing a quota or randomizing identical inputs.

Choose the panel silhouette, surfaces, item or value emphasis and controls together in the first composition. Carry over useful relationships from a reference and choose their expression for this game. A coherent item family can share viewpoint, light and visual weight. Using the same illustration in the slot and detail view helps players recognize the selected object. If a reskin reads like the previous result, check which part of the silhouette, material or hierarchy still drives that impression. When the user approves the icons and asks for a new panel, focus the redesign on the panel and preserve the icon and interaction evidence.

For persistent HUDs, local support behind readable content often preserves the scene; focused reading may need a quieter opaque panel. Separate background opacity from text, icons and gauges. Look over bright, dark or busy gameplay when available. No universal opacity or screen-occupancy percentage applies.

Use material and depth to reinforce meaning, not to fill empty space. A native face/outline with a separate emblem can be cleaner than a generated frame over every rectangle. Image parts should match their actual display scale; detailed illustration and tiny text can pull the reading order in different directions.

## Preserve recognition and access

Judge painted icon bounds, optical center, occupied area and label spacing at actual display size; equal file dimensions do not guarantee equal visual weight. Preserve subject aspect ratio. Keep painted size separate from a reachable hit area, and avoid unverified glyphs whose appearance changes across clients.

Use the runtime guide for usable area, `AnchorPoint`, supported text-size behavior and platform controls. Retain suitable grouping during modest same-orientation resizing; adjust size/spacing or reflow where needed. Portrait and landscape can have different compositions. An Edit clone or simulator does not prove runtime adaptation or physical-device comfort.

Disclose detail when it reduces effort. Keep frequent actions, simultaneous comparison information and costs/consequences accessible before decisions. Preserve selection, scroll and relevant focus on return. Recommendation or goal-pinning examples apply only if that feature exists.

## Assemble and polish deliberately

Build controls as a single input target with only the useful visual layers: a face or stretchable background, frame, non-stretching icon, editable label, meaningful state indicators and optional effects. Distinct layers help when a part will resize, change state or be reused; a simple control or fixed image can be appropriate without extra layers. Check clipping, aspect and double outlines. Decorative children must not become competing inputs.

Present basic interaction feedback with the underlying state, not only at the final polish pass. When requested or delegated, use final UI effects to reinforce actual actions: for example a panel transition, a value change or a button response. Keep timing and intensity appropriate to this game, avoid creating mechanics for effects and honor reduced motion. Rapid open/close or interruption must resolve to the most recent intended state without waiting for an animation. Audio uses only approved assets. Verify observed behavior separately from static visual presentation.

## Compose real states together

Selection, input focus, hover, pressed, equipment, grade, availability and pending state have different meanings. Apply only existing states. One possible allocation is selection on an outline, equipment on a labelled badge, grade on a motif and unavailability on the action with a reason; another visual direction can allocate them differently. Color can reinforce a readable label, symbol, shape or position without carrying the meaning alone.

Tabs switch content, a single-choice group selects a value, and an action executes a verb. Their grouping, shape, wording and persistent/transient states should make the role clear. Shared visuals are fine when the roles remain understandable. Hover alone does not expose an action to touch or directional focus.

For unavailable actions, show the real cause and an accessible next option; pending is not success, and loading/error are not an empty inventory. Do not invent those states for decoration. When comparing stats, show baseline, unit and result; beneficial meaning comes from the stat, not the sign (a shorter cooldown may help). Preserve actual formulas and balance.

## Review the result, not the ingredient count

Inspect a relevant component at actual size and in its full screen context. Ask what reads first for the player's next decision, whether icon scale and viewpoint, type and surfaces belong together, whether edges and text hold up at use size, and whether the UI fits the world and situation. An inventory can foreground the selected object and equipment cue. An ammo HUD can foreground the current count and reload status while leaving the view clear. Compare the same camera, viewport, content and state where possible, and report any differences. Record visual judgment, asset loading and input evidence separately. Record skipped states instead of inferring them from a still image.

If the user keeps a design, preserve it. Keep useful corrections scoped to a component, screen or project using existing notes/tokens; no new manifest, screenshot quota, score or review gate is required. For image-boundary and slice inspection, follow the asset reference rather than duplicating its checklist here.
