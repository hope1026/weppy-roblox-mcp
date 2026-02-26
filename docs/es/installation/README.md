# Guía de Instalación

Para usar Roblox MCP, necesitas configurar dos cosas:

```
App de IA (Claude, etc.)
         ↓
    Servidor MCP
         ↓
Plugin de Roblox Studio
```

## Paso 1: Instalar el Plugin de Roblox Studio

El plugin conecta Roblox Studio con la IA.

👉 [Guía de instalación del plugin](roblox-plugin.md)

## Paso 2: Registrar el Servidor MCP en tu App de IA

Configura el servidor MCP en tu app de IA para que pueda comunicarse con Roblox Studio.

| App de IA | Cómo configurar |
|-----------|----------------|
| **Claude Code** | [Instrucciones](ai-apps/claude-code.md) |
| **Claude Desktop** | [Instrucciones](ai-apps/claude-app.md) |
| **Codex CLI** | [Instrucciones](ai-apps/codex-cli.md) |
| **Codex Desktop** | [Instrucciones](ai-apps/codex-app.md) |
| **Gemini CLI** | [Instrucciones](ai-apps/gemini-cli.md) |
| **Antigravity** | [Instrucciones](ai-apps/antigravity.md) |

> **Nota**: Funciona con cualquier app compatible con MCP. El comando es:
> ```bash
> npx -y @weppy/roblox-mcp
> ```

## Después de la Instalación

Prueba con un comando simple:

```
Crea una parte azul en Roblox Studio
```

Si funciona, ¡estás listo para empezar!
