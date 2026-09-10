# Playtest Reference

Use playtest actions when verifying runtime behavior, collecting logs, or creating dashboard-linked test reports.

## Control Flow

- `manage_studio.play_status`: check whether Studio is in edit, running, or paused state.
- `manage_studio.play_start`: start a playtest. `mode="play"` maps to F5 and `mode="run"` maps to F8.
- `manage_studio.play_pause`: pause a running playtest.
- `manage_studio.play_resume`: resume a paused playtest.
- `manage_studio.play_stop`: stop a playtest.
- `manage_studio.test_session_start`: start a structured test session. It defaults to Play mode and one client.
- `manage_studio.test_session_status`: read bounded progress and step evidence without copying the full result.
- `manage_studio.test_session_stop`: cancel a structured session and request teardown.
- `manage_studio.playtest_control_get`: read Place-scoped control profiles or an active control lease.
- `manage_studio.playtest_control_apply`: apply typed values to an active lease with revision checking and runtime readback.
- `manage_studio.playtest_control_reset`: restore every value owned by an active lease.
- `manage_studio.playtest_prepare`: inspect the current Place scope, profiles, persisted catalog, capabilities, and next actions without opening a lease.
- `manage_studio.playtest_binding_candidates`: read actual direct candidates from the Edit selection or a bounded Play runtime path.
- `manage_studio.playtest_profile_save`: create, update, delete, or explicitly copy a Place-scoped profile with optimistic revision checks.
- `manage_studio.playtest_source_open`: open a source locator from the current verified catalog in Explorer and Script Editor.
- `manage_studio.playtest_adapter_plan` / `playtest_adapter_apply`: preview and apply owned Test Adapter source with hash, diff, usage, backup, and rollback checks.
- `manage_studio.run_test`: use the legacy `executionKind="raw_luau"` path as an explicit advanced diagnostic opt-in.

## Locale Test Environment

Player Emulator settings and the in-experience language are separate capabilities.

- `manage_studio.test_profile_get`: inspect whether the selected Studio target exposes a public Player Emulator profile provider and, when available, read its effective profile.
- `manage_studio.test_profile_set`: request a persistent Player Emulator profile patch.
- `manage_studio.test_profile_reset`: restore the WEPPY baseline saved before the first successful profile mutation.
- `manage_studio.experience_language_get`: observe the active player's Translator locale. The response keeps Player, CoreGui, system, and country-region values in separate fields.
- `manage_studio.experience_language_set`: request an Experience Language change through an explicitly enabled desktop adapter and verify it through the player Translator.

The stable plugin does not use private Player Emulator services or CoreGui input automation. When no public profile provider or opted-in language adapter is available, set operations return structured `test_profile_manual_required` or `experience_language_manual_required` failures. Do not treat requested values as applied values.

`manage_studio.play_start`, `manage_studio.test_session_start`, and `manage_studio.run_test` accept an optional `testProfile` patch and `restoreAfterTest`. Profile application must succeed before play starts. With restoration enabled, the selected Studio target's snapshot is restored on success, error, timeout, or cancellation. Use `manage_studio.play_status` to inspect `activeTestProfileResult` and `lastTestProfileResult` for a manually started play session.

Read `mcp-actions.md` for exact params and tiers.

## Test Values and Watch Values

The Dashboard Playtest page has two workspaces. **Test Values** manages Place-scoped profiles and separates compact read-only observations from values you can change. Reorder either section and move or pin individual values to keep the most useful observations visible. Search, value-type filters, and 25, 50, or 100-row pages remain available for larger profiles. The Dashboard remembers the profile and layout for each Place. Start and stop Play or Run in Studio Editor. The session bar shows the current state and automatically attaches the selected profile to the active runtime. **Automated Test Results** provides search, result filters, pagination, and the structured or Raw Luau report viewer. Open **Before publishing** from the page header when you need the read-only publishing reference. The last selected workspace returns after reopening the page or reloading the Dashboard.

Use **Add value** and start with **Studio selection**. Choose a real Attribute, `ValueBase.Value`, or supported property and add it as an observation or control without creating test code. **Test Adapter** shows detected adapters and selectable entries. An adapter with no selectable entry remains visible with its method summary and **Configure values** action. Expand **Connect a value** in the same workspace when an internal value needs a domain getter or setter that an Instance cannot represent. If no profile exists, the first value and profile name are saved in the same flow. Basic includes profile creation and runtime observation. Pro adds typed value changes, rollback, Reset all, and managed Adapter authoring.

Each control keeps three values distinct: **Current value** is the latest runtime observation, **Input value** is the pending edit, and **Default value** is stored in the profile for later use. Applying an input changes the current Play; saving a default changes the profile. Neither action performs the other one. Manual apply is the default. **Apply changes automatically** is optional and applies only after a valid edit is committed, rather than after every keystroke. **Apply defaults when Play starts** is a separate option for new manual Play sessions. Both options are off until the user enables them.

Value changes are available while Studio reports Running or Paused and become successful only after runtime readback. Edit, Disconnected, Basic, and runtime setup states lock the inputs and show the reason beside the controls. Read-only observations remain visible, including the last observed value when the live value becomes stale or unavailable.

Prefer direct bindings to an Attribute, `ValueBase.Value`, or an explicitly supported writable property. A direct binding is applied only after the fixed server or client Test Agent registers. Each Pro transaction validates every requested value, snapshots the original state, writes the values, reads them back, and commits only when all readbacks match. A failure restores the applied prefix in reverse order. Reset, timeout, cancellation, disconnect, and Studio Play ending run cleanup; values disappear naturally when the Play DataModel is disposed. Closing the Dashboard observation does not stop Studio Play.

