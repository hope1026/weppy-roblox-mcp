# Guía de Instalación

Para usar Roblox MCP, necesitas instalar **dos cosas**.

```
App de IA (Claude, Codex, Gemini, etc.)
         │
    Servidor MCP ← Convierte los comandos de IA a un formato que Roblox entiende
         │
Plugin de Roblox Studio ← Ejecuta los comandos dentro de Studio
```

Cuando una app de IA dice "Crea una parte azul", el servidor MCP convierte esta solicitud, y el plugin de Roblox Studio crea la parte.

---

## Paso 1: Instalar el Plugin de Roblox Studio

Descarga el archivo del plugin desde GitHub, luego colócalo en la carpeta de Plugins de Roblox Studio.

👉 [Guía de instalación del plugin](roblox-plugin.md)

---

## Paso 2: Registrar el Servidor MCP en tu App de IA

Registra el servidor MCP en tu app de IA. Puedes usarlo con cualquier app de IA que soporte MCP.

| App de IA | Cómo configurar |
|-----------|----------------|
| **Claude Code** | [Instrucciones](ai-apps/claude-code.md) |
| **Claude Desktop** | [Instrucciones](ai-apps/claude-app.md) |
| **Codex CLI** | [Instrucciones](ai-apps/codex-cli.md) |
| **Codex Desktop** | [Instrucciones](ai-apps/codex-app.md) |
| **Gemini CLI** | [Instrucciones](ai-apps/gemini-cli.md) |
| **Antigravity** | [Instrucciones](ai-apps/antigravity.md) |

> Las aplicaciones de IA que no están en la lista también funcionan si soportan MCP. Descarga la última versión desde [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest) y usa el binario Go incluido como comando del servidor MCP.

---

## Después de la Instalación

1. Abre **Roblox Studio**, ve a la pestaña Plugins y haz clic en **W-MCP** → **Connect**
2. Prueba en tu **app de IA** con:

```
Crea una parte azul en Roblox Studio
```

Si la parte se crea exitosamente, ¡la instalación está completa!
