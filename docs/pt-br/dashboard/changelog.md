# Changelog

> Registra todas as alteracoes realizadas pela IA no Roblox Studio por sessao, fornecendo resumo de alteracoes/timeline/Before & After.

![Changelog — lista de cards de alteracoes por sessao](../../assets/screenshots/dashboard/dashboard_changelog1.png)

## Visao geral

O Changelog e a pagina que rastreia o historico de alteracoes do jogo realizadas pelo agente de IA no Studio. As alteracoes sao agrupadas por sessao, permitindo visualizar rapidamente quantas alteracoes de cada tipo ocorreram em cada sessao.

## Lista de cards de sessao

A tela inicial do Changelog exibe uma lista de cards por sessao.

### Status da sessao

Cada card de sessao exibe um status:

| Status | Significado |
|--------|-------------|
| **Active** | Sessao em andamento (atualizacao em tempo real) |
| **Completed** | Sessao concluida |
| **Bootstrap** | Sessao de sincronizacao inicial |

### Resumo da sessao

Cada card exibe um resumo da quantidade de alteracoes por categoria na respectiva sessao:

- Script — quantidade de scripts criados/modificados
- Instance — quantidade de instancias criadas/excluidas/movidas
- Property — quantidade de propriedades alteradas
- Lighting — quantidade de alteracoes de iluminacao/ambiente
- Terrain — quantidade de alteracoes de terreno
- Asset — quantidade de assets inseridos

### Abas de filtro

Voce pode filtrar as sessoes pelas abas superiores:
- **All** — Todas as sessoes
- **Active** — Apenas sessoes em andamento
- **Completed** — Apenas sessoes concluidas

## Visualizacao detalhada da sessao

Clique em um card de sessao para acessar a visualizacao detalhada.

![Visualizacao detalhada do Changelog — resumo de alteracoes, timeline, Before & After](../../assets/screenshots/dashboard/dashboard_changelog2.png)

### Change Summary

Visualiza as alteracoes da sessao em 6 cards de categoria:

| Categoria | Icone | Descricao |
|-----------|-------|-----------|
| Scripts | Script | Quantidade de scripts criados/modificados |
| Instances | Instancia | Quantidade de instancias criadas/excluidas/movidas |
| Properties | Propriedade | Quantidade de propriedades alteradas |
| Lighting | Iluminacao | Quantidade de alteracoes de iluminacao/ambiente |
| Terrain | Terreno | Quantidade de alteracoes de terreno |
| Assets | Asset | Quantidade de assets inseridos |

### Change Timeline

Lista todas as alteracoes da sessao em ordem cronologica.

- Cada item exibe timestamp, tag de categoria da alteracao e caminho do alvo
- O dropdown **Category** permite filtrar por uma categoria especifica
- Ao clicar em um item, a visualizacao comparativa Before & After e expandida

### Before & After

Compara os dados antes e depois da alteracao. Fornece diferentes niveis de informacao conforme o tipo de alteracao:

| Confiabilidade | Significado | Exemplo |
|----------------|-------------|---------|
| **exact** | Valores antes e depois registrados com precisao | Alteracao de propriedade, modificacao de script |
| **partial** | Apenas parte das informacoes registrada | Alteracoes compostas |
| **after-only** | Apenas o valor posterior existe | Criacao de nova instancia |
| **intent-only** | Apenas a intencao registrada | Exclusao, etc. |

## Casos de uso

### Verificacao de trabalho

```
"Quero verificar quais scripts a IA acabou de modificar"
```

Filtre a categoria Script da sessao Active no Changelog para comparar a lista de scripts modificados e o codigo antes e depois.

### Rastreamento de alteracoes

```
"Quero rever como o Lighting foi configurado na sessao de ontem"
```

Encontre a sessao na aba Completed e filtre pela categoria Lighting para verificar o historico de alteracoes e os valores configurados.

### Depuracao de problemas

```
"Preciso descobrir em que momento uma determinada instancia foi excluida"
```

Filtre a categoria Instance na timeline e rastreie as alteracoes do tipo delete em ordem cronologica.

## Documentos relacionados

- [WROX Dashboard Overview](overview.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
