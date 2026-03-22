# Tools

> Consulta el historial de ejecucion y las estadisticas de las herramientas MCP ejecutadas por la IA.

![Tools — historial de ejecucion de herramientas y estadisticas](../../assets/screenshots/dashboard/dashboard_tools.png)

## Descripcion general

La pagina Tools proporciona el historial de ejecucion y las estadisticas de las herramientas MCP ejecutadas por la IA. Se compone de dos sub-pestanas: **History** y **Statistics**. Es accesible siempre que el servidor este conectado (L1 o superior).

## Pestana History

Muestra el historial de ejecucion de herramientas en una tabla ordenada cronologicamente:

| Columna | Descripcion |
|---------|-------------|
| Time | Hora de ejecucion |
| Tool.Action | Herramienta y accion ejecutada (ej: `query_instances.get_instance`) |
| Duration | Tiempo de ejecucion |
| Status | Estado del resultado (OK/Error) |
| Tier | Tier utilizado (Basic/Pro) |

Funcionalidades:
- Desplegable de **filtro por Tool** para filtrar una herramienta especifica
- Paginacion para explorar grandes volumenes de registros
- Adicion de nuevos registros de ejecucion en tiempo real

## Pestana Statistics

Analiza visualmente las estadisticas de uso de herramientas:

- **Distribucion por tier** — proporcion de uso de herramientas Basic/Pro
- **Estadisticas por herramienta** — numero de llamadas y tiempo medio de respuesta de cada herramienta
- **Analisis por accion** — estadisticas detalladas por accion dentro de cada herramienta

## Funciones exclusivas del tier Basic

Los usuarios del tier Basic ven elementos de UI adicionales:

- **Tier Usage Progress** — barra de progreso de uso
- **Modal comparativo Basic vs Pro** — informacion sobre las funciones adicionales del tier Pro

## Casos de uso

### Analisis de rendimiento de herramientas

```
"Quiero saber que herramienta tarda mas tiempo"
```

Consulta el tiempo medio de respuesta por herramienta en la pestana Statistics.

### Seguimiento de errores

```
"Quiero saber por que fallo la herramienta que acabo de ejecutar"
```

Busca los elementos con Status Error en la pestana History para ver la informacion detallada.

## Documentos relacionados

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Settings](settings.md)
- [Lista completa de herramientas](../tools/overview.md)
