# Scripting & eksekusi kode

> Kelola source code script dan jalankan Luau arbitrer di dalam Roblox Studio.

## Tool yang termasuk

| Tool | Tier | Deskripsi |
|------|:----:|-----------|
| `manage_scripts` | Campuran | Membuat, membaca, mengedit, mencari, dan menganalisis dependensi script |
| `execute_luau` | Pro | Menjalankan Luau arbitrer di sandbox Roblox Studio |

## Alur kerja utama

### Mengedit script

```
"Ubah maxPlayers dari 12 menjadi 24 di script GameManager dalam ServerScriptService."
```

Gunakan `manage_scripts.search` untuk menemukan baris yang tepat lalu `manage_scripts.edit_replace` untuk memperbaruinya.

### Refaktor banyak script (Pro)

```
"Ganti OldModule dengan NewModule di semua script."
```

Gunakan `manage_scripts.replace` untuk menerapkan perubahan ke banyak script dalam satu permintaan.

### Memeriksa data runtime (Pro)

```
"Hitung rata-rata Health dari semua Humanoid yang sedang ada di Workspace."
```

Gunakan `execute_luau` untuk menjalankan Luau kustom dan membaca data runtime yang aktif.

## Referensi aksi

### Manage Scripts (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get_source` | Mendapatkan kode sumber script | Basic |
| `set_source` | Mengatur kode sumber script | Basic |
| `create` | Membuat script baru | Basic |
| `delete` | Menghapus script | Basic |
| `edit_replace` | Mengganti baris tertentu di script | Basic |
| `edit_insert` | Menyisipkan baris pada posisi | Basic |
| `edit_delete` | Menghapus baris tertentu | Basic |
| `search` | Mencari teks di script | Basic |
| `get_dependencies` | Mendapatkan dependensi script | Basic |
| `replace` | Penggantian massal di seluruh script | Pro |

### Execute Luau (Pro)

Menjalankan Luau arbitrer di dalam sandbox Roblox Studio.

- Layanan yang diblokir: `HttpService`, `DataStoreService`, `MessagingService`
- API yang tidak bisa diakses: `CoreGui`, `CorePackages`

## Dokumen terkait

- [Instance & properti](instances-and-properties.md) - membuat atau memindahkan instance script
- [Playtest & tes otomatis](playtest.md) - menyuntik dan menjalankan script test
- [Daftar tool lengkap](overview.md)
