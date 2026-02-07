# Ferramentas do Roblox MCP

Para parametros detalhados das ferramentas MCP, consulte diretamente as definicoes das ferramentas MCP.

---

## Ferramentas Basic (68)

### Instance (Instancia) - 13

| Ferramenta | Descricao |
|------------|-----------|
| `create_instance` | Criar nova instancia |
| `create_instance_with_properties` | Criar instancia com propriedades |
| `clone_instance` | Clonar instancia existente |
| `delete_instance` | Excluir instancia |
| `move_instance` | Mover instancia para novo pai |
| `rename_instance` | Renomear instancia |
| `get_instance` | Obter informacoes da instancia |
| `get_instance_children` | Obter lista de filhos da instancia |
| `find_first_child` | Encontrar primeiro filho por nome |
| `find_first_descendant` | Encontrar primeiro descendente por nome |
| `get_class_info` | Obter informacoes da classe |
| `wait_for_child` | Aguardar ate que o filho apareca |
| `pivot_to` | Definir Pivot CFrame |

### Property (Propriedade) - 10

| Ferramenta | Descricao |
|------------|-----------|
| `get_property` | Obter valor da propriedade |
| `set_property` | Definir valor da propriedade |
| `get_all_properties` | Obter todas as propriedades |
| `set_multiple_properties` | Definir multiplas propriedades simultaneamente |
| `set_calculated_property` | Definir propriedade com valor calculado |
| `set_relative_property` | Definir propriedade com valor relativo |
| `get_attribute` | Obter valor do atributo |
| `set_attribute` | Definir valor do atributo |
| `get_all_attributes` | Obter todos os atributos |
| `delete_attribute` | Excluir atributo |

### Script - 9

| Ferramenta | Descricao |
|------------|-----------|
| `create_script` | Criar novo script |
| `get_script_source` | Obter codigo fonte do script |
| `set_script_source` | Atualizar codigo fonte do script |
| `delete_script` | Excluir script |
| `edit_script_lines` | Editar linhas especificas |
| `insert_script_lines` | Inserir linhas |
| `delete_script_lines` | Excluir linhas |
| `search_in_scripts` | Pesquisar em scripts |
| `get_script_dependencies` | Obter dependencias |

### Selection (Selecao) - 12

| Ferramenta | Descricao |
|------------|-----------|
| `get_selection` | Obter instancias selecionadas atualmente |
| `get_selection_context` | Obter selecao com contexto |
| `get_selection_details` | Obter detalhes da selecao |
| `set_selection` | Definir selecao de instancias |
| `clear_selection` | Limpar selecao |
| `add_to_selection` | Adicionar a selecao |
| `remove_from_selection` | Remover da selecao |
| `get_place_info` | Obter informacoes do Place |
| `get_services` | Obter lista de servicos do jogo |
| `get_studio_settings` | Obter configuracoes do Studio |
| `run_command` | Executar comando do Studio |
| `watch_selection` | Monitorar alteracoes de selecao |

### Search (Pesquisa) - 2

| Ferramenta | Descricao |
|------------|-----------|
| `search_by_name` | Pesquisar instancias por nome |
| `search_by_class` | Pesquisar instancias por classe |

### Tag - 5

| Ferramenta | Descricao |
|------------|-----------|
| `add_tag` | Adicionar tag a instancia |
| `remove_tag` | Remover tag da instancia |
| `get_tags` | Obter lista de tags da instancia |
| `get_tagged` | Obter lista de instancias com tag |
| `has_tag` | Verificar se instancia possui tag |

### Camera - 4

| Ferramenta | Descricao |
|------------|-----------|
| `get_camera_info` | Obter informacoes da camera |
| `get_suggested_camera_view` | Obter visualizacao de camera sugerida |
| `focus_camera_path` | Focar camera em instancia por caminho |
| `focus_camera_position` | Focar camera em posicao do mundo |

### Log - 3

| Ferramenta | Descricao |
|------------|-----------|
| `get_output_logs` | Obter logs de saida |
| `clear_output_logs` | Limpar logs de saida |
| `get_recent_errors` | Obter erros recentes |

### Connection (Conexao) - 2

| Ferramenta | Descricao |
|------------|-----------|
| `get_connection_info` | Obter status da conexao |
| `get_usage_status` | Obter status de uso/cota |

---

## Ferramentas Pro (+72)
👉 [Guia de Upgrade para Pro](pro-upgrade.md)

### Script - 2

| Ferramenta | Descricao |
|------------|-----------|
| `replace_in_scripts` | Substituir conteudo em scripts em massa |
| `execute_script` | Executar codigo Luau diretamente |

### Search (Pesquisa) - 6

