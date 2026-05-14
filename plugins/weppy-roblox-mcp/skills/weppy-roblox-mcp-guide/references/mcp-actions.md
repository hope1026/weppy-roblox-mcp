# WEPPY Roblox MCP Action Reference

<!-- AUTO-GENERATED from tool-codegen/tools.yaml and tool-codegen/tools/*.yaml. DO NOT EDIT. -->

Use this reference for exact MCP tool/action names, tiers, routes, aliases, and parameters. Public marketing copy must not reuse this raw action dump.

## Tool: `query_instances`

Query Roblox instances: get, children, find child/descendant, wait for child, class info, search by name/class. [PRO] file_tree, project_structure, descendants, ancestors, search by property/tag.

### `query_instances.get`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.

### `query_instances.children`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.
  - `recursive` - boolean - If true, returns all descendants instead of just immediate children. Used by: children. Default: false.
  - `maxDepth` - number - Maximum depth for recursive traversal. Used by: children (default: 10), file_tree (default: 5).

### `query_instances.find_child`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
  - `childName` - string - Name of the child instance to find. Used by: find_child, wait_for_child.
- Optional params: none

### `query_instances.find_descendant`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
  - `descendantName` - string - Name of the descendant instance to find. Used by: find_descendant.
- Optional params: none

### `query_instances.wait_for_child`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
  - `childName` - string - Name of the child instance to find. Used by: find_child, wait_for_child.
- Optional params:
  - `timeout` - number - Maximum time to wait in seconds. Used by: wait_for_child. Default: 5. Maximum: 30.

### `query_instances.class_info`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `className` - string - Roblox class name. Used by: find_child/find_descendant (optional filter), class_info (required), search_class (required).
- Optional params: none

### `query_instances.search_name`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `query` -> `pattern`
- Required params:
  - `query` - string - Search pattern for name search (supports * and ? wildcards). Used by: search_name.
- Optional params:
  - `root` - string - Root path to search/scan from. Used by: search_name, search_class, search_property, search_tag, file_tree, project_structure. Default: "game".
  - `caseSensitive` - boolean - Case-sensitive name search. Used by: search_name. Default: false.
  - `maxResults` - number - Maximum results to return. Used by: search_name, search_class, search_property, search_tag, descendants. Default: 100.

### `query_instances.search_class`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `className` - string - Roblox class name. Used by: find_child/find_descendant (optional filter), class_info (required), search_class (required).
- Optional params:
  - `root` - string - Root path to search/scan from. Used by: search_name, search_class, search_property, search_tag, file_tree, project_structure. Default: "game".
  - `includeSubclasses` - boolean - Include subclasses in class search (e.g., BasePart finds Part, MeshPart). Used by: search_class. Default: true.
  - `maxResults` - number - Maximum results to return. Used by: search_name, search_class, search_property, search_tag, descendants. Default: 100.

### `query_instances.search_property`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `root` -> `rootPath`
- Required params:
  - `propertyName` - string - [PRO] Property name to search by. Used by: search_property.
- Optional params:
  - `root` - string - Root path to search/scan from. Used by: search_name, search_class, search_property, search_tag, file_tree, project_structure. Default: "game".
  - `propertyValue` - unknown - [PRO] Property value to match. Used by: search_property.
  - `maxResults` - number - Maximum results to return. Used by: search_name, search_class, search_property, search_tag, descendants. Default: 100.

### `query_instances.search_tag`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `root` -> `rootPath`
- Required params:
  - `tag` - string - [PRO] Tag string to search by (case-sensitive). Used by: search_tag.
- Optional params:
  - `root` - string - Root path to search/scan from. Used by: search_name, search_class, search_property, search_tag, file_tree, project_structure. Default: "game".
  - `maxResults` - number - Maximum results to return. Used by: search_name, search_class, search_property, search_tag, descendants. Default: 100.

### `query_instances.file_tree`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `maxDepth` - number - Maximum depth for recursive traversal. Used by: children (default: 10), file_tree (default: 5).
  - `root` - string - Root path to search/scan from. Used by: search_name, search_class, search_property, search_tag, file_tree, project_structure. Default: "game".
  - `includeServices` - boolean - [PRO] Include Roblox services when root is "game". Used by: file_tree. Default: true.

### `query_instances.project_structure`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `root` -> `rootPath`
- Required params: none
- Optional params:
  - `root` - string - Root path to search/scan from. Used by: search_name, search_class, search_property, search_tag, file_tree, project_structure. Default: "game".
  - `depth` - number - [PRO] Maximum depth for project structure traversal. Used by: project_structure. Default: 3.

### `query_instances.descendants`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.
  - `maxResults` - number - Maximum results to return. Used by: search_name, search_class, search_property, search_tag, descendants. Default: 100.

### `query_instances.ancestors`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to query (e.g., "game.Workspace.Part"). Used by: get, children, find_child, find_descendant, wait_for_child, descendants, ancestors.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for resolving duplicate-named path targets. Used by: get, children, descendants, ancestors.

## Tool: `mutate_instances`

Create, delete, clone, move, rename, or pivot instances. [PRO] create_tree, mass_create, mass_delete, mass_duplicate, smart_duplicate.

### `mutate_instances.create`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `className` - string - Roblox class name (e.g., Part, Script, Folder). Used by: create, create_with_props.
  - `parent` - string - Parent path for new instance. Used by: create, create_with_props.
- Optional params:
  - `name` - string - Name for the instance. Used by: create (optional), create_with_props (required).
  - `properties` - object - Properties to set on the instance. Supports Vector3, Color3, CFrame, UDim2, Enum types. Used by: create (optional), create_with_props (required).

### `mutate_instances.create_with_props`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `className` - string - Roblox class name (e.g., Part, Script, Folder). Used by: create, create_with_props.
  - `parent` - string - Parent path for new instance. Used by: create, create_with_props.
  - `name` - string - Name for the instance. Used by: create (optional), create_with_props (required).
  - `properties` - object - Properties to set on the instance. Supports Vector3, Color3, CFrame, UDim2, Enum types. Used by: create (optional), create_with_props (required).
- Optional params: none

### `mutate_instances.delete`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to operate on. Used by: delete, clone (as sourcePath), move, rename, pivot, smart_duplicate.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.

### `mutate_instances.clone`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `path` -> `sourcePath`
- Required params:
  - `sourcePath` - string - Source instance path to clone from. Used by: clone. Alternative to path.
- Optional params:
  - `path` - string - Instance path to operate on. Used by: delete, clone (as sourcePath), move, rename, pivot, smart_duplicate.
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `targetParent` - string - Target parent for cloned/duplicated instances. Used by: clone, mass_duplicate, smart_duplicate.
  - `newName` - string - New name for instance. Used by: rename (required), clone (optional).

### `mutate_instances.move`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to operate on. Used by: delete, clone (as sourcePath), move, rename, pivot, smart_duplicate.
  - `newParent` - string - New parent path to move instance to. Used by: move.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.

### `mutate_instances.rename`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to operate on. Used by: delete, clone (as sourcePath), move, rename, pivot, smart_duplicate.
  - `newName` - string - New name for instance. Used by: rename (required), clone (optional).
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.

### `mutate_instances.pivot`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to operate on. Used by: delete, clone (as sourcePath), move, rename, pivot, smart_duplicate.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `position` - object - Target position as Vector3 {x, y, z}. Used by: pivot.
  - `cframe` - array<number> - Target CFrame as 12-number array [x, y, z, r00, r01, r02, r10, r11, r12, r20, r21, r22]. Used by: pivot.
  - `offset` - object - Relative offset to move by (ignores position/cframe). Used by: pivot, smart_duplicate.

### `mutate_instances.create_tree`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `parent` - string - Parent path for new instance. Used by: create, create_with_props.
  - `tree` - object - [PRO] Instance tree specification for hierarchical creation. Used by: create_tree.
- Optional params: none

### `mutate_instances.mass_create`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `instances` - array<object> - [PRO] Array of instance specifications for batch creation. Used by: mass_create. Each item: {className, name, parentPath, properties?}.
- Optional params: none

### `mutate_instances.mass_delete`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - [PRO] Array of instance paths. Used by: mass_delete, mass_duplicate.
- Optional params: none

### `mutate_instances.mass_duplicate`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - [PRO] Array of instance paths. Used by: mass_delete, mass_duplicate.
- Optional params:
  - `targetParent` - string - Target parent for cloned/duplicated instances. Used by: clone, mass_duplicate, smart_duplicate.

### `mutate_instances.smart_duplicate`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `spacing` -> `offset`
- Required params:
  - `path` - string - Instance path to operate on. Used by: delete, clone (as sourcePath), move, rename, pivot, smart_duplicate.
  - `offset` - object - Relative offset to move by (ignores position/cframe). Used by: pivot, smart_duplicate.
- Optional params:
  - `sessionDebugId` - string - Optional same Studio/plugin session debug identity for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `siblingIndex` - number - Optional 1-based same-name sibling index fallback for verifying a duplicate-named target. Used by: delete, clone, move, rename, pivot, smart_duplicate.
  - `targetParent` - string - Target parent for cloned/duplicated instances. Used by: clone, mass_duplicate, smart_duplicate.
  - `count` - number - [PRO] Number of copies to create. Used by: smart_duplicate.

## Tool: `manage_properties`

Get/set properties, attributes, and tags on instances. [PRO] set_calculated, set_relative, mass_set, mass_get, modify_children.

### `manage_properties.get`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `property` - string - Property name (e.g., "Size", "Position", "Anchored"). Used by: get, set.
- Optional params: none

### `manage_properties.set`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `property` - string - Property name (e.g., "Size", "Position", "Anchored"). Used by: get, set.
  - `value` - unknown - Value to set. Supports primitives, Vector3 {x,y,z}, Color3 {r,g,b} (0-255), CFrame (12-number array), UDim2 {xScale,xOffset,yScale,yOffset}, Enum strings. Used by: set, set_attr, set_relative.
- Optional params: none

### `manage_properties.get_all`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
- Optional params:
  - `includeReadOnly` - boolean - Include read-only properties. Used by: get_all. Default: false.

### `manage_properties.set_multiple`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `properties` - object - Dictionary of property names to values. Used by: set_multiple.
- Optional params: none

### `manage_properties.get_attr`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `attribute` - string - Attribute name. Used by: get_attr, set_attr, delete_attr.
- Optional params: none

### `manage_properties.set_attr`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `value` - unknown - Value to set. Supports primitives, Vector3 {x,y,z}, Color3 {r,g,b} (0-255), CFrame (12-number array), UDim2 {xScale,xOffset,yScale,yOffset}, Enum strings. Used by: set, set_attr, set_relative.
  - `attribute` - string - Attribute name. Used by: get_attr, set_attr, delete_attr.
- Optional params: none

### `manage_properties.get_all_attrs`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
- Optional params: none

### `manage_properties.delete_attr`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `attribute` - string - Attribute name. Used by: get_attr, set_attr, delete_attr.
- Optional params: none

### `manage_properties.add_tag`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `tag` - string - Tag string (case-sensitive). Used by: add_tag, remove_tag, check_tag.
- Optional params: none

### `manage_properties.remove_tag`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `tag` - string - Tag string (case-sensitive). Used by: add_tag, remove_tag, check_tag.
- Optional params: none

### `manage_properties.check_tag`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `tag` - string - Tag string (case-sensitive). Used by: add_tag, remove_tag, check_tag.
- Optional params: none

### `manage_properties.get_tags`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
- Optional params: none

### `manage_properties.get_tagged`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `tagName` -> `tag`
  - `root` -> `rootPath`
- Required params:
  - `tagName` - string - Tag to search for. Used by: get_tagged.
- Optional params:
  - `root` - string - Root path to filter get_tagged results. Used by: get_tagged.
  - `maxResults` - number - Maximum results for get_tagged. Default: 100.

### `manage_properties.set_calculated`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `expression` - string - [PRO] Mathematical expression to evaluate. Used by: set_calculated. Example: "baseValue * multiplier".
  - `propertyName` - string - [PRO] Property name for mass operations or set_calculated/set_relative. Used by: mass_set, mass_get, set_calculated, set_relative, modify_children.
- Optional params:
  - `variables` - object - [PRO] Variable name to value/path mapping. Used by: set_calculated. Example: {"baseValue": "workspace.Config.BaseValue", "multiplier": 2}.

### `manage_properties.set_relative`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `amount` -> `value`
- Required params:
  - `path` - string - Instance path. Used by: get, set, get_all, set_multiple, get_attr, set_attr, get_all_attrs, delete_attr, add_tag, remove_tag, check_tag, get_tags, set_calculated, set_relative.
  - `operation` - "add" | "subtract" | "multiply" | "divide" - [PRO] Mathematical operation for relative property change. Used by: set_relative.
  - `propertyName` - string - [PRO] Property name for mass operations or set_calculated/set_relative. Used by: mass_set, mass_get, set_calculated, set_relative, modify_children.
- Optional params:
  - `value` - unknown - Value to set. Supports primitives, Vector3 {x,y,z}, Color3 {r,g,b} (0-255), CFrame (12-number array), UDim2 {xScale,xOffset,yScale,yOffset}, Enum strings. Used by: set, set_attr, set_relative.
  - `amount` - unknown - [PRO] Value for relative operation. Can be number, Vector3, etc. Used by: set_relative. Alias for value in set_relative context.

### `manage_properties.mass_set`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - [PRO] Array of instance paths for bulk operations. Used by: mass_set, mass_get.
  - `propertyName` - string - [PRO] Property name for mass operations or set_calculated/set_relative. Used by: mass_set, mass_get, set_calculated, set_relative, modify_children.
  - `propertyValue` - unknown - [PRO] Property value for mass_set and modify_children.
- Optional params: none

### `manage_properties.mass_get`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - [PRO] Array of instance paths for bulk operations. Used by: mass_set, mass_get.
  - `propertyName` - string - [PRO] Property name for mass operations or set_calculated/set_relative. Used by: mass_set, mass_get, set_calculated, set_relative, modify_children.
- Optional params: none

### `manage_properties.modify_children`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `parentPath` - string - [PRO] Parent path whose children will be modified. Used by: modify_children.
- Optional params:
  - `modifications` - object - [PRO] Properties to set on children. Used by: modify_children. Contains propertyName, propertyValue, filter, recursive.
  - `propertyName` - string - [PRO] Property name for mass operations or set_calculated/set_relative. Used by: mass_set, mass_get, set_calculated, set_relative, modify_children.
  - `propertyValue` - unknown - [PRO] Property value for mass_set and modify_children.
  - `filter` - string - [PRO] Class name filter for modify_children.
  - `recursive` - boolean - [PRO] Modify all descendants, not just immediate children. Used by: modify_children. Default: false.

## Tool: `manage_scripts`

Manage script source code: read, write, create, delete, edit lines, search. [PRO] replace across scripts.

### `manage_scripts.get_source`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
- Optional params: none

### `manage_scripts.set_source`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
  - `source` - string - Script source code. Used by: set_source (required), create (optional initial source).
- Optional params: none

### `manage_scripts.create`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `scriptType` - "Script" | "LocalScript" | "ModuleScript" - Type of script to create. Used by: create.
  - `parent` - string - Parent path for new script. Used by: create.
- Optional params:
  - `source` - string - Script source code. Used by: set_source (required), create (optional initial source).
  - `name` - string - Name for new script. Used by: create.

### `manage_scripts.delete`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
- Optional params: none

### `manage_scripts.edit_replace`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `newLines` -> `newContent`
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
  - `startLine` - number - Starting line number, 1-based inclusive. Used by: edit_replace, edit_delete.
  - `endLine` - number - Ending line number, 1-based inclusive. Used by: edit_replace, edit_delete.
  - `newLines` - string - New content to replace specified lines. Used by: edit_replace. Can be multi-line.
- Optional params: none

### `manage_scripts.edit_insert`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `lines` -> `content`
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
  - `afterLine` - number - Line number after which to insert. Used by: edit_insert. Use 0 to insert at beginning.
  - `content` - string - Content to insert. Used by: edit_insert. Can be multi-line.
- Optional params:
  - `lines` - string - Content to insert after afterLine. Used by: edit_insert. Can be multi-line. Alias for content.

### `manage_scripts.edit_delete`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
  - `startLine` - number - Starting line number, 1-based inclusive. Used by: edit_replace, edit_delete.
  - `endLine` - number - Ending line number, 1-based inclusive. Used by: edit_replace, edit_delete.
- Optional params: none

### `manage_scripts.search`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
  - `pattern` - string - Search pattern (plain text or Lua pattern). Used by: search, replace.
- Optional params:
  - `caseSensitive` - boolean - Case-sensitive search. Used by: search. Default: false.
  - `wholeWord` - boolean - Match whole words only. Used by: search. Default: false.
  - `usePattern` - boolean - Treat pattern as Lua pattern instead of plain text. Used by: search, replace. Default: false.
  - `maxResults` - number - Maximum results to return. Used by: search. Default: 100.

### `manage_scripts.replace`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `pattern` -> `searchPattern`
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
  - `pattern` - string - Search pattern (plain text or Lua pattern). Used by: search, replace.
  - `replacement` - string - [PRO] Replacement text. Used by: replace.
- Optional params:
  - `usePattern` - boolean - Treat pattern as Lua pattern instead of plain text. Used by: search, replace. Default: false.
  - `dryRun` - boolean - [PRO] Show what would be replaced without making changes. Used by: replace. Default: false.

### `manage_scripts.get_dependencies`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Path to the script instance. Used by: get_source, set_source, delete, edit_replace, edit_insert, edit_delete, search, get_dependencies, replace.
- Optional params: none

## Tool: `manage_ui`

Create / update / verify Roblox in-game UI (ScreenGui / Frame / TextLabel / …). Always start a new UI task with the `design_brief` action — it accepts an omitted or partial brief, inspects Studio context, then returns a current-state summary, recommended mode/change scopes, candidate brief patches, and one user-facing confirmation or clarification question. design_brief may return asset recommendation candidates from existing UI images, user references, or conservative manage_assets.search results; do not use a recommended asset until the user accepts it. Do not dump enum lists at the user; map natural language to internal purpose/platform/tone values through recommendations, and only finalize identity-defining fields after the user accepts a recommendation or provides equivalent intent. Read MCP resource `weppy://ui-studio/guide` for the full guide; it is split into Floor (non-negotiable accessibility), Vocabulary (style menu — pick ONE family per dimension; do not blend everything), Direction (brief → choices), and Tree encoding (Roblox property JSON shapes). Floor essentials suggested by Design Check (`check`): (1) mobile touch target ≥ 44 px (2) text contrast ≥ 4.5:1 (3) prefer explicit `TextSize` over `TextScaled` (4) respect platform safe zones (5) warn on full-screen opaque roots for non-modal purposes. Style is brief-driven; reject the default AI look (uniform 8 px corners + generic blue + glass card + Gotham everywhere) — each game deserves its own visual identity.

### `manage_ui.design_brief`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `brief` - object - 완성 또는 부분 design_brief 구조체. Used by: design_brief (optional; partial allowed).

### `manage_ui.create_tree`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `tree` - object - UI 트리 선언형 JSON. 루트는 ScreenGui. 스키마: {className: string, name?: string, parent?: string, properties?: {...}, children?: Tree[]} parent 생략 시 StarterGui. className은 Roblox GUI 계열(ScreenGui/Frame/TextLabel/TextButton/ImageLabel/ImageButton/ScrollingFrame/TextBox/UIListLayout/UIGridLayout/UIPadding/UICorner/UIStroke/UIAspectRatioConstraint/UIGradient/UITextSizeConstraint/UISizeConstraint) 한정. In-game UI 기본 구조(HUD / button / toast / card / 대부분의 menu): ScreenGui > Frame(BackgroundTransparency=1) > 실제 UI 요소. ScreenGui 직속 풀스크린 불투명 Frame 은 modal 용도에만 사용한다. Property 값 인코딩: UDim2는 {xScale, xOffset, yScale, yOffset}, UDim은 {scale, offset}, Color3는 {r, g, b}, Vector2/Vector3는 {x,y}/{x,y,z}, Enum은 item name string을 사용한다.
- Optional params:
  - `briefId` - string - design_brief 가 반환한 brief 식별자. Used by: create_tree, update, delete (optional).

### `manage_ui.update`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `targetPath` - string - Path to existing UI instance. Both `StarterGui.MyGui` and `game.StarterGui.MyGui` are accepted. Used by: update, delete (required).
  - `changes` - object - 부분 변경 스펙. {properties?: {...}, addChildren?: Tree[], removeChildren?: [string]} properties는 `Instance:SetPropertyValue` 호환 키·값 쌍. 값 인코딩은 tree 설명의 Property 값 인코딩을 따른다.
- Optional params:
  - `briefId` - string - design_brief 가 반환한 brief 식별자. Used by: create_tree, update, delete (optional).

### `manage_ui.delete`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `targetPath` - string - Path to existing UI instance. Both `StarterGui.MyGui` and `game.StarterGui.MyGui` are accepted. Used by: update, delete (required).
- Optional params: none

### `manage_ui.preview`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `targetPath` - string - Path to existing UI instance. Both `StarterGui.MyGui` and `game.StarterGui.MyGui` are accepted. Used by: update, delete (required).
  - `briefId` - string - design_brief 가 반환한 brief 식별자. Used by: create_tree, update, delete (optional).

### `manage_ui.check`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `targetPath` - string - Path to existing UI instance. Both `StarterGui.MyGui` and `game.StarterGui.MyGui` are accepted. Used by: update, delete (required).
  - `briefId` - string - design_brief 가 반환한 brief 식별자. Used by: create_tree, update, delete (optional).
  - `includeVisualAnalysis` - boolean - Opt-in only. Used by: check. When true, the server may read a saved preview snapshot PNG + visible GUI metadata and merge AI visual suggestions into check_results. Default false; no screenshot capture is triggered by check.
  - `snapshotId` - string - Saved manage_ui.preview snapshot_id to use for visual analysis. Used by: check when includeVisualAnalysis=true. If omitted, the latest compatible saved snapshot is used when available.

## Tool: `manage_lighting`

[PRO] Configure environment: lighting, atmosphere, sky, terrain properties, time of day.

### `manage_lighting.lighting`

set Lighting service properties.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `properties` - object - Dictionary of properties to set. Used by: lighting, atmosphere, sky, terrain_props. Supports Color3 {r,g,b} (0-255), numbers, booleans, Enum strings.

### `manage_lighting.atmosphere`

set Atmosphere properties.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `properties` - object - Dictionary of properties to set. Used by: lighting, atmosphere, sky, terrain_props. Supports Color3 {r,g,b} (0-255), numbers, booleans, Enum strings.
  - `createIfMissing` - boolean - Create Atmosphere/Sky instance if missing. Used by: atmosphere, sky. Default: true.

### `manage_lighting.sky`

set Sky properties.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `properties` - object - Dictionary of properties to set. Used by: lighting, atmosphere, sky, terrain_props. Supports Color3 {r,g,b} (0-255), numbers, booleans, Enum strings.
  - `createIfMissing` - boolean - Create Atmosphere/Sky instance if missing. Used by: atmosphere, sky. Default: true.

### `manage_lighting.terrain_props`

set Terrain water/visual properties.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `properties` - object - Dictionary of properties to set. Used by: lighting, atmosphere, sky, terrain_props. Supports Color3 {r,g,b} (0-255), numbers, booleans, Enum strings.

### `manage_lighting.time`

set time of day.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `time` - string - Time string in "HH:MM:SS" format (e.g., "14:30:00"). Used by: time. Provide this OR clockTime.
  - `clockTime` - number - Numeric time in 24-hour format (e.g., 14.5 for 2:30 PM). Used by: time. Provide this OR time.

## Tool: `manage_selection`

Get, set, or clear selection. [PRO] context, details, add/remove items, watch changes.

### `manage_selection.get`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `manage_selection.set`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - Array of instance paths. Used by: set (required), add (required), remove (required).
- Optional params: none

### `manage_selection.clear`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `manage_selection.cached`

- Tier: `basic`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `maxAge` - number - Maximum age of cached data in milliseconds. Used by: cached. Default: 30000. Set to 0 for any age.

### `manage_selection.context`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `includeSource` - boolean - [PRO] Include script source code. Used by: context. Default: true.
  - `includeProperties` - boolean - [PRO] Include all readable properties. Used by: context. Default: true.
  - `includeChildren` - boolean - [PRO] Include immediate children. Used by: context. Default: false.

### `manage_selection.details`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `maxDepth` - number - [PRO] Maximum depth for descendant tree traversal. Used by: details. Default: 1.
  - `includeAncestors` - boolean - [PRO] Include full ancestor chain. Used by: details. Default: false.

### `manage_selection.add`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - Array of instance paths. Used by: set (required), add (required), remove (required).
- Optional params: none

### `manage_selection.remove`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `paths` - array<string> - Array of instance paths. Used by: set (required), add (required), remove (required).
- Optional params: none

### `manage_selection.watch`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

## Tool: `manage_camera`

Camera operations: get info, focus on instance/position, suggest view, capture Edit-mode viewport screenshot (Edit mode only; not usable during playtest).

### `manage_camera.info`

get current camera position, rotation, FOV, viewport size.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `manage_camera.focus_path`

move camera to focus on instance by path.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Instance path to focus on. Used by: focus_path (if not provided, focuses on selection), suggest (if not provided, uses selection).
  - `distance` - number - Distance from target in studs. Used by: focus_path, focus_position. Auto-calculated if not provided.
  - `duration` - number - Animation duration in seconds. Used by: focus_path, focus_position. Default: 0.5.
  - `offset` - object - Camera offset direction from target (normalized and scaled by distance). Used by: focus_path, focus_position. Default: {x:1, y:0.5, z:1}.
  - `respectAutoFocusSetting` - boolean - If true, only focus when plugin Auto Focus setting is enabled. Used by: focus_path, focus_position. Default: false.

### `manage_camera.focus_position`

move camera to focus on world position.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `position` - object - World position to focus on as Vector3. Used by: focus_position (required).
- Optional params:
  - `distance` - number - Distance from target in studs. Used by: focus_path, focus_position. Auto-calculated if not provided.
  - `duration` - number - Animation duration in seconds. Used by: focus_path, focus_position. Default: 0.5.
  - `offset` - object - Camera offset direction from target (normalized and scaled by distance). Used by: focus_path, focus_position. Default: {x:1, y:0.5, z:1}.
  - `lookAt` - object - Point for camera to look at. Used by: focus_position.
  - `respectAutoFocusSetting` - boolean - If true, only focus when plugin Auto Focus setting is enabled. Used by: focus_path, focus_position. Default: false.

### `manage_camera.suggest`

get suggested camera view for a target.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `path` -> `targetPath`
- Required params: none
- Optional params:
  - `path` - string - Instance path to focus on. Used by: focus_path (if not provided, focuses on selection), suggest (if not provided, uses selection).

### `manage_camera.screenshot`

**EDIT MODE ONLY — DO NOT call during an active playtest.** Captures the current Studio Edit-mode viewport as a PNG image (MCP image content). Pre-check: call system_info.play_status and only proceed when state == "edit"; the handler will fail with a clear error if a playtest is running. Requires the Studio setting "Allow Mesh / Image APIs" (Game Settings > Security). v1 does not support Play-mode capture because Roblox blocks converting CaptureService temporary contentId into EditableImage outside the edit DM plugin context (confirmed by Roblox engineers on devforum).

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

## Tool: `manage_tween`

[PRO] Tween service: create, play, pause, cancel tweens for smooth animations.

### `manage_tween.create`

create a new tween with target properties.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path to tween. Used by: create (required).
- Optional params:
  - `tweenInfo` - object - Tween configuration. Used by: create.
  - `properties` - object - Target property values to tween to. Used by: create. Supports Vector3, Color3, numbers, etc.

### `manage_tween.play`

play a created tween.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `tweenId` - string - Tween identifier returned by create. Used by: play, pause, cancel.

### `manage_tween.pause`

pause a running tween.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `tweenId` - string - Tween identifier returned by create. Used by: play, pause, cancel.

### `manage_tween.cancel`

cancel a tween.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `tweenId` - string - Tween identifier returned by create. Used by: play, pause, cancel.

## Tool: `manage_audio`

[PRO] Audio management: play, stop, pause, resume sounds. Set audio listener.

### `manage_audio.play`

play a sound (creates Sound if needed).

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the Sound instance or parent to create Sound in. Used by: play, stop, pause, resume.
  - `soundId` - string - Roblox sound asset ID (e.g., "rbxassetid://1234567"). Used by: play (if creating a new Sound).
  - `volume` - number - Sound volume (0-10). Used by: play. Default: 0.5.
  - `looped` - boolean - Whether the sound loops. Used by: play. Default: false.
  - `playbackSpeed` - number - Playback speed multiplier. Used by: play. Default: 1.

### `manage_audio.stop`

stop a playing sound.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the Sound instance or parent to create Sound in. Used by: play, stop, pause, resume.

### `manage_audio.pause`

pause a playing sound.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the Sound instance or parent to create Sound in. Used by: play, stop, pause, resume.

### `manage_audio.resume`

resume a paused sound.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the Sound instance or parent to create Sound in. Used by: play, stop, pause, resume.

### `manage_audio.set_listener`

set the audio listener type/target.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `listenerType` - "Camera" | "CFrame" | "ObjectPosition" | "ObjectCFrame" - Listener type for SoundService. Used by: set_listener.
  - `listenerPath` - string - Instance path for ObjectPosition/ObjectCFrame listener type. Used by: set_listener.

## Tool: `manage_animation`

[PRO] Animation: load, play, stop animations. Get animation tracks from humanoid/controller.

### `manage_animation.load`

load an animation on a Humanoid/AnimationController.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the Humanoid, AnimationController, or Model containing one. Used by: load, play, stop, get_tracks.
  - `animationId` - string - Roblox animation asset ID (e.g., "rbxassetid://1234567"). Used by: load.

### `manage_animation.play`

play a loaded animation track.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `trackId` - string - Animation track identifier returned by load. Used by: play (required), stop (required).
- Optional params:
  - `path` - string - Path to the Humanoid, AnimationController, or Model containing one. Used by: load, play, stop, get_tracks.
  - `speed` - number - Playback speed multiplier. Used by: play. Default: 1.
  - `fadeTime` - number - Fade time in seconds when starting/stopping. Used by: play, stop. Default: 0.1.
  - `weight` - number - Animation weight (0-1) for blending. Used by: play. Default: 1.
  - `priority` - "Core" | "Idle" | "Movement" | "Action" | "Action2" | "Action3" | "Action4" - Animation priority. Used by: play.

### `manage_animation.stop`

stop a playing animation.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `trackId` - string - Animation track identifier returned by load. Used by: play (required), stop (required).
- Optional params:
  - `path` - string - Path to the Humanoid, AnimationController, or Model containing one. Used by: load, play, stop, get_tracks.
  - `fadeTime` - number - Fade time in seconds when starting/stopping. Used by: play, stop. Default: 0.1.

### `manage_animation.get_tracks`

list all loaded animation tracks.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the Humanoid, AnimationController, or Model containing one. Used by: load, play, stop, get_tracks.

## Tool: `manage_physics`

[PRO] Physics collision groups: register, set collidable between groups, list groups.

### `manage_physics.register_group`

register a new collision group with PhysicsService.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `groupName` - string - Collision group name. Used by: register_group (required).
- Optional params: none

### `manage_physics.set_collidable`

set whether two groups can collide.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `group1` - string - First collision group name. Used by: set_collidable (required).
  - `group2` - string - Second collision group name. Used by: set_collidable (required).
  - `collidable` - boolean - Whether the two groups can collide. Used by: set_collidable (required).
- Optional params: none

### `manage_physics.get_groups`

list all registered collision groups.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

## Tool: `manage_effects`

[PRO] Particle effects: emit particles, clear all particles, toggle effect enabled state.

### `manage_effects.emit`

emit a burst of particles from a ParticleEmitter.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the effect instance (ParticleEmitter, Beam, Trail) or parent containing effects. Used by: emit, clear, toggle.
  - `count` - number - Number of particles to emit in a burst. Used by: emit. Default: 16.

### `manage_effects.clear`

clear all particles from a ParticleEmitter or all emitters under an instance.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the effect instance (ParticleEmitter, Beam, Trail) or parent containing effects. Used by: emit, clear, toggle.

### `manage_effects.toggle`

enable or disable a ParticleEmitter, Beam, Trail, or other effect.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Path to the effect instance (ParticleEmitter, Beam, Trail) or parent containing effects. Used by: emit, clear, toggle.
  - `enabled` - boolean - Enable or disable the effect. Used by: toggle.

## Tool: `manage_terrain`

[PRO] Terrain operations: fill shapes, clear regions, replace materials, manage colors, read/write voxels, generate procedural terrain, smooth terrain.

### `manage_terrain.fill_block`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `cframe` - object - Position and rotation for fill shapes. Used by: fill_block, fill_cylinder, fill_wedge.
  - `size` - object - Size in studs. Used by: fill_block, fill_wedge.

### `manage_terrain.fill_ball`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `center` - object - Center position as Vector3. Used by: fill_ball.
  - `radius` - number - Radius in studs. Used by: fill_ball, fill_cylinder.

### `manage_terrain.fill_cylinder`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `cframe` - object - Position and rotation for fill shapes. Used by: fill_block, fill_cylinder, fill_wedge.
  - `radius` - number - Radius in studs. Used by: fill_ball, fill_cylinder.
  - `height` - number - Height in studs. Used by: fill_cylinder.

### `manage_terrain.fill_wedge`

fill shapes with material. clear_region/clear_bounds: clear terrain. replace_material: swap materials in region. colors_get/colors_set: manage material colors. read_voxel: single voxel. read_voxels/write_voxels: bulk voxels. generate: procedural terrain. smooth: smooth terrain.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `cframe` - object - Position and rotation for fill shapes. Used by: fill_block, fill_cylinder, fill_wedge.
  - `size` - object - Size in studs. Used by: fill_block, fill_wedge.

### `manage_terrain.clear_region`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `region` - object - Rectangular region with min/max corners. Used by: clear_region, replace_material, read_voxels, write_voxels, generate, smooth.

### `manage_terrain.clear_bounds`

clear terrain.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `min` - object - Minimum corner for bounds-based clear. Used by: clear_bounds.
  - `max` - object - Maximum corner for bounds-based clear. Used by: clear_bounds.

### `manage_terrain.replace_material`

swap materials in region. colors_get/colors_set: manage material colors. read_voxel: single voxel. read_voxels/write_voxels: bulk voxels. generate: procedural terrain. smooth: smooth terrain.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `material` - string - Terrain material name (e.g., Grass, Rock, Water, Sand, Slate, Concrete). Used by: fill_*, replace_material, colors_get, colors_set.
  - `region` - object - Rectangular region with min/max corners. Used by: clear_region, replace_material, read_voxels, write_voxels, generate, smooth.
  - `sourceMaterial` - string - Material to replace. Used by: replace_material.
  - `targetMaterial` - string - Replacement material. Used by: replace_material.

### `manage_terrain.colors_get`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `material` - string - Terrain material name (e.g., Grass, Rock, Water, Sand, Slate, Concrete). Used by: fill_*, replace_material, colors_get, colors_set.

### `manage_terrain.colors_set`

manage material colors.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `material` - string - Terrain material name (e.g., Grass, Rock, Water, Sand, Slate, Concrete). Used by: fill_*, replace_material, colors_get, colors_set.
  - `color` - object - RGB color (0-255). Used by: colors_set.

### `manage_terrain.read_voxel`

single voxel. read_voxels/write_voxels: bulk voxels. generate: procedural terrain. smooth: smooth terrain.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `position` - object - Position as Vector3. Used by: read_voxel.

### `manage_terrain.read_voxels`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `region` - object - Rectangular region with min/max corners. Used by: clear_region, replace_material, read_voxels, write_voxels, generate, smooth.
  - `resolution` - number - Voxel resolution (studs per voxel). Used by: read_voxels, write_voxels. Default: 4.

### `manage_terrain.write_voxels`

bulk voxels.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `region` - object - Rectangular region with min/max corners. Used by: clear_region, replace_material, read_voxels, write_voxels, generate, smooth.
  - `resolution` - number - Voxel resolution (studs per voxel). Used by: read_voxels, write_voxels. Default: 4.
  - `materials` - array<array<array<string>>> - 3D array of material names [x][y][z]. Used by: write_voxels.
  - `occupancy` - array<array<array<number>>> - 3D array of occupancy values [x][y][z] (0-1). Used by: write_voxels.

### `manage_terrain.generate`

procedural terrain.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `region` - object - Rectangular region with min/max corners. Used by: clear_region, replace_material, read_voxels, write_voxels, generate, smooth.
  - `baseHeight` - number - Base terrain height in studs. Used by: generate. Default: 32.
  - `amplitude` - number - Height variation amplitude in studs. Used by: generate. Default: 24.
  - `frequency` - number - Noise frequency (0.001-0.1). Used by: generate. Default: 0.01.
  - `seed` - number - Random seed for terrain generation. Used by: generate.
  - `layers` - array<object> - Material layers by height. Used by: generate. Each: {material, maxHeight}.

### `manage_terrain.smooth`

smooth terrain.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `region` - object - Rectangular region with min/max corners. Used by: clear_region, replace_material, read_voxels, write_voxels, generate, smooth.
  - `intensity` - number - Smoothing intensity (0-1). Used by: smooth. Default: 0.5.

## Tool: `spatial_query`

[PRO] Spatial queries: raycast, find ground, check placement, multi-raycast, scan area, find flat areas, find spawn positions, analyze walkable, spatial map, find empty space, get bounds, snap to grid, check collision.

### `spatial_query.raycast`

single ray.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `origin` - object - Ray origin as Vector3. Used by: raycast.
  - `direction` - object - Ray direction and length as Vector3. Used by: raycast.
  - `filterType` - "Exclude" | "Include" - Raycast filter type. Used by: raycast, multi_raycast. Default: "Exclude".
  - `filterList` - array<string> - Instance paths to filter. Used by: raycast, multi_raycast, find_ground, check_placement, scan_area. Alias: filterInstances.
  - `filterInstances` - array<string> - Instance paths to filter (alias for filterList). Used by: raycast, multi_raycast, find_ground, check_placement, scan_area.
  - `ignoreWater` - boolean - Ignore terrain water. Used by: raycast, multi_raycast. Default: false.

### `spatial_query.find_ground`

ground below point.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `maxDistance` - number - Maximum distance for ground search. Used by: find_ground. Default: 1000.
  - `position` - object - Position as Vector3. Used by: find_ground (cast from here), check_placement (center), collision (hypothetical position).
  - `filterList` - array<string> - Instance paths to filter. Used by: raycast, multi_raycast, find_ground, check_placement, scan_area. Alias: filterInstances.
  - `filterInstances` - array<string> - Instance paths to filter (alias for filterList). Used by: raycast, multi_raycast, find_ground, check_placement, scan_area.
  - `offset` - number - Vertical offset for ground position. Used by: find_ground. Default: 0.

### `spatial_query.check_placement`

collision-free placement check.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `position` - object - Position as Vector3. Used by: find_ground (cast from here), check_placement (center), collision (hypothetical position).
  - `size` - object - Size as Vector3. Used by: check_placement (object size), find_space (required space size), scan_area (area X/Z dimensions).
  - `filterList` - array<string> - Instance paths to filter. Used by: raycast, multi_raycast, find_ground, check_placement, scan_area. Alias: filterInstances.
  - `filterInstances` - array<string> - Instance paths to filter (alias for filterList). Used by: raycast, multi_raycast, find_ground, check_placement, scan_area.
  - `rotation` - object - Rotation in degrees. Used by: check_placement.
  - `checkGround` - boolean - Verify ground support for placement. Used by: check_placement. Default: true.

### `spatial_query.multi_raycast`

batch rays.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `filterType` - "Exclude" | "Include" - Raycast filter type. Used by: raycast, multi_raycast. Default: "Exclude".
  - `filterList` - array<string> - Instance paths to filter. Used by: raycast, multi_raycast, find_ground, check_placement, scan_area. Alias: filterInstances.
  - `filterInstances` - array<string> - Instance paths to filter (alias for filterList). Used by: raycast, multi_raycast, find_ground, check_placement, scan_area.
  - `ignoreWater` - boolean - Ignore terrain water. Used by: raycast, multi_raycast. Default: false.
  - `rays` - array<object> - Array of ray specifications. Used by: multi_raycast. Max 50 rays.

### `spatial_query.scan_area`

heightmap generation.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `size` - object - Size as Vector3. Used by: check_placement (object size), find_space (required space size), scan_area (area X/Z dimensions).
  - `filterList` - array<string> - Instance paths to filter. Used by: raycast, multi_raycast, find_ground, check_placement, scan_area. Alias: filterInstances.
  - `filterInstances` - array<string> - Instance paths to filter (alias for filterList). Used by: raycast, multi_raycast, find_ground, check_placement, scan_area.
  - `center` - object - Center point for area scan. Used by: scan_area.
  - `resolution` - number - Grid resolution in studs. Used by: scan_area, analyze_walkable. Default: 4.
  - `maxResults` - number - Maximum results. Used by: spatial_map (default: 500), scan_area (default: 500), find_flat (default: 10).

### `spatial_query.find_flat`

flat areas for building.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `searchArea` - object - Bounding box for search. Used by: find_flat, find_spawn, find_space.
  - `minSize` - object - Minimum flat area size. Used by: find_flat.
  - `maxSlope` - number - Maximum slope in degrees. Used by: find_flat (default: 10), analyze_walkable (default: 45).
  - `tolerance` - number - Height variation tolerance in studs. Used by: find_flat.
  - `maxResults` - number - Maximum results. Used by: spatial_map (default: 500), scan_area (default: 500), find_flat (default: 10).

### `spatial_query.find_spawn`

spawn positions.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `searchArea` - object - Bounding box for search. Used by: find_flat, find_spawn, find_space.
  - `spawnSize` - object - Size of spawning entity. Used by: find_spawn. Default: {x:4, y:5, z:4}.
  - `minSpacing` - number - Minimum distance between spawn positions. Used by: find_spawn. Default: 10.
  - `preferOutdoor` - boolean - Prefer open sky positions. Used by: find_spawn. Default: false.
  - `count` - number - Number of results to find. Used by: find_spawn. Default: 10.

### `spatial_query.analyze_walkable`

walkability grid.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `area` - object - Bounding box for analysis. Used by: analyze_walkable. Contains min/max.
  - `maxSlope` - number - Maximum slope in degrees. Used by: find_flat (default: 10), analyze_walkable (default: 45).
  - `resolution` - number - Grid resolution in studs. Used by: scan_area, analyze_walkable. Default: 4.
  - `characterHeight` - number - Character height for clearance checks. Used by: analyze_walkable. Default: 5.
  - `maxStepHeight` - number - Maximum step height. Used by: analyze_walkable. Default: 2.

### `spatial_query.spatial_map`

all BasePart positions.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `path` -> `rootPath`
- Required params: none
- Optional params:
  - `path` - string - Instance path. Used by: bounds (optional), snap_grid (required), collision (required), spatial_map (rootPath alias).
  - `rootPath` - string - Root path for spatial map scan. Used by: spatial_map. Default: "game.Workspace".
  - `includeModels` - boolean - Include Model bounding boxes. Used by: spatial_map. Default: true.
  - `maxResults` - number - Maximum results. Used by: spatial_map (default: 500), scan_area (default: 500), find_flat (default: 10).

### `spatial_query.find_space`

empty space for object.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `size` - object - Size as Vector3. Used by: check_placement (object size), find_space (required space size), scan_area (area X/Z dimensions).
  - `searchArea` - object - Bounding box for search. Used by: find_flat, find_spawn, find_space.
  - `gridSize` - number - Grid snap size in studs. Used by: snap_grid (default: 4), find_space (default: 4).
  - `gridSnap` - number - Grid snap size. Alias for gridSize.
  - `padding` - number - Minimum distance from other objects. Used by: find_space. Default: 1.

### `spatial_query.bounds`

bounding box.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `path` - string - Instance path. Used by: bounds (optional), snap_grid (required), collision (required), spatial_map (rootPath alias).
  - `paths` - array<string> - Multiple instance paths for batch bounds. Used by: bounds.

### `spatial_query.snap_grid`

snap position to grid.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: bounds (optional), snap_grid (required), collision (required), spatial_map (rootPath alias).
- Optional params:
  - `gridSize` - number - Grid snap size in studs. Used by: snap_grid (default: 4), find_space (default: 4).
  - `gridSnap` - number - Grid snap size. Alias for gridSize.
  - `axes` - array<"x" | "y" | "z"> - Axes to snap. Used by: snap_grid. Default: ["x","y","z"]. Use ["x","z"] for horizontal only.

### `spatial_query.collision`

AABB collision check.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `path` - string - Instance path. Used by: bounds (optional), snap_grid (required), collision (required), spatial_map (rootPath alias).
- Optional params:
  - `position` - object - Position as Vector3. Used by: find_ground (cast from here), check_placement (center), collision (hypothetical position).
  - `ignorePaths` - array<string> - Instance paths to ignore in collision check. Used by: collision.

## Tool: `manage_assets`

[PRO] Asset management: insert models by ID, get asset info, search creator store, insert free models/packages, export selection.

### `manage_assets.insert`

insert model by asset ID.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `assetId` - number - Roblox asset ID. Used by: insert (required), info (required), insert_free (required), insert_package (required).
- Optional params:
  - `parent` - string - Parent path for inserted asset. Used by: insert, search_insert, insert_free, insert_package. Default: "game.Workspace".
  - `name` - string - Optional name for inserted instance.
  - `position` - object - Position to place the model. Used by: insert, insert_free.

### `manage_assets.info`

get asset metadata.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `assetId` - number - Roblox asset ID. Used by: insert (required), info (required), insert_free (required), insert_package (required).
- Optional params: none

### `manage_assets.search`

search Creator Store.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `maxResults` -> `limit`
- Required params:
  - `query` - string - Search keyword. Used by: search (required), search_insert (required). E.g., "monster", "tree", "car".
- Optional params:
  - `maxResults` - number - Maximum search results. Used by: search. Default: 10.
  - `category` - string - Asset category filter. Used by: search.
  - `sortType` - string - Sort order for search results. Used by: search.

### `manage_assets.search_insert`

search and insert first match.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `query` - string - Search keyword. Used by: search (required), search_insert (required). E.g., "monster", "tree", "car".
- Optional params:
  - `parent` - string - Parent path for inserted asset. Used by: insert, search_insert, insert_free, insert_package. Default: "game.Workspace".
  - `name` - string - Optional name for inserted instance.

### `manage_assets.insert_free`

insert free model.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `assetId` - number - Roblox asset ID. Used by: insert (required), info (required), insert_free (required), insert_package (required).
- Optional params:
  - `parent` - string - Parent path for inserted asset. Used by: insert, search_insert, insert_free, insert_package. Default: "game.Workspace".
  - `name` - string - Optional name for inserted instance.
  - `position` - object - Position to place the model. Used by: insert, insert_free.

### `manage_assets.insert_package`

insert package.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `assetId` - number - Roblox asset ID. Used by: insert (required), info (required), insert_free (required), insert_package (required).
- Optional params:
  - `parent` - string - Parent path for inserted asset. Used by: insert, search_insert, insert_free, insert_package. Default: "game.Workspace".
  - `name` - string - Optional name for inserted instance.

### `manage_assets.export`

export current selection.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `format` - string - Export format. Used by: export.
  - `includeProperties` - boolean - Include all properties in export. Used by: export. Default: false.
  - `includeChildren` - boolean - Include children in export. Used by: export. Default: false.
  - `maxDepth` - number - Maximum depth for recursive child export. Used by: export. Default: 5.

## Tool: `manage_sync`

[PRO] Project sync management: status, history, direction settings, read/write synced files.

### `manage_sync.status_current_place`

get sync status for the current connected place.

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `manage_sync.history`

get change history.

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `placeId` - number - Place ID for sync operations. Used by: history, directions, read_file, write_file.
  - `query` - object - Query parameters for history. Used by: history.

### `manage_sync.directions`

get per-type sync directions.

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `placeId` - number - Place ID for sync operations. Used by: history, directions, read_file, write_file.

### `manage_sync.read_file`

read a synced file.

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `placeId` - number - Place ID for sync operations. Used by: history, directions, read_file, write_file.
  - `instancePath` - string - Instance path for file read/write. Used by: read_file, write_file.
- Optional params: none

### `manage_sync.write_file`

write to a synced file.

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `placeId` - number - Place ID for sync operations. Used by: history, directions, read_file, write_file.
  - `instancePath` - string - Instance path for file read/write. Used by: read_file, write_file.
  - `content` - string - File content to write. Used by: write_file.
- Optional params: none

### `manage_sync.progress`

get real-time sync progress and bandwidth.

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

## Tool: `workspace_state`

[PRO] Workspace state: full sync, snapshot, recent changes, viewport info, clear history, metadata, scripts, selection info, clear cache.

### `workspace_state.sync`

fetch current Workspace state (hierarchy, history, stats).

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `includeMetadata` - boolean - Include metadata (instance counts, timestamps). Used by: sync. Default: true.

### `workspace_state.snapshot`

get full instance tree structure.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `workspace_state.changes`

get recent changes (added/removed/modified).

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `limit` - number - Maximum number of changes to return. Used by: changes. Default: 20.

### `workspace_state.viewport`

get camera position, FOV, viewport size, selection bounds.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `includeCameraInfo` - boolean - Include camera position and settings. Used by: viewport. Default: true.
  - `includeSelectionBounds` - boolean - Include current selection bounds info. Used by: viewport. Default: true.

### `workspace_state.clear_history`

clear change history.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `workspace_state.metadata`

get workspace metadata.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `workspace_state.scripts`

get script list.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `workspace_state.selection_info`

get selection info.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `workspace_state.clear_cache`

clear state cache.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

## Tool: `manage_logs`

Output logs: get filtered logs, poll incrementally with sinceSeq cursor, clear buffer, get recent errors.

### `manage_logs.get`

retrieve logs with optional level/limit/since/sinceSeq filters.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases:
  - `level` -> `type`
- Required params: none
- Optional params:
  - `level` - "all" | "error" | "warning" | "info" - Log level filter. Used by: get. Default: "all".
  - `limit` - number - Maximum entries to return. Used by: get (default: 100, max: 500), errors (default: 20, max: 100).
  - `pattern` - string - Text pattern to filter log messages. Used by: get.
  - `since` - number - Unix timestamp in milliseconds. Only logs after this time. Used by: get.
  - `sinceSeq` - number - Return only logs after this sequence number. Cursor mode returns logs oldest-to-newest and includes lastSeq/oldestSeq/hasMore/cursorStatus. Used by: get.

### `manage_logs.clear`

clear internal log buffer without resetting seq.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `manage_logs.errors`

quick access to recent errors only.

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `limit` - number - Maximum entries to return. Used by: get (default: 100, max: 500), errors (default: 20, max: 100).

## Tool: `system_info`

System info: ping, connection status, usage tier. [PRO] place info, services list, studio settings, playtest control, automated test runner.

### `system_info.ping`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `message` - string - Optional message to echo back. Used by: ping.

### `system_info.connection`

- Tier: `basic`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.usage`

- Tier: `basic`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.place_info`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.services`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.studio_settings`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.play`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `mode` - "play" | "run" - Playtest mode. "play" = Play mode (F5, default), "run" = Run mode (F8). Used by: play, run_test.

### `system_info.stop`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.pause`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.resume`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.play_status`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params: none

### `system_info.run_test`

- Tier: `pro`
- Route: `internal`
- Execution mode: `unspecified`
- Param aliases: none
- Required params:
  - `script` - string - Luau test body to inject into ServerScriptService.__MCP_TestRunner. Used by: run_test.
- Optional params:
  - `mode` - "play" | "run" - Playtest mode. "play" = Play mode (F5, default), "run" = Run mode (F8). Used by: play, run_test.
  - `test_name` - string - Optional report display name for the automated playtest run. Used by: run_test.
  - `timeout` - number - Timeout in seconds for the automated playtest run. Default: 60. Maximum: 300. Used by: run_test.
  - `contextId` - string - Optional execution context identifier. Used to continue an existing context for mutating actions.
  - `contextSummary` - ExecutionContextSummary - Optional structured execution context attached to this tool call.
  - `replayMetadata` - ExecutionReplayMetadata - Optional replay-ready metadata attached to this tool call.

## Tool: `manage_studio`

Control Roblox Studio editor view/rendering settings for screenshot and QA workflows. Use it to toggle Studio session-level View settings such as UI preview; it does not edit game UI objects or their properties.

### `manage_studio.toggle_ui_preview`

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Param aliases: none
- Required params: none
- Optional params:
  - `enabled` - boolean - Boolean value to set. Omit to toggle the current value. Used by: toggle_ui_preview (optional).

## Tool: `batch_execute`

[PRO] Execute multiple commands in a single batch. Each command is an object with "tool" name and "args". Commands execute sequentially; optionally continue on error.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Required params:
  - `commands` - array<object> - Array of commands to execute sequentially. Each command specifies a tool name and its arguments.
- Optional params:
  - `stopOnError` - boolean - If true, stop executing remaining commands when one fails. Default: true.

## Tool: `execute_luau`

[PRO] Execute arbitrary Luau code in Roblox Studio sandbox. Blocked services: HttpService, DataStoreService, MessagingService. Cannot access CoreGui/CorePackages.

- Tier: `pro`
- Route: `plugin`
- Execution mode: `unspecified`
- Required params:
  - `source` - string - Luau source code to execute. The code runs in a sandboxed environment with access to game services (except blocked ones). Return values are serialized and sent back as the tool result.
- Optional params:
  - `contextId` - string - Optional execution context identifier. Used to continue an existing context for mutating actions.
  - `contextSummary` - ExecutionContextSummary - Optional structured execution context attached to this tool call.
  - `replayMetadata` - ExecutionReplayMetadata - Optional replay-ready metadata attached to this tool call.

