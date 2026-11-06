# UI Studio Reference

Use `manage_ui` for Roblox UI authoring. This reference owns tool execution and evidence handoff. The runtime guide owns the common workflow and current platform guidance; the [game presentation reference](../../weppy-roblox-game-presentation-guide/references/game-ui-patterns.md) explains visual decisions, and the [asset reference](../../weppy-roblox-assets-guide/references/generated-assets.md) covers production image parts.

## Load the relevant context

Read `weppy://ui-studio/guide` before creating or redesigning UI. Use `weppy://ui-studio/tokens` for optional vocabulary and `weppy://ui-studio/functional-rules` to interpret deterministic findings and platform evidence. These are design aids, not prerequisites for a narrow valid mutation or delivery.

Determine whether the request is first creation, quality improvement, a narrow edit, or review only. Infer presentation from the actual screen job, camera, inputs and user choices. For improvement, inspect the UI/controller and distinguish preserved behavior from editable composition. For review only, stop at observations and recommendations. Reuse existing scoped creation or repair authority unless the current request narrows it or explicitly prohibits changes.

Assess existing screens before selecting a method. Use the user's description and observed UI/controller to distinguish temporary, established and unknown screens. Separate behavior/data reuse from layout/style/image reuse. Do not infer completion from visual polish, enabled state or names alone. Briefly explain the recommended approach, with a choice only when an unresolved preference changes the outcome. Clear instructions and delegated decisions can proceed immediately. For `design_brief`, record root-specific evidence in optional `projectContext.work_assessment` and read its returned assessment. See the runtime guide for its fields and treatment of unreviewed images.

Infer unclear scope from project evidence first. For a new screen or set with no review preference, briefly explain the layout-and-parts workflow and offer a draft review or delegated completion. Give a recommendation based on the likely rework. Honor an explicit workflow choice. A requested layout review ends at the draft, and delegated completion continues through implementation, visual refinement and available verification within existing authorization. See the runtime guide for reference and consent handling.

For new UI and visual improvements, always present a short asset recommendation before settling the layout. Give the role, the reason and the source or production route. The user chooses whether to apply it. If the choice is open, include a native UI option. Honor an existing choice or delegation. An empty candidate list or skipped brief still calls for a recommendation from the available evidence. See the runtime guide for authorization boundaries.

For public Roblox assets, use the [Creator Store reference](../../weppy-roblox-assets-guide/references/creator-store.md) to confirm the free listing, asset ID and Studio fit. External free files follow their own usage terms.

Pass game and project evidence through `projectContext`: screen job, content hierarchy, presentation, relevant layout preferences, design tokens, approved assets, and actual target profiles. Explicit user choices take priority. Do not ask the user to fill a new manifest or questionnaire.

