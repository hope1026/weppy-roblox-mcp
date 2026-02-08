# Lista de Herramientas

Roblox MCP ofrece **140 herramientas** para controlar Roblox Studio mediante IA.

## Básico (Gratis)

**68 herramientas** disponibles gratuitamente.

### Gestión de Objetos (13 herramientas)
Crear, eliminar, clonar, mover y renombrar objetos en el workspace.

**Herramientas clave**: `create_instance`, `delete_instance`, `clone_instance`, `move_instance`, `rename_instance`, `get_instance`, `get_instance_children`, `find_first_child`, `find_first_descendant`, `wait_for_child`, `pivot_to`, `create_instance_with_properties`, `get_class_info`

### Propiedades (10 herramientas)
Obtener y modificar propiedades de objetos (Color, Size, Transparency, etc.), incluyendo atributos.

**Herramientas clave**: `get_property`, `set_property`, `get_all_properties`, `set_multiple_properties`, `get_attribute`, `set_attribute`, `get_all_attributes`, `delete_attribute`, `set_calculated_property`, `set_relative_property`

### Scripts (9 herramientas)
Crear, editar y eliminar scripts. Ver código fuente, modificar líneas, buscar y reemplazar.

**Herramientas clave**: `create_script`, `get_script_source`, `set_script_source`, `delete_script`, `edit_script_lines`, `insert_script_lines`, `delete_script_lines`, `search_in_scripts`, `replace_in_scripts`

### Control de Studio (12 herramientas)
Gestionar selección, obtener información del proyecto, ejecutar comandos y monitorear cambios.

**Herramientas clave**: `get_selection`, `set_selection`, `add_to_selection`, `remove_from_selection`, `clear_selection`, `get_selection_context`, `get_selection_details`, `get_place_info`, `get_services`, `run_command`, `watch_selection`, `get_cached_selection`

### Búsqueda (2 herramientas)
Encontrar objetos por nombre o clase.

**Herramientas clave**: `search_by_name`, `search_by_class`

### Etiquetas (5 herramientas)
Agregar, eliminar y buscar objetos mediante etiquetas.

**Herramientas clave**: `add_tag`, `remove_tag`, `get_tags`, `get_tagged`, `has_tag`

### Cámara (4 herramientas)
Controlar la cámara de Studio, enfocar objetos y obtener información de la vista.

**Herramientas clave**: `get_viewport_info`, `get_camera_info`, `focus_camera_path`, `focus_camera_position`

### Registros (3 herramientas)
Ver logs de salida, errores recientes y limpiar registros.

**Herramientas clave**: `get_output_logs`, `clear_output_logs`, `get_recent_errors`

### Conexión (2 herramientas)
Verificar estado de conexión y uso del sistema.

**Herramientas clave**: `get_connection_info`, `get_usage_status`

---

## Pro

**72 herramientas adicionales** disponibles con la versión Pro.

👉 [Cómo actualizar a Pro](../pro-upgrade.md)

### Scripts Avanzados (2 herramientas)
Analizar dependencias entre scripts y ejecutar código en Studio.

**Herramientas clave**: `get_script_dependencies`, `execute_script`

### Búsqueda Avanzada (6 herramientas)
Búsquedas complejas por árbol de archivos, propiedades, etiquetas, descendientes y ancestros.

**Herramientas clave**: `get_file_tree`, `get_project_structure`, `search_by_property`, `search_by_tag`, `get_descendants`, `get_ancestors`

### Operaciones Masivas (8 herramientas)
Crear, eliminar o modificar múltiples objetos a la vez. Operaciones en lote, duplicación inteligente.

**Herramientas clave**: `mass_create_instances`, `mass_delete_instances`, `mass_set_property`, `batch_execute`, `smart_duplicate`, `mass_get_property`, `mass_duplicate`, `modify_children`

### Assets (7 herramientas)
Buscar e insertar modelos del Creator Store, obtener información de assets y trabajar con paquetes.

**Herramientas clave**: `insert_model`, `get_asset_info`, `search_creator_store`, `search_and_insert_model`, `insert_free_model`, `insert_package`, `export_selection`

### Entorno (5 herramientas)
Configurar iluminación, atmósfera, cielo, hora del día y efectos ambientales.

**Herramientas clave**: `set_lighting`, `set_atmosphere`, `set_sky`, `set_terrain`, `set_time_of_day`

### Gestión de Estado (9 herramientas)
Sincronizar workspace, obtener snapshots, rastrear cambios recientes, buscar vistas de cámara sugeridas y mapas espaciales.

**Herramientas clave**: `sync_workspace_state`, `get_workspace_snapshot`, `get_recent_changes`, `get_suggested_camera_view`, `get_spatial_map`, `find_empty_space`, `get_bounds`, `snap_to_grid`, `check_collision`

### Análisis Espacial (5 herramientas)
Analizar espacio 3D, encontrar áreas vacías, alinear a grilla, verificar colisiones y obtener límites.

**Herramientas clave**: `get_spatial_map`, `find_empty_space`, `get_bounds`, `snap_to_grid`, `check_collision`

### Raycast (8 herramientas)
Lanzar rayos para detección de colisiones, encontrar suelo, verificar ubicaciones de colocación, escanear áreas y analizar zonas transitables.

**Herramientas clave**: `raycast`, `find_ground`, `check_placement`, `multi_raycast`, `scan_area`, `find_flat_areas`, `find_spawn_positions`, `analyze_walkable_area`

### Terreno (14 herramientas)
Crear, modificar y generar terrenos. Formas, materiales, colores, generación procedural y suavizado.

**Herramientas clave**: `terrain_fill_block`, `terrain_fill_ball`, `terrain_fill_cylinder`, `terrain_fill_wedge`, `terrain_clear`, `terrain_clear_region`, `terrain_replace_material`, `terrain_get_material_color`, `terrain_set_material_color`, `terrain_read_voxel`, `terrain_read_voxels`, `terrain_write_voxels`, `terrain_generate`, `terrain_smooth`

### Visualización (7 herramientas)
Crear marcadores visuales, áreas, líneas y enfocar cámara en visualizaciones para debugging y análisis.

**Herramientas clave**: `visualization_create_area`, `visualization_create_marker`, `visualization_create_line`, `visualization_remove`, `visualization_clear`, `visualization_get_status`, `visualization_focus`

---

## Resumen

| Categoría | Básico | Pro | Total |
|-----------|--------|-----|-------|
| Gestión de Objetos | 13 | - | 13 |
| Propiedades | 10 | - | 10 |
| Scripts | 9 | 2 | 11 |
| Control de Studio | 12 | - | 12 |
| Búsqueda | 2 | 6 | 8 |
| Etiquetas | 5 | - | 5 |
| Cámara | 4 | - | 4 |
| Registros | 3 | - | 3 |
| Conexión | 2 | - | 2 |
| Operaciones Masivas | - | 8 | 8 |
| Assets | - | 7 | 7 |
| Entorno | - | 5 | 5 |
| Gestión de Estado | 8 | 1 | 9 |
| Análisis Espacial | - | 5 | 5 |
| Raycast | - | 8 | 8 |
| Terreno | - | 14 | 14 |
| Visualización | - | 7 | 7 |
| **TOTAL** | **68** | **72** | **140** |
