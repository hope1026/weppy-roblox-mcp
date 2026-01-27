function escapeLuaString(str) {
    return str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\0/g, '\\0');
}
export function validateVector3(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const obj = value;
    return ('x' in obj && typeof obj.x === 'number' &&
        'y' in obj && typeof obj.y === 'number' &&
        'z' in obj && typeof obj.z === 'number');
}
export function validateColor3(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const obj = value;
    return ('r' in obj && typeof obj.r === 'number' &&
        'g' in obj && typeof obj.g === 'number' &&
        'b' in obj && typeof obj.b === 'number');
}
export function validateCFrame(value) {
    return (Array.isArray(value) &&
        value.length === 12 &&
        value.every((v) => typeof v === 'number'));
}
export function validateUDim2(value) {
    if (typeof value !== 'object' || value === null)
        return false;
    const obj = value;
    return ('xScale' in obj && typeof obj.xScale === 'number' &&
        'xOffset' in obj && typeof obj.xOffset === 'number' &&
        'yScale' in obj && typeof obj.yScale === 'number' &&
        'yOffset' in obj && typeof obj.yOffset === 'number');
}
export function detectRobloxType(value) {
    if (validateVector3(value))
        return 'Vector3';
    if (validateColor3(value))
        return 'Color3';
    if (validateCFrame(value))
        return 'CFrame';
    if (validateUDim2(value))
        return 'UDim2';
    if (typeof value === 'string') {
        if (value.startsWith('Enum.'))
            return 'Enum';
        if (/^[A-Z][\w\s]+$/.test(value))
            return 'BrickColor';
    }
    return null;
}
export function convertVector3(value) {
    return `Vector3.new(${value.x}, ${value.y}, ${value.z})`;
}
export function convertColor3(value) {
    const { r, g, b } = value;
    const isRGB = r > 1 || g > 1 || b > 1;
    if (isRGB) {
        return `Color3.fromRGB(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    }
    else {
        return `Color3.new(${r}, ${g}, ${b})`;
    }
}
export function convertCFrame(value) {
    return `CFrame.new(${value.join(', ')})`;
}
export function convertUDim2(value) {
    return `UDim2.new(${value.xScale}, ${value.xOffset}, ${value.yScale}, ${value.yOffset})`;
}
export function convertEnum(value) {
    return value;
}
export function convertBrickColor(value) {
    const escaped = escapeLuaString(value);
    return `BrickColor.new("${escaped}")`;
}
export function toRobloxValue(value, targetType) {
    if (value === null || value === undefined) {
        return 'nil';
    }
    if (targetType) {
        switch (targetType) {
            case 'Vector3':
                if (validateVector3(value))
                    return convertVector3(value);
                throw new Error(`Invalid Vector3 value: ${JSON.stringify(value)}`);
            case 'Color3':
                if (validateColor3(value))
                    return convertColor3(value);
                throw new Error(`Invalid Color3 value: ${JSON.stringify(value)}`);
            case 'CFrame':
                if (validateCFrame(value))
                    return convertCFrame(value);
                throw new Error(`Invalid CFrame value: ${JSON.stringify(value)}`);
            case 'UDim2':
                if (validateUDim2(value))
                    return convertUDim2(value);
                throw new Error(`Invalid UDim2 value: ${JSON.stringify(value)}`);
            case 'Enum':
                if (typeof value === 'string')
                    return convertEnum(value);
                throw new Error(`Invalid Enum value: ${JSON.stringify(value)}`);
            case 'BrickColor':
                if (typeof value === 'string')
                    return convertBrickColor(value);
                throw new Error(`Invalid BrickColor value: ${JSON.stringify(value)}`);
        }
    }
    const detectedType = detectRobloxType(value);
    if (detectedType === 'Vector3' && validateVector3(value)) {
        return convertVector3(value);
    }
    if (detectedType === 'Color3' && validateColor3(value)) {
        return convertColor3(value);
    }
    if (detectedType === 'CFrame' && validateCFrame(value)) {
        return convertCFrame(value);
    }
    if (detectedType === 'UDim2' && validateUDim2(value)) {
        return convertUDim2(value);
    }
    if (detectedType === 'Enum' && typeof value === 'string') {
        return convertEnum(value);
    }
    if (typeof value === 'string') {
        return `"${escapeLuaString(value)}"`;
    }
    if (typeof value === 'number') {
        return String(value);
    }
    if (typeof value === 'boolean') {
        return value ? 'true' : 'false';
    }
    if (Array.isArray(value)) {
        const elements = value.map(v => toRobloxValue(v));
        return `{${elements.join(', ')}}`;
    }
    if (typeof value === 'object') {
        const entries = Object.entries(value);
        const pairs = entries.map(([k, v]) => {
            const key = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(k)
                ? k
                : `["${escapeLuaString(k)}"]`;
            return `${key} = ${toRobloxValue(v)}`;
        });
        return `{${pairs.join(', ')}}`;
    }
    throw new Error(`Cannot convert value to Roblox type: ${JSON.stringify(value)}`);
}
export function fromRobloxValue(value) {
    if (value === null || value === undefined)
        return value;
    if (typeof value !== 'object')
        return value;
    if (Array.isArray(value)) {
        return value.map(v => fromRobloxValue(v));
    }
    const obj = value;
    if ('x' in obj && 'y' in obj && 'z' in obj && Object.keys(obj).length === 3) {
        return { x: obj.x, y: obj.y, z: obj.z };
    }
    if ('r' in obj && 'g' in obj && 'b' in obj && Object.keys(obj).length === 3) {
        return { r: obj.r, g: obj.g, b: obj.b };
    }
    if ('xScale' in obj && 'xOffset' in obj && 'yScale' in obj && 'yOffset' in obj) {
        return {
            xScale: obj.xScale,
            xOffset: obj.xOffset,
            yScale: obj.yScale,
            yOffset: obj.yOffset,
        };
    }
    const result = {};
    for (const [key, val] of Object.entries(obj)) {
        result[key] = fromRobloxValue(val);
    }
    return result;
}
export function autoConvert(value) {
    return toRobloxValue(value);
}
export default {
    validateVector3,
    validateColor3,
    validateCFrame,
    validateUDim2,
    detectRobloxType,
    convertVector3,
    convertColor3,
    convertCFrame,
    convertUDim2,
    convertEnum,
    convertBrickColor,
    toRobloxValue,
    fromRobloxValue,
    autoConvert,
};
//# sourceMappingURL=type-converter.js.map