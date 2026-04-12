# Configuracao do Codex CLI

Como usar o Roblox MCP no [OpenAI Codex CLI](https://github.com/openai/codex) (ferramenta de codificacao com IA baseada em terminal).

## Pre-requisitos

- **Node.js** (v18.0.0 ou superior)
- **Plugin do Roblox Studio** instalado

## Instalacao

```bash
npm install -g @openai/codex
```

## Registrar o Servidor MCP

### Metodo 1: Comando CLI (Recomendado)

```bash
codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp
```

### Metodo 2: Editar Arquivo de Configuracao Diretamente

Adicione o seguinte conteudo ao arquivo `~/.codex/config.toml`:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "npx"
args = ["-y", "@weppy/roblox-mcp"]
```

**Localizacao do arquivo de configuracao:**

| SO | Caminho |
|----|---------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## Teste de Conexao

1. Inicie o **Roblox Studio** → Aba Plugins → **WEPPY** → **Connect**
2. Inicie o **Codex CLI** e digite:
   ```
   Diga-me o que esta selecionado atualmente no Roblox Studio
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

## Referencias

- [GitHub do Codex CLI](https://github.com/openai/codex)
- [Documentacao Oficial de MCP do Codex](https://developers.openai.com/codex/mcp/)
- [Referencia de Configuracao do Codex](https://developers.openai.com/codex/config-reference/)
