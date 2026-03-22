# Tools

> Verifique o historico e as estatisticas das ferramentas MCP executadas pela IA.

![Tools — historico de execucao e estatisticas das ferramentas](../../assets/screenshots/dashboard/dashboard_tools.png)

## Visao geral

A pagina Tools fornece o historico e as estatisticas das ferramentas MCP executadas pela IA. E composta por duas sub-abas: **History** e **Statistics**. Esta sempre acessivel quando o servidor esta conectado (L1 ou superior).

## Aba History

Exibe o historico de execucao das ferramentas em tabela cronologica:

| Coluna | Descricao |
|--------|-----------|
| Time | Horario de execucao |
| Tool.Action | Ferramenta e acao executadas (ex.: `query_instances.get_instance`) |
| Duration | Tempo de execucao |
| Status | Status do resultado (OK/Error) |
| Tier | Tier utilizado (Basic/Pro) |

Funcionalidades:
- Dropdown **Tool filter** para filtrar uma ferramenta especifica
- Paginacao para navegar por grandes volumes de registros
- Adicao de novos registros de execucao em tempo real

## Aba Statistics

Analisa visualmente as estatisticas de uso das ferramentas:

- **Distribuicao por tier** — Proporcao de uso de ferramentas Basic/Pro
- **Estatisticas por ferramenta** — Quantidade de chamadas e tempo medio de resposta de cada ferramenta
- **Analise por acao** — Estatisticas detalhadas por acao dentro de cada ferramenta

## Funcionalidades exclusivas do tier Basic

Para usuarios do tier Basic, uma UI adicional e exibida:

- **Tier Usage Progress** — Barra de progresso de uso
- **Modal comparativo Basic vs Pro** — Apresenta as funcionalidades adicionais do tier Pro

## Casos de uso

### Analise de desempenho de ferramentas

```
"Quero saber qual ferramenta demora mais"
```

Verifique o tempo medio de resposta por ferramenta na aba Statistics.

### Rastreamento de erros

```
"Quero saber por que a ferramenta que acabei de executar falhou"
```

Encontre o item com Status Error na aba History para verificar as informacoes detalhadas.

## Documentos relacionados

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Settings](settings.md)
- [Lista completa de Tools](../tools/overview.md)
