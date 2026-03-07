# Roblox MCP

> Server MCP dan plugin untuk Roblox Studio — kendalikan script, terrain, asset, dan lighting dengan Claude Code, Cursor, Codex, dan Gemini.

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | **Bahasa Indonesia**

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

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

## Nilai yang langsung terasa

- Ringkas pekerjaan berulang: banyak edit manual jadi satu perintah
- Ubah file terkait sekaligus: bukan hanya satu file target
- Risiko lebih rendah: putuskan perubahan dari status sync dan riwayat
- Efisiensi token lebih baik (Pro): kurangi bolak-balik dengan aksi massal

## Dokumen detail

- [Panduan instalasi](../en/installation/README.md)
- [Cakupan tool](../en/tools/overview.md)
- [Panduan detail Sync](../en/sync/overview.md)
- [Kompatibilitas](../compatibility.md)
- [Panduan pemecahan masalah](../troubleshooting.md)

## Upgrade Pro

Sync dua arah, kemampuan kreasi lanjutan, dan efisiensi token AI — semua dalam satu upgrade.

[Panduan Upgrade Pro](../en/pro-upgrade.md)

---

[GitHub Issues](https://github.com/hope1026/roblox-mcp/issues) · [Discussions](https://github.com/hope1026/roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
