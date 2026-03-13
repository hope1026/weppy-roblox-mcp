# Asset & efek

> Sisipkan asset dan kendalikan tween, audio, partikel, animasi, dan grup tabrakan.

## Tool yang termasuk

| Tool | Tier | Deskripsi |
|------|:----:|-----------|
| `manage_assets` | Pro | Mencari di Creator Store, menyisipkan model dan package, memeriksa info asset |
| `manage_tween` | Pro | Membuat, memutar, menjeda, dan membatalkan tween |
| `manage_animation` | Pro | Memuat, memutar, menghentikan, dan memeriksa track animasi |
| `manage_audio` | Pro | Memutar, menghentikan, menjeda, dan melanjutkan suara; mengatur listener |
| `manage_effects` | Pro | Mengeluarkan partikel, membersihkan efek, dan mengubah status efek |
| `manage_physics` | Pro | Mendaftarkan grup tabrakan dan mengatur tabrakan |

## Alur kerja utama

### Menyusun scene dengan asset

```
"Cari model pohon di Creator Store lalu tempatkan tiga buah di Workspace."
```

Gunakan `manage_assets.search_insert` untuk mencari dan menyisipkan dalam satu langkah.

### Membuat interaksi visual

```
"Buat pintu terbuka dengan tween 3 detik saat diklik."
```

Gunakan `manage_tween.create` untuk mendefinisikan gerakan dan `manage_tween.play` untuk memutarnya. Bisa dipadukan dengan `manage_audio.play` untuk efek suara.

### Menggabungkan partikel dan audio

```
"Putar suara ledakan dan keluarkan partikel saat boss muncul."
```

Gunakan `manage_effects.emit` untuk partikelnya dan `manage_audio.play` untuk suaranya.

## Referensi aksi

### Manage Assets (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `insert` | Menyisipkan model berdasarkan ID asset | Pro |
| `info` | Mendapatkan metadata asset | Pro |
| `search` | Mencari di Creator Store | Pro |
| `search_insert` | Mencari dan menyisipkan kecocokan pertama | Pro |
| `insert_free` | Menyisipkan model gratis | Pro |
| `insert_package` | Menyisipkan package | Pro |
| `export` | Mengekspor seleksi saat ini | Pro |

### Manage Tween (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `create` | Membuat tween dengan properti target | Pro |
| `play` | Memutar tween yang dibuat | Pro |
| `pause` | Menjeda tween yang berjalan | Pro |
| `cancel` | Membatalkan tween | Pro |

### Manage Animation (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `load` | Memuat animasi pada Humanoid atau AnimationController | Pro |
| `play` | Memutar track animasi yang dimuat | Pro |
| `stop` | Menghentikan animasi yang diputar | Pro |
| `get_tracks` | Mendaftar semua track animasi yang dimuat | Pro |

### Manage Audio (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `play` | Memutar suara dan membuat `Sound` jika diperlukan | Pro |
| `stop` | Menghentikan suara yang diputar | Pro |
| `pause` | Menjeda suara yang diputar | Pro |
| `resume` | Melanjutkan suara yang dijeda | Pro |
| `set_listener` | Mengatur tipe atau target listener audio | Pro |

### Manage Effects (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `emit` | Mengeluarkan partikel dari `ParticleEmitter` | Pro |
| `clear` | Membersihkan semua partikel | Pro |
| `toggle` | Mengaktifkan atau menonaktifkan efek | Pro |

### Manage Physics (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `register_group` | Mendaftarkan grup tabrakan | Pro |
| `set_collidable` | Mengatur apakah dua grup bisa bertabrakan | Pro |
| `get_groups` | Mendaftar semua grup tabrakan yang terdaftar | Pro |

## Dokumen terkait

- [Instance & properti](instances-and-properties.md) - membuat dan menempatkan objek
- [Dunia & lingkungan](world-and-environment.md) - lighting, terrain, dan kamera
- [Daftar tool lengkap](overview.md)
