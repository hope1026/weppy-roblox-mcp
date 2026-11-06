# Creator Store Reference

Use `manage_assets.search` with the requested keyword and category.

- `model` (or omitted) searches free models through the selected Studio connection.
- `decal` searches individual public Creator Store decal listings.
- `image` finds the images linked to matching decal listings. Roblox exposes those images through the decal search. The listing supplies the image result's name, Creator, and price evidence.

The 2D searches return up to `maxResults` candidates, with a default of 10 and a cap of 50. Use the source order by omitting `sortType`. An empty result means no matching items were returned. If lookup fails, report the failure and retry later.

A confirmed free Creator Store listing and asset ID are sufficient evidence for use in a Roblox project. Apply a suitable candidate when the user has requested or delegated selection and application. For files obtained outside the Store, verify the source and terms separately.

For 2D UI, review the candidate's name, Creator, type, source, and `isFree` first. A value of `null` means the listing's free status is unknown. Apply a returned `imageUri` to an authorized `ImageLabel` or `ImageButton` and inspect the rendered UI in the target Studio. `listingAssetId` identifies the decal listing and `imageAssetId` identifies the image used by the URI. If the result lacks an image URI or fails to render, choose another candidate. Search needs no upload.

Use `manage_assets.info` when the user provides an asset ID. Use `manage_assets.insert` for an explicit asset ID or a search result within the user’s requested or delegated scope. Use `manage_assets.search_insert` only when the user accepts automatic first-match insertion. Use `manage_assets.insert_free` for a verified free model and `manage_assets.insert_package` for a verified package. Confirm the type, target parent, and resulting Studio path.

When reusing UI visuals from a model, keep the needed visuals and leave bundled scripts unrun.
