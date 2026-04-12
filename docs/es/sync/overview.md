# Guia detallada de Sync en Roblox MCP

Sync conecta el estado de Roblox Studio con archivos locales para que la IA pueda leer y modificar el contexto completo del proyecto de forma confiable.

## Por que Sync es importante

Sin Sync, la IA solo ve fragmentos pegados en el chat. Con Sync activo, trabaja sobre todo el proyecto.

- Aplicar refactors de forma consistente en multiples scripts
- Revisar cambios riesgosos rapidamente usando historial
- Mantener clara la fuente de verdad entre Studio y archivos locales

## Como funciona

![Flujo de Sync — arbol de Studio reflejado en archivos locales](../../assets/screenshots/plugin/sync/sync-overview.png)

1. Full Sync: espejo inicial del arbol/instancias de Studio a local
2. Incremental Sync: reflejo continuo de cambios nuevos
3. Seguimiento de History/Status: ver que cambio, cuando y en que direccion

Los datos de Sync se guardan en `{projectRoot}/weppy-project-sync/place_{placeId}/explorer`.
Ademas, WEPPY escribe un sourcemap por place en `{projectRoot}/weppy-project-sync/place_{placeId}/sourcemap.json` y mantiene el archivo representante recomendado en la raiz en `{projectRoot}/weppy-project-sync/sourcemap.json`.
Para integraciones de editor como `luau-lsp`, se recomienda usar la ruta de la raiz. Los pasos de configuracion estan en [Usar `luau-lsp` con WEPPY Sync](./luau-lsp.md).

### Explorar datos sincronizados en VSCode

Instala la extension [WEPPY Roblox Explorer](../installation/roblox-explorer.md) para explorar el arbol de instancias sincronizado en VSCode, igual que en Roblox Studio.
Explorer lee los archivos sync generados aqui, y puede mostrar ademas estado sync en vivo e informacion de direction cuando el servidor MCP local esta en ejecucion.

![WEPPY Roblox Explorer — explorar el arbol de instancias sincronizado en VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Arbol de servicios/instancias con iconos de clases Roblox
- Haz clic en un script para abrirlo y editarlo
- Badges de estado de sync muestran el estado modificado/conflicto

## Basic vs Pro

| Item | Basic | Pro |
|------|------|-----|
| Direccion de sync | Studio -> Local | Bidireccional |
| Direction por tipo | No soportado | Soportado (Scripts / Values / Containers / Data / Services) |
| Apply Mode por tipo | No soportado | Soportado (Auto / Manual) |
| APIs de estado/historial | No soportado | Soportado (`status_current_place`, `history`, `progress`) |
| Herramienta `manage_sync` | No soportado | Soportado |
| Sync multiplace | No soportado | Soportado (hasta 3 places) |

## Objetivos de sync y exclusiones por defecto

Servicios sincronizables por defecto:

- `Workspace`
- `Lighting`
- `ReplicatedStorage`
- `ServerStorage`
- `ServerScriptService`
- `StarterGui`
- `StarterPlayer`
- `StarterPack`
- `ReplicatedFirst`
- `SoundService`
- `Chat`
- `LocalizationService`

Exclusiones por defecto:

- Clases: `Terrain`, `Camera`
- Rutas restringidas por seguridad: `CoreGui`, `CorePackages`, `RobloxScript`, `RobloxScriptSecurity`

## Direction y Apply Mode

### Direction (direccion por tipo)

- `forward`: Studio -> Local
- `reverse`: Local -> Studio
- `bidirectional`: ambas direcciones

Los tipos se gestionan por separado: `scripts`, `values`, `containers`, `data`, `services`.

### Apply Mode (como se aplican cambios reverse)

- `manual`: el usuario confirma antes de aplicar a Studio
- `auto`: los cambios detectados se aplican automaticamente

En Pro puedes controlar Direction y Apply Mode por tipo.

## Guia de acciones `manage_sync` (Pro)

| Accion | Descripcion | Parametros clave |
|------|------|-----------|
| `status_current_place` | Consultar el estado actual de sync del place conectado | `-` |
| `history` | Consultar historial de cambios | `placeId`, `query.limit`, `query.offset` |
| `directions` | Obtener direcciones por tipo | `placeId` |
| `read_file` | Leer archivo sincronizado | `placeId`, `instancePath` |
| `write_file` | Escribir archivo sincronizado | `placeId`, `instancePath`, `content` |
| `progress` | Obtener progreso/throughput en tiempo real | `placeId` |

## Flujo recomendado

### 1) Empezar con seguridad

- Completa Full Sync primero para establecer una base estable
- Empieza con modo `manual` para reducir riesgo

### 2) Trabajar con IA

- "Revisa el estado de sync y resume solo cambios riesgosos del historial reciente"
- "Refactoriza primero scripts de `ServerScriptService` y deja registro en historial"

### 3) Resolver conflictos

Cuando se detectan cambios tanto en Studio como en local durante la sincronizacion bidireccional, aparece un dialogo de resolucion de conflictos.

![Local Changes Detected — opciones de resolucion de conflictos (Studio Priority / Local Priority / Per-File)](../../assets/screenshots/plugin/sync/sync-conflict.png)

- **Studio Priority**: sobrescribir usando el estado de Studio como fuente de verdad
- **Local Priority**: aplicar los archivos locales a Studio
- **Per-File**: elegir que lado tiene prioridad para cada archivo individualmente

### 4) Recuperar cuando sea necesario

- Sigue cambios recientes con `history`
- Inspecciona archivo objetivo con `read_file`
- Restaura contenido con `write_file` y verifica en Studio

## Formato de archivos (v2 nested directory)

Cada instancia de Roblox se almacena como su propio directorio con archivos meta dentro:

```
explorer/
├── Workspace/
│   ├── _tree.json
│   ├── Part/
│   │   └── Part.props.json
│   ├── MyScript/
│   │   └── MyScript.server.luau
│   └── Coins/
│       └── Coins.value.json
```

Convenciones de nombres:
- Propiedades: `{Name}/{Name}.props.json`
- Scripts: `{Name}/{Name}.server.luau` / `.client.luau` / `.module.luau`
- Valores: `{Name}/{Name}.value.json`

Las instancias con nombre duplicado usan el sufijo `~N` en el directorio (ej. `Part~2/Part.props.json`).
Los nombres que contienen `~` se escapan como `~~` (ej. `Part~2` → `Part~~2/`). Regla Odd-Count Tilde: un `~+N` final se interpreta como sufijo de colisión solo cuando la cantidad de tildes es impar.

## Documentos relacionados

- [Usar `luau-lsp` con WEPPY Sync](./luau-lsp.md)
- [Cobertura de herramientas (Tools Overview)](../tools/overview.md)
- [Guia de upgrade Pro](https://weppyai.com/en/plans)
