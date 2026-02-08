# weppy-roblox-mcp Tools

For detailed parameters, check MCP tool definitions directly.

## Instance

| Tool | Description |
|------|-------------|
| `create_instance` | Create a new instance |
| `create_instance_with_properties` | Create instance with properties |
| `clone_instance` | Clone an existing instance |
| `delete_instance` | Delete an instance |
| `move_instance` | Move instance to new parent |
| `rename_instance` | Rename an instance |
| `get_instance` | Get instance information |
| `get_instance_children` | Get instance children |
| `find_first_child` | Find first child by name |
| `find_first_descendant` | Find first descendant by name |
| `get_class_info` | Get class information |
| `wait_for_child` | Wait for child to exist |
| `pivot_to` | Set pivot CFrame |

## Property

| Tool | Description |
|------|-------------|
| `get_property` | Get a property value |
| `set_property` | Set a property value |
| `get_all_properties` | Get all properties |
| `set_multiple_properties` | Set multiple properties |
| `set_calculated_property` | Set calculated property |
| `set_relative_property` | Set relative property |
| `get_attribute` | Get attribute value |
| `set_attribute` | Set attribute value |
| `get_all_attributes` | Get all attributes |
| `delete_attribute` | Delete attribute |

## Script

| Tool | Description |
|------|-------------|
| `create_script` | Create a new script |
| `get_script_source` | Get script source code |
| `set_script_source` | Update script source code |
| `delete_script` | Delete script |
| `edit_script_lines` | Edit specific lines |
| `insert_script_lines` | Insert lines |
| `delete_script_lines` | Delete lines |
| `search_in_scripts` | Search in scripts |
| `replace_in_scripts` | Replace in scripts |
| `get_script_dependencies` | Get dependencies |
| `execute_script` | Execute script |

## Selection (Basic)

| Tool | Description |
|------|-------------|
| `get_selection` | Get currently selected instances |
| `set_selection` | Set selection to instances |
| `clear_selection` | Clear selection |

## Selection (Pro)

| Tool | Description |
|------|-------------|
| `get_selection_context` | Get selection with context |
| `get_selection_details` | Get detailed selection info |
| `add_to_selection` | Add to selection |
| `remove_from_selection` | Remove from selection |
| `watch_selection` | Watch selection changes |
| `get_place_info` | Get place information |
| `get_services` | Get game services |
| `get_studio_settings` | Get Studio settings |
| `run_command` | Run Studio command |
| `get_cached_selection` | Get cached selection state |

## Search

| Tool | Description |
|------|-------------|
| `get_file_tree` | Get file tree |
| `search_by_name` | Search instances by name |
| `search_by_class` | Search instances by class |
| `get_project_structure` | Get project structure tree |
| `search_by_property` | Search by property |
| `search_by_tag` | Search by tag |
| `get_descendants` | Get all descendants |
| `get_ancestors` | Get ancestors |

## Spatial

| Tool | Description |
|------|-------------|
| `get_spatial_map` | Get spatial map of area |
| `find_empty_space` | Find empty space in area |
| `get_bounds` | Get bounding box of instance |
| `snap_to_grid` | Snap position to grid |
| `check_collision` | Check collision between instances |

## Raycast

| Tool | Description |
|------|-------------|
| `raycast` | Cast a ray and get hit info |
| `find_ground` | Find ground position at point |
| `check_placement` | Check if object can be placed |
| `multi_raycast` | Perform multiple raycasts |
| `scan_area` | Scan area and generate heightmap |
| `find_flat_areas` | Find flat areas for placement |
| `find_spawn_positions` | Find valid spawn positions |
| `analyze_walkable_area` | Analyze walkable area |

## Bulk

| Tool | Description |
|------|-------------|
| `mass_create_instances` | Mass create instances |
| `mass_delete_instances` | Mass delete instances |
| `mass_set_property` | Mass set property |
| `mass_get_property` | Mass get property |
| `mass_duplicate` | Mass duplicate instances |
| `smart_duplicate` | Smart duplicate with offsets |
| `batch_execute` | Execute multiple commands |
| `modify_children` | Modify all children |

## Tag

| Tool | Description |
|------|-------------|
| `add_tag` | Add tag to instance |
| `remove_tag` | Remove tag from instance |
| `get_tags` | Get tags of instance |
| `get_tagged` | Get instances with tag |
| `has_tag` | Check if instance has tag |

## Asset

| Tool | Description |
|------|-------------|
| `insert_model` | Insert model from Creator Store |
| `get_asset_info` | Get asset information |
| `search_creator_store` | Search Creator Store assets |
| `search_and_insert_model` | Search and insert model |
| `insert_free_model` | Insert free model |
| `insert_package` | Insert package |
| `export_selection` | Export selection |

## State

| Tool | Description |
|------|-------------|
| `sync_workspace_state` | Sync workspace state |
| `get_workspace_snapshot` | Get workspace snapshot |
| `get_recent_changes` | Get recent changes |
| `get_viewport_info` | Get viewport state info |

## Environment

| Tool | Description |
|------|-------------|
| `set_lighting` | Set lighting properties |
| `set_atmosphere` | Set atmosphere properties |
| `set_sky` | Set sky properties |
| `set_terrain` | Set terrain properties |
| `set_time_of_day` | Set time of day |

## Terrain

| Tool | Description |
|------|-------------|
| `terrain_fill_block` | Fill terrain block |
| `terrain_fill_ball` | Fill terrain sphere |
| `terrain_fill_cylinder` | Fill terrain cylinder |
| `terrain_fill_wedge` | Fill terrain wedge |
| `terrain_clear` | Clear terrain (with region object) |
| `terrain_clear_region` | Clear terrain (with min/max) |
| `terrain_replace_material` | Replace terrain material |
| `terrain_get_material_color` | Get terrain material color |
| `terrain_set_material_color` | Set terrain material color |
| `terrain_read_voxel` | Read single terrain voxel |
| `terrain_read_voxels` | Read terrain voxel data |
| `terrain_write_voxels` | Write terrain voxel data |
| `terrain_generate` | Generate procedural terrain |
| `terrain_smooth` | Smooth terrain |

## Camera

| Tool | Description |
|------|-------------|
| `get_camera_info` | Get camera information |
| `get_suggested_camera_view` | Get suggested camera view |
| `focus_camera_path` | Focus camera on instance by path |
| `focus_camera_position` | Focus camera on world position |

## Visualization

| Tool | Description |
|------|-------------|
| `visualization_create_area` | Create area visualization |
| `visualization_create_marker` | Create marker with preview |
| `visualization_create_line` | Create line visualization |
| `visualization_remove` | Remove visualization |
| `visualization_clear` | Clear all visualizations |
| `visualization_get_status` | Get visualization status |
| `visualization_focus` | Focus camera on visualization |

## Log

| Tool | Description |
|------|-------------|
| `get_output_logs` | Get output logs |
| `clear_output_logs` | Clear output logs |
| `get_recent_errors` | Get recent errors |

## Connection

| Tool | Description |
|------|-------------|
| `get_connection_info` | Get connection status |
| `get_usage_status` | Get usage/quota status |
