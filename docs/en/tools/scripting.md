# Scripting & Code Execution

> Manage script source code and run arbitrary Luau inside Roblox Studio.

## Included Tools

| Tool | Tier | Description |
|------|:----:|-------------|
| `manage_scripts` | Mixed | Create, read, edit, search, and analyze script dependencies |
| `execute_luau` | Pro | Run arbitrary Luau in the Roblox Studio sandbox |

## Key Workflows

### Edit a script

```
"Change maxPlayers from 12 to 24 in the GameManager script under ServerScriptService."
```

Use `manage_scripts.search` to find the relevant line, then `manage_scripts.edit_replace` to update it.

### Refactor multiple scripts (Pro)

```
"Replace OldModule with NewModule across every script."
```

Use `manage_scripts.replace` to apply the change across multiple scripts in one request.

### Inspect runtime data (Pro)

```
"Calculate the average Health of every Humanoid currently in Workspace."
```

Use `execute_luau` to run custom Luau and read live runtime data.

## Action Reference

### Manage Scripts (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `get_source` | Get script source code | Basic |
| `set_source` | Set script source code | Basic |
| `create` | Create a new script | Basic |
| `delete` | Delete a script | Basic |
| `edit_replace` | Replace specific lines in a script | Basic |
| `edit_insert` | Insert lines at a position | Basic |
| `edit_delete` | Delete specific lines | Basic |
| `search` | Search for text in scripts | Basic |
| `get_dependencies` | Get script dependencies | Basic |
| `replace` | Batch replace across scripts | Pro |

### Execute Luau (Pro)

Run arbitrary Luau inside the Roblox Studio sandbox.

- Blocked services: `HttpService`, `DataStoreService`, `MessagingService`
- Inaccessible APIs: `CoreGui`, `CorePackages`

## Related Docs

- [Instances & Properties](instances-and-properties.md) - create or move script instances
- [Playtest & Automated Tests](playtest.md) - inject and run test scripts
- [Tools Reference](overview.md)
