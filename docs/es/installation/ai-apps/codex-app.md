# Configuracion de Codex App

Como usar Roblox MCP en [OpenAI Codex App](https://openai.com/codex/) (macOS).

> **Lanzado el 2 de febrero de 2026** - Aplicacion nativa para macOS que soporta flujos de trabajo multi-agente

## Requisitos Previos

- **Codex App** instalado (macOS)
- **Plugin de Roblox Studio** instalado

## Registrar el Servidor MCP

### Sincronizacion Automatica con Codex CLI

Si ya configuraste MCP en Codex CLI, puedes usarlo **directamente en la aplicacion sin configuracion adicional**.

```
El historial de sesiones y la configuracion del CLI se sincronizan automaticamente con la aplicacion.
```

### Si es una nueva configuracion

Agrega en **Settings** → **MCP Servers** dentro de la aplicacion:

```
Server name: weppy-roblox-mcp
Command: npx -y @weppy/roblox-mcp
```

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **W-MCP** → **Connect**
2. Inicia una nueva conversacion en **Codex App** y prueba:
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

- [Introduccion a Codex App](https://openai.com/index/introducing-the-codex-app/)
- [Documentacion oficial de Codex MCP](https://developers.openai.com/codex/mcp/)