| Ferramenta | Descricao |
|------------|-----------|
| `get_file_tree` | Obter arvore de arquivos |
| `get_project_structure` | Obter arvore de estrutura do projeto |
| `search_by_property` | Pesquisar por propriedade |
| `search_by_tag` | Pesquisar por tag |
| `get_descendants` | Obter todos os descendentes |
| `get_ancestors` | Obter ancestrais |

### Bulk (Operacoes em Massa) - 8

| Ferramenta | Descricao |
|------------|-----------|
| `mass_create_instances` | Criar instancias em massa |
| `mass_delete_instances` | Excluir instancias em massa |
| `mass_set_property` | Definir propriedades em massa |
| `mass_get_property` | Obter propriedades em massa |
| `mass_duplicate` | Duplicar instancias em massa |
| `smart_duplicate` | Duplicacao inteligente com offset |
| `batch_execute` | Executar multiplos comandos em lote |
| `modify_children` | Modificar todos os filhos |

### Asset (Ativo) - 7

| Ferramenta | Descricao |
|------------|-----------|
| `insert_model` | Inserir modelo da Creator Store |
| `get_asset_info` | Obter informacoes do ativo |
| `search_creator_store` | Pesquisar ativos na Creator Store |
| `search_and_insert_model` | Pesquisar e inserir modelo |
| `insert_free_model` | Inserir modelo gratuito |
| `insert_package` | Inserir pacote |
| `export_selection` | Exportar selecao |

### Environment (Ambiente) - 5

| Ferramenta | Descricao |
|------------|-----------|
| `set_lighting` | Definir propriedades de iluminacao |
| `set_atmosphere` | Definir propriedades de Atmosphere |
| `set_sky` | Definir propriedades de Sky |
| `set_terrain` | Definir propriedades de Terrain |
| `set_time_of_day` | Definir hora do dia |

### State (Estado) - 9

| Ferramenta | Descricao |
|------------|-----------|
| `sync_workspace_state` | Sincronizar estado do Workspace |
| `get_workspace_snapshot` | Obter snapshot do Workspace |
| `get_recent_changes` | Obter alteracoes recentes |
| `clear_change_history` | Limpar historico de alteracoes |
| `get_viewport_info` | Obter informacoes do viewport |
| `get_workspace_metadata` | Obter metadados do Workspace |
| `get_script_list` | Obter lista de scripts |
| `get_selection_info` | Obter informacoes de selecao |
| `clear_state_cache` | Limpar cache de estado |

### Spatial (Espacial) - 5

| Ferramenta | Descricao |
|------------|-----------|
| `get_spatial_map` | Obter mapa espacial da area |
| `find_empty_space` | Encontrar espaco vazio na area |
| `get_bounds` | Obter bounding box da instancia |
| `snap_to_grid` | Ajustar posicao a grade |
| `check_collision` | Verificar colisao entre instancias |

### Raycast - 8

| Ferramenta | Descricao |
|------------|-----------|
| `raycast` | Executar raycast e obter informacoes de colisao |
| `find_ground` | Encontrar posicao do solo naquele ponto |
| `check_placement` | Verificar se objeto pode ser colocado |
| `multi_raycast` | Executar multiplos raycasts |
| `scan_area` | Escanear area e gerar mapa de altura |
| `find_flat_areas` | Encontrar areas planas para colocacao |
| `find_spawn_positions` | Encontrar posicoes de spawn validas |
| `analyze_walkable_area` | Analisar area transitavel |

### Terrain (Terreno) - 14

| Ferramenta | Descricao |
|------------|-----------|
| `terrain_fill_block` | Preencher terreno em forma de bloco |
| `terrain_fill_ball` | Preencher terreno em forma de esfera |
| `terrain_fill_cylinder` | Preencher terreno em forma de cilindro |
| `terrain_fill_wedge` | Preencher terreno em forma de cunha |
| `terrain_clear` | Limpar terreno (usando objeto Region) |
| `terrain_clear_region` | Limpar terreno (usando coordenadas min/max) |
| `terrain_replace_material` | Substituir material do terreno |
| `terrain_get_material_color` | Obter cor do material do terreno |
| `terrain_set_material_color` | Definir cor do material do terreno |
| `terrain_read_voxel` | Ler voxel unico |
| `terrain_read_voxels` | Ler dados de voxels |
| `terrain_write_voxels` | Escrever dados de voxels |
| `terrain_generate` | Gerar terreno proceduralmente |
| `terrain_smooth` | Suavizar terreno |

### Visualization (Visualizacao) - 7

| Ferramenta | Descricao |
|------------|-----------|
| `visualization_create_area` | Criar visualizacao de area |
| `visualization_create_marker` | Criar visualizacao de marcador (com preview) |
| `visualization_create_line` | Criar visualizacao de linha |
| `visualization_remove` | Remover visualizacao |
| `visualization_clear` | Remover todas as visualizacoes |
| `visualization_get_status` | Obter status da visualizacao |
| `visualization_focus` | Focar camera em item de visualizacao |
