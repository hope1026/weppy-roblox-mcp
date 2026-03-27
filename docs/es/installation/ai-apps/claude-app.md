# Configuracion de Claude Desktop App

Como usar Roblox MCP en [Claude Desktop App](https://claude.ai/download).

## Requisitos Previos

- **Claude Desktop App** instalado
- **Node.js** (v18.0.0 o superior)
- **Plugin de Roblox Studio** instalado

## Registrar el Servidor MCP

### Metodo 1: Desktop Extensions (Recomendado)

> Desde 2026, instalacion con un clic como las extensiones del navegador

1. Claude Desktop → **Settings** → **Extensions**
2. Busca `weppy-roblox-mcp`
3. Clic en **Install**

### Metodo 2: Editar archivo de configuracion directamente

1. Claude Desktop → **Settings** → **Developers** → Clic en **Edit Config**

2. Agrega el siguiente contenido al archivo `claude_desktop_config.json`:

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

3. **Cierra completamente** Claude Desktop y reinicia

**Ubicacion del archivo de configuracion:**

| SO | Ruta |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **WROX** → **Connect**
2. Inicia una nueva conversacion en **Claude Desktop** y prueba:
   ```
   Crea una parte azul en Roblox Studio
   ```

## Solucion de Problemas

### El servidor MCP no carga

1. **Verifica la sintaxis JSON**: Valida el archivo de configuracion con un validador JSON en linea
2. **Reinicia completamente Claude Desktop**: Despues de cambiar la configuracion, asegurate de cerrar completamente la aplicacion y reiniciar
3. **Verifica las rutas**: Asegurate de que command y args sean correctos

### El servidor no inicia

Ejecuta el servidor MCP directamente para ver los errores:
```bash
npx -y @weppy/roblox-mcp
```

### Fallo de conexion

- Verifica que el plugin de Roblox Studio este en estado **Connected**
- Verifica que el puerto 3002 no este bloqueado por el firewall

## Recursos

- [Guia oficial de MCP para Claude Desktop](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [Guia de conexion de servidores MCP](https://modelcontextprotocol.io/docs/develop/connect-local-servers)
