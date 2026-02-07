# Roblox MCP Tools

For detailed parameters, refer to the MCP tool definitions directly.

---

## Basic Tools (68)

### Instance - 13

| Tool | Description |
|------|-------------|
| `create_instance` | Create a new instance |
| `create_instance_with_properties` | Create instance with properties |
| `clone_instance` | Clone an existing instance |
| `delete_instance` | Delete an instance |
| `move_instance` | Move instance to new parent |
| `rename_instance` | Rename an instance |
| `get_instance` | Get instance information |
| `get_instance_children` | Get children of an instance |
| `find_first_child` | Find first child by name |
| `find_first_descendant` | Find first descendant by name |
| `get_class_info` | Get class information |
| `wait_for_child` | Wait for child to exist |
| `pivot_to` | Set Pivot CFrame |

### Property - 10

| Tool | Description |
|------|-------------|
| `get_property` | Get property value |
| `set_property` | Set property value |
| `get_all_properties` | Get all properties |
| `set_multiple_properties` | Set multiple properties at once |
| `set_calculated_property` | Set property with calculated value |
| `set_relative_property` | Set property with relative value |
| `get_attribute` | Get attribute value |
| `set_attribute` | Set attribute value |
| `get_all_attributes` | Get all attributes |
| `delete_attribute` | Delete an attribute |

### Script - 9

| Tool | Description |
|------|-------------|
| `create_script` | Create a new script |
| `get_script_source` | Get script source code |
| `set_script_source` | Update script source code |
| `delete_script` | Delete a script |
| `edit_script_lines` | Edit specific lines |
| `insert_script_lines` | Insert lines |
| `delete_script_lines` | Delete lines |
| `search_in_scripts` | Search within scripts |
| `get_script_dependencies` | Get dependencies |

### Selection - 12

| Tool | Description |
|------|-------------|
| `get_selection` | Get currently selected instances |
| `get_selection_context` | Get selection with context |
| `get_selection_details` | Get detailed selection info |
| `set_selection` | Set instance selection |
| `clear_selection` | Clear selection |
| `add_to_selection` | Add to selection |
| `remove_from_selection` | Remove from selection |
| `get_place_info` | Get Place information |
| `get_services` | Get game services list |
| `get_studio_settings` | Get Studio settings |
| `run_command` | Execute Studio command |
| `watch_selection` | Watch selection changes |

### Search - 2

| Tool | Description |
|------|-------------|
| `search_by_name` | Search instances by name |
| `search_by_class` | Search instances by class |

### Tag - 5

| Tool | Description |
|------|-------------|
| `add_tag` | Add tag to instance |
| `remove_tag` | Remove tag from instance |
| `get_tags` | Get instance tags |
| `get_tagged` | Get instances with tag |
| `has_tag` | Check if instance has tag |

### Camera - 4

| Tool | Description |
|------|-------------|
| `get_camera_info` | Get camera information |
| `get_suggested_camera_view` | Get suggested camera view |
| `focus_camera_path` | Focus camera on instance by path |
| `focus_camera_position` | Focus camera on world position |

### Log - 3

| Tool | Description |
|------|-------------|
| `get_output_logs` | Get output logs |
| `clear_output_logs` | Clear output logs |
| `get_recent_errors` | Get recent errors |

### Connection - 2

| Tool | Description |
|------|-------------|
| `get_connection_info` | Get connection status |
| `get_usage_status` | Get usage/quota status |

---

## Pro Tools (+72)
👉 [Pro Upgrade Guide](../pro-upgrade.md)

### Script - 2

| Tool | Description |
|------|-------------|
| `replace_in_scripts` | Batch replace in scripts |
| `execute_script` | Execute Luau code directly |

### Search - 6

| Tool | Description |
|------|-------------|
| `get_file_tree` | Get file tree |
| `get_project_structure` | Get project structure tree |
| `search_by_property` | Search by property |
| `search_by_tag` | Search by tag |
| `get_descendants` | Get all descendants |
| `get_ancestors` | Get ancestors |

