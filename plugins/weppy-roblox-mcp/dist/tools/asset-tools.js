export const insertModelTool = {
    name: 'insert_model',
    description: 'Insert a model from the Roblox catalog using its asset ID. The model will be loaded via InsertService and parented to the specified location. Returns the path to the inserted model.',
    inputSchema: {
        type: 'object',
        properties: {
            assetId: {
                type: 'number',
                description: 'The asset ID of the model to insert (e.g., 1234567). You can find asset IDs in the Roblox catalog or Creator Store.',
            },
            parentPath: {
                type: 'string',
                description: 'Optional parent path where the model will be inserted. Defaults to game.Workspace if not provided.',
                default: 'game.Workspace',
            },
        },
        required: ['assetId'],
    },
};
export const getAssetInfoTool = {
    name: 'get_asset_info',
    description: 'Get detailed information about a Roblox asset using MarketplaceService:GetProductInfo(). Returns asset name, description, creator, price, type, and other metadata. Useful for verifying assets before insertion.',
    inputSchema: {
        type: 'object',
        properties: {
            assetId: {
                type: 'number',
                description: 'The asset ID to retrieve information for (e.g., 1234567)',
            },
        },
        required: ['assetId'],
    },
};
export const searchCreatorStoreTool = {
    name: 'search_creator_store',
    description: 'Search the Roblox Creator Store for free models using InsertService:GetFreeModels(). Returns a list of matching assets with their IDs, names, and creator info. Use the returned assetId with insert_model to add to the game.',
    inputSchema: {
        type: 'object',
        properties: {
            query: {
                type: 'string',
                description: 'Search query (e.g., "monster", "sword", "tree", "house")',
            },
            limit: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 10',
                default: 10,
            },
        },
        required: ['query'],
    },
};
export const searchAndInsertModelTool = {
    name: 'search_and_insert_model',
    description: 'Search for free models by keyword and automatically insert the first matching result into the game. This is the easiest way to add assets - just describe what you want (e.g., "monster", "tree", "car") and it will be added to the workspace.',
    inputSchema: {
        type: 'object',
        properties: {
            query: {
                type: 'string',
                description: 'Search keyword describing the model you want (e.g., "monster", "zombie", "tree", "sword", "house")',
            },
            parentPath: {
                type: 'string',
                description: 'Optional parent path where the model will be inserted. Defaults to game.Workspace if not provided.',
                default: 'game.Workspace',
            },
        },
        required: ['query'],
    },
};
export const insertFreeModelTool = {
    name: 'insert_free_model',
    description: 'Insert a free model from the Roblox catalog. This is a convenience tool that wraps insert_model and verifies the asset is free before insertion. Returns the path to the inserted model.',
    inputSchema: {
        type: 'object',
        properties: {
            assetId: {
                type: 'number',
                description: 'The asset ID of the free model to insert (e.g., 1234567). Must be a free asset.',
            },
            parentPath: {
                type: 'string',
                description: 'Optional parent path where the model will be inserted. Defaults to game.Workspace if not provided.',
                default: 'game.Workspace',
            },
        },
        required: ['assetId'],
    },
};
export const insertPackageTool = {
    name: 'insert_package',
    description: 'Insert a package from the Roblox catalog using InsertService:LoadPackageAsset(). Packages are reusable, updateable collections of instances. Returns the path to the inserted package.',
    inputSchema: {
        type: 'object',
        properties: {
            assetId: {
                type: 'number',
                description: 'The asset ID of the package to insert (e.g., 1234567). Must be a package asset.',
            },
            parentPath: {
                type: 'string',
                description: 'Optional parent path where the package will be inserted. Defaults to game.Workspace if not provided.',
                default: 'game.Workspace',
            },
        },
        required: ['assetId'],
    },
};
export const exportSelectionTool = {
    name: 'export_selection',
    description: 'Export the currently selected instances in Roblox Studio. Returns detailed information about all selected instances including their properties, children, and hierarchy. Useful for analyzing or backing up selections.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const assetTools = [
    insertModelTool,
    getAssetInfoTool,
    searchCreatorStoreTool,
    searchAndInsertModelTool,
    insertFreeModelTool,
    insertPackageTool,
    exportSelectionTool,
];
//# sourceMappingURL=asset-tools.js.map