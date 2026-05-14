# UI Studio Reference

Use UI Studio for Roblox `StarterGui` work instead of hand-rolling many GUI mutations.

## Product Loop

1. Start with `manage_ui.design_brief`. It may accept no brief, a partial brief, or a complete brief.
2. If the response is `brief_incomplete`, use its recommendation or next question to fill missing intent. Do not dump enum lists at the user.
3. If asset recommendations are returned with status `recommended`, ask the user before using them.
4. Create new UI with `manage_ui.create_tree` or update existing UI with `manage_ui.update`.
5. Run `manage_ui.preview` after creation or meaningful changes.
6. Run `manage_ui.check`. Use `includeVisualAnalysis=true` only when a saved preview should be inspected visually.
7. Treat Design Check output as suggestions. Auto-fix high-priority usability issues only when the fix is clear.

## Tree Encoding

- Root should be `ScreenGui`.
- Omit `parent` to place under `StarterGui`.
- `targetPath` accepts both `StarterGui.MyGui` and `game.StarterGui.MyGui`.
- `UDim2`: `{xScale, xOffset, yScale, yOffset}`
- `UDim`: `{scale, offset}`
- `Color3`: `{r, g, b}`
- Enum values: item name string.

## Quality Rules

- Keep primary text readable and primary controls touchable.
- Account for Roblox safe-area properties such as `ScreenInsets`, `IgnoreGuiInset`, `ClipToDeviceSafeArea`, `SafeAreaCompatibility`, `UIScale`, `UIAspectRatioConstraint`, `UISizeConstraint`, and `UITextSizeConstraint`.
- Do not enforce one visual style. Minimal, ornate, retro, cute, horror, simulator-like, flat, immersive, or no-imagery UI can all be valid when coherent with the brief.
- Do not invent asset IDs. Use user-provided references or accepted asset search results.
