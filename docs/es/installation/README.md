# Guía de Instalación

Para usar Roblox MCP, necesitas configurar dos cosas:

```
App de IA (Claude, etc.)
         ↓
    Servidor MCP
         ↓
Plugin de Roblox Studio
```

## Instalación en un solo comando (Recomendado)

Instala el servidor MCP, el plugin de Roblox Studio y registra tus apps de IA en un solo paso:

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash

# Windows (PowerShell)
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

¡Reinicia Roblox Studio y listo!

Si la ejecución de PowerShell está bloqueada en Windows, continúa con la instalación manual de abajo. Si usas el paquete ZIP, también puedes ejecutar `setup-plugin.bat` y `setup-mcp.bat`.

---

## Instalación manual

Este es el método alternativo cuando la instalación en un solo comando no funciona, o cuando no puedes usar la instalación automática en tu entorno.

### Paso 1: Instalar el Plugin de Roblox Studio

El plugin conecta Roblox Studio con la IA.

👉 [Guía de instalación del plugin](roblox-plugin.md)

### Paso 2: Registrar el Servidor MCP en tu App de IA

Configura el servidor MCP en tu app de IA para que pueda comunicarse con Roblox Studio.

| App de IA | Cómo configurar |
|-----------|----------------|
| **Claude Code** | [Instrucciones](ai-apps/claude-code.md) |
| **Claude Desktop** | [Instrucciones](ai-apps/claude-app.md) |
| **Cursor** | [Instrucciones](ai-apps/cursor.md) |
| **Codex CLI** | [Instrucciones](ai-apps/codex-cli.md) |
| **Codex Desktop** | [Instrucciones](ai-apps/codex-app.md) |
| **Gemini CLI** | [Instrucciones](ai-apps/gemini-cli.md) |
| **Antigravity** | [Instrucciones](ai-apps/antigravity.md) |

> **Nota**: Funciona con cualquier app compatible con MCP. El comando es:
> ```bash
> npx -y @weppy/roblox-mcp
> ```

## Opcional: Instalar Roblox Explorer (Extensión VSCode)

Explora los árboles de instancias sincronizados dentro de VSCode con iconos de clases Roblox.

👉 [Guía de instalación de Roblox Explorer](roblox-explorer.md)

---

## Después de la Instalación

Prueba con un comando simple:

```
Crea una parte azul en Roblox Studio
```

Si funciona, ¡estás listo para empezar!
