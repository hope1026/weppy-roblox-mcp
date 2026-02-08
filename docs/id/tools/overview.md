# Alat-alat Roblox MCP

Untuk detail parameter alat MCP, silakan cek definisi alat MCP langsung.

---

## Alat Basic (Gratis) — 68 alat

Alat dasar untuk mengelola objek, script, dan Studio. Tersedia gratis untuk semua pengguna.

### Manajemen Objek — 13 alat

| Tool | Deskripsi |
|------|-----------|
| `create_instance` | Buat instance baru |
| `create_instance_with_properties` | Buat instance dengan properties |
| `clone_instance` | Duplikat instance yang ada |
| `delete_instance` | Hapus instance |
| `move_instance` | Pindahkan instance ke parent baru |
| `rename_instance` | Ubah nama instance |
| `get_instance` | Ambil informasi instance |
| `get_instance_children` | Ambil daftar children dari instance |
| `find_first_child` | Temukan child pertama berdasarkan nama |
| `find_first_descendant` | Temukan descendant pertama berdasarkan nama |
| `get_class_info` | Ambil informasi class |
| `wait_for_child` | Tunggu sampai child muncul |
| `pivot_to` | Atur Pivot CFrame |

### Properti — 10 alat

| Tool | Deskripsi |
|------|-----------|
| `get_property` | Ambil nilai property |
| `set_property` | Atur nilai property |
| `get_all_properties` | Ambil semua properties |
| `set_multiple_properties` | Atur beberapa properties sekaligus |
| `set_calculated_property` | Atur property dengan nilai yang dihitung |
| `set_relative_property` | Atur property dengan nilai relatif |
| `get_attribute` | Ambil nilai attribute |
| `set_attribute` | Atur nilai attribute |
| `get_all_attributes` | Ambil semua attributes |
| `delete_attribute` | Hapus attribute |

### Script — 9 alat

| Tool | Deskripsi |
|------|-----------|
| `create_script` | Buat script baru |
| `get_script_source` | Ambil source code script |
| `set_script_source` | Update source code script |
| `delete_script` | Hapus script |
| `edit_script_lines` | Edit baris tertentu |
| `insert_script_lines` | Sisipkan baris |
| `delete_script_lines` | Hapus baris |
| `search_in_scripts` | Cari dalam scripts |
| `get_script_dependencies` | Ambil dependencies |

### Kontrol Studio — 12 alat

| Tool | Deskripsi |
|------|-----------|
| `get_selection` | Ambil instance yang sedang dipilih |
| `get_selection_context` | Ambil pilihan dengan context |
| `get_selection_details` | Ambil detail informasi pilihan |
| `set_selection` | Atur pilihan instance |
| `clear_selection` | Hapus pilihan |
| `add_to_selection` | Tambahkan ke pilihan |
| `remove_from_selection` | Hapus dari pilihan |
| `get_place_info` | Ambil informasi Place |
| `get_services` | Ambil daftar game services |
| `get_studio_settings` | Ambil pengaturan Studio |
| `run_command` | Jalankan perintah Studio |
| `watch_selection` | Pantau perubahan pilihan |

### Pencarian — 2 alat

| Tool | Deskripsi |
|------|-----------|
| `search_by_name` | Cari instance berdasarkan nama |
| `search_by_class` | Cari instance berdasarkan class |

### Tag — 5 alat

| Tool | Deskripsi |
|------|-----------|
| `add_tag` | Tambahkan tag ke instance |
| `remove_tag` | Hapus tag dari instance |
| `get_tags` | Ambil daftar tag dari instance |
| `get_tagged` | Ambil daftar instance dengan tag |
| `has_tag` | Periksa apakah instance memiliki tag |

### Kamera — 4 alat

| Tool | Deskripsi |
|------|-----------|
| `get_camera_info` | Ambil informasi camera |
| `get_suggested_camera_view` | Ambil view camera yang disarankan |
| `focus_camera_path` | Fokuskan camera ke instance berdasarkan path |
| `focus_camera_position` | Fokuskan camera ke posisi world |

### Log — 3 alat

| Tool | Deskripsi |
|------|-----------|
| `get_output_logs` | Ambil log output |
| `clear_output_logs` | Bersihkan log output |
| `get_recent_errors` | Ambil error terbaru |

### Koneksi — 2 alat

| Tool | Deskripsi |
|------|-----------|
| `get_connection_info` | Ambil status koneksi |
| `get_usage_status` | Ambil status penggunaan/kuota |

---

## Alat Pro — 72 alat tambahan

Alat lanjutan untuk operasi massal, terrain, raycast, dan banyak lagi. Upgrade ke Pro untuk akses penuh.

👉 [Panduan Upgrade Pro](../pro-upgrade.md)

### Script Lanjutan — 2 alat

| Tool | Deskripsi |
|------|-----------|
| `replace_in_scripts` | Ganti konten script secara massal |
| `execute_script` | Jalankan kode Luau secara langsung |

