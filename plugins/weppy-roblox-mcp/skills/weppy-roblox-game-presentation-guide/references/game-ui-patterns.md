# Game UI Patterns

Use the patterns that help this game's decisions. They are not a list of elements to add or rules to enforce. An opaque HUD, central menu, plain text interface, or unusual composition can be intentional.

## Compose around the player's decision

Identify what the screen lets the player do or understand. A comparison can put the item and changes first; an equipment view can relate slots to the avatar; a crafting view can connect a recipe, ingredients, and result; a farming interaction can stay near the crop. These are possibilities, not genre templates. A text-heavy strategy game may benefit from a table.

Consider what can be read at a glance during play and what merits focused reading. Avoid giving every label, panel, and button equal visual emphasis by habit. Repeated rectangles or web-like styling are not errors by themselves; judge whether their hierarchy serves this screen. Art and a large title do not substitute for a clear next action.

## Adapt size and placement to the player

Judge size from the available UI area, safe areas, content, input mode, and the player's text-size preferences. Resolution or a viewport classification alone does not establish comfortable physical size. Read `weppy://ui-studio/guide` through the [UI Studio reference](../../weppy-roblox-mcp-guide/references/ui-studio.md) for current sizing, accessibility, platform controls, and evidence guidance; do not duplicate its official catalog or assume fixed reserved coordinates.

For a modest resize within the same orientation, a suitable existing position, grouping, and control order can remain while size and spacing adapt. Avoid shrinking critical text or targets until they become difficult to read or operate. If collision, overflow, or reach problems remain, consider reorganizing within the region or moving the affected group. These are judgment options, not a required sequence. Portrait and landscape can use different groupings, flows, and positions; shared structure is not a priority. Preserve the meaning and recognition of actions, and retain selection, scroll, and input state when practical.

Distinguish painted icon size, text size, and hit-area size; assess the effective target after scaling. Different elements need not share one scale. Larger text may need wrapping, automatic sizing, or an expanding panel rather than uniform shrink-to-fit behavior. Use the runtime guide to check how the chosen text properties interact with player preferences. A static image or edit clone can reveal geometry issues, but does not verify runtime-script adaptation; neither alone establishes comfort on a physical device. Report the actual review source and state coverage.

## Reveal detail when it helps the decision

Choose information priority from the screen's purpose, frequency of use, and information the player must judge together. Progressive disclosure can keep essential status and common actions visible while offering a clear route to secondary detail or rare choices. It can also add unnecessary steps: preserve frequent combat controls, side-by-side comparisons, and price, cost, or consequence needed before an action. A multi-row control group or dense comparison can serve the task better than hiding content.

For a game that already offers goal recommendations, highlighting a useful next goal is one option; it is not a universal one-item rule. If players can select or pin goals, consider preserving that choice instead of replacing it with an automatic recommendation. Do not create goal selection, pinning, or another game system merely to use this example. Make disclosure discoverable for the supported inputs, and preserve relevant state when details open or close.

## Align the painted icon, not just its rectangle

Equal image dimensions can contain very different painted bounds. Transparent padding, a diagonal weapon, or an off-center silhouette can make nominally aligned icons look uneven. Compare optical centers, occupied area, baseline, and neighboring label spacing at their actual display size. An inset or crop adjustment can help without stretching the subject. Keep repeated roles consistent while allowing deliberate emphasis.

Separate the painted icon from its hit area. A small visible symbol can have a larger touch target if neighboring targets remain distinguishable. Native symbols and approved glyphs can be enough; ambiguous emoji or arbitrary Unicode may render differently and are poor substitutes for verified game icons.

## Choose surfaces for the viewing context

For persistent HUD information, a transparent group with small local backplates often preserves the world. For detailed reading or comparison, a more opaque surface can help. Use background transparency independently from text, icon, and gauge transparency; fading an entire group can make essential information disappear.

Look at bright and dark areas or busy scenery when available. Outlines, a localized shadow, a quieter background, typography, or a different surface can help. There is no recommended universal opacity or screen-occupancy percentage. Preserve an explicitly requested opaque or fullscreen design.

Place controls using viewing priorities, frequency, camera focus, and the actual input setup. Keep equivalent actions recognizable within the project, with placement suited to each device. Use the current UI Studio guide for Roblox controls, safe areas, and observation limitations. A desktop layout need not be shrunk unchanged onto a touch screen.

