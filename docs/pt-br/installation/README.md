# Guia de Instalação

Para usar o Roblox MCP você precisa instalar **duas coisas**.

```
App de IA (Claude, Codex, Gemini, etc.)
       │
   Servidor MCP ← Aqui os comandos da IA são convertidos para o formato do Roblox
       │
Plugin Roblox Studio ← Executa os comandos dentro do Studio
```

Quando o app de IA diz "cria uma parte azul", o servidor MCP converte o pedido e o plugin do Roblox Studio cria a parte de verdade.

---

## Instalação em um comando (Recomendado)

Instale tudo com um único comando:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Reinicie o Roblox Studio — pronto!

O registro automático de MCP suporta **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI e Antigravity**.

Se a execução do PowerShell estiver bloqueada no Windows, siga a instalação manual abaixo. Se estiver usando o pacote ZIP, você também pode executar `setup-plugin.bat` e `setup-mcp.bat`.

---

## Instalação manual

Se a instalacao em um comando nao funcionar, ou quando a instalacao automatica nao puder ser usada no seu ambiente, use a instalacao manual abaixo como alternativa.

### Passo 1: Instalar plugin do Roblox Studio

Baixe o arquivo do plugin no GitHub e coloque na pasta Plugins do Roblox Studio.

👉 [Guia de instalação do plugin](https://weppyai.com/en/install#plugin)

---

### Passo 2: Registrar servidor MCP no app de IA

Registre o servidor MCP no seu app de IA. Funciona com qualquer app que suporte MCP.

| App de IA | Guia de Instalação |
|-----------|-------------------|
| Claude Code | [Como Configurar](ai-apps/claude-code.md) |
| Claude Desktop | [Como Configurar](ai-apps/claude-app.md) |
| Cursor | [Como Configurar](ai-apps/cursor.md) |
| Codex CLI | [Como Configurar](ai-apps/codex-cli.md) |
| Codex Desktop | [Como Configurar](ai-apps/codex-app.md) |
| Gemini CLI | [Como Configurar](ai-apps/gemini-cli.md) |
| Antigravity | [Como Configurar](ai-apps/antigravity.md) |

> Apps de IA que não estão na lista também funcionam se suportarem MCP. O comando do servidor MCP é `npx -y @weppy/roblox-mcp`.

---

## Opcional: Instalar WROX Roblox Explorer (Extensão VSCode)

Navegue pelas árvores de instâncias sincronizadas dentro do VSCode com ícones de classes Roblox.
Esta extensao opcional exige que a instalacao do Roblox MCP acima ja esteja concluida, porque o Explorer le os dados de Sync em `wrox-project-sync` dentro da raiz do projeto.

👉 [Guia de instalação do WROX Roblox Explorer](https://weppyai.com/en/install#explorer)

Instalação direta:
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

---

## Depois da instalação

1. Abra o **Roblox Studio** e na aba Plugins clique em **WROX** → **Connect**
2. No **app de IA** teste assim:

```
Crie uma parte azul no Roblox Studio
```

Se a parte aparecer, a instalação está completa!
