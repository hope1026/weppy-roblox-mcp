# Konfigurasi Claude Code

Cara menggunakan Roblox MCP di [Claude Code](https://claude.ai/code) (tools coding AI berbasis terminal).

## Prasyarat

- **Claude Code** sudah terinstal
- **Plugin Roblox Studio** sudah terinstal

## Instalasi

```bash
npm install -g @anthropic-ai/claude-code
```

## Registrasi MCP Server

### Metode 1: Instal dari Marketplace (Disarankan)

Jalankan di terminal Claude Code:

```bash
# Tambah marketplace
/plugin marketplace add hope1026/weppy-roblox-mcp

# Instal plugin
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

Verifikasi instalasi:
```bash
/plugin list
```

### Metode 2: Edit File Konfigurasi Langsung

Buat file `.mcp.json`:

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
| Proyek | `<proyek>/.mcp.json` |
| Global | `~/.claude/mcp.json` |

## Manajemen Server Otomatis

Claude Code mengelola MCP server secara otomatis:

- Dimulai otomatis saat diperlukan
- Berhenti otomatis saat sesi berakhir
- Tidak perlu konfigurasi tambahan

## Tes Koneksi

1. Jalankan **Roblox Studio** → Tab Plugins → **WEPPY** → **Connect**
2. Tes di **Claude Code**:
   ```
   Buatkan part biru di Roblox Studio
   ```

## Pemecahan Masalah

### Instalasi plugin gagal

```bash
# Bersihkan cache lalu coba lagi
/plugin cache clear
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

### Server tidak dimulai

1. Periksa versi Node.js (minimal 18.0):
   ```bash
   node --version
   ```

2. Tes jalankan server secara manual:
   ```bash
   npx -y @weppy/roblox-mcp
   ```

### Tools MCP tidak terlihat

Periksa di Claude Code:
```
Tampilkan daftar tools MCP yang tersedia
```

## Referensi

- [Dokumentasi Resmi Claude Code](https://docs.anthropic.com/claude-code)
