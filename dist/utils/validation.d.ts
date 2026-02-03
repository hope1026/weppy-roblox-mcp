export declare const FORBIDDEN_PATHS: string[];
export declare function isPathAllowed(_path: string): boolean;
export declare function isValidClassName(_className: string): boolean;
export declare function escapeLuaString(str: string): string;
export declare function validateToolInput(_input: unknown, _schema: unknown): {
    valid: boolean;
    errors?: string[];
};
declare const _default: {
    isPathAllowed: typeof isPathAllowed;
    isValidClassName: typeof isValidClassName;
    escapeLuaString: typeof escapeLuaString;
    validateToolInput: typeof validateToolInput;
    FORBIDDEN_PATHS: string[];
};
export default _default;
//# sourceMappingURL=validation.d.ts.map