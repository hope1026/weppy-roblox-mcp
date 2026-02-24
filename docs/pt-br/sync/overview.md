# Guia detalhado de Sync no Roblox MCP

Sync conecta o estado do Roblox Studio com arquivos locais para que a IA consiga ler e modificar o contexto completo do projeto com confianca.

## Por que Sync importa

Sem Sync, a IA so enxerga trechos colados no chat. Com Sync ativo, ela trabalha com o projeto inteiro.

- Aplicar refactors de forma consistente em varios scripts
- Revisar mudancas de risco rapidamente usando historico
- Manter clara a fonte de verdade entre Studio e arquivos locais

## Como funciona

1. Full Sync: espelho inicial da arvore/instancias do Studio para local
2. Incremental Sync: atualizacao continua das mudancas novas
3. Rastreamento de History/Status: ver o que mudou, quando e em qual direcao

O caminho local padrao e `roblox-project-sync/place_{placeId}/explorer`.

## Basic vs Pro

| Item | Basic | Pro |
|------|------|-----|
| Direcao de sync | Studio -> Local | Bidirecional |
| Direction por tipo | Nao suportado | Suportado (Scripts / Values / Containers / Data / Services) |
| Apply Mode por tipo | Nao suportado | Suportado (Auto / Manual) |
| APIs de status/historico | Nao suportado | Suportado (`status`, `history`, `progress`) |
| Ferramenta `manage_sync` | Nao suportado | Suportado |
| Sync multiplace | Nao suportado | Suportado (ate 3 places) |

## Alvos de sync e exclusoes padrao

Servicos sincronizaveis por padrao:

- `Workspace`
- `Lighting`
- `ReplicatedStorage`
- `ServerStorage`
- `ServerScriptService`
- `StarterGui`
- `StarterPlayer`
- `StarterPack`
- `ReplicatedFirst`
- `SoundService`
- `Chat`
- `LocalizationService`

Exclusoes padrao:

- Classes: `Terrain`, `Camera`
- Caminhos restritos por seguranca: `CoreGui`, `CorePackages`, `RobloxScript`, `RobloxScriptSecurity`

## Direction e Apply Mode

### Direction (direcao por tipo)

- `forward`: Studio -> Local
- `reverse`: Local -> Studio
- `bidirectional`: duas direcoes

Os tipos sao gerenciados separadamente: `scripts`, `values`, `containers`, `data`, `services`.

### Apply Mode (como mudancas reverse sao aplicadas)

- `manual`: usuario confirma antes de aplicar no Studio
- `auto`: mudancas detectadas sao aplicadas automaticamente

No Pro, voce controla Direction e Apply Mode por tipo.

## Guia de acoes `manage_sync` (Pro)

| Acao | Descricao | Parametros principais |
|------|------|-----------|
| `status` | Consultar estado atual de sync de um place | `placeId` |
| `config` | Obter configuracao de sync | `placeId` |
| `history` | Consultar historico de mudancas | `placeId`, `query.limit`, `query.offset` |
| `directions` | Obter direcoes por tipo | `placeId` |
| `read_file` | Ler arquivo sincronizado | `placeId`, `instancePath` |
| `write_file` | Escrever arquivo sincronizado | `placeId`, `instancePath`, `content` |
| `progress` | Obter progresso/throughput em tempo real | `placeId` |

## Fluxo recomendado

### 1) Comecar com seguranca

- Complete o Full Sync primeiro para estabelecer uma base estavel
- Comece com modo `manual` para reduzir risco

### 2) Trabalhar com IA

- "Verifica o estado do sync e resume so mudancas de risco do historico recente"
- "Refatora primeiro scripts de `ServerScriptService` e registra no historico"

### 3) Recuperar quando necessario

- Acompanhe mudancas recentes com `history`
- Inspecione o arquivo alvo com `read_file`
- Restaure conteudo com `write_file` e valide no Studio

## Documentos relacionados

- [Cobertura de ferramentas (Tools Overview)](../tools/overview.md)
- [Guia de upgrade Pro](../pro-upgrade.md)
