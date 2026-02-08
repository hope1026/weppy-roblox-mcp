# Visão Geral das Ferramentas

O Roblox MCP oferece **140 ferramentas** divididas em duas versões:

---

## Ferramentas Basic (68) — Gratuito

Ferramentas essenciais para desenvolvimento Roblox. Totalmente gratuitas.

### Gerenciamento de Objetos - 13

Crie, delete, clone, mova e renomeie instâncias no Studio.

| Ferramenta | Descrição |
|------------|-----------|
| `create_instance` | Cria uma nova instância |
| `create_instance_with_properties` | Cria instância com propriedades |
| `clone_instance` | Clona uma instância existente |
| `delete_instance` | Deleta uma instância |
| `move_instance` | Move instância para novo parent |
| `rename_instance` | Renomeia uma instância |
| `get_instance` | Obtém informações de uma instância |
| `get_instance_children` | Lista filhos de uma instância |
| `find_first_child` | Encontra primeiro filho por nome |
| `find_first_descendant` | Encontra primeiro descendente por nome |
| `get_class_info` | Obtém informações sobre uma classe |
| `wait_for_child` | Aguarda até filho aparecer |
| `pivot_to` | Define Pivot CFrame |

### Propriedades - 10

Leia e modifique propriedades e atributos de objetos.

| Ferramenta | Descrição |
|------------|-----------|
| `get_property` | Obtém valor de propriedade |
| `set_property` | Define valor de propriedade |
| `get_all_properties` | Lista todas propriedades |
| `set_multiple_properties` | Define várias propriedades |
| `set_calculated_property` | Define propriedade com valor calculado |
| `set_relative_property` | Define propriedade com valor relativo |
| `get_attribute` | Obtém atributo customizado |
| `set_attribute` | Define atributo customizado |
| `get_all_attributes` | Lista todos atributos |
| `delete_attribute` | Remove atributo |

### Scripts - 9

Crie, edite e analise scripts Luau.

| Ferramenta | Descrição |
|------------|-----------|
| `create_script` | Cria novo script |
| `get_script_source` | Lê código de um script |
| `set_script_source` | Substitui código do script |
| `delete_script` | Deleta script |
| `edit_script_lines` | Edita linhas específicas |
| `insert_script_lines` | Insere novas linhas |
| `delete_script_lines` | Remove linhas |
| `search_in_scripts` | Busca texto em scripts |
| `get_script_dependencies` | Obtém dependências |

### Controle do Studio - 12

Gerencie seleção, visualização e estado do Studio.

| Ferramenta | Descrição |
|------------|-----------|
| `get_selection` | Obtém objetos selecionados |
| `get_selection_context` | Contexto da seleção atual |
| `get_selection_details` | Detalhes completos da seleção |
| `set_selection` | Define seleção |
| `clear_selection` | Limpa seleção |
| `add_to_selection` | Adiciona à seleção |
| `remove_from_selection` | Remove da seleção |
| `get_place_info` | Informações do place |
| `get_services` | Lista serviços disponíveis |
| `get_studio_settings` | Configurações do Studio |
| `run_command` | Executa comando do Studio |
| `watch_selection` | Monitora alterações de seleção |

### Busca - 2

Encontre objetos por nome ou classe.

| Ferramenta | Descrição |
|------------|-----------|
| `search_by_name` | Busca por nome |
| `search_by_class` | Busca por classe |

### Tags - 5

Gerencie Collection Service tags.

| Ferramenta | Descrição |
|------------|-----------|
| `add_tag` | Adiciona tag |
| `remove_tag` | Remove tag |
| `get_tags` | Lista tags de instância |
| `get_tagged` | Encontra instâncias com tag |
| `has_tag` | Verifica se tem tag |

### Câmera - 4

Controle posição e foco da câmera.

| Ferramenta | Descrição |
|------------|-----------|
| `get_camera_info` | Informações da câmera |
| `get_suggested_camera_view` | Sugestão de visão de câmera |
| `focus_camera_path` | Foca em instância por caminho |
| `focus_camera_position` | Foca em posição do mundo |

### Logs - 3

Leia mensagens do Output do Studio.

| Ferramenta | Descrição |
|------------|-----------|
| `get_output_logs` | Obtém logs do Output |
| `clear_output_logs` | Limpa logs |
| `get_recent_errors` | Erros recentes |

### Conexão - 2

Monitore status da conexão.

| Ferramenta | Descrição |
|------------|-----------|
| `get_connection_info` | Status da conexão |
| `get_usage_status` | Estatísticas de uso |

---

## Ferramentas Pro (+72) — Upgrade Necessário

Ferramentas avançadas para desenvolvimento profissional.

👉 [Guia de Upgrade para Pro](../pro-upgrade.md)

### Scripts Avançados - 2

Análise de dependências e execução dinâmica.

