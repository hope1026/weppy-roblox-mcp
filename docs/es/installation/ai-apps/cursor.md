# Configuración de Cursor

Cómo usar Roblox MCP con [Cursor](https://cursor.com/).

## Requisitos previos

- **Cursor** instalado
- **Node.js** (v18.0.0 o superior)
- **Plugin de Roblox Studio** instalado

## Registrar el servidor MCP

### Método 1: Configuración del proyecto

Agrega lo siguiente a `.cursor/mcp.json` dentro de tu proyecto:

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

### Método 2: Configuración global

Agrega el mismo contenido al archivo de configuración global de Cursor.

**Ubicaciones del archivo de configuración:**

| Alcance | Ruta |
|---------|------|
| Proyecto | `<proyecto>/.cursor/mcp.json` |
| Global (macOS/Linux) | `~/.cursor/mcp.json` |
| Global (Windows) | `%USERPROFILE%\\.cursor\\mcp.json` |

> Si el archivo ya existe, fusiona la entrada `weppy-roblox-mcp` dentro del objeto `mcpServers`.

### Aplicar cambios

Después de editar la configuración, recarga la ventana de Cursor o reinicia la aplicación.

## Prueba de conexión

1. Abre **Roblox Studio** → pestaña Plugins → **WROX** → **Connect**
2. En **Cursor**, escribe:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Solución de problemas

### El servidor MCP no aparece

- Verifica que la ruta del archivo de configuración sea correcta
- Comprueba que la sintaxis JSON sea válida
- Recarga Cursor después de editar la configuración

### El servidor no inicia

Ejecuta el servidor MCP directamente para revisar errores:

```bash
npx -y @weppy/roblox-mcp
```

### La conexión falla

- Verifica que el plugin de Roblox Studio esté en estado **Connected**
- Revisa si el puerto 3002 está bloqueado por el firewall

## Referencia

- [Documentación de Cursor MCP](https://docs.cursor.com/context/model-context-protocol)
