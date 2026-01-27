export const massCreateInstancesTool = {
    name: 'mass_create_instances',
    description: 'Create multiple Roblox instances in a single batch operation. Each instance can have its own class, name, parent, and properties. Returns an array of created instance paths.',
    inputSchema: {
        type: 'object',
        properties: {
            instances: {
                type: 'array',
                description: 'Array of instance specifications to create',
                items: {
                    type: 'object',
                    properties: {
                        className: {
                            type: 'string',
                            description: 'Roblox class name (e.g., Part, Script, Folder)',
                        },
                        name: {
                            type: 'string',
                            description: 'Name for the instance',
                        },
                        parentPath: {
                            type: 'string',
                            description: 'Parent path where the instance will be created',
                        },
                        properties: {
                            type: 'object',
                            description: 'Optional initial properties to set',
                            additionalProperties: true,
                        },
                    },
                    required: ['className', 'name', 'parentPath'],
                },
            },
        },
        required: ['instances'],
    },
};
export const massDeleteInstancesTool = {
    name: 'mass_delete_instances',
    description: 'Delete multiple Roblox instances in a single batch operation. Instances will be permanently removed. Use with caution as this action cannot be undone.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                description: 'Array of instance paths to delete',
                items: {
                    type: 'string',
                },
            },
        },
        required: ['paths'],
    },
};
export const massSetPropertyTool = {
    name: 'mass_set_property',
    description: 'Set the same property to the same value on multiple Roblox instances. Useful for applying uniform changes across multiple objects.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                description: 'Array of instance paths to modify',
                items: {
                    type: 'string',
                },
            },
            propertyName: {
                type: 'string',
                description: 'Name of the property to set (e.g., "Anchored", "Color", "Material")',
            },
            propertyValue: {
                description: 'Value to set. Can be a primitive or complex type (Vector3, Color3, etc.)',
            },
        },
        required: ['paths', 'propertyName', 'propertyValue'],
    },
};
export const batchExecuteTool = {
    name: 'batch_execute',
    description: 'Execute multiple commands in a single batch operation. Commands are executed sequentially. Returns results for all commands. Optionally continue execution even if a command fails.',
    inputSchema: {
        type: 'object',
        properties: {
            commands: {
                type: 'array',
                description: 'Array of commands to execute',
                items: {
                    type: 'object',
                    properties: {
                        action: {
                            type: 'string',
                            description: 'Action name (e.g., "create_instance", "set_property", "delete_instance")',
                        },
                        params: {
                            type: 'object',
                            description: 'Parameters for the action',
                            additionalProperties: true,
                        },
                    },
                    required: ['action', 'params'],
                },
            },
            continueOnError: {
                type: 'boolean',
                description: 'If true, continue executing remaining commands even if one fails. Default: false',
            },
        },
        required: ['commands'],
    },
};
export const smartDuplicateTool = {
    name: 'smart_duplicate',
    description: 'Create multiple copies of an instance with automatic positional offset. Each copy will be offset from the previous one. Perfect for creating grids, arrays, or evenly-spaced objects.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance to duplicate',
            },
            count: {
                type: 'number',
                description: 'Number of copies to create (not including the original)',
            },
            offset: {
                type: 'object',
                description: 'Offset vector to apply to each successive copy',
                properties: {
                    x: { type: 'number' },
                    y: { type: 'number' },
                    z: { type: 'number' },
                },
                required: ['x', 'y', 'z'],
            },
            targetParent: {
                type: 'string',
                description: 'Optional parent for the duplicated instances. If not specified, uses the same parent as the source.',
            },
        },
        required: ['path', 'count', 'offset'],
    },
};
export const massGetPropertyTool = {
    name: 'mass_get_property',
    description: 'Get the same property from multiple Roblox instances. Returns an array of property values in the same order as the input paths.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                description: 'Array of instance paths to query',
                items: {
                    type: 'string',
                },
            },
            propertyName: {
                type: 'string',
                description: 'Name of the property to get from all instances',
            },
        },
        required: ['paths', 'propertyName'],
    },
};
export const massDuplicateTool = {
    name: 'mass_duplicate',
    description: 'Duplicate multiple Roblox instances in a single batch operation. Each instance is cloned with all descendants and properties. Optionally specify a different parent for all duplicated instances.',
    inputSchema: {
        type: 'object',
        properties: {
            paths: {
                type: 'array',
                description: 'Array of instance paths to duplicate',
                items: {
                    type: 'string',
                },
            },
            targetParent: {
                type: 'string',
                description: 'Optional parent path for all duplicated instances. If not specified, each duplicate will have the same parent as its source.',
            },
        },
        required: ['paths'],
    },
};
export const modifyChildrenTool = {
    name: 'modify_children',
    description: 'Set the same property on all children of a parent instance. Optionally filter children by class name. Useful for modifying all children of a model or folder at once.',
    inputSchema: {
        type: 'object',
        properties: {
            parentPath: {
                type: 'string',
                description: 'Path to the parent instance whose children will be modified',
            },
            propertyName: {
                type: 'string',
                description: 'Name of the property to set on all children',
            },
            propertyValue: {
                description: 'Value to set on all children',
            },
            filter: {
                type: 'string',
                description: 'Optional class name filter. If specified, only children of this class will be modified (e.g., "Part", "MeshPart")',
            },
            recursive: {
                type: 'boolean',
                description: 'If true, modifies all descendants instead of just immediate children. Default: false',
            },
        },
        required: ['parentPath', 'propertyName', 'propertyValue'],
    },
};
export const bulkTools = [
    massCreateInstancesTool,
    massDeleteInstancesTool,
    massSetPropertyTool,
    batchExecuteTool,
    smartDuplicateTool,
    massGetPropertyTool,
    massDuplicateTool,
    modifyChildrenTool,
];
//# sourceMappingURL=bulk-tools.js.map