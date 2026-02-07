# Herramientas de Roblox MCP

Para ver los parametros detallados de las herramientas MCP, consulta directamente la definicion de herramientas MCP.

---

## Herramientas Basic (68)

### Instance (Instancia) - 13

| Herramienta | Descripcion |
|-------------|-------------|
| `create_instance` | Crear nueva instancia |
| `create_instance_with_properties` | Crear instancia con propiedades |
| `clone_instance` | Clonar instancia existente |
| `delete_instance` | Eliminar instancia |
| `move_instance` | Mover instancia a nuevo padre |
| `rename_instance` | Renombrar instancia |
| `get_instance` | Obtener informacion de instancia |
| `get_instance_children` | Obtener lista de hijos de instancia |
| `find_first_child` | Encontrar primer hijo por nombre |
| `find_first_descendant` | Encontrar primer descendiente por nombre |
| `get_class_info` | Obtener informacion de clase |
| `wait_for_child` | Esperar hasta que aparezca un hijo |
| `pivot_to` | Establecer Pivot CFrame |

### Property (Propiedad) - 10

| Herramienta | Descripcion |
|-------------|-------------|
| `get_property` | Obtener valor de propiedad |
| `set_property` | Establecer valor de propiedad |
| `get_all_properties` | Obtener todas las propiedades |
| `set_multiple_properties` | Establecer multiples propiedades simultaneamente |
| `set_calculated_property` | Establecer propiedad con valor calculado |
| `set_relative_property` | Establecer propiedad con valor relativo |
| `get_attribute` | Obtener valor de atributo |
| `set_attribute` | Establecer valor de atributo |
| `get_all_attributes` | Obtener todos los atributos |
| `delete_attribute` | Eliminar atributo |

### Script - 9

| Herramienta | Descripcion |
|-------------|-------------|
| `create_script` | Crear nuevo script |
| `get_script_source` | Obtener codigo fuente del script |
| `set_script_source` | Actualizar codigo fuente del script |
| `delete_script` | Eliminar script |
| `edit_script_lines` | Editar lineas especificas |
| `insert_script_lines` | Insertar lineas |
| `delete_script_lines` | Eliminar lineas |
| `search_in_scripts` | Buscar en scripts |
| `get_script_dependencies` | Obtener dependencias |

### Selection (Seleccion) - 12

| Herramienta | Descripcion |
|-------------|-------------|
| `get_selection` | Obtener instancias seleccionadas actualmente |
| `get_selection_context` | Obtener seleccion con contexto |
| `get_selection_details` | Obtener detalles de seleccion |
| `set_selection` | Establecer seleccion de instancias |
| `clear_selection` | Limpiar seleccion |
| `add_to_selection` | Agregar a seleccion |
| `remove_from_selection` | Quitar de seleccion |
| `get_place_info` | Obtener informacion del Place |
| `get_services` | Obtener lista de servicios del juego |
| `get_studio_settings` | Obtener configuracion de Studio |
| `run_command` | Ejecutar comando de Studio |
| `watch_selection` | Monitorear cambios de seleccion |

### Search (Busqueda) - 2

| Herramienta | Descripcion |
|-------------|-------------|
| `search_by_name` | Buscar instancias por nombre |
| `search_by_class` | Buscar instancias por clase |

### Tag (Etiqueta) - 5

| Herramienta | Descripcion |
|-------------|-------------|
| `add_tag` | Agregar etiqueta a instancia |
| `remove_tag` | Quitar etiqueta de instancia |
| `get_tags` | Obtener lista de etiquetas de instancia |
| `get_tagged` | Obtener lista de instancias con etiqueta |
| `has_tag` | Verificar si instancia tiene etiqueta |

### Camera (Camara) - 4

| Herramienta | Descripcion |
|-------------|-------------|
| `get_camera_info` | Obtener informacion de camara |
| `get_suggested_camera_view` | Obtener vista de camara sugerida |
| `focus_camera_path` | Enfocar camara en instancia por ruta |
| `focus_camera_position` | Enfocar camara en posicion mundial |

### Log (Registro) - 3

| Herramienta | Descripcion |
|-------------|-------------|
| `get_output_logs` | Obtener registros de salida |
| `clear_output_logs` | Limpiar registros de salida |
| `get_recent_errors` | Obtener errores recientes |

### Connection (Conexion) - 2

| Herramienta | Descripcion |
|-------------|-------------|
| `get_connection_info` | Obtener estado de conexion |
| `get_usage_status` | Obtener estado de uso/cuota |

---

## Herramientas Pro (+72)
👉 [Guia de actualizacion a Pro](pro-upgrade.md)

### Script - 2

| Herramienta | Descripcion |
|-------------|-------------|
| `replace_in_scripts` | Reemplazar contenido en scripts masivamente |
| `execute_script` | Ejecutar codigo Luau directamente |

### Search (Busqueda) - 6

