# Herramientas de Roblox MCP

Para parametros detallados, consulte las definiciones de herramientas MCP directamente.

Documentacion relacionada:
- [Guia detallada de Sync](../sync/overview.md)

Politica de Sync:
- Basic: Studio -> Local sincronizacion unidireccional
- Pro: Sincronizacion bidireccional + cobertura de acciones avanzadas mas amplia (mejor eficiencia de tokens IA con flujos masivos)

## Query Instances (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener propiedades de instancia por ruta | Basic |
| `children` | Obtener hijos inmediatos o todos los descendientes | Basic |
| `find_child` | Buscar primer hijo por nombre y filtro de clase opcional | Basic |
| `find_descendant` | Buscar primer descendiente por nombre | Basic |
| `wait_for_child` | Esperar a que aparezca un hijo (con timeout) | Basic |
| `class_info` | Obtener informacion de clase y propiedades validas | Basic |
| `search_name` | Buscar instancias por patron de nombre (soporta comodines) | Basic |
| `search_class` | Buscar instancias por nombre de clase | Basic |
| `file_tree` | Obtener estructura de arbol de archivos desde la raiz | Pro |
| `project_structure` | Obtener estructura completa del proyecto | Pro |
| `descendants` | Obtener todos los descendientes de una instancia | Pro |
| `ancestors` | Obtener todos los ancestros de una instancia | Pro |
| `search_property` | Buscar instancias por valor de propiedad | Pro |
| `search_tag` | Buscar instancias por etiqueta | Pro |

## Mutate Instances (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `create` | Crear una nueva instancia | Basic |
| `create_with_props` | Crear instancia con propiedades iniciales | Basic |
| `delete` | Eliminar una instancia | Basic |
| `clone` | Clonar una instancia | Basic |
| `move` | Mover instancia a nuevo padre | Basic |
| `rename` | Renombrar una instancia | Basic |
| `pivot` | Establecer posicion pivot o CFrame | Basic |
| `create_tree` | Crear arbol jerarquico de instancias | Pro |
| `mass_create` | Crear multiples instancias a la vez | Pro |
| `mass_delete` | Eliminar multiples instancias | Pro |
| `mass_duplicate` | Duplicar multiples instancias | Pro |
| `smart_duplicate` | Duplicar con espaciado y cantidad | Pro |

## Manage Properties (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener valor de una propiedad | Basic |
| `set` | Establecer valor de una propiedad | Basic |
| `get_all` | Obtener todas las propiedades de una instancia | Basic |
| `set_multiple` | Establecer multiples propiedades a la vez | Basic |
| `get_attr` | Obtener valor de atributo | Basic |
| `set_attr` | Establecer valor de atributo | Basic |
| `get_all_attrs` | Obtener todos los atributos | Basic |
| `delete_attr` | Eliminar un atributo | Basic |
| `add_tag` | Agregar etiqueta a instancia | Basic |
| `remove_tag` | Eliminar etiqueta de instancia | Basic |
| `check_tag` | Verificar si instancia tiene una etiqueta | Basic |
| `get_tags` | Obtener todas las etiquetas de una instancia | Basic |
| `get_tagged` | Obtener todas las instancias con una etiqueta especifica | Basic |
| `set_calculated` | Establecer propiedad usando expresion matematica | Pro |
| `set_relative` | Establecer propiedad relativa al valor actual | Pro |
| `mass_set` | Establecer propiedad en multiples instancias | Pro |
| `mass_get` | Obtener propiedad de multiples instancias | Pro |
| `modify_children` | Modificar todos los hijos de un padre | Pro |

## Manage Scripts (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get_source` | Obtener codigo fuente del script | Basic |
| `set_source` | Establecer codigo fuente del script | Basic |
| `create` | Crear un nuevo script | Basic |
| `delete` | Eliminar un script | Basic |
| `edit_replace` | Reemplazar lineas especificas del script | Basic |
| `edit_insert` | Insertar lineas en posicion | Basic |
| `edit_delete` | Eliminar lineas especificas | Basic |
| `search` | Buscar texto en script | Basic |
| `get_dependencies` | Obtener dependencias del script | Basic |
| `replace` | Reemplazo masivo en scripts | Pro |

## Manage Lighting (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `lighting` | Establecer propiedades del servicio Lighting | Pro |
| `atmosphere` | Establecer propiedades de Atmosphere | Pro |
| `sky` | Establecer propiedades de Sky | Pro |
| `terrain_props` | Establecer propiedades visuales/agua de Terrain | Pro |
| `time` | Establecer hora del dia | Pro |

## Manage Selection (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener seleccion actual | Basic |
| `set` | Reemplazar seleccion actual | Basic |
| `clear` | Limpiar seleccion | Basic |
| `cached` | Obtener seleccion en cache sin ida y vuelta | Basic |
| `context` | Obtener contexto detallado con fuente y propiedades | Pro |
| `details` | Obtener detalles jerarquicos con ancestros/descendientes | Pro |
| `add` | Agregar elementos a la seleccion | Pro |
| `remove` | Eliminar elementos de la seleccion | Pro |
| `watch` | Monitorear cambios de seleccion | Pro |

## Manage Camera (Basic)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `info` | Obtener posicion, rotacion, FOV y tamano del viewport | Basic |
| `focus_path` | Mover camara para enfocar instancia | Basic |
| `focus_position` | Mover camara para enfocar posicion | Basic |
| `suggest` | Obtener vista de camara sugerida para objetivo | Basic |

