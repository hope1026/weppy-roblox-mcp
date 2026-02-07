# Configuracion de Gemini CLI

Como usar Roblox MCP en [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Requisitos Previos

1. **Node.js** (v18.0.0 o superior)
   ```bash
   node --version
   ```

2. **Gemini CLI** instalado
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Plugin de Roblox Studio** instalado

## Registrar el Servidor MCP

### Metodo 1: Editar archivo de configuracion (Recomendado)

Agrega el siguiente contenido al archivo `.gemini/settings.json`:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"]
    }
  }
}
```

**Ubicacion del archivo de configuracion:**
| Alcance | Ruta |
|---------|------|
| Proyecto | `<proyecto>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Metodo 2: Usar variables de entorno

Si necesitas variables de entorno especificas:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **W-MCP** → **Connect**
2. Ejecuta **Gemini CLI** e ingresa:
   ```
   Dime que esta seleccionado actualmente en Roblox Studio
   ```

## Verificar Estado del Servidor MCP

Puedes verificar el estado de los servidores conectados con el comando `/mcp` dentro de Gemini CLI:

```
/mcp
```

## Configuracion Avanzada

### Filtrado de herramientas

Puedes usar o excluir herramientas especificas:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "excludeTools": ["execute_script"],
      "includeTools": ["get_selection", "create_instance", "set_property"]
    }
  }
}
```

> `excludeTools` tiene prioridad sobre `includeTools`.

### Modo debug

Para depurar problemas de conexion:

```bash
gemini --debug
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
- Verifica el estado del servidor con el comando `/mcp`

### Conflicto de herramientas

Si varias servidores MCP tienen herramientas con el mismo nombre, se les agregara un prefijo en formato `serverAlias__toolName`.

## Recursos

- [Documentacion oficial de Gemini CLI MCP](https://geminicli.com/docs/tools/mcp-server/)
- [Guia de configuracion de Gemini CLI](https://geminicli.com/docs/get-started/configuration/)
