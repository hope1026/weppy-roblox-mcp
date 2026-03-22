# Playtest

> Consulta el estado de los playtests ejecutados por la IA y los resultados de las pruebas.

![Playtest — estado del playtest e historial de pruebas](../../assets/screenshots/dashboard/dashboard_playtest.png)

## Descripcion general

La pagina Playtest muestra el estado de los playtests ejecutados por la IA y los resultados de las pruebas. Solo es accesible cuando el plugin esta conectado (L2).

## Playtest Status

Muestra el estado actual del playtest:

| Estado | Significado |
|--------|-------------|
| **NotRunning** | Playtest no ejecutado |
| **Running** | Playtest en ejecucion |
| **Paused** | Playtest pausado (modo Run) |

## Test History

Lista en orden cronologico los resultados de las pruebas ejecutadas por la IA mediante la accion `run_test`:

| Campo | Descripcion |
|-------|-------------|
| Marca de tiempo | Hora de ejecucion de la prueba |
| Test Report | Enlace al reporte de prueba |
| Mode | Modo de ejecucion (play/run) |
| Duration | Tiempo de duracion de la prueba |
| Status | Resultado (Passed/Failed) |

Al hacer clic en el reporte de prueba, se puede ver el reporte detallado en formato markdown y los logs.

## Casos de uso

### Analisis de pruebas fallidas

```
"Quiero encontrar la causa del fallo de la prueba automatica que acabo de ejecutar"
```

Busca la prueba con estado Failed en el Test History y haz clic en el Test Report para ver los logs detallados y la causa del fallo.

### Consultar historial de pruebas

```
"Quiero ver el estado de exito/fallo de las pruebas ejecutadas hoy"
```

Revisa la marca de tiempo y el Status en el Test History para identificar la tendencia de los resultados de las pruebas.

## Documentos relacionados

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Playtest y pruebas automatizadas (herramientas)](../tools/playtest.md)
