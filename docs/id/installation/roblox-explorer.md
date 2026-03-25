# Weppy Roblox Explorer (Ekstensi VSCode)

Tampilan pohon instansi seperti Explorer Roblox Studio, langsung di VSCode. Jelajahi instansi yang tersinkronisasi, buka skrip langsung, dan pantau status sinkronisasi tanpa meninggalkan editor.
Ini adalah ekstensi pendamping untuk Weppy Roblox MCP, bukan integrasi Roblox yang berdiri sendiri.

![Weppy Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Persyaratan

- VSCode 1.85+
- [Roblox MCP](../../../README.md) sudah terpasang dengan Sync aktif (Basic atau Pro)
- `roblox-project-sync/place_*/.sync-meta.json` sudah dihasilkan oleh Sync

## Cara Instalasi

Cari **Weppy Roblox Explorer** di sidebar Ekstensi VSCode (`Ctrl+Shift+X` / `Cmd+Shift+X`) dan klik **Install**.

Atau instal langsung dari marketplace berikut:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

Penjelajahan tree dasar bekerja dari file sync di disk. Status sync live, indikator direction, dan pengiriman telemetri Explorer tersedia saat server MCP lokal dapat dijangkau.

## Fitur

- **Pohon instansi**: Hierarki layanan/instansi yang identik dengan Roblox Studio
- **Ikon kelas Roblox**: Lebih dari 200 ikon dengan dukungan tema gelap/terang
- **Multi-Place**: Akar pohon terpisah per Place yang tersinkronisasi
- **Buka dengan klik**: Buka file pendukung (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`)
- **Pencarian instansi**: Pencarian QuickPick di semua layanan
- **Badge status Sync**: Lihat status `modified`, `studio`, `conflict` sekilas
- **Pembaruan otomatis**: Pohon diperbarui otomatis saat file Sync berubah (debounce 500ms)
- **Salin jalur instansi**: Klik kanan untuk menyalin jalur format `game.Workspace.Part`

## Pengaturan

| Pengaturan | Default | Deskripsi |
|------------|---------|-----------|
| `robloxExplorer.syncRoot` | `""` | Jalur absolut ke root `roblox-project-sync`. Terdeteksi otomatis jika kosong. |
| `robloxExplorer.hidePropsFiles` | `false` | Sembunyikan file Sync (`.props.json`, `_tree.json`, `.value.json`) di explorer VSCode default. |
| `robloxExplorer.autoRefresh` | `true` | Perbarui pohon otomatis saat file Sync berubah. |
| `robloxExplorer.showSyncStatus` | `true` | Tampilkan dekorasi status Sync pada item pohon. |

## Perintah

| Perintah | Deskripsi |
|----------|-----------|
| `Weppy Roblox Explorer: Refresh` | Perbarui pohon instansi secara manual |
| `Weppy Roblox Explorer: Search Instances` | Cari instansi di semua layanan |
| `Weppy Roblox Explorer: Open Backing File` | Buka file pendukung instansi yang dipilih |
| `Weppy Roblox Explorer: Copy Instance Path` | Salin jalur instansi lengkap (contoh: `game.Workspace.Part`) |
| `Weppy Roblox Explorer: Reveal in Explorer` | Tampilkan file di explorer VSCode default |

## Terkait

- [Panduan Detail Sync](../sync/overview.md)
- [Panduan Instalasi](README.md)
