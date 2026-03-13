# Assets y efectos

> Inserta assets y controla tween, audio, particulas, animacion y grupos de colision.

## Tools incluidas

| Tool | Tier | Descripcion |
|------|:----:|-------------|
| `manage_assets` | Pro | Busca en Creator Store, inserta modelos y paquetes, consulta informacion del asset |
| `manage_tween` | Pro | Crea, reproduce, pausa y cancela tweens |
| `manage_animation` | Pro | Carga, reproduce, detiene e inspecciona tracks de animacion |
| `manage_audio` | Pro | Reproduce, detiene, pausa y reanuda sonidos; configura el listener |
| `manage_effects` | Pro | Emite particulas, limpia efectos y alterna su estado |
| `manage_physics` | Pro | Registra grupos de colision y configura colisiones |

## Flujos principales

### Armar una escena con assets

```
"Busca un modelo de arbol en Creator Store y coloca tres en Workspace."
```

Usa `manage_assets.search_insert` para buscar e insertar en un solo paso.

### Crear una interaccion visual

```
"Haz que la puerta se abra con un tween de 3 segundos al hacer clic."
```

Usa `manage_tween.create` para definir el movimiento y `manage_tween.play` para reproducirlo. Puedes combinarlo con `manage_audio.play` para el sonido.

### Combinar particulas y audio

```
"Reproduce un sonido de explosion y emite particulas cuando aparezca el boss."
```

Usa `manage_effects.emit` para las particulas y `manage_audio.play` para el sonido.

## Referencia de acciones

### Manage Assets (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `insert` | Insertar un modelo por ID de asset | Pro |
| `info` | Obtener metadatos del asset | Pro |
| `search` | Buscar en Creator Store | Pro |
| `search_insert` | Buscar e insertar la primera coincidencia | Pro |
| `insert_free` | Insertar un modelo gratuito | Pro |
| `insert_package` | Insertar un paquete | Pro |
| `export` | Exportar la seleccion actual | Pro |

### Manage Tween (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `create` | Crear un tween con propiedades objetivo | Pro |
| `play` | Reproducir un tween creado | Pro |
| `pause` | Pausar un tween en ejecucion | Pro |
| `cancel` | Cancelar un tween | Pro |

### Manage Animation (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `load` | Cargar una animacion en Humanoid o AnimationController | Pro |
| `play` | Reproducir un track de animacion cargado | Pro |
| `stop` | Detener una animacion en reproduccion | Pro |
| `get_tracks` | Listar todos los tracks de animacion cargados | Pro |

### Manage Audio (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `play` | Reproducir un sonido y crear `Sound` si hace falta | Pro |
| `stop` | Detener un sonido en reproduccion | Pro |
| `pause` | Pausar un sonido en reproduccion | Pro |
| `resume` | Reanudar un sonido pausado | Pro |
| `set_listener` | Definir el tipo o destino del listener de audio | Pro |

### Manage Effects (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `emit` | Emitir particulas desde `ParticleEmitter` | Pro |
| `clear` | Limpiar todas las particulas | Pro |
| `toggle` | Activar o desactivar un efecto | Pro |

### Manage Physics (Pro)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `register_group` | Registrar un grupo de colision | Pro |
| `set_collidable` | Definir si dos grupos pueden colisionar | Pro |
| `get_groups` | Listar todos los grupos de colision registrados | Pro |

## Documentos relacionados

- [Instancias y propiedades](instances-and-properties.md) - crear y colocar objetos
- [Mundo y entorno](world-and-environment.md) - iluminacion, terrain y camara
- [Lista completa de tools](overview.md)
