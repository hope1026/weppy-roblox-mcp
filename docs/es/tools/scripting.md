# Scripting y ejecucion de codigo

> Administra el codigo fuente de scripts y ejecuta Luau arbitrario dentro de Roblox Studio.

## Tools incluidas

| Tool | Tier | Descripcion |
|------|:----:|-------------|
| `manage_scripts` | Mixto | Crear, leer, editar, buscar y analizar dependencias de scripts |
| `execute_luau` | Pro | Ejecutar Luau arbitrario en el sandbox de Roblox Studio |

## Flujos principales

### Editar un script

```
"Cambia maxPlayers de 12 a 24 en el script GameManager dentro de ServerScriptService."
```

Usa `manage_scripts.search` para encontrar la linea correcta y `manage_scripts.edit_replace` para actualizarla.

### Refactorizar varios scripts (Pro)

```
"Reemplaza OldModule por NewModule en todos los scripts."
```

Usa `manage_scripts.replace` para aplicar el cambio en varios scripts en una sola solicitud.

### Inspeccionar datos de runtime (Pro)

```
"Calcula la salud promedio de todos los Humanoid que estan en Workspace."
```

Usa `execute_luau` para ejecutar Luau personalizado y leer datos del runtime actual.

## Referencia de acciones

### Manage Scripts (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get_source` | Obtener codigo fuente del script | Basic |
| `set_source` | Definir codigo fuente del script | Basic |
| `create` | Crear un script nuevo | Basic |
| `delete` | Eliminar un script | Basic |
| `edit_replace` | Reemplazar lineas especificas en un script | Basic |
| `edit_insert` | Insertar lineas en una posicion | Basic |
| `edit_delete` | Eliminar lineas especificas | Basic |
| `search` | Buscar texto en scripts | Basic |
| `get_dependencies` | Obtener dependencias de un script | Basic |
| `replace` | Reemplazo masivo en scripts | Pro |

### Execute Luau (Pro)

Ejecuta Luau arbitrario dentro del sandbox de Roblox Studio.

- Servicios bloqueados: `HttpService`, `DataStoreService`, `MessagingService`
- APIs inaccesibles: `CoreGui`, `CorePackages`

## Documentos relacionados

- [Instancias y propiedades](instances-and-properties.md) - crear o mover instancias de script
- [Playtest y pruebas automatizadas](playtest.md) - inyectar y ejecutar scripts de prueba
- [Lista completa de tools](overview.md)
