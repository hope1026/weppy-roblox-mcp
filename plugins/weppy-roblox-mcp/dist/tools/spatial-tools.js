export const getSpatialMapTool = {
    name: 'get_spatial_map',
    description: 'Get position, size, and orientation of all BaseParts in the workspace. Returns a map of spatial data including overall bounds and individual instance bounding boxes. Ideal for AI-assisted level design and understanding the 3D environment.',
    inputSchema: {
        type: 'object',
        properties: {
            rootPath: {
                type: 'string',
                description: 'Root path to scan for spatial data. Default: "game.Workspace". Can be any container with BasePart descendants.',
                default: 'game.Workspace',
            },
            includeModels: {
                type: 'boolean',
                description: 'Whether to include Model bounding boxes in addition to BaseParts. Default: true. Models will have their collective bounding box calculated.',
                default: true,
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of instances to return. Default: 500. Lower values return faster. Maximum allowed: 2000.',
                default: 500,
            },
        },
    },
};
export const findEmptySpaceTool = {
    name: 'find_empty_space',
    description: 'Find an empty space in the workspace that can fit an object of the specified size. Useful for placing new objects without collision. Returns up to 10 candidate positions sorted by suitability score.',
    inputSchema: {
        type: 'object',
        properties: {
            size: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'Width of the required space' },
                    y: { type: 'number', description: 'Height of the required space' },
                    z: { type: 'number', description: 'Depth of the required space' },
                },
                required: ['x', 'y', 'z'],
                description: 'Required space size in studs. For example, { "x": 10, "y": 5, "z": 10 } for a 10x5x10 stud space.',
            },
            searchArea: {
                type: 'object',
                properties: {
                    min: {
                        type: 'object',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                description: 'Area to search within. If not provided, uses the entire workspace bounds. Example: { "min": {x: -100, y: 0, z: -100}, "max": {x: 100, y: 50, z: 100} }',
            },
            gridSize: {
                type: 'number',
                description: 'Grid snap size for search in studs. Default: 4. Smaller values provide more precision but take longer to search.',
                default: 4,
            },
            padding: {
                type: 'number',
                description: 'Minimum distance from other objects in studs. Default: 1. Higher values ensure more clearance around the placed object.',
                default: 1,
            },
        },
        required: ['size'],
    },
};
export const getBoundsTool = {
    name: 'get_bounds',
    description: 'Calculate the bounding box of an instance (including all descendants) or the entire workspace. Returns min/max coordinates, size, and center point. Useful for understanding the spatial extent of objects.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Instance path to calculate bounds for. If not provided, calculates bounds for the entire workspace. For BaseParts, returns the part bounds. For Models/Folders, returns the collective bounds of all descendant BaseParts.',
            },
        },
    },
};
export const snapToGridTool = {
    name: 'snap_to_grid',
    description: 'Snap an instance\'s position to the nearest grid point. Useful for aligning objects and maintaining consistent spacing in level design. Returns the old and new positions.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to snap. Must be a BasePart or Model with a PrimaryPart.',
            },
            gridSize: {
                type: 'number',
                description: 'Grid size in studs. Default: 4. Position will be rounded to the nearest multiple of this value.',
                default: 4,
            },
            axes: {
                type: 'array',
                items: {
                    type: 'string',
                    enum: ['x', 'y', 'z'],
                },
                description: 'Axes to snap. Default: ["x", "y", "z"] (all axes). Use ["x", "z"] to snap only horizontal axes, leaving Y unchanged.',
                default: ['x', 'y', 'z'],
            },
        },
        required: ['path'],
    },
};
export const checkCollisionTool = {
    name: 'check_collision',
    description: 'Check if an instance collides with any other instances in the workspace. Uses bounding box collision detection. Optionally test collision at a hypothetical position without moving the object. Returns list of colliding instances with overlap amounts.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Full path to the instance to check for collisions. Must be a BasePart or Model with a PrimaryPart.',
            },
            position: {
                type: 'object',
                properties: {
                    x: { type: 'number' },
                    y: { type: 'number' },
                    z: { type: 'number' },
                },
                description: 'Optional: check collision at this position instead of the instance\'s current position. Useful for testing placement before moving an object. Example: { "x": 10, "y": 5, "z": 0 }',
            },
            ignorePaths: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of instance paths to ignore in collision check. Useful for ignoring the floor, spawn points, or other instances that should not be considered obstacles. Example: ["game.Workspace.Floor", "game.Workspace.SpawnLocation"]',
            },
        },
        required: ['path'],
    },
};
export const spatialTools = [
    getSpatialMapTool,
    findEmptySpaceTool,
    getBoundsTool,
    snapToGridTool,
    checkCollisionTool,
];
//# sourceMappingURL=spatial-tools.js.map