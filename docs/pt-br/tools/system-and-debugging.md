# Sistema e depuracao

> Verifique a conexao, gerencie logs, controle a selecao do Studio e execute lotes para fluxos de depuracao.

## Tools incluidas

| Tool | Tier | Descricao |
|------|:----:|-----------|
| `system_info` | Misto | `ping`, `connection`, `usage`, `place_info`, `services`, `studio_settings` |
| `manage_logs` | Basic | Consultar logs, limpar buffers e filtrar erros recentes |
| `manage_selection` | Misto | Ler, substituir e monitorar a selecao do Studio |
| `batch_execute` | Pro | Executar varios comandos em um unico lote |

> Para as acoes de playtest de `system_info`, como `play`, `stop` e `run_test`, consulte [Playtest e testes automatizados](playtest.md).

## Fluxos principais

### Verificar a conexao

```
"Confira se o Studio esta conectado corretamente."
```

Use `system_info.ping` para uma verificacao rapida.

### Depurar erros recentes

```
"Mostre os erros mais recentes."
```

Use `manage_logs.errors` para obter apenas erros recentes. `manage_logs.get` tambem suporta consulta incremental com cursor `sinceSeq`.

### Executar um fluxo em lote (Pro)

```
"Deixe todos os Part do Workspace vermelhos e depois foque a camera no primeiro."
```

Use `batch_execute` para agrupar varios comandos em uma unica solicitacao.

## Referencia de acoes

### System Info (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `ping` | Testar a conexao | Basic |
| `connection` | Obter informacoes de conexao do servidor e plugin | Basic |
| `usage` | Obter o tier atual (`basic` ou `pro`) | Basic |
| `place_info` | Obter Place ID, nome e criador | Pro |
| `services` | Listar todos os servicos Roblox | Pro |
| `studio_settings` | Obter preferencias do Studio | Pro |

### Manage Logs (Basic)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter logs filtrados com suporte opcional ao cursor `sinceSeq` | Basic |
| `clear` | Limpar o buffer de logs | Basic |
| `errors` | Obter apenas erros recentes | Basic |

### Manage Selection (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter a selecao atual | Basic |
| `set` | Substituir a selecao atual | Basic |
| `clear` | Limpar a selecao | Basic |
| `cached` | Obter a selecao em cache sem round-trip | Basic |
| `context` | Obter contexto detalhado com codigo-fonte e propriedades | Pro |
| `details` | Obter detalhes hierarquicos com ancestrais e descendentes | Pro |
| `add` | Adicionar itens a selecao | Pro |
| `remove` | Remover itens da selecao | Pro |
| `watch` | Monitorar mudancas de selecao | Pro |

### Manage Context (Basic)

| Acao | Descricao | Tier |
|------|-----------|------|
| `begin` | Inicia um contexto de execucao estruturado para o escopo atual de sessao/place | Basic |
| `update` | Atualiza a intencao, as areas afetadas ou os metadados de replay do contexto ativo | Basic |
| `end` | Encerra o contexto de execucao ativo e persiste o snapshot final | Basic |

### Batch Execute (Pro)

Executa varios comandos em um unico lote. Cada comando inclui nome da tool e argumentos, roda em ordem e pode continuar apos erros se configurado.

## Documentos relacionados

- [Playtest e testes automatizados](playtest.md) - acoes de playtest em `system_info`
- [Scripts e execucao de codigo](scripting.md) - executar Luau para investigacao e depuracao
- [Lista completa de tools](overview.md)
