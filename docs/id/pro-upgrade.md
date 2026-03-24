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

### AI yang mengontrol playtest secara langsung

AI dapat mengontrol playtest Roblox Studio secara langsung. AI bisa memulai dan menghentikan Play (F5) atau Run (F8), menyuntikkan script pengujian, mengumpulkan log, dan membuat laporan secara otomatis.

- "Mulai playtest mode Run dan periksa apakah NPC mencapai target."
- "Tulis test yang memverifikasi SpawnLocation berada di atas tanah lalu jalankan."
- "Validasi bahwa script yang baru aku ubah berjalan tanpa error di playtest."

### Kemampuan lanjutan yang lebih luas

Pembuatan terrain, pencarian aset, analisis spasial, animasi, audio, dan otomasi skala produksi.

## Beli lalu aktifkan

### Langkah 1: Beli lisensi langganan Pro di Gumroad

1. Buka [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md)
2. Selesaikan pembelian lisensi langganan Pro
3. Salin license key yang kamu terima setelah pembelian

Kamu hanya perlu mengaktifkan lisensi sekali, baik di plugin maupun di dashboard. Keduanya berbagi status lisensi lokal MCP yang sama, jadi saat diaktifkan di satu tempat, status yang sama akan muncul di tempat lainnya.

### Aktifkan di plugin

1. Buka **W-MCP** di Roblox Studio lalu hubungkan ke MCP server.
2. Buka bagian **Settings > License** di plugin.
3. Tempel key yang sudah dibeli ke field `License key`.
4. Klik **Activate** untuk mengaktifkan lisensi.
5. Jika status belum langsung diperbarui, klik **Refresh**.
6. Setelah aktivasi berhasil, status berubah dari Basic ke Pro dan fitur Pro bisa digunakan.

![Layar aktivasi lisensi di plugin](../assets/screenshots/license/license-plugin.png)

### Aktifkan di dashboard

1. Jalankan MCP server lalu buka **Settings > License** di dashboard.
2. Pastikan provider disetel ke `gumroad`.
3. Tempel key yang sudah dibeli ke field `License Key`.
4. Klik **Activate License** untuk mengaktifkan lisensi.
5. Jika perlu, gunakan **Refresh License** untuk mengambil status terbaru.

![Layar aktivasi lisensi di dashboard](../assets/screenshots/license/license-dashboard.png)

### Setelah aktivasi

- Jika status lisensi tampil sebagai `active` atau `grace`, fitur Pro sudah bisa digunakan.
- Plugin dan dashboard berbagi status lisensi yang sama, jadi aktivasi di satu tempat akan tercermin di tempat lainnya.
- Gunakan **Refresh** atau **Refresh License** jika ingin memeriksa status terbaru lagi.

## Perbandingan Fitur

| Fitur | Basic | Pro |
|-------|:-----:|:---:|
| Manajemen Script, Instance, Property | ✅ Akses penuh | ✅ Akses penuh |
| Selection, Tag, Camera, Log | ✅ Akses penuh | ✅ Akses penuh |
| Arah Sync | Studio → Local (satu arah) | Dua arah |
| Sync Direction per tipe | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| Apply Mode per tipe | ❌ | ✅ Auto / Manual |
| Riwayat Perubahan | ❌ | ✅ |
| Sync multi-place | ❌ | ✅ Hingga 3 place dengan penyimpanan terisolasi |
| Kontrol Playtest (Putar/Hentikan/Jeda/Lanjutkan) | ❌ | ✅ |
| Cakupan tools lanjutan | Set dasar | Set lanjutan lebih luas |
| Efisiensi token AI | Standar | Lebih efisien dengan aksi massal / berdampak tinggi |
