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

### Metodo 2: Baixar Binario e Configurar Manualmente

1. Baixe a versao mais recente em [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Extraia o ZIP e anote o caminho do binario Go para sua plataforma
3. Crie o arquivo `.mcp.json`:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64
> No Windows, o nome do arquivo termina com `.exe`

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

Teste iniciando o binario do servidor manualmente:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### Ferramentas MCP nao aparecem

Verifique no Claude Code:
```
Mostre a lista de ferramentas MCP disponiveis
```

## Referencias

- [Documentacao Oficial do Claude Code](https://docs.anthropic.com/claude-code)
