# Configuracao do Gemini CLI

Como usar o Roblox MCP no [Google Gemini CLI](https://github.com/google-gemini/gemini-cli).

## Pre-requisitos

1. **Node.js** (v18.0.0 ou superior)
   ```bash
   node --version
   ```

2. **Gemini CLI** instalado
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Plugin do Roblox Studio** instalado

## Registrar o Servidor MCP

### Metodo 1: Editar Arquivo de Configuracao (Recomendado)

Adicione o seguinte conteudo ao arquivo `.gemini/settings.json`:

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

**Localizacao do arquivo de configuracao:**
| Escopo | Caminho |
|--------|---------|
| Projeto | `<projeto>/.gemini/settings.json` |
| Global | `~/.gemini/settings.json` |

### Metodo 2: Usar Variaveis de Ambiente

Se variaveis de ambiente especificas forem necessarias:

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

## Teste de Conexao

1. Inicie o **Roblox Studio** → Aba Plugins → **W-MCP** → **Connect**
2. Inicie o **Gemini CLI** e digite:
   ```
   Diga-me o que esta selecionado atualmente no Roblox Studio
   ```

## Verificar Status do Servidor MCP

Voce pode verificar o status do servidor conectado com o comando `/mcp` no Gemini CLI:

```
/mcp
```

## Configuracao Avancada

### Filtragem de Ferramentas

Voce pode usar ou excluir ferramentas especificas:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "excludeTools": ["execute_script"],
      "includeTools": ["get_selection", "create_instance", "set_property"]
    }
  }
}
```

> `excludeTools` tem prioridade sobre `includeTools`.

### Modo de Depuracao

Para depurar problemas de conexao:

```bash
gemini --debug
```

## Solucao de Problemas

### O servidor nao inicia

Execute o servidor MCP diretamente para verificar erros:
```bash
npx -y @weppy/roblox-mcp
```

### Falha na conexao

- Verifique se o plugin do Roblox Studio esta no estado **Connected**
- Verifique se a porta 3002 nao esta bloqueada pelo firewall
- Verifique o status do servidor com o comando `/mcp`

### Conflito de ferramentas

Se varios servidores MCP tiverem ferramentas com o mesmo nome, elas serao prefixadas no formato `serverAlias__toolName`.

## Referencias

- [Documentacao Oficial de MCP do Gemini CLI](https://geminicli.com/docs/tools/mcp-server/)
- [Guia de Configuracao do Gemini CLI](https://geminicli.com/docs/get-started/configuration/)
