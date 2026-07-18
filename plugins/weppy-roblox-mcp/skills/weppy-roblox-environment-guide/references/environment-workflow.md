# Environment Workflow

Standard loop for building a natural background from an empty or existing place.

## 1. Plan

- Confirm biome (mountains / hills / plains / dunes / islands / canyon), mood (10 presets), region size, and prop kinds.
- Pick a region whose sides are 1024 studs or less. For larger worlds, plan tiles and generate per tile with `edgeBlend.enabled = true`.

## 2. Terrain

- Call `manage_terrain` `generate` with `preset`, `region`, and a fixed `seed`.
- The engine applies multi-octave fBm noise, slope-based materials, smooth surface occupancy, and water fill (islands, or any `waterLevel`).
- To adjust: keep the `seed`, then override only what you need (`amplitude`, `waterLevel`, `materialPalette`, `octaves`).
- Clearing a bad attempt: `clear_bounds` with the same region, then regenerate.

## 3. Mood

- Call `manage_lighting` `mood` with one preset. It sets Lighting, Atmosphere, Sky, ColorCorrection/Bloom/SunRays, and Terrain water appearance in one call, idempotently.
- Fine-tune through `overrides` sections (`lighting`, `atmosphere`, `sky`, `effects`, `water`) instead of separate property calls.
- Terrain material colors are not changed by mood - use `manage_terrain` `colors_set` when a biome needs a different palette tone.

## 4. Props (scatter)

- Insert or build one template instance per prop kind (a tree, a rock) anywhere in Workspace.
- Call `mutate_instances` `scatter` with `templatePaths`, `region`, `count`, `seed`, and filters (`maxSlope`, `avoidWater`, `minSpacing`).
- Results land under a single Folder; delete the folder or undo once to remove the batch.

## 5. Verify and iterate

- Frame the scene with `manage_camera` `focus_position`, then `screenshot`.
- Judge: silhouette variety, no terracing stripes, believable cliff/shore materials, mood matching the request.
- Iterate by changing one variable at a time; the fixed seed keeps everything else stable.
