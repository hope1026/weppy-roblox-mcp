# Roblox MCP Tools

For detailed parameters, check MCP tool definitions directly.

Related docs:
- [Sync Deep Dive](../sync/overview.md)

Sync policy:
- Basic: Studio -> Local one-way sync
- Pro: Bidirectional sync + broader advanced action coverage (better AI token efficiency with bulk workflows)

## Query Instances (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `get` | Get instance properties by path | Basic |
| `children` | Get immediate children or all descendants | Basic |
| `find_child` | Find first child by name and optional class filter | Basic |
| `find_descendant` | Find first descendant by name | Basic |
| `wait_for_child` | Wait for child to appear (with timeout) | Basic |
| `class_info` | Get class information and valid properties | Basic |
| `search_name` | Search instances by name pattern (supports wildcards) | Basic |
| `search_class` | Search instances by class name | Basic |
| `file_tree` | Get file tree structure from root | Pro |
| `project_structure` | Get complete project structure | Pro |
| `descendants` | Get all descendants of an instance | Pro |
| `ancestors` | Get all ancestors of an instance | Pro |
| `search_property` | Search instances by property value | Pro |
| `search_tag` | Search instances by tag | Pro |

## Mutate Instances (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `create` | Create a new instance | Basic |
| `create_with_props` | Create instance with initial properties | Basic |
| `delete` | Delete an instance | Basic |
| `clone` | Clone an instance | Basic |
| `move` | Move instance to new parent | Basic |
| `rename` | Rename an instance | Basic |
| `pivot` | Set pivot position or CFrame | Basic |
| `create_tree` | Create hierarchical instance tree | Pro |
| `mass_create` | Create multiple instances at once | Pro |
| `mass_delete` | Delete multiple instances | Pro |
| `mass_duplicate` | Duplicate multiple instances | Pro |
| `smart_duplicate` | Duplicate with spacing and count | Pro |

## Manage Properties (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `get` | Get a single property value | Basic |
| `set` | Set a single property value | Basic |
| `get_all` | Get all properties of an instance | Basic |
| `set_multiple` | Set multiple properties at once | Basic |
| `get_attr` | Get attribute value | Basic |
| `set_attr` | Set attribute value | Basic |
| `get_all_attrs` | Get all attributes | Basic |
| `delete_attr` | Delete an attribute | Basic |
| `add_tag` | Add a tag to instance | Basic |
| `remove_tag` | Remove a tag from instance | Basic |
| `check_tag` | Check if instance has a tag | Basic |
| `get_tags` | Get all tags on an instance | Basic |
| `get_tagged` | Get all instances with a specific tag | Basic |
| `set_calculated` | Set property using mathematical expression | Pro |
| `set_relative` | Set property relative to current value | Pro |
| `mass_set` | Set property on multiple instances | Pro |
| `mass_get` | Get property from multiple instances | Pro |
| `modify_children` | Modify all children of a parent | Pro |

## Manage Scripts (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `get_source` | Get script source code | Basic |
| `set_source` | Set script source code | Basic |
| `create` | Create a new script | Basic |
| `delete` | Delete a script | Basic |
| `edit_replace` | Replace specific lines in script | Basic |
| `edit_insert` | Insert lines at position | Basic |
| `edit_delete` | Delete specific lines | Basic |
| `search` | Search for text in script | Basic |
| `get_dependencies` | Get script dependencies | Basic |
| `replace` | Batch replace across scripts | Pro |

## Manage Lighting (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `lighting` | Set Lighting service properties | Pro |
| `atmosphere` | Set Atmosphere properties | Pro |
| `sky` | Set Sky properties | Pro |
| `terrain_props` | Set Terrain water/visual properties | Pro |
| `time` | Set time of day | Pro |

## Manage Selection (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `get` | Get current selection | Basic |
| `set` | Replace current selection | Basic |
| `clear` | Clear selection | Basic |
| `cached` | Get cached selection without round-trip | Basic |
| `context` | Get detailed context with source and properties | Pro |
| `details` | Get hierarchical details with ancestors/descendants | Pro |
| `add` | Add items to selection | Pro |
| `remove` | Remove items from selection | Pro |
| `watch` | Monitor selection changes | Pro |

## Manage Camera (Basic)

| Action | Description | Tier |
|--------|-------------|------|
| `info` | Get camera position, rotation, FOV, viewport size | Basic |
| `focus_path` | Move camera to focus on instance | Basic |
| `focus_position` | Move camera to focus on position | Basic |
| `suggest` | Get suggested camera view for target | Basic |

