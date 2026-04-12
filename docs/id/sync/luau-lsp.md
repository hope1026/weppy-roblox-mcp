# Menggunakan `luau-lsp` dengan WEPPY Sync

WEPPY Sync bisa membuat file sourcemap yang dibutuhkan `luau-lsp` secara otomatis, jadi kamu bisa menyalakan fitur editor yang paham konteks Roblox tanpa menyiapkan proyek Rojo terpisah.

## File yang ditulis WEPPY

Setelah Full Sync selesai, WEPPY menulis:

- Place sourcemap: `weppy-project-sync/place_<id>/sourcemap.json`
- File perwakilan root: `weppy-project-sync/sourcemap.json`

Untuk kebanyakan user, path yang direkomendasikan adalah `weppy-project-sync/sourcemap.json`.

## Manfaatnya

Saat `luau-lsp` membaca sourcemap dari WEPPY, hal berikut akan membaik:

- Autocomplete `game.*`
- Navigasi antar script yang tersinkron
- Resolusi `require` antar script yang tersinkron

## Setup yang direkomendasikan

1. Jalankan Full Sync sekali agar WEPPY membuat `weppy-project-sync/sourcemap.json`.
2. Arahkan pengaturan sourcemap `luau-lsp` di editor kamu ke `weppy-project-sync/sourcemap.json`.
3. Jika client kamu bisa mematikan autogenerate Rojo, set `luau-lsp.sourcemap.autogenerate` ke `false`.

Contoh pengaturan VSCode:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "weppy-project-sync/sourcemap.json"
}
```

## Catatan Multi-place

`weppy-project-sync/sourcemap.json` mengikuti place perwakilan proyek saat ini.
Kalau kamu butuh place yang tetap, arahkan `luau-lsp` langsung ke `weppy-project-sync/place_<id>/sourcemap.json` milik place tersebut.
