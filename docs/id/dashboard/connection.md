# Connection

> Pantau status koneksi server, agen AI, dan plugin di satu tempat.

![Connection — status server, agen AI, informasi koneksi plugin](../../assets/screenshots/dashboard/dashboard_connection.png)

## Ikhtisar

Halaman Connection memantau semua status koneksi sistem MCP di satu tempat. Halaman ini selalu dapat diakses selama server terhubung (L1 ke atas).

## Server Status

Menampilkan informasi inti server:

| Item | Deskripsi |
|------|-----------|
| Status | Badge status koneksi (Online/Offline) |
| Version | Versi server MCP |
| PID | ID proses server |
| Uptime | Waktu aktif server |
| Session ID | Identifier sesi saat ini |
| Exec Path | Path eksekusi server |

## AI Agents

Menampilkan daftar agen AI yang sedang terhubung dalam bentuk tabel:

| Kolom | Deskripsi |
|-------|-----------|
| Name | Nama agen (contoh: Claude Code) |
| PID | ID proses agen |
| Working Dir | Direktori kerja agen |
| Connected | Waktu sejak terhubung |

Jika beberapa agen terhubung secara bersamaan, semuanya akan ditampilkan.

## Plugins

Menampilkan daftar plugin Roblox Studio yang terhubung:

| Kolom | Deskripsi |
|-------|-----------|
| Place | Nama Place |
| Client ID | Identifier klien plugin |
| Last Seen | Waktu komunikasi terakhir |
| Version | Versi plugin |

## Connection Log

Menampilkan event terkait koneksi secara real-time. Event koneksi/pemutusan agen/plugin ditambahkan secara otomatis melalui SSE.

## Contoh Penggunaan

### Diagnosis Masalah Koneksi

```
"Sepertinya AI tidak terhubung dengan Studio"
```

Periksa apakah Server Status menunjukkan Online dan apakah plugin muncul di tabel Plugins. Anda dapat melacak event koneksi/pemutusan di Connection Log.

### Konfirmasi Agen

```
"Saya ingin melihat AI mana yang sedang terhubung"
```

Periksa nama, PID, dan direktori kerja agen yang sedang terhubung di tabel AI Agents.

## Dokumen Terkait

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
