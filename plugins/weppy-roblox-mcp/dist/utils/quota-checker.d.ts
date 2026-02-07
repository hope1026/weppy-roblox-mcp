export interface QuotaCache {
    tier: 'basic' | 'pro';
    used: number;
    limit: number;
    remaining: number;
    resetIn: number;
    timestamp: number;
}
export interface QuotaCheckResult {
    allowed: boolean;
    tier: 'basic' | 'pro';
    remaining?: number;
    error?: string;
}
export interface QuotaStatus {
    tier: 'basic' | 'pro';
    used: number;
    limit: number;
    remaining: number;
    resetIn: number;
}
export declare function getToolTier(action: string): 'basic' | 'pro';
export declare function isProTool(action: string): boolean;
export declare function isBasicTool(action: string): boolean;
export declare function updateQuotaCache(status: QuotaStatus): void;
export declare function getCachedQuota(): QuotaCache | null;
export declare function checkQuota(action: string): QuotaCheckResult;
export declare function clearQuotaCache(): void;
export declare function getBasicTools(): Set<string>;
export declare function getToolCounts(): {
    basic: number;
    pro: number;
};
declare const _default: {
    getToolTier: typeof getToolTier;
    isProTool: typeof isProTool;
    isBasicTool: typeof isBasicTool;
    updateQuotaCache: typeof updateQuotaCache;
    getCachedQuota: typeof getCachedQuota;
    checkQuota: typeof checkQuota;
    clearQuotaCache: typeof clearQuotaCache;
    getBasicTools: typeof getBasicTools;
    getToolCounts: typeof getToolCounts;
};
export default _default;
//# sourceMappingURL=quota-checker.d.ts.map