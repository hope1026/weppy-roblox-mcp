import type { ToolStatistics, ToolStats, HistoryConfig } from '../types/history.js';
export declare function getToolCategory(toolName: string): string;
export declare class ToolHistoryManager {
    private config;
    private sessionId;
    private sequenceNumber;
    private statistics;
    private historyDir;
    private statisticsDir;
    private historyFilePath;
    private statisticsFilePath;
    private failureLogPath;
    private initialized;
    private saveStatisticsDebounceTimer;
    private pendingStatisticsSave;
    constructor(config?: Partial<HistoryConfig>);
    initialize(sessionId: string): Promise<void>;
    private ensureDirectories;
    private loadStatistics;
    private saveStatistics;
    recordSuccess(toolName: string, parameters: Record<string, unknown>, result: unknown, executionTimeMs: number, clientId?: string): Promise<void>;
    recordFailure(toolName: string, parameters: Record<string, unknown>, errorMessage: string, executionTimeMs?: number, errorCode?: string): Promise<void>;
    private updateToolStats;
    getStatistics(): ToolStatistics;
    getTopTools(n?: number): ToolStats[];
    shutdown(): Promise<void>;
    isHistoryEnabled(): boolean;
    isStatisticsEnabled(): boolean;
    getHistoryDir(): string;
    getStatisticsDir(): string;
}
export declare function getHistoryManager(config?: Partial<HistoryConfig>): ToolHistoryManager;
export declare function resetHistoryManager(): void;
declare const _default: {
    ToolHistoryManager: typeof ToolHistoryManager;
    getHistoryManager: typeof getHistoryManager;
    resetHistoryManager: typeof resetHistoryManager;
    getToolCategory: typeof getToolCategory;
};
export default _default;
//# sourceMappingURL=tool-history.d.ts.map