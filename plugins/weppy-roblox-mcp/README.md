# Weppy Roblox MCP

> MCP (Model Context Protocol) server for Roblox Studio integration - enables AI coding agents to interact with Roblox Studio in real-time.

[![npm version](https://img.shields.io/npm/v/weppy-roblox-mcp.svg)](https://www.npmjs.com/package/weppy-roblox-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

Weppy Roblox MCP is a powerful bridge between AI coding agents and Roblox Studio. It provides **76+ tools** organized into 9 categories, enabling AI agents like Claude Code, Cursor, and others to create, modify, and analyze Roblox games through natural language.

### Key Features

- **76+ Tools** - Comprehensive coverage of Roblox Studio operations
- **Real-time Studio Integration** - Direct communication with Roblox Studio via SSE (Server-Sent Events)
- **Type-safe TypeScript** - Robust implementation with full type safety
- **Multi-agent Support** - Compatible with Claude Code, Cursor, and any MCP-compatible client
- **Automatic Type Conversion** - Seamless JSON ↔ Roblox type conversion (Vector3, Color3, CFrame, etc.)
- **Batch Operations** - Efficient bulk operations to reduce round trips

## Architecture

```
AI Agent (Claude/Cursor/etc.)
        │ stdio (JSON-RPC 2.0)
        ▼
   MCP Server (TypeScript)
   - MCP Protocol Handler
   - Tool Registry (76 tools)
   - Command Queue Manager
        │ HTTP/SSE (localhost:3002)
        ▼
Roblox Studio Plugin (Luau)
   - SSE Client
   - Command Router
   - Command Handlers
```

## Installation

### Quick Start with npx

```bash
npx weppy-roblox-mcp
```

### Global Installation

```bash
npm install -g weppy-roblox-mcp
weppy-roblox-mcp
```

### Local Installation

```bash
npm install weppy-roblox-mcp
```

## Quick Start

### 1. Start the MCP Server

```bash
npx weppy-roblox-mcp
```

The server will start on `http://127.0.0.1:3002`.

### 2. Install the Roblox Studio Plugin

1. Download the plugin from the [releases page](https://github.com/weppy/weppy-roblox-mcp/releases)
2. Install the plugin to Roblox Studio:
   - Place `WeppyRobloxMCP.rbxm` in `%LOCALAPPDATA%\Roblox\Plugins` (Windows)
   - Or `~/Documents/Roblox/Plugins` (macOS)
3. Restart Roblox Studio
4. Open the Weppy MCP widget from Plugins menu

### 3. Verify Connection

In the Weppy MCP widget, you should see "Connected" status when both the server and plugin are running.

### 4. Configure Your AI Agent

See [AI Agent Integration](#ai-agent-integration) section below.

## Available Tools

### Instance Tools (12 tools)

Tools for creating, deleting, cloning, and querying Roblox instances.

| Tool | Description |
|------|-------------|
| `create_instance` | Create a new instance with optional properties |
| `delete_instance` | Delete an instance by path |
| `clone_instance` | Clone an instance with all descendants |
| `get_instance` | Get detailed information about an instance |
| `get_instance_children` | Get children with optional recursive traversal |
| `move_instance` | Move an instance to a new parent |
| `rename_instance` | Rename an instance |
| `find_first_child` | Find immediate child by name |
| `find_first_descendant` | Find descendant by name (recursive) |
| `create_instance_with_properties` | Create instance with full property set |
| `get_class_info` | Get class information and available properties |
| `wait_for_child` | Wait for child to exist with timeout |

### Property Tools (10 tools)

Tools for getting and setting properties on Roblox instances.

| Tool | Description |
|------|-------------|
| `get_property` | Get a property value with type conversion |
| `set_property` | Set a property value with type conversion |
| `get_all_properties` | Get all common properties of an instance |
| `set_multiple_properties` | Set multiple properties in one call |
| `get_attribute` | Get a custom attribute value |
| `set_attribute` | Set a custom attribute value |
| `get_all_attributes` | Get all attributes on an instance |
| `delete_attribute` | Delete a custom attribute |
| `set_calculated_property` | Set property based on calculated expression |
| `set_relative_property` | Modify property relative to current value |

### Script Tools (10 tools)

Tools for managing scripts (Script, LocalScript, ModuleScript).

| Tool | Description |
|------|-------------|
| `get_script_source` | Get script source code |
| `set_script_source` | Set script source code |
| `create_script` | Create new script with optional initial code |
| `edit_script_lines` | Edit specific lines in a script |
| `insert_script_lines` | Insert new lines at specific position |
| `delete_script_lines` | Delete specific lines from a script |
| `search_in_scripts` | Search for pattern in all scripts |
| `replace_in_scripts` | Search and replace in all scripts |
| `get_script_dependencies` | Analyze script dependencies |
| `execute_script` | Execute script (stub for security) |

### Search Tools (8 tools)

Tools for searching and exploring the game tree.

| Tool | Description |
|------|-------------|
| `get_file_tree` | Get hierarchical structure of instances |
| `search_by_name` | Search instances by name pattern (wildcards) |
| `search_by_class` | Search instances by class name |
| `get_project_structure` | Get entire project structure by services |
| `search_by_property` | Search instances by property value |
| `search_by_tag` | Search instances by CollectionService tag |
| `get_descendants` | Get all descendants of an instance |
| `get_ancestors` | Get ancestor chain to game root |

### Selection Tools (12 tools)

Tools for working with Studio selection.

| Tool | Description |
|------|-------------|
| `get_selection` | Get currently selected instances |
| `get_selection_context` | Get detailed context of selection |
| `get_selection_details` | Get hierarchical details of selection |
| `set_selection` | Set current selection to specified paths |
| `add_to_selection` | Add instances to current selection |
| `remove_from_selection` | Remove instances from selection |
| `clear_selection` | Clear current selection |
| `get_place_info` | Get information about current place |
| `get_services` | Get list of available services |
| `get_studio_settings` | Get Studio settings and preferences |
| `run_command` | Execute Studio command or PluginAction |
| `watch_selection` | Watch for selection changes (stub) |

### Bulk Tools (8 tools)

Tools for performing batch operations efficiently.

| Tool | Description |
|------|-------------|
| `mass_create_instances` | Create multiple instances in one operation |
| `mass_delete_instances` | Delete multiple instances in one operation |
| `mass_set_property` | Set same property on multiple instances |
| `batch_execute` | Execute multiple commands sequentially |
| `smart_duplicate` | Create multiple copies with offset |
| `mass_get_property` | Get same property from multiple instances |
| `mass_duplicate` | Duplicate multiple instances |
| `modify_children` | Set property on all children of parent |

### Tag Tools (5 tools)

Tools for managing CollectionService tags.

| Tool | Description |
|------|-------------|
| `add_tag` | Add tag to an instance |
| `remove_tag` | Remove tag from an instance |
| `get_tags` | Get all tags on an instance |
| `get_tagged` | Get all instances with a specific tag |
| `has_tag` | Check if instance has a tag |

### Asset Tools (6 tools)

Tools for inserting assets and working with Creator Store.

| Tool | Description |
|------|-------------|
| `insert_model` | Insert model from catalog by asset ID |
| `get_asset_info` | Get asset information via MarketplaceService |
| `search_creator_store` | Search Creator Store (stub/guidance) |
| `insert_free_model` | Insert free model with verification |
| `insert_package` | Insert package asset |
| `export_selection` | Export selected instances with hierarchy |

### Environment Tools (5 tools)

Tools for managing lighting and environment settings.

| Tool | Description |
|------|-------------|
| `set_lighting` | Configure Lighting service properties |
| `set_atmosphere` | Configure atmospheric effects |
| `set_sky` | Configure skybox and celestial bodies |
| `set_terrain` | Configure terrain water properties |
| `set_time_of_day` | Set in-game time of day |

## AI Agent Integration

### Claude Code

Add to your MCP settings in Claude Code:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["weppy-roblox-mcp"]
    }
  }
}
```

For detailed setup instructions, see [docs/CLAUDE_CODE.md](docs/CLAUDE_CODE.md).

### Cursor

Add to your Cursor MCP configuration:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "weppy-roblox-mcp"],
      "env": {
        "HTTP_PORT": "3002"
      }
    }
  }
}
```

For detailed setup instructions, see [docs/CURSOR.md](docs/CURSOR.md).

### Other MCP Clients

Any MCP-compatible client can use Weppy Roblox MCP. The standard configuration:

```json
{
  "command": "npx",
  "args": ["weppy-roblox-mcp"],
  "env": {
    "HTTP_PORT": "3002",
    "HTTP_HOST": "127.0.0.1",
    "LOG_LEVEL": "info"
  }
}
```

## Development

### Building from Source

```bash
# Clone the repository
git clone https://github.com/weppy/weppy-roblox-mcp.git
cd weppy-roblox-mcp/mcp-server

# Install dependencies
npm install

# Build
npm run build

# Development mode (watch)
npm run dev

# Run
npm start
```

### Project Structure

```
mcp-server/
├── src/
│   ├── index.ts              # Entry point
│   ├── server.ts             # MCP server class
│   ├── http-bridge.ts        # HTTP/SSE bridge
│   ├── tools/
│   │   ├── index.ts          # Tool registry
│   │   ├── instance-tools.ts # Instance management
│   │   ├── property-tools.ts # Property operations
│   │   ├── script-tools.ts   # Script management
│   │   ├── search-tools.ts   # Search and exploration
│   │   ├── selection-tools.ts # Selection operations
│   │   ├── bulk-tools.ts     # Batch operations
│   │   ├── tag-tools.ts      # Tag management
│   │   ├── asset-tools.ts    # Asset insertion
│   │   └── environment-tools.ts # Lighting & environment
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   └── utils/
│       ├── logger.ts         # Logging utility
│       ├── validation.ts     # Input validation
│       └── type-converter.ts # JSON ↔ Roblox conversion
├── dist/                     # Compiled output
├── docs/                     # Documentation
├── package.json
├── tsconfig.json
└── README.md
```

### Testing with MCP Inspector

The MCP Inspector provides an interactive UI for testing tools:

```bash
npx @modelcontextprotocol/inspector dist/index.js
```

This will:
1. Start the MCP server
2. Launch a web UI at http://localhost:5173
3. Allow you to test tools interactively

### Running Tests

```bash
npm test
```

## HTTP Endpoints

The MCP server exposes an HTTP/SSE bridge for communication with the Roblox plugin:

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/events` | GET (SSE) | Server → Plugin commands (event stream) |
| `/result` | POST | Plugin → Server results |
| `/status` | GET | Connection health check |

## Security

- **Localhost Only**: Server binds to `127.0.0.1:3002` exclusively
- **Rate Limiting**: Maximum 450 requests/minute (Roblox allows 500)
- **Timeout**: 30-second timeout per operation
- **Path Restrictions**: Forbidden access to CoreGui, CorePackages, RobloxScript, RobloxScriptSecurity
- **Lua String Escaping**: Automatic escaping of `\`, `"`, `\n`, `\r`, `\0` in user inputs

## Type Conversion

The server automatically converts between JSON and Roblox types:

| JSON Format | Roblox Type | Example |
|-------------|-------------|---------|
| `{x, y, z}` | Vector3 | `{"x": 10, "y": 5, "z": 10}` |
| `{r, g, b}` (0-255) | Color3.fromRGB | `{"r": 255, "g": 0, "b": 0}` |
| `{r, g, b}` (0-1) | Color3.new | `{"r": 1, "g": 0, "b": 0}` |
| 12-number array | CFrame | `[1,0,0,0,1,0,0,0,1,0,5,0]` |
| `{xScale, xOffset, yScale, yOffset}` | UDim2 | `{"xScale": 1, "xOffset": 0, "yScale": 0, "yOffset": 100}` |
| `"Enum.Material.Plastic"` | Enum | `"Enum.Material.Neon"` |
| `"Bright red"` | BrickColor | `"Really red"` |

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Contributing

Contributions are welcome! Please see our [contributing guidelines](CONTRIBUTING.md).

## Documentation

- [Claude Code Setup](docs/CLAUDE_CODE.md)
- [Cursor Setup](docs/CURSOR.md)
- [Codex Setup](docs/CODEX.md)
- [Gemini Setup](docs/GEMINI.md)
- [API Reference](docs/API.md)

## Links

- [GitHub Repository](https://github.com/weppy/weppy-roblox-mcp)
- [NPM Package](https://www.npmjs.com/package/weppy-roblox-mcp)
- [Issue Tracker](https://github.com/weppy/weppy-roblox-mcp/issues)
- [Model Context Protocol](https://modelcontextprotocol.io/)

## Support

- **Issues**: [GitHub Issues](https://github.com/weppy/weppy-roblox-mcp/issues)
- **Discussions**: [GitHub Discussions](https://github.com/weppy/weppy-roblox-mcp/discussions)

---

Made with ❤️ for the Roblox community
