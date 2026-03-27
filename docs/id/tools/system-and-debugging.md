# Sistem & debugging

> Periksa status koneksi, kelola log, kendalikan seleksi Studio, dan jalankan batch command untuk alur debugging.

## Tool yang termasuk

| Tool | Tier | Deskripsi |
|------|:----:|-----------|
| `system_info` | Campuran | `ping`, `connection`, `usage`, `place_info`, `services`, `studio_settings` |
| `manage_logs` | Basic | Mengambil log, mengosongkan buffer, dan memfilter error terbaru |
| `manage_selection` | Campuran | Membaca, mengganti, dan memantau seleksi Studio |
| `batch_execute` | Pro | Menjalankan banyak command dalam satu batch |

> Untuk aksi playtest di `system_info` seperti `play`, `stop`, dan `run_test`, lihat [Playtest & tes otomatis](playtest.md).

## Alur kerja utama

### Memeriksa koneksi

```
"Cek apakah Studio sudah terhubung dengan benar."
```

Gunakan `system_info.ping` untuk pemeriksaan cepat.

### Mencari error terbaru

```
"Tampilkan error terbaru."
```

Gunakan `manage_logs.errors` untuk mengambil hanya error terbaru. `manage_logs.get` juga mendukung polling inkremental dengan cursor `sinceSeq`.

### Menjalankan alur batch (Pro)

```
"Ubah semua Part di Workspace menjadi merah, lalu fokuskan kamera ke Part pertama."
```

Gunakan `batch_execute` untuk menggabungkan beberapa command dalam satu permintaan.

## Referensi aksi

### System Info (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `ping` | Menguji koneksi | Basic |
| `connection` | Mendapatkan info koneksi server dan plugin | Basic |
| `usage` | Mendapatkan tier saat ini (`basic` atau `pro`) | Basic |
| `place_info` | Mendapatkan Place ID, nama, dan kreator | Pro |
| `services` | Mendaftar semua layanan Roblox | Pro |
| `studio_settings` | Mendapatkan preferensi Studio | Pro |

### Manage Logs (Basic)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get` | Mendapatkan log terfilter dengan dukungan cursor `sinceSeq` opsional | Basic |
| `clear` | Mengosongkan buffer log | Basic |
| `errors` | Mendapatkan hanya error terbaru | Basic |

### Manage Selection (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get` | Mendapatkan seleksi saat ini | Basic |
| `set` | Mengganti seleksi saat ini | Basic |
| `clear` | Menghapus seleksi | Basic |
| `cached` | Mendapatkan seleksi cache tanpa round-trip | Basic |
| `context` | Mendapatkan konteks detail dengan source dan properti | Pro |
| `details` | Mendapatkan detail hierarkis dengan leluhur dan keturunan | Pro |
| `add` | Menambahkan item ke seleksi | Pro |
| `remove` | Menghapus item dari seleksi | Pro |
| `watch` | Memantau perubahan seleksi | Pro |

### Manage Context (Basic)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `begin` | Memulai konteks eksekusi terstruktur untuk scope session/place saat ini | Basic |
| `update` | Memperbarui intent, area terdampak, atau replay metadata untuk konteks aktif | Basic |
| `end` | Menutup konteks eksekusi aktif dan menyimpan snapshot final | Basic |

### Batch Execute (Pro)

Menjalankan banyak command dalam satu batch. Setiap command menyertakan nama tool dan argumen, dijalankan berurutan, dan bisa tetap lanjut setelah error jika diatur.

## Dokumen terkait

- [Playtest & tes otomatis](playtest.md) - aksi playtest di `system_info`
- [Scripting & eksekusi kode](scripting.md) - menjalankan Luau untuk investigasi dan debugging
- [Daftar tool lengkap](overview.md)
