# Playtest

> Periksa status playtest yang dijalankan AI dan hasil pengujian.

![Playtest — status playtest dan riwayat pengujian](../../assets/screenshots/dashboard/dashboard_playtest.png)

## Ikhtisar

Halaman Playtest menampilkan status dan hasil pengujian dari playtest yang dijalankan AI. Halaman ini hanya dapat diakses saat plugin terhubung (L2).

## Playtest Status

Menampilkan status playtest saat ini:

| Status | Arti |
|--------|------|
| **NotRunning** | Playtest tidak berjalan |
| **Running** | Playtest sedang berjalan |
| **Paused** | Playtest dijeda (mode Run) |

## Test History

Menampilkan hasil pengujian yang dijalankan AI melalui aksi `run_test` secara kronologis:

| Item | Deskripsi |
|------|-----------|
| Timestamp | Waktu eksekusi pengujian |
| Test Report | Tautan ke laporan pengujian |
| Mode | Mode eksekusi (play/run) |
| Duration | Durasi pengujian |
| Status | Hasil (Passed/Failed) |

Klik laporan pengujian untuk melihat laporan detail dalam format markdown beserta log.

## Contoh Penggunaan

### Analisis Kegagalan Pengujian

```
"Saya ingin mencari penyebab kegagalan pengujian otomatis yang baru saja dijalankan"
```

Cari pengujian dengan status Failed di Test History dan klik Test Report untuk melihat log detail dan penyebab kegagalan.

### Memeriksa Riwayat Pengujian

```
"Saya ingin melihat status keberhasilan/kegagalan pengujian yang dijalankan hari ini"
```

Periksa timestamp dan Status di Test History untuk memahami tren hasil pengujian.

## Dokumen Terkait

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Playtest & tes otomatis (alat)](../tools/playtest.md)
