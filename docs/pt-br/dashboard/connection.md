# Connection

> Monitore o status de conexao do servidor, agentes de IA e plugin em um so lugar.

![Connection — status do servidor, agentes de IA, informacoes de conexao do plugin](../../assets/screenshots/dashboard/dashboard_connection.png)

## Visao geral

A pagina Connection monitora todos os status de conexao do sistema MCP em um unico local. Esta sempre acessivel quando o servidor esta conectado (L1 ou superior).

## Server Status

Exibe as informacoes essenciais do servidor:

| Item | Descricao |
|------|-----------|
| Status | Badge de status de conexao (Online/Offline) |
| Version | Versao do servidor MCP |
| PID | ID do processo do servidor |
| Uptime | Tempo de atividade do servidor |
| Session ID | Identificador da sessao atual |
| Exec Path | Caminho de execucao do servidor |

## AI Agents

Exibe em tabela a lista de agentes de IA conectados atualmente:

| Coluna | Descricao |
|--------|-----------|
| Name | Nome do agente (ex.: Claude Code) |
| PID | ID do processo do agente |
| Working Dir | Diretorio de trabalho do agente |
| Connected | Tempo decorrido desde a conexao |

Quando varios agentes estao conectados simultaneamente, todos sao exibidos.

## Plugins

Exibe a lista de plugins do Roblox Studio conectados:

| Coluna | Descricao |
|--------|-----------|
| Place | Nome do Place |
| Client ID | Identificador do cliente do plugin |
| Last Seen | Horario da ultima comunicacao |
| Version | Versao do plugin |

## Connection Log

Exibe eventos relacionados a conexao em tempo real. Eventos de conexao/desconexao de agentes/plugins sao adicionados automaticamente via SSE.

## Casos de uso

### Diagnostico de problemas de conexao

```
"Parece que a IA nao esta conseguindo se conectar ao Studio"
```

Verifique se o Server Status esta Online e se o plugin aparece na tabela Plugins. Voce pode rastrear eventos de conexao/desconexao no Connection Log.

### Verificacao de agentes

```
"Quero verificar qual IA esta conectada agora"
```

Confira o nome, PID e diretorio de trabalho do agente conectado na tabela AI Agents.

## Documentos relacionados

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
