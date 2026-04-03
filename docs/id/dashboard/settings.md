# Settings

> Periksa dan kelola informasi lisensi, pengaturan server, dan bahasa.

## Ikhtisar

Di halaman Settings, Anda dapat melihat informasi lisensi dan pengaturan server, serta mengubah sebagian pengaturan. Halaman ini selalu dapat diakses saat dashboard berada dalam status **Server terhubung** atau **Studio terhubung**.

## License (hanya-baca)

Menampilkan status lisensi saat ini:

| Item | Deskripsi |
|------|-----------|
| Status | Badge status (Active/Inactive) |
| Tier | Tier saat ini (Basic/Pro) |
| License Key | Kunci lisensi yang disamarkan |
| Provider | Informasi penyedia lisensi |

## General

| Pengaturan | Deskripsi |
|------------|-----------|
| Log Level | Tingkat output log |
| History Recording | Apakah riwayat eksekusi alat disimpan |
| Stats Collection | Apakah statistik alat dikumpulkan |
| Request Timeout | Batas waktu permintaan (detik) |

## Server Environment (hanya-baca)

Menampilkan pengaturan server yang dikonfigurasi melalui variabel lingkungan:

| Variabel Lingkungan | Deskripsi | Nilai Default |
|---------------------|-----------|---------------|
| `HTTP_PORT` | Port HTTP | 3002 |
| `HTTP_HOST` | Host HTTP | 127.0.0.1 |
| `DASHBOARD_AUTO_OPEN` | Pembukaan otomatis dashboard | true |

## Language

Mengubah bahasa UI dashboard. Mendukung 6 bahasa + Auto (deteksi otomatis bahasa browser).

| Opsi | Bahasa |
|------|--------|
| Auto | Deteksi otomatis bahasa browser |
| English | Inggris |
| 한국어 | Korea |
| 日本語 | Jepang |
| Español | Spanyol |
| Português | Portugis |
| Bahasa Indonesia | Indonesia |

## Dokumen Terkait

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
