export const createInstanceTool = {
    name: 'create_instance',
    description: 'Create a new Roblox instance with the specified class name and parent. Optionally set initial properties and name. Returns the full path of the created instance.',
    inputSchema: {
        type: 'object',
        properties: {
            className: {
                type: 'string',
                description: 'Roblox class name (e.g., Part, Script, Folder, Model, ScreenGui)',
            },
            parent: {
                type: 'string',
                description: 'Parent path where the instance will be created (e.g., game.Workspace, game.StarterPlayer.StarterPlayerScripts)',
            },
            name: {
                type: 'string',
                description: 'Optional custom name for the instance. If not provided, uses the default class name.',
            },
            properties: {
                type: 'object',
                description: 'Optional initial properties to set on the instance. Use JSON format with proper type conversion (Vector3, Color3, etc.)',
            },
        },
        required: ['className', 'parent'],
    },
};
export const deleteInstanceTool = {
    name: 'delete_instance',
    description: 'Delete a Roblox instance at the specified path. The instance will be permanently removed from the game tree. Use with caution as this action cannot be undone.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to delete (e.g., game.Workspace.Part, game.ReplicatedStorage.Folder.Script)',
            },
        },
        required: ['path'],
    },
};
export const cloneInstanceTool = {
    name: 'clone_instance',
    description: 'Clone an existing Roblox instance, creating a deep copy with all descendants and properties. Optionally specify a different parent for the cloned instance.',
    inputSchema: {
        type: 'object',
        properties: {
            sourcePath: {
                type: 'string',
                description: 'Full path to the instance to clone (e.g., game.Workspace.Model, game.ReplicatedStorage.Tool)',
            },
            targetParent: {
                type: 'string',
                description: 'Optional parent path for the cloned instance. If not provided, the clone will have the same parent as the source.',
            },
        },
        required: ['sourcePath'],
    },
};
export const getInstanceTool = {
    name: 'get_instance',
    description: 'Get detailed information about a Roblox instance, including its class name, name, parent, key properties, and children count. Useful for inspecting the game tree.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to inspect (e.g., game.Workspace, game.Players.LocalPlayer.Character.Humanoid)',
            },
        },
        required: ['path'],
    },
};
export const getInstanceChildrenTool = {
    name: 'get_instance_children',
    description: 'Get all children of a Roblox instance. Optionally traverse the entire descendant tree with configurable depth limit. Returns an array of child instances with their paths, class names, and names.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the parent instance (e.g., game.Workspace, game.ReplicatedStorage)',
            },
            recursive: {
                type: 'boolean',
                description: 'If true, returns all descendants instead of just immediate children. Default: false',
            },
            maxDepth: {
                type: 'number',
                description: 'Maximum depth for recursive traversal. Only used when recursive is true. Default: 10. Use lower values for large trees to avoid timeout.',
            },
        },
        required: ['path'],
    },
};
export const moveInstanceTool = {
    name: 'move_instance',
    description: 'Move a Roblox instance to a new parent location. The instance and all its descendants will be moved.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to move (e.g., game.Workspace.Part)',
            },
            newParent: {
                type: 'string',
                description: 'Path to the new parent instance (e.g., game.Workspace.Folder)',
            },
        },
        required: ['path', 'newParent'],
    },
};
export const renameInstanceTool = {
    name: 'rename_instance',
    description: 'Rename a Roblox instance. Changes the Name property of the instance at the specified path.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to rename (e.g., game.Workspace.Part)',
            },
            newName: {
                type: 'string',
                description: 'New name for the instance',
            },
        },
        required: ['path', 'newName'],
    },
};
export const findFirstChildTool = {
    name: 'find_first_child',
    description: 'Find an immediate child of a Roblox instance by name. Optionally filter by class name. Similar to Roblox\'s FindFirstChild method.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the parent instance to search within (e.g., game.Workspace)',
            },
            childName: {
                type: 'string',
                description: 'Name of the child instance to find',
            },
            className: {
                type: 'string',
                description: 'Optional class name filter. If provided, only returns the child if it matches this class.',
            },
        },
        required: ['path', 'childName'],
    },
};
export const findFirstDescendantTool = {
    name: 'find_first_descendant',
    description: 'Find a descendant of a Roblox instance by name, searching recursively through all descendants. Optionally filter by class name. Similar to Roblox\'s FindFirstDescendant method.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the ancestor instance to search within (e.g., game.Workspace)',
            },
            descendantName: {
                type: 'string',
                description: 'Name of the descendant instance to find',
            },
            className: {
                type: 'string',
                description: 'Optional class name filter. If provided, only returns the descendant if it matches this class.',
            },
        },
        required: ['path', 'descendantName'],
    },
};
export const createInstanceWithPropertiesTool = {
    name: 'create_instance_with_properties',
    description: 'Create a new Roblox instance with a full set of properties applied atomically. Returns the created instance with confirmation of all properties set. Ideal for creating fully-configured objects in one operation.',
    inputSchema: {
        type: 'object',
        properties: {
            className: {
                type: 'string',
                description: 'Roblox class name (e.g., Part, Script, Folder, Model, ScreenGui)',
            },
            parent: {
                type: 'string',
                description: 'Parent path where the instance will be created (e.g., game.Workspace)',
            },
            name: {
                type: 'string',
                description: 'Name for the new instance',
            },
            properties: {
                type: 'object',
                description: 'Properties to set on the instance. Supports all Roblox property types with automatic conversion.',
                additionalProperties: true,
            },
        },
        required: ['className', 'parent', 'name', 'properties'],
    },
};
export const getClassInfoTool = {
    name: 'get_class_info',
    description: 'Get information about a Roblox class, including its common properties, parent class, and whether it can be created with Instance.new(). Useful for understanding what properties are available.',
    inputSchema: {
        type: 'object',
        properties: {
            className: {
                type: 'string',
                description: 'Name of the Roblox class (e.g., Part, Model, Script)',
            },
        },
        required: ['className'],
    },
};
export const waitForChildTool = {
    name: 'wait_for_child',
    description: 'Wait for a child instance to exist under a parent. Returns immediately if the child already exists, otherwise waits up to the specified timeout. Similar to Roblox\'s WaitForChild method.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the parent instance (e.g., game.Workspace)',
            },
            childName: {
                type: 'string',
                description: 'Name of the child instance to wait for',
            },
            timeout: {
                type: 'number',
                description: 'Maximum time to wait in seconds. Default: 5. Maximum: 30.',
            },
        },
        required: ['path', 'childName'],
    },
};
export const instanceTools = [
    createInstanceTool,
    deleteInstanceTool,
    cloneInstanceTool,
    getInstanceTool,
    getInstanceChildrenTool,
    moveInstanceTool,
    renameInstanceTool,
    findFirstChildTool,
    findFirstDescendantTool,
    createInstanceWithPropertiesTool,
    getClassInfoTool,
    waitForChildTool,
];
//# sourceMappingURL=instance-tools.js.map