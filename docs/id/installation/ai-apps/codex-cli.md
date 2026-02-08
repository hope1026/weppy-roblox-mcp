# Konfigurasi Codex CLI

Cara menggunakan Roblox MCP di [OpenAI Codex CLI](https://github.com/openai/codex) (tools coding AI berbasis terminal).

## Prasyarat

- **Node.js** (v18.0.0 atau lebih tinggi)
- **Plugin Roblox Studio** sudah terinstal

## Instalasi

```bash
npm install -g @openai/codex
```

## Registrasi MCP Server

### Metode 1: Perintah CLI (Disarankan)

```bash
codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp
```

### Metode 2: Edit File Konfigurasi Langsung

Tambahkan konten berikut ke file `~/.codex/config.toml`:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "npx"
args = ["-y", "@weppy/roblox-mcp"]
```

**Lokasi file konfigurasi:**

| OS | Path |
|----|------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## Tes Koneksi

1. Jalankan **Roblox Studio** → Tab Plugins → **W-MCP** → **Connect**
2. Jalankan **Codex CLI** lalu masukkan:
   ```
   Beritahu apa yang sedang dipilih di Roblox Studio
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

## Referensi

- [Codex CLI GitHub](https://github.com/openai/codex)
- [Dokumentasi Resmi Codex MCP](https://developers.openai.com/codex/mcp/)
- [Referensi Konfigurasi Codex](https://developers.openai.com/codex/config-reference/)
