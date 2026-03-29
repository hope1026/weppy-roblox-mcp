# Playtest y pruebas automatizadas

> Controla el playtest de Roblox Studio con IA, inyecta scripts de prueba y genera logs y reportes locales automaticamente.

## Tools incluidas

| Tool | Tier | Descripcion |
|------|:----:|-------------|
| `system_info` | Pro | acciones `play`, `stop`, `pause`, `resume`, `play_status`, `run_test` |

> Para otras acciones de `system_info` como `ping`, `connection` y `usage`, consulta [Sistema y depuracion](system-and-debugging.md).

## Flujos principales

### Control manual de playtest

```
"Inicia el juego en modo Play (F5)."
"Deten el playtest actual."
```

Flujo tipico: `play` -> `play_status` -> `stop`.

### Ejecutar una prueba automatizada

```
"Escribe y ejecuta una prueba que verifique si el SpawnLocation esta bien posicionado."
```

`run_test` inyecta el script de prueba, inicia el playtest automaticamente, recopila logs y hace la limpieza.

### Verificacion estilo CI

```
"Ejecuta una prueba en modo Run (F8) que verifique si el NPC llega al objetivo y muestrame los logs si falla."
```

Usa `run_test` con `mode: "run"` para validaciones enfocadas en el servidor.

## Maquina de estados del playtest

```text
Edit --play--> Running --stop--> Edit
                  |               ^
                pause             |
                  |               |
                  v               |
               Paused --resume--> Running
```

| Estado | Acciones disponibles |
|--------|----------------------|
| `edit` | `play` |
| `running` | `stop`, `pause` (solo modo Run) |
| `paused` | `resume`, `stop` |

- Modo Play (F5): simulacion de cliente + servidor, sin pausa ni reanudacion
- Modo Run (F8): simulacion solo de servidor, con pausa y reanudacion

## Flujo de `run_test`

`run_test` orquesta estos pasos automaticamente:

### 1. Preparacion

- Leer informacion del place con `place_info`
- Limpiar el buffer de logs existente

### 2. Inyeccion del script

- Crear `ServerScriptService.__MCP_TestRunner` con un script de prueba envuelto
- El wrapper maneja las senales `START` y `FINISHED` y los tracebacks de error

### 3. Ejecucion y monitoreo

- Iniciar el playtest en modo Play o Run
- Consultar logs cada 500 ms
- Finalizar cuando se detecte `[WEPPY_TEST]:FINISHED`
- Detener automaticamente al llegar al timeout (60 segundos por defecto, 300 maximo)

### 4. Limpieza

- Detener el playtest automaticamente
- Eliminar el script de prueba inyectado
- Recoger los logs finales

### 5. Escritura de reportes

Los reportes y logs se escriben en `{projectRoot}/wrox-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/`.

```text
{projectRoot}/wrox-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/
├── test-report.md
└── test-log.txt
```

Ejemplo de `test-report.md`:

```markdown
# Test Report

- Status: passed
- Test Name: spawn_location_test
- Mode: run
- Place ID: 123456
- Duration (ms): 1523
- Total Logs: 12
- Signal Count: 2

## Signals

- START: 2026-03-12T10:30:00.000Z
- FINISHED: 2026-03-12T10:30:01.523Z
```

## Referencia de acciones

| Accion | Descripcion | Parametros | Tier |
|--------|-------------|------------|------|
| `play` | Iniciar playtest en modo Play (F5) o Run (F8) | `mode`: `"play"` \| `"run"` | Pro |
| `stop` | Detener el playtest actual | - | Pro |
| `pause` | Pausar un playtest en modo Run | - | Pro |
| `resume` | Reanudar un playtest pausado en modo Run | - | Pro |
| `play_status` | Obtener el estado del playtest y acciones disponibles | - | Pro |
| `run_test` | Inyectar script de prueba, ejecutar playtest, recopilar logs y escribir reportes | `script` (obligatorio), `test_name`, `mode`, `timeout` | Pro |

### Parametros de `run_test`

| Parametro | Tipo | Obligatorio | Descripcion |
|-----------|------|:-----------:|-------------|
| `script` | string | ✅ | Cuerpo del codigo Luau de prueba a ejecutar |
| `test_name` | string | - | Nombre mostrado en el reporte |
| `mode` | `"play"` \| `"run"` | - | Modo de playtest, por defecto `"play"` |
| `timeout` | number | - | Timeout en segundos, por defecto 60, maximo 300 |

## Documentos relacionados

- [Sistema y depuracion](system-and-debugging.md) - acciones de conexion y gestion de logs
- [Scripting y ejecucion de codigo](scripting.md) - escribir scripts y ejecutar Luau
- [Lista completa de tools](overview.md)
