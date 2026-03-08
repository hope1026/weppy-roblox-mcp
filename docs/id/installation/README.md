# Panduan Instalasi

Untuk menggunakan Roblox MCP, kamu perlu install **dua hal**.

```
Aplikasi AI (Claude, Codex, Gemini, dll)
       │
   MCP Server ← Mengubah perintah AI jadi format yang Roblox mengerti
       │
Plugin Roblox Studio ← Menjalankan perintah di dalam Studio
```

Ketika aplikasi AI bilang "buatkan part biru", MCP server mengonversi perintah ini, dan plugin Roblox Studio yang benar-benar membuat part tersebut.

---

## Langkah 1: Install Plugin Roblox Studio

Download file plugin dari GitHub, lalu taruh di folder Plugins Roblox Studio.

👉 [Panduan Instalasi Plugin](roblox-plugin.md)

---

## Langkah 2: Daftarkan MCP Server di Aplikasi AI

Daftarkan MCP server ke aplikasi AI yang kamu pakai. Bisa digunakan di semua aplikasi AI yang mendukung MCP.

| Aplikasi AI | Cara Konfigurasi |
|-------------|------------------|
| Claude Code | [Lihat caranya](ai-apps/claude-code.md) |
| Claude Desktop | [Lihat caranya](ai-apps/claude-app.md) |
| Codex CLI | [Lihat caranya](ai-apps/codex-cli.md) |
| Codex Desktop | [Lihat caranya](ai-apps/codex-app.md) |
| Gemini CLI | [Lihat caranya](ai-apps/gemini-cli.md) |
| Antigravity | [Lihat caranya](ai-apps/antigravity.md) |

> Aplikasi AI lain yang mendukung MCP juga bisa dipakai. Command MCP server-nya: `npx -y @weppy/roblox-mcp`

---

## Opsional: Install Roblox Explorer (Ekstensi VSCode)

Jelajahi tree instance yang sudah disinkronkan di dalam VSCode dengan ikon kelas Roblox.

👉 [Panduan Instalasi Roblox Explorer](roblox-explorer.md)

---

## Setelah Instalasi Selesai

1. Buka **Roblox Studio**, di tab Plugins klik **W-MCP** → **Connect**
2. Di **aplikasi AI**, coba test:

```
Buatkan part biru di Roblox Studio
```

Kalau part-nya berhasil dibuat, berarti instalasi sudah selesai!
