# Configuracao do Claude Code

Como usar o Roblox MCP no [Claude Code](https://claude.ai/code) (ferramenta de codificacao com IA baseada em terminal).

## Pre-requisitos

- **Claude Code** instalado
- **Plugin do Roblox Studio** instalado

## Instalacao

```bash
npm install -g @anthropic-ai/claude-code
```

## Registrar o Servidor MCP

### Metodo 1: Instalar pelo Marketplace (Recomendado)

Execute no terminal do Claude Code:

```bash
# Adicionar marketplace
/plugin marketplace add hope1026/roblox-mcp

# Instalar plugin
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

Verificar instalacao:
```bash
/plugin list
```

### Metodo 2: Editar Arquivo de Configuracao Diretamente

Crie o arquivo `.mcp.json`:

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
| Projeto | `<projeto>/.mcp.json` |
| Global | `~/.claude/mcp.json` |

## Gerenciamento Automatico do Servidor

O Claude Code gerencia o servidor MCP automaticamente:

- Inicia automaticamente quando necessario
- Para automaticamente ao encerrar a sessao
- Nenhuma configuracao adicional necessaria

## Teste de Conexao

1. Inicie o **Roblox Studio** → Aba Plugins → **W-MCP** → **Connect**
2. Teste no **Claude Code**:
   ```
   Crie uma parte azul no Roblox Studio
   ```

## Solucao de Problemas

### Falha na instalacao do plugin

```bash
# Limpe o cache e tente novamente
/plugin cache clear
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

### O servidor nao inicia

1. Verifique a versao do Node.js (requer 18.0 ou superior):
   ```bash
   node --version
   ```

2. Teste iniciando o servidor manualmente:
   ```bash
   npx -y @weppy/roblox-mcp
   ```

### Ferramentas MCP nao aparecem

Verifique no Claude Code:
```
Mostre a lista de ferramentas MCP disponiveis
```

## Referencias

- [Documentacao Oficial do Claude Code](https://docs.anthropic.com/claude-code)
