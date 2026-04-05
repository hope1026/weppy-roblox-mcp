# Roblox MCP — Servidor MCP para Roblox Studio | Desarrollo de juegos con IA usando Claude, Codex, Cursor y Gemini

> **WROX** es un servidor MCP que permite a los agentes de codificacion IA controlar una sesion en vivo de Roblox Studio — crea y edita scripts, instancias, terrain, iluminacion, assets, audio y animaciones con lenguaje natural.

**Herramientas consolidadas basadas en acciones · Sync bidireccional · Playtest automatizado · Soporte multi-place**

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | **Español** | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![Demo — IA creando un juego Roblox en tiempo real](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## ¿Por qué WROX (Weppy Roblox MCP)?

Los agentes de codificación IA como Claude, Codex y Gemini son potentes — pero no pueden ver ni modificar nada dentro de Roblox Studio. El DataModel, los scripts, el terrain y la iluminación son invisibles para las herramientas externas. Sin un puente, la IA solo puede generar fragmentos de código que debes pegar manualmente.

**WROX** es un puente entre los agentes de IA y Roblox Studio. La IA crea y modifica directamente instancias, scripts, propiedades, terrain y más dentro de Studio, y los cambios se reflejan de inmediato en Studio y en el dashboard para que puedas **ver exactamente qué cambió**.

No necesitas copiar ni pegar código. La IA trabaja y tú verificas los resultados.

## Instalacion rapida

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

¡Reinicia Roblox Studio y listo!

El registro automático de MCP es compatible con **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI y Antigravity**.

Si la ejecución de PowerShell está bloqueada en Windows, continúa con la instalación manual de abajo. Si usas el paquete ZIP, también puedes usar `setup-plugin.bat` y `setup-mcp.bat`.

### Instalacion manual

Si la instalacion en un solo comando no funciona, o si no puedes usar la instalacion automatica en tu entorno, usa la instalacion manual de abajo como alternativa.

**Paso 1** — Instala el plugin de Roblox Studio (puente entre Studio e IA):
[Guia de instalacion del plugin](installation/roblox-plugin.md)

**Paso 2** — Registra el servidor MCP en tu app de IA:

```bash
npx -y @weppy/roblox-mcp
```

| App de IA | Guia |
|-----------|------|
| Claude Code | [Configuracion](installation/ai-apps/claude-code.md) |
| Claude Desktop | [Configuracion](installation/ai-apps/claude-app.md) |
| Cursor | [Configuracion](installation/ai-apps/cursor.md) |
| Codex CLI | [Configuracion](installation/ai-apps/codex-cli.md) |
| Codex Desktop | [Configuracion](installation/ai-apps/codex-app.md) |
| Gemini CLI | [Configuracion](installation/ai-apps/gemini-cli.md) |
| Antigravity | [Configuracion](installation/ai-apps/antigravity.md) |

> Funciona con cualquier cliente MCP compatible. El comando del servidor es `npx -y @weppy/roblox-mcp`.

## Compatibilidad

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI | Antigravity |
|:-----------:|:--------------:|:------:|:---------:|:----------:|:-----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**Requisitos:** Node.js 18+, Roblox Studio, Windows 10+ o macOS 12+

## Funciones principales

### 1) MCP Tool: ejecuta en Studio desde lenguaje natural

La IA puede manejar directamente scripts, instancias, propiedades, terreno, iluminacion, assets, audio y animacion dentro de Studio.

- "Agrega particulas + sonido + cooldown cuando el jugador salte."
- "Crea una arena de boss en el centro del mapa y coloca spawns sin colision."
- "Cambia la interfaz de este modulo y actualiza todos los scripts dependientes."

### 2) Sync: mantiene el contexto completo del proyecto

La IA trabaja sobre un espejo local sincronizado, asi que los cambios en multiples archivos se mantienen consistentes.

- Basic: sincronizacion unidireccional (Studio -> Local)
- Pro: sincronizacion bidireccional + Direction/Apply Mode por tipo + historial + multiplace

![Flujo de Sync — Studio y archivos locales sincronizados en tiempo real](../assets/screenshots/plugin/sync/sync-overview.png)

### 3) Playtest: la IA ejecuta y verifica pruebas automaticamente

La IA puede controlar directamente el playtest de Studio. Puede iniciar y detener Play (F5) o Run (F8), inyectar scripts de prueba, recopilar logs y generar reportes locales automaticamente.

- "Inicia un playtest en modo Run y verifica si el NPC llega al objetivo."
- "Escribe y ejecuta una prueba para confirmar que el SpawnLocation esta sobre el suelo."
- "Valida con playtest que el script que acabo de cambiar funciona sin errores."

![WROX Playtest Dashboard — historial de pruebas y reporte detallado](../assets/screenshots/dashboard/dashboard_playtest.png)

### 4) WROX Dashboard: monitorea el trabajo de la IA en tiempo real

El Dashboard web proporcionado por el servidor MCP permite consultar en tiempo real el estado de conexion, el historial de ejecucion de herramientas, el estado de sincronizacion y el historial de cambios del juego.

- Estado de conexion del servidor/plugin/agente de un vistazo
- Compara todos los cambios realizados por la IA con Before & After en el Changelog
- Analiza el flujo de trabajo con el historial de ejecucion de herramientas y estadisticas

![WROX WROX Dashboard Overview — estado del servidor, cambios recientes y resumen de sesion](../assets/screenshots/dashboard/dashboard_overview.png)

### 5) WROX Roblox Explorer: explora la jerarquia de Studio en VSCode

Visualiza el arbol completo de instancias de tu lugar en Roblox Studio directamente dentro de VSCode. Navega los servicios, abre scripts y archivos de propiedades sincronizados, y rastrea el estado de sincronizacion — todo sin cambiar a Studio.
WROX Roblox Explorer es una extension complementaria de VSCode para los datos de sync generados por WROX. El arbol base funciona con los archivos sincronizados en disco, y los indicadores en vivo de estado sync o direction se enriquecen cuando el servidor MCP local esta en ejecucion.
Instálalo desde [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) o [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer).

- Iconos de clase iguales a Studio para reconocimiento inmediato
- Clic para abrir scripts y archivos de propiedades sincronizados
- Soporte multiplace con indicadores de estado de sincronizacion

![WROX Roblox Explorer — arbol de instancias de Studio mostrado en la barra lateral de VSCode](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Valor inmediato para el usuario

- Comprime trabajo repetitivo: convierte muchas ediciones manuales en una sola instruccion
- Cambios relacionados en conjunto: no solo un archivo aislado
- Menor riesgo: decide cambios con estado de sync e historial
- Mejor eficiencia de tokens (Pro): menos idas y vueltas con acciones masivas

## Casos de uso

- **Prototipado rápido**: Describe una mecánica de juego en lenguaje natural y observa cómo la IA la construye en Studio
- **Refactorización masiva**: Renombra una interfaz de módulo y actualiza todos los scripts dependientes en una sola solicitud
- **Terrain y entorno**: Genera terrain procedural, configura iluminación/atmósfera, coloca assets — todo desde un solo prompt
- **Consistencia multi-archivo**: La IA lee el proyecto completo vía Sync y aplica cambios en scripts relacionados de forma conjunta
- **Integración de assets**: Busca en el Creator Store, inserta modelos y configura propiedades sin salir de tu editor

## Documentacion detallada

- [Guia de instalacion](installation/README.md)
- [Lista completa de tools](tools/overview.md)
- [Guia detallada de Sync](sync/overview.md)
- [Guia del Dashboard](dashboard/overview.md)
- [WROX Roblox Explorer (Extension VSCode)](installation/roblox-explorer.md)
- [Compatibilidad](../compatibility.md)
- [Solucion de problemas](../troubleshooting.md)

### Guias por flujo

- [Instancias y propiedades](tools/instances-and-properties.md) - busqueda, creacion, edicion y tags
- [Scripting y ejecucion de codigo](tools/scripting.md) - gestion de scripts y ejecucion de Luau
- [Mundo y entorno](tools/world-and-environment.md) - iluminacion, terrain y camara
- [Assets y efectos](tools/assets-and-effects.md) - insercion de modelos, tween y efectos
- [Playtest y pruebas automatizadas](tools/playtest.md) - control de playtest y validacion automatica
- [Sistema y depuracion](tools/system-and-debugging.md) - conexion, logs y ejecucion por lotes

## FAQ

### ¿Cómo conecto Claude Code a Roblox Studio?
Instala el plugin de Roblox Studio y luego registra el servidor MCP (`npx -y @weppy/roblox-mcp`) en Claude Code. Claude podrá leer y escribir scripts directamente dentro de Studio. Consulta [Configuración de Claude Code](installation/ai-apps/claude-code.md).

### ¿Cómo uso Codex CLI con Roblox Studio?
Instala el plugin y agrega la configuración del servidor MCP a Codex CLI. Consulta [Configuración de Codex CLI](installation/ai-apps/codex-cli.md).

### ¿Roblox MCP funciona con Cursor?
Sí. Consulta [Configuración de Cursor](installation/ai-apps/cursor.md). Cualquier cliente de IA compatible con MCP funciona.

### ¿Puede la IA crear juegos de Roblox con esto?
Sí. La IA puede crear instancias, escribir scripts, generar terrain, configurar iluminación, insertar assets, configurar física y más — todo dentro de una sesión de Studio en vivo. Va más allá de la generación de código hacia acciones ejecutables.

### ¿Cuál es la diferencia entre Basic y Pro?
Basic (gratuito) incluye ejecución de herramientas MCP y sincronización unidireccional (Studio -> Local). Pro agrega sincronización bidireccional, operaciones masivas, generación de terrain, análisis espacial, control de audio/animación y soporte multi-place. Consulta la [Guía de actualización Pro](pro-upgrade.md).

### ¿Cómo se diferencia Weppy de otros servidores MCP para Roblox?
Weppy usa despacho basado en acciones en lugar de herramientas separadas para cada función. Esto reduce significativamente el consumo de tokens de IA. También proporciona sincronización bidireccional de proyecto y soporte multi-place, que la mayoría de las alternativas no tienen.

### ¿Es seguro? ¿Puede la IA romper mi juego?
El servidor se ejecuta solo en localhost (127.0.0.1:3002). Las rutas prohibidas (CoreGui, CorePackages) están bloqueadas. La limitación de velocidad (450 req/min) y los tiempos de espera de 30 segundos previenen operaciones fuera de control. Todos los cambios son rastreables a través del historial de sincronización.

## Upgrade Pro

Sync bidireccional, capacidades de creacion avanzadas y eficiencia de tokens de IA — todo en una sola actualizacion.

[Guia de actualizacion Pro](pro-upgrade.md)

## Licencia

Este repositorio está licenciado bajo `AGPL-3.0`.

Las licencias comerciales están disponibles por separado. Consulta [COMMERCIAL-LICENSE.md](../../COMMERCIAL-LICENSE.md).

El uso del nombre y los logotipos de Weppy se rige por [TRADEMARKS.md](../../TRADEMARKS.md).

---

[![npm version](https://img.shields.io/npm/v/@weppy/roblox-mcp)](https://www.npmjs.com/package/@weppy/roblox-mcp) [![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/) [![Smithery](https://smithery.ai/badge/@hope1026/weppy-roblox-mcp)](https://smithery.ai/server/@hope1026/weppy-roblox-mcp)

[![Roblox MCP on Glama](https://glama.ai/mcp/servers/hope1026/roblox-mcp/badges/card.svg)](https://glama.ai/mcp/servers/hope1026/roblox-mcp)

[GitHub Issues](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
