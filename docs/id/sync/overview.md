# Panduan detail Sync Roblox MCP

Sync menghubungkan status Roblox Studio dan file lokal agar AI bisa membaca dan memodifikasi konteks proyek secara utuh dan stabil.

## Kenapa Sync penting

Tanpa Sync, AI hanya melihat potongan kode yang ditempel di chat. Dengan Sync aktif, AI bekerja dari keseluruhan proyek.

- Terapkan refactor lintas banyak script secara konsisten
- Tinjau perubahan berisiko lebih cepat lewat riwayat
- Jaga sumber kebenaran antara Studio dan file lokal tetap jelas

## Cara kerjanya

1. Full Sync: mirror awal dari tree/instance Studio ke lokal
2. Incremental Sync: perubahan baru terus disinkronkan
3. Pelacakan History/Status: cek apa yang berubah, kapan, dan ke arah mana

Path lokal default adalah `roblox-project-sync/place_{placeId}/explorer`.

## Basic vs Pro

| Item | Basic | Pro |
|------|------|-----|
| Arah sync | Studio -> Local | Dua arah |
| Direction per tipe | Tidak didukung | Didukung (Scripts / Values / Containers / Data / Services) |
| Apply Mode per tipe | Tidak didukung | Didukung (Auto / Manual) |
| API status/riwayat | Tidak didukung | Didukung (`status`, `history`, `progress`) |
| Tool `manage_sync` | Tidak didukung | Didukung |
| Sync multiplace | Tidak didukung | Didukung (hingga 3 place) |

## Target sync dan aturan eksklusi default

Layanan yang disinkronkan secara default:

- `Workspace`
- `Lighting`
- `ReplicatedStorage`
- `ServerStorage`
- `ServerScriptService`
- `StarterGui`
- `StarterPlayer`
- `StarterPack`
- `ReplicatedFirst`
- `SoundService`
- `Chat`
- `LocalizationService`

Eksklusi default:

- Kelas: `Terrain`, `Camera`
- Path terlarang demi keamanan: `CoreGui`, `CorePackages`, `RobloxScript`, `RobloxScriptSecurity`

## Direction dan Apply Mode

### Direction (arah sync per tipe)

- `forward`: Studio -> Local
- `reverse`: Local -> Studio
- `bidirectional`: dua arah

Tipe dikelola terpisah: `scripts`, `values`, `containers`, `data`, `services`.

### Apply Mode (cara menerapkan perubahan reverse)

- `manual`: user konfirmasi sebelum diterapkan ke Studio
- `auto`: perubahan terdeteksi diterapkan otomatis

Di Pro, Direction dan Apply Mode bisa diatur per tipe.

## Panduan aksi `manage_sync` (Pro)

| Aksi | Deskripsi | Parameter utama |
|------|------|-----------|
| `status` | Cek status sync saat ini untuk place | `placeId` |
| `config` | Ambil konfigurasi sync | `placeId` |
| `history` | Ambil riwayat perubahan | `placeId`, `query.limit`, `query.offset` |
| `directions` | Ambil Direction per tipe | `placeId` |
| `read_file` | Baca file yang sudah tersinkron | `placeId`, `instancePath` |
| `write_file` | Tulis file yang sudah tersinkron | `placeId`, `instancePath`, `content` |
| `progress` | Lihat progres/throughput sync realtime | `placeId` |

## Workflow yang disarankan

### 1) Mulai dengan aman

- Selesaikan Full Sync dulu sebagai baseline
- Awali dengan mode `manual` untuk menurunkan risiko

### 2) Bekerja dengan AI

- "Cek status sync, lalu rangkum hanya perubahan berisiko dari riwayat terbaru"
- "Refactor dulu script di `ServerScriptService` dan sertakan catatan riwayat"

### 3) Pemulihan saat dibutuhkan

- Lacak perubahan terbaru dengan `history`
- Periksa file target dengan `read_file`
- Pulihkan konten dengan `write_file`, lalu verifikasi status di Studio

## Dokumen terkait

- [Cakupan tool (Tools Overview)](../tools/overview.md)
- [Panduan Upgrade Pro](../pro-upgrade.md)
