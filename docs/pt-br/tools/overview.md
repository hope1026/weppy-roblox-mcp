# Ferramentas do Roblox MCP

Para parametros detalhados, consulte as definicoes de ferramentas MCP diretamente.

## Guias por fluxo

Consulte estes guias orientados a fluxo de trabalho:

| Categoria | Descricao | Tools incluidas |
|-----------|-----------|-----------------|
| [Instancias e propriedades](instances-and-properties.md) | Busca, criacao, edicao e tags de instancias | `query_instances`, `mutate_instances`, `manage_properties` |
| [Scripts e execucao de codigo](scripting.md) | Gerenciamento de scripts e execucao de Luau | `manage_scripts`, `execute_luau` |
| [Mundo e ambiente](world-and-environment.md) | Iluminacao, terrain, consultas espaciais e camera | `manage_lighting`, `manage_terrain`, `spatial_query`, `manage_camera` |
| [Assets e efeitos](assets-and-effects.md) | Insercao de assets, tween, animacao, audio e efeitos | `manage_assets`, `manage_tween`, `manage_animation`, `manage_audio`, `manage_effects`, `manage_physics` |
| [Playtest e testes automatizados](playtest.md) | Controle de playtest e validacao automatica | `system_info` (`play`, `stop`, `pause`, `resume`, `play_status`, `run_test`) |
| [Sync](../sync/overview.md) | Sincronizacao entre Studio e arquivos locais | `manage_sync`, `workspace_state` |
| [Sistema e depuracao](system-and-debugging.md) | Conexao, logs, selecao e execucao em lote | `system_info` (`ping`, `connection`, `usage`, ...), `manage_logs`, `manage_selection`, `batch_execute` |

Documentacao relacionada:
- [Guia detalhado de Sync](../sync/overview.md)

Politica de Sync:
- Basic: Studio -> Local sincronizacao unidirecional
- Pro: Sincronizacao bidirecional + cobertura de acoes avancadas mais ampla (melhor eficiencia de tokens IA com fluxos em massa)

## Query Instances (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter propriedades da instancia por caminho | Basic |
| `children` | Obter filhos imediatos ou todos os descendentes | Basic |
| `find_child` | Encontrar primeiro filho por nome e filtro de classe opcional | Basic |
| `find_descendant` | Encontrar primeiro descendente por nome | Basic |
| `wait_for_child` | Aguardar filho aparecer (com timeout) | Basic |
| `class_info` | Obter informacoes da classe e propriedades validas | Basic |
| `search_name` | Buscar instancias por padrao de nome (suporta curingas) | Basic |
| `search_class` | Buscar instancias por nome de classe | Basic |
| `file_tree` | Obter estrutura de arvore de arquivos a partir da raiz | Pro |
| `project_structure` | Obter estrutura completa do projeto | Pro |
| `descendants` | Obter todos os descendentes de uma instancia | Pro |
| `ancestors` | Obter todos os ancestrais de uma instancia | Pro |
| `search_property` | Buscar instancias por valor de propriedade | Pro |
| `search_tag` | Buscar instancias por tag | Pro |

## Mutate Instances (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `create` | Criar uma nova instancia | Basic |
| `create_with_props` | Criar instancia com propriedades iniciais | Basic |
| `delete` | Excluir uma instancia | Basic |
| `clone` | Clonar uma instancia | Basic |
| `move` | Mover instancia para novo pai | Basic |
| `rename` | Renomear uma instancia | Basic |
| `pivot` | Definir posicao pivot ou CFrame | Basic |
| `create_tree` | Criar arvore hierarquica de instancias | Pro |
| `mass_create` | Criar multiplas instancias de uma vez | Pro |
| `mass_delete` | Excluir multiplas instancias | Pro |
| `mass_duplicate` | Duplicar multiplas instancias | Pro |
| `smart_duplicate` | Duplicar com espacamento e quantidade | Pro |

