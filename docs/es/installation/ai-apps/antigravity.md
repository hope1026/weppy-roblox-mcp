# Configuración de Antigravity

Cómo usar Roblox MCP con [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** es la plataforma de desarrollo basada en agentes de Google, donde los agentes de IA se mueven entre la edición de código, la terminal y el navegador para realizar tareas complejas de forma autónoma.

## Requisitos previos

1. **Antigravity** instalado (consulta la documentación oficial para SO compatibles y requisitos)
2. **Node.js** (v18.0.0 o superior, `npx` disponible)
3. **Plugin de Roblox Studio** instalado

## Registrar servidor MCP

En Antigravity, los servidores MCP se administran en el **panel de agente (Agent pane)**.

### Registro manual mediante raw config (recomendado)

1. En el panel de agente, haz clic en **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

![Abrir menú de MCP Servers](../../../assets/screenshots/antigravity/antigravity_mcp_services_menu.png)

2. En la configuración (JSON) que se muestra, agrega/fusiona lo siguiente:

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

![Editar raw config](../../../assets/screenshots/antigravity/antigravity_mcp_raw.png)

3. Guarda y ejecuta **Refresh** (o reinicia/actualiza según lo indique la UI)

> La ruta/nombre real del archivo de configuración puede variar según el SO y la versión de Antigravity, así que edita siempre la ubicación indicada en **View raw config**.

### Opción: Ajustar puerto/logs con variables de entorno

Se recomienda mantener el valor predeterminado (HTTP `127.0.0.1:3002`). Si es necesario, puedes establecer variables de entorno así:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_HOST": "127.0.0.1",
        "HTTP_PORT": "3002",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## Prueba de conexión

1. Abre **Roblox Studio** → pestaña Plugins → **W-MCP** → **Connect**
2. En **Antigravity**, escribe:
   ```
   Dime qué está seleccionado actualmente en Roblox Studio
   ```

## Solución de problemas

### Cuando el servidor no inicia

Ejecuta el servidor MCP directamente para ver el error:
```bash
npx -y @weppy/roblox-mcp
```

### Falla de conexión

- Verifica que el plugin de Roblox Studio esté en estado **Connected**
- Verifica que el puerto **3002** no esté bloqueado por el firewall
- Revisa el estado del servidor en el panel de agente **⋯** → **MCP Servers**
- (Avanzado) Si cambiaste `HTTP_PORT`, el plugin/bridge de Roblox Studio también debe usar el mismo puerto.

## Referencias

- [Introducción a Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [Guía de inicio de Antigravity (Codelab)](https://codelabs.developers.google.com/getting-started-google-antigravity)
