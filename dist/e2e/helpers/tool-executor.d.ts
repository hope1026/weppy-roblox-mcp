export interface ToolResult<T = unknown> {
    requestId: string;
    success: boolean;
    data?: T;
    error?: string;
}
export declare function executeTool<T = unknown>(action: string, params?: Record<string, unknown>, timeoutMs?: number): Promise<ToolResult<T>>;
export declare function executeToolSuccess<T = unknown>(action: string, params?: Record<string, unknown>, timeoutMs?: number): Promise<T>;
export declare function executeToolFailure(action: string, params?: Record<string, unknown>, timeoutMs?: number): Promise<string>;
export declare function executeToolWithRetry<T = unknown>(action: string, params?: Record<string, unknown>, options?: {
    maxRetries?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
    timeoutMs?: number;
}): Promise<ToolResult<T>>;
//# sourceMappingURL=tool-executor.d.ts.map