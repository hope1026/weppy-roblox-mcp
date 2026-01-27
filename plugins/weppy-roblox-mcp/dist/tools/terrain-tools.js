export const terrainFillBlockTool = {
    name: 'terrain_fill_block',
    description: 'Fill a block-shaped region with terrain material. Creates a rectangular prism of terrain at the specified position and orientation. Supports all Roblox terrain materials.',
    inputSchema: {
        type: 'object',
        properties: {
            cframe: {
                type: 'object',
                description: 'Position and rotation of the block center. Position is required, rotation is optional.',
                properties: {
                    position: {
                        type: 'object',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    rotation: {
                        type: 'object',
                        description: 'Optional rotation in degrees (default: 0, 0, 0)',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                    },
                },
                required: ['position'],
            },
            size: {
                type: 'object',
                description: 'Size of the block in studs',
                properties: {
                    x: { type: 'number' },
                    y: { type: 'number' },
                    z: { type: 'number' },
                },
                required: ['x', 'y', 'z'],
            },
            material: {
                type: 'string',
                description: 'Terrain material to fill with (e.g., Grass, Rock, Water, Sand, Slate). See Enum.Material for full list.',
            },
        },
        required: ['cframe', 'size', 'material'],
    },
};
export const terrainFillBallTool = {
    name: 'terrain_fill_ball',
    description: 'Fill a spherical region with terrain material. Creates a sphere of terrain at the specified center point. Useful for creating hills, boulders, or crater-like formations.',
    inputSchema: {
        type: 'object',
        properties: {
            center: {
                type: 'object',
                description: 'Center position of the sphere',
                properties: {
                    x: { type: 'number' },
                    y: { type: 'number' },
                    z: { type: 'number' },
                },
                required: ['x', 'y', 'z'],
            },
            radius: {
                type: 'number',
                description: 'Radius of the sphere in studs',
            },
            material: {
                type: 'string',
                description: 'Terrain material to fill with (e.g., Grass, Rock, Water, Sand)',
            },
        },
        required: ['center', 'radius', 'material'],
    },
};
export const terrainFillCylinderTool = {
    name: 'terrain_fill_cylinder',
    description: 'Fill a cylindrical region with terrain material. Creates a cylinder of terrain at the specified position and orientation. Useful for pillars, wells, or tree trunks.',
    inputSchema: {
        type: 'object',
        properties: {
            cframe: {
                type: 'object',
                description: 'Position and rotation of the cylinder center. Position is required, rotation is optional.',
                properties: {
                    position: {
                        type: 'object',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    rotation: {
                        type: 'object',
                        description: 'Optional rotation in degrees (default: 0, 0, 0)',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                    },
                },
                required: ['position'],
            },
            height: {
                type: 'number',
                description: 'Height of the cylinder in studs',
            },
            radius: {
                type: 'number',
                description: 'Radius of the cylinder in studs',
            },
            material: {
                type: 'string',
                description: 'Terrain material to fill with (e.g., Concrete, Rock, Brick)',
            },
        },
        required: ['cframe', 'height', 'radius', 'material'],
    },
};
export const terrainFillWedgeTool = {
    name: 'terrain_fill_wedge',
    description: 'Fill a wedge-shaped region with terrain material. Creates a wedge (triangular prism) of terrain at the specified position and orientation. Useful for ramps, slopes, or mountain peaks.',
    inputSchema: {
        type: 'object',
        properties: {
            cframe: {
                type: 'object',
                description: 'Position and rotation of the wedge. Position is required, rotation is optional.',
                properties: {
                    position: {
                        type: 'object',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    rotation: {
                        type: 'object',
                        description: 'Optional rotation in degrees (default: 0, 0, 0)',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                    },
                },
                required: ['position'],
            },
            size: {
                type: 'object',
                description: 'Size of the wedge bounding box in studs',
                properties: {
                    x: { type: 'number' },
                    y: { type: 'number' },
                    z: { type: 'number' },
                },
                required: ['x', 'y', 'z'],
            },
            material: {
                type: 'string',
                description: 'Terrain material to fill with (e.g., Slate, Rock, Concrete)',
            },
        },
        required: ['cframe', 'size', 'material'],
    },
};
export const terrainClearTool = {
    name: 'terrain_clear',
    description: 'Clear terrain in a rectangular region by filling it with Air material. Effectively removes all terrain within the specified bounds. Use with caution as this operation cannot be undone.',
    inputSchema: {
        type: 'object',
        properties: {
            region: {
                type: 'object',
                description: 'Rectangular region to clear, defined by min and max corners',
                properties: {
                    min: {
                        type: 'object',
                        description: 'Minimum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        description: 'Maximum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                required: ['min', 'max'],
            },
        },
        required: ['region'],
    },
};
export const terrainReplaceMaterialTool = {
    name: 'terrain_replace_material',
    description: 'Replace one terrain material with another in a rectangular region. Useful for changing biomes, fixing terrain mistakes, or creating material transitions.',
    inputSchema: {
        type: 'object',
        properties: {
            region: {
                type: 'object',
                description: 'Rectangular region to search and replace within',
                properties: {
                    min: {
                        type: 'object',
                        description: 'Minimum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        description: 'Maximum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                required: ['min', 'max'],
            },
            sourceMaterial: {
                type: 'string',
                description: 'Material to replace (e.g., Grass, Water, Rock)',
            },
            targetMaterial: {
                type: 'string',
                description: 'Material to replace with (e.g., Sand, Slate, Concrete)',
            },
        },
        required: ['region', 'sourceMaterial', 'targetMaterial'],
    },
};
export const terrainGetMaterialColorTool = {
    name: 'terrain_get_material_color',
    description: 'Get the current custom color for a terrain material. Returns RGB values (0-255). If no custom color is set, returns the default material color.',
    inputSchema: {
        type: 'object',
        properties: {
            material: {
                type: 'string',
                description: 'Terrain material to query (e.g., Grass, Rock, Water, Sand)',
            },
        },
        required: ['material'],
    },
};
export const terrainSetMaterialColorTool = {
    name: 'terrain_set_material_color',
    description: 'Set a custom color for a terrain material. This affects all existing and future terrain of that material. Useful for creating custom biomes or themed environments.',
    inputSchema: {
        type: 'object',
        properties: {
            material: {
                type: 'string',
                description: 'Terrain material to customize (e.g., Grass, Rock, Water, Sand)',
            },
            color: {
                type: 'object',
                description: 'RGB color values (0-255)',
                properties: {
                    r: {
                        type: 'number',
                        description: 'Red component (0-255)',
                        minimum: 0,
                        maximum: 255,
                    },
                    g: {
                        type: 'number',
                        description: 'Green component (0-255)',
                        minimum: 0,
                        maximum: 255,
                    },
                    b: {
                        type: 'number',
                        description: 'Blue component (0-255)',
                        minimum: 0,
                        maximum: 255,
                    },
                },
                required: ['r', 'g', 'b'],
            },
        },
        required: ['material', 'color'],
    },
};
export const terrainReadVoxelsTool = {
    name: 'terrain_read_voxels',
    description: 'Read voxel data from a rectangular terrain region. Returns a 3D array of materials and occupancy values. Use smaller regions and lower resolution for better performance. Limited to 64x64x64 voxels per call.',
    inputSchema: {
        type: 'object',
        properties: {
            region: {
                type: 'object',
                description: 'Rectangular region to read voxels from',
                properties: {
                    min: {
                        type: 'object',
                        description: 'Minimum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        description: 'Maximum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                required: ['min', 'max'],
            },
            resolution: {
                type: 'number',
                description: 'Voxel resolution (studs per voxel). Default: 4. Higher values = fewer voxels but less detail.',
                default: 4,
            },
        },
        required: ['region'],
    },
};
export const terrainWriteVoxelsTool = {
    name: 'terrain_write_voxels',
    description: 'Write voxel data to a rectangular terrain region. Allows precise control over terrain at the voxel level. Materials should be an array of material names, occupancy should be 0-1 values.',
    inputSchema: {
        type: 'object',
        properties: {
            region: {
                type: 'object',
                description: 'Rectangular region to write voxels to',
                properties: {
                    min: {
                        type: 'object',
                        description: 'Minimum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        description: 'Maximum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                required: ['min', 'max'],
            },
            resolution: {
                type: 'number',
                description: 'Voxel resolution (studs per voxel). Default: 4',
                default: 4,
            },
            materials: {
                type: 'array',
                description: '3D array of material names [x][y][z]. Use material names like "Grass", "Rock", "Water", etc.',
                items: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: { type: 'string' },
                    },
                },
            },
            occupancy: {
                type: 'array',
                description: '3D array of occupancy values [x][y][z]. Values should be 0-1, where 0 is empty and 1 is fully solid.',
                items: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: { type: 'number', minimum: 0, maximum: 1 },
                    },
                },
            },
        },
        required: ['region', 'materials', 'occupancy'],
    },
};
export const terrainGenerateTool = {
    name: 'terrain_generate',
    description: 'Generate procedural terrain using Perlin noise. Creates natural-looking terrain with customizable height, roughness, and material layers. Great for creating landscapes, mountains, valleys, and islands.',
    inputSchema: {
        type: 'object',
        properties: {
            region: {
                type: 'object',
                description: 'Rectangular region to generate terrain within',
                properties: {
                    min: {
                        type: 'object',
                        description: 'Minimum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        description: 'Maximum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                required: ['min', 'max'],
            },
            baseHeight: {
                type: 'number',
                description: 'Base height of terrain in studs. Default: 32. This is the center point around which terrain fluctuates.',
                default: 32,
            },
            amplitude: {
                type: 'number',
                description: 'Height variation amplitude. Default: 24. Higher values create more dramatic height differences.',
                default: 24,
            },
            frequency: {
                type: 'number',
                description: 'Noise frequency (0.001-0.1). Default: 0.01. Lower values create smoother, larger features.',
                default: 0.01,
                minimum: 0.001,
                maximum: 0.1,
            },
            seed: {
                type: 'number',
                description: 'Random seed for terrain generation. Default: random. Use the same seed to regenerate identical terrain.',
            },
            layers: {
                type: 'array',
                description: 'Optional material layers by height. Each layer defines a material and its maximum height. Layers should be ordered from lowest to highest.',
                items: {
                    type: 'object',
                    properties: {
                        material: {
                            type: 'string',
                            description: 'Material name (e.g., Water, Sand, Grass, Rock, Snow)',
                        },
                        maxHeight: {
                            type: 'number',
                            description: 'Maximum height for this material layer. Terrain above this height will use the next layer.',
                        },
                    },
                    required: ['material', 'maxHeight'],
                },
            },
        },
        required: ['region'],
    },
};
export const terrainSmoothTool = {
    name: 'terrain_smooth',
    description: 'Smooth terrain in a rectangular region by averaging voxel occupancy values with neighbors. Reduces sharp edges and jagged surfaces. Higher intensity creates smoother results but may lose detail.',
    inputSchema: {
        type: 'object',
        properties: {
            region: {
                type: 'object',
                description: 'Rectangular region to smooth',
                properties: {
                    min: {
                        type: 'object',
                        description: 'Minimum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                    max: {
                        type: 'object',
                        description: 'Maximum corner of the region',
                        properties: {
                            x: { type: 'number' },
                            y: { type: 'number' },
                            z: { type: 'number' },
                        },
                        required: ['x', 'y', 'z'],
                    },
                },
                required: ['min', 'max'],
            },
            intensity: {
                type: 'number',
                description: 'Smoothing intensity (0-1). Default: 0.5. Higher values create smoother terrain but may lose detail.',
                default: 0.5,
                minimum: 0,
                maximum: 1,
            },
        },
        required: ['region'],
    },
};
export const terrainTools = [
    terrainFillBlockTool,
    terrainFillBallTool,
    terrainFillCylinderTool,
    terrainFillWedgeTool,
    terrainClearTool,
    terrainReplaceMaterialTool,
    terrainGetMaterialColorTool,
    terrainSetMaterialColorTool,
    terrainReadVoxelsTool,
    terrainWriteVoxelsTool,
    terrainGenerateTool,
    terrainSmoothTool,
];
//# sourceMappingURL=terrain-tools.js.map