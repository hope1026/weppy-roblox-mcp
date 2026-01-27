export const getSelectionTool = {
    name: 'get_selection',
    description: 'Get currently selected instances in Roblox Studio. Returns an array of selected instance paths with basic information (class name and name). Useful for understanding what the user is currently working on.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const getSelectionContextTool = {
    name: 'get_selection_context',
    description: 'Get detailed context of the current selection including script source code, properties, and children. This is the primary tool for understanding what the user has selected and its full context. Ideal for making informed edits or suggestions.',
    inputSchema: {
        type: 'object',
        properties: {
            includeSource: {
                type: 'boolean',
                description: 'Include script source code for Script, LocalScript, and ModuleScript instances. Default: true',
            },
            includeProperties: {
                type: 'boolean',
                description: 'Include all readable properties of the selected instances. Default: true',
            },
            includeChildren: {
                type: 'boolean',
                description: 'Include immediate children (one level deep) of each selected instance. Default: false',
            },
        },
    },
};
export const getSelectionDetailsTool = {
    name: 'get_selection_details',
    description: 'Get detailed hierarchical information about selected instances, including ancestor chains and descendant trees with configurable depth. Use this when you need to understand the full context of where selected instances exist in the game tree.',
    inputSchema: {
        type: 'object',
        properties: {
            includeAncestors: {
                type: 'boolean',
                description: 'Include the full ancestor chain from each selected instance up to game root. Useful for understanding the context and location of the selection. Default: false',
            },
            maxDepth: {
                type: 'number',
                description: 'Maximum depth for descendant tree traversal. Controls how many levels of children to include. Default: 1. Use 0 for no children, or higher values to explore deeper hierarchies.',
            },
        },
    },
};
export const setSelectionTool = {
    name: 'set_selection',
    description: 'Set the current selection in Roblox Studio to the specified instances. Replaces the current selection with the provided paths. Pass an empty array to clear the selection.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                items: {
                    type: 'string',
                },
                description: 'Array of instance paths to select (e.g., ["game.Workspace.Part1", "game.Workspace.Model.Part2"]). Use empty array to clear selection.',
            },
        },
        required: ['paths'],
    },
};
export const addToSelectionTool = {
    name: 'add_to_selection',
    description: 'Add instances to the current selection in Roblox Studio without clearing existing selection. Useful for building up a selection incrementally.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                items: {
                    type: 'string',
                },
                description: 'Array of instance paths to add to current selection (e.g., ["game.Workspace.Part1", "game.ReplicatedStorage.Model"])',
            },
        },
        required: ['paths'],
    },
};
export const removeFromSelectionTool = {
    name: 'remove_from_selection',
    description: 'Remove specific instances from the current selection in Roblox Studio. Other selected instances remain selected.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                items: {
                    type: 'string',
                },
                description: 'Array of instance paths to remove from current selection (e.g., ["game.Workspace.Part1"])',
            },
        },
        required: ['paths'],
    },
};
export const clearSelectionTool = {
    name: 'clear_selection',
    description: 'Clear the current selection in Roblox Studio. Equivalent to deselecting all instances.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const getPlaceInfoTool = {
    name: 'get_place_info',
    description: 'Get information about the current Roblox place being edited in Studio. Returns place ID, name, game ID, creator information, and other metadata. Useful for understanding the context of the current workspace.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const getServicesTool = {
    name: 'get_services',
    description: 'Get a list of all available Roblox services (Workspace, Players, ReplicatedStorage, ServerScriptService, etc.). Returns an array of service names that can be accessed via game:GetService(). Useful for discovering available services and their names.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const getStudioSettingsTool = {
    name: 'get_studio_settings',
    description: 'Get current Roblox Studio settings and preferences. Returns information about Studio theme, editor settings, and other configuration. Useful for adapting tool behavior to user preferences.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const runCommandTool = {
    name: 'run_command',
    description: 'Execute a Roblox Studio command or PluginAction. Commands include built-in actions like SelectAll, Copy, Paste, Delete, etc. Useful for automating Studio workflows.',
    inputSchema: {
        type: 'object',
        properties: {
            commandName: {
                type: 'string',
                description: 'Name of the Studio command to execute (e.g., "SelectAll", "Copy", "Paste", "Delete", "Undo", "Redo")',
            },
        },
        required: ['commandName'],
    },
};
export const watchSelectionTool = {
    name: 'watch_selection',
    description: 'Watch for selection changes in Roblox Studio (stub implementation). Returns current selection state as a one-time snapshot. Real-time monitoring is not supported in the current architecture. Future implementations may support WebSocket-based event streaming.',
    inputSchema: {
        type: 'object',
        properties: {
            timeout: {
                type: 'number',
                description: 'Optional timeout in milliseconds for watching (not used in stub implementation). Default: 30000',
            },
        },
    },
};
export const getCachedSelectionTool = {
    name: 'get_cached_selection',
    description: 'Get the most recent cached selection state pushed by the Roblox Studio plugin. Returns selection data without a round-trip to the plugin. Useful for quickly checking what the user has selected. Returns null if no recent selection data is available (plugin not connected or no selection changes).',
    inputSchema: {
        type: 'object',
        properties: {
            maxAge: {
                type: 'number',
                description: 'Maximum age of cached data in milliseconds. Default: 30000 (30 seconds). Set to 0 to get any cached data regardless of age.',
            },
        },
    },
};
export const selectionTools = [
    getSelectionTool,
    getSelectionContextTool,
    getSelectionDetailsTool,
    setSelectionTool,
    addToSelectionTool,
    removeFromSelectionTool,
    clearSelectionTool,
    getPlaceInfoTool,
    getServicesTool,
    getStudioSettingsTool,
    runCommandTool,
    watchSelectionTool,
    getCachedSelectionTool,
];
//# sourceMappingURL=selection-tools.js.map