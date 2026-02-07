export interface StudioStatus {
    status: string;
    connectedClients: number;
    queuedCommands: number;
    uptime: number;
    version: string;
    isClientMode: boolean;
    pid: number;
    sessionId: string;
    sseClients?: number;
    pollingClients?: number;
    pluginClients?: Array<{
        clientId: string;
        projectName?: string;
        lastSeen: number;
    }>;
}
export declare function checkStudioConnection(): Promise<{
    serverOnline: boolean;
    pluginConnected: boolean;
    status: StudioStatus | null;
}>;
export declare function waitForStudioConnection(timeoutMs?: number): Promise<boolean>;
export declare function getConnectionStatusMessage(): Promise<string>;
export declare function isStudioConnected(): boolean;
export declare function isProTier(): boolean;
export declare function getBridgeUrl(): string;
//# sourceMappingURL=studio-connection.d.ts.map