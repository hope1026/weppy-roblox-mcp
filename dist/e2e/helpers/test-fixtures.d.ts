export declare const TEST_NAMESPACE = "__E2E_TEST__";
export declare function generateTestName(prefix?: string): string;
export declare const DEFAULT_PARENT = "Workspace";
export declare const TEST_POSITIONS: {
    origin: {
        x: number;
        y: number;
        z: number;
    };
    offset: {
        x: number;
        y: number;
        z: number;
    };
    high: {
        x: number;
        y: number;
        z: number;
    };
    ground: {
        x: number;
        y: number;
        z: number;
    };
};
export declare const TEST_SIZES: {
    small: {
        x: number;
        y: number;
        z: number;
    };
    medium: {
        x: number;
        y: number;
        z: number;
    };
    large: {
        x: number;
        y: number;
        z: number;
    };
    tall: {
        x: number;
        y: number;
        z: number;
    };
};
export declare function createTestPart(options?: {
    name?: string;
    parent?: string;
    position?: {
        x: number;
        y: number;
        z: number;
    };
    size?: {
        x: number;
        y: number;
        z: number;
    };
    anchored?: boolean;
    color?: {
        r: number;
        g: number;
        b: number;
    };
}): Promise<{
    path: string;
    name: string;
    className: string;
}>;
export declare function createTestModel(options?: {
    name?: string;
    parent?: string;
}): Promise<{
    path: string;
    name: string;
    className: string;
}>;
export declare function createTestFolder(options?: {
    name?: string;
    parent?: string;
}): Promise<{
    path: string;
    name: string;
    className: string;
}>;
export declare function createTestGroundPlane(options?: {
    name?: string;
    parent?: string;
    position?: {
        x: number;
        y: number;
        z: number;
    };
    size?: {
        x: number;
        y: number;
        z: number;
    };
}): Promise<{
    path: string;
    name: string;
    className: string;
}>;
export declare function createTestScript(options?: {
    name?: string;
    parent?: string;
    source?: string;
    scriptType?: 'Script' | 'LocalScript' | 'ModuleScript';
}): Promise<{
    path: string;
    name: string;
    className: string;
}>;
export declare function wait(ms: number): Promise<void>;
export declare const TEST_UDIM2: {
    small: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
    medium: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
    fullWidth: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
    centered: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
};
export declare function createTestScreenGui(options?: {
    name?: string;
    parent?: string;
}): Promise<{
    path: string;
    name: string;
    className: string;
}>;
export declare function createTestFrame(options?: {
    name?: string;
    parent?: string;
    size?: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
    position?: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
}): Promise<{
    path: string;
    name: string;
    className: string;
    screenGuiPath?: string;
}>;
export declare function createTestTextLabel(options?: {
    name?: string;
    parent?: string;
    text?: string;
    size?: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
    position?: {
        xScale: number;
        xOffset: number;
        yScale: number;
        yOffset: number;
    };
}): Promise<{
    path: string;
    name: string;
    className: string;
    screenGuiPath?: string;
}>;
//# sourceMappingURL=test-fixtures.d.ts.map