Every active direct control also becomes a Watch Value. Additional read-only watches can show runtime state that is not visible in the game UI. Direct watches use Roblox change signals instead of periodic polling. The Dashboard distinguishes a fresh current value from a stale or unavailable last observation after a disconnect, sequence gap, or read failure.

Direct bindings do not run before game scripts and cannot prove that code which cached a value at startup changed its behavior. If the game needs a domain operation or internal state access, use a reviewed Project Test Adapter method. Add optional Dashboard entry metadata to expose a stable ID, label, group, value type, a `read_only` reader, and, for controls, a `reversible_fixture` writer. The writer must register cleanup. Adapter reads poll no faster than once per second and remain bounded. Catalog discovery validates metadata without executing the methods, and profiles never carry adapter source or arbitrary Luau.

Removing a value from a profile removes only that profile reference. Remove the Dashboard entry from its Test Adapter to remove the registration everywhere. Removing an entire adapter can also break automated test scenarios that call its methods, so review known references first.

For managed code, call `playtest_adapter_plan` first. It accepts a structured server ModuleScript path plus explicit getter, optional setter, and dot/colon calling convention; it does not accept arbitrary Luau source. `adapterStudioOnly` defaults to `true`, which generates a `RunService:IsStudio()` check before the adapter accesses game code. Set it to `false` only when the user explicitly asks to omit that check; the plan then returns a production warning. Review `sourcePath`, local mapping status, current and proposed SHA-256, diff, known profile usages, dynamic-reference coverage, cleanup, and any optional production exclusion reference. Apply only the returned unexpired token with its exact source hash. User-edited or unowned source is never overwritten automatically.

Project Test Adapters are Luau ModuleScripts that expose internal game state for testing. WEPPY-managed adapters are Studio-only by default and live under `ServerStorage`, which is server-only and not replicated to clients. Because their methods check `RunService:IsStudio()` before accessing game code, guarded managed adapters may remain when publishing directly from Studio. This guard prevents live execution; it does not physically remove source. If policy requires source omission, Rojo can omit `ServerStorage.WeppyTestAdapters` from the production tree or add it to `globIgnorePaths`.

## Before Publishing

Open **Before publishing** from the Playtest page header for a read-only explanation of deployment responsibilities. It is available on Basic and Pro without a Studio connection. WEPPY does not scan deployment files, certify safety, remove test code from deployment copies, build production files, or publish to Roblox through this reference.

- Include normal game assets, scripts, and intended game defaults. Registering an existing Attribute or property does not make its owning object test-only.
- Guarded WEPPY-managed adapters may remain under `ServerStorage.WeppyTestAdapters` for direct Studio publishing. Review adapters created with `adapterStudioOnly=false`, user-written adapters whose guard WEPPY cannot verify, test-only objects, debug UI, test Remotes, and hooks added inside normal game modules. Removing a value from a profile does not remove its adapter source.
- Rojo is optional. Publish directly from Studio when guarded managed adapters are the only test source you intend to keep. If an artifact must be physically omitted, preserve the development original and remove it from a separate Studio deployment copy, or configure the Rojo production tree or `globIgnorePaths` to exclude it and inspect the actual output.
- Studio Stop discards Play/Run Instance changes. Adapter source created in Edit remains. Profile defaults and test reports stay in WEPPY's local storage; saving a profile default does not change the game's production default.
- Check the published behavior and confirm the actual Publish target. A normal game module must not depend on a guarded or excluded Test Adapter in live servers.
- Review game code that writes DataStore or external services. Studio Stop does not undo external writes. Places in the same Experience can share DataStore, so a private test Place alone does not isolate production data; use a separate test Experience or a deliberately separate data scope.

## Structured Test Session

For ordinary runtime verification, use `test_session_start`. It defaults to Play mode with one client. The scenario is JSON-compatible data, runs sequential steps, and never carries a Luau function body. Choose Run only for an explicit server-only scenario.

Poll `test_session_status` with the returned `sessionId`. The default page contains at most 20 step entries; `stepLimit` cannot exceed 50. Use the opaque `stepCursor` for the next page. Call `test_session_stop` to cancel a non-terminal session.

For UI interaction checks, wait for the target UI, capture semantic UI structure and geometry, then use VirtualInput. Keep input delivery and `GuiButton.Activated` observation as separate evidence, and verify server effects in a separate server step. Play-mode screenshot capture is not supported, so do not substitute screenshot evidence for semantic UI or interaction evidence.

## Legacy Raw Luau Runner

`manage_studio.run_test` requires `script` and represents the Raw Luau explicit advanced diagnostic opt-in. Optional fields include `mode`, `test_name`, `timeout`, `testProfile`, `restoreAfterTest`, `contextId`, `contextSummary`, and `replayMetadata`.

The runner wraps the user script, emits `[WEPPY_TEST]` log signals, collects `manage_logs` output, stops playtest during cleanup, and stores report artifacts under the active place test directory.

## Screenshot Limitation

`manage_camera.screenshot` is Edit-mode only. If unsure, call `manage_studio.play_status` first and proceed only when the state is edit. Play-mode screenshot capture is not supported in this build.

## Sync Interaction

Play mode suppresses sync updates. Do not start full sync during play mode. After play exits, sync performs post-play reconciliation before normal incremental sync resumes.
