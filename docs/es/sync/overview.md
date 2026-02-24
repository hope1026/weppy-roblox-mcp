# Guia detallada de Sync en Roblox MCP

Sync conecta el estado de Roblox Studio con archivos locales para que la IA pueda leer y modificar el contexto completo del proyecto de forma confiable.

## Por que Sync es importante

Sin Sync, la IA solo ve fragmentos pegados en el chat. Con Sync activo, trabaja sobre todo el proyecto.

- Aplicar refactors de forma consistente en multiples scripts
- Revisar cambios riesgosos rapidamente usando historial
- Mantener clara la fuente de verdad entre Studio y archivos locales

## Como funciona

1. Full Sync: espejo inicial del arbol/instancias de Studio a local
2. Incremental Sync: reflejo continuo de cambios nuevos
3. Seguimiento de History/Status: ver que cambio, cuando y en que direccion

La ruta local por defecto es `roblox-project-sync/place_{placeId}/explorer`.

## Basic vs Pro

| Item | Basic | Pro |
|------|------|-----|
| Direccion de sync | Studio -> Local | Bidireccional |
| Direction por tipo | No soportado | Soportado (Scripts / Values / Containers / Data / Services) |
| Apply Mode por tipo | No soportado | Soportado (Auto / Manual) |
| APIs de estado/historial | No soportado | Soportado (`status`, `history`, `progress`) |
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
| `status` | Consultar estado actual de sync de un place | `placeId` |
| `config` | Obtener configuracion de sync | `placeId` |
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

### 3) Recuperar cuando sea necesario

- Sigue cambios recientes con `history`
- Inspecciona archivo objetivo con `read_file`
- Restaura contenido con `write_file` y verifica en Studio

## Documentos relacionados

- [Cobertura de herramientas (Tools Overview)](../tools/overview.md)
- [Guia de upgrade Pro](../pro-upgrade.md)
