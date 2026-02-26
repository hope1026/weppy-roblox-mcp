# Configuracion de Codex CLI

Como usar Roblox MCP en [OpenAI Codex CLI](https://github.com/openai/codex) (herramienta de codificacion IA basada en terminal).

## Requisitos Previos

- **Plugin de Roblox Studio** instalado

## Instalacion

```bash
npm install -g @openai/codex
```

## Registrar el Servidor MCP

### Metodo 1: Comando CLI (Recomendado)

```bash
codex mcp add weppy-roblox-mcp -- <path-to>/weppy-roblox-mcp-<os>-<arch>
```

> Descarga el binario desde [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest).
> `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64

### Metodo 2: Editar archivo de configuracion directamente

Agrega el siguiente contenido al archivo `~/.codex/config.toml`:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "<path-to>/weppy-roblox-mcp-<os>-<arch>"
```

**Ubicacion del archivo de configuracion:**

| SO | Ruta |
|----|------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **W-MCP** → **Connect**
2. Ejecuta **Codex CLI** e ingresa:
   ```
   Dime que esta seleccionado actualmente en Roblox Studio
   ```

## Solucion de Problemas

### El servidor no inicia

Ejecuta el servidor MCP directamente para ver los errores:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Fallo de conexion

- Verifica que el plugin de Roblox Studio este en estado **Connected**
- Verifica que el puerto 3002 no este bloqueado por el firewall

## Recursos

- [Codex CLI GitHub](https://github.com/openai/codex)
- [Documentacion oficial de Codex MCP](https://developers.openai.com/codex/mcp/)
- [Referencia de configuracion de Codex](https://developers.openai.com/codex/config-reference/)
