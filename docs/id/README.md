# Roblox MCP

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | **Bahasa Indonesia**

> Bicara ke AI, langsung dijalankan di Roblox Studio.

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Fitur utama

### 1) MCP Tool: eksekusi langsung di Studio dari bahasa alami

Pilar pertama Roblox MCP adalah **eksekusi MCP Tool**.
AI bisa langsung menangani script, instance, properti, terrain, lighting, asset, audio, dan animasi di dalam Studio.

- "Tambahkan partikel + suara + cooldown saat player melompat."
- "Buat arena boss di tengah map dan pasang spawn point yang aman dari tabrakan."
- "Ubah interface modul ini dan perbarui semua script yang bergantung padanya."

Ini bukan sekadar generate kode. Ini adalah **aksi yang benar-benar bisa dieksekusi**.

### 2) Sync: menjaga konteks penuh proyek untuk AI

Pilar kedua adalah **Project Sync**.
AI bekerja dari mirror lokal yang tersinkron, jadi perubahan lintas banyak file tetap konsisten.

![Alur Sync — Studio dan file lokal tersinkron secara real time](../assets/screenshots/sync.png)

- Basic: sinkronisasi satu arah (Studio -> Local)
- Pro: sinkronisasi dua arah + Direction/Apply Mode per tipe + riwayat + multiplace

Dengan begitu sumber kebenaran tetap jelas dan konteks perubahan tidak hilang.

## Nilai yang langsung terasa

- Ringkas pekerjaan berulang: banyak edit manual jadi satu perintah
- Ubah file terkait sekaligus: bukan hanya satu file target
- Risiko lebih rendah: putuskan perubahan dari status sync dan riwayat
- Efisiensi token lebih baik (Pro): kurangi bolak-balik dengan aksi massal

## Dokumen detail

- [Cakupan tool (Tools Overview)](tools/overview.md)
- [Panduan detail Sync](sync/overview.md)

## Mulai

Instalasi cuma dua langkah:

1. **Install plugin Roblox Studio** — Jembatan antara Studio dan AI
2. **Daftarkan MCP server di aplikasi AI** — Biar AI-mu mengenali Roblox MCP

5 menit kelar. 👉 [Lihat panduan instalasi](installation/README.md)

## Upgrade Pro

Sync dua arah, kemampuan kreasi lanjutan, dan efisiensi token AI — semua dalam satu upgrade.

👉 [Panduan Upgrade Pro](pro-upgrade.md)

## Link

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [Laporkan Masalah](https://github.com/hope1026/roblox-mcp/issues)
