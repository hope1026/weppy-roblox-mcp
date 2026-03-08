# Roblox MCP

> Servidor MCP y plugin para Roblox Studio — controla scripts, terrain, assets e iluminacion con Claude Code, Cursor, Codex y Gemini.

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | **Español** | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Instalacion rapida (5 minutos)

**Paso 1** — Instala el plugin de Roblox Studio (puente entre Studio e IA):
[Guia de instalacion del plugin](../en/installation/roblox-plugin.md)

**Paso 2** — Registra el servidor MCP en tu app de IA:

```bash
npx -y @weppy/roblox-mcp
```

| App de IA | Guia |
|-----------|------|
| Claude Code | [Configuracion](../en/installation/ai-apps/claude-code.md) |
| Claude Desktop | [Configuracion](../en/installation/ai-apps/claude-app.md) |
| Codex CLI | [Configuracion](../en/installation/ai-apps/codex-cli.md) |
| Codex Desktop | [Configuracion](../en/installation/ai-apps/codex-app.md) |
| Gemini CLI | [Configuracion](../en/installation/ai-apps/gemini-cli.md) |

> Funciona con cualquier cliente MCP compatible. El comando del servidor es `npx -y @weppy/roblox-mcp`.

## Compatibilidad

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI |
|:-----------:|:--------------:|:------:|:---------:|:----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

**Requisitos:** Node.js 18+, Roblox Studio, Windows 10+ o macOS 12+

## Funciones principales

### 1) MCP Tool: ejecuta en Studio desde lenguaje natural

La IA puede manejar directamente scripts, instancias, propiedades, terreno, iluminacion, assets, audio y animacion dentro de Studio.

- "Agrega particulas + sonido + cooldown cuando el jugador salte."
- "Crea una arena de boss en el centro del mapa y coloca spawns sin colision."
- "Cambia la interfaz de este modulo y actualiza todos los scripts dependientes."

No es solo generacion de codigo. Son **acciones ejecutables orientadas a produccion**.

### 2) Sync: mantiene el contexto completo del proyecto

La IA trabaja sobre un espejo local sincronizado, asi que los cambios en multiples archivos se mantienen consistentes.

![Flujo de Sync — Studio y archivos locales sincronizados en tiempo real](../assets/screenshots/sync.png)

- Basic: sincronizacion unidireccional (Studio -> Local)
- Pro: sincronizacion bidireccional + Direction/Apply Mode por tipo + historial + multiplace

### 3) Roblox Explorer: explora la jerarquia de Studio en VSCode

Visualiza el arbol completo de instancias de tu lugar en Roblox Studio directamente dentro de VSCode. Navega los servicios, abre scripts y archivos de propiedades sincronizados, y rastrea el estado de sincronizacion — todo sin cambiar a Studio.

![Roblox Explorer — arbol de instancias de Studio mostrado en la barra lateral de VSCode](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Iconos de clase iguales a Studio para reconocimiento inmediato
- Clic para abrir scripts y archivos de propiedades sincronizados
- Soporte multiplace con indicadores de estado de sincronizacion

## Valor inmediato para el usuario

- Comprime trabajo repetitivo: convierte muchas ediciones manuales en una sola instruccion
- Cambios relacionados en conjunto: no solo un archivo aislado
- Menor riesgo: decide cambios con estado de sync e historial
- Mejor eficiencia de tokens (Pro): menos idas y vueltas con acciones masivas

## Documentacion detallada

- [Guia de instalacion](../en/installation/README.md)
- [Cobertura de herramientas](../en/tools/overview.md)
- [Guia detallada de Sync](../en/sync/overview.md)
- [Roblox Explorer (Extension VSCode)](../en/installation/roblox-explorer.md)
- [Compatibilidad](../compatibility.md)
- [Solucion de problemas](../troubleshooting.md)

## Upgrade Pro

Sync bidireccional, capacidades de creacion avanzadas y eficiencia de tokens de IA — todo en una sola actualizacion.

[Guia de actualizacion Pro](../en/pro-upgrade.md)

---

[GitHub Issues](https://github.com/hope1026/roblox-mcp/issues) · [Discussions](https://github.com/hope1026/roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
