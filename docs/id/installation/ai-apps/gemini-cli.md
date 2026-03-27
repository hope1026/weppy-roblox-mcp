# Pengaturan Gemini CLI

Cara menggunakan Roblox MCP dengan [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Prasyarat

1. **Node.js** (v18.0.0 atau lebih tinggi)
   ```bash
   node --version
   ```

2. **Gemini CLI** terinstal
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Plugin Roblox Studio** terinstal

## Mendaftarkan Server MCP

### Metode 1: Perintah CLI (Disarankan)

Daftarkan dengan satu perintah di terminal Anda:

```bash
gemini mcp add weppy-roblox-mcp npx --trust -- -y @weppy/roblox-mcp
```

> Flag `--trust` melewati prompt konfirmasi untuk setiap pemanggilan tool.

Untuk mendaftar secara global, tambahkan `-s user`:

```bash
gemini mcp add weppy-roblox-mcp npx -s user --trust -- -y @weppy/roblox-mcp
```

### Metode 2: Edit File Konfigurasi

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
| Lingkup | Path |
|---------|------|
| Proyek | `<proyek>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Metode 3: Menggunakan Variabel Lingkungan

Jika variabel lingkungan tertentu diperlukan:

**CLI:**
```bash
gemini mcp add weppy-roblox-mcp npx --trust -e HTTP_PORT=3002 -- -y @weppy/roblox-mcp
```

**File konfigurasi:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_PORT": "3002"
      }
    }
  }
}
```

## Tes Koneksi

1. Buka **Roblox Studio** → tab Plugins → **WROX** → **Connect**
2. Jalankan **Gemini CLI** dan masukkan:
   ```
   Beritahu saya apa yang sedang dipilih di Roblox Studio
   ```

## Memeriksa Status Server MCP

Anda dapat memeriksa status server yang terhubung dengan perintah `/mcp` di Gemini CLI:

```
/mcp
```

## Pemecahan Masalah

### Server tidak dapat dimulai

Jalankan server MCP secara langsung untuk memeriksa kesalahan:
```bash
npx -y @weppy/roblox-mcp
```

### Koneksi gagal

- Verifikasi bahwa plugin Roblox Studio dalam status **Connected**
- Periksa apakah port 3002 diblokir oleh firewall
- Periksa status server dengan perintah `/mcp`

### Konflik tool

Jika beberapa server MCP memiliki tool dengan nama yang sama, mereka akan diberi awalan dengan format `serverAlias__toolName`.

## Referensi

- [Dokumentasi Resmi Gemini CLI MCP](https://geminicli.com/docs/tools/mcp-server/)
- [Panduan Konfigurasi Gemini CLI](https://geminicli.com/docs/get-started/configuration/)
