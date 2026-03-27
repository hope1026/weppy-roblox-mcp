# System & Debugging

> Check connection state, manage logs, control Studio selection, and batch commands for debugging workflows.

## Included Tools

| Tool | Tier | Description |
|------|:----:|-------------|
| `system_info` | Mixed | `ping`, `connection`, `usage`, `place_info`, `services`, `studio_settings` |
| `manage_logs` | Basic | Query logs, clear buffers, and filter recent errors |
| `manage_selection` | Mixed | Read, replace, and monitor Studio selection |
| `batch_execute` | Pro | Execute multiple commands in one batch |

> For the playtest actions on `system_info` such as `play`, `stop`, and `run_test`, see [Playtest & Automated Tests](playtest.md).

## Key Workflows

### Check the connection

```
"Check whether Studio is connected correctly."
```

Use `system_info.ping` for a quick health check.

### Debug recent errors

```
"Show me the most recent error logs."
```

Use `manage_logs.errors` to filter only recent errors. `manage_logs.get` also supports incremental polling with a `sinceSeq` cursor.

### Run a batch workflow (Pro)

```
"Turn every Part in Workspace red, then focus the camera on the first one."
```

Use `batch_execute` to bundle multiple commands into one request.

## Action Reference

### System Info (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `ping` | Test the connection | Basic |
| `connection` | Get server and plugin connection info | Basic |
| `usage` | Get the current tier (`basic` or `pro`) | Basic |
| `place_info` | Get place ID, name, and creator | Pro |
| `services` | List all Roblox services | Pro |
| `studio_settings` | Get Studio preferences | Pro |

### Manage Logs (Basic)

| Action | Description | Tier |
|--------|-------------|------|
| `get` | Get filtered logs with optional `sinceSeq` cursor support | Basic |
| `clear` | Clear the log buffer | Basic |
| `errors` | Get recent errors only | Basic |

### Manage Selection (Mixed)

| Action | Description | Tier |
|--------|-------------|------|
| `get` | Get the current selection | Basic |
| `set` | Replace the current selection | Basic |
| `clear` | Clear the selection | Basic |
| `cached` | Get cached selection without a round trip | Basic |
| `context` | Get detailed context with source and properties | Pro |
| `details` | Get hierarchical details with ancestors and descendants | Pro |
| `add` | Add items to the selection | Pro |
| `remove` | Remove items from the selection | Pro |
| `watch` | Monitor selection changes | Pro |

### Manage Context (Basic)

| Action | Description | Tier |
|--------|-------------|------|
| `begin` | Start a structured execution context for the current session/place scope | Basic |
| `update` | Update intent, affected areas, or replay metadata for the active context | Basic |
| `end` | Close the active execution context and persist the final snapshot | Basic |

### Batch Execute (Pro)

Execute multiple commands in one batch. Each command includes a tool name and arguments, runs sequentially, and can optionally continue after errors.

## Related Docs

- [Playtest & Automated Tests](playtest.md) - playtest control on `system_info`
- [Scripting & Code Execution](scripting.md) - run Luau for investigation or debugging
- [Tools Reference](overview.md)
