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

## Instalasi Satu Perintah (Direkomendasikan)

Install MCP server, plugin Roblox Studio, dan daftarkan ke aplikasi AI dalam satu langkah:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Restart Roblox Studio — selesai!

Pendaftaran MCP otomatis mendukung **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, dan Antigravity**.

Jika eksekusi PowerShell diblokir di Windows, lanjutkan dengan instalasi manual di bawah. Jika kamu memakai paket ZIP, kamu juga bisa menjalankan `setup-plugin.bat` dan `setup-mcp.bat`.

---

## Instalasi Manual

Ini adalah metode alternatif jika instalasi satu perintah tidak berjalan, atau jika instalasi otomatis tidak bisa dipakai di lingkunganmu.

### Langkah 1: Install Plugin Roblox Studio

Download file plugin dari GitHub, lalu taruh di folder Plugins Roblox Studio.

👉 [Panduan Instalasi Plugin](roblox-plugin.md)

---

### Langkah 2: Daftarkan MCP Server di Aplikasi AI

Daftarkan MCP server ke aplikasi AI yang kamu pakai. Bisa digunakan di semua aplikasi AI yang mendukung MCP.

| Aplikasi AI | Cara Konfigurasi |
|-------------|------------------|
| Claude Code | [Lihat caranya](ai-apps/claude-code.md) |
| Claude Desktop | [Lihat caranya](ai-apps/claude-app.md) |
| Cursor | [Lihat caranya](ai-apps/cursor.md) |
| Codex CLI | [Lihat caranya](ai-apps/codex-cli.md) |
| Codex Desktop | [Lihat caranya](ai-apps/codex-app.md) |
| Gemini CLI | [Lihat caranya](ai-apps/gemini-cli.md) |
| Antigravity | [Lihat caranya](ai-apps/antigravity.md) |

> Aplikasi AI lain yang mendukung MCP juga bisa dipakai. Command MCP server-nya: `npx -y @weppy/roblox-mcp`

---

## Opsional: Install WROX Roblox Explorer (Ekstensi VSCode)

Jelajahi tree instance yang sudah disinkronkan di dalam VSCode dengan ikon kelas Roblox.
Ekstensi opsional ini mengharuskan setup Roblox MCP di atas sudah selesai lebih dulu, karena Explorer membaca data Sync dari `wrox-project-sync` di bawah root proyek.

👉 [Panduan Instalasi WROX Roblox Explorer](roblox-explorer.md)

Instal langsung:
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

---

## Setelah Instalasi Selesai

1. Buka **Roblox Studio**, di tab Plugins klik **WROX** → **Connect**
2. Di **aplikasi AI**, coba test:

```
Buatkan part biru di Roblox Studio
```

Kalau part-nya berhasil dibuat, berarti instalasi sudah selesai!
