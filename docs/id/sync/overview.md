# Panduan detail Sync Roblox MCP

Sync menghubungkan status Roblox Studio dan file lokal agar AI bisa membaca dan memodifikasi konteks proyek secara utuh dan stabil.

## Kenapa Sync penting

Tanpa Sync, AI hanya melihat potongan kode yang ditempel di chat. Dengan Sync aktif, AI bekerja dari keseluruhan proyek.

- Terapkan refactor lintas banyak script secara konsisten
- Tinjau perubahan berisiko lebih cepat lewat riwayat
- Jaga sumber kebenaran antara Studio dan file lokal tetap jelas

## Cara kerjanya

![Alur Sync — tree Studio di-mirror ke file lokal](../../assets/screenshots/plugin/sync/sync-overview.png)

1. Full Sync: mirror awal dari tree/instance Studio ke lokal
2. Incremental Sync: perubahan baru terus disinkronkan
3. Pelacakan History/Status: cek apa yang berubah, kapan, dan ke arah mana

Data Sync disimpan di `{projectRoot}/wrox-project-sync/place_{placeId}/explorer`.
Selain itu, WROX menulis sourcemap per place ke `{projectRoot}/wrox-project-sync/place_{placeId}/sourcemap.json` dan menjaga file perwakilan root yang direkomendasikan di `{projectRoot}/wrox-project-sync/sourcemap.json`.
Untuk integrasi editor seperti `luau-lsp`, sebaiknya gunakan path root. Langkah setup dijelaskan di [Menggunakan `luau-lsp` dengan WROX Sync](./luau-lsp.md).

### Jelajahi data sync di VSCode

Instal ekstensi [WROX Roblox Explorer](../installation/roblox-explorer.md) untuk menjelajahi tree instance yang sudah tersinkron di VSCode, seperti di Roblox Studio.
Explorer membaca file sync yang dihasilkan di sini, dan juga bisa menampilkan status sync live serta informasi direction saat server MCP lokal sedang berjalan.

![WROX Roblox Explorer — jelajahi tree instance yang tersinkron di VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Tree service/instance dengan ikon kelas Roblox
- Klik script untuk membukanya dan mengedit
- Badge status sync menampilkan status modified/conflict

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

### 3) Menyelesaikan konflik

Ketika perubahan terdeteksi di sisi Studio maupun lokal selama sinkronisasi dua arah, dialog resolusi konflik akan muncul.

![Local Changes Detected — opsi resolusi konflik (Studio Priority / Local Priority / Per-File)](../../assets/screenshots/plugin/sync/sync-conflict.png)

- **Studio Priority**: timpa dengan status Studio sebagai sumber kebenaran
- **Local Priority**: terapkan file lokal ke Studio
- **Per-File**: pilih sisi mana yang diprioritaskan untuk setiap file secara individual

### 4) Pemulihan saat dibutuhkan

- Lacak perubahan terbaru dengan `history`
- Periksa file target dengan `read_file`
- Pulihkan konten dengan `write_file`, lalu verifikasi status di Studio

## Format file (v2 nested directory)

Setiap instance Roblox disimpan sebagai direktori sendiri dengan file meta di dalamnya:

```
explorer/
├── Workspace/
│   ├── _tree.json
│   ├── Part/
│   │   └── Part.props.json
│   ├── MyScript/
│   │   └── MyScript.server.luau
│   └── Coins/
│       └── Coins.value.json
```

Konvensi penamaan:
- Properti: `{Name}/{Name}.props.json`
- Script: `{Name}/{Name}.server.luau` / `.client.luau` / `.module.luau`
- Nilai: `{Name}/{Name}.value.json`

Instance dengan nama duplikat menggunakan sufiks `~N` pada direktori (contoh: `Part~2/Part.props.json`).
Nama yang mengandung `~` di-escape menjadi `~~` (contoh: `Part~2` → `Part~~2/`). Aturan Odd-Count Tilde: `~+N` di akhir ditafsirkan sebagai sufiks collision hanya jika jumlah tilde ganjil.

## Dokumen terkait

- [Menggunakan `luau-lsp` dengan WROX Sync](./luau-lsp.md)
- [Cakupan tool (Tools Overview)](../tools/overview.md)
- [Panduan Upgrade Pro](https://weppyai.com/en/plans)
