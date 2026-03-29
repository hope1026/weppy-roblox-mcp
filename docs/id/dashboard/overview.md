# Dashboard

> Pantau dan kelola status, koneksi, sinkronisasi, riwayat eksekusi alat, dan riwayat perubahan game dari server MCP secara real-time melalui browser web.

![WROX Dashboard Overview — status server, perubahan terbaru, dan ringkasan sesi dalam satu tampilan](../../assets/screenshots/dashboard/dashboard_overview.png)

## Apa itu Dashboard?

Dashboard adalah antarmuka pemantauan berbasis web yang disediakan oleh server MCP. Saat server MCP dijalankan, dashboard akan terbuka secara otomatis di browser, memungkinkan Anda melacak semua operasi yang dilakukan agen AI di Roblox Studio secara real-time.

- Pahami status secara visual tanpa perlu menelusuri log terminal
- Lacak apa saja yang diubah AI di Studio melalui riwayat perubahan
- Lihat status sinkronisasi, status koneksi, dan statistik eksekusi alat di satu tempat

## Struktur Halaman

| Halaman | Deskripsi | Panduan Detail |
|---------|-----------|----------------|
| [Overview](#overview) | Kartu status Server/Plugin/Agent/Sync, feed perubahan terbaru | Dokumen ini |
| [Changelog](changelog.md) | Riwayat perubahan game — kartu per sesi, ringkasan perubahan, timeline, Before & After | [Panduan detail](changelog.md) |
| [Connection](connection.md) | Status server, daftar agen AI, informasi koneksi plugin | [Panduan detail](connection.md) |
| [Sync](sync.md) | Status sinkronisasi, pengaturan arah, log | [Panduan detail](sync.md) |
| [Playtest](playtest.md) | Status playtest, riwayat pengujian | [Panduan detail](playtest.md) |
| [Tools](tools.md) | Riwayat eksekusi alat, statistik, distribusi tier | [Panduan detail](tools.md) |
| [Settings](settings.md) | Lisensi, level log, pengaturan Sync, bahasa | [Panduan detail](settings.md) |

## Cara Mengakses

Saat server MCP dijalankan, dashboard akan terbuka secara otomatis di browser. Untuk mengakses secara manual:

```
http://localhost:3002
```

> Atur `DASHBOARD_AUTO_OPEN=false` untuk menonaktifkan pembukaan otomatis (lihat halaman [Settings](settings.md)).

## Status Koneksi

Fitur yang tersedia di dashboard berbeda tergantung pada status koneksi:

| Status | Kondisi | Halaman yang Tersedia |
|--------|---------|----------------------|
| **Server terputus** | Server tidak terhubung | Hanya menampilkan layar menunggu koneksi ulang |
| **Server terhubung** | Server terhubung, plugin tidak terhubung | Connection, Tools, Settings |
| **Studio terhubung** | Server + Plugin keduanya terhubung | Semua halaman |

Saat dashboard berada dalam status **Server terhubung**, halaman Overview, Changelog, Sync, dan Playtest tidak dapat diakses.

## Overview

Halaman Overview adalah layar utama dashboard yang menampilkan status keseluruhan sistem dalam satu pandangan.

### Kartu Status

| Kartu | Informasi yang Ditampilkan |
|-------|---------------------------|
| **Server** | Status koneksi server (Online/Offline) |
| **Plugin** | Status koneksi plugin, informasi Place |
| **Agent** | Nama agen AI yang sedang terhubung |
| **Sync** | Status sinkronisasi (Idle/Syncing/Error) |

### Perubahan Game Terbaru (Recent Game Changes)

Menampilkan perubahan terbaru yang dilakukan AI di Studio secara real-time (maksimal 20 item). Setiap item ditampilkan dengan ikon kategori perubahan, dan mengkliknya akan membawa Anda ke tampilan detail di [Changelog](changelog.md).

Ikon kategori:
- Script — pembuatan/pengeditan script
- Instance — pembuatan/penghapusan/pemindahan instance
- Property — perubahan properti
- Lighting — pengaturan pencahayaan/lingkungan
- Terrain — perubahan terrain
- Asset — penyisipan aset

### Ringkasan Perubahan Sesi (Session Change Summary)

Menampilkan statistik perubahan sesi saat ini yang diagregasi per kategori (contoh: "4 scripts - 3 properties").

## Pembaruan Real-time

Dashboard menggunakan SSE (Server-Sent Events) untuk memperbarui data secara real-time:

- Status server: polling setiap 5 detik
- Feed perubahan, event koneksi: streaming real-time via SSE
- Saat koneksi SSE terputus: koneksi ulang otomatis setelah 3 detik

## Dokumen Terkait

- [Changelog](changelog.md) — pelacakan riwayat perubahan game
- [Connection](connection.md) — status koneksi server/agen/plugin
- [Sync](sync.md) — pemantauan status sinkronisasi
- [Playtest](playtest.md) — riwayat playtest
- [Tools](tools.md) — riwayat/statistik eksekusi alat
- [Settings](settings.md) — lisensi, pengaturan server, bahasa
- [Daftar tool lengkap](../tools/overview.md)
- [Panduan detail fitur Sync](../sync/overview.md)
