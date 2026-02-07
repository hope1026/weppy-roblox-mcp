export interface ToolHistoryEntry {
    id: string;
    sessionId: string;
    timestamp: string;
    sequenceNumber: number;
    toolName: string;
    category: string;
    tier: 'basic' | 'pro';
    parameters: Record<string, unknown>;
    result: unknown;
    executionTimeMs: number;
    clientId?: string | undefined;
}
export interface ToolStats {
    toolName: string;
    category: string;
    tier: 'basic' | 'pro';
    totalCalls: number;
    successCount: number;
    failureCount: number;
    totalExecutionTimeMs: number;
    avgExecutionTimeMs: number;
    firstUsed: string;
    lastUsed: string;
}
export interface ToolStatistics {
    version: number;
    lastUpdated: string;
    totalSessions: number;
    totalCalls: number;
    totalSuccessCalls: number;
    totalFailedCalls: number;
    tools: Record<string, ToolStats>;
    tierSummary: {
        basic: {
            totalCalls: number;
            successCount: number;
            failureCount: number;
        };
        pro: {
            totalCalls: number;
            successCount: number;
            failureCount: number;
        };
    };
    categorySummary: Record<string, {
        totalCalls: number;
        successCount: number;
        failureCount: number;
    }>;
}
export interface ToolFailureLog {
    id: string;
    sessionId: string;
    timestamp: string;
    toolName: string;
    category: string;
    tier: 'basic' | 'pro';
    parameters: Record<string, unknown>;
    errorMessage: string;
    errorCode?: string | undefined;
    executionTimeMs?: number | undefined;
}
export interface HistoryConfig {
    enableHistory: boolean;
    enableStatistics: boolean;
    dataDir: string;
    maxHistoryFileSize?: number;
    maxHistoryFiles?: number;
}
export interface SessionMetadata {
    sessionId: string;
    startTime: string;
    endTime?: string;
    totalCommands: number;
    pid: number;
    version: string;
}
declare const _default: {};
export default _default;
//# sourceMappingURL=history.d.ts.map