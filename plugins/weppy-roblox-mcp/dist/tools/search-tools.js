export const getFileTreeTool = {
    name: 'get_file_tree',
    description: 'Get the hierarchical structure of instances in the game, similar to the Explorer panel in Roblox Studio. Returns a tree view showing the instance hierarchy with configurable depth limit. Useful for understanding the overall game structure.',
    inputSchema: {
        type: 'object',
        properties: {
            root: {
                type: 'string',
                description: 'Root path to start the tree from. Default: "game" (entire game tree). Can be any valid path like "game.Workspace" or "game.ReplicatedStorage".',
                default: 'game',
            },
            maxDepth: {
                type: 'number',
                description: 'Maximum depth to traverse from the root. Default: 5. Lower values return faster but show less detail. Maximum allowed: 20.',
                default: 5,
            },
            includeServices: {
                type: 'boolean',
                description: 'Whether to include Roblox services (Workspace, ReplicatedStorage, etc.) when root is "game". Default: true.',
                default: true,
            },
        },
    },
};
export const searchByNameTool = {
    name: 'search_by_name',
    description: 'Search for instances by name pattern using wildcard matching. Supports * (match any characters) and ? (match single character). Case-insensitive by default. Returns an array of matching instances with their paths and class names.',
    inputSchema: {
        type: 'object',
        properties: {
            pattern: {
                type: 'string',
                description: 'Name pattern to search for. Supports wildcards: * (any characters) and ? (single character). Examples: "Part*", "?ello", "*Script"',
            },
            root: {
                type: 'string',
                description: 'Root path to search from. Default: "game" (search entire game tree). Use specific paths like "game.Workspace" to narrow the search scope.',
                default: 'game',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 100. Lower values return faster. Maximum allowed: 1000.',
                default: 100,
            },
            caseSensitive: {
                type: 'boolean',
                description: 'Whether the search should be case-sensitive. Default: false (case-insensitive).',
                default: false,
            },
        },
        required: ['pattern'],
    },
};
export const searchByClassTool = {
    name: 'search_by_class',
    description: 'Search for instances by Roblox class name. Optionally include subclasses (e.g., searching for BasePart will find Part, MeshPart, etc.). Returns an array of matching instances with their paths and names.',
    inputSchema: {
        type: 'object',
        properties: {
            className: {
                type: 'string',
                description: 'Roblox class name to search for. Examples: Part, Script, LocalScript, BasePart, GuiObject, Model, Folder',
            },
            root: {
                type: 'string',
                description: 'Root path to search from. Default: "game" (search entire game tree). Use specific paths like "game.Workspace" to narrow the search scope.',
                default: 'game',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 100. Lower values return faster. Maximum allowed: 1000.',
                default: 100,
            },
            includeSubclasses: {
                type: 'boolean',
                description: 'Whether to include subclasses of the specified class. Default: true. For example, searching for "BasePart" with includeSubclasses=true will find Part, MeshPart, WedgePart, etc.',
                default: true,
            },
        },
        required: ['className'],
    },
};
export const getProjectStructureTool = {
    name: 'get_project_structure',
    description: 'Get the entire project structure organized by Roblox services. Returns a comprehensive tree view similar to get_file_tree but with better organization for understanding the overall game architecture. Useful for initial exploration and getting a holistic view.',
    inputSchema: {
        type: 'object',
        properties: {
            rootPath: {
                type: 'string',
                description: 'Root path to start from. Default: "game" (entire game tree). Can be any valid path like "game.Workspace" or "game.ReplicatedStorage".',
                default: 'game',
            },
            depth: {
                type: 'number',
                description: 'Maximum depth to traverse from the root. Default: 3. Lower values return faster but show less detail. Maximum allowed: 10.',
                default: 3,
            },
        },
    },
};
export const searchByPropertyTool = {
    name: 'search_by_property',
    description: 'Search for instances by property name and value. Finds all instances that have a specific property set to a given value. Supports various property types (strings, numbers, booleans, Vector3, Color3, etc.). Returns an array of matching instances.',
    inputSchema: {
        type: 'object',
        properties: {
            propertyName: {
                type: 'string',
                description: 'Property name to search for. Examples: Transparency, Anchored, BrickColor, Position, Size, Text, Value',
            },
            propertyValue: {
                description: 'Property value to match. Type should match the property type. For Vector3: {x, y, z}, for Color3: {r, g, b} (0-1), for strings: "value"',
            },
            rootPath: {
                type: 'string',
                description: 'Root path to search from. Default: "game" (search entire game tree). Use specific paths like "game.Workspace" to narrow the search scope.',
                default: 'game',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 100. Lower values return faster. Maximum allowed: 1000.',
                default: 100,
            },
        },
        required: ['propertyName', 'propertyValue'],
    },
};
export const searchByTagTool = {
    name: 'search_by_tag',
    description: 'Search for instances by CollectionService tag. This is a convenience wrapper around get_tagged that provides consistent search interface. Returns an array of matching instances with their paths, class names, and names.',
    inputSchema: {
        type: 'object',
        properties: {
            tag: {
                type: 'string',
                description: 'Tag string to search for. Returns all instances with this tag. Tags are case-sensitive.',
            },
            rootPath: {
                type: 'string',
                description: 'Root path to filter results. Only instances that are descendants of this path will be returned. Default: "game" (all tagged instances).',
                default: 'game',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 100. Maximum allowed: 1000.',
                default: 100,
            },
        },
        required: ['tag'],
    },
};
export const getDescendantsTool = {
    name: 'get_descendants',
    description: 'Get all descendants of a specific instance. Returns a flat list of all child instances recursively, similar to Instance:GetDescendants() in Roblox. Useful for understanding what is inside a Model, Folder, or other container.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to get descendants from (e.g., game.Workspace.Model, game.ReplicatedStorage.Folder)',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 100. Lower values return faster. Maximum allowed: 1000.',
                default: 100,
            },
        },
        required: ['path'],
    },
};
export const getAncestorsTool = {
    name: 'get_ancestors',
    description: 'Get all ancestors of a specific instance. Returns the parent chain from the instance up to the game root, ordered from closest parent to root. Useful for understanding the instance hierarchy and location in the game tree.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to get ancestors from (e.g., game.Workspace.Folder.Part)',
            },
        },
        required: ['path'],
    },
};
export const searchTools = [
    getFileTreeTool,
    searchByNameTool,
    searchByClassTool,
    getProjectStructureTool,
    searchByPropertyTool,
    searchByTagTool,
    getDescendantsTool,
    getAncestorsTool,
];
//# sourceMappingURL=search-tools.js.map