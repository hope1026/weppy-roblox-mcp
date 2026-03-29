# Playtest

> Verifique o status e os resultados dos playtests executados pela IA.

![Playtest — status do playtest e historico de testes](../../assets/screenshots/dashboard/dashboard_playtest.png)

## Visao geral

A pagina Playtest exibe o status e os resultados dos playtests executados pela IA. So fica acessivel quando o dashboard esta em estado **Studio conectado**.

## Playtest Status

Exibe o status atual do playtest:

| Status | Significado |
|--------|-------------|
| **NotRunning** | Playtest nao iniciado |
| **Running** | Playtest em execucao |
| **Paused** | Playtest pausado (modo Run) |

## Test History

Lista em ordem cronologica os resultados dos testes executados pela IA com a acao `run_test`:

| Item | Descricao |
|------|-----------|
| Timestamp | Horario de execucao do teste |
| Test Report | Link para o relatorio do teste |
| Mode | Modo de execucao (play/run) |
| Duration | Duracao do teste |
| Status | Resultado (Passed/Failed) |

Ao clicar no relatorio de teste, voce pode visualizar o relatorio detalhado em formato markdown e os logs.

## Casos de uso

### Analise de falha em testes

```
"Quero encontrar a causa da falha no teste automatizado que acabei de executar"
```

Encontre o teste com status Failed no Test History e clique em Test Report para verificar os logs detalhados e a causa da falha.

### Verificacao do historico de testes

```
"Quero ver o panorama de sucesso/falha dos testes executados hoje"
```

Verifique o timestamp e o Status no Test History para acompanhar a tendencia dos resultados dos testes.

## Documentos relacionados

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Playtest e testes automatizados (ferramentas)](../tools/playtest.md)
