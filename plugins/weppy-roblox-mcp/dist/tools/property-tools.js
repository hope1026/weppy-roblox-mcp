export const getPropertyTool = {
    name: 'get_property',
    description: 'Get the value of a property from a Roblox instance. Returns the property value with automatic type conversion (Vector3, Color3, CFrame, etc. are converted to JSON format).',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part", "game.ReplicatedStorage.Folder.Script")',
            },
            property: {
                type: 'string',
                description: 'Name of the property to get (e.g., "Size", "Position", "BrickColor", "Anchored")',
            },
        },
        required: ['path', 'property'],
    },
};
export const setPropertyTool = {
    name: 'set_property',
    description: 'Set the value of a property on a Roblox instance. Supports automatic type conversion from JSON to Roblox types (Vector3, Color3, CFrame, UDim2, Enums, BrickColor, etc.).',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part", "game.ReplicatedStorage.Folder.Script")',
            },
            property: {
                type: 'string',
                description: 'Name of the property to set (e.g., "Size", "Position", "BrickColor", "Anchored")',
            },
            value: {
                description: 'Property value to set. Can be a primitive (string, number, boolean) or an object representing a Roblox type.',
            },
        },
        required: ['path', 'property', 'value'],
    },
};
export const getAllPropertiesTool = {
    name: 'get_all_properties',
    description: 'Get all common properties of a Roblox instance based on its class type. Returns a dictionary of property names and their current values.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part", "game.ReplicatedStorage.Script")',
            },
            includeReadOnly: {
                type: 'boolean',
                description: 'Whether to include read-only properties. Default: false',
            },
        },
        required: ['path'],
    },
};
export const setMultiplePropertiesTool = {
    name: 'set_multiple_properties',
    description: 'Set multiple properties on a Roblox instance in a single call. More efficient than calling set_property multiple times.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
            properties: {
                type: 'object',
                description: 'Dictionary of property names to values. All values will be type-converted automatically.',
                additionalProperties: true,
            },
        },
        required: ['path', 'properties'],
    },
};
export const getAttributeTool = {
    name: 'get_attribute',
    description: 'Get the value of a custom attribute from a Roblox instance. Attributes are custom key-value pairs that can be set on any instance.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
            attribute: {
                type: 'string',
                description: 'Name of the attribute to get',
            },
        },
        required: ['path', 'attribute'],
    },
};
export const setAttributeTool = {
    name: 'set_attribute',
    description: 'Set a custom attribute on a Roblox instance. Attributes are custom key-value pairs that can be set on any instance. Supported types: string, number, boolean, Vector3, Color3, etc.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
            attribute: {
                type: 'string',
                description: 'Name of the attribute to set',
            },
            value: {
                description: 'Value to set. Can be string, number, boolean, or structured types like Vector3, Color3.',
            },
        },
        required: ['path', 'attribute', 'value'],
    },
};
export const getAllAttributesTool = {
    name: 'get_all_attributes',
    description: 'Get all custom attributes of a Roblox instance. Returns a dictionary of attribute names and their current values.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
        },
        required: ['path'],
    },
};
export const deleteAttributeTool = {
    name: 'delete_attribute',
    description: 'Delete a custom attribute from a Roblox instance.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
            attribute: {
                type: 'string',
                description: 'Name of the attribute to delete',
            },
        },
        required: ['path', 'attribute'],
    },
};
export const setCalculatedPropertyTool = {
    name: 'set_calculated_property',
    description: 'Set a property value based on a calculated expression. Variables can reference values from other instances. Example: Set Size based on "baseSize * multiplier" where baseSize comes from another part.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
            propertyName: {
                type: 'string',
                description: 'Name of the property to set (e.g., "Size", "Position")',
            },
            expression: {
                type: 'string',
                description: 'Mathematical expression to evaluate. Can use variable names defined in variables parameter. Examples: "baseValue * multiplier", "width + offset", "value / 2"',
            },
            variables: {
                type: 'object',
                description: 'Dictionary mapping variable names to their values or instance paths. Values can be: 1) Direct values (numbers, Vector3, etc.), 2) Instance property paths (e.g., "workspace.Config.BaseValue"). Example: { "baseValue": "workspace.Config.BaseValue", "multiplier": 2 }',
                additionalProperties: true,
            },
        },
        required: ['path', 'propertyName', 'expression', 'variables'],
    },
};
export const setRelativePropertyTool = {
    name: 'set_relative_property',
    description: 'Set a property value relative to its current value using mathematical operations. Useful for incrementing, scaling, or offsetting existing values.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the instance (e.g., "workspace.Part")',
            },
            propertyName: {
                type: 'string',
                description: 'Name of the property to modify (e.g., "Position", "Size", "Transparency")',
            },
            operation: {
                type: 'string',
                enum: ['add', 'subtract', 'multiply', 'divide'],
                description: 'Mathematical operation to apply. "add" and "subtract" work with Vector3, Color3, etc. "multiply" and "divide" work with scalars and can scale Vector3.',
            },
            value: {
                description: 'Value to use in the operation. Can be a number, Vector3, Color3, etc. depending on the property type and operation.',
            },
        },
        required: ['path', 'propertyName', 'operation', 'value'],
    },
};
export const propertyTools = [
    getPropertyTool,
    setPropertyTool,
    getAllPropertiesTool,
    setMultiplePropertiesTool,
    getAttributeTool,
    setAttributeTool,
    getAllAttributesTool,
    deleteAttributeTool,
    setCalculatedPropertyTool,
    setRelativePropertyTool,
];
//# sourceMappingURL=property-tools.js.map