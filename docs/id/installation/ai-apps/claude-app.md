# Konfigurasi Claude Desktop App

Cara menggunakan Roblox MCP di [Claude Desktop App](https://claude.ai/download).

## Prasyarat

- **Claude Desktop App** sudah terinstal
- **Node.js** (v18.0.0 atau lebih tinggi)
- **Plugin Roblox Studio** sudah terinstal

## Registrasi MCP Server

### Metode 1: Desktop Extensions (Disarankan)

> Mulai 2026, instalasi sekali klik tersedia seperti ekstensi browser

1. Claude Desktop → **Settings** → **Extensions**
2. Cari `weppy-roblox-mcp`
3. Klik **Install**

### Metode 2: Edit File Konfigurasi Langsung

1. Claude Desktop → **Settings** → **Developers** → Klik **Edit Config**

2. Tambahkan konten berikut ke file `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"]
    }
  }
}
```

3. **Tutup sepenuhnya** Claude Desktop lalu restart

**Lokasi file konfigurasi:**

| OS | Path |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## Tes Koneksi

1. Jalankan **Roblox Studio** → Tab Plugins → **WEPPY** → **Connect**
2. Mulai percakapan baru di **Claude Desktop** dan tes:
   ```
   Buatkan part biru di Roblox Studio
   ```

## Pemecahan Masalah

### MCP server tidak dimuat

1. **Periksa sintaks JSON**: Validasi file konfigurasi dengan JSON validator online
2. **Restart Claude Desktop sepenuhnya**: Setelah mengubah konfigurasi, pastikan untuk menutup aplikasi sepenuhnya lalu restart
3. **Periksa path**: Pastikan command dan args sudah benar

### Saat server tidak dimulai

Jalankan MCP server langsung untuk memeriksa error:
```bash
npx -y @weppy/roblox-mcp
```

### Koneksi gagal

- Pastikan plugin Roblox Studio dalam status **Connected**
- Pastikan port 3002 tidak diblokir oleh firewall

## Referensi

- [Panduan Resmi MCP Claude Desktop](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [Panduan Koneksi MCP Server](https://modelcontextprotocol.io/docs/develop/connect-local-servers)