### Bulk - 8

| Tool | Description |
|------|-------------|
| `mass_create_instances` | Mass create instances |
| `mass_delete_instances` | Mass delete instances |
| `mass_set_property` | Mass set property |
| `mass_get_property` | Mass get property |
| `mass_duplicate` | Mass duplicate instances |
| `smart_duplicate` | Smart duplicate with offset |
| `batch_execute` | Batch execute commands |
| `modify_children` | Modify all children |

### Asset - 7

| Tool | Description |
|------|-------------|
| `insert_model` | Insert model from Creator Store |
| `get_asset_info` | Get asset information |
| `search_creator_store` | Search Creator Store assets |
| `search_and_insert_model` | Search and insert model |
| `insert_free_model` | Insert free model |
| `insert_package` | Insert package |
| `export_selection` | Export selection |

### Environment - 5

| Tool | Description |
|------|-------------|
| `set_lighting` | Set lighting properties |
| `set_atmosphere` | Set Atmosphere properties |
| `set_sky` | Set Sky properties |
| `set_terrain` | Set Terrain properties |
| `set_time_of_day` | Set time of day |

### State - 9

| Tool | Description |
|------|-------------|
| `sync_workspace_state` | Sync Workspace state |
| `get_workspace_snapshot` | Get Workspace snapshot |
| `get_recent_changes` | Get recent changes |
| `clear_change_history` | Clear change history |
| `get_viewport_info` | Get viewport info |
| `get_workspace_metadata` | Get Workspace metadata |
| `get_script_list` | Get script list |
| `get_selection_info` | Get selection info |
| `clear_state_cache` | Clear state cache |

### Spatial - 5

| Tool | Description |
|------|-------------|
| `get_spatial_map` | Get spatial map of area |
| `find_empty_space` | Find empty space in area |
| `get_bounds` | Get instance bounding box |
| `snap_to_grid` | Snap position to grid |
| `check_collision` | Check collision between instances |

### Raycast - 8

| Tool | Description |
|------|-------------|
| `raycast` | Perform raycast and get hit info |
| `find_ground` | Find ground position at point |
| `check_placement` | Check if placement is valid |
| `multi_raycast` | Perform multiple raycasts |
| `scan_area` | Scan area and generate heightmap |
| `find_flat_areas` | Find flat placement areas |
| `find_spawn_positions` | Find valid spawn positions |
| `analyze_walkable_area` | Analyze walkable area |

### Terrain - 14

| Tool | Description |
|------|-------------|
| `terrain_fill_block` | Fill terrain with block shape |
| `terrain_fill_ball` | Fill terrain with ball shape |
| `terrain_fill_cylinder` | Fill terrain with cylinder shape |
| `terrain_fill_wedge` | Fill terrain with wedge shape |
| `terrain_clear` | Clear terrain (Region object) |
| `terrain_clear_region` | Clear terrain (min/max coords) |
| `terrain_replace_material` | Replace terrain material |
| `terrain_get_material_color` | Get terrain material color |
| `terrain_set_material_color` | Set terrain material color |
| `terrain_read_voxel` | Read single voxel |
| `terrain_read_voxels` | Read voxel data |
| `terrain_write_voxels` | Write voxel data |
| `terrain_generate` | Generate procedural terrain |
| `terrain_smooth` | Smooth terrain |

### Visualization - 7

| Tool | Description |
|------|-------------|
| `visualization_create_area` | Create area visualization |
| `visualization_create_marker` | Create marker visualization (with preview) |
| `visualization_create_line` | Create line visualization |
| `visualization_remove` | Remove visualization |
| `visualization_clear` | Clear all visualizations |
| `visualization_get_status` | Get visualization status |
| `visualization_focus` | Focus camera on visualization |
