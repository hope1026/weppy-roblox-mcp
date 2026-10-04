# UI Studio Reference

Use UI Studio for Roblox `StarterGui` work instead of hand-rolling many GUI mutations.

## Runtime Resources

Before creating or redesigning UI, read `weppy://ui-studio/guide`. Read `weppy://ui-studio/tokens` for optional palette, spacing, typography, motion, imagery, and composition examples. Read `weppy://ui-studio/functional-rules` when interpreting deterministic findings, evidence fields, profile context, and non-finding boundaries. Treat these runtime resources as the current guidance; use this reference for optional authoring steps and technical execution boundaries. For role-specific UX and optical alignment, see the available [game presentation guide](../../weppy-roblox-game-presentation-guide/SKILL.md).

## Scope and Platform Guidance

First identify whether the user wants a review, creation, or repair. A review-only request authorizes inspection and recommendations, not GUI mutations. Existing authorization to create or fix the relevant UI is sufficient for scoped changes and revalidation; do not ask for the same permission again. A finding does not authorize changing unrelated UI, disabling default controls, or overriding a requested placement.

Infer supported devices, input modes, default or custom controls, and relevant UI states from the request and project before asking for missing information. Read runtime guidance and the current observation; do not copy fixed coordinates, margins, or a separate Roblox guidance catalog into this skill.

When platform UI or safe-area evidence matters, separate:

- **Observed facts:** what `platform_ui` and finding `evidence` actually measured, including profile/state and unavailable observations. Enabled, visible/open, and occupied bounds are different facts. Geometry overlap alone does not prove blocked input.
- **Official guidance:** applicable `platform_guidance`, its `constraint | recommendation` kind, source section, checked date, and the finding's `guidance_refs`. Recommendations do not become hard requirements, and WEPPY defaults are not Roblox rules.
- **AI interpretation:** explain likely implications and suitable options conditionally, preserving the requested design and scope. Describe tradeoffs when useful; do not prescribe one remedy, a fixed adjustment, or a mandatory number of alternatives.

For example, observed rectangles may overlap while input interference is still untested. Report those separately, explain the applicable official guidance, and offer a context-dependent option if it helps. If the user requested only a review, stop there. If the same user already requested repairs, make suitable scoped changes and recheck the affected states. If the user wants the placement retained, respect that choice and disclose the observed risk.

Use relevant observations for the declared targets; do not automatically require Play or additional device states for every task. Before runtime observation is available, guidance can inform an authorized creation as conditional design context. Preserve estimated/unavailable geometry and missing required-state evidence. If an official source cannot be refreshed, disclose the stored check date and limitations instead of inventing current guidance. A web lookup on every request is not required.

## Suggested Workflow

1. Read the governing UI/game spec, project UI manifest, token source, and approved asset manifest. Build visual direction from explicit user intent plus game and project evidence. Pass relevant evidence in `projectContext`; do not ask the Studio plugin to guess repository facts.
2. Consider `manage_ui.design_brief` when context planning helps. It accepts no brief, a partial brief, or a complete brief. Creation and update can omit `briefId`; a supplied invalid reference is an error, not permission to silently discard context.
   Keep the accepted `brief_id`, `design_contract`, and advisory `layout_plan` through create, update, preview, and check. The contract uses `quality_priority=primary_view_first`, identifies the primary profile, and records whether responsive review is recommended or required. Treat role, placement, flow, surface, avoid-region, wrap, region anchors, and responsive behaviors as evidence-backed guidance, not a hard tree preset. An explicit user layout choice outranks project evidence, existing UI, and WEPPY fallback. For an existing target, follow the analysis-first redesign or targeted-update scope returned by `design_brief`.
   An empty `StarterGui` does not prove that the game has no UI. For an existing-UI review, follow `runtime_review_required`: run a structured Play client observation, save a `PlayerGui` `snapshot_gui` step, and pass its `{recordId,stepId}` as `runtimeEvidenceRef`. Do not move into palette or style questions until the existing runtime surface is identified.
3. Inspect callable image tools and the local output channel, then pass provider-neutral `agentCapabilities`. Do not infer support from a model or client name, and never include provider credentials in evidence.
4. If the response is `brief_incomplete`, adopt or adapt a useful recommendation within the request, or proceed without a brief. Questions are optional; ask only when the missing choice materially changes the outcome. Do not dump enum lists at the user. The recommendation is non-blocking and can be accepted, edited, skipped, or replaced.
5. For asset recommendations with status `recommended`, follow the applicable asset authorization and any approval already given; do not invent another design-approval step. A `project_asset` candidate outranks an existing UI asset and Creator Store search. If `imagery_strategy.intent=required`, a placeholder keeps primary visual approval ineligible until a concrete role asset is resolved. If `asset_generation_proposal` is unavailable or unknown, continue with its existing-asset or assetless fallback and report required imagery as unresolved.
6. When generated imagery fits the request, use the existing authorization for local generation or ask only for missing permission. Roblox upload is a separate scope: check authorization for the actual files, count, and target Creator. A recommendation itself does not require another approval or obligate image use.
7. For authorized creation or repair, create new UI with `manage_ui.create_tree` or update existing UI with `manage_ui.update`.
   For meaningful region roots, pass optional `layoutMetadata` with the `surfaceRole`, `placementBand`, `surfaceMode`, and `decisionSource` returned by the Layout Plan.
