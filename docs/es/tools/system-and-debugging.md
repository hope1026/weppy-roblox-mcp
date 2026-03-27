# Sistema y depuracion

> Verifica la conexion, administra logs, controla la seleccion de Studio y ejecuta lotes para flujos de depuracion.

## Tools incluidas

| Tool | Tier | Descripcion |
|------|:----:|-------------|
| `system_info` | Mixto | `ping`, `connection`, `usage`, `place_info`, `services`, `studio_settings` |
| `manage_logs` | Basic | Consultar logs, limpiar buffers y filtrar errores recientes |
| `manage_selection` | Mixto | Leer, reemplazar y monitorear la seleccion de Studio |
| `batch_execute` | Pro | Ejecutar varios comandos en un solo lote |

> Para las acciones de playtest de `system_info` como `play`, `stop` y `run_test`, consulta [Playtest y pruebas automatizadas](playtest.md).

## Flujos principales

### Verificar la conexion

```
"Comprueba si Studio esta conectado correctamente."
```

Usa `system_info.ping` para una verificacion rapida.

### Depurar errores recientes

```
"Muestrame los errores mas recientes."
```

Usa `manage_logs.errors` para obtener solo los errores recientes. `manage_logs.get` tambien soporta consulta incremental con el cursor `sinceSeq`.

### Ejecutar un flujo por lotes (Pro)

```
"Cambia a rojo todos los Part de Workspace y luego enfoca la camara en el primero."
```

Usa `batch_execute` para agrupar varios comandos en una sola solicitud.

## Referencia de acciones

### System Info (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `ping` | Probar la conexion | Basic |
| `connection` | Obtener informacion de conexion del servidor y plugin | Basic |
| `usage` | Obtener el tier actual (`basic` o `pro`) | Basic |
| `place_info` | Obtener Place ID, nombre y creador | Pro |
| `services` | Listar todos los servicios de Roblox | Pro |
| `studio_settings` | Obtener preferencias de Studio | Pro |

### Manage Logs (Basic)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener logs filtrados con soporte opcional de cursor `sinceSeq` | Basic |
| `clear` | Limpiar el buffer de logs | Basic |
| `errors` | Obtener solo errores recientes | Basic |

### Manage Selection (Mixto)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `get` | Obtener la seleccion actual | Basic |
| `set` | Reemplazar la seleccion actual | Basic |
| `clear` | Limpiar la seleccion | Basic |
| `cached` | Obtener la seleccion cacheada sin round-trip | Basic |
| `context` | Obtener contexto detallado con codigo fuente y propiedades | Pro |
| `details` | Obtener detalles jerarquicos con ancestros y descendientes | Pro |
| `add` | Agregar elementos a la seleccion | Pro |
| `remove` | Quitar elementos de la seleccion | Pro |
| `watch` | Monitorear cambios de seleccion | Pro |

### Manage Context (Basic)

| Accion | Descripcion | Tier |
|--------|-------------|------|
| `begin` | Inicia un contexto de ejecucion estructurado para el alcance actual de sesion/place | Basic |
| `update` | Actualiza la intencion, las areas afectadas o los metadatos de replay del contexto activo | Basic |
| `end` | Cierra el contexto de ejecucion activo y guarda el snapshot final | Basic |

### Batch Execute (Pro)

Ejecuta varios comandos en un solo lote. Cada comando incluye nombre de tool y argumentos, se ejecuta en orden y puede continuar despues de errores si se configura asi.

## Documentos relacionados

- [Playtest y pruebas automatizadas](playtest.md) - acciones de playtest en `system_info`
- [Scripting y ejecucion de codigo](scripting.md) - ejecutar Luau para investigacion y depuracion
- [Lista completa de tools](overview.md)
