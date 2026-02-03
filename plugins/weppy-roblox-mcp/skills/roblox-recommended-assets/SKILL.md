---
name: roblox-recommended-assets
description: Curated Roblox Creator Store assets. Use when inserting models, characters, effects, or referencing asset IDs.
user-invocable: false
---

# Roblox Recommended Assets

Curated Roblox Creator Store assets registry.

## Files

```
references/
├── maps.json        # Map assets
├── characters.json  # Character/monster assets
├── tools.json       # Tool/weapon assets
├── effects.json     # Particle/effect assets
├── audio.json       # Audio assets
├── decals.json      # Decal/image assets
└── animations.json  # R15 default animation IDs
```

## Usage

```lua
-- Insert asset
insert_model({ assetId = 11842682383 })

-- Focus camera (using focusView values)
focus_camera_path({
  targetPath = "Workspace.IslandMap",
  distance = 800,
  offset = { x = 320, y = 640, z = -320 }
})
```
