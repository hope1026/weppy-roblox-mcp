# Konfigurasi Gemini CLI

Cara menggunakan Roblox MCP di [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Prasyarat

1. **Node.js** (v18.0.0 atau lebih tinggi)
   ```bash
   node --version
   ```

2. **Gemini CLI** sudah terinstal
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Plugin Roblox Studio** sudah terinstal

## Registrasi MCP Server

### Metode 1: Edit File Konfigurasi (Disarankan)

Tambahkan konten berikut ke file `.gemini/settings.json`:

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

**Lokasi file konfigurasi:**
| Cakupan | Path |
|---------|------|
| Proyek | `<proyek>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Metode 2: Menggunakan Environment Variable

Jika diperlukan environment variable tertentu:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## Tes Koneksi

1. Jalankan **Roblox Studio** → Tab Plugins → **W-MCP** → **Connect**
2. Jalankan **Gemini CLI** lalu masukkan:
   ```
   Beritahu apa yang sedang dipilih di Roblox Studio
   ```

## Periksa Status MCP Server

Anda dapat memeriksa status server yang terhubung dengan perintah `/mcp` di dalam Gemini CLI:

```
/mcp
```

## Konfigurasi Lanjutan

### Filtering Tools

Anda dapat menggunakan atau mengecualikan tools tertentu:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "excludeTools": ["execute_script"],
      "includeTools": ["get_selection", "create_instance", "set_property"]
    }
  }
}
```

> `excludeTools` lebih diprioritaskan daripada `includeTools`.

### Mode Debug

Untuk debugging masalah koneksi:

```bash
gemini --debug
```

## Pemecahan Masalah

### Saat server tidak dimulai

Jalankan MCP server langsung untuk memeriksa error:
```bash
npx -y @weppy/roblox-mcp
```

### Koneksi gagal

- Pastikan plugin Roblox Studio dalam status **Connected**
- Pastikan port 3002 tidak diblokir oleh firewall
- Periksa status server dengan perintah `/mcp`

### Konflik tools

Jika ada tools dengan nama yang sama dari beberapa MCP server, akan ditambahkan prefix dalam format `serverAlias__toolName`.

## Referensi

- [Dokumentasi Resmi Gemini CLI MCP](https://geminicli.com/docs/tools/mcp-server/)
- [Panduan Konfigurasi Gemini CLI](https://geminicli.com/docs/get-started/configuration/)