8. When useful and available, use `manage_ui.preview` after creation or meaningful changes. Inspect the representative primary-view screenshot against the reference evidence and Design Contract.
9. For an optional review, use `manage_ui.check`. The calling agent submits `visualReview` with the exact saved `snapshotId`, a non-empty critic summary, and one verdict: `recompose | refine | approved`. The verdict recommends recomposition or refinement, or records an observed approval; it does not require the user to accept a restyle. Claim approval only for reviewed evidence and resolve required imagery only when it is part of the user's requested outcome. Repeat create/update → preview → critic only within the authorized creation or repair scope. End when the requested outcome is met, the user chooses to retain the design, or an unresolved dependency prevents verification; preserve remaining findings. A review-only request ends with the critic explanation and recommendations.
   Set `reviewContext.interactionStatesReviewed=true` when the reviewed evidence covers the required hover, focus, pressed, and disclosure states. Set `reviewContext.gameplayContextReviewed=true` only when the evidence includes representative gameplay or a reviewable gameplay focal region from the Design Contract. Leave either value false when that evidence is missing and report the matching `skipped_reasons`.
   For a runtime structural review, use `observationMode=runtime` with the validated `runtimeEvidenceRef`. A semantic PlayerGui snapshot does not count as a Play screenshot. Preserve `play_screenshot_unsupported`, `background_unverified`, truncated tree, and missing required-state evidence.
10. Read `primary_visual_verdict`, `functional_safe`, `responsive_requirement`, `responsive_ready`, `required_dimensions`, and `readiness` separately from mutation success. Primary visual and functional safety evidence are required for a full quality approval; this does not authorize changes or block valid mutations. Responsive evidence blocks readiness only when `responsive_requirement=required`; recommended responsive work remains visible without blocking an otherwise approved primary UI.
    `structural_only` means visual hierarchy and identity were not fully reviewed; do not call zero findings a complete visual pass when `visual_status` is `not_requested` or `skipped`.
    Preserve the preview sidecar's AnchorPoint, UDim2, constraints, target profile, simulator result, and Design Check context when reviewing responsive evidence.
11. Treat every UI quality finding as advisory. `priority_high` is reserved for observed functional failures such as unreadable content, meaningful overlap, invalid visual geometry, or primary-view occlusion. Style-only hierarchy and identity findings stay medium or low. Technical schema and safety gates can fail a request, but quality findings do not block UI creation or updates.

Briefs, layout suggestions, previews, and critic verdicts are optional design aids. A user may retain a design or skip review without blocking valid mutations or delivery. Preserve unreviewed coverage and unresolved user requirements rather than changing them to approved.

## Tree Encoding

- Root should be `ScreenGui`.
- Omit `parent` to place under `StarterGui`.
- `targetPath` accepts both `StarterGui.MyGui` and `game.StarterGui.MyGui`.
- `UDim2`: `{xScale, xOffset, yScale, yOffset}`
- `UDim`: `{scale, offset}`
- `Color3`: `{r, g, b}`
- Enum values: item name string.
- Modern tree classes include `UIScale`, `UIFlexItem`, `UIShadow`, `UIPageLayout`, `UITableLayout`, `CanvasGroup`, and `UIDragDetector`.

## Contextual Recommendations

- Keep primary text readable and primary controls touchable.
- A transparent interaction target can contain a smaller painted visual surface. Measure spacing between hit areas, keep the visible affordance recognizable, and collapse secondary mobile actions instead of inflating every painted button.
- A readable, localized word embedded in an icon asset can serve as its visible label; do not duplicate embedded action text with adjacent text. Otherwise give ambiguous controls a touch-visible, focus-visible, or contextual explanation path.
- Distinguish action controls from status and data surfaces through role, affordance, and state feedback. Choose one interaction family that fits the brief. Intentional flat controls are valid when their action role and input states remain clear.
- Keep bounded non-modal surfaces away from the gameplay focal region with edge placement, condensation, or contextual hiding. Do not enforce one screen-occupancy percentage.
- Consider a transparent group root for non-modal HUD regions and keep opaque chrome within the local bounds of readable controls or information. Contract-backed modal, fullscreen, and diegetic presentations may use a backdrop.
- One possible arrangement maps `persistent_status` and `resource_display` to compact top-edge regions, `navigation` to a side rail or top edge, `slot_action` to a bottom-center single-row flow only for real slot semantics, `contextual_action` to a transient lower-center or target-relative control, and `objective_tracker` to a collapsible side-edge group.
- For touch profiles, interpret reserved-region advice through the runtime platform guidance and available evidence. Preserve explicit user placement or surface choices; label estimated risks and report confirmed functional failures only when observed.
- Account for Roblox safe-area properties such as `ScreenInsets`, `IgnoreGuiInset`, `ClipToDeviceSafeArea`, `SafeAreaCompatibility`, `UIScale`, `UIAspectRatioConstraint`, `UISizeConstraint`, and `UITextSizeConstraint`.
- Do not enforce one visual style. Minimal, ornate, retro, cute, horror, simulator-like, flat, immersive, or no-imagery UI can all be valid when coherent with the brief.
- Do not invent asset IDs. Use user-provided references or accepted asset search results.
