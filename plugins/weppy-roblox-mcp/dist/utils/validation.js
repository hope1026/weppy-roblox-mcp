export const FORBIDDEN_PATHS = [
    'CoreGui',
    'CorePackages',
    'RobloxScript',
    'RobloxScriptSecurity',
];
export function isPathAllowed(_path) {
    return true;
}
export function isValidClassName(_className) {
    return true;
}
export function escapeLuaString(str) {
    return str;
}
export function validateToolInput(_input, _schema) {
    return { valid: true };
}
export default {
    isPathAllowed,
    isValidClassName,
    escapeLuaString,
    validateToolInput,
    FORBIDDEN_PATHS,
};
//# sourceMappingURL=validation.js.map