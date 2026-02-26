# Configuración de Gemini CLI

Cómo usar Roblox MCP con [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Requisitos previos

1. **Gemini CLI** instalado
   ```bash
   npm install -g @google/gemini-cli
   ```

2. **Plugin de Roblox Studio** instalado

## Registrar el servidor MCP

### Método 1: Comando CLI (Recomendado)

Puede registrarse con un solo comando en su terminal:

```bash
gemini mcp add weppy-roblox-mcp <path-to>/weppy-roblox-mcp-<os>-<arch> --trust
```

> La bandera `--trust` omite las solicitudes de confirmación para cada llamada de herramienta.
>
> Descarga el binario desde [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest). `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64

Para registrar globalmente, agregue `-s user`:

```bash
gemini mcp add weppy-roblox-mcp <path-to>/weppy-roblox-mcp-<os>-<arch> -s user --trust
```

### Método 2: Editar archivo de configuración

Agregue el siguiente contenido al archivo `.gemini/settings.json`:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

**Ubicaciones del archivo de configuración:**
| Ámbito | Ruta |
|--------|------|
| Proyecto | `<proyecto>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Método 3: Uso de variables de entorno

Si se necesitan variables de entorno específicas:

**CLI:**
```bash
gemini mcp add weppy-roblox-mcp <path-to>/weppy-roblox-mcp-<os>-<arch> --trust -e MCP_PORT=3002
```

**Archivo de configuración:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>",
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## Prueba de conexión

1. Abra **Roblox Studio** → pestaña Plugins → **W-MCP** → **Connect**
2. Ejecute **Gemini CLI** e ingrese:
   ```
   Dime qué está seleccionado actualmente en Roblox Studio
   ```

## Verificar el estado del servidor MCP

Puede verificar el estado de los servidores conectados con el comando `/mcp` en Gemini CLI:

```
/mcp
```

## Solución de problemas

### El servidor no se inicia

Ejecute el servidor MCP directamente para verificar errores:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Conexión fallida

- Verifique que el plugin de Roblox Studio esté en estado **Connected**
- Verifique si el puerto 3002 está bloqueado por un firewall
- Verifique el estado del servidor con el comando `/mcp`

### Conflictos de herramientas

Si varios servidores MCP tienen herramientas con el mismo nombre, se les agregará el prefijo con el formato `serverAlias__toolName`.

## Referencias

- [Documentación oficial de Gemini CLI MCP](https://geminicli.com/docs/tools/mcp-server/)
- [Guía de configuración de Gemini CLI](https://geminicli.com/docs/get-started/configuration/)
