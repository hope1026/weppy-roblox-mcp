# Panduan Upgrade Pro

## Mengapa Pro?

### Sync dua arah untuk alur kerja pengembangan nyata

Pro Sync melampaui sekadar export satu arah. Edit script secara lokal dan kirim ke Studio. Buat perubahan di Studio dan tarik kembali ke disk. Pro menjaga keduanya tetap sinkron.

- **Sync dua arah** — Perubahan mengalir dua arah antara Studio dan file lokal.
- **Direction per tipe** — Atur arah secara independen untuk Scripts, Values, Containers, Data, dan Services.
- **Apply Mode per tipe** — Pilih Auto atau Manual per tipe untuk menyeimbangkan kecepatan dan kontrol.
- **Full Sync / Resync** — Bangun ulang state proyek yang bersih setelah perubahan besar atau reconnect.
- **Riwayat Perubahan** — Lacak apa yang berubah, kapan, dan ke arah mana sebelum menerapkan.
- **Sync multi-place** — Sync hingga 3 Roblox Place sekaligus, masing-masing dengan penyimpanan terisolasi dan riwayat perubahan sendiri.

### Hemat token AI dengan workflow berdampak tinggi

Aksi massal dan lanjutan mengurangi panggilan berulang — lakukan lebih banyak per prompt.

### Kemampuan lanjutan yang lebih luas

Pembuatan terrain, pencarian aset, analisis spasial, animasi, audio, dan otomasi skala produksi.

## Langganan dan unduhan

### Langkah 1: Berlangganan di Gumroad

1. Buka [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md)
2. Selesaikan pembelian lisensi langganan Pro

### Langkah 2: Unduh dari GitHub Releases

1. Buka [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Unduh `weppy-roblox-mcp-v{version}.zip`
3. Ekstrak lalu salin `roblox-plugin/WeppyRobloxMCP.rbxm` ke folder Plugins Roblox

### Langkah 3: Verifikasi

1. Buka W-MCP di Roblox Studio
2. Pastikan badge Pro terlihat
3. Jalankan aksi Pro (misalnya: `manage_sync` atau operasi massal)

## Perbandingan Fitur

| Fitur | Basic | Pro |
|-------|:-----:|:---:|
| Manajemen Script, Instance, Property | ✅ Akses penuh | ✅ Akses penuh |
| Selection, Tag, Camera, Log | ✅ Akses penuh | ✅ Akses penuh |
| Arah Sync | Studio → Local (satu arah) | Dua arah |
| Sync Direction per tipe | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| Apply Mode per tipe | ❌ | ✅ Auto / Manual |
| Full Sync | ❌ | ✅ |
| Resync / Bangun ulang state | ❌ | ✅ |
| Riwayat Perubahan | ❌ | ✅ |
| Sync multi-place | ❌ | ✅ Hingga 3 place dengan penyimpanan terisolasi |
| Kontrol Playtest (Putar/Hentikan/Jeda/Lanjutkan) | ❌ | ✅ |
| Cakupan tools lanjutan | Set dasar | Set lanjutan lebih luas |
| Efisiensi token AI | Standar | Lebih efisien dengan aksi massal / berdampak tinggi |
