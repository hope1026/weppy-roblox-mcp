# Configuracion de Codex CLI

Como usar Roblox MCP en [OpenAI Codex CLI](https://github.com/openai/codex) (herramienta de codificacion IA basada en terminal).

## Requisitos Previos

- **Node.js** (v18.0.0 o superior)
- **Plugin de Roblox Studio** instalado

## Instalacion

```bash
npm install -g @openai/codex
```

## Registrar el Servidor MCP

### Metodo 1: Comando CLI (Recomendado)

```bash
codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp
```

### Metodo 2: Editar archivo de configuracion directamente

Agrega el siguiente contenido al archivo `~/.codex/config.toml`:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "npx"
args = ["-y", "@weppy/roblox-mcp"]
```

**Ubicacion del archivo de configuracion:**

| SO | Ruta |
|----|------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **WEPPY** → **Connect**
2. Ejecuta **Codex CLI** e ingresa:
   ```
   Dime que esta seleccionado actualmente en Roblox Studio
   ```

## Solucion de Problemas

### El servidor no inicia

Ejecuta el servidor MCP directamente para ver los errores:
```bash
npx -y @weppy/roblox-mcp
```

### Fallo de conexion

- Verifica que el plugin de Roblox Studio este en estado **Connected**
- Verifica que el puerto 3002 no este bloqueado por el firewall

## Recursos

- [Codex CLI GitHub](https://github.com/openai/codex)
- [Documentacion oficial de Codex MCP](https://developers.openai.com/codex/mcp/)
- [Referencia de configuracion de Codex](https://developers.openai.com/codex/config-reference/)
