# Konfigurasi Codex App

Cara menggunakan Roblox MCP di [OpenAI Codex App](https://openai.com/codex/) (macOS).

> **Dirilis 2 Februari 2026** - Aplikasi native macOS yang mendukung workflow multi-agent

## Prasyarat

- **Codex App** sudah terinstal (macOS)
- **Plugin Roblox Studio** sudah terinstal

## Registrasi MCP Server

### Sinkronisasi Otomatis dari Konfigurasi Codex CLI

Jika Anda sudah mengkonfigurasi MCP di Codex CLI, Anda dapat langsung menggunakannya di aplikasi **tanpa konfigurasi tambahan**.

```
Riwayat sesi CLI dan konfigurasi secara otomatis disinkronkan ke aplikasi.
```

### Untuk Konfigurasi Baru

Tambahkan di **Settings** → **MCP Servers** dalam aplikasi:

```
Server name: weppy-roblox-mcp
Command: <path-to>/weppy-roblox-mcp-<os>-<arch>
```

> Download dari [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)

## Tes Koneksi

1. Jalankan **Roblox Studio** → Tab Plugins → **W-MCP** → **Connect**
2. Mulai percakapan baru di **Codex App** dan tes:
   ```
   Beritahu apa yang sedang dipilih di Roblox Studio
   ```

## Pemecahan Masalah

### Saat server tidak dimulai

Jalankan MCP server langsung untuk memeriksa error:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Koneksi gagal

- Pastikan plugin Roblox Studio dalam status **Connected**
- Pastikan port 3002 tidak diblokir oleh firewall

## Referensi

- [Pengenalan Codex App](https://openai.com/index/introducing-the-codex-app/)
- [Dokumentasi Resmi Codex MCP](https://developers.openai.com/codex/mcp/)
