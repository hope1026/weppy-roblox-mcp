# Dashboard

> Consulta y gestiona en tiempo real el estado del servidor MCP, las conexiones, la sincronizacion, el historial de ejecucion de herramientas y el registro de cambios del juego desde el navegador web.

![Dashboard Overview — estado del servidor, cambios recientes y resumen de sesion de un vistazo](../../assets/screenshots/dashboard/dashboard_overview.png)

## Que es el Dashboard?

El Dashboard es una interfaz de monitoreo basada en web proporcionada por el servidor MCP. Se abre automaticamente en el navegador cuando se inicia el servidor MCP, lo que permite rastrear en tiempo real todas las operaciones que el agente de IA realiza en Roblox Studio.

- Visualiza el estado sin necesidad de revisar los logs del terminal
- Rastrea los cambios realizados por la IA en Studio a traves del historial de cambios
- Consulta el estado de sincronizacion, el estado de conexion y las estadisticas de ejecucion de herramientas en un solo lugar

## Estructura de paginas

| Pagina | Descripcion | Guia detallada |
|--------|-------------|----------------|
| [Overview](#overview) | Tarjetas de estado del servidor/plugin/agente/Sync, feed de cambios recientes | Este documento |
| [Changelog](changelog.md) | Historial de cambios del juego — tarjetas por sesion, resumen de cambios, linea de tiempo, Before & After | [Guia detallada](changelog.md) |
| [Connection](connection.md) | Estado del servidor, lista de agentes de IA, informacion de conexion del plugin | [Guia detallada](connection.md) |
| [Sync](sync.md) | Estado de sincronizacion, configuracion de direccion, logs | [Guia detallada](sync.md) |
| [Playtest](playtest.md) | Estado del playtest, historial de pruebas | [Guia detallada](playtest.md) |
| [Tools](tools.md) | Historial de ejecucion de herramientas, estadisticas, distribucion por tier | [Guia detallada](tools.md) |
| [Settings](settings.md) | Licencia, nivel de log, configuracion de Sync, idioma | [Guia detallada](settings.md) |

## Como acceder

Cuando se inicia el servidor MCP, el Dashboard se abre automaticamente en el navegador. Para acceder manualmente:

```
http://localhost:3002
```

> Configura `DASHBOARD_AUTO_OPEN=false` para desactivar la apertura automatica (consulta la pagina de [Settings](settings.md)).

## Niveles de conexion

El Dashboard ofrece diferentes funciones segun el estado de conexion:

| Nivel | Condicion | Paginas disponibles |
|:-----:|-----------|---------------------|
| **L0** | Servidor no conectado | Solo se muestra la pantalla de espera de reconexion |
| **L1** | Servidor conectado, plugin no conectado | Connection, Tools, Settings |
| **L2** | Servidor + plugin ambos conectados | Todas las paginas |

Cuando el plugin no esta conectado (L1), no se puede acceder a las paginas Overview, Changelog, Sync y Playtest.

## Overview

La pagina Overview es la pantalla inicial del Dashboard y muestra el estado general del sistema de un vistazo.

### Tarjetas de estado

| Tarjeta | Informacion mostrada |
|---------|----------------------|
| **Server** | Estado de conexion del servidor (Online/Offline) |
| **Plugin** | Estado de conexion del plugin, informacion del Place |
| **Agent** | Nombre del agente de IA actualmente conectado |
| **Sync** | Estado de sincronizacion (Idle/Syncing/Error) |

### Cambios recientes del juego (Recent Game Changes)

Muestra en tiempo real los cambios recientes realizados por la IA en Studio (maximo 20). Cada elemento se muestra con un icono de categoria de cambio, y al hacer clic se navega a la vista detallada en [Changelog](changelog.md).

Iconos de categoria:
- Script — creacion/modificacion de scripts
- Instance — creacion/eliminacion/movimiento de instancias
- Property — cambio de propiedades
- Lighting — configuracion de iluminacion/entorno
- Terrain — cambios de terreno
- Asset — insercion de assets

### Resumen de cambios de sesion (Session Change Summary)

Muestra las estadisticas de cambios de la sesion actual agregadas por categoria (ej: "4 scripts · 3 properties").

## Actualizaciones en tiempo real

El Dashboard utiliza SSE (Server-Sent Events) para actualizar los datos en tiempo real:

- Estado del servidor: polling cada 5 segundos
- Feed de cambios, eventos de conexion: streaming en tiempo real via SSE
- Desconexion de SSE: reconexion automatica tras 3 segundos

## Documentos relacionados

- [Changelog](changelog.md) — seguimiento del historial de cambios del juego
- [Connection](connection.md) — estado de conexion del servidor/agente/plugin
- [Sync](sync.md) — monitoreo del estado de sincronizacion
- [Playtest](playtest.md) — historial de playtest
- [Tools](tools.md) — historial/estadisticas de ejecucion de herramientas
- [Settings](settings.md) — licencia, configuracion del servidor, idioma
- [Lista completa de herramientas](../tools/overview.md)
- [Guia detallada de Sync](../sync/overview.md)
