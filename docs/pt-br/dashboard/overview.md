# Dashboard

> Monitore e gerencie em tempo real o status, conexoes, sincronizacao, historico de execucao de ferramentas e historico de alteracoes do jogo do servidor MCP diretamente no navegador.

![WROX Dashboard Overview — status do servidor, alteracoes recentes e resumo da sessao em uma unica tela](../../assets/screenshots/dashboard/dashboard_overview.png)

## O que e o Dashboard?

O Dashboard e uma interface de monitoramento baseada na web fornecida pelo servidor MCP. Ele abre automaticamente no navegador quando o servidor MCP e iniciado, permitindo acompanhar em tempo real todas as operacoes que o agente de IA realiza no Roblox Studio.

- Visualize o status de forma grafica sem precisar vasculhar logs do terminal
- Acompanhe o que a IA alterou no Studio atraves do historico de alteracoes
- Verifique status de sincronizacao, conexao e estatisticas de execucao de ferramentas em um so lugar

## Estrutura das paginas

| Pagina | Descricao | Guia detalhado |
|--------|-----------|----------------|
| [Overview](#overview) | Cards de status do servidor/plugin/agente/Sync, feed de alteracoes recentes | Este documento |
| [Changelog](changelog.md) | Historico de alteracoes do jogo — cards por sessao, resumo de alteracoes, timeline, Before & After | [Guia detalhado](changelog.md) |
| [Connection](connection.md) | Status do servidor, lista de agentes de IA, informacoes de conexao do plugin | [Guia detalhado](connection.md) |
| [Sync](sync.md) | Status de sincronizacao, configuracao de direcao, logs | [Guia detalhado](sync.md) |
| [Playtest](playtest.md) | Status do playtest, historico de testes | [Guia detalhado](playtest.md) |
| [Tools](tools.md) | Historico de execucao de ferramentas, estatisticas, distribuicao por tier | [Guia detalhado](tools.md) |
| [Settings](settings.md) | Licenca, nivel de log, idioma | [Guia detalhado](settings.md) |

## Como acessar

Quando o servidor MCP e iniciado, o Dashboard abre automaticamente no navegador. Para acessar manualmente:

```
http://localhost:3002
```

> Defina `DASHBOARD_AUTO_OPEN=false` para desativar a abertura automatica (consulte a pagina [Settings](settings.md)).

## Estados de conexao

O Dashboard oferece funcionalidades diferentes de acordo com o status da conexao:

| Estado | Condicao | Paginas disponiveis |
|--------|----------|---------------------|
| **Servidor desconectado** | Servidor desconectado | Exibe apenas a tela de aguardando reconexao |
| **Servidor conectado** | Servidor conectado, plugin desconectado | Connection, Tools, Settings |
| **Studio conectado** | Servidor + plugin ambos conectados | Todas as paginas |

Quando o dashboard esta em estado **Servidor conectado**, as paginas Overview, Changelog, Sync e Playtest nao ficam acessiveis.

## Overview

A pagina Overview e a tela inicial do Dashboard e mostra o status geral do sistema em uma unica visualizacao.

### Cards de status

| Card | Informacao exibida |
|------|--------------------|
| **Server** | Status de conexao do servidor (Online/Offline) |
| **Plugin** | Status de conexao do plugin, informacoes do Place |
| **Agent** | Nome do agente de IA conectado atualmente |
| **Sync** | Status de sincronizacao (Idle/Syncing/Error) |

### Alteracoes recentes do jogo (Recent Game Changes)

Exibe em tempo real as alteracoes recentes realizadas pela IA no Studio (maximo 20). Cada item e exibido com um icone de categoria de alteracao e, ao clicar, voce e direcionado para a visualizacao detalhada no [Changelog](changelog.md).

Icones de categoria:
- Script — criacao/modificacao de scripts
- Instance — criacao/exclusao/movimentacao de instancias
- Property — alteracao de propriedades
- Lighting — configuracoes de iluminacao/ambiente
- Terrain — alteracoes de terreno
- Asset — insercao de assets

### Resumo de alteracoes da sessao (Session Change Summary)

Mostra as estatisticas de alteracoes da sessao atual agregadas por categoria (ex.: "4 scripts · 3 properties").

## Atualizacoes em tempo real

O Dashboard utiliza SSE (Server-Sent Events) para atualizar dados em tempo real:

- Status do servidor: polling a cada 5 segundos
- Feed de alteracoes, eventos de conexao: streaming em tempo real via SSE
- Desconexao do SSE: reconexao automatica apos 3 segundos

## Documentos relacionados

- [Changelog](changelog.md) — Rastreamento do historico de alteracoes do jogo
- [Connection](connection.md) — Status de conexao do servidor/agente/plugin
- [Sync](sync.md) — Monitoramento do status de sincronizacao
- [Playtest](playtest.md) — Historico de playtest
- [Tools](tools.md) — Historico/estatisticas de execucao de ferramentas
- [Settings](settings.md) — Licenca, configuracoes do servidor, idioma
- [Lista completa de Tools](../tools/overview.md)
- [Guia detalhado de Sync](../sync/overview.md)
