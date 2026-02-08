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
| **Claude Code** (Recomendado) | [claude-code.md](ai-apps/claude-code.md) |
| **Claude Desktop** | [claude-desktop.md](ai-apps/claude-desktop.md) |
| **Cline** | [cline.md](ai-apps/cline.md) |
| **Roo Code** | [roo-code.md](ai-apps/roo-code.md) |
| **Cursor** | [cursor.md](ai-apps/cursor.md) |

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
