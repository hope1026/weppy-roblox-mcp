# Use `luau-lsp` with WROX Sync

WROX Sync can generate the sourcemap files that `luau-lsp` needs, so you can enable Roblox-aware editor features without setting up a separate Rojo project.

## What WROX writes

After Full Sync finishes, WROX writes:

- Place sourcemap: `wrox-project-sync/place_<id>/sourcemap.json`
- Root representative file: `wrox-project-sync/sourcemap.json`

For most users, the recommended path is `wrox-project-sync/sourcemap.json`.

## Why this helps

Pointing `luau-lsp` at the WROX sourcemap improves:

- `game.*` autocomplete
- Navigation across synced scripts
- `require` resolution between synced scripts

## Recommended setup

1. Run Full Sync once so WROX creates `wrox-project-sync/sourcemap.json`.
2. Point your editor's `luau-lsp` sourcemap setting to `wrox-project-sync/sourcemap.json`.
3. If your client can disable automatic Rojo generation, set `luau-lsp.sourcemap.autogenerate` to `false`.

Example VSCode settings:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "wrox-project-sync/sourcemap.json"
}
```

## Multi-place note

`wrox-project-sync/sourcemap.json` follows the current representative place for the project.
If you need a fixed place instead, point `luau-lsp` directly to that place's `wrox-project-sync/place_<id>/sourcemap.json`.
