# Preset Catalog

## Biome presets (`manage_terrain` action `generate`)

| Preset | Shape | Water | Default palette (surface / cliff / shore) |
|---|---|---|---|
| `mountains` | ridged peaks, high relief, snow above 96 studs | no | Grass / Rock / - |
| `hills` | rolling fBm hills | no | Grass / Rock / - |
| `plains` | low-relief flats with micro bumps | no | Grass / Ground / - |
| `dunes` | directional low-frequency dunes | no | Sand / Sandstone / - |
| `islands` | radial falloff into the sea, waterLevel 20 | yes | Grass / Rock / Sand |
| `canyon` | plateau carved by inverted ridges | optional | Sandstone / Rock / Sand |

Key parameters: `seed` (reproducibility), `octaves` (detail layers, default 4), `persistence` (roughness balance), `amplitude` / `baseHeight` (vertical scale), `waterLevel`, `edgeBlend {enabled, width}`, `materialPalette {surface, cliff, shore, underwater}`.

## Mood presets (`manage_lighting` action `mood`)

| Preset | Time | Summary |
|---|---|---|
| `sunny_day` | noon | bright clear default |
| `golden_hour` | late afternoon | warm tone, long shadows, sun rays |
| `sunset` | dusk | orange-pink sky, strong atmosphere decay |
| `dawn` | early morning | cold thin fog, low saturation |
| `night` | midnight | dark ambient, stars |
| `moonlit_night` | midnight | blue moonlight, bloom |
| `overcast` | day | grey sky, soft shadows off |
| `foggy` | morning | dense fog, short visibility |
| `stormy` | day | dark, desaturated, rough water |
| `eerie` | dusk | green-tinted fog, horror tone |

Override examples:
- Denser fog: `{ "overrides": { "atmosphere": { "Density": 0.6 } } }`
- Custom water tint: `{ "overrides": { "water": { "WaterColor": { "r": 20, "g": 60, "b": 90 } } } }`
- Verified skybox: `{ "overrides": { "sky": { "SkyboxBk": "rbxassetid://<verified-id>", ... } } }`

## Prop scatter (`mutate_instances` action `scatter`)

Provide one or more `templatePaths`, an XZ `region {min, max}`, and `count`. Keep a fixed `seed` when iterating so the same inputs reproduce the same placements.

| Parameter | Purpose | Default |
|---|---|---|
| `seed` | Reproduce candidate positions, yaw, scale, and template choice | random seed |
| `maxSlope` | Reject terrain steeper than this many degrees | `30` |
| `avoidWater` | Reject water raycast hits | `true` |
| `alignToNormal` | Align clones to the terrain surface normal | `false` |
| `scaleJitter {min, max}` | Randomize clone scale within a deterministic range | `{min: 0.85, max: 1.25}` |
| `minSpacing` | Minimum XZ distance between accepted candidates | `0` |
| `parentName` | Name of the result Folder in Workspace | `WeppyScatter_<seed>` |

The response reports `requested`, `placed`, `skipped`, `parentPath`, and `seed`; always treat `placed + skipped == requested` as the completion invariant. Inspect the result Folder and verify it with `manage_camera` action `screenshot` before continuing.

## Recipes

- Island getaway: `generate` islands (seed fixed) -> `mood` golden_hour -> scatter palm template with `avoidWater: true`, `maxSlope: 25`.
- Horror forest: `generate` hills with `materialPalette { surface: "LeafyGrass" }` -> `mood` eerie -> scatter dead-tree template, `minSpacing: 12`.
- Desert ruins: `generate` dunes -> `mood` sunny_day with warm `overrides.lighting.ColorShift_Top` -> scatter rock templates at low count.
