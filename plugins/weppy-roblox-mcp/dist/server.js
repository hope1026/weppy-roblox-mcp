import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, } from '@modelcontextprotocol/sdk/types.js';
import { tools } from './tools/index.js';
import HTTPBridge from './http-bridge.js';
import Logger from './utils/logger.js';
import { handleGetWorkspaceSnapshot, handleGetRecentChanges, handleGetStateDirectoryInfo, handleSyncWorkspaceState, handleCaptureScreenshot, handleGetInsertedAssets, handleRemoveAssetRecord, handleSetStyleGuide, handleGetStyleGuide, recordInsertedAsset, } from './tools/state-tools.js';
export class RobloxMCPServer {
    server;
    httpBridge;
    config;
    constructor(config) {
        this.config = config;
        this.server = new Server({
            name: 'weppy-roblox-mcp',
            version: '0.1.0',
        }, {
            capabilities: {
                tools: {},
            },
        });
        this.httpBridge = new HTTPBridge(config);
        this.setupHandlers();
        Logger.info('MCP Server initialized', {
            name: 'weppy-roblox-mcp',
            version: '0.1.0',
            tools: tools.length,
        });
    }
    setupHandlers() {
        this.server.setRequestHandler(ListToolsRequestSchema, async () => {
            Logger.debug('Received tools/list request');
            return {
                tools,
            };
        });
        this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
            const { name, arguments: args } = request.params;
            Logger.info('Received tool call', {
                tool: name,
                args,
            });
            try {
                const result = await this.executeTool(name, args || {});
                if (!result.success) {
                    return {
                        content: [
                            {
                                type: 'text',
                                text: JSON.stringify({ success: false, error: result.error }, null, 2),
                            },
                        ],
                        isError: true,
                    };
                }
                const resultText = result.data !== undefined
                    ? JSON.stringify(result.data, null, 2)
                    : JSON.stringify({ success: true, message: 'Command executed' });
                return {
                    content: [
                        {
                            type: 'text',
                            text: resultText,
                        },
                    ],
                };
            }
            catch (error) {
                Logger.error('Tool execution failed', error);
                const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                return {
                    content: [
                        {
                            type: 'text',
                            text: `Error: ${errorMessage}`,
                        },
                    ],
                    isError: true,
                };
            }
        });
    }
    async executeTool(toolName, args) {
        const tool = tools.find((t) => t.name === toolName);
        if (!tool) {
            throw new Error(`Unknown tool: ${toolName}`);
        }
        Logger.debug('Executing tool', { toolName, args });
        try {
            if (toolName === 'get_workspace_snapshot') {
                const data = handleGetWorkspaceSnapshot();
                return { success: true, data };
            }
            if (toolName === 'get_recent_changes') {
                const data = handleGetRecentChanges(args);
                return { success: true, data };
            }
            if (toolName === 'get_state_directory_info') {
                const data = handleGetStateDirectoryInfo();
                return { success: true, data };
            }
            if (toolName === 'get_inserted_assets') {
                const data = handleGetInsertedAssets(args);
                return { success: true, data };
            }
            if (toolName === 'remove_asset_record') {
                const data = handleRemoveAssetRecord(args);
                return { success: true, data };
            }
            if (toolName === 'set_style_guide') {
                const data = handleSetStyleGuide(args);
                return { success: true, data };
            }
            if (toolName === 'get_style_guide') {
                const data = handleGetStyleGuide();
                return { success: true, data };
            }
            if (toolName === 'get_cached_selection') {
                const maxAge = args.maxAge;
                const cachedData = this.httpBridge.getCachedSelection(maxAge !== undefined ? maxAge : 30000);
                if (!cachedData) {
                    return {
                        success: true,
                        data: {
                            cached: false,
                            message: 'No cached selection data available. The plugin may not be connected or no selection changes have occurred yet.',
                        },
                    };
                }
                const age = Date.now() - cachedData.timestamp;
                return {
                    success: true,
                    data: {
                        cached: true,
                        selection: cachedData.selection,
                        count: cachedData.count,
                        timestamp: cachedData.timestamp,
                        age,
                    },
                };
            }
            if (toolName === 'sync_workspace_state') {
                const result = await this.httpBridge.executeCommand(toolName, args);
                Logger.debug('sync_workspace_state plugin result', {
                    success: result.success,
                    hasData: !!result.data,
                    dataKeys: result.data ? Object.keys(result.data) : [],
                });
                if (!result.success) {
                    throw new Error(result.error || 'Tool execution failed');
                }
                const saveResult = handleSyncWorkspaceState(result.data);
                Logger.debug('sync_workspace_state save result', saveResult);
                if (!saveResult.success) {
                    return {
                        success: false,
                        error: saveResult.error || saveResult.message,
                    };
                }
                return {
                    success: true,
                    data: saveResult,
                };
            }
            if (toolName === 'capture_screenshot') {
                const result = await this.httpBridge.executeCommand(toolName, args);
                if (!result.success) {
                    throw new Error(result.error || 'Tool execution failed');
                }
                const saveResult = handleCaptureScreenshot(result.data);
                return {
                    success: true,
                    data: saveResult,
                };
            }
            const assetInsertionTools = ['insert_model', 'insert_free_model', 'insert_package', 'search_and_insert_model'];
            if (assetInsertionTools.includes(toolName)) {
                const result = await this.httpBridge.executeCommand(toolName, args);
                if (!result.success) {
                    throw new Error(result.error || 'Tool execution failed');
                }
                const resultData = result.data;
                if (resultData && resultData.path) {
                    const assetType = toolName === 'insert_package' ? 'Package' :
                        toolName === 'insert_free_model' ? 'FreeModel' : 'Model';
                    const recordParams = {
                        assetId: resultData.assetId || args.assetId || 0,
                        name: resultData.name || 'Unknown',
                        type: assetType,
                        path: resultData.path,
                        source: toolName,
                    };
                    if (toolName === 'search_and_insert_model') {
                        const query = args.query;
                        if (query) {
                            recordParams.query = query;
                        }
                    }
                    if (resultData.creatorName) {
                        recordParams.creatorName = resultData.creatorName;
                    }
                    if (resultData.details) {
                        recordParams.details = resultData.details;
                    }
                    const assetRecord = recordInsertedAsset(recordParams);
                    Logger.info('Asset recorded', {
                        assetId: assetRecord.assetId,
                        name: assetRecord.name,
                        path: assetRecord.path,
                        source: assetRecord.source,
                    });
                    return {
                        success: true,
                        data: {
                            ...resultData,
                            assetRecord,
                        },
                    };
                }
                return {
                    success: true,
                    data: result.data,
                };
            }
            const result = await this.httpBridge.executeCommand(toolName, args);
            if (!result.success) {
                throw new Error(result.error || 'Tool execution failed');
            }
            return {
                success: true,
                data: result.data,
            };
        }
        catch (error) {
            Logger.error('Tool execution error', error);
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
    async start() {
        Logger.info('Starting Weppy Roblox MCP Server');
        await this.httpBridge.start();
        const transport = new StdioServerTransport();
        await this.server.connect(transport);
        Logger.info('MCP Server started successfully', {
            transport: 'stdio',
            httpBridge: `${this.config.httpHost}:${this.config.httpPort}`,
        });
    }
    async stop() {
        Logger.info('Stopping MCP Server');
        await this.httpBridge.stop();
        await this.server.close();
        Logger.info('MCP Server stopped');
    }
}
export default RobloxMCPServer;
//# sourceMappingURL=server.js.map