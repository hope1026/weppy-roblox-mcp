import type { ServerConfig, Result } from './types/index.js';
export declare class HTTPBridge {
    private app;
    private server;
    private config;
    private commandQueue;
    private pendingCommands;
    private sseClients;
    private startTime;
    private requestCounts;
    private cachedSelection;
    private isClientMode;
    private baseUrl;
    constructor(config: ServerConfig);
    private setupMiddleware;
    private checkRateLimit;
    private setupRoutes;
    private handleSSEConnection;
    private sendSSEEvent;
    private handleCommandsPoll;
    private broadcastCommand;
    private handleResult;
    private handleSelectionUpdate;
    private handleExecute;
    private executeCommandLocally;
    private handleCachedSelectionRequest;
    private handleStatus;
    getCachedSelection(maxAge?: number): {
        selection: Array<{
            name: string;
            className: string;
            path: string;
        }>;
        count: number;
        timestamp: number;
    } | null;
    private executeCommandViaHttp;
    executeCommand(action: string, params: Record<string, unknown>): Promise<Result>;
    private checkExistingServer;
    start(): Promise<void>;
    stop(): Promise<void>;
    getIsClientMode(): boolean;
}
export default HTTPBridge;
//# sourceMappingURL=http-bridge.d.ts.map