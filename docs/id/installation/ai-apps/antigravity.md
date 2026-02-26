# Pengaturan Antigravity

Cara menggunakan Roblox MCP dengan [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** adalah platform pengembangan berbasis agen dari Google, di mana agen AI secara otonom berpindah antara pengeditan kode, terminal, dan browser untuk menjalankan tugas yang kompleks.

## Prasyarat

1. **Antigravity** sudah terinstal (lihat dokumentasi resmi untuk OS yang didukung/persyaratan)
2. **Plugin Roblox Studio** sudah terinstal

## Mendaftarkan server MCP

Di Antigravity, server MCP dikelola di **panel agen (Agent pane)**.

### Pendaftaran manual lewat raw config (disarankan)

1. Di panel agen, klik **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

![Buka menu MCP Servers](../../../assets/screenshots/antigravity/antigravity_mcp_services_menu.png)

2. Pada konfigurasi (JSON) yang ditampilkan, tambahkan/gabungkan isi berikut:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> Download dari [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest). `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64

![Edit raw config](../../../assets/screenshots/antigravity/antigravity_mcp_raw.png)

3. Setelah menyimpan, lakukan **Refresh** (atau restart/refresh sesuai petunjuk UI)

> Lokasi/nama file konfigurasi yang sebenarnya bisa berbeda tergantung OS dan versi Antigravity, jadi selalu edit berdasarkan lokasi yang ditunjukkan di **View raw config**.

### Opsi: Atur port/log lewat variabel lingkungan

Disarankan untuk mempertahankan nilai default (HTTP `127.0.0.1:3002`). Jika diperlukan, Anda dapat mengatur variabel lingkungan seperti berikut:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>",
      "env": {
        "HTTP_HOST": "127.0.0.1",
        "HTTP_PORT": "3002",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## Uji koneksi

1. Jalankan **Roblox Studio** → tab Plugins → **W-MCP** → **Connect**
2. Di **Antigravity**, masukkan:
   ```
   Beri tahu saya apa yang sedang dipilih di Roblox Studio saat ini
   ```

## Pemecahan masalah

### Jika server tidak dapat dijalankan

Jalankan server MCP secara langsung untuk melihat error:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Gagal terhubung

- Pastikan plugin Roblox Studio berstatus **Connected**
- Pastikan port **3002** tidak diblokir oleh firewall
- Cek status server di panel agen **⋯** → **MCP Servers**
- (Lanjutan) Jika Anda mengubah `HTTP_PORT`, pastikan pengaturan plugin/bridge Roblox Studio juga menggunakan port yang sama.

## Referensi

- [Pengenalan Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [Panduan memulai Antigravity (Codelab)](https://codelabs.developers.google.com/getting-started-google-antigravity)