Use the [play-pattern examples](../../weppy-roblox-game-presentation-guide/references/game-ui-patterns.md#start-from-the-way-the-game-plays) as starting points. Pass the actual user request in `contextSummary.intent`. In `layout_preferences`, match entries to `surface_roles` using `role` and use `row`, `column`, `radial`, `single` or `free` for `flow_axis`. Explain the actual task, camera or input reason in `rationale` and set `visibility_mode` when a role should be shown only in context or on demand. The Layout Plan returns these choices for the matching role. An example alone is `weppy_fallback`. An observed or requested choice keeps its actual source.

An empty StarterGui does not establish runtime UI absence. When an existing-UI review returns `runtime_review_required`, use a structured Play client `snapshot_gui` from PlayerGui and pass its saved `{recordId,stepId}` as `runtimeEvidenceRef`. For runtime checks, use `observationMode="runtime"`; do not substitute an Edit tree, a copied tree or another Place's evidence.

## Author and refine

1. Consider `manage_ui.design_brief` when context planning helps. It accepts partial context and may be omitted. An explicitly supplied empty, unknown, expired or unreadable `briefId` must be resolved or explicitly omitted; do not silently discard it after an error.
2. Keep an accepted `brief_id`, `design_contract` and `layout_plan` with the operation. `primary_view_first` identifies the representative primary target; the plan is advisory structure, not a fixed style or tree. A partial brief can be adopted or adapted within the request without a new permission gate.
3. Inspect actual callable image tools and the local output channel before declaring `agentCapabilities`; do not infer them from a model or client name. Missing capability uses approved existing assets or an assetless fallback. Concept generation, external reference search and upload follow the runtime guide's separate authorization scopes.
4. Use `manage_ui.create_tree` or `manage_ui.update` within the request. For relevant region roots, optional `layoutMetadata` preserves surface role and placement evidence. A narrow property change can use `editGuard`; source-owned labels, visibility and state require controller inspection.
5. Consider suitable parts while planning the first layout. Use the existing Saved Designs and Asset Library paths for reuse. Check how the actual panel, slot and button surfaces fit the new screen and its states. For a delegated finished set, use preview and scoped updates to address gaps between the working layout and requested look. See the asset reference for image preparation and reuse.
6. Where the task requests or delegates polish, layer controls only as needed and add fitting UI transitions or feedback after basic behavior. Verify rapid interruption, latest state and reduced motion where applicable; use approved audio only. Existing basic state feedback should not be postponed until polish.
7. Preserve the first render before corrections when evaluating creation. For quality improvement, compare the same viewport, camera, content and state. Prefer a focused update over recreating the tree when only one part is wrong.

For a semantic `slot_action`, a single-row layout is an option when it fits real slot semantics, not a requirement. A transparent group root can contain local readable chrome. Keep the painted visual surface distinct from the input target. Placement, responsive sizing and disclosure choices come from the runtime guide rather than a second hardcoded catalog here.

## Observe and report

Use `manage_ui.preview` in Edit mode for a representative primary view when useful. Its sidecar preserves the target, profile and geometry evidence. A still image supports composition review; actual input and state transitions need their own observations. Do not call Edit capture during a Play session.

For optional visual review, the calling agent submits `manage_ui.check` with `visualReview`, the exact saved `snapshotId`, a non-empty summary and `recompose | refine | approved`. The verdict is advisory and cannot expand a review-only or narrow-edit request. Required imagery that is still a placeholder remains an unmet requested outcome. User-selected no-imagery and intentional flat control directions are valid.

Review the reading order, cohesion of icons/type/panels/buttons, finish at actual display size and fit with the world or play situation. Compare with matching camera, viewport, content and state where possible. Record the observed change in the existing summary or findings and keep visual judgment separate from asset provenance, load status and input results.

For concrete before-and-after treatments of badges, text, motion and slice-ready frames, use the runtime guide or the [visual polish study](../../weppy-roblox-game-presentation-guide/references/visual-reference-workflow.md#compare-visual-treatments-at-use-size). Reuse the existing preview and Play paths to check the selected change.

If an asset swap has little visible effect, identify whether the requested change concerns the asset, the panel's silhouette and material, or the screen's hierarchy. Target that scope with `manage_ui.update` and compare the affected surface in the same view. For a panel-only request, verify the established art and input paths against the previous state.

Keep input disabled on decorative layers without disabling containers that host actual buttons. When a visible control fails to activate in Play, check the control, its ancestors' `Interactable` state and overlapping surfaces before rerunning input.

Set `reviewContext` from actual evidence. `interactionStatesReviewed` covers only reviewed hover, focus, pressed, and disclosure states; `gameplayContextReviewed` needs representative gameplay or a reviewable gameplay focal region. Leave unreviewed coverage false. Play semantic snapshots are not Play screenshots; preserve `play_screenshot_unsupported`, partial trees and unavailable backgrounds.

Read these results separately:

- mutation success describes the change;
- `structural_only` means deterministic checks without completed visual review;
- `primary_visual_verdict` and `functional_safe` describe different evidence;
- `responsive_requirement` decides whether missing responsive evidence affects readiness;
- `responsive_ready`, `required_dimensions` and `readiness` preserve observed limits.

Zero findings and image loading do not prove visual quality. `priority_high` applies to observed functional visual failures such as blocked information, unreadable content, invalid geometry or primary-view occlusion. Style-only findings remain medium or low; valid creation or delivery does not depend on a visual approval loop.

Keep observed `platform_ui`, official `platform_guidance`, and AI interpretation distinct. Enabled state or intersecting rectangles alone do not prove blocked input. Unavailable geometry stays unavailable. Do not disable default controls, change a requested placement, add device requirements or prescribe a fixed remedy to clear an advisory finding.

## Encoding and action lookup

Read [the generated action reference](mcp-actions.md) for exact supported parameters and classes.

- A UI root is `ScreenGui`; omitted `parent` means StarterGui. Both `StarterGui.MyGui` and `game.StarterGui.MyGui` are accepted paths.
- `UDim2`: `{xScale,xOffset,yScale,yOffset}`; `UDim`: `{scale,offset}`; Color3: `{r,g,b}`; Vector2: `{x,y}`; enums use item-name strings.
- `AnchorPoint` is the positional pivot. Use layout/constraint classes supported by the current schema, not invented method-based behavior.
- An already readable embedded action text need not be duplicated. Unknown symbols need a touch-visible or focus-visible explanation for the supported inputs.
- Never invent Roblox asset IDs. Use only actual approved IDs and preserve the separate generation/upload scope.

## Static 3D Item Previews

Author a `ViewportFrame` in Edit mode below a `ScreenGui` in `StarterGui`. Add `viewportPreview: {"sourcePath":"ReplicatedStorage.Items.Sword","minAspectRatio":0.8}` to its tree node to show an existing static model. UI Studio owns the camera and model copy. Keep item text and controls as separate native UI. For replacement, pass the new source in `changes.viewportPreview` as the only field in `changes`. Use `{"clear":true}` to empty it. Existing project selection logic can switch between authored frames using `Visible`.

Check the structure and inspect a Studio screenshot at a representative size to confirm rendering. If reopen or reverse Sync leaves an incomplete scene, use the saved source path and fit settings to rebuild it with `update`. See `weppy://ui-studio/guide` for source, hierarchy, fit, and Sync details.
