# Instalacion del Plugin de Roblox

Instrucciones para instalar el plugin que conecta Roblox Studio con agentes de IA.

## 1. Descargar el Plugin

1. Abre [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Descarga `weppy-roblox-mcp-v{version}.zip`
3. Extrae el ZIP - encontraras `roblox-plugin/WeppyRobloxMCP.rbxm` y guias de instalacion

Nota:
- Basic usa el mismo paquete del plugin con politica Basic (Studio -> Local, una via)
- Con licencia Pro por suscripcion se habilita sync bidireccional y funciones avanzadas mas amplias

## 2. Instalar el Plugin

1. Abre **Roblox Studio**
2. Clic en la pestana **Plugins**
3. Clic en **Plugins Folder**

![Abrir Plugins Folder](../../assets/screenshots/plugins_menu.png)

4. **Copia** `WeppyRobloxMCP.rbxm` a la carpeta abierta de Plugins
5. **Reinicia Roblox Studio**

## 3. Verificar la Instalacion

Despues de reiniciar, aparecera el boton **W-MCP** en Plugins.

![Boton W-MCP](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. Conectar con el Agente de IA

### Requisitos Previos

El servidor MCP debe estar instalado. Completa primero la guia de tu app de IA:

| Aplicacion IA | Guia de instalacion |
|---------------|---------------------|
| Claude Code | [Como configurar](ai-apps/claude-code.md) |
| Claude Desktop | [Como configurar](ai-apps/claude-app.md) |
| Codex CLI | [Como configurar](ai-apps/codex-cli.md) |
| Codex Desktop | [Como configurar](ai-apps/codex-app.md) |
| Gemini CLI | [Como configurar](ai-apps/gemini-cli.md) |
| Antigravity | [Como configurar](ai-apps/antigravity.md) |

### Conectar

1. Abre cualquier proyecto en **Roblox Studio**
2. Pestaña **Plugins** -> **W-MCP**
3. Clic en **Connect**
4. Cuando veas **"Connected"**, listo

![Pantalla principal del plugin](../../assets/screenshots/plugin_main.png)

## 5. Configuracion (Opcional)

Usa el boton de configuracion en la esquina superior derecha.

![Pantalla de configuracion](../../assets/screenshots/settings.png)

- **Conexion automatica**
- **Reconexion automatica**
- **Enfoque automatico de camara**
- **Idioma**

## Solucion de Problemas

### El plugin no aparece

- Reinicia Roblox Studio por completo
- Verifica que el archivo fue copiado correctamente
- Verifica que `.rbxm` no este dañado

### No se puede conectar

- Verifica que el servidor MCP esta en ejecucion
- Pulsa **Connect** otra vez
- Verifica conflicto en el puerto 3002

### La conexion se corta seguido

- Activa **Reconexion automatica**
- Reinicia tu app de IA
