# Konfigurasi Antigravity

Cara menggunakan Roblox MCP di [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** adalah platform pengembangan berbasis agent dari Google, di mana AI agent dapat melakukan tugas kompleks secara otonom melintasi editor kode, terminal, dan browser.

## Prasyarat

1. **Antigravity** sudah terinstal (mendukung macOS, Windows, Linux)
2. **Plugin Roblox Studio** sudah terinstal

## Registrasi MCP Server

### Metode 1: Instal dari MCP Store (Disarankan)

1. Jalankan Antigravity
2. Buka **Settings** → **MCP**
3. Cari `weppy-roblox-mcp` di MCP Store
4. Klik **Install**

### Metode 2: Edit File Konfigurasi Langsung

1. Di Antigravity, klik menu **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

2. Tambahkan konten berikut ke file `mcp_config.json`:

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

3. Simpan lalu klik **Refresh** di **Manage MCP Servers**

**Lokasi file konfigurasi:**

| OS | Path |
|----|------|
| macOS/Linux | `~/.gemini/antigravity/mcp_config.json` |
| Windows | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |

### Metode 3: Minta Agent

Anda juga dapat meminta Antigravity Agent langsung:

```
Tambahkan Roblox MCP (@weppy/roblox-mcp) sebagai MCP server
```

## Penting: Gunakan Path Absolut

> **Perhatian**: Antigravity tidak mendukung variabel `${workspaceFolder}`. Anda **harus** menggunakan **path absolut**.

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "PROJECT_ROOT": "/Users/username/projects/my-roblox-game"
      }
    }
  }
}
```

## Tes Koneksi

1. Jalankan **Roblox Studio** → Tab Plugins → **W-MCP** → **Connect**
2. Masukkan di **Antigravity**:
   ```
   Beritahu apa yang sedang dipilih di Roblox Studio
   ```

## Memanfaatkan Skills

Anda dapat membuat workflow yang lebih powerful dengan menggunakan sistem **Skills** Antigravity:

- Definisikan workflow pengembangan Roblox per proyek
- Paket tugas yang sering digunakan sebagai Skill
- Agent secara otomatis merencanakan, mengeksekusi, dan memverifikasi tugas

## Model yang Didukung

Anda dapat memilih model berikut saat menggunakan Roblox MCP di Antigravity:

| Model | Karakteristik |
|-------|---------------|
| **Gemini 3 Pro** | Model default, tersedia gratis |
| **Claude Sonnet 4.5** | Dukungan model Anthropic |
| **GPT-OSS** | Dukungan model OpenAI |

## Pemecahan Masalah

### Saat server tidak dimulai

Jalankan MCP server langsung untuk memeriksa error:
```bash
npx -y @weppy/roblox-mcp
```

### Koneksi gagal

- Pastikan plugin Roblox Studio dalam status **Connected**
- Pastikan port 3002 tidak diblokir oleh firewall
- Periksa status server di Settings → MCP

### Error path absolut

Error terjadi saat menggunakan `${workspaceFolder}`. Ubah ke path absolut:

```json
// ❌ Salah
"args": ["--workspace", "${workspaceFolder}"]

// ✅ Benar
"args": ["--workspace", "/absolute/path/to/project"]
```

## Referensi

- [Panduan Memulai Antigravity](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Panduan Integrasi MCP Antigravity](https://composio.dev/blog/howto-mcp-antigravity)
- [Koleksi Skills Antigravity](https://github.com/sickn33/antigravity-awesome-skills)
