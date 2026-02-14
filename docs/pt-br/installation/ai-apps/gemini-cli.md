# Configuração do Gemini CLI

Como usar o Roblox MCP com [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Pré-requisitos

1. **Node.js** (v18.0.0 ou superior)
   ```bash
   node --version
   ```

2. **Gemini CLI** instalado
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Plugin do Roblox Studio** instalado

## Registrar servidor MCP

### Método 1: Comando CLI (Recomendado)

Registre com um único comando no terminal:

```bash
gemini mcp add weppy-roblox-mcp npx --trust -- -y @weppy/roblox-mcp
```

> A flag `--trust` ignora as solicitações de confirmação para cada chamada de ferramenta.

Para registrar globalmente, adicione `-s user`:

```bash
gemini mcp add weppy-roblox-mcp npx -s user --trust -- -y @weppy/roblox-mcp
```

### Método 2: Editar arquivo de configuração

Adicione o seguinte conteúdo ao arquivo `.gemini/settings.json`:

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

**Localizações do arquivo de configuração:**
| Escopo | Caminho |
|--------|---------|
| Projeto | `<projeto>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Método 3: Usando variáveis de ambiente

Se variáveis de ambiente específicas forem necessárias:

**CLI:**
```bash
gemini mcp add weppy-roblox-mcp npx --trust -e MCP_PORT=3002 -- -y @weppy/roblox-mcp
```

**Arquivo de configuração:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## Teste de conexão

1. Abra o **Roblox Studio** → aba Plugins → **W-MCP** → **Connect**
2. Execute o **Gemini CLI** e digite:
   ```
   Me diga o que está selecionado atualmente no Roblox Studio
   ```

## Verificar status do servidor MCP

Você pode verificar o status dos servidores conectados com o comando `/mcp` no Gemini CLI:

```
/mcp
```

## Solução de problemas

### Servidor não inicia

Execute o servidor MCP diretamente para verificar erros:
```bash
npx -y @weppy/roblox-mcp
```

### Falha na conexão

- Verifique se o plugin do Roblox Studio está no estado **Connected**
- Verifique se a porta 3002 está bloqueada por um firewall
- Verifique o status do servidor com o comando `/mcp`

### Conflitos de ferramentas

Se vários servidores MCP tiverem ferramentas com o mesmo nome, elas receberão o prefixo no formato `serverAlias__toolName`.

## Referências

- [Documentação oficial do Gemini CLI MCP](https://geminicli.com/docs/tools/mcp-server/)
- [Guia de configuração do Gemini CLI](https://geminicli.com/docs/get-started/configuration/)
