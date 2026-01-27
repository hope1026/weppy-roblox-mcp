export const addTagTool = {
    name: 'add_tag',
    description: 'Add a tag to a Roblox instance using CollectionService. Tags are strings that can be used to group instances for querying and organization. Multiple tags can be added to the same instance.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to tag (e.g., game.Workspace.Part, game.ReplicatedStorage.Folder.Model)',
            },
            tag: {
                type: 'string',
                description: 'Tag string to add. Use descriptive names like "enemy", "collectible", "interactable". Tags are case-sensitive.',
            },
        },
        required: ['path', 'tag'],
    },
};
export const removeTagTool = {
    name: 'remove_tag',
    description: 'Remove a tag from a Roblox instance using CollectionService. If the instance does not have the specified tag, no error is thrown.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to remove the tag from (e.g., game.Workspace.Part)',
            },
            tag: {
                type: 'string',
                description: 'Tag string to remove. Tags are case-sensitive.',
            },
        },
        required: ['path', 'tag'],
    },
};
export const getTagsTool = {
    name: 'get_tags',
    description: 'Get all tags on a specific Roblox instance. Returns an array of tag strings. Useful for inspecting what tags an instance has.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to get tags from (e.g., game.Workspace.Part)',
            },
        },
        required: ['path'],
    },
};
export const getTaggedTool = {
    name: 'get_tagged',
    description: 'Get all instances that have a specific tag using CollectionService:GetTagged(). Returns an array of matching instances with their paths, class names, and names. Optionally filter by a root path.',
    inputSchema: {
        type: 'object',
        properties: {
            tag: {
                type: 'string',
                description: 'Tag string to search for. Returns all instances with this tag.',
            },
            root: {
                type: 'string',
                description: 'Optional root path to filter results. Only instances that are descendants of this path will be returned. Default: no filter (all tagged instances).',
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
export const hasTagTool = {
    name: 'has_tag',
    description: 'Check if a specific Roblox instance has a given tag. Returns a boolean indicating whether the tag exists on the instance.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to check (e.g., game.Workspace.Part)',
            },
            tag: {
                type: 'string',
                description: 'Tag string to check for. Tags are case-sensitive.',
            },
        },
        required: ['path', 'tag'],
    },
};
export const tagTools = [
    addTagTool,
    removeTagTool,
    getTagsTool,
    getTaggedTool,
    hasTagTool,
];
//# sourceMappingURL=tag-tools.js.map