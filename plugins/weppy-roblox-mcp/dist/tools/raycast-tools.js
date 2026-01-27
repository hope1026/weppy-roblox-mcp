export const raycastTool = {
    name: 'raycast',
    description: 'Perform a single raycast from origin in the specified direction. Returns hit information including position, normal, material, distance, and the instance that was hit. Useful for line-of-sight checks, ground detection, and collision queries.',
    inputSchema: {
        type: 'object',
        properties: {
            origin: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'X coordinate of ray origin' },
                    y: { type: 'number', description: 'Y coordinate of ray origin' },
                    z: { type: 'number', description: 'Z coordinate of ray origin' },
                },
                required: ['x', 'y', 'z'],
                description: 'Starting point of the ray in world coordinates',
            },
            direction: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'X component of direction' },
                    y: { type: 'number', description: 'Y component of direction' },
                    z: { type: 'number', description: 'Z component of direction' },
                },
                required: ['x', 'y', 'z'],
                description: 'Direction and length of the ray. The magnitude determines the maximum distance.',
            },
            filterType: {
                type: 'string',
                enum: ['Exclude', 'Include'],
                description: 'Filter type for raycast. "Exclude" ignores specified instances, "Include" only considers them. Default: "Exclude"',
                default: 'Exclude',
            },
            filterInstances: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of instance paths to filter. For "Exclude", these instances are ignored. For "Include", only these instances are considered.',
            },
            ignoreWater: {
                type: 'boolean',
                description: 'Whether to ignore Terrain water when raycasting. Default: false',
                default: false,
            },
        },
        required: ['origin', 'direction'],
    },
};
export const findGroundTool = {
    name: 'find_ground',
    description: 'Find the ground position directly below a given point. Casts a ray downward and returns the hit position with an optional vertical offset. Perfect for placing objects on terrain or determining floor height at a location.',
    inputSchema: {
        type: 'object',
        properties: {
            position: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'X coordinate' },
                    y: { type: 'number', description: 'Y coordinate (starting height)' },
                    z: { type: 'number', description: 'Z coordinate' },
                },
                required: ['x', 'y', 'z'],
                description: 'Position to cast ray downward from. The Y value is the starting height.',
            },
            maxDistance: {
                type: 'number',
                description: 'Maximum distance to search for ground. Default: 1000 studs',
                default: 1000,
            },
            offset: {
                type: 'number',
                description: 'Vertical offset to add to the ground position. Use positive values to place objects above the ground. Default: 0',
                default: 0,
            },
            filterInstances: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of instance paths to ignore when finding ground. Useful for ignoring transparent platforms or triggers.',
            },
        },
        required: ['position'],
    },
};
export const checkPlacementTool = {
    name: 'check_placement',
    description: 'Check if an object of specified size can be placed at a position without collisions. Uses blockcast for accurate collision detection. Optionally verifies ground support. Returns whether placement is valid and any colliding instances.',
    inputSchema: {
        type: 'object',
        properties: {
            position: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'X coordinate' },
                    y: { type: 'number', description: 'Y coordinate' },
                    z: { type: 'number', description: 'Z coordinate' },
                },
                required: ['x', 'y', 'z'],
                description: 'Center position where the object would be placed',
            },
            size: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'Width' },
                    y: { type: 'number', description: 'Height' },
                    z: { type: 'number', description: 'Depth' },
                },
                required: ['x', 'y', 'z'],
                description: 'Size of the object to check placement for',
            },
            rotation: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'Rotation around X axis in degrees' },
                    y: { type: 'number', description: 'Rotation around Y axis in degrees' },
                    z: { type: 'number', description: 'Rotation around Z axis in degrees' },
                },
                description: 'Optional rotation of the object in degrees. Default: no rotation',
            },
            checkGround: {
                type: 'boolean',
                description: 'Whether to verify the object would be supported by ground. Default: true',
                default: true,
            },
            filterInstances: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of instance paths to ignore in collision check. Useful for ignoring spawn points or trigger volumes.',
            },
        },
        required: ['position', 'size'],
    },
};
export const multiRaycastTool = {
    name: 'multi_raycast',
    description: 'Perform multiple raycasts in a single call for efficiency. Returns an array of results corresponding to each input ray. Limited to 50 rays per call to prevent performance issues. Ideal for scanning patterns or parallel ground checks.',
    inputSchema: {
        type: 'object',
        properties: {
            rays: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        origin: {
                            type: 'object',
                            properties: {
                                x: { type: 'number' },
                                y: { type: 'number' },
                                z: { type: 'number' },
                            },
                            required: ['x', 'y', 'z'],
                        },
                        direction: {
                            type: 'object',
                            properties: {
                                x: { type: 'number' },
                                y: { type: 'number' },
                                z: { type: 'number' },
                            },
                            required: ['x', 'y', 'z'],
                        },
                    },
                    required: ['origin', 'direction'],
                },
                description: 'Array of rays to cast. Each ray has an origin and direction. Maximum 50 rays per call.',
                maxItems: 50,
            },
            filterType: {
                type: 'string',
                enum: ['Exclude', 'Include'],
                description: 'Filter type for all raycasts. Default: "Exclude"',
                default: 'Exclude',
            },
            filterInstances: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of instance paths to filter for all rays',
            },
            ignoreWater: {
                type: 'boolean',
                description: 'Whether to ignore Terrain water. Default: false',
                default: false,
            },
        },
        required: ['rays'],
    },
};
export const scanAreaTool = {
    name: 'scan_area',
    description: 'Generate a heightmap by scanning an area with downward raycasts. Returns a grid of ground positions with heights, materials, and hit instances. Useful for terrain analysis, level overview, and procedural placement. Limited to 500 raycasts.',
    inputSchema: {
        type: 'object',
        properties: {
            center: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'X coordinate of scan center' },
                    y: {
                        type: 'number',
                        description: 'Y coordinate (height to cast rays from)',
                    },
                    z: { type: 'number', description: 'Z coordinate of scan center' },
                },
                required: ['x', 'y', 'z'],
                description: 'Center point of the scan area',
            },
            size: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'Width of scan area in studs' },
                    z: { type: 'number', description: 'Depth of scan area in studs' },
                },
                required: ['x', 'z'],
                description: 'Size of the area to scan (X and Z dimensions)',
            },
            resolution: {
                type: 'number',
                description: 'Distance between scan points in studs. Lower = more detail but more raycasts. Default: 4',
                default: 4,
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of scan points to return. Default: 500. Actual scans limited to 500.',
                default: 500,
            },
            filterInstances: {
                type: 'array',
                items: { type: 'string' },
                description: 'Instance paths to ignore when scanning',
            },
        },
        required: ['center', 'size'],
    },
};
export const findFlatAreasTool = {
    name: 'find_flat_areas',
    description: 'Search for flat areas in the workspace suitable for building or object placement. Analyzes terrain slope and finds regions meeting size and slope criteria. Returns candidate areas with their center positions and dimensions. Limited to 500 raycasts.',
    inputSchema: {
        type: 'object',
        properties: {
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
                required: ['min', 'max'],
                description: 'Bounding box defining the search area',
            },
            minSize: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'Minimum width of flat area' },
                    z: { type: 'number', description: 'Minimum depth of flat area' },
                },
                required: ['x', 'z'],
                description: 'Minimum size of the flat area required',
            },
            maxSlope: {
                type: 'number',
                description: 'Maximum allowed slope in degrees. 0 = perfectly flat. Default: 10',
                default: 10,
            },
            scanHeight: {
                type: 'number',
                description: 'Height to cast rays from (above the max Y of search area). Default: 100 studs above searchArea.max.y',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of flat areas to return. Default: 10',
                default: 10,
            },
        },
        required: ['searchArea', 'minSize'],
    },
};
export const findSpawnPositionsTool = {
    name: 'find_spawn_positions',
    description: 'Find optimal positions for spawning players or objects. Evaluates positions based on clearance, spacing from other spawns, and optional preferences like outdoor areas. Returns ranked spawn positions with scores. Limited to 1000 raycasts.',
    inputSchema: {
        type: 'object',
        properties: {
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
                required: ['min', 'max'],
                description: 'Area to search for spawn positions',
            },
            spawnSize: {
                type: 'object',
                properties: {
                    x: { type: 'number', description: 'Width needed for spawn' },
                    y: { type: 'number', description: 'Height needed for spawn' },
                    z: { type: 'number', description: 'Depth needed for spawn' },
                },
                description: 'Size of the spawning entity (e.g., player capsule). Default: { x: 4, y: 5, z: 4 }',
            },
            minSpacing: {
                type: 'number',
                description: 'Minimum distance between spawn positions. Default: 10 studs',
                default: 10,
            },
            avoidInstances: {
                type: 'array',
                items: { type: 'string' },
                description: 'Instance paths to avoid when finding spawn positions (hazards, restricted areas)',
            },
            preferOutdoor: {
                type: 'boolean',
                description: 'Prefer positions with open sky above. Uses upward raycast check. Default: false',
                default: false,
            },
            count: {
                type: 'number',
                description: 'Number of spawn positions to find. Default: 10',
                default: 10,
            },
        },
        required: ['searchArea'],
    },
};
export const analyzeWalkableAreaTool = {
    name: 'analyze_walkable_area',
    description: 'Analyze an area to determine walkable surfaces for characters. Returns a grid of walkability data including height, slope, and whether each point is reachable. Useful for pathfinding preparation and level validation. Limited to 1000 raycasts.',
    inputSchema: {
        type: 'object',
        properties: {
            area: {
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
                required: ['min', 'max'],
                description: 'Bounding box of the area to analyze',
            },
            characterHeight: {
                type: 'number',
                description: 'Height of the character for clearance checks. Default: 5 studs',
                default: 5,
            },
            maxStepHeight: {
                type: 'number',
                description: 'Maximum height difference a character can step up. Default: 2 studs',
                default: 2,
            },
            maxSlope: {
                type: 'number',
                description: 'Maximum walkable slope in degrees. Default: 45 degrees',
                default: 45,
            },
            resolution: {
                type: 'number',
                description: 'Grid resolution in studs. Lower = more detail. Default: 4',
                default: 4,
            },
        },
        required: ['area'],
    },
};
export const raycastTools = [
    raycastTool,
    findGroundTool,
    checkPlacementTool,
    multiRaycastTool,
    scanAreaTool,
    findFlatAreasTool,
    findSpawnPositionsTool,
    analyzeWalkableAreaTool,
];
//# sourceMappingURL=raycast-tools.js.map