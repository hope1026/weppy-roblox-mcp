# World & Environment

> Build and inspect the game world with lighting, terrain, spatial queries, and camera tools.

## Included Tools

| Tool | Tier | Description |
|------|:----:|-------------|
| `manage_lighting` | Pro | Configure Lighting, Atmosphere, Sky, and time of day |
| `manage_terrain` | Pro | Generate and edit terrain, including voxel data |
| `spatial_query` | Pro | Raycasts, ground checks, placement validation, and heightmaps |
| `manage_camera` | Basic | Inspect camera state, move focus, and get suggested views |

## Key Workflows

### Set the mood (Pro)

```
"Switch the map to a sunset mood with orange skies, heavier fog, and 18:00 time."
```

Use `manage_lighting.time` for the clock, `manage_lighting.atmosphere` for fog, and `manage_lighting.sky` for sky visuals.

### Shape terrain (Pro)

```
"Create a grassy hill with radius 200 at the center of the map and surround it with water."
```

Use `manage_terrain.fill_ball` for the hill, then `manage_terrain.fill_block` to place surrounding water.

### Validate placement (Pro)

```
"Find a flat area where I can place this building."
```

Use `spatial_query.find_flat` to find candidates, `spatial_query.check_placement` to validate them, and `manage_camera.focus_position` to inspect the result visually.

## Action Reference

### Manage Lighting (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `lighting` | Set Lighting service properties | Pro |
| `atmosphere` | Set Atmosphere properties | Pro |
| `sky` | Set Sky properties | Pro |
| `terrain_props` | Set Terrain water and visual properties | Pro |
| `time` | Set time of day | Pro |

### Manage Terrain (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `fill_block` | Fill block-shaped terrain | Pro |
| `fill_ball` | Fill sphere-shaped terrain | Pro |
| `fill_cylinder` | Fill cylinder-shaped terrain | Pro |
| `fill_wedge` | Fill wedge-shaped terrain | Pro |
| `clear_region` | Clear terrain in a region | Pro |
| `clear_bounds` | Clear terrain in bounds | Pro |
| `replace_material` | Replace material in a region | Pro |
| `colors_get` | Get material colors | Pro |
| `colors_set` | Set material colors | Pro |
| `read_voxel` | Read a single voxel | Pro |
| `read_voxels` | Read bulk voxel data | Pro |
| `write_voxels` | Write bulk voxel data | Pro |
| `generate` | Generate procedural terrain | Pro |
| `smooth` | Smooth terrain | Pro |

### Spatial Query (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `raycast` | Cast a single ray | Pro |
| `find_ground` | Find the ground position below a point | Pro |
| `check_placement` | Check whether a placement is collision-free | Pro |
| `multi_raycast` | Cast multiple rays in batch | Pro |
| `scan_area` | Generate a heightmap of an area | Pro |
| `find_flat` | Find flat areas for building | Pro |
| `find_spawn` | Find suitable spawn positions | Pro |
| `analyze_walkable` | Analyze a walkability grid | Pro |
| `spatial_map` | Get all BasePart positions | Pro |
| `find_space` | Find empty space for an object | Pro |
| `bounds` | Get instance bounding boxes | Pro |
| `snap_grid` | Snap a position to the grid | Pro |
| `collision` | Check AABB collision | Pro |

### Manage Camera (Basic)

| Action | Description | Tier |
|--------|-------------|------|
| `info` | Get camera position, rotation, FOV, and viewport size | Basic |
| `focus_path` | Move the camera to focus on an instance | Basic |
| `focus_position` | Move the camera to focus on a position | Basic |
| `suggest` | Get a suggested camera view for a target | Basic |

## Related Docs

- [Instances & Properties](instances-and-properties.md) - place world objects
- [Assets & Effects](assets-and-effects.md) - add effects, audio, and animation
- [Tools Reference](overview.md)
