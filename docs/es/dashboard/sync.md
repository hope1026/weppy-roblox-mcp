# Sync

> Monitorea el estado actual, la configuracion de direccion y los logs de la sincronizacion Studio <-> archivos locales.

![Sync — estado de sincronizacion, configuracion de direccion, logs](../../assets/screenshots/dashboard/dashboard_sync.png)

> Para la guia detallada de la funcion Sync en si, consulta la [Guia detallada de Sync](../sync/overview.md).

## Descripcion general

La pagina Sync muestra visualmente el estado actual y la configuracion de la sincronizacion Studio <-> archivos locales. Solo es accesible cuando el dashboard esta en estado **Studio conectado**.

## Sync Status

Muestra el estado actual de sincronizacion:

| Estado | Significado |
|--------|-------------|
| **Idle** | En espera de sincronizacion |
| **Initializing** | Sincronizacion inicial en progreso |
| **Syncing** | Sincronizacion incremental en progreso |
| **Error** | Error de sincronizacion |

La tarjeta de estado tambien muestra la ruta de sincronizacion, el numero de instancias sincronizadas y el modo de aplicacion actual (Auto/Manual).

## Sync Directions

Muestra en una tabla la direccion de sincronizacion por tipo:

| Columna | Descripcion |
|---------|-------------|
| Type | Tipo de objetivo de sincronizacion (Scripts, Values, Instances, Data, Services) |
| Direction | Direccion de sincronizacion (Local -> Studio, Studio -> Local) |
| Apply Mode | Modo de aplicacion (Auto/Manual) |

Permite verificar la direccion de sincronizacion de cada tipo para entender en que direccion se reflejan los cambios.

## Sync Log

Muestra los eventos de sincronizacion en orden cronologico. Cada entrada del log incluye una etiqueta de tipo de cambio (create, update, delete, etc.) y la ruta del objetivo.

## Casos de uso

### Verificar el estado de sincronizacion

```
"Quiero comprobar si el Sync esta funcionando correctamente"
```

Verifica que el Sync Status este en Idle y que los cambios recientes se hayan registrado correctamente en el Sync Log.

### Identificar la direccion de sincronizacion

```
"Quiero saber en que direccion se sincronizan los cambios de scripts"
```

Consulta la Direction del tipo Scripts en la tabla de Sync Directions.

## Documentos relacionados

- [WEPPY Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Guia detallada de Sync](../sync/overview.md)
