# Instalacao do Plugin Roblox

Como instalar o plugin para conectar com agentes de IA no Roblox Studio.

## 1. Baixar o Plugin

1. Baixe `weppy-roblox-mcp-basic.zip` em [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)
2. Extraia o arquivo ZIP — voce encontrara o arquivo `roblox-plugin/WeppyRobloxMCP.rbxm` e guias de instalacao

## 2. Instalar o Plugin

1. Inicie o **Roblox Studio**
2. Clique na aba **Plugins** no menu superior
3. Clique no botao **Plugins Folder**

![Abrir Plugins Folder](../../assets/screenshots/plugins_menu.png)

4. **Copie** o arquivo `WeppyRobloxMCP.rbxm` da pasta extraida para a pasta de Plugins aberta
5. **Reinicie o Roblox Studio**

## 3. Verificar a Instalacao

Apos reiniciar, o botao **W-MCP** aparecera na aba Plugins.

![Botao W-MCP](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. Conectar ao Agente de IA

### Pre-requisitos

O servidor MCP deve estar instalado. Complete primeiro o guia correspondente ao seu aplicativo de IA:

| Aplicativo de IA | Guia de Instalacao |
|------------------|---------------------|
| Claude Code | [Como Configurar](ai-apps/claude-code.md) |
| Claude Desktop | [Como Configurar](ai-apps/claude-app.md) |
| Codex CLI | [Como Configurar](ai-apps/codex-cli.md) |
| Codex Desktop | [Como Configurar](ai-apps/codex-app.md) |
| Gemini CLI | [Como Configurar](ai-apps/gemini-cli.md) |
| Antigravity | [Como Configurar](ai-apps/antigravity.md) |

### Conectar

1. Abra qualquer projeto no **Roblox Studio**
2. Aba **Plugins** no topo → Clique em **W-MCP**
3. Clique no botao **Connect** na janela do plugin
4. Quando aparecer o status **"Connected"**, a conexao foi estabelecida!

![Tela Principal do Plugin](../../assets/screenshots/plugin_main.png)

## 5. Configuracoes (Opcional)

Clique no botao de configuracoes no canto superior direito do plugin para modificar varias opcoes.

![Tela de Configuracoes](../../assets/screenshots/settings.png)

- **Conexao Automatica**: Conecta automaticamente ao servidor MCP ao iniciar o Studio
- **Reconexao Automatica**: Tenta reconectar automaticamente quando a conexao e perdida
- **Foco Automatico da Camera**: Move automaticamente a camera para objetos criados
- **Idioma**: Alterar o idioma da interface do plugin

## Solucao de Problemas

### O plugin nao aparece

- Feche completamente o Roblox Studio e reinicie
- Verifique se o arquivo foi copiado corretamente para a Plugins Folder
- Verifique se o arquivo `.rbxm` nao esta corrompido

### Nao consigo conectar

- Verifique se o servidor MCP esta em execucao no aplicativo de IA
- Clique novamente no botao **Connect** no plugin
- Verifique se a porta 3002 nao esta sendo usada por outro programa

### A conexao cai frequentemente

- Ative a opcao **Reconexao Automatica** nas configuracoes
- Tente reiniciar o aplicativo de IA
