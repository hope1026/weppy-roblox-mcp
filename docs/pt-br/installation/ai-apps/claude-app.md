# Configuracao do Claude Desktop App

Como usar o Roblox MCP no [Claude Desktop App](https://claude.ai/download).

## Pre-requisitos

- **Claude Desktop App** instalado
- **Node.js** (v18.0.0 ou superior)
- **Plugin do Roblox Studio** instalado

## Registrar o Servidor MCP

### Metodo 1: Desktop Extensions (Recomendado)

> A partir de 2026, instalacao com um clique disponivel como extensoes de navegador

1. Claude Desktop → **Settings** → **Extensions**
2. Pesquise por `weppy-roblox-mcp`
3. Clique em **Install**

### Metodo 2: Editar Arquivo de Configuracao Diretamente

1. Claude Desktop → **Settings** → **Developers** → Clique em **Edit Config**

2. Adicione o seguinte conteudo ao arquivo `claude_desktop_config.json`:

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

3. **Feche completamente** o Claude Desktop e reinicie

**Localizacao do arquivo de configuracao:**

| SO | Caminho |
|----|---------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## Teste de Conexao

1. Inicie o **Roblox Studio** → Aba Plugins → **WROX** → **Connect**
2. Inicie uma nova conversa no **Claude Desktop** e teste:
   ```
   Crie uma parte azul no Roblox Studio
   ```

## Solucao de Problemas

### O servidor MCP nao carrega

1. **Verifique a sintaxe JSON**: Valide o arquivo de configuracao com um validador JSON online
2. **Reinicie completamente o Claude Desktop**: Apos alterar as configuracoes, sempre feche completamente o aplicativo e reinicie
3. **Verifique o caminho**: Confirme se command e args estao corretos

### O servidor nao inicia

Execute o servidor MCP diretamente para verificar erros:
```bash
npx -y @weppy/roblox-mcp
```

### Falha na conexao

- Verifique se o plugin do Roblox Studio esta no estado **Connected**
- Verifique se a porta 3002 nao esta bloqueada pelo firewall

## Referencias

- [Guia Oficial de MCP do Claude Desktop](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [Guia de Conexao de Servidor MCP](https://modelcontextprotocol.io/docs/develop/connect-local-servers)
