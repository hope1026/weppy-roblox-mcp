# Configuração do Cursor

Como usar o Roblox MCP com [Cursor](https://cursor.com/).

## Pré-requisitos

- **Cursor** instalado
- **Node.js** (v18.0.0 ou superior)
- **Plugin do Roblox Studio** instalado

## Registrar o servidor MCP

### Método 1: Configuração do projeto

Adicione o seguinte em `.cursor/mcp.json` dentro do seu projeto:

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

### Método 2: Configuração global

Adicione o mesmo conteúdo ao arquivo global de configuração do Cursor.

**Locais do arquivo de configuração:**

| Escopo | Caminho |
|--------|---------|
| Projeto | `<projeto>/.cursor/mcp.json` |
| Global (macOS/Linux) | `~/.cursor/mcp.json` |
| Global (Windows) | `%USERPROFILE%\\.cursor\\mcp.json` |

> Se o arquivo já existir, mescle a entrada `weppy-roblox-mcp` dentro do objeto `mcpServers`.

### Aplicar alterações

Depois de editar a configuração, recarregue a janela do Cursor ou reinicie o aplicativo.

## Teste de conexão

1. Abra o **Roblox Studio** → aba Plugins → **WROX** → **Connect**
2. No **Cursor**, digite:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## Solução de problemas

### O servidor MCP não aparece

- Verifique se o caminho do arquivo de configuração está correto
- Confirme que a sintaxe JSON está válida
- Recarregue o Cursor após editar a configuração

### O servidor não inicia

Execute o servidor MCP diretamente para verificar erros:

```bash
npx -y @weppy/roblox-mcp
```

### Falha na conexão

- Verifique se o plugin do Roblox Studio está no estado **Connected**
- Confira se a porta 3002 está bloqueada pelo firewall

## Referência

- [Documentação do Cursor MCP](https://docs.cursor.com/context/model-context-protocol)
