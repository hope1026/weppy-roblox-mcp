# Alat Roblox MCP

Untuk parameter detail, periksa definisi alat MCP secara langsung.

Dokumen terkait:
- [Panduan detail Sync](../sync/overview.md)

Kebijakan Sync:
- Basic: Studio -> Local sinkronisasi satu arah
- Pro: Sinkronisasi dua arah + cakupan aksi lanjutan lebih luas (efisiensi token AI lebih baik dengan alur kerja massal)

## Query Instances (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get` | Mendapatkan properti instance berdasarkan path | Basic |
| `children` | Mendapatkan anak langsung atau semua keturunan | Basic |
| `find_child` | Mencari anak pertama berdasarkan nama dan filter kelas opsional | Basic |
| `find_descendant` | Mencari keturunan pertama berdasarkan nama | Basic |
| `wait_for_child` | Menunggu anak muncul (dengan timeout) | Basic |
| `class_info` | Mendapatkan informasi kelas dan properti yang valid | Basic |
| `search_name` | Mencari instance berdasarkan pola nama (mendukung wildcard) | Basic |
| `search_class` | Mencari instance berdasarkan nama kelas | Basic |
| `file_tree` | Mendapatkan struktur pohon file dari root | Pro |
| `project_structure` | Mendapatkan struktur proyek lengkap | Pro |
| `descendants` | Mendapatkan semua keturunan dari sebuah instance | Pro |
| `ancestors` | Mendapatkan semua leluhur dari sebuah instance | Pro |
| `search_property` | Mencari instance berdasarkan nilai properti | Pro |
| `search_tag` | Mencari instance berdasarkan tag | Pro |

## Mutate Instances (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `create` | Membuat instance baru | Basic |
| `create_with_props` | Membuat instance dengan properti awal | Basic |
| `delete` | Menghapus instance | Basic |
| `clone` | Mengkloning instance | Basic |
| `move` | Memindahkan instance ke parent baru | Basic |
| `rename` | Mengganti nama instance | Basic |
| `pivot` | Mengatur posisi pivot atau CFrame | Basic |
| `create_tree` | Membuat pohon instance hierarkis | Pro |
| `mass_create` | Membuat beberapa instance sekaligus | Pro |
| `mass_delete` | Menghapus beberapa instance | Pro |
| `mass_duplicate` | Menduplikasi beberapa instance | Pro |
| `smart_duplicate` | Menduplikasi dengan jarak dan jumlah | Pro |

## Manage Properties (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get` | Mendapatkan nilai satu properti | Basic |
| `set` | Mengatur nilai satu properti | Basic |
| `get_all` | Mendapatkan semua properti dari sebuah instance | Basic |
| `set_multiple` | Mengatur beberapa properti sekaligus | Basic |
| `get_attr` | Mendapatkan nilai atribut | Basic |
| `set_attr` | Mengatur nilai atribut | Basic |
| `get_all_attrs` | Mendapatkan semua atribut | Basic |
| `delete_attr` | Menghapus atribut | Basic |
| `add_tag` | Menambahkan tag ke instance | Basic |
| `remove_tag` | Menghapus tag dari instance | Basic |
| `check_tag` | Memeriksa apakah instance memiliki tag | Basic |
| `get_tags` | Mendapatkan semua tag pada instance | Basic |
| `get_tagged` | Mendapatkan semua instance dengan tag tertentu | Basic |
| `set_calculated` | Mengatur properti menggunakan ekspresi matematika | Pro |
| `set_relative` | Mengatur properti relatif terhadap nilai saat ini | Pro |
| `mass_set` | Mengatur properti pada beberapa instance | Pro |
| `mass_get` | Mendapatkan properti dari beberapa instance | Pro |
| `modify_children` | Memodifikasi semua anak dari sebuah parent | Pro |

## Manage Scripts (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get_source` | Mendapatkan kode sumber script | Basic |
| `set_source` | Mengatur kode sumber script | Basic |
| `create` | Membuat script baru | Basic |
| `delete` | Menghapus script | Basic |
| `edit_replace` | Mengganti baris tertentu di script | Basic |
| `edit_insert` | Menyisipkan baris pada posisi | Basic |
| `edit_delete` | Menghapus baris tertentu | Basic |
| `search` | Mencari teks di script | Basic |
| `get_dependencies` | Mendapatkan dependensi script | Basic |
| `replace` | Penggantian massal di seluruh script | Pro |

## Manage Lighting (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `lighting` | Mengatur properti layanan Lighting | Pro |
| `atmosphere` | Mengatur properti Atmosphere | Pro |
| `sky` | Mengatur properti Sky | Pro |
| `terrain_props` | Mengatur properti visual/air Terrain | Pro |
| `time` | Mengatur waktu hari | Pro |

## Manage Selection (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get` | Mendapatkan seleksi saat ini | Basic |
| `set` | Mengganti seleksi saat ini | Basic |
| `clear` | Menghapus seleksi | Basic |
| `cached` | Mendapatkan seleksi dari cache tanpa round-trip | Basic |
| `context` | Mendapatkan konteks detail dengan sumber dan properti | Pro |
| `details` | Mendapatkan detail hierarkis dengan leluhur/keturunan | Pro |
| `add` | Menambahkan item ke seleksi | Pro |
| `remove` | Menghapus item dari seleksi | Pro |
| `watch` | Memantau perubahan seleksi | Pro |

