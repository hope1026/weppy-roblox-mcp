# Instance & properti

> Cari, buat, dan edit instance Roblox Studio sambil mengelola properti, atribut, dan tag.

## Tool yang termasuk

| Tool | Tier | Deskripsi |
|------|:----:|-----------|
| `query_instances` | Campuran | Mencari instance, menelusuri hierarki, dan memeriksa info kelas |
| `mutate_instances` | Campuran | Membuat, menghapus, mengkloning, memindahkan, dan mengganti nama instance |
| `manage_properties` | Campuran | Membaca dan menulis properti, atribut, dan tag |

## Alur kerja utama

### Memahami struktur scene

```
"Cari semua Part di bawah Workspace lalu beri tahu posisi dan ukurannya."
```

Gunakan `query_instances.search_class` untuk menemukan Part, lalu `manage_properties.mass_get` untuk membaca `Position` dan `Size` secara massal.

### Menempatkan objek secara massal

```
"Tempatkan 4 SpawnLocation membentuk persegi di tengah map dan beri TeamColor yang berbeda untuk masing-masing."
```

Gunakan `mutate_instances.mass_create` untuk membuat semuanya dalam satu permintaan, lalu `manage_properties.mass_set` untuk mengatur propertinya.

### Mengelola objek berdasarkan tag

```
"Cari semua objek dengan tag Collectible lalu ubah Anchored menjadi true."
```

Gunakan `manage_properties.get_tagged` untuk mengumpulkan instance, lalu `manage_properties.mass_set` untuk memperbaruinya.

## Referensi aksi

### Query Instances (Campuran)

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

### Mutate Instances (Campuran)

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

### Manage Properties (Campuran)

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

## Dokumen terkait

- [Scripting & eksekusi kode](scripting.md) - menambah atau mengubah script pada instance
- [Asset & efek](assets-and-effects.md) - menyisipkan model, tween, dan efek
- [Daftar tool lengkap](overview.md)
