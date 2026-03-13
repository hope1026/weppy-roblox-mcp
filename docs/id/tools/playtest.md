# Playtest & tes otomatis

> Kendalikan playtest Roblox Studio dengan AI, suntikkan script test, lalu hasilkan log dan laporan lokal secara otomatis.

## Tool yang termasuk

| Tool | Tier | Deskripsi |
|------|:----:|-----------|
| `system_info` | Pro | aksi `play`, `stop`, `pause`, `resume`, `play_status`, `run_test` |

> Untuk aksi `system_info` lain seperti `ping`, `connection`, dan `usage`, lihat [Sistem & debugging](system-and-debugging.md).

## Alur kerja utama

### Kontrol playtest manual

```
"Mulai game dalam mode Play (F5)."
"Hentikan playtest yang sedang berjalan."
```

Alur umum: `play` -> `play_status` -> `stop`.

### Menjalankan tes otomatis

```
"Tulis dan jalankan test yang memeriksa apakah SpawnLocation berada di posisi yang benar."
```

`run_test` menyuntikkan script test, memulai playtest otomatis, mengumpulkan log, dan membersihkan semuanya.

### Verifikasi gaya CI

```
"Jalankan test mode Run (F8) yang memeriksa apakah NPC mencapai target, lalu tampilkan log jika gagal."
```

Gunakan `run_test` dengan `mode: "run"` untuk validasi yang fokus pada server.

## State machine playtest

```text
Edit --play--> Running --stop--> Edit
                  |               ^
                pause             |
                  |               |
                  v               |
               Paused --resume--> Running
```

| Status | Aksi yang tersedia |
|--------|--------------------|
| `edit` | `play` |
| `running` | `stop`, `pause` (hanya mode Run) |
| `paused` | `resume`, `stop` |

- Mode Play (F5): simulasi client + server, tidak mendukung pause atau resume
- Mode Run (F8): simulasi server saja, mendukung pause dan resume

## Alur `run_test`

`run_test` mengorkestrasi langkah-langkah berikut secara otomatis:

### 1. Persiapan

- Membaca informasi place dengan `place_info`
- Mengosongkan buffer log yang ada

### 2. Penyuntikan script

- Membuat `ServerScriptService.__MCP_TestRunner` dengan script test yang dibungkus
- Wrapper menangani sinyal `START` dan `FINISHED` serta traceback error

### 3. Eksekusi dan pemantauan

- Memulai playtest dalam mode Play atau Run
- Mem-poll log setiap 500 ms
- Selesai ketika `[WEPPY_TEST]:FINISHED` terdeteksi
- Berhenti otomatis saat timeout tercapai (default 60 detik, maksimum 300)

### 4. Pembersihan

- Menghentikan playtest secara otomatis
- Menghapus script test yang disuntikkan
- Mengumpulkan log terakhir

### 5. Penulisan laporan

Laporan dan log ditulis ke file lokal:

```text
roblox-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/
├── test-report.md
└── test-log.txt
```

Contoh `test-report.md`:

```markdown
# Test Report

- Status: passed
- Test Name: spawn_location_test
- Mode: run
- Place ID: 123456
- Duration (ms): 1523
- Total Logs: 12
- Signal Count: 2

## Signals

- START: 2026-03-12T10:30:00.000Z
- FINISHED: 2026-03-12T10:30:01.523Z
```

## Referensi aksi

| Aksi | Deskripsi | Parameter | Tier |
|------|-----------|-----------|------|
| `play` | Memulai playtest dalam mode Play (F5) atau Run (F8) | `mode`: `"play"` \| `"run"` | Pro |
| `stop` | Menghentikan playtest saat ini | - | Pro |
| `pause` | Menjeda playtest mode Run | - | Pro |
| `resume` | Melanjutkan playtest mode Run yang dijeda | - | Pro |
| `play_status` | Mendapatkan status playtest dan aksi yang tersedia | - | Pro |
| `run_test` | Menyuntikkan script test, menjalankan playtest, mengumpulkan log, dan menulis laporan | `script` (wajib), `test_name`, `mode`, `timeout` | Pro |

### Parameter `run_test`

| Parameter | Tipe | Wajib | Deskripsi |
|-----------|------|:-----:|-----------|
| `script` | string | ✅ | Isi kode Luau test yang akan dijalankan |
| `test_name` | string | - | Nama yang ditampilkan pada laporan |
| `mode` | `"play"` \| `"run"` | - | Mode playtest, default `"play"` |
| `timeout` | number | - | Timeout dalam detik, default 60, maksimum 300 |

## Dokumen terkait

- [Sistem & debugging](system-and-debugging.md) - aksi koneksi dan pengelolaan log
- [Scripting & eksekusi kode](scripting.md) - menulis script dan menjalankan Luau
- [Daftar tool lengkap](overview.md)