## Manage Camera (Basic)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `info` | Mendapatkan posisi, rotasi, FOV, dan ukuran viewport kamera | Basic |
| `focus_path` | Memindahkan kamera untuk fokus pada instance | Basic |
| `focus_position` | Memindahkan kamera untuk fokus pada posisi | Basic |
| `suggest` | Mendapatkan tampilan kamera yang disarankan untuk target | Basic |

## Manage Tween (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `create` | Membuat tween dengan properti target | Pro |
| `play` | Memutar tween yang dibuat | Pro |
| `pause` | Menjeda tween yang berjalan | Pro |
| `cancel` | Membatalkan tween | Pro |

## Manage Audio (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `play` | Memutar suara (membuat Sound jika diperlukan) | Pro |
| `stop` | Menghentikan suara yang diputar | Pro |
| `pause` | Menjeda suara yang diputar | Pro |
| `resume` | Melanjutkan suara yang dijeda | Pro |
| `set_listener` | Mengatur tipe/target listener audio | Pro |

## Manage Animation (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `load` | Memuat animasi pada Humanoid/AnimationController | Pro |
| `play` | Memutar track animasi yang dimuat | Pro |
| `stop` | Menghentikan animasi yang diputar | Pro |
| `get_tracks` | Mendaftar semua track animasi yang dimuat | Pro |

## Manage Physics (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `register_group` | Mendaftarkan grup tabrakan | Pro |
| `set_collidable` | Mengatur apakah dua grup bisa bertabrakan | Pro |
| `get_groups` | Mendaftar semua grup tabrakan terdaftar | Pro |

## Manage Effects (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `emit` | Mengeluarkan partikel dari ParticleEmitter | Pro |
| `clear` | Menghapus semua partikel | Pro |
| `toggle` | Mengaktifkan atau menonaktifkan efek | Pro |

## Manage Terrain (Pro)

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
| `read_voxel` | Membaca data voxel tunggal | Pro |
| `read_voxels` | Membaca data voxel massal | Pro |
| `write_voxels` | Menulis data voxel massal | Pro |
| `generate` | Menghasilkan terrain prosedural | Pro |
| `smooth` | Menghaluskan terrain | Pro |

## Spatial Query (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `raycast` | Meluncurkan satu sinar | Pro |
| `find_ground` | Menemukan posisi tanah di bawah titik | Pro |
| `check_placement` | Memeriksa apakah penempatan bebas tabrakan | Pro |
| `multi_raycast` | Meluncurkan beberapa sinar sekaligus | Pro |
| `scan_area` | Menghasilkan peta ketinggian area | Pro |
| `find_flat` | Menemukan area datar untuk pembangunan | Pro |
| `find_spawn` | Menemukan posisi spawn yang sesuai | Pro |
| `analyze_walkable` | Menganalisis grid kemampuan jalan | Pro |
| `spatial_map` | Mendapatkan semua posisi BasePart | Pro |
| `find_space` | Menemukan ruang kosong untuk objek | Pro |
| `bounds` | Mendapatkan kotak pembatas instance | Pro |
| `snap_grid` | Menyelaraskan posisi ke grid | Pro |
| `collision` | Memeriksa tabrakan AABB | Pro |

## Manage Assets (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `insert` | Menyisipkan model berdasarkan ID aset | Pro |
| `info` | Mendapatkan metadata aset | Pro |
| `search` | Mencari di Creator Store | Pro |
| `search_insert` | Mencari dan menyisipkan kecocokan pertama | Pro |
| `insert_free` | Menyisipkan model gratis | Pro |
| `insert_package` | Menyisipkan paket | Pro |
| `export` | Mengekspor seleksi saat ini | Pro |

## Manage Sync (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `status` | Mendapatkan status sinkronisasi sebuah Place | Pro |
| `config` | Mendapatkan konfigurasi sinkronisasi | Pro |
| `history` | Mendapatkan riwayat perubahan | Pro |
| `directions` | Mendapatkan arah sinkronisasi per tipe | Pro |
| `read_file` | Membaca file yang disinkronkan | Pro |
| `write_file` | Menulis ke file yang disinkronkan | Pro |
| `progress` | Mendapatkan progres sinkronisasi real-time dan bandwidth | Pro |

## Workspace State (Pro)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `sync` | Mendapatkan state Workspace saat ini | Pro |
| `snapshot` | Mendapatkan struktur pohon instance lengkap | Pro |
| `changes` | Mendapatkan perubahan terbaru | Pro |
| `viewport` | Mendapatkan informasi kamera dan viewport | Pro |

## Manage Logs (Basic)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `get` | Mendapatkan log yang difilter | Basic |
| `clear` | Menghapus buffer log | Basic |
| `errors` | Mendapatkan hanya error terbaru | Basic |

## System Info (Campuran)

| Aksi | Deskripsi | Tier |
|------|-----------|------|
| `ping` | Menguji koneksi | Basic |
| `connection` | Mendapatkan info koneksi server/plugin | Basic |
| `usage` | Mendapatkan tier saat ini (basic/pro) | Basic |
| `place_info` | Mendapatkan Place ID, nama, kreator | Pro |
| `services` | Mendaftar semua layanan Roblox | Pro |
| `studio_settings` | Mendapatkan preferensi Studio | Pro |

## Batch Execute (Pro)

Menjalankan beberapa perintah dalam satu batch. Setiap perintah menentukan nama alat dan argumen. Perintah dijalankan secara berurutan dengan perilaku opsional lanjut saat terjadi error.

## Execute Luau (Pro)

Menjalankan kode Luau arbitrer di sandbox Roblox Studio. Layanan yang diblokir: HttpService, DataStoreService, MessagingService. Tidak dapat mengakses CoreGui/CorePackages.
