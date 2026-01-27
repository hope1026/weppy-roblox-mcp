import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../../..');
const STATE_DIR = path.join(PROJECT_ROOT, 'sample-project', '.roblox-state');
const SCREENSHOTS_DIR = path.join(STATE_DIR, 'screenshots');
function ensureStateDirectories() {
    if (!fs.existsSync(STATE_DIR)) {
        fs.mkdirSync(STATE_DIR, { recursive: true });
    }
    if (!fs.existsSync(SCREENSHOTS_DIR)) {
        fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
    }
}
function writeJSONFile(filePath, data) {
    ensureStateDirectories();
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}
function readJSONFile(filePath, defaultValue) {
    try {
        if (!fs.existsSync(filePath)) {
            return defaultValue;
        }
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    }
    catch (error) {
        console.error(`Error reading ${filePath}:`, error);
        return defaultValue;
    }
}
function countInstancesByType(tree) {
    let total = 0;
    let scripts = 0;
    let parts = 0;
    let models = 0;
    if (!tree) {
        return { total, scripts, parts, models };
    }
    function traverse(node) {
        total++;
        if (node.className === 'Script' || node.className === 'LocalScript' || node.className === 'ModuleScript') {
            scripts++;
        }
        else if (node.className === 'Part' || node.className === 'MeshPart') {
            parts++;
        }
        else if (node.className === 'Model') {
            models++;
        }
        if (node.children && Array.isArray(node.children)) {
            for (const child of node.children) {
                traverse(child);
            }
        }
    }
    traverse(tree);
    return { total, scripts, parts, models };
}
export const syncWorkspaceStateTool = {
    name: 'sync_workspace_state',
    description: 'Fetch the current Workspace state from Roblox Studio and save it to the filesystem. Creates three files: workspace-tree.json (instance hierarchy), changes.json (change history), and metadata.json (sync statistics). This allows the AI to inspect the game state without querying the plugin repeatedly.',
    inputSchema: {
        type: 'object',
        properties: {
            includeMetadata: {
                type: 'boolean',
                description: 'Whether to include metadata (instance counts, timestamps). Default: true',
            },
        },
    },
};
export const getWorkspaceSnapshotTool = {
    name: 'get_workspace_snapshot',
    description: 'Read the most recently saved Workspace snapshot from disk. Returns the full instance tree structure, synced timestamp, and instance count. If no snapshot exists, returns an empty state with an error message.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const getRecentChangesTool = {
    name: 'get_recent_changes',
    description: 'Get recent changes to the Workspace from the changes log. Returns an array of change records (added, removed, modified) with paths, class names, and timestamps. Useful for understanding what has changed since the last sync.',
    inputSchema: {
        type: 'object',
        properties: {
            limit: {
                type: 'number',
                description: 'Maximum number of changes to return. Default: 20. Set to 0 for all changes.',
            },
        },
    },
};
export const captureScreenshotTool = {
    name: 'capture_screenshot',
    description: 'Save a screenshot from Roblox Studio to the filesystem. The screenshot should be provided as a Base64-encoded PNG image. Screenshots are saved to sample-project/.roblox-state/screenshots/ with timestamps.',
    inputSchema: {
        type: 'object',
        properties: {
            screenshotData: {
                type: 'string',
                description: 'Base64-encoded PNG image data from the Roblox plugin viewport',
            },
            filename: {
                type: 'string',
                description: 'Optional custom filename (without extension). If not provided, uses "screenshot-{timestamp}.png"',
            },
        },
        required: ['screenshotData'],
    },
};
export const getStateDirectoryInfoTool = {
    name: 'get_state_directory_info',
    description: 'Get information about the state directory, including the full path, existing files, and directory size. Useful for verifying that state is being saved correctly.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export function handleSyncWorkspaceState(data) {
    if (!data) {
        return {
            success: false,
            message: 'No data received from plugin',
            files: [],
            error: 'sync_workspace_state received null or undefined data',
        };
    }
    if (!data.tree) {
        return {
            success: false,
            message: 'No tree data in response',
            files: [],
            error: 'sync_workspace_state response missing tree property',
        };
    }
    ensureStateDirectories();
    const timestamp = new Date().toISOString();
    const counts = countInstancesByType(data.tree);
    const workspaceTree = {
        syncedAt: timestamp,
        instanceCount: counts.total,
        tree: data.tree,
    };
    const treeFilePath = path.join(STATE_DIR, 'workspace-tree.json');
    writeJSONFile(treeFilePath, workspaceTree);
    const changesFilePath = path.join(STATE_DIR, 'changes.json');
    const existingChanges = readJSONFile(changesFilePath, {
        lastUpdated: timestamp,
        changes: [],
    });
    if (data.changes && data.changes.length > 0) {
        existingChanges.changes = [...data.changes, ...existingChanges.changes];
        existingChanges.lastUpdated = timestamp;
    }
    writeJSONFile(changesFilePath, existingChanges);
    const metadata = {
        lastSync: timestamp,
        instanceCount: counts.total,
        scriptCount: counts.scripts,
        partCount: counts.parts,
        modelCount: counts.models,
    };
    const metadataFilePath = path.join(STATE_DIR, 'metadata.json');
    writeJSONFile(metadataFilePath, metadata);
    return {
        success: true,
        message: `Workspace state synced successfully at ${timestamp}`,
        files: ['workspace-tree.json', 'changes.json', 'metadata.json'],
    };
}
export function handleGetWorkspaceSnapshot() {
    const treeFilePath = path.join(STATE_DIR, 'workspace-tree.json');
    if (!fs.existsSync(treeFilePath)) {
        return {
            error: 'No workspace snapshot found. Run sync_workspace_state first to capture the current state.',
        };
    }
    return readJSONFile(treeFilePath, {
        syncedAt: '',
        instanceCount: 0,
        tree: { name: '', className: '', path: '', children: [] },
    });
}
export function handleGetRecentChanges(params) {
    const changesFilePath = path.join(STATE_DIR, 'changes.json');
    if (!fs.existsSync(changesFilePath)) {
        return {
            error: 'No changes log found. Changes are recorded when sync_workspace_state is called.',
        };
    }
    const changesLog = readJSONFile(changesFilePath, {
        lastUpdated: '',
        changes: [],
    });
    const limit = params.limit ?? 20;
    if (limit > 0 && changesLog.changes.length > limit) {
        return {
            lastUpdated: changesLog.lastUpdated,
            changes: changesLog.changes.slice(0, limit),
        };
    }
    return changesLog;
}
export function handleCaptureScreenshot(params) {
    ensureStateDirectories();
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = params.filename
        ? `${params.filename}.png`
        : `screenshot-${timestamp}.png`;
    const filePath = path.join(SCREENSHOTS_DIR, filename);
    const buffer = Buffer.from(params.screenshotData, 'base64');
    fs.writeFileSync(filePath, buffer);
    return {
        success: true,
        path: filePath,
        filename,
    };
}
export function handleGetStateDirectoryInfo() {
    if (!fs.existsSync(STATE_DIR)) {
        return {
            path: STATE_DIR,
            exists: false,
        };
    }
    const files = fs.readdirSync(STATE_DIR).filter((f) => f.endsWith('.json'));
    let screenshotCount = 0;
    if (fs.existsSync(SCREENSHOTS_DIR)) {
        screenshotCount = fs.readdirSync(SCREENSHOTS_DIR).filter((f) => f.endsWith('.png')).length;
    }
    return {
        path: STATE_DIR,
        exists: true,
        files,
        screenshotCount,
    };
}
export const getInsertedAssetsTool = {
    name: 'get_inserted_assets',
    description: 'Get the list of assets that have been inserted via MCP tools (insert_model, insert_free_model, insert_package, search_and_insert_model). Returns asset IDs, names, paths, and insertion timestamps.',
    inputSchema: {
        type: 'object',
        properties: {
            limit: {
                type: 'number',
                description: 'Maximum number of assets to return. Default: 50. Set to 0 for all assets.',
            },
            source: {
                type: 'string',
                enum: ['insert_model', 'insert_free_model', 'insert_package', 'search_and_insert_model'],
                description: 'Filter by insertion source. If not provided, returns all assets.',
            },
        },
    },
};
export const removeAssetRecordTool = {
    name: 'remove_asset_record',
    description: 'Remove an asset record from the tracking log. This does NOT delete the actual instance in Roblox - it only removes the record from assets.json. Use this when an asset has been manually deleted or is no longer relevant.',
    inputSchema: {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                description: 'The unique ID of the asset record to remove.',
            },
            path: {
                type: 'string',
                description: 'Alternatively, remove by instance path (e.g., "game.Workspace.MonsterModel").',
            },
        },
    },
};
export const setStyleGuideTool = {
    name: 'set_style_guide',
    description: 'Set the visual style guide for the project. This helps Claude make consistent decisions about asset selection and visual design. Choose between primitives-only (Option C), assets with style matching (Option B), or mixed approach.',
    inputSchema: {
        type: 'object',
        properties: {
            mode: {
                type: 'string',
                enum: ['primitives', 'assets', 'mixed'],
                description: 'Build mode: "primitives" uses only Parts with colors/materials, "assets" uses Creator Store assets with style matching, "mixed" combines both approaches.',
            },
            style: {
                type: 'string',
                enum: ['lowpoly', 'detailed', 'cartoon', 'realistic', 'minimal'],
                description: 'Visual style preference for assets. Used when mode is "assets" or "mixed".',
            },
            colorPalette: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of hex color codes to use (e.g., ["#FF5733", "#4A7C23"]). Helps maintain visual consistency.',
            },
            preferredMaterials: {
                type: 'array',
                items: { type: 'string' },
                description: 'Array of preferred Roblox materials (e.g., ["Plastic", "SmoothPlastic", "Wood"]).',
            },
            scaleReference: {
                type: 'object',
                properties: {
                    unit: { type: 'number', description: 'Studs per meter (default: 4)' },
                    characterHeight: { type: 'number', description: 'Expected character height in studs (default: 5)' },
                },
                description: 'Scale reference for consistent sizing.',
            },
            notes: {
                type: 'string',
                description: 'Additional notes about the desired visual style.',
            },
        },
        required: ['mode'],
    },
};
export const getStyleGuideTool = {
    name: 'get_style_guide',
    description: 'Get the current visual style guide for the project. Returns the mode, style preferences, color palette, and other visual guidelines that should be followed when building the map.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export function recordInsertedAsset(params) {
    ensureStateDirectories();
    const assetsFilePath = path.join(STATE_DIR, 'assets.json');
    const assetsLog = readJSONFile(assetsFilePath, {
        version: 1,
        lastUpdated: '',
        assets: [],
    });
    const timestamp = new Date().toISOString();
    const id = `asset-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newAsset = {
        id,
        assetId: params.assetId,
        name: params.name,
        type: params.type,
        path: params.path,
        source: params.source,
        insertedAt: timestamp,
    };
    if (params.query) {
        newAsset.query = params.query;
    }
    if (params.creatorName) {
        newAsset.creatorName = params.creatorName;
    }
    if (params.details) {
        newAsset.details = params.details;
    }
    assetsLog.assets.unshift(newAsset);
    assetsLog.lastUpdated = timestamp;
    writeJSONFile(assetsFilePath, assetsLog);
    return newAsset;
}
export function handleGetInsertedAssets(params) {
    const assetsFilePath = path.join(STATE_DIR, 'assets.json');
    if (!fs.existsSync(assetsFilePath)) {
        return {
            version: 1,
            lastUpdated: '',
            assets: [],
        };
    }
    const assetsLog = readJSONFile(assetsFilePath, {
        version: 1,
        lastUpdated: '',
        assets: [],
    });
    let filteredAssets = assetsLog.assets;
    if (params.source) {
        filteredAssets = filteredAssets.filter((a) => a.source === params.source);
    }
    const limit = params.limit ?? 50;
    if (limit > 0 && filteredAssets.length > limit) {
        filteredAssets = filteredAssets.slice(0, limit);
    }
    return {
        version: 1,
        lastUpdated: assetsLog.lastUpdated,
        assets: filteredAssets,
    };
}
export function handleRemoveAssetRecord(params) {
    if (!params.id && !params.path) {
        return {
            success: false,
            error: 'Either id or path must be provided',
        };
    }
    const assetsFilePath = path.join(STATE_DIR, 'assets.json');
    if (!fs.existsSync(assetsFilePath)) {
        return {
            success: false,
            error: 'No assets.json found. No assets have been recorded yet.',
        };
    }
    const assetsLog = readJSONFile(assetsFilePath, {
        version: 1,
        lastUpdated: '',
        assets: [],
    });
    const index = assetsLog.assets.findIndex((a) => params.id ? a.id === params.id : a.path === params.path);
    if (index === -1) {
        return {
            success: false,
            error: `Asset not found with ${params.id ? `id: ${params.id}` : `path: ${params.path}`}`,
        };
    }
    const [removed] = assetsLog.assets.splice(index, 1);
    assetsLog.lastUpdated = new Date().toISOString();
    writeJSONFile(assetsFilePath, assetsLog);
    if (!removed) {
        return {
            success: false,
            error: 'Failed to remove asset from list',
        };
    }
    return {
        success: true,
        removed,
    };
}
export function handleSetStyleGuide(params) {
    ensureStateDirectories();
    const styleGuideFilePath = path.join(STATE_DIR, 'style-guide.json');
    const timestamp = new Date().toISOString();
    const styleGuide = {
        version: 1,
        lastUpdated: timestamp,
        mode: params.mode,
    };
    if (params.style) {
        styleGuide.style = params.style;
    }
    if (params.colorPalette && params.colorPalette.length > 0) {
        styleGuide.colorPalette = params.colorPalette;
    }
    if (params.preferredMaterials && params.preferredMaterials.length > 0) {
        styleGuide.preferredMaterials = params.preferredMaterials;
    }
    if (params.scaleReference) {
        styleGuide.scaleReference = params.scaleReference;
    }
    if (params.notes) {
        styleGuide.notes = params.notes;
    }
    writeJSONFile(styleGuideFilePath, styleGuide);
    return styleGuide;
}
export function handleGetStyleGuide() {
    const styleGuideFilePath = path.join(STATE_DIR, 'style-guide.json');
    if (!fs.existsSync(styleGuideFilePath)) {
        return {
            version: 1,
            lastUpdated: '',
            mode: 'mixed',
            notes: 'No style guide set. Use set_style_guide to configure visual preferences.',
        };
    }
    return readJSONFile(styleGuideFilePath, {
        version: 1,
        lastUpdated: '',
        mode: 'mixed',
    });
}
export const stateTools = [
    syncWorkspaceStateTool,
    getWorkspaceSnapshotTool,
    getRecentChangesTool,
    captureScreenshotTool,
    getStateDirectoryInfoTool,
    getInsertedAssetsTool,
    removeAssetRecordTool,
    setStyleGuideTool,
    getStyleGuideTool,
];
//# sourceMappingURL=state-tools.js.map