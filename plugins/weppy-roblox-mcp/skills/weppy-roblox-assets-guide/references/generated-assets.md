# Generated Assets Reference

When a finished set's visual direction is unresolved or a user reports that native blockout surfaces still look unlike their intended game UI, inspect candidate panel/button/slot parts as well as icons. Consider reviewed project skins, [free Creator Store assets](creator-store.md), and external free packs with confirmed usage terms. Inspect the actual visual fit for the role. Show real inspected examples with a recommendation if the user wants to choose. When the user delegates direction, choose a suitable candidate within existing authorization. Distinguish a functioning blockout from the requested visual result and report an unresolved gap honestly. Explicit native/text-only requests remain valid.

Choose generation only for the part that benefits from it. Existing project assets, reviewed shared parts and native UI are valid alternatives. For local AI images, confirm a callable image tool and a local output channel; do not infer capability from a model or client name. Missing capability uses a supported alternative rather than an invented asset ID.

## Source and authorization

Local image generation and Roblox upload have separate approval scopes. Reuse authorization already granted for the relevant operation. Before remote mutation, run the relevant preflight and obtain only missing authorization covering the actual files, count and Creator. Generation authorization alone does not grant upload authority. Use the [Studio upload](studio-upload.md) or [Open Cloud reference](open-cloud-upload.md) for the selected path; never ask for a raw credential in chat.

A whole-screen concept is not a production part or a working Studio interface. For optional UI concepts, use the [visual reference workflow](../../weppy-roblox-game-presentation-guide/references/visual-reference-workflow.md); a general UI request does not authorize concept generation. Honor an existing explicit request and do not repeat declined offers.

Save supported local outputs and preserve the input/source when useful. `manage_open_cloud_assets.upload` registers a stable local copy in the selected Asset Library scope; `manage_open_cloud_assets.link` reuses an existing Roblox ID. Do not upload again merely to use the same approved part in another UI.

## Choose a UI part before generating

A control may combine one input target with a native or stretchable image face, a separate icon, editable label, state cues and optional effects. Choose only useful layers; one fixed image or a simple native control can be enough. Keep changing names, values, state and behavior in editable native UI. A simple face, outline, gauge or state marker can be native; item imagery, a project-specific emblem or distinctive framing may benefit from an image. Do not replace every existing surface with the same generated border.

| Part | Composition and delivery |
| --- | --- |
| Fixed icon or portrait | Design for the smallest real use. Favor a clear silhouette, meaningful large features and sufficient line weight; added detail or upscale does not repair poor small-size recognition. |
| Stretchable frame | Keep distinctive ornament in fixed corners; use plain or even edge bands and center. Keep a non-stretching emblem separate and leave dynamic labels to the engine. |
| Existing approved set | Extend with the actual approved image as an editing reference when supported. Match perspective, lighting, material, edge treatment and visual weight; a style name alone does not establish that match. |

Use the image tool's real alpha support when available. A contrasting flat background plus removal is an alternative only when that removal path exists and its output can be inspected; it is not a universal provider rule. Do not ship a painted checkerboard as transparency.

## Inspect the delivered file and assembly

For an authorized generated frame that must resize, include the slice behavior in the production prompt. A full illustration with edge-to-edge motifs will distort when stretched. Ask for a single frame part whose corner ornaments remain outside the stretch zone. For example:

> Make one transparent game UI frame in the project's material and silhouette. Leave clean alpha around its outside. Fit each corner ornament entirely inside a fixed corner block. Between corners, use straight top and bottom bands that extend horizontally and straight side bands that extend vertically. Use an even, quiet center that can resize on both axes. Supply only the frame artwork. Put any large emblem on a separate part and leave all text, icons and dynamic states to native UI.

Before applying it, compare the same source as a full stretch and as a slice at the narrowest and widest relevant sizes. Use the output pixels to place slice lines, and adjust or reject art if a line cuts an ornament or produces seams. [Roblox 9-slice guide](https://create.roblox.com/docs/ui/9-slice)

The requested canvas size is not evidence of the actual file dimensions. Check the output's real size, painted bounds, transparent margin, subject aspect and optical alignment. Fit or intentional crop should preserve what the player needs to recognize. Normalize a set's apparent weight without stretching its subjects.

Inspect alpha boundaries on light/dark backgrounds and at real display size when practical: halo, color spill, residual pixels, inner contamination and broken contours are asset issues. Intentional wear belongs to the chosen surface treatment; it does not excuse unrelated pixels outside the silhouette. Preserve the original when producing a cleanup variant.

For 9-slice, choose `SliceCenter` and `SliceScale` from the actual usable image and target geometry after upload. Preserve fixed corners and verify all four edges at small and large uses. The imported source can differ from the generation output; do not copy source-pixel assumptions or another frame's coordinates. Tile repetition and stretching are different rendering choices. Atlas crop (`ImageRectOffset`/`ImageRectSize`) selects a region and is separate from slicing.

Check the composed native background, existing `UIStroke`, new image and state overlays together. An uncovered square background or doubled outline can remain outside a cut-corner frame. Decide which layer draws each boundary while preserving meaningful selection, equipment, grade and availability. Reuse a native tint/badge when it serves the state; do not generate one image for every state by default.

Upload completion and `IsLoaded` establish delivery/loading, not clean borders, readability or visual quality. Inspect relevant rendering separately and report what was not checked. Keep reusable approved IDs and known crop/slice choices in existing project/asset records where supported; no new manifest or compulsory review gate is needed. See [game UI patterns](../../weppy-roblox-game-presentation-guide/references/game-ui-patterns.md) for composition rather than asset-only fixes.

## Roblox model generation

1. Call `manage_assets.generate_model` with the requested prompt, schema mode, parent and review policy.
2. Treat the result as a Studio model path, not a remote Roblox asset or Asset Library item.
3. Use `manage_assets.review_model` when inspection or local registration is needed.
4. Confirm authorization covers temporary embedded-resource or remote upload before executing it.
5. Verify the model path, review/bounds, textures and returned Roblox IDs; never invent them.
