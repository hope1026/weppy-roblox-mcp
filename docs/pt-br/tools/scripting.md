# Scripts e execucao de codigo

> Gerencie o codigo-fonte de scripts e execute Luau arbitrario dentro do Roblox Studio.

## Tools incluidas

| Tool | Tier | Descricao |
|------|:----:|-----------|
| `manage_scripts` | Misto | Criar, ler, editar, buscar e analisar dependencias de scripts |
| `execute_luau` | Pro | Executar Luau arbitrario no sandbox do Roblox Studio |

## Fluxos principais

### Editar um script

```
"Altere maxPlayers de 12 para 24 no script GameManager dentro de ServerScriptService."
```

Use `manage_scripts.search` para encontrar a linha correta e `manage_scripts.edit_replace` para atualiza-la.

### Refatorar varios scripts (Pro)

```
"Substitua OldModule por NewModule em todos os scripts."
```

Use `manage_scripts.replace` para aplicar a mudanca em varios scripts em uma solicitacao.

### Inspecionar dados de runtime (Pro)

```
"Calcule a media de Health de todos os Humanoid que estao em Workspace."
```

Use `execute_luau` para rodar Luau personalizado e ler dados do runtime atual.

## Referencia de acoes

### Manage Scripts (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get_source` | Obter codigo-fonte do script | Basic |
| `set_source` | Definir codigo-fonte do script | Basic |
| `create` | Criar um novo script | Basic |
| `delete` | Excluir um script | Basic |
| `edit_replace` | Substituir linhas especificas em um script | Basic |
| `edit_insert` | Inserir linhas em uma posicao | Basic |
| `edit_delete` | Excluir linhas especificas | Basic |
| `search` | Buscar texto em scripts | Basic |
| `get_dependencies` | Obter dependencias de um script | Basic |
| `replace` | Substituicao em massa em scripts | Pro |

### Execute Luau (Pro)

Executa Luau arbitrario dentro do sandbox do Roblox Studio.

- Servicos bloqueados: `HttpService`, `DataStoreService`, `MessagingService`
- APIs inacessiveis: `CoreGui`, `CorePackages`

## Documentos relacionados

- [Instancias e propriedades](instances-and-properties.md) - criar ou mover instancias de script
- [Playtest e testes automatizados](playtest.md) - injetar e executar scripts de teste
- [Lista completa de tools](overview.md)
