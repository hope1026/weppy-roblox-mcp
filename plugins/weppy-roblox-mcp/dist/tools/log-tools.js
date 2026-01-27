export const getOutputLogsTool = {
    name: 'get_output_logs',
    description: 'Get logs from the Roblox Studio Output window. Filter by log type (error, warning, info, all) and limit results. Useful for debugging scripts and monitoring runtime behavior.',
    inputSchema: {
        type: 'object',
        properties: {
            type: {
                type: 'string',
                enum: ['all', 'error', 'warning', 'info'],
                description: 'Type of logs to retrieve. "all" returns all logs, "error" returns only errors, "warning" returns warnings, "info" returns info messages. Default: "all"',
            },
            limit: {
                type: 'number',
                description: 'Maximum number of log entries to return. Default: 100. Maximum: 500. Use lower values for faster responses.',
                minimum: 1,
                maximum: 500,
            },
            since: {
                type: 'number',
                description: 'Unix timestamp in milliseconds. Only logs after this time will be returned. Useful for incremental log polling.',
            },
        },
    },
};
export const clearOutputLogsTool = {
    name: 'clear_output_logs',
    description: 'Clear the internal log buffer maintained by the Roblox plugin. This resets the log history for get_output_logs queries. Does not affect the actual Studio Output window.',
    inputSchema: {
        type: 'object',
        properties: {},
    },
};
export const getRecentErrorsTool = {
    name: 'get_recent_errors',
    description: 'Quick access to recent error logs only. Optimized for debugging workflows. Returns errors with timestamps, messages, and script locations.',
    inputSchema: {
        type: 'object',
        properties: {
            limit: {
                type: 'number',
                description: 'Maximum number of error entries to return. Default: 20. Maximum: 100.',
                minimum: 1,
                maximum: 100,
            },
        },
    },
};
export const logTools = [
    getOutputLogsTool,
    clearOutputLogsTool,
    getRecentErrorsTool,
];
//# sourceMappingURL=log-tools.js.map