## Manage Properties (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter valor de uma propriedade | Basic |
| `set` | Definir valor de uma propriedade | Basic |
| `get_all` | Obter todas as propriedades de uma instancia | Basic |
| `set_multiple` | Definir multiplas propriedades de uma vez | Basic |
| `get_attr` | Obter valor de atributo | Basic |
| `set_attr` | Definir valor de atributo | Basic |
| `get_all_attrs` | Obter todos os atributos | Basic |
| `delete_attr` | Excluir um atributo | Basic |
| `add_tag` | Adicionar tag a instancia | Basic |
| `remove_tag` | Remover tag de instancia | Basic |
| `check_tag` | Verificar se instancia tem uma tag | Basic |
| `get_tags` | Obter todas as tags de uma instancia | Basic |
| `get_tagged` | Obter todas as instancias com uma tag especifica | Basic |
| `set_calculated` | Definir propriedade usando expressao matematica | Pro |
| `set_relative` | Definir propriedade relativa ao valor atual | Pro |
| `mass_set` | Definir propriedade em multiplas instancias | Pro |
| `mass_get` | Obter propriedade de multiplas instancias | Pro |
| `modify_children` | Modificar todos os filhos de um pai | Pro |

## Manage Scripts (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get_source` | Obter codigo-fonte do script | Basic |
| `set_source` | Definir codigo-fonte do script | Basic |
| `create` | Criar um novo script | Basic |
| `delete` | Excluir um script | Basic |
| `edit_replace` | Substituir linhas especificas do script | Basic |
| `edit_insert` | Inserir linhas na posicao | Basic |
| `edit_delete` | Excluir linhas especificas | Basic |
| `search` | Buscar texto no script | Basic |
| `get_dependencies` | Obter dependencias do script | Basic |
| `replace` | Substituicao em massa em scripts | Pro |

## Manage Lighting (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `lighting` | Definir propriedades do servico Lighting | Pro |
| `atmosphere` | Definir propriedades de Atmosphere | Pro |
| `sky` | Definir propriedades de Sky | Pro |
| `terrain_props` | Definir propriedades visuais/agua de Terrain | Pro |
| `time` | Definir hora do dia | Pro |

## Manage Selection (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter selecao atual | Basic |
| `set` | Substituir selecao atual | Basic |
| `clear` | Limpar selecao | Basic |
| `cached` | Obter selecao em cache sem ida e volta | Basic |
| `context` | Obter contexto detalhado com fonte e propriedades | Pro |
| `details` | Obter detalhes hierarquicos com ancestrais/descendentes | Pro |
| `add` | Adicionar itens a selecao | Pro |
| `remove` | Remover itens da selecao | Pro |
| `watch` | Monitorar mudancas de selecao | Pro |

## Manage Camera (Basic)

| Acao | Descricao | Tier |
|------|-----------|------|
| `info` | Obter posicao, rotacao, FOV e tamanho do viewport | Basic |
| `focus_path` | Mover camera para focar em instancia | Basic |
| `focus_position` | Mover camera para focar em posicao | Basic |
| `suggest` | Obter visao de camera sugerida para alvo | Basic |

## Manage Tween (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `create` | Criar tween com propriedades-alvo | Pro |
| `play` | Reproduzir um tween criado | Pro |
| `pause` | Pausar um tween em execucao | Pro |
| `cancel` | Cancelar um tween | Pro |

## Manage Audio (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `play` | Reproduzir som (cria Sound se necessario) | Pro |
| `stop` | Parar um som em reproducao | Pro |
| `pause` | Pausar um som em reproducao | Pro |
| `resume` | Retomar um som pausado | Pro |
| `set_listener` | Definir tipo/alvo do listener de audio | Pro |

## Manage Animation (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `load` | Carregar animacao em Humanoid/AnimationController | Pro |
| `play` | Reproduzir faixa de animacao carregada | Pro |
| `stop` | Parar animacao em reproducao | Pro |
| `get_tracks` | Listar todas as faixas de animacao carregadas | Pro |

## Manage Physics (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `register_group` | Registrar grupo de colisao | Pro |
| `set_collidable` | Definir se dois grupos podem colidir | Pro |
| `get_groups` | Listar todos os grupos de colisao registrados | Pro |

## Manage Effects (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `emit` | Emitir particulas do ParticleEmitter | Pro |
| `clear` | Limpar todas as particulas | Pro |
| `toggle` | Ativar ou desativar efeito | Pro |