| Herramienta | Descripcion |
|-------------|-------------|
| `get_file_tree` | Obtener arbol de archivos |
| `get_project_structure` | Obtener arbol de estructura del proyecto |
| `search_by_property` | Buscar por propiedad |
| `search_by_tag` | Buscar por etiqueta |
| `get_descendants` | Obtener todos los descendientes |
| `get_ancestors` | Obtener ancestros |

### Bulk (Operaciones Masivas) - 8

| Herramienta | Descripcion |
|-------------|-------------|
| `mass_create_instances` | Crear instancias masivamente |
| `mass_delete_instances` | Eliminar instancias masivamente |
| `mass_set_property` | Establecer propiedades masivamente |
| `mass_get_property` | Obtener propiedades masivamente |
| `mass_duplicate` | Duplicar instancias masivamente |
| `smart_duplicate` | Duplicar inteligentemente con offset |
| `batch_execute` | Ejecutar multiples comandos en lote |
| `modify_children` | Modificar todos los hijos |

### Asset (Recurso) - 7

| Herramienta | Descripcion |
|-------------|-------------|
| `insert_model` | Insertar modelo desde Creator Store |
| `get_asset_info` | Obtener informacion del asset |
| `search_creator_store` | Buscar assets en Creator Store |
| `search_and_insert_model` | Buscar e insertar modelo |
| `insert_free_model` | Insertar modelo gratuito |
| `insert_package` | Insertar paquete |
| `export_selection` | Exportar seleccion |

### Environment (Entorno) - 5

| Herramienta | Descripcion |
|-------------|-------------|
| `set_lighting` | Establecer propiedades de iluminacion |
| `set_atmosphere` | Establecer propiedades de Atmosphere |
| `set_sky` | Establecer propiedades de Sky |
| `set_terrain` | Establecer propiedades de Terrain |
| `set_time_of_day` | Establecer hora del dia |

### State (Estado) - 9

| Herramienta | Descripcion |
|-------------|-------------|
| `sync_workspace_state` | Sincronizar estado del Workspace |
| `get_workspace_snapshot` | Obtener instantanea del Workspace |
| `get_recent_changes` | Obtener cambios recientes |
| `clear_change_history` | Limpiar historial de cambios |
| `get_viewport_info` | Obtener informacion del viewport |
| `get_workspace_metadata` | Obtener metadatos del Workspace |
| `get_script_list` | Obtener lista de scripts |
| `get_selection_info` | Obtener informacion de seleccion |
| `clear_state_cache` | Limpiar cache de estado |

### Spatial (Espacio) - 5

| Herramienta | Descripcion |
|-------------|-------------|
| `get_spatial_map` | Obtener mapa espacial del area |
| `find_empty_space` | Encontrar espacio vacio en el area |
| `get_bounds` | Obtener caja delimitadora de instancia |
| `snap_to_grid` | Ajustar posicion a la cuadricula |
| `check_collision` | Verificar colision entre instancias |

### Raycast - 8

| Herramienta | Descripcion |
|-------------|-------------|
| `raycast` | Ejecutar raycast y obtener informacion de colision |
| `find_ground` | Encontrar posicion del suelo en un punto |
| `check_placement` | Verificar si se puede colocar objeto |
| `multi_raycast` | Realizar multiples raycasts |
| `scan_area` | Escanear area y generar mapa de altura |
| `find_flat_areas` | Encontrar areas planas para colocacion |
| `find_spawn_positions` | Encontrar posiciones de spawn validas |
| `analyze_walkable_area` | Analizar area transitable |

### Terrain (Terreno) - 14

| Herramienta | Descripcion |
|-------------|-------------|
| `terrain_fill_block` | Rellenar terreno en forma de bloque |
| `terrain_fill_ball` | Rellenar terreno en forma de esfera |
| `terrain_fill_cylinder` | Rellenar terreno en forma de cilindro |
| `terrain_fill_wedge` | Rellenar terreno en forma de cuna |
| `terrain_clear` | Eliminar terreno (usando objeto Region) |
| `terrain_clear_region` | Eliminar terreno (usando coordenadas min/max) |
| `terrain_replace_material` | Reemplazar material de terreno |
| `terrain_get_material_color` | Obtener color de material de terreno |
| `terrain_set_material_color` | Establecer color de material de terreno |
| `terrain_read_voxel` | Leer voxel individual |
| `terrain_read_voxels` | Leer datos de voxels |
| `terrain_write_voxels` | Escribir datos de voxels |
| `terrain_generate` | Generar terreno procedural |
| `terrain_smooth` | Suavizar terreno |

### Visualization (Visualizacion) - 7

| Herramienta | Descripcion |
|-------------|-------------|
| `visualization_create_area` | Crear visualizacion de area |
| `visualization_create_marker` | Crear visualizacion de marcador (con vista previa) |
| `visualization_create_line` | Crear visualizacion de linea |
| `visualization_remove` | Eliminar visualizacion |
| `visualization_clear` | Eliminar todas las visualizaciones |
| `visualization_get_status` | Obtener estado de visualizacion |
| `visualization_focus` | Enfocar camara en elemento de visualizacion |
