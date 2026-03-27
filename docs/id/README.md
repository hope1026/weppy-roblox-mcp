# Roblox MCP — Server MCP untuk Roblox Studio | Pengembangan Game AI dengan Claude, Codex, Cursor & Gemini

> **WROX** adalah server MCP yang memungkinkan agen pengkodean AI mengontrol sesi Roblox Studio secara langsung — buat dan edit script, instance, terrain, lighting, asset, audio, dan animasi dengan bahasa alami.

**21 alat terkonsolidasi · 140+ aksi · Sync dua arah · Playtest otomatis · Dukungan multi-place**

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | **Bahasa Indonesia**

[![Demo — AI membuat game Roblox secara real-time](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Instalasi Cepat

**Instalasi satu perintah** — Install MCP server, plugin Roblox Studio, dan daftarkan ke aplikasi AI dalam satu langkah:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Restart Roblox Studio — selesai!

Pendaftaran MCP otomatis saat ini mendukung **Claude Code, Claude Desktop, Cursor, Codex CLI, dan Gemini CLI**.
**Codex App** dan **Antigravity** masih memerlukan pengaturan manual setelah skrip selesai.

Jika eksekusi PowerShell diblokir di Windows, lanjutkan dengan instalasi manual di bawah. Jika kamu memakai paket ZIP, kamu juga bisa memakai `setup-plugin.bat` dan `setup-mcp.bat`.

### Instalasi Manual

Jika instalasi satu perintah tidak berjalan, atau instalasi otomatis tidak bisa dipakai di lingkunganmu, gunakan instalasi manual di bawah sebagai alternatif.

**Langkah 1** — Install plugin Roblox Studio (jembatan antara Studio dan AI):
[Panduan instalasi plugin](installation/roblox-plugin.md)

**Langkah 2** — Daftarkan MCP server di aplikasi AI:

```bash
npx -y @weppy/roblox-mcp
```

| Aplikasi AI | Panduan |
|-------------|---------|
| Claude Code | [Setup](installation/ai-apps/claude-code.md) |
| Claude Desktop | [Setup](installation/ai-apps/claude-app.md) |
| Cursor | [Setup](installation/ai-apps/cursor.md) |
| Codex CLI | [Setup](installation/ai-apps/codex-cli.md) |
| Codex Desktop | [Setup](installation/ai-apps/codex-app.md) |
| Gemini CLI | [Setup](installation/ai-apps/gemini-cli.md) |

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

### 4) WROX Dashboard: pantau pekerjaan AI secara real-time

Dashboard berbasis web yang disediakan server MCP memungkinkan Anda melihat status koneksi, riwayat eksekusi alat, status sinkronisasi, dan riwayat perubahan game secara real-time.

![WROX WROX Dashboard Overview — status server, perubahan terbaru, ringkasan sesi](../assets/screenshots/dashboard/dashboard_overview.png)

- Lihat status koneksi server/plugin/agen dalam satu pandangan
- Bandingkan semua perubahan yang dilakukan AI dengan Before & After di Changelog
- Analisis alur kerja dengan riwayat dan statistik eksekusi alat

### 5) WROX Roblox Explorer: jelajahi hierarki Studio di VSCode

Lihat seluruh pohon instance dari place Roblox Studio langsung di dalam VSCode. Navigasi service, buka script dan file properti yang tersinkron, dan pantau status sinkronisasi — semua tanpa beralih ke Studio.
WROX Roblox Explorer adalah ekstensi pendamping VSCode untuk data sync yang dihasilkan oleh WROX. Penjelajahan tree dasar bekerja dari file yang sudah tersinkron di disk, dan indikator live untuk status sync atau direction menjadi lebih lengkap saat server MCP lokal sedang berjalan.
Instal dari [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) atau [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer).

![WROX Roblox Explorer — pohon instance Studio ditampilkan di sidebar VSCode](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Ikon class yang sama dengan Studio untuk pengenalan instan
- Klik untuk membuka script dan file properti yang tersinkron
- Dukungan multiplace dengan indikator status sinkronisasi

## Nilai yang langsung terasa

- Ringkas pekerjaan berulang: banyak edit manual jadi satu perintah
- Ubah file terkait sekaligus: bukan hanya satu file target
- Risiko lebih rendah: putuskan perubahan dari status sync dan riwayat
- Efisiensi token lebih baik (Pro): kurangi bolak-balik dengan aksi massal

## Dokumen detail

- [Panduan instalasi](installation/README.md)
- [Daftar tool lengkap](tools/overview.md)
- [Panduan detail Sync](sync/overview.md)
- [Panduan dashboard](dashboard/overview.md)
- [WROX Roblox Explorer (Ekstensi VSCode)](installation/roblox-explorer.md)
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

[Panduan Upgrade Pro](pro-upgrade.md)

---

[GitHub Issues](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
