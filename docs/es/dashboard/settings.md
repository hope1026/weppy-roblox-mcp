# Settings

> Consulta y gestiona la informacion de licencia, la configuracion del servidor, la configuracion de sincronizacion y el idioma.

## Descripcion general

En la pagina Settings puedes consultar la informacion de licencia y la configuracion del servidor, y modificar algunos parametros. Es accesible siempre que el dashboard este en estado **Servidor conectado** o **Studio conectado**.

## License (solo lectura)

Muestra el estado actual de la licencia:

| Campo | Descripcion |
|-------|-------------|
| Status | Indicador de estado (Active/Inactive) |
| Tier | Tier actual (Basic/Pro) |
| License Key | Clave de licencia enmascarada |
| Provider | Informacion del proveedor de licencia |

## General

| Configuracion | Descripcion |
|---------------|-------------|
| Log Level | Nivel de salida de logs |
| History Recording | Si se guarda el historial de ejecucion de herramientas |
| Stats Collection | Si se recopilan estadisticas de herramientas |
| Request Timeout | Tiempo de espera de solicitudes (segundos) |

## Server Environment (solo lectura)

Muestra la configuracion del servidor establecida mediante variables de entorno:

| Variable de entorno | Descripcion | Valor predeterminado |
|---------------------|-------------|----------------------|
| `HTTP_PORT` | Puerto HTTP | 3002 |
| `HTTP_HOST` | Host HTTP | 127.0.0.1 |
| `DASHBOARD_AUTO_OPEN` | Apertura automatica del dashboard | true |

## Sync Settings

| Configuracion | Descripcion |
|---------------|-------------|
| Max Depth | Profundidad maxima de sincronizacion |
| Max Instances | Numero maximo de instancias a sincronizar |

## Language

Cambia el idioma de la interfaz del Dashboard. Soporta 6 idiomas + Auto (deteccion automatica del idioma del navegador).

| Opcion | Idioma |
|--------|--------|
| Auto | Deteccion automatica del idioma del navegador |
| English | Ingles |
| 한국어 | Coreano |
| 日本語 | Japones |
| Español | Espanol |
| Português | Portugues |
| Bahasa Indonesia | Indonesio |

## Documentos relacionados

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
