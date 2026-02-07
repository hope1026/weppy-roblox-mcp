# Instalasi Plugin Roblox

Panduan instalasi plugin untuk menghubungkan AI agent di Roblox Studio.

## 1. Unduh Plugin

1. Unduh `weppy-roblox-mcp-basic.zip` dari [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Ekstrak file ZIP — Anda akan menemukan file `roblox-plugin/WeppyRobloxMCP.rbxm` dan panduan instalasi

## 2. Instal Plugin

1. Jalankan **Roblox Studio**
2. Klik tab **Plugins** di menu atas
3. Klik tombol **Plugins Folder**

![Buka Plugins Folder](../../assets/screenshots/plugins_menu.png)

4. **Salin** file `WeppyRobloxMCP.rbxm` dari folder yang diekstrak ke folder Plugins yang terbuka
5. **Restart Roblox Studio**

## 3. Verifikasi Instalasi

Setelah restart, tombol **W-MCP** akan muncul di tab Plugins.

![Tombol W-MCP](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. Hubungkan AI Agent

### Persiapan

MCP server harus sudah terinstal. Selesaikan panduan yang sesuai dengan aplikasi AI yang Anda gunakan terlebih dahulu:

| Aplikasi AI | Panduan Instalasi |
|-------------|-------------------|
| Claude Code | [Cara Konfigurasi](claude-code.md) |
| Claude Desktop | [Cara Konfigurasi](claude-app.md) |
| Codex CLI | [Cara Konfigurasi](codex-cli.md) |
| Codex Desktop | [Cara Konfigurasi](codex-app.md) |
| Gemini CLI | [Cara Konfigurasi](gemini-cli.md) |
| Cursor, Windsurf, dll | [Cara Konfigurasi](antigravity.md) |

### Menghubungkan

1. Buka proyek apa saja di **Roblox Studio**
2. Tab **Plugins** di atas → Klik **W-MCP**
3. Klik tombol **Connect** di jendela plugin

![Panduan Koneksi](../../assets/screenshots/connection_guide.png)

4. Jika status **"Connected"** ditampilkan, koneksi berhasil!

![Layar Utama Plugin](../../assets/screenshots/plugin_main.png)

## 5. Pengaturan (Opsional)

Klik tombol pengaturan di kanan atas plugin untuk mengubah berbagai opsi.

![Layar Pengaturan](../../assets/screenshots/settings.png)

- **Auto Connect**: Otomatis terhubung ke MCP server saat Studio dimulai
- **Auto Reconnect**: Otomatis mencoba menghubungkan kembali jika koneksi terputus
- **Auto Camera Focus**: Kamera otomatis bergerak ke objek yang dibuat
- **Language**: Ubah bahasa UI plugin

## Pemecahan Masalah

### Plugin tidak terlihat

- Tutup Roblox Studio sepenuhnya lalu restart
- Pastikan file sudah disalin dengan benar ke Plugins Folder
- Pastikan file `.rbxm` tidak rusak

### Tidak dapat terhubung

- Pastikan MCP server berjalan di aplikasi AI
- Klik tombol **Connect** lagi di plugin
- Pastikan port 3002 tidak digunakan oleh program lain

### Koneksi sering terputus

- Aktifkan opsi **Auto Reconnect** di pengaturan
- Coba restart aplikasi AI
