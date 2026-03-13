# Dunia & lingkungan

> Bangun dan periksa dunia game dengan lighting, terrain, query spasial, dan tool kamera.

## Tool yang termasuk

| Tool | Tier | Deskripsi |
|------|:----:|-----------|
| `manage_lighting` | Pro | Mengatur Lighting, Atmosphere, Sky, dan waktu |
| `manage_terrain` | Pro | Membuat dan mengedit terrain, termasuk data voxel |
| `spatial_query` | Pro | Raycast, pencarian tanah, validasi penempatan, dan heightmap |
| `manage_camera` | Basic | Memeriksa status kamera, memindahkan fokus, dan memberi saran sudut pandang |

## Alur kerja utama

### Menyetel suasana (Pro)

```
"Ubah map menjadi suasana senja dengan langit oranye, kabut lebih tebal, dan waktu 18:00."
```

Gunakan `manage_lighting.time` untuk waktu, `manage_lighting.atmosphere` untuk kabut, dan `manage_lighting.sky` untuk tampilan langit.

### Membangun terrain (Pro)

```
"Buat bukit rumput radius 200 di tengah map lalu kelilingi dengan air."
```

Gunakan `manage_terrain.fill_ball` untuk bukit dan `manage_terrain.fill_block` untuk air di sekitarnya.

### Memvalidasi penempatan (Pro)

```
"Cari area datar tempat saya bisa meletakkan bangunan ini."
```

Gunakan `spatial_query.find_flat` untuk mencari kandidat, `spatial_query.check_placement` untuk memvalidasi, dan `manage_camera.focus_position` untuk memeriksa hasilnya secara visual.

## Referensi aksi

### Manage Lighting (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `lighting` | Mengatur properti layanan Lighting | Pro |
| `atmosphere` | Mengatur properti Atmosphere | Pro |
| `sky` | Mengatur properti Sky | Pro |
| `terrain_props` | Mengatur properti visual dan air Terrain | Pro |
| `time` | Mengatur waktu hari | Pro |

### Manage Terrain (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `fill_block` | Mengisi terrain berbentuk blok | Pro |
| `fill_ball` | Mengisi terrain berbentuk bola | Pro |
| `fill_cylinder` | Mengisi terrain berbentuk silinder | Pro |
| `fill_wedge` | Mengisi terrain berbentuk baji | Pro |
| `clear_region` | Menghapus terrain di region | Pro |
| `clear_bounds` | Menghapus terrain di batas | Pro |
| `replace_material` | Mengganti material di region | Pro |
| `colors_get` | Mendapatkan warna material | Pro |
| `colors_set` | Mengatur warna material | Pro |
| `read_voxel` | Membaca voxel tunggal | Pro |
| `read_voxels` | Membaca data voxel massal | Pro |
| `write_voxels` | Menulis data voxel massal | Pro |
| `generate` | Menghasilkan terrain prosedural | Pro |
| `smooth` | Menghaluskan terrain | Pro |

### Spatial Query (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `raycast` | Meluncurkan satu ray | Pro |
| `find_ground` | Menemukan posisi tanah di bawah titik | Pro |
| `check_placement` | Memeriksa apakah penempatan bebas tabrakan | Pro |
| `multi_raycast` | Meluncurkan beberapa ray sekaligus | Pro |
| `scan_area` | Menghasilkan heightmap suatu area | Pro |
| `find_flat` | Menemukan area datar untuk bangunan | Pro |
| `find_spawn` | Menemukan posisi spawn yang sesuai | Pro |
| `analyze_walkable` | Menganalisis grid area yang bisa dilalui | Pro |
| `spatial_map` | Mendapatkan semua posisi BasePart | Pro |
| `find_space` | Menemukan ruang kosong untuk objek | Pro |
| `bounds` | Mendapatkan bounding box instance | Pro |
| `snap_grid` | Menyelaraskan posisi ke grid | Pro |
| `collision` | Memeriksa tabrakan AABB | Pro |

### Manage Camera (Basic)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `info` | Mendapatkan posisi, rotasi, FOV, dan ukuran viewport kamera | Basic |
| `focus_path` | Memindahkan kamera untuk fokus pada instance | Basic |
| `focus_position` | Memindahkan kamera untuk fokus pada posisi | Basic |
| `suggest` | Mendapatkan tampilan kamera yang disarankan untuk target | Basic |

## Dokumen terkait

- [Instance & properti](instances-and-properties.md) - menempatkan objek dunia
- [Asset & efek](assets-and-effects.md) - menambahkan efek, audio, dan animasi
- [Daftar tool lengkap](overview.md)
