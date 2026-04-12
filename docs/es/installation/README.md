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

Instala todo con un solo comando:

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

Si la ejecución de PowerShell está bloqueada en Windows, continúa con la instalación manual de abajo. Si usas el paquete ZIP, también puedes ejecutar `setup-plugin.bat` y `setup-mcp.bat`.

---

## Instalación manual

Si la instalacion en un solo comando no funciona, o cuando no puedes usar la instalacion automatica en tu entorno, usa la instalacion manual de abajo como alternativa.

### Paso 1: Instalar el Plugin de Roblox Studio

El plugin conecta Roblox Studio con la IA.

👉 [Guía de instalación del plugin](https://weppyai.com/en/install#plugin)

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

## Opcional: Instalar WEPPY Roblox Explorer (Extensión VSCode)

Explora los árboles de instancias sincronizados dentro de VSCode con iconos de clases Roblox.
Esta extension opcional requiere completar antes la instalacion de Roblox MCP, porque Explorer lee los datos de Sync desde `weppy-project-sync` dentro de la raiz del proyecto.

👉 [Guía de instalación de WEPPY Roblox Explorer](https://weppyai.com/en/install#explorer)

Instalación directa:
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

---

## Después de la Instalación

Prueba con un comando simple:

```
Crea una parte azul en Roblox Studio
```

Si funciona, ¡estás listo para empezar!
