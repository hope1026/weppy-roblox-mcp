# Instalacion del Plugin de Roblox

Instrucciones para instalar el plugin que conecta Roblox Studio con agentes de IA.

## 1. Descargar el Plugin

1. Descarga `weppy-roblox-mcp-basic.zip` desde [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Extrae el archivo ZIP — encontraras el archivo `roblox-plugin/WeppyRobloxMCP.rbxm` y guias de instalacion

## 2. Instalar el Plugin

1. Abre **Roblox Studio**
2. Clic en la pestana **Plugins** en el menu superior
3. Clic en el boton **Plugins Folder**

![Abrir Plugins Folder](../../assets/screenshots/plugins_menu.png)

4. **Copia** el archivo `WeppyRobloxMCP.rbxm` de la carpeta extraida a la carpeta de Plugins abierta
5. **Reinicia Roblox Studio**

## 3. Verificar la Instalacion

Despues de reiniciar, aparecera el boton **W-MCP** en la pestana Plugins.

![Boton W-MCP](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. Conectar con el Agente de IA

### Requisitos Previos

El servidor MCP debe estar instalado. Completa primero la guia correspondiente a tu aplicacion de IA:

| Aplicacion IA | Guia de instalacion |
|---------------|---------------------|
| Claude Code | [Como configurar](claude-code.md) |
| Claude Desktop | [Como configurar](claude-app.md) |
| Codex CLI | [Como configurar](codex-cli.md) |
| Codex Desktop | [Como configurar](codex-app.md) |
| Gemini CLI | [Como configurar](gemini-cli.md) |
| Cursor, Windsurf, etc. | [Como configurar](antigravity.md) |

### Conectar

1. Abre cualquier proyecto en **Roblox Studio**
2. Pestana **Plugins** superior → Clic en **W-MCP**
3. Clic en el boton **Connect** en la ventana del plugin

![Guia de conexion](../../assets/screenshots/connection_guide.png)

4. ¡Conexion completada cuando aparece el estado **"Connected"**!

![Pantalla principal del plugin](../../assets/screenshots/plugin_main.png)

## 5. Configuracion (Opcional)

Haz clic en el boton de configuracion en la esquina superior derecha del plugin para cambiar varias opciones.

![Pantalla de configuracion](../../assets/screenshots/settings.png)

- **Conexion automatica**: Conecta automaticamente al servidor MCP al iniciar Studio
- **Reconexion automatica**: Intenta reconectar automaticamente si se pierde la conexion
- **Enfoque automatico de camara**: Mueve la camara automaticamente hacia los objetos creados
- **Idioma**: Cambia el idioma de la interfaz del plugin

## Solucion de Problemas

### El plugin no aparece

- Cierra completamente Roblox Studio y reinicia
- Verifica que el archivo se haya copiado correctamente a la carpeta Plugins
- Verifica que el archivo `.rbxm` no este danado

### No se puede conectar

- Verifica que el servidor MCP este ejecutandose en la aplicacion de IA
- Haz clic nuevamente en el boton **Connect** en el plugin
- Verifica que el puerto 3002 no este siendo usado por otro programa

### La conexion se pierde frecuentemente

- Activa la opcion **Reconexion automatica** en la configuracion
- Intenta reiniciar la aplicacion de IA