## Manage Terrain (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `fill_block` | Preencher terreno em forma de bloco | Pro |
| `fill_ball` | Preencher terreno em forma de esfera | Pro |
| `fill_cylinder` | Preencher terreno em forma de cilindro | Pro |
| `fill_wedge` | Preencher terreno em forma de cunha | Pro |
| `clear_region` | Limpar terreno na regiao | Pro |
| `clear_bounds` | Limpar terreno nos limites | Pro |
| `replace_material` | Substituir material na regiao | Pro |
| `colors_get` | Obter cores de material | Pro |
| `colors_set` | Definir cores de material | Pro |
| `read_voxel` | Ler dados de voxel individual | Pro |
| `read_voxels` | Ler dados de voxels em massa | Pro |
| `write_voxels` | Escrever dados de voxels em massa | Pro |
| `generate` | Gerar terreno procedural | Pro |
| `smooth` | Suavizar terreno | Pro |

## Spatial Query (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `raycast` | Lancar um unico raio | Pro |
| `find_ground` | Encontrar posicao do chao abaixo do ponto | Pro |
| `check_placement` | Verificar se a colocacao esta livre de colisoes | Pro |
| `multi_raycast` | Lancar multiplos raios em lote | Pro |
| `scan_area` | Gerar mapa de alturas da area | Pro |
| `find_flat` | Encontrar areas planas para construcao | Pro |
| `find_spawn` | Encontrar posicoes de spawn adequadas | Pro |
| `analyze_walkable` | Analisar grade de transitabilidade | Pro |
| `spatial_map` | Obter todas as posicoes de BasePart | Pro |
| `find_space` | Encontrar espaco vazio para objeto | Pro |
| `bounds` | Obter caixa delimitadora de instancias | Pro |
| `snap_grid` | Ajustar posicao a grade | Pro |
| `collision` | Verificar colisao AABB | Pro |

## Manage Assets (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `insert` | Inserir modelo por ID de asset | Pro |
| `info` | Obter metadados do asset | Pro |
| `search` | Buscar na Creator Store | Pro |
| `search_insert` | Buscar e inserir primeira correspondencia | Pro |
| `insert_free` | Inserir modelo gratuito | Pro |
| `insert_package` | Inserir pacote | Pro |
| `export` | Exportar selecao atual | Pro |

## Manage Sync (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `status` | Obter status de sincronizacao de um Place | Pro |
| `config` | Obter configuracao de sincronizacao | Pro |
| `history` | Obter historico de mudancas | Pro |
| `directions` | Obter direcoes de sincronizacao por tipo | Pro |
| `read_file` | Ler um arquivo sincronizado | Pro |
| `write_file` | Escrever em um arquivo sincronizado | Pro |
| `progress` | Obter progresso de sincronizacao em tempo real e largura de banda | Pro |

## Workspace State (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `sync` | Obter estado atual do Workspace | Pro |
| `snapshot` | Obter estrutura completa da arvore de instancias | Pro |
| `changes` | Obter mudancas recentes | Pro |
| `viewport` | Obter informacoes de camera e viewport | Pro |

## Manage Logs (Basic)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter logs filtrados | Basic |
| `clear` | Limpar buffer de logs | Basic |
| `errors` | Obter apenas erros recentes | Basic |

## System Info (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `ping` | Testar conexao | Basic |
| `connection` | Obter info de conexao servidor/plugin | Basic |
| `usage` | Obter tier atual (basic/pro) | Basic |
| `place_info` | Obter Place ID, nome, criador | Pro |
| `services` | Listar todos os servicos Roblox | Pro |
| `studio_settings` | Obter preferencias do Studio | Pro |
| `play` | Iniciar playtest em modo Play (F5) ou Run (F8) | Pro |
| `stop` | Parar o playtest ativo | Pro |
| `pause` | Pausar o playtest ativo em modo Run | Pro |
| `resume` | Retomar o playtest pausado em modo Run | Pro |
| `play_status` | Obter estado do playtest e acoes disponiveis | Pro |
| `run_test` | Injetar um script temporario de teste, executar o playtest, coletar logs e gerar relatorios locais | Pro |

## Batch Execute (Pro)

Executa multiplos comandos em um unico lote. Cada comando especifica um nome de ferramenta e argumentos. Os comandos sao executados sequencialmente com comportamento opcional de continuar em caso de erro.

## Execute Luau (Pro)

Executa codigo Luau arbitrario no sandbox do Roblox Studio. Servicos bloqueados: HttpService, DataStoreService, MessagingService. Nao pode acessar CoreGui/CorePackages.
