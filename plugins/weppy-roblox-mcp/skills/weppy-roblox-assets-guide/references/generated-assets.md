# Generated Assets Reference

For AI-generated image files, first confirm that the calling agent has both a callable image generation tool and a local image output channel. Do not infer this capability from a model or client name. If either capability is unavailable or remains unknown, use a user reference, reviewed project asset, Creator Store candidate, or assetless fallback.

Local image generation and Roblox upload have separate approval scopes. Reuse authorization already granted for the relevant operation instead of asking again because this guide was loaded. Present local outputs when useful; before remote mutation, run upload preflight and obtain only missing authorization covering selected files, asset count, and target Creator. Generation authorization alone does not grant upload authority. Imagery itself is an optional design choice unless the user requested it.

For optional UI concept exploration, an ordinary UI creation request or available generation tool is not permission to generate a concept. First establish interest and the selected method unless the user already requested it; follow the [visual reference workflow](../../weppy-roblox-game-presentation-guide/references/visual-reference-workflow.md). Do not repeat declined offers or treat an unanswered offer as consent. Supplied references and project assets remain usable within the request. Keep a generated concept distinct from a functioning Studio interface, production art parts, and verification evidence.

After generation is authorized, save a supported local image. Upload only with authorization covering that upload, using Studio-local or Open Cloud according to the requested owner and workflow. Concept-generation consent alone does not authorize this step. `manage_open_cloud_assets.upload` registers its stable local copy in the selected Asset Library scope. Use `manage_open_cloud_assets.link` instead when the image already has a Roblox asset ID.

For Roblox model generation:

1. Call `manage_assets.generate_model` with a prompt, schema mode, target parent, and review policy.
2. Treat the result as a Studio model path, not an Asset Library item or remote Roblox asset.
3. Run `manage_assets.review_model` when the model must be checked or registered locally.
4. Ask before any temporary embedded-resource upload or remote upload.
5. Verify the model path, bounds or review result, generated textures, and any returned Roblox asset IDs.

Do not invent image, mesh, texture, or model asset IDs.

## Optional game UI art parts

When imagery helps identity or recognition, consider reusable icon subjects, button surfaces, frames, decorations, and backdrops. Keep changing names, values, states, and input behavior in native UI. A whole-screen picture is a concept image, not a functioning interface. Existing imagery and intentional native shape/text designs are equally valid; generation and slicing are not prerequisites.

For an expandable frame, 9-slice can preserve corners while stretching suitable edges and the center. Inspect the actual source image to choose `SliceCenter`; `ScaleType = Slice` and `SliceScale` serve the selected geometry, not a universal preset. Atlas cropping (`ImageRectOffset`/`ImageRectSize`) selects an image region and is a separate decision from slicing. Coordinate choices should match the actual texture and crop. Check small and large display sizes when practical rather than copying source-pixel assumptions.

A useful assembly separates stretchable framing from a non-stretching emblem, icon, or illustrated backdrop. Preserve icon/portrait aspect ratio; select fit versus intentional crop from what must remain visible. Compare painted bounds and transparent padding for optical alignment. Frame art can overlay a full background when cropping would remove important details.

Related parts can share line weight, lighting direction, material treatment, and state language without being identical. Compose rarity, selection, equipped, unavailable, and pending states so one does not erase the others. Reusing a native tint or overlay may work better than generating a separate image for every state. Record reusable crop/slice choices in existing asset metadata if useful; no new manifest is required.

See the available [game presentation guide](../../weppy-roblox-game-presentation-guide/SKILL.md) for contextual UI and world relationships. Respect authorization already present; do not repeat an approval merely because this reference was loaded. Local generation and remote upload remain distinct scopes.
