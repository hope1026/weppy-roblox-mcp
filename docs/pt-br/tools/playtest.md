# Playtest e testes automatizados

> Controle o playtest do Roblox Studio com IA, injete scripts de teste e gere logs e relatorios locais automaticamente.

## Tools incluidas

| Tool | Tier | Descricao |
|------|:----:|-----------|
| `system_info` | Pro | acoes `play`, `stop`, `pause`, `resume`, `play_status`, `run_test` |

> Para outras acoes de `system_info` como `ping`, `connection` e `usage`, consulte [Sistema e depuracao](system-and-debugging.md).

## Fluxos principais

### Controle manual de playtest

```
"Inicie o jogo em modo Play (F5)."
"Pare o playtest atual."
```

Fluxo tipico: `play` -> `play_status` -> `stop`.

### Executar um teste automatizado

```
"Escreva e execute um teste que verifique se o SpawnLocation esta posicionado corretamente."
```

`run_test` injeta o script de teste, inicia o playtest automaticamente, coleta logs e faz a limpeza.

### Validacao estilo CI

```
"Execute um teste em modo Run (F8) que verifique se o NPC chega ao objetivo e me mostre os logs se falhar."
```

Use `run_test` com `mode: "run"` para validacoes focadas no servidor.

## Maquina de estados do playtest

```text
Edit --play--> Running --stop--> Edit
                  |               ^
                pause             |
                  |               |
                  v               |
               Paused --resume--> Running
```

| Estado | Acoes disponiveis |
|--------|-------------------|
| `edit` | `play` |
| `running` | `stop`, `pause` (apenas modo Run) |
| `paused` | `resume`, `stop` |

- Modo Play (F5): simulacao de cliente + servidor, sem pausa ou retomada
- Modo Run (F8): simulacao apenas de servidor, com pausa e retomada

## Fluxo de `run_test`

`run_test` orquestra estas etapas automaticamente:

### 1. Preparacao

- Ler informacoes do place com `place_info`
- Limpar o buffer de logs existente

### 2. Injecao do script

- Criar `ServerScriptService.__MCP_TestRunner` com um script de teste encapsulado
- O wrapper cuida dos sinais `START` e `FINISHED` e dos tracebacks de erro

### 3. Execucao e monitoramento

- Iniciar o playtest em modo Play ou Run
- Consultar logs a cada 500 ms
- Finalizar quando `[WEPPY_TEST]:FINISHED` for detectado
- Parar automaticamente ao atingir timeout (60 segundos por padrao, 300 no maximo)

### 4. Limpeza

- Parar o playtest automaticamente
- Excluir o script de teste injetado
- Coletar os logs finais

### 5. Escrita de relatorios

Os relatorios e logs sao gravados em arquivos locais:

```text
roblox-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/
├── test-report.md
└── test-log.txt
```

Exemplo de `test-report.md`:

```markdown
# Test Report

- Status: passed
- Test Name: spawn_location_test
- Mode: run
- Place ID: 123456
- Duration (ms): 1523
- Total Logs: 12
- Signal Count: 2

## Signals

- START: 2026-03-12T10:30:00.000Z
- FINISHED: 2026-03-12T10:30:01.523Z
```

## Referencia de acoes

| Acao | Descricao | Parametros | Tier |
|------|-----------|------------|------|
| `play` | Iniciar playtest em modo Play (F5) ou Run (F8) | `mode`: `"play"` \| `"run"` | Pro |
| `stop` | Parar o playtest atual | - | Pro |
| `pause` | Pausar um playtest em modo Run | - | Pro |
| `resume` | Retomar um playtest pausado em modo Run | - | Pro |
| `play_status` | Obter o estado do playtest e as acoes disponiveis | - | Pro |
| `run_test` | Injetar script de teste, executar playtest, coletar logs e escrever relatorios | `script` (obrigatorio), `test_name`, `mode`, `timeout` | Pro |

### Parametros de `run_test`

| Parametro | Tipo | Obrigatorio | Descricao |
|-----------|------|:-----------:|-----------|
| `script` | string | ✅ | Corpo do codigo Luau de teste a executar |
| `test_name` | string | - | Nome exibido no relatorio |
| `mode` | `"play"` \| `"run"` | - | Modo de playtest, padrao `"play"` |
| `timeout` | number | - | Timeout em segundos, padrao 60, maximo 300 |

## Documentos relacionados

- [Sistema e depuracao](system-and-debugging.md) - acoes de conexao e gerenciamento de logs
- [Scripts e execucao de codigo](scripting.md) - escrever scripts e executar Luau
- [Lista completa de tools](overview.md)
