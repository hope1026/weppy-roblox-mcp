export interface Command {
    event: 'command';
    id: string;
    data: {
        action: string;
        requestId: string;
        params: Record<string, unknown>;
    };
}
export interface Result {
    requestId: string;
    success: boolean;
    data?: unknown;
    error?: string;
    executionTime?: number;
}
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
export interface Color3RGB {
    r: number;
    g: number;
    b: number;
}
export interface Color3Normalized {
    r: number;
    g: number;
    b: number;
}
export interface UDim2 {
    xScale: number;
    xOffset: number;
    yScale: number;
    yOffset: number;
}
export type CFrameArray = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
export interface ServerConfig {
    httpPort: number;
    httpHost: string;
    logLevel: LogLevel;
    requestTimeout: number;
    maxRequestsPerMinute: number;
}
export declare enum LogLevel {
    DEBUG = "debug",
    INFO = "info",
    WARN = "warn",
    ERROR = "error"
}
export interface QueuedCommand {
    requestId: string;
    action: string;
    params: Record<string, unknown>;
    timestamp: number;
    resolve: (result: Result) => void;
    reject: (error: Error) => void;
    timeoutId: NodeJS.Timeout;
}
export interface ToolExecutionResult {
    success: boolean;
    data?: unknown;
    error?: string;
}
export type SSEEvent = CommandEvent | PingEvent | ErrorEvent;
export interface CommandEvent {
    event: 'command';
    id: string;
    data: {
        action: string;
        requestId: string;
        params: Record<string, unknown>;
    };
}
export interface PingEvent {
    event: 'ping';
    id: string;
    data: {
        timestamp: number;
    };
}
export interface ErrorEvent {
    event: 'error';
    id: string;
    data: {
        message: string;
    };
}
export interface BridgeStatus {
    status: 'online' | 'offline';
    connectedClients: number;
    queuedCommands: number;
    uptime: number;
    version: string;
    isClientMode?: boolean;
    pid?: number;
    sessionId?: string;
}
export interface PluginClientInfo {
    clientId: string;
    projectName?: string | undefined;
    placeName?: string | undefined;
    placeId?: number | undefined;
    connectedAt: number;
    lastSeen: number;
    commandsProcessed: number;
    connectionType: 'polling';
}
export interface MCPInstanceInfo {
    instanceId: string;
    pid: number;
    connectedAt: number;
    isServer: boolean;
    projectPath?: string | undefined;
}
export interface ConnectionStatus {
    server: {
        pid: number;
        uptime: number;
        isClientMode: boolean;
        baseUrl: string;
        sessionId: string;
    };
    plugins: PluginClientInfo[];
    mcpInstances: MCPInstanceInfo[];
    totalCommands: number;
    totalCommandsProcessed: number;
}
//# sourceMappingURL=index.d.ts.map