# Configuracao do Antigravity

Como usar o Roblox MCP no [Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/).

> **Antigravity** e a plataforma de desenvolvimento baseada em agentes do Google, onde agentes de IA realizam tarefas complexas de forma autonoma atraves de edicao de codigo, terminal e navegador.

## Pre-requisitos

1. **Antigravity** instalado (suporta macOS, Windows, Linux)
2. **Plugin do Roblox Studio** instalado

## Registrar o Servidor MCP

### Metodo 1: Instalar pela MCP Store (Recomendado)

1. Inicie o Antigravity
2. Va para **Settings** → **MCP**
3. Pesquise por `weppy-roblox-mcp` na MCP Store
4. Clique em **Install**

### Metodo 2: Editar Arquivo de Configuracao Diretamente

1. No Antigravity, clique no menu **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config**

2. Adicione o seguinte conteudo ao arquivo `mcp_config.json`:

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

3. Apos salvar, clique em **Refresh** em **Manage MCP Servers**

**Localizacao do arquivo de configuracao:**

| SO | Caminho |
|----|---------|
| macOS/Linux | `~/.gemini/antigravity/mcp_config.json` |
| Windows | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |

### Metodo 3: Solicitar ao Agente

Voce tambem pode solicitar diretamente ao Agente do Antigravity:

```
Adicione o Roblox MCP (@weppy/roblox-mcp) como servidor MCP
```

## Importante: Use Caminhos Absolutos

> **Atencao**: O Antigravity nao suporta a variavel `${workspaceFolder}`. Voce deve usar **caminhos absolutos**.

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

## Teste de Conexao

1. Inicie o **Roblox Studio** → Aba Plugins → **W-MCP** → **Connect**
2. Digite no **Antigravity**:
   ```
   Diga-me o que esta selecionado atualmente no Roblox Studio
   ```

## Utilizando Skills

Ao usar com o sistema de **Skills** do Antigravity, voce pode criar fluxos de trabalho mais poderosos:

- Defina fluxos de trabalho de desenvolvimento Roblox por projeto
- Empacote tarefas frequentes como Skills
- O agente planeja, executa e verifica tarefas automaticamente

## Modelos Suportados

Ao usar o Roblox MCP no Antigravity, voce pode escolher os seguintes modelos:

| Modelo | Caracteristicas |
|--------|-----------------|
| **Gemini 3 Pro** | Modelo padrao, uso gratuito disponivel |
| **Claude Sonnet 4.5** | Suporte a modelo Anthropic |
| **GPT-OSS** | Suporte a modelo OpenAI |

## Solucao de Problemas

### O servidor nao inicia

Execute o servidor MCP diretamente para verificar erros:
```bash
npx -y @weppy/roblox-mcp
```

### Falha na conexao

- Verifique se o plugin do Roblox Studio esta no estado **Connected**
- Verifique se a porta 3002 nao esta bloqueada pelo firewall
- Verifique o status do servidor em Settings → MCP

### Erro de caminho absoluto

Erros ocorrem ao usar `${workspaceFolder}`. Altere para caminho absoluto:

```json
// ❌ Incorreto
"args": ["--workspace", "${workspaceFolder}"]

// ✅ Correto
"args": ["--workspace", "/absolute/path/to/project"]
```

## Referencias

- [Guia de Introducao ao Antigravity](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Guia de Integracao MCP do Antigravity](https://composio.dev/blog/howto-mcp-antigravity)
- [Colecao de Skills do Antigravity](https://github.com/sickn33/antigravity-awesome-skills)
