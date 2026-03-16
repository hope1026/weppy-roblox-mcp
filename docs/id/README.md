# Roblox MCP — Server MCP untuk Roblox Studio | Pengembangan Game AI dengan Claude, Codex, Cursor & Gemini

> **Weppy Roblox MCP** adalah server MCP yang memungkinkan agen pengkodean AI mengontrol sesi Roblox Studio secara langsung — buat dan edit script, instance, terrain, lighting, asset, audio, dan animasi dengan bahasa alami.

**21 alat terkonsolidasi · 140+ aksi · Sync dua arah · Playtest otomatis · Dukungan multi-place**

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | **Bahasa Indonesia**

[![Demo — AI membuat game Roblox secara real-time](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Instalasi Cepat (5 menit)

**Langkah 1** — Install plugin Roblox Studio (jembatan antara Studio dan AI):
[Panduan instalasi plugin](../en/installation/roblox-plugin.md)

**Langkah 2** — Daftarkan MCP server di aplikasi AI:

```bash
npx -y @weppy/roblox-mcp
```

| Aplikasi AI | Panduan |
|-------------|---------|
| Claude Code | [Setup](../en/installation/ai-apps/claude-code.md) |
| Claude Desktop | [Setup](../en/installation/ai-apps/claude-app.md) |
| Codex CLI | [Setup](../en/installation/ai-apps/codex-cli.md) |
| Codex Desktop | [Setup](../en/installation/ai-apps/codex-app.md) |
| Gemini CLI | [Setup](../en/installation/ai-apps/gemini-cli.md) |

> Bekerja dengan semua klien MCP yang kompatibel. Perintah server: `npx -y @weppy/roblox-mcp`

## Kompatibilitas

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI |
|:-----------:|:--------------:|:------:|:---------:|:----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

**Persyaratan:** Node.js 18+, Roblox Studio, Windows 10+ atau macOS 12+

## Fitur utama

### 1) MCP Tool: eksekusi langsung di Studio dari bahasa alami

AI bisa langsung menangani script, instance, properti, terrain, lighting, asset, audio, dan animasi di dalam Studio.

- "Tambahkan partikel + suara + cooldown saat player melompat."
- "Buat arena boss di tengah map dan pasang spawn point yang aman dari tabrakan."
- "Ubah interface modul ini dan perbarui semua script yang bergantung padanya."

Ini bukan sekadar generate kode. Ini adalah **aksi yang benar-benar bisa dieksekusi**.

### 2) Sync: menjaga konteks penuh proyek untuk AI

AI bekerja dari mirror lokal yang tersinkron, jadi perubahan lintas banyak file tetap konsisten.

![Alur Sync — Studio dan file lokal tersinkron secara real time](../assets/screenshots/sync.png)

- Basic: sinkronisasi satu arah (Studio -> Local)
- Pro: sinkronisasi dua arah + Direction/Apply Mode per tipe + riwayat + multiplace

### 3) Playtest: AI menjalankan dan memverifikasi tes secara otomatis

AI bisa mengontrol playtest Studio secara langsung. AI dapat memulai dan menghentikan Play (F5) atau Run (F8), menyuntikkan script test, mengumpulkan log, dan menghasilkan laporan lokal secara otomatis.

- "Mulai playtest mode Run dan cek apakah NPC mencapai target."
- "Tulis dan jalankan test untuk memastikan SpawnLocation berada di atas tanah."
- "Validasi lewat playtest bahwa script yang baru saya ubah berjalan tanpa error."

### 4) Roblox Explorer: jelajahi hierarki Studio di VSCode

Lihat seluruh pohon instance dari place Roblox Studio langsung di dalam VSCode. Navigasi service, buka script dan file properti yang tersinkron, dan pantau status sinkronisasi — semua tanpa beralih ke Studio.

![Roblox Explorer — pohon instance Studio ditampilkan di sidebar VSCode](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Ikon class yang sama dengan Studio untuk pengenalan instan
- Klik untuk membuka script dan file properti yang tersinkron
- Dukungan multiplace dengan indikator status sinkronisasi

## Nilai yang langsung terasa

- Ringkas pekerjaan berulang: banyak edit manual jadi satu perintah
- Ubah file terkait sekaligus: bukan hanya satu file target
- Risiko lebih rendah: putuskan perubahan dari status sync dan riwayat
- Efisiensi token lebih baik (Pro): kurangi bolak-balik dengan aksi massal

## Dokumen detail

- [Panduan instalasi](../en/installation/README.md)
- [Daftar tool lengkap](tools/overview.md)
- [Panduan detail Sync](sync/overview.md)
- [Roblox Explorer (Ekstensi VSCode)](../en/installation/roblox-explorer.md)
- [Kompatibilitas](../compatibility.md)
- [Panduan pemecahan masalah](../troubleshooting.md)

### Panduan per alur kerja

- [Instance & properti](tools/instances-and-properties.md) - pencarian, pembuatan, pengeditan, dan tag
- [Scripting & eksekusi kode](tools/scripting.md) - pengelolaan script dan eksekusi Luau
- [Dunia & lingkungan](tools/world-and-environment.md) - lighting, terrain, dan kamera
- [Asset & efek](tools/assets-and-effects.md) - penyisipan model, tween, dan efek
- [Playtest & tes otomatis](tools/playtest.md) - kontrol playtest dan validasi otomatis
- [Sistem & debugging](tools/system-and-debugging.md) - koneksi, log, dan eksekusi batch

## Upgrade Pro

Sync dua arah, kemampuan kreasi lanjutan, dan efisiensi token AI — semua dalam satu upgrade.

[Panduan Upgrade Pro](../en/pro-upgrade.md)

---

[GitHub Issues](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