## Make grades and simultaneous states legible

If the game has rarity or grades, help players distinguish them at inventory scale. Possible channels include a background treatment, frame profile, motif, grade name, emblem, material, or controlled accent. A barely different border may be insufficient for the desired emphasis. More valuable items can look more special without making every item glow or prescribing a color ladder.

Consider combined states, not only isolated examples. A legendary item may also be equipped, selected, and temporarily unavailable. One possible allocation is grade on the background/emblem, selection on a focus outline, equipped status on a labelled badge, and unavailability on the action with a reason. Another style can allocate them differently. Try to avoid one state overwriting or obscuring the others; dimming everything may erase grade and selection information.

Color can reinforce meaning alongside readable labels, symbols, shape, or texture. A category, rarity, beneficial change, and selected state need not compete for the same accent. See the optional [annotated examples](visual-reference-workflow.md#original-comparison-examples) for different treatments of the same decision.

## Compare the consequence, not just the sign

Show the comparison baseline: currently equipped, base value, or proposed upgrade. Use units and enough context to distinguish the final value from the delta. Classify improvement from the stat's meaning: attack increasing may help, cooldown decreasing may help, and an unknown or tradeoff stat can remain neutral.

For example, `Cooldown 3.0s → 2.4s (−0.6s)` can use the project's beneficial treatment even though the number decreases. A positive sign alone is not evidence of improvement. Use a sign, direction, label, or wording in addition to color when helpful. Preserve the game's intended uncertainty and actual formulas; presentation changes do not authorize balance changes.

## Help distinguish tabs, choices, and actions

When controls look interchangeable and their roles are unclear, consider what each does before choosing its treatment. These patterns can help:

| Role | Behavior | Possible cues |
| --- | --- | --- |
| Content tab | Switches the visible content panel, such as Equipment / Materials | A shared tab row near the panel, an underline or connected surface for the active tab |
| Single choice | Selects one value from a group, such as Normal / Hard difficulty | A shared group label or container, a radio mark, check, or persistent selected segment |
| Action button | Performs an action, such as Start / Buy / Equip | A distinct action area, a verb label, and feedback that reflects the actual result |

Grouping, shape, spacing, and wording can reinforce color. A persistent selection marker can remain after the pointer leaves, while hover, input focus, and pressed feedback describe the current interaction. With gamepad input, focus may be on one option while another remains selected. A selected option is not necessarily unavailable.

Reuse the game's visual language when these roles are already clear; shared shapes or colors can work. These are optional ways to resolve confusion, not required styles or a reason to redesign unrelated controls. Preserve explicit user choices, and do not turn the suggestions into a creation or completion gate.

When reviewing an affected screen, it can help to ask whether the player can identify the current panel or value and predict which control will execute an action. Where practical, try a selection change and move focus away to inspect persistent and transient feedback. This is an optional review technique; a still image alone does not verify the behavior.

## Give control states distinct meanings

Useful states may include resting, focus, pressed, selected, equipped, locked, insufficient resources, pending, failed, and complete. Apply only states that exist. A selected tab is different from a disabled action; maximum level is different from missing materials.

For unavailable actions, consider a visible reason or a touch/focus-accessible explanation with the player's next option. An explanation affordance can remain available while execution is disabled. Hover alone will not serve every input. Keep pending feedback consistent with actual requests and avoid implying success before the authoritative result. An empty inventory can offer a relevant next step; loading or error states need not look like an empty inventory.

When a dialog closes, retaining selection, scroll, and input focus often helps continuity. Discoverability can come from text, imagery, or contextual explanation; labels are not decoration to remove merely for a cleaner screenshot. Consider both new-player and progressed states without manufacturing a progression system.

## Reuse a small project vocabulary

When several screens share the same meaning, reuse appropriate text roles, spacing, icon treatment, and state rendering rather than independently choosing each screen's colors. Existing style modules or tokens are useful when present. Record a correction's scope before propagating it: a transparent combat HUD preference need not apply to a reading panel, and a single screen's exception need not redefine the whole game.

Observation can reveal an improvement opportunity; it does not obligate the user to accept a design change. Report untested interaction, background, or device coverage honestly.
