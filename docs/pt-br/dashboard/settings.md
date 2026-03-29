# Settings

> Verifique e gerencie informacoes de licenca, configuracoes do servidor, configuracoes de sincronizacao e idioma.

## Visao geral

Na pagina Settings, voce pode verificar as informacoes de licenca e as configuracoes do servidor, alem de alterar algumas delas. Esta sempre acessivel quando o dashboard esta em estado **Servidor conectado** ou **Studio conectado**.

## License (somente leitura)

Exibe o status atual da licenca:

| Item | Descricao |
|------|-----------|
| Status | Badge de status (Active/Inactive) |
| Tier | Tier atual (Basic/Pro) |
| License Key | Chave de licenca mascarada |
| Provider | Informacoes do provedor da licenca |

## General

| Configuracao | Descricao |
|--------------|-----------|
| Log Level | Nivel de saida de logs |
| History Recording | Se o historico de execucao de ferramentas e salvo |
| Stats Collection | Se as estatisticas de ferramentas sao coletadas |
| Request Timeout | Timeout de requisicao (segundos) |

## Server Environment (somente leitura)

Exibe as configuracoes do servidor definidas por variaveis de ambiente:

| Variavel de ambiente | Descricao | Valor padrao |
|---------------------|-----------|--------------|
| `HTTP_PORT` | Porta HTTP | 3002 |
| `HTTP_HOST` | Host HTTP | 127.0.0.1 |
| `DASHBOARD_AUTO_OPEN` | Abertura automatica do Dashboard | true |

## Sync Settings

| Configuracao | Descricao |
|--------------|-----------|
| Max Depth | Profundidade maxima de sincronizacao |
| Max Instances | Numero maximo de instancias sincronizadas |

## Language

Altere o idioma da interface do Dashboard. Suporta 6 idiomas + Auto (deteccao automatica do idioma do navegador).

| Opcao | Idioma |
|-------|--------|
| Auto | Deteccao automatica do idioma do navegador |
| English | Ingles |
| 한국어 | Coreano |
| 日本語 | Japones |
| Español | Espanhol |
| Português | Portugues |
| Bahasa Indonesia | Indonesio |

## Documentos relacionados

- [WROX Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