## Manage Tween (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `create` | Create a tween with target properties | Pro |
| `play` | Play a created tween | Pro |
| `pause` | Pause a running tween | Pro |
| `cancel` | Cancel a tween | Pro |

## Manage Audio (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `play` | Play a sound (creates Sound if needed) | Pro |
| `stop` | Stop a playing sound | Pro |
| `pause` | Pause a playing sound | Pro |
| `resume` | Resume a paused sound | Pro |
| `set_listener` | Set audio listener type/target | Pro |

## Manage Animation (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `load` | Load animation on Humanoid/AnimationController | Pro |
| `play` | Play a loaded animation track | Pro |
| `stop` | Stop a playing animation | Pro |
| `get_tracks` | List all loaded animation tracks | Pro |

## Manage Physics (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `register_group` | Register a collision group | Pro |
| `set_collidable` | Set whether two groups can collide | Pro |
| `get_groups` | List all registered collision groups | Pro |

## Manage Effects (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `emit` | Emit particles from ParticleEmitter | Pro |
| `clear` | Clear all particles | Pro |
| `toggle` | Enable or disable effect | Pro |

## Manage Terrain (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `fill_block` | Fill block-shaped terrain | Pro |
| `fill_ball` | Fill sphere-shaped terrain | Pro |
| `fill_cylinder` | Fill cylinder-shaped terrain | Pro |
| `fill_wedge` | Fill wedge-shaped terrain | Pro |
| `clear_region` | Clear terrain in region | Pro |
| `clear_bounds` | Clear terrain in bounds | Pro |
| `replace_material` | Replace material in region | Pro |
| `colors_get` | Get material colors | Pro |
| `colors_set` | Set material colors | Pro |
| `read_voxel` | Read single voxel data | Pro |
| `read_voxels` | Read bulk voxel data | Pro |
| `write_voxels` | Write bulk voxel data | Pro |
| `generate` | Generate procedural terrain | Pro |
| `smooth` | Smooth terrain | Pro |

## Spatial Query (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `raycast` | Cast a single ray | Pro |
| `find_ground` | Find ground position below point | Pro |
| `check_placement` | Check if placement is collision-free | Pro |
| `multi_raycast` | Cast multiple rays in batch | Pro |
| `scan_area` | Generate heightmap of area | Pro |
| `find_flat` | Find flat areas for building | Pro |
| `find_spawn` | Find suitable spawn positions | Pro |
| `analyze_walkable` | Analyze walkability grid | Pro |
| `spatial_map` | Get all BasePart positions | Pro |
| `find_space` | Find empty space for object | Pro |
| `bounds` | Get bounding box of instances | Pro |
| `snap_grid` | Snap position to grid | Pro |
| `collision` | Check AABB collision | Pro |

## Manage Assets (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `insert` | Insert model by asset ID | Pro |
| `info` | Get asset metadata | Pro |
| `search` | Search Creator Store | Pro |
| `search_insert` | Search and insert first match | Pro |
| `insert_free` | Insert free model | Pro |
| `insert_package` | Insert package | Pro |
| `export` | Export current selection | Pro |

## Manage Sync (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `status` | Get sync status for a place | Pro |
| `config` | Get sync configuration | Pro |
| `history` | Get change history | Pro |
| `directions` | Get per-type sync directions | Pro |
| `read_file` | Read a synced file | Pro |
| `write_file` | Write to a synced file | Pro |
| `progress` | Get real-time sync progress and bandwidth | Pro |

## Workspace State (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `sync` | Fetch current Workspace state | Pro |
| `snapshot` | Get full instance tree structure | Pro |
| `changes` | Get recent changes | Pro |
| `viewport` | Get camera and viewport info | Pro |

## Manage Logs (Basic)

| Action | Description | Tier |
|--------|-------------|------|
| `get` | Get filtered logs | Basic |
| `clear` | Clear log buffer | Basic |
| `errors` | Get recent errors only | Basic |

## System Info (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `ping` | Test connection | Basic |
| `connection` | Get server/plugin connection info | Basic |
| `usage` | Get current tier (basic/pro) | Basic |
| `place_info` | Get place ID, name, creator | Pro |
| `services` | List all Roblox services | Pro |
| `studio_settings` | Get Studio preferences | Pro |
| `run_command` | Execute Studio command | Pro |

## Batch Execute (Pro)

Execute multiple commands in a single batch. Each command specifies a tool name and arguments. Commands execute sequentially with optional continue-on-error behavior.

## Execute Luau (Pro)

Execute arbitrary Luau code in Roblox Studio sandbox. Blocked services: HttpService, DataStoreService, MessagingService. Cannot access CoreGui/CorePackages.
