import type { ServerConfig } from './types/index.js';
export declare class RobloxMCPServer {
    private server;
    private httpBridge;
    private config;
    constructor(config: ServerConfig);
    private setupHandlers;
    private executeTool;
    start(): Promise<void>;
    stop(): Promise<void>;
}
export default RobloxMCPServer;
//# sourceMappingURL=server.d.ts.map