## Manage Tween (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `create` | Crear tween con propiedades objetivo | Pro |
| `play` | Reproducir un tween creado | Pro |
| `pause` | Pausar un tween en ejecucion | Pro |
| `cancel` | Cancelar un tween | Pro |

## Manage Audio (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `play` | Reproducir sonido (crea Sound si es necesario) | Pro |
| `stop` | Detener un sonido en reproduccion | Pro |
| `pause` | Pausar un sonido en reproduccion | Pro |
| `resume` | Reanudar un sonido pausado | Pro |
| `set_listener` | Establecer tipo/objetivo del listener de audio | Pro |

## Manage Animation (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `load` | Cargar animacion en Humanoid/AnimationController | Pro |
| `play` | Reproducir pista de animacion cargada | Pro |
| `stop` | Detener animacion en reproduccion | Pro |
| `get_tracks` | Listar todas las pistas de animacion cargadas | Pro |

## Manage Physics (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `register_group` | Registrar grupo de colision | Pro |
| `set_collidable` | Establecer si dos grupos pueden colisionar | Pro |
| `get_groups` | Listar todos los grupos de colision registrados | Pro |

## Manage Effects (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `emit` | Emitir particulas desde ParticleEmitter | Pro |
| `clear` | Limpiar todas las particulas | Pro |
| `toggle` | Activar o desactivar efecto | Pro |

## Manage Terrain (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `fill_block` | Rellenar terreno en forma de bloque | Pro |
| `fill_ball` | Rellenar terreno en forma de esfera | Pro |
| `fill_cylinder` | Rellenar terreno en forma de cilindro | Pro |
| `fill_wedge` | Rellenar terreno en forma de cuna | Pro |
| `clear_region` | Limpiar terreno en region | Pro |
| `clear_bounds` | Limpiar terreno en limites | Pro |
| `replace_material` | Reemplazar material en region | Pro |
| `colors_get` | Obtener colores de material | Pro |
| `colors_set` | Establecer colores de material | Pro |
| `read_voxel` | Leer datos de voxel individual | Pro |
| `read_voxels` | Leer datos de voxels masivo | Pro |
| `write_voxels` | Escribir datos de voxels masivo | Pro |
| `generate` | Generar terreno procedural | Pro |
| `smooth` | Suavizar terreno | Pro |

## Spatial Query (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `raycast` | Lanzar un solo rayo | Pro |
| `find_ground` | Encontrar posicion del suelo debajo del punto | Pro |
| `check_placement` | Verificar si la colocacion esta libre de colisiones | Pro |
| `multi_raycast` | Lanzar multiples rayos en lote | Pro |
| `scan_area` | Generar mapa de alturas del area | Pro |
| `find_flat` | Encontrar areas planas para construccion | Pro |
| `find_spawn` | Encontrar posiciones de spawn adecuadas | Pro |
| `analyze_walkable` | Analizar cuadricula de transitabilidad | Pro |
| `spatial_map` | Obtener todas las posiciones de BasePart | Pro |
| `find_space` | Encontrar espacio vacio para objeto | Pro |
| `bounds` | Obtener caja delimitadora de instancias | Pro |
| `snap_grid` | Ajustar posicion a cuadricula | Pro |
| `collision` | Verificar colision AABB | Pro |

## Manage Assets (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `insert` | Insertar modelo por ID de asset | Pro |
| `info` | Obtener metadatos del asset | Pro |
| `search` | Buscar en Creator Store | Pro |
| `search_insert` | Buscar e insertar primera coincidencia | Pro |
| `insert_free` | Insertar modelo gratuito | Pro |
| `insert_package` | Insertar paquete | Pro |
| `export` | Exportar seleccion actual | Pro |

## Manage Sync (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `status` | Obtener estado de sincronizacion de un Place | Pro |
| `config` | Obtener configuracion de sincronizacion | Pro |
| `history` | Obtener historial de cambios | Pro |
| `directions` | Obtener direcciones de sincronizacion por tipo | Pro |
| `read_file` | Leer un archivo sincronizado | Pro |
| `write_file` | Escribir en un archivo sincronizado | Pro |
| `progress` | Obtener progreso de sincronizacion en tiempo real y ancho de banda | Pro |

## Workspace State (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `sync` | Obtener estado actual del Workspace | Pro |
| `snapshot` | Obtener estructura completa del arbol de instancias | Pro |
| `changes` | Obtener cambios recientes | Pro |
| `viewport` | Obtener informacion de camara y viewport | Pro |

## Manage Logs (Basic)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener logs filtrados | Basic |
| `clear` | Limpiar buffer de logs | Basic |
| `errors` | Obtener solo errores recientes | Basic |

## System Info (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `ping` | Probar conexion | Basic |
| `connection` | Obtener info de conexion servidor/plugin | Basic |
| `usage` | Obtener tier actual (basic/pro) | Basic |
| `place_info` | Obtener Place ID, nombre, creador | Pro |
| `services` | Listar todos los servicios de Roblox | Pro |
| `studio_settings` | Obtener preferencias de Studio | Pro |

## Batch Execute (Pro)

Ejecuta multiples comandos en un solo lote. Cada comando especifica un nombre de herramienta y argumentos. Los comandos se ejecutan secuencialmente con comportamiento opcional de continuar en caso de error.

## Execute Luau (Pro)

Ejecuta codigo Luau arbitrario en el sandbox de Roblox Studio. Servicios bloqueados: HttpService, DataStoreService, MessagingService. No puede acceder a CoreGui/CorePackages.
