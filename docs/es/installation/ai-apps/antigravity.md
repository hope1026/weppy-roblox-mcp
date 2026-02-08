# Configuracion de Antigravity

Como usar Roblox MCP en [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** es la plataforma de desarrollo basada en agentes de Google, donde los agentes de IA realizan tareas complejas de forma autonoma navegando entre el editor de codigo, la terminal y el navegador.

## Requisitos Previos

1. **Antigravity** instalado (compatible con macOS, Windows, Linux)
2. **Plugin de Roblox Studio** instalado

## Registrar el Servidor MCP

### Metodo 1: Instalar desde MCP Store (Recomendado)

1. Abre Antigravity
2. Ve a **Settings** → **MCP**
3. Busca `weppy-roblox-mcp` en MCP Store
4. Clic en **Install**

### Metodo 2: Editar archivo de configuracion directamente

1. En Antigravity, clic en menu **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

2. Agrega el siguiente contenido al archivo `mcp_config.json`:

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

3. Guarda y clic en **Refresh** en **Manage MCP Servers**

**Ubicacion del archivo de configuracion:**

| SO | Ruta |
|----|------|
| macOS/Linux | `~/.gemini/antigravity/mcp_config.json` |
| Windows | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |

### Metodo 3: Pedir al Agente

Tambien puedes pedirlo directamente al Agente de Antigravity:

```
Agrega Roblox MCP (@weppy/roblox-mcp) como servidor MCP
```

## Importante: Usar Rutas Absolutas

> **Atencion**: Antigravity no soporta la variable `${workspaceFolder}`. Asegurate de usar **rutas absolutas**.

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "PROJECT_ROOT": "/Users/username/projects/my-roblox-game"
      }
    }
  }
}
```

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **W-MCP** → **Connect**
2. Ingresa en **Antigravity**:
   ```
   Dime que esta seleccionado actualmente en Roblox Studio
   ```

## Uso de Skills

Combinado con el sistema de **Skills** de Antigravity, puedes configurar flujos de trabajo mas potentes:

- Define flujos de trabajo de desarrollo Roblox por proyecto
- Empaqueta tareas frecuentes como Skills
- El agente planifica, ejecuta y verifica tareas automaticamente

## Modelos Soportados

Puedes elegir los siguientes modelos al usar Roblox MCP en Antigravity:

| Modelo | Caracteristicas |
|--------|-----------------|
| **Gemini 3 Pro** | Modelo predeterminado, uso gratuito |
| **Claude Sonnet 4.5** | Soporte para modelos de Anthropic |
| **GPT-OSS** | Soporte para modelos de OpenAI |

## Solucion de Problemas

### El servidor no inicia

Ejecuta el servidor MCP directamente para ver los errores:
```bash
npx -y @weppy/roblox-mcp
```

### Fallo de conexion

- Verifica que el plugin de Roblox Studio este en estado **Connected**
- Verifica que el puerto 3002 no este bloqueado por el firewall
- Verifica el estado del servidor en Settings → MCP

### Error de ruta absoluta

Al usar `${workspaceFolder}` se produce un error. Cambia a una ruta absoluta:

```json
// ❌ Incorrecto
"args": ["--workspace", "${workspaceFolder}"]

// ✅ Correcto
"args": ["--workspace", "/absolute/path/to/project"]
```

## Recursos

- [Guia de inicio de Antigravity](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Guia de integracion MCP de Antigravity](https://composio.dev/blog/howto-mcp-antigravity)
- [Coleccion de Skills de Antigravity](https://github.com/sickn33/antigravity-awesome-skills)
