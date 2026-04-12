# Pengaturan Cursor

Cara menggunakan Roblox MCP dengan [Cursor](https://cursor.com/).

## Prasyarat

- **Cursor** sudah terpasang
- **Node.js** (v18.0.0 atau lebih baru)
- **Plugin Roblox Studio** sudah terpasang

## Mendaftarkan server MCP

### Metode 1: Konfigurasi proyek

Tambahkan isi berikut ke `.cursor/mcp.json` di proyek Anda:

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

### Metode 2: Konfigurasi global

Tambahkan isi yang sama ke file konfigurasi global Cursor.

**Lokasi file konfigurasi:**

| Cakupan | Path |
|---------|------|
| Proyek | `<proyek>/.cursor/mcp.json` |
| Global (macOS/Linux) | `~/.cursor/mcp.json` |
| Global (Windows) | `%USERPROFILE%\\.cursor\\mcp.json` |

> Jika file sudah ada, gabungkan entri `weppy-roblox-mcp` ke dalam objek `mcpServers` yang sudah ada.

### Terapkan perubahan

Setelah mengubah konfigurasi, muat ulang jendela Cursor atau mulai ulang aplikasinya.

## Uji koneksi

1. Buka **Roblox Studio** → tab Plugins → **WEPPY** → **Connect**
2. Di **Cursor**, masukkan:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Pemecahan masalah

### Server MCP tidak muncul

- Pastikan path file konfigurasi sudah benar
- Pastikan sintaks JSON valid
- Muat ulang Cursor setelah mengubah konfigurasi

### Server tidak bisa dijalankan

Jalankan server MCP secara langsung untuk memeriksa error:

```bash
npx -y @weppy/roblox-mcp
```

### Koneksi gagal

- Pastikan plugin Roblox Studio berada dalam status **Connected**
- Periksa apakah port 3002 diblokir firewall

## Referensi

- [Dokumentasi Cursor MCP](https://docs.cursor.com/context/model-context-protocol)
