import type { Tool } from '@modelcontextprotocol/sdk/types.js';
interface InstanceNode {
    name: string;
    className: string;
    path: string;
    children: InstanceNode[];
}
interface WorkspaceTree {
    syncedAt: string;
    instanceCount: number;
    tree: InstanceNode;
}
interface ChangeRecord {
    type: 'added' | 'removed' | 'modified';
    path: string;
    className: string;
    timestamp: string;
}
interface ChangesLog {
    lastUpdated: string;
    changes: ChangeRecord[];
}
export interface AssetDetails {
    boundingBox: {
        x: number;
        y: number;
        z: number;
    };
    partCount: number;
    meshPartCount: number;
    dominantColors: string[];
    materials: string[];
    hasScripts: boolean;
    childClasses?: Array<{
        className: string;
        count: number;
    }>;
    totalDescendants: number;
    estimatedStyle?: 'lowpoly' | 'detailed' | 'complex' | 'simple';
}
export interface AssetRecord {
    id: string;
    assetId: number;
    name: string;
    type: 'Model' | 'Package' | 'FreeModel';
    path: string;
    source: 'insert_model' | 'insert_free_model' | 'insert_package' | 'search_and_insert_model';
    query?: string;
    insertedAt: string;
    creatorName?: string;
    details?: AssetDetails;
}
interface AssetsLog {
    version: 1;
    lastUpdated: string;
    assets: AssetRecord[];
}
export interface StyleGuide {
    version: 1;
    lastUpdated: string;
    mode: 'primitives' | 'assets' | 'mixed';
    style?: 'lowpoly' | 'detailed' | 'cartoon' | 'realistic' | 'minimal';
    colorPalette?: string[];
    preferredMaterials?: string[];
    scaleReference?: {
        unit: number;
        characterHeight: number;
    };
    notes?: string;
}
export declare const syncWorkspaceStateTool: Tool;
export declare const getWorkspaceSnapshotTool: Tool;
export declare const getRecentChangesTool: Tool;
export declare const captureScreenshotTool: Tool;
export declare const getStateDirectoryInfoTool: Tool;
export declare function handleSyncWorkspaceState(data: {
    tree?: InstanceNode;
    changes?: ChangeRecord[];
    metadata?: Record<string, unknown>;
    timestamp?: number;
} | null | undefined): {
    success: boolean;
    message: string;
    files: string[];
    error?: string;
};
export declare function handleGetWorkspaceSnapshot(): WorkspaceTree | {
    error: string;
};
export declare function handleGetRecentChanges(params: {
    limit?: number;
}): ChangesLog | {
    error: string;
};
export declare function handleCaptureScreenshot(params: {
    screenshotData: string;
    filename?: string;
}): {
    success: true;
    path: string;
    filename: string;
};
export declare function handleGetStateDirectoryInfo(): {
    path: string;
    exists: boolean;
    files?: string[];
    screenshotCount?: number;
};
export declare const getInsertedAssetsTool: Tool;
export declare const removeAssetRecordTool: Tool;
export declare const setStyleGuideTool: Tool;
export declare const getStyleGuideTool: Tool;
export declare function recordInsertedAsset(params: {
    assetId: number;
    name: string;
    type: 'Model' | 'Package' | 'FreeModel';
    path: string;
    source: AssetRecord['source'];
    query?: string;
    creatorName?: string;
    details?: AssetDetails;
}): AssetRecord;
export declare function handleGetInsertedAssets(params: {
    limit?: number;
    source?: AssetRecord['source'];
}): AssetsLog | {
    error: string;
};
export declare function handleRemoveAssetRecord(params: {
    id?: string;
    path?: string;
}): {
    success: boolean;
    removed?: AssetRecord;
    error?: string;
};
export declare function handleSetStyleGuide(params: {
    mode: 'primitives' | 'assets' | 'mixed';
    style?: 'lowpoly' | 'detailed' | 'cartoon' | 'realistic' | 'minimal';
    colorPalette?: string[];
    preferredMaterials?: string[];
    scaleReference?: {
        unit: number;
        characterHeight: number;
    };
    notes?: string;
}): StyleGuide;
export declare function handleGetStyleGuide(): StyleGuide | {
    error: string;
};
export declare const stateTools: Tool[];
export {};
//# sourceMappingURL=state-tools.d.ts.map