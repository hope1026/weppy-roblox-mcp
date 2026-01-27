import { instanceTools } from './instance-tools.js';
import { propertyTools } from './property-tools.js';
import { scriptTools } from './script-tools.js';
import { selectionTools } from './selection-tools.js';
import { searchTools } from './search-tools.js';
import { tagTools } from './tag-tools.js';
import { bulkTools } from './bulk-tools.js';
import { environmentTools } from './environment-tools.js';
import { assetTools } from './asset-tools.js';
import { stateTools } from './state-tools.js';
import { spatialTools } from './spatial-tools.js';
import { logTools } from './log-tools.js';
import { raycastTools } from './raycast-tools.js';
import { terrainTools } from './terrain-tools.js';
export const pingTool = {
    name: 'ping',
    description: 'Test tool to verify connection between MCP server, HTTP bridge, and Roblox plugin. Returns "pong" with timestamp.',
    inputSchema: {
        type: 'object',
        properties: {
            message: {
                type: 'string',
                description: 'Optional message to echo back',
            },
        },
    },
};
export const tools = [
    pingTool,
    ...instanceTools,
    ...propertyTools,
    ...scriptTools,
    ...selectionTools,
    ...searchTools,
    ...tagTools,
    ...bulkTools,
    ...environmentTools,
    ...assetTools,
    ...stateTools,
    ...spatialTools,
    ...logTools,
    ...raycastTools,
    ...terrainTools,
];
export { instanceTools } from './instance-tools.js';
export { propertyTools } from './property-tools.js';
export { scriptTools } from './script-tools.js';
export { selectionTools } from './selection-tools.js';
export { searchTools } from './search-tools.js';
export { tagTools } from './tag-tools.js';
export { bulkTools } from './bulk-tools.js';
export { environmentTools } from './environment-tools.js';
export { assetTools } from './asset-tools.js';
export { stateTools } from './state-tools.js';
export { spatialTools } from './spatial-tools.js';
export { logTools } from './log-tools.js';
export { raycastTools } from './raycast-tools.js';
export { terrainTools } from './terrain-tools.js';
//# sourceMappingURL=index.js.map