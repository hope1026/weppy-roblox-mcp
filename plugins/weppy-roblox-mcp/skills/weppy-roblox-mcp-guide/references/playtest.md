# Playtest Reference

Use playtest actions when verifying runtime behavior, collecting logs, or creating dashboard-linked test reports.

## Control Flow

- `system_info.play_status`: check whether Studio is in edit, running, or paused state.
- `system_info.play`: start a playtest. `mode="play"` maps to F5 and `mode="run"` maps to F8.
- `system_info.pause`: pause a running playtest.
- `system_info.resume`: resume a paused playtest.
- `system_info.stop`: stop a playtest.
- `system_info.run_test`: inject a Luau test body, run playtest, collect logs, and write report files.

Read `mcp-actions.md` for exact params and tiers.

## Automated Test Runner

`system_info.run_test` requires `script`. Optional fields include `mode`, `test_name`, `timeout`, `contextId`, `contextSummary`, and `replayMetadata`.

The runner wraps the user script, emits `[WEPPY_TEST]` log signals, collects `manage_logs` output, stops playtest during cleanup, and stores report artifacts under the active place test directory.

## Screenshot Limitation

`manage_camera.screenshot` is Edit-mode only. If unsure, call `system_info.play_status` first and proceed only when the state is edit. Play-mode screenshot capture is not supported in this build.

## Sync Interaction

Play mode suppresses sync updates. Do not start full sync during play mode. After play exits, sync performs post-play reconciliation before normal incremental sync resumes.
