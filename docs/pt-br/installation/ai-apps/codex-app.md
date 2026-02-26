# Configuracao do Codex App

Como usar o Roblox MCP no [OpenAI Codex App](https://openai.com/codex/) (macOS).

> **Lancado em 2 de fevereiro de 2026** - Aplicativo nativo para macOS que suporta fluxos de trabalho multi-agentes

## Pre-requisitos

- **Codex App** instalado (macOS)
- **Plugin do Roblox Studio** instalado

## Registrar o Servidor MCP

### Sincronizacao Automatica com Configuracao do Codex CLI

Se voce ja configurou o MCP no Codex CLI, pode usar **diretamente no aplicativo sem configuracao adicional**.

```
O historico de sessao e as configuracoes do CLI sao automaticamente sincronizados com o aplicativo.
```

### Para Nova Configuracao

Adicione em **Settings** → **MCP Servers** no aplicativo:

```
Server name: weppy-roblox-mcp
Command: npx -y @weppy/roblox-mcp
```

## Teste de Conexao

1. Inicie o **Roblox Studio** → Aba Plugins → **W-MCP** → **Connect**
2. Inicie uma nova conversa no **Codex App** e teste:
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

- [Introducao ao Codex App](https://openai.com/index/introducing-the-codex-app/)
- [Documentacao Oficial de MCP do Codex](https://developers.openai.com/codex/mcp/)
