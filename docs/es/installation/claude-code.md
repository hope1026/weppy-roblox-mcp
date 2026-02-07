# Configuracion de Claude Code

Como usar Roblox MCP en [Claude Code](https://claude.ai/code) (herramienta de codificacion IA basada en terminal).

## Requisitos Previos

- **Claude Code** instalado
- **Plugin de Roblox Studio** instalado

## Instalacion

```bash
npm install -g @anthropic-ai/claude-code
```

## Registrar el Servidor MCP

### Metodo 1: Instalar desde el Marketplace (Recomendado)

Ejecuta en la terminal de Claude Code:

```bash
# Agregar marketplace
/plugin marketplace add hope1026/roblox-mcp

# Instalar plugin
/plugin install @weppy/roblox-mcp
```

Verificar instalacion:
```bash
/plugin list
```

### Metodo 2: Editar archivo de configuracion directamente

Crea el archivo `.mcp.json`:

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
| Proyecto | `<proyecto>/.mcp.json` |
| Global | `~/.claude/mcp.json` |

## Gestion Automatica del Servidor

Claude Code gestiona el servidor MCP automaticamente:

- Inicia automaticamente cuando es necesario
- Se detiene automaticamente al terminar la sesion
- No requiere configuracion adicional

## Probar la Conexion

1. Abre **Roblox Studio** → Pestana Plugins → **W-MCP** → **Connect**
2. Prueba en **Claude Code**:
   ```
   Crea una parte azul en Roblox Studio
   ```

## Solucion de Problemas

### Fallo en la instalacion del plugin

```bash
# Limpiar cache y reintentar
/plugin cache clear
/plugin install @weppy/roblox-mcp
```

### El servidor no inicia

1. Verifica la version de Node.js (requiere 18.0 o superior):
   ```bash
   node --version
   ```

2. Prueba iniciar el servidor manualmente:
   ```bash
   npx -y @weppy/roblox-mcp
   ```

### Las herramientas MCP no aparecen

Verifica en Claude Code:
```
Muestrame la lista de herramientas MCP disponibles
```

## Recursos

- [Documentacion oficial de Claude Code](https://docs.anthropic.com/claude-code)
