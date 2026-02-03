export declare function trackTestInstance(path: string): void;
export declare function untrackTestInstance(path: string): void;
export declare function getTrackedInstances(): string[];
export declare function clearTracking(): void;
export declare function deleteTestInstance(path: string): Promise<boolean>;
export declare function cleanupTrackedInstances(): Promise<number>;
export declare function cleanupAllTestInstances(): Promise<number>;
export declare function clearVisualizations(): Promise<boolean>;
export declare function createCleanupFn(options?: {
    clearVisualization?: boolean;
    timeout?: number;
}): () => Promise<void>;
//# sourceMappingURL=cleanup.d.ts.map