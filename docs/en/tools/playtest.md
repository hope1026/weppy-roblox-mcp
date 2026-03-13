# Playtest & Automated Tests

> Control Roblox Studio playtests with AI, inject test scripts, and automatically generate logs and local reports.

## Included Tools

| Tool | Tier | Description |
|------|:----:|-------------|
| `system_info` | Pro | `play`, `stop`, `pause`, `resume`, `play_status`, `run_test` actions |

> For the other `system_info` actions such as `ping`, `connection`, and `usage`, see [System & Debugging](system-and-debugging.md).

## Key Workflows

### Manual playtest control

```
"Start the game in Play mode (F5)."
"Stop the current playtest."
```

Typical flow: `play` -> `play_status` -> `stop`.

### Run an automated test

```
"Write and run a test that checks whether the SpawnLocation is positioned correctly."
```

`run_test` injects the test script, starts the playtest automatically, collects logs, and cleans up.

### CI-style verification

```
"Run a Run-mode (F8) test that verifies the NPC reaches the target, and show me the logs if it fails."
```

Use `run_test` with `mode: "run"` for server-focused validation.

## Playtest State Machine

```text
Edit --play--> Running --stop--> Edit
                  |               ^
                pause             |
                  |               |
                  v               |
               Paused --resume--> Running
```

| State | Available actions |
|-------|-------------------|
| `edit` | `play` |
| `running` | `stop`, `pause` (Run mode only) |
| `paused` | `resume`, `stop` |

- Play mode (F5): client + server simulation, no pause or resume
- Run mode (F8): server-only simulation, supports pause and resume

## `run_test` Pipeline

`run_test` orchestrates these steps automatically:

### 1. Prepare

- Read place information with `place_info`
- Clear the existing log buffer

### 2. Inject the script

- Create `ServerScriptService.__MCP_TestRunner` with a wrapped test script
- The wrapper handles `START` and `FINISHED` signals plus error tracebacks

### 3. Execute and monitor

- Start the playtest in Play or Run mode
- Poll logs every 500 ms
- Finish when `[WEPPY_TEST]:FINISHED` is detected
- Stop automatically on timeout (default 60 seconds, maximum 300)

### 4. Clean up

- Stop the playtest automatically
- Delete the injected test script
- Collect final logs

### 5. Write reports

Reports and logs are written to local files:

```text
roblox-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/
├── test-report.md
└── test-log.txt
```

Example `test-report.md`:

```markdown
# Test Report

- Status: passed
- Test Name: spawn_location_test
- Mode: run
- Place ID: 123456
- Duration (ms): 1523
- Total Logs: 12
- Signal Count: 2

## Signals

- START: 2026-03-12T10:30:00.000Z
- FINISHED: 2026-03-12T10:30:01.523Z
```

## Action Reference

| Action | Description | Parameters | Tier |
|--------|-------------|------------|------|
| `play` | Start a playtest in Play (F5) or Run (F8) mode | `mode`: `"play"` \| `"run"` | Pro |
| `stop` | Stop the current playtest | - | Pro |
| `pause` | Pause a Run-mode playtest | - | Pro |
| `resume` | Resume a paused Run-mode playtest | - | Pro |
| `play_status` | Get playtest state and available actions | - | Pro |
| `run_test` | Inject a test script, run playtest, collect logs, and write reports | `script` (required), `test_name`, `mode`, `timeout` | Pro |

### `run_test` Parameters

| Parameter | Type | Required | Description |
|-----------|------|:--------:|-------------|
| `script` | string | ✅ | Luau test code body to execute |
| `test_name` | string | - | Display name used in the report |
| `mode` | `"play"` \| `"run"` | - | Playtest mode, defaults to `"play"` |
| `timeout` | number | - | Timeout in seconds, default 60, maximum 300 |

## Related Docs

- [System & Debugging](system-and-debugging.md) - connection actions and log management
- [Scripting & Code Execution](scripting.md) - write scripts and run Luau
- [Tools Reference](overview.md)
