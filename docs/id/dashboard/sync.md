# Sync

> Pantau status saat ini, pengaturan arah, dan log sinkronisasi Studio <-> file lokal.

![Sync — status sinkronisasi, pengaturan arah, log](../../assets/screenshots/dashboard/dashboard_sync.png)

> Untuk panduan detail fitur Sync itu sendiri, lihat [Panduan detail fitur Sync](../sync/overview.md).

## Ikhtisar

Halaman Sync menampilkan status dan pengaturan sinkronisasi Studio <-> file lokal secara visual. Halaman ini hanya dapat diakses saat plugin terhubung (L2).

## Sync Status

Menampilkan status sinkronisasi saat ini:

| Status | Arti |
|--------|------|
| **Idle** | Menunggu sinkronisasi |
| **Initializing** | Sinkronisasi awal sedang berlangsung |
| **Syncing** | Sinkronisasi inkremental sedang berlangsung |
| **Error** | Terjadi kesalahan sinkronisasi |

Kartu status juga menampilkan path sinkronisasi, jumlah instance yang disinkronkan, dan mode penerapan saat ini (Auto/Manual).

## Sync Directions

Menampilkan arah sinkronisasi per tipe dalam bentuk tabel:

| Kolom | Deskripsi |
|-------|-----------|
| Type | Tipe target sinkronisasi (Scripts, Values, Instances, Data, Services) |
| Direction | Arah sinkronisasi (Local -> Studio, Studio -> Local) |
| Apply Mode | Mode penerapan (Auto/Manual) |

Periksa arah sinkronisasi setiap tipe untuk memahami perubahan mana yang direfleksikan ke arah mana.

## Sync Config

Menampilkan nilai pengaturan sinkronisasi:
- Max Depth — kedalaman maksimum sinkronisasi
- Max Instances — jumlah maksimum instance yang disinkronkan
- Interval — interval sinkronisasi

## Sync Log

Menampilkan event sinkronisasi secara kronologis. Setiap item log mencakup tag jenis perubahan (create, update, delete, dll.) dan path target.

## Contoh Penggunaan

### Memeriksa Status Sinkronisasi

```
"Saya ingin memastikan Sync berjalan dengan benar"
```

Periksa apakah Sync Status menunjukkan Idle, dan konfirmasi di Sync Log bahwa perubahan terbaru tercatat dengan normal.

### Memahami Arah Sinkronisasi

```
"Saya ingin tahu ke arah mana perubahan script disinkronkan"
```

Periksa Direction dari tipe Scripts di tabel Sync Directions.

## Dokumen Terkait

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Panduan detail fitur Sync](../sync/overview.md)
