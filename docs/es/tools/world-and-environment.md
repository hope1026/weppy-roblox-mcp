# Mundo y entorno

> Construye e inspecciona el mundo del juego con lighting, terrain, consultas espaciales y herramientas de camara.

## Tools incluidas

| Tool | Tier | Descripcion |
|------|:----:|-------------|
| `manage_lighting` | Pro | Configura Lighting, Atmosphere, Sky y la hora del dia |
| `manage_terrain` | Pro | Genera y edita terrain, incluido datos voxel |
| `spatial_query` | Pro | Raycasts, busqueda de suelo, validacion de colocacion y mapas de altura |
| `manage_camera` | Basic | Inspecciona el estado de la camara, mueve el foco y sugiere vistas |

## Flujos principales

### Definir la atmosfera (Pro)

```
"Cambia el mapa a un ambiente de atardecer con cielo naranja, niebla mas densa y hora 18:00."
```

Usa `manage_lighting.time` para la hora, `manage_lighting.atmosphere` para la niebla y `manage_lighting.sky` para el cielo.

### Construir terrain (Pro)

```
"Crea una colina de pasto con radio 200 en el centro del mapa y rodeala con agua."
```

Usa `manage_terrain.fill_ball` para la colina y `manage_terrain.fill_block` para el agua circundante.

### Validar una colocacion (Pro)

```
"Encuentra un terreno plano donde pueda colocar este edificio."
```

Usa `spatial_query.find_flat` para encontrar candidatos, `spatial_query.check_placement` para validarlos y `manage_camera.focus_position` para inspeccion visual.

## Referencia de acciones

### Manage Lighting (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `lighting` | Definir propiedades del servicio Lighting | Pro |
| `atmosphere` | Definir propiedades de Atmosphere | Pro |
| `sky` | Definir propiedades de Sky | Pro |
| `terrain_props` | Definir propiedades visuales y de agua de Terrain | Pro |
| `time` | Definir la hora del dia | Pro |

### Manage Terrain (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `fill_block` | Rellenar terrain con forma de bloque | Pro |
| `fill_ball` | Rellenar terrain con forma esferica | Pro |
| `fill_cylinder` | Rellenar terrain con forma cilindrica | Pro |
| `fill_wedge` | Rellenar terrain con forma de cunha | Pro |
| `clear_region` | Limpiar terrain en una region | Pro |
| `clear_bounds` | Limpiar terrain dentro de limites | Pro |
| `replace_material` | Reemplazar material en una region | Pro |
| `colors_get` | Obtener colores de material | Pro |
| `colors_set` | Definir colores de material | Pro |
| `read_voxel` | Leer un voxel individual | Pro |
| `read_voxels` | Leer datos voxel en lote | Pro |
| `write_voxels` | Escribir datos voxel en lote | Pro |
| `generate` | Generar terrain procedural | Pro |
| `smooth` | Suavizar terrain | Pro |

### Spatial Query (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `raycast` | Lanzar un solo rayo | Pro |
| `find_ground` | Encontrar la posicion del suelo bajo un punto | Pro |
| `check_placement` | Verificar si una colocacion esta libre de colisiones | Pro |
| `multi_raycast` | Lanzar varios rayos en lote | Pro |
| `scan_area` | Generar un mapa de alturas de un area | Pro |
| `find_flat` | Encontrar zonas planas para construir | Pro |
| `find_spawn` | Encontrar posiciones de spawn adecuadas | Pro |
| `analyze_walkable` | Analizar una cuadricula transitable | Pro |
| `spatial_map` | Obtener todas las posiciones de BasePart | Pro |
| `find_space` | Encontrar espacio vacio para un objeto | Pro |
| `bounds` | Obtener cajas de limites de instancias | Pro |
| `snap_grid` | Ajustar una posicion a la cuadricula | Pro |
| `collision` | Verificar colision AABB | Pro |

### Manage Camera (Basic)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `info` | Obtener posicion, rotacion, FOV y tamano del viewport de la camara | Basic |
| `focus_path` | Mover la camara para enfocar una instancia | Basic |
| `focus_position` | Mover la camara para enfocar una posicion | Basic |
| `suggest` | Obtener una vista de camara sugerida para un objetivo | Basic |

## Documentos relacionados

- [Instancias y propiedades](instances-and-properties.md) - colocar objetos del mundo
- [Assets y efectos](assets-and-effects.md) - agregar efectos, audio y animacion
- [Lista completa de tools](overview.md)
