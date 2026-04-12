# Panduan Lengkap WEPPY Roblox Explorer

**WEPPY Roblox Explorer** adalah ekstensi pendamping VSCode / Antigravity yang menampilkan tree Explorer dari Roblox Studio langsung di editor kamu. Jelajahi instance yang tersinkron, buka script, dan edit property tanpa harus bolak-balik antara Studio dan editor.

> **Opsional** — Explorer bukan kewajiban. Server MCP dan plugin Roblox Studio sudah cukup untuk semua fitur inti. Instal Explorer jika kamu ingin menjelajahi struktur project atau memeriksa dan mengedit property langsung dari editor.

![WEPPY Roblox Explorer — tree instance Studio tampil di sidebar VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Kenapa pakai Explorer

Agen AI sudah bisa memahami konteks project secara penuh dari file yang dihasilkan Sync, tapi saat manusia menjelajah mirror secara langsung, path file saja belum tentu memperlihatkan hierarki dengan jelas. Explorer memakai ulang data sync yang sama dan menyajikannya dalam **tree yang sama persis seperti di Roblox Studio**, sehingga hal berikut jadi jauh lebih mudah:

- Melihat sekaligus script itu berada di service / instance mana
- Menemukan instance lintas service berdasarkan nama atau path dengan cepat
- Memeriksa status sync per file (modified / studio / conflict)
- Mengedit property tanpa membuka Studio

## Persyaratan

- VSCode 1.85+ atau Antigravity
- [Roblox MCP](../installation/README.md) sudah terpasang dengan Sync aktif (Basic atau Pro)
- File `weppy-project-sync/place_*/.sync-meta.json` hasil Sync berada di root project

Explorer secara default bekerja hanya dengan file sync di disk. Jika server MCP lokal sedang berjalan, status sync live dan informasi direction ikut direfleksikan.

## Cara instal

Cari **WEPPY Roblox Explorer** di sidebar Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`) pada VSCode atau Antigravity lalu klik **Install**.

Link marketplace langsung:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

## Menjelajahi tree instance

Setelah instal, tampilan **WEPPY Explorer** akan muncul di Activity Bar VSCode dan secara otomatis menemukan direktori sync dari root project.

- **Akar service**: Service yang tersinkron seperti `Workspace`, `ReplicatedStorage`, dan `ServerScriptService` ditampilkan di level atas.
- **Ikon kelas Roblox**: Lebih dari 200 ikon bergaya Studio yang otomatis menyesuaikan antara tema gelap dan terang.
- **Multi Place**: Setiap Place yang tersinkron ditampilkan sebagai root tree terpisah ketika ada beberapa place.
- **Auto refresh**: Tree diperbarui dengan debounce 500ms setiap kali file sync berubah.
- **Badge status sync**: Status `modified`, `studio`, dan `conflict` muncul di samping ikon supaya perubahan dan konflik langsung terlihat.

Meng-klik item di tree akan membuka file yang menopang instance tersebut (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`, ...). Menu klik-kanan memungkinkan menyalin path instance dalam format `game.Workspace.Part` atau menampilkan file di explorer bawaan VSCode.

## Property Panel

Pilih sebuah instance di tree Explorer lalu jalankan perintah **Open Properties** untuk membuka panel yang mirip jendela Properties pada Studio. Kamu bisa melihat dan mengedit property dalam bentuk berkelompok tanpa menyentuh file `.props.json` secara langsung.

![Property Panel — edit property bergaya Studio di dalam VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-property-window.png)

- **Tampilan berkelompok**: Property diurutkan dalam grup yang sama seperti di Studio (Appearance, Behavior, Data, Part, Transform, dan lain-lain).
- **Editor sesuai tipe**: Widget input menyesuaikan dengan tipe property — angka, string, boolean, warna, Vector3, enum, dan lainnya.
- **Editing berbasis file**: Perubahan disimpan ke file `*.props.json` milik instance dan mengalir kembali ke Studio lewat jalur reverse Sync (Pro, saat bidirectional aktif).
- **Custom editor**: Membuka file `.props.json` secara langsung akan memakai Property Panel alih-alih editor teks bawaan.

Kalau mau Property Panel terbuka otomatis saat kamu memilih instance di tree, ubah `robloxExplorer.propertyPanel.autoOpen` menjadi `true` di pengaturan.

## Pencarian instance

Jalankan perintah `WEPPY Explorer: Search Instances` (dari ikon judul view atau Command Palette) untuk membuka QuickPick yang mencari di seluruh service tersinkron.

- Pencocokan sebagian terhadap nama instance
- Memilih hasil akan memfokuskan tree ke item yang sesuai
- Ketika beberapa place tersinkron, hasil dibatasi per place

## Pengaturan

| Pengaturan | Default | Deskripsi |
|------------|---------|-----------|
| `robloxExplorer.mcpBaseUrl` | `""` | URL HTTP base MCP lokal. Kosong berarti Explorer mencoba `http://127.0.0.1:3002` lalu `http://127.0.0.1:3003`. |
| `robloxExplorer.syncRoot` | `""` | Path absolut ke root `weppy-project-sync`. Dideteksi otomatis dari folder workspace saat kosong. |
| `robloxExplorer.hidePropsFiles` | `false` | Sembunyikan file sync (`.props.json`, `_tree.json`, `.value.json`) di explorer bawaan VSCode. |
| `robloxExplorer.autoRefresh` | `true` | Perbarui tree otomatis saat file sync berubah. |
| `robloxExplorer.showSyncStatus` | `true` | Tampilkan dekorasi status sync di item tree. |
| `robloxExplorer.followFocusCue` | `false` | Ikuti file focus cue eksternal untuk membuka tree dan file terkait. |
| `robloxExplorer.propertyPanel.autoOpen` | `false` | Buka Property Panel otomatis ketika memilih instance di tree. |

## Perintah

| Perintah | Deskripsi |
|----------|-----------|
| `WEPPY Explorer: Refresh` | Segarkan tree instance secara manual |
| `WEPPY Explorer: Search Instances` | Cari instance di seluruh service |
| `WEPPY Explorer: Open Backing File` | Buka file pendukung dari instance terpilih |
| `WEPPY Explorer: Open Properties` | Buka Property Panel untuk instance terpilih |
| `WEPPY Explorer: Copy Instance Path` | Salin path instance lengkap (mis. `game.Workspace.Part`) |
| `WEPPY Explorer: Reveal in Explorer` | Tampilkan file di explorer bawaan VSCode |
| `WEPPY Explorer: Collapse All` | Tutup semua node pada tree |
| `WEPPY Explorer: Open Settings` | Buka halaman pengaturan Explorer |

## Pemecahan masalah

- **Tree kosong**: Pastikan direktori `weppy-project-sync/place_*` ada dan Sync sudah menyelesaikan minimal satu Full Sync. Atur `robloxExplorer.syncRoot` secara manual bila perlu.
- **Status sync tidak muncul**: Pastikan server MCP lokal sedang berjalan dan coba set `robloxExplorer.mcpBaseUrl` secara eksplisit.
- **Property Panel tidak terbuka**: Jika file `.props.json` terbuka di editor teks bawaan, klik kanan file itu lalu pilih **Reopen Editor With... → WEPPY Property Panel**.
- **Ikon rusak**: Pilih ulang tema VSCode atau restart window agar cache ikon diperbarui.

## Dokumen terkait

- [Panduan instalasi Roblox MCP](../installation/README.md)
- [Panduan Sync](../sync/overview.md)
- [Tinjauan Tools](../tools/overview.md)