### Pencarian Lanjutan — 6 alat

| Tool | Deskripsi |
|------|-----------|
| `get_file_tree` | Ambil file tree |
| `get_project_structure` | Ambil tree struktur proyek |
| `search_by_property` | Cari berdasarkan property |
| `search_by_tag` | Cari berdasarkan tag |
| `get_descendants` | Ambil semua descendants |
| `get_ancestors` | Ambil ancestors |

### Operasi Massal — 8 alat

| Tool | Deskripsi |
|------|-----------|
| `mass_create_instances` | Buat instance secara massal |
| `mass_delete_instances` | Hapus instance secara massal |
| `mass_set_property` | Atur properties secara massal |
| `mass_get_property` | Ambil properties secara massal |
| `mass_duplicate` | Duplikat instance secara massal |
| `smart_duplicate` | Duplikat cerdas dengan offset |
| `batch_execute` | Eksekusi batch beberapa perintah |
| `modify_children` | Modifikasi semua children |

### Aset — 7 alat

| Tool | Deskripsi |
|------|-----------|
| `insert_model` | Sisipkan model dari Creator Store |
| `get_asset_info` | Ambil informasi asset |
| `search_creator_store` | Cari asset di Creator Store |
| `search_and_insert_model` | Cari dan sisipkan model |
| `insert_free_model` | Sisipkan model gratis |
| `insert_package` | Sisipkan package |
| `export_selection` | Ekspor pilihan |

### Lingkungan — 5 alat

| Tool | Deskripsi |
|------|-----------|
| `set_lighting` | Atur properties pencahayaan |
| `set_atmosphere` | Atur properties Atmosphere |
| `set_sky` | Atur properties Sky |
| `set_terrain` | Atur properties Terrain |
| `set_time_of_day` | Atur waktu hari |

### Manajemen State — 9 alat

| Tool | Deskripsi |
|------|-----------|
| `sync_workspace_state` | Sinkronkan state Workspace |
| `get_workspace_snapshot` | Ambil snapshot Workspace |
| `get_recent_changes` | Ambil perubahan terbaru |
| `clear_change_history` | Bersihkan riwayat perubahan |
| `get_viewport_info` | Ambil informasi status viewport |
| `get_workspace_metadata` | Ambil metadata Workspace |
| `get_script_list` | Ambil daftar scripts |
| `get_selection_info` | Ambil informasi pilihan |
| `clear_state_cache` | Bersihkan cache state |

### Analisis Spasial — 5 alat

| Tool | Deskripsi |
|------|-----------|
| `get_spatial_map` | Ambil peta spatial dari area |
| `find_empty_space` | Temukan ruang kosong dalam area |
| `get_bounds` | Ambil bounding box instance |
| `snap_to_grid` | Snap posisi ke grid |
| `check_collision` | Periksa tabrakan antar instance |

### Raycast — 8 alat

| Tool | Deskripsi |
|------|-----------|
| `raycast` | Lakukan raycast dan ambil informasi tabrakan |
| `find_ground` | Temukan posisi ground di titik tersebut |
| `check_placement` | Periksa apakah objek dapat ditempatkan |
| `multi_raycast` | Lakukan beberapa raycast |
| `scan_area` | Scan area dan hasilkan heightmap |
| `find_flat_areas` | Temukan area datar untuk penempatan |
| `find_spawn_positions` | Temukan posisi spawn yang valid |
| `analyze_walkable_area` | Analisis area yang dapat dilalui |

### Terrain — 14 alat

| Tool | Deskripsi |
|------|-----------|
| `terrain_fill_block` | Isi terrain dengan bentuk blok |
| `terrain_fill_ball` | Isi terrain dengan bentuk bola |
| `terrain_fill_cylinder` | Isi terrain dengan bentuk silinder |
| `terrain_fill_wedge` | Isi terrain dengan bentuk wedge |
| `terrain_clear` | Hapus terrain (menggunakan objek Region) |
| `terrain_clear_region` | Hapus terrain (menggunakan koordinat min/max) |
| `terrain_replace_material` | Ganti material terrain |
| `terrain_get_material_color` | Ambil warna material terrain |
| `terrain_set_material_color` | Atur warna material terrain |
| `terrain_read_voxel` | Baca single voxel |
| `terrain_read_voxels` | Baca data voxels |
| `terrain_write_voxels` | Tulis data voxels |
| `terrain_generate` | Hasilkan terrain prosedural |
| `terrain_smooth` | Haluskan terrain |

### Visualisasi — 7 alat

| Tool | Deskripsi |
|------|-----------|
| `visualization_create_area` | Buat visualisasi area |
| `visualization_create_marker` | Buat visualisasi marker (dengan preview) |
| `visualization_create_line` | Buat visualisasi garis |
| `visualization_remove` | Hapus visualisasi |
| `visualization_clear` | Hapus semua visualisasi |
| `visualization_get_status` | Ambil status visualisasi |
| `visualization_focus` | Fokuskan camera ke item visualisasi |
