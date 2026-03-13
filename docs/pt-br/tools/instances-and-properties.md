# Instancias e propriedades

> Busque, crie e edite instancias do Roblox Studio enquanto gerencia propriedades, atributos e tags.

## Tools incluidas

| Tool | Tier | Descricao |
|------|:----:|-----------|
| `query_instances` | Misto | Busca instancias, percorre a hierarquia e inspeciona informacoes de classe |
| `mutate_instances` | Misto | Cria, exclui, clona, move e renomeia instancias |
| `manage_properties` | Misto | Le e escreve propriedades, atributos e tags |

## Fluxos principais

### Entender a estrutura da cena

```
"Procure todos os Part dentro de Workspace e me diga a posicao e o tamanho."
```

Use `query_instances.search_class` para encontrar os Part e `manage_properties.mass_get` para ler `Position` e `Size` em lote.

### Posicionar objetos em lote

```
"Coloque 4 SpawnLocation em um quadrado no centro do mapa e defina um TeamColor diferente para cada um."
```

Use `mutate_instances.mass_create` para criar tudo em uma solicitacao e `manage_properties.mass_set` para definir as propriedades.

### Gerenciar por tag

```
"Encontre todos os objetos com a tag Collectible e mude Anchored para true."
```

Use `manage_properties.get_tagged` para reunir as instancias e `manage_properties.mass_set` para atualiza-las.

## Referencia de acoes

### Query Instances (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter propriedades da instancia por caminho | Basic |
| `children` | Obter filhos imediatos ou todos os descendentes | Basic |
| `find_child` | Buscar o primeiro filho por nome e filtro opcional de classe | Basic |
| `find_descendant` | Buscar o primeiro descendente por nome | Basic |
| `wait_for_child` | Esperar um filho aparecer (com timeout) | Basic |
| `class_info` | Obter informacoes de classe e propriedades validas | Basic |
| `search_name` | Buscar instancias por padrao de nome (com curingas) | Basic |
| `search_class` | Buscar instancias por nome de classe | Basic |
| `file_tree` | Obter estrutura de arvore de arquivos a partir da raiz | Pro |
| `project_structure` | Obter estrutura completa do projeto | Pro |
| `descendants` | Obter todos os descendentes de uma instancia | Pro |
| `ancestors` | Obter todos os ancestrais de uma instancia | Pro |
| `search_property` | Buscar instancias por valor de propriedade | Pro |
| `search_tag` | Buscar instancias por tag | Pro |

### Mutate Instances (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `create` | Criar uma nova instancia | Basic |
| `create_with_props` | Criar instancia com propriedades iniciais | Basic |
| `delete` | Excluir uma instancia | Basic |
| `clone` | Clonar uma instancia | Basic |
| `move` | Mover instancia para um novo pai | Basic |
| `rename` | Renomear uma instancia | Basic |
| `pivot` | Definir posicao de pivot ou CFrame | Basic |
| `create_tree` | Criar uma arvore hierarquica de instancias | Pro |
| `mass_create` | Criar varias instancias de uma vez | Pro |
| `mass_delete` | Excluir varias instancias | Pro |
| `mass_duplicate` | Duplicar varias instancias | Pro |
| `smart_duplicate` | Duplicar com espacamento e quantidade | Pro |

### Manage Properties (Misto)

| Acao | Descricao | Tier |
|------|-----------|------|
| `get` | Obter o valor de uma propriedade | Basic |
| `set` | Definir o valor de uma propriedade | Basic |
| `get_all` | Obter todas as propriedades de uma instancia | Basic |
| `set_multiple` | Definir varias propriedades de uma vez | Basic |
| `get_attr` | Obter o valor de um atributo | Basic |
| `set_attr` | Definir o valor de um atributo | Basic |
| `get_all_attrs` | Obter todos os atributos | Basic |
| `delete_attr` | Excluir um atributo | Basic |
| `add_tag` | Adicionar uma tag a uma instancia | Basic |
| `remove_tag` | Remover uma tag de uma instancia | Basic |
| `check_tag` | Verificar se uma instancia possui uma tag | Basic |
| `get_tags` | Obter todas as tags de uma instancia | Basic |
| `get_tagged` | Obter todas as instancias com uma tag especifica | Basic |
| `set_calculated` | Definir uma propriedade usando expressao matematica | Pro |
| `set_relative` | Definir uma propriedade relativa ao valor atual | Pro |
| `mass_set` | Definir uma propriedade em varias instancias | Pro |
| `mass_get` | Obter uma propriedade de varias instancias | Pro |
| `modify_children` | Modificar todos os filhos de um pai | Pro |

## Documentos relacionados

- [Scripts e execucao de codigo](scripting.md) - adicionar ou editar scripts em instancias
- [Assets e efeitos](assets-and-effects.md) - inserir modelos, tween e efeitos
- [Lista completa de tools](overview.md)
