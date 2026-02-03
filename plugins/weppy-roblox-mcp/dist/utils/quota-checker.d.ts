export interface QuotaCache {
    tier: 'free' | 'pro';
    used: number;
    limit: number;
    remaining: number;
    resetIn: number;
    timestamp: number;
}
export interface QuotaCheckResult {
    allowed: boolean;
    tier: 'free' | 'pro';
    remaining?: number;
    error?: string;
}
export interface QuotaStatus {
    tier: 'free' | 'pro';
    used: number;
    limit: number;
    remaining: number;
    resetIn: number;
}
export declare function getToolTier(action: string): 'free' | 'pro';
export declare function isProTool(action: string): boolean;
export declare function isFreeTool(action: string): boolean;
export declare function updateQuotaCache(status: QuotaStatus): void;
export declare function getCachedQuota(): QuotaCache | null;
export declare function checkQuota(action: string): QuotaCheckResult;
export declare function clearQuotaCache(): void;
export declare function getFreeTools(): Set<string>;
export declare function getToolCounts(): {
    free: number;
    pro: number;
};
declare const _default: {
    getToolTier: typeof getToolTier;
    isProTool: typeof isProTool;
    isFreeTool: typeof isFreeTool;
    updateQuotaCache: typeof updateQuotaCache;
    getCachedQuota: typeof getCachedQuota;
    checkQuota: typeof checkQuota;
    clearQuotaCache: typeof clearQuotaCache;
    getFreeTools: typeof getFreeTools;
    getToolCounts: typeof getToolCounts;
};
export default _default;
//# sourceMappingURL=quota-checker.d.ts.map