| Ferramenta | Descrição |
|------------|-----------|
| `replace_in_scripts` | Substitui conteúdo em scripts em massa |
| `execute_script` | Executa código Luau diretamente |

### Busca Avançada - 6

Busca hierárquica e por propriedades.

| Ferramenta | Descrição |
|------------|-----------|
| `get_file_tree` | Árvore completa do projeto |
| `get_project_structure` | Estrutura do projeto |
| `search_by_property` | Busca por valor de propriedade |
| `search_by_tag` | Busca por tag |
| `get_descendants` | Lista todos descendentes |
| `get_ancestors` | Lista ancestrais |

### Operações em Massa - 8

Execute ações em centenas de objetos simultaneamente.

| Ferramenta | Descrição |
|------------|-----------|
| `mass_create_instances` | Cria múltiplas instâncias |
| `mass_delete_instances` | Deleta múltiplas instâncias |
| `mass_set_property` | Define propriedade em massa |
| `mass_get_property` | Obtém propriedade em massa |
| `mass_duplicate` | Duplica múltiplos objetos |
| `smart_duplicate` | Duplicação inteligente com offset |
| `batch_execute` | Executa múltiplos comandos |
| `modify_children` | Modifica todos filhos |

### Assets - 7

Busque e insira modelos do Creator Store.

| Ferramenta | Descrição |
|------------|-----------|
| `insert_model` | Insere modelo por ID |
| `get_asset_info` | Informações sobre asset |
| `search_creator_store` | Busca no marketplace |
| `search_and_insert_model` | Busca e insere automaticamente |
| `insert_free_model` | Insere modelo gratuito |
| `insert_package` | Insere package |
| `export_selection` | Exporta seleção |

### Ambiente - 5

Configure iluminação, atmosfera e tempo.

| Ferramenta | Descrição |
|------------|-----------|
| `set_lighting` | Define propriedades de iluminação |
| `set_atmosphere` | Define propriedades de Atmosphere |
| `set_sky` | Define propriedades de Sky |
| `set_terrain` | Define propriedades de Terrain |
| `set_time_of_day` | Define horário do dia |

### Gerenciamento de Estado - 9

Snapshots, histórico e sincronização.

| Ferramenta | Descrição |
|------------|-----------|
| `sync_workspace_state` | Sincroniza estado do Workspace |
| `get_workspace_snapshot` | Captura snapshot |
| `get_recent_changes` | Lista mudanças recentes |
| `clear_change_history` | Limpa histórico de alterações |
| `get_viewport_info` | Informações do viewport |
| `get_workspace_metadata` | Metadados do Workspace |
| `get_script_list` | Lista de scripts |
| `get_selection_info` | Informações de seleção |
| `clear_state_cache` | Limpa cache de estado |

### Análise Espacial - 5

Detecção de colisão e análise geométrica.

| Ferramenta | Descrição |
|------------|-----------|
| `get_spatial_map` | Mapa espacial da área |
| `find_empty_space` | Encontra espaço vazio |
| `get_bounds` | Limites de objetos |
| `snap_to_grid` | Ajusta à grade |
| `check_collision` | Verifica colisão |

### Raycast - 8

Raycasting avançado e detecção de superfície.

| Ferramenta | Descrição |
|------------|-----------|
| `raycast` | Dispara raio |
| `find_ground` | Encontra chão |
| `check_placement` | Verifica posicionamento |
| `multi_raycast` | Múltiplos raycasts |
| `scan_area` | Escaneia área |
| `find_flat_areas` | Áreas planas |
| `find_spawn_positions` | Posições de spawn |
| `analyze_walkable_area` | Área navegável |

### Terreno - 14

Geração e edição procedural de terreno.

| Ferramenta | Descrição |
|------------|-----------|
| `terrain_fill_block` | Preenche bloco |
| `terrain_fill_ball` | Preenche esfera |
| `terrain_fill_cylinder` | Preenche cilindro |
| `terrain_fill_wedge` | Preenche cunha |
| `terrain_clear` | Limpa tudo |
| `terrain_clear_region` | Limpa região |
| `terrain_replace_material` | Substitui material |
| `terrain_get_material_color` | Cor do material |
| `terrain_set_material_color` | Define cor do material |
| `terrain_read_voxel` | Lê voxel |
| `terrain_read_voxels` | Lê voxels |
| `terrain_write_voxels` | Escreve voxels |
| `terrain_generate` | Geração procedural |
| `terrain_smooth` | Suaviza terreno |

### Visualização - 7

Helpers visuais para debug e desenvolvimento.

| Ferramenta | Descrição |
|------------|-----------|
| `visualization_create_area` | Cria área visual |
| `visualization_create_marker` | Cria marcador |
| `visualization_create_line` | Cria linha |
| `visualization_remove` | Remove visualização |
| `visualization_clear` | Limpa tudo |
| `visualization_get_status` | Status de visualizações |
| `visualization_focus` | Foca em visualização |
