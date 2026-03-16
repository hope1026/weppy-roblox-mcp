# Roblox MCP — Servidor MCP para Roblox Studio | Desenvolvimento de jogos com IA usando Claude, Codex, Cursor e Gemini

> **Weppy Roblox MCP** e um servidor MCP que permite agentes de codificacao IA controlarem uma sessao ao vivo do Roblox Studio — crie e edite scripts, instancias, terrain, iluminacao, assets, audio e animacoes com linguagem natural.

**21 ferramentas consolidadas · 140+ acoes · Sync bidirecional · Playtest automatizado · Suporte multi-place**

[English](../../README.md) | [한국어](../ko/README.md) | [日本語](../ja/README.md) | [Español](../es/README.md) | **Português** | [Bahasa Indonesia](../id/README.md)

[![Demo — IA criando um jogo Roblox em tempo real](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## Instalacao rapida (5 minutos)

**Passo 1** — Instale o plugin do Roblox Studio (ponte entre Studio e IA):
[Guia de instalacao do plugin](../en/installation/roblox-plugin.md)

**Passo 2** — Registre o servidor MCP no seu app de IA:

```bash
npx -y @weppy/roblox-mcp
```

| App de IA | Guia |
|-----------|------|
| Claude Code | [Configuracao](../en/installation/ai-apps/claude-code.md) |
| Claude Desktop | [Configuracao](../en/installation/ai-apps/claude-app.md) |
| Codex CLI | [Configuracao](../en/installation/ai-apps/codex-cli.md) |
| Codex Desktop | [Configuracao](../en/installation/ai-apps/codex-app.md) |
| Gemini CLI | [Configuracao](../en/installation/ai-apps/gemini-cli.md) |

> Funciona com qualquer cliente MCP compativel. O comando do servidor e `npx -y @weppy/roblox-mcp`.

## Compatibilidade

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI |
|:-----------:|:--------------:|:------:|:---------:|:----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

**Requisitos:** Node.js 18+, Roblox Studio, Windows 10+ ou macOS 12+

## Funcionalidades principais

### 1) MCP Tool: execucao direta no Studio via linguagem natural

A IA consegue operar diretamente scripts, instancias, propriedades, terreno, iluminacao, assets, audio e animacao dentro do Studio.

- "Adiciona particulas + som + cooldown quando o jogador pular."
- "Cria uma arena de boss no centro do mapa e coloca spawns sem colisao."
- "Muda a interface deste modulo e atualiza todos os scripts dependentes."

Nao e apenas geracao de codigo. Sao **acoes executaveis para fluxo real de desenvolvimento**.

### 2) Sync: mantem contexto completo do projeto para a IA

A IA trabalha com um espelho local sincronizado, entao alteracoes em varios arquivos continuam consistentes.

![Fluxo de Sync — Studio e arquivos locais sincronizados em tempo real](../assets/screenshots/sync.png)

- Basic: sincronizacao unidirecional (Studio -> Local)
- Pro: sincronizacao bidirecional + Direction/Apply Mode por tipo + historico + multiplace

### 3) Playtest: a IA executa e valida testes automaticamente

A IA pode controlar diretamente o playtest do Studio. Ela pode iniciar e parar Play (F5) ou Run (F8), injetar scripts de teste, coletar logs e gerar relatorios locais automaticamente.

- "Inicie um playtest em modo Run e verifique se o NPC chega ao objetivo."
- "Escreva e execute um teste para confirmar que o SpawnLocation esta acima do chao."
- "Valide com playtest se o script que acabei de alterar roda sem erros."

### 4) Roblox Explorer: navegue a hierarquia do Studio no VSCode

Visualize a arvore completa de instancias do seu lugar no Roblox Studio diretamente dentro do VSCode. Navegue pelos servicos, abra scripts e arquivos de propriedades sincronizados, e acompanhe o status de sincronizacao — tudo sem trocar para o Studio.

![Roblox Explorer — arvore de instancias do Studio exibida na barra lateral do VSCode](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Icones de classe iguais ao Studio para reconhecimento imediato
- Clique para abrir scripts e arquivos de propriedades sincronizados
- Suporte multiplace com indicadores de status de sincronizacao

## Valor imediato para o usuario

- Comprimir trabalho repetitivo: transformar muitas edicoes manuais em um pedido
- Alterar arquivos relacionados juntos: nao apenas um arquivo alvo
- Reduzir risco: decidir com base no estado do sync e no historico
- Melhor eficiencia de tokens (Pro): menos round trips com acoes em massa

## Documentacao detalhada

- [Guia de instalacao](../en/installation/README.md)
- [Lista completa de tools](tools/overview.md)
- [Guia detalhado de Sync](sync/overview.md)
- [Roblox Explorer (Extensao VSCode)](../en/installation/roblox-explorer.md)
- [Compatibilidade](../compatibility.md)
- [Solucao de problemas](../troubleshooting.md)

### Guias por fluxo

- [Instancias e propriedades](tools/instances-and-properties.md) - busca, criacao, edicao e tags
- [Scripts e execucao de codigo](tools/scripting.md) - gerenciamento de scripts e execucao de Luau
- [Mundo e ambiente](tools/world-and-environment.md) - iluminacao, terrain e camera
- [Assets e efeitos](tools/assets-and-effects.md) - insercao de modelos, tween e efeitos
- [Playtest e testes automatizados](tools/playtest.md) - controle de playtest e validacao automatica
- [Sistema e depuracao](tools/system-and-debugging.md) - conexao, logs e execucao em lote

## Upgrade Pro

Sync bidirecional, recursos avancados de criacao e eficiencia de tokens de IA — tudo em uma unica atualizacao.

[Guia de upgrade Pro](../en/pro-upgrade.md)

---

[GitHub Issues](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
