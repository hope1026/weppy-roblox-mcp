# Instances & Properties

> Search, create, and edit Roblox Studio instances while managing properties, attributes, and tags.

## Included Tools

| Tool | Tier | Description |
|------|:----:|-------------|
| `query_instances` | Mixed | Search instances, traverse hierarchy, inspect class info |
| `mutate_instances` | Mixed | Create, delete, clone, move, and rename instances |
| `manage_properties` | Mixed | Read and write properties, attributes, and tags |

## Key Workflows

### Understand scene structure

```
"Find every Part under Workspace and tell me its position and size."
```

Use `query_instances.search_class` to find the parts, then `manage_properties.mass_get` to read `Position` and `Size` in bulk.

### Place objects in bulk

```
"Place 4 SpawnLocations in a square at the center of the map and give each one a different TeamColor."
```

Use `mutate_instances.mass_create` to create them in one request, then `manage_properties.mass_set` to assign their properties together.

### Manage tagged objects

```
"Find every object tagged Collectible and set Anchored to true."
```

Use `manage_properties.get_tagged` to collect the tagged instances, then `manage_properties.mass_set` to update them.

## Action Reference

### Query Instances (Mixed)

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

### Mutate Instances (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `create` | Create a new instance | Basic |
| `create_with_props` | Create instance with initial properties | Basic |
| `delete` | Delete an instance | Basic |
| `clone` | Clone an instance | Basic |
| `move` | Move instance to a new parent | Basic |
| `rename` | Rename an instance | Basic |
| `pivot` | Set pivot position or CFrame | Basic |
| `create_tree` | Create a hierarchical instance tree | Pro |
| `mass_create` | Create multiple instances at once | Pro |
| `mass_delete` | Delete multiple instances | Pro |
| `mass_duplicate` | Duplicate multiple instances | Pro |
| `smart_duplicate` | Duplicate with spacing and count | Pro |

### Manage Properties (Mixed)

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
| `add_tag` | Add a tag to an instance | Basic |
| `remove_tag` | Remove a tag from an instance | Basic |
| `check_tag` | Check whether an instance has a tag | Basic |
| `get_tags` | Get all tags on an instance | Basic |
| `get_tagged` | Get all instances with a specific tag | Basic |
| `set_calculated` | Set a property using a mathematical expression | Pro |
| `set_relative` | Set a property relative to its current value | Pro |
| `mass_set` | Set a property on multiple instances | Pro |
| `mass_get` | Get a property from multiple instances | Pro |
| `modify_children` | Modify all children of a parent | Pro |

## Related Docs

- [Scripting & Code Execution](scripting.md) - add or update scripts on instances
- [Assets & Effects](assets-and-effects.md) - insert models, tween objects, add effects
- [Tools Reference](overview.md)
