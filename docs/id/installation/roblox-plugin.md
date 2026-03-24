# Instalasi Plugin Roblox

Panduan instalasi plugin untuk menghubungkan AI agent di Roblox Studio.

## 1. Unduh Plugin

1. Buka [GitHub Releases](https://github.com/hope1026/weppy-roblox-mcp/releases/latest)
2. Unduh `weppy-roblox-mcp-v{version}.zip`
3. Ekstrak ZIP - Anda akan menemukan `roblox-plugin/WeppyRobloxMCP.rbxm` dan panduan instalasi

Catatan:
- Basic menggunakan paket plugin yang sama dengan kebijakan Basic (Studio -> Local satu arah)
- Setelah lisensi langganan Pro aktif, sync dua arah dan fitur lanjutan yang lebih luas akan terbuka

## 2. Instal Plugin

1. Jalankan **Roblox Studio**
2. Klik tab **Plugins**
3. Klik **Plugins Folder**

![Buka Plugins Folder](../../assets/screenshots/plugins_menu.png)

4. **Salin** `WeppyRobloxMCP.rbxm` ke folder Plugins
5. **Restart Roblox Studio**

## 3. Verifikasi Instalasi

Setelah restart, tombol **W-MCP** muncul di tab Plugins.

![Tombol W-MCP](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. Hubungkan AI Agent

### Persiapan

MCP server harus sudah terinstal. Selesaikan dulu panduan app AI yang Anda pakai:

| Aplikasi AI | Panduan Instalasi |
|-------------|-------------------|
| Claude Code | [Cara Konfigurasi](ai-apps/claude-code.md) |
| Claude Desktop | [Cara Konfigurasi](ai-apps/claude-app.md) |
| Cursor | [Cara Konfigurasi](ai-apps/cursor.md) |
| Codex CLI | [Cara Konfigurasi](ai-apps/codex-cli.md) |
| Codex Desktop | [Cara Konfigurasi](ai-apps/codex-app.md) |
| Gemini CLI | [Cara Konfigurasi](ai-apps/gemini-cli.md) |
| Antigravity | [Cara Konfigurasi](ai-apps/antigravity.md) |

### Menghubungkan

1. Buka proyek apa saja di **Roblox Studio**
2. Tab **Plugins** -> **W-MCP**
3. Klik **Connect**
4. Jika status **"Connected"** tampil, koneksi berhasil

![Layar Utama Plugin](../../assets/screenshots/plugin_main.png)

## 5. Pengaturan (Opsional)

Gunakan tombol pengaturan di kanan atas plugin.

![Layar Pengaturan](../../assets/screenshots/settings.png)

- **Auto Connect**
- **Auto Reconnect**
- **Auto Camera Focus**
- **Language**

## Pemecahan Masalah

### Plugin tidak terlihat

- Restart Roblox Studio sepenuhnya
- Pastikan file sudah disalin benar
- Pastikan `.rbxm` tidak rusak

### Tidak dapat terhubung

- Pastikan MCP server berjalan
- Klik **Connect** lagi
- Cek konflik port 3002

### Koneksi sering terputus

- Aktifkan **Auto Reconnect**
- Restart app AI
