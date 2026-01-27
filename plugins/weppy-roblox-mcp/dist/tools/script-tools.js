export const getScriptSourceTool = {
    name: 'get_script_source',
    description: 'Get the source code of a Script, LocalScript, or ModuleScript. Returns the script\'s Source property as a string.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance (e.g., "workspace.Script", "game.ReplicatedStorage.ModuleScript")',
            },
        },
        required: ['path'],
    },
};
export const setScriptSourceTool = {
    name: 'set_script_source',
    description: 'Set the source code of a Script, LocalScript, or ModuleScript. Updates the script\'s Source property. Special characters are automatically escaped for safety.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance (e.g., "workspace.Script", "game.ReplicatedStorage.ModuleScript")',
            },
            source: {
                type: 'string',
                description: 'New source code to set. Can be multi-line. Special characters (backslashes, quotes, newlines) are automatically escaped.',
            },
        },
        required: ['path', 'source'],
    },
};
export const createScriptTool = {
    name: 'create_script',
    description: 'Create a new Script, LocalScript, or ModuleScript in Roblox Studio. Optionally provide initial source code. Default templates are used if source is not provided.',
    inputSchema: {
        type: 'object',
        properties: {
            scriptType: {
                type: 'string',
                enum: ['Script', 'LocalScript', 'ModuleScript'],
                description: 'Type of script to create: "Script" (server-side), "LocalScript" (client-side), or "ModuleScript" (reusable module)',
            },
            parent: {
                type: 'string',
                description: 'Path to the parent instance where the script will be created (e.g., "workspace", "game.ReplicatedStorage", "game.ServerScriptService")',
            },
            name: {
                type: 'string',
                description: 'Name of the new script (e.g., "MyScript", "DataManager", "ClientController")',
            },
            source: {
                type: 'string',
                description: 'Optional initial source code. If not provided, a default template will be used based on the script type.',
            },
        },
        required: ['scriptType', 'parent', 'name'],
    },
};
export const editScriptLinesTool = {
    name: 'edit_script_lines',
    description: 'Edit specific lines in a script. Replace a range of lines with new content. Line numbers are 1-based.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance',
            },
            startLine: {
                type: 'number',
                description: 'Starting line number (1-based, inclusive)',
            },
            endLine: {
                type: 'number',
                description: 'Ending line number (1-based, inclusive). Use same as startLine to replace a single line.',
            },
            newContent: {
                type: 'string',
                description: 'New content to replace the specified lines. Can be multi-line.',
            },
        },
        required: ['path', 'startLine', 'endLine', 'newContent'],
    },
};
export const insertScriptLinesTool = {
    name: 'insert_script_lines',
    description: 'Insert new lines into a script at a specific position. Line numbers are 1-based.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance',
            },
            afterLine: {
                type: 'number',
                description: 'Line number after which to insert. Use 0 to insert at the beginning.',
            },
            content: {
                type: 'string',
                description: 'Content to insert. Can be multi-line.',
            },
        },
        required: ['path', 'afterLine', 'content'],
    },
};
export const deleteScriptLinesTool = {
    name: 'delete_script_lines',
    description: 'Delete specific lines from a script. Line numbers are 1-based.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance',
            },
            startLine: {
                type: 'number',
                description: 'Starting line number (1-based, inclusive)',
            },
            endLine: {
                type: 'number',
                description: 'Ending line number (1-based, inclusive). Use same as startLine to delete a single line.',
            },
        },
        required: ['path', 'startLine', 'endLine'],
    },
};
export const searchInScriptsTool = {
    name: 'search_in_scripts',
    description: 'Search for a pattern in all scripts under a given path. Returns matching scripts with line numbers and content.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Root path to search within (e.g., "game.ServerScriptService", "game.ReplicatedStorage")',
            },
            pattern: {
                type: 'string',
                description: 'Search pattern (plain text or Lua pattern)',
            },
            usePattern: {
                type: 'boolean',
                description: 'If true, treats the pattern as a Lua pattern. If false (default), treats as plain text.',
            },
            maxResults: {
                type: 'number',
                description: 'Maximum number of results to return. Default: 100',
            },
        },
        required: ['path', 'pattern'],
    },
};
export const replaceInScriptsTool = {
    name: 'replace_in_scripts',
    description: 'Search and replace text in all scripts under a given path. Returns a list of modified scripts.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Root path to search within (e.g., "game.ServerScriptService", "game.ReplicatedStorage")',
            },
            searchPattern: {
                type: 'string',
                description: 'Pattern to search for',
            },
            replacement: {
                type: 'string',
                description: 'Replacement text',
            },
            usePattern: {
                type: 'boolean',
                description: 'If true, treats searchPattern as a Lua pattern. If false (default), treats as plain text.',
            },
            dryRun: {
                type: 'boolean',
                description: 'If true, shows what would be replaced without making changes. Default: false',
            },
        },
        required: ['path', 'searchPattern', 'replacement'],
    },
};
export const getScriptDependenciesTool = {
    name: 'get_script_dependencies',
    description: 'Analyze a script to identify its dependencies. Extracts require() calls, service usages, and global references.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance to analyze (e.g., "game.ServerScriptService.MainScript")',
            },
        },
        required: ['path'],
    },
};
export const executeScriptTool = {
    name: 'execute_script',
    description: 'Execute a script in Roblox Studio. WARNING: This is a stub implementation for security reasons. Direct script execution is disabled to prevent arbitrary code execution. Use create_script and let Roblox run it instead.',
    inputSchema: {
        type: 'object',
        properties: {
            path: {
                type: 'string',
                description: 'Path to the script instance to execute',
            },
            source: {
                type: 'string',
                description: 'Source code to execute (alternative to path)',
            },
        },
    },
};
export const scriptTools = [
    getScriptSourceTool,
    setScriptSourceTool,
    createScriptTool,
    editScriptLinesTool,
    insertScriptLinesTool,
    deleteScriptLinesTool,
    searchInScriptsTool,
    replaceInScriptsTool,
    getScriptDependenciesTool,
    executeScriptTool,
];
//# sourceMappingURL=script-tools.js.map