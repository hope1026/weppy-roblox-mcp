# Menggunakan `luau-lsp` dengan WROX Sync

WROX Sync bisa membuat file sourcemap yang dibutuhkan `luau-lsp` secara otomatis, jadi kamu bisa menyalakan fitur editor yang paham konteks Roblox tanpa menyiapkan proyek Rojo terpisah.

## File yang ditulis WROX

Setelah Full Sync selesai, WROX menulis:

- Place sourcemap: `wrox-project-sync/place_<id>/sourcemap.json`
- File perwakilan root: `wrox-project-sync/sourcemap.json`

Untuk kebanyakan user, path yang direkomendasikan adalah `wrox-project-sync/sourcemap.json`.

## Manfaatnya

Saat `luau-lsp` membaca sourcemap dari WROX, hal berikut akan membaik:

- Autocomplete `game.*`
- Navigasi antar script yang tersinkron
- Resolusi `require` antar script yang tersinkron

## Setup yang direkomendasikan

1. Jalankan Full Sync sekali agar WROX membuat `wrox-project-sync/sourcemap.json`.
2. Arahkan pengaturan sourcemap `luau-lsp` di editor kamu ke `wrox-project-sync/sourcemap.json`.
3. Jika client kamu bisa mematikan autogenerate Rojo, set `luau-lsp.sourcemap.autogenerate` ke `false`.

Contoh pengaturan VSCode:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "wrox-project-sync/sourcemap.json"
}
```

## Catatan Multi-place

`wrox-project-sync/sourcemap.json` mengikuti place perwakilan proyek saat ini.
Kalau kamu butuh place yang tetap, arahkan `luau-lsp` langsung ke `wrox-project-sync/place_<id>/sourcemap.json` milik place tersebut.
