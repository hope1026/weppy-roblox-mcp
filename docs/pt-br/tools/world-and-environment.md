# Mundo e ambiente

> Construa e inspecione o mundo do jogo com lighting, terrain, consultas espaciais e ferramentas de camera.

## Tools incluidas

| Tool | Tier | Descricao |
|------|:----:|-----------|
| `manage_lighting` | Pro | Configura Lighting, Atmosphere, Sky e hora do dia |
| `manage_terrain` | Pro | Gera e edita terrain, incluindo dados voxel |
| `spatial_query` | Pro | Raycasts, busca de solo, validacao de posicionamento e mapas de altura |
| `manage_camera` | Basic | Inspeciona o estado da camera, move o foco e sugere visoes |

## Fluxos principais

### Definir a atmosfera (Pro)

```
"Mude o mapa para um clima de por do sol com ceu laranja, nevoa mais densa e horario 18:00."
```

Use `manage_lighting.time` para a hora, `manage_lighting.atmosphere` para a nevoa e `manage_lighting.sky` para o ceu.

### Construir terrain (Pro)

```
"Crie uma colina de grama com raio 200 no centro do mapa e coloque agua ao redor."
```

Use `manage_terrain.fill_ball` para a colina e `manage_terrain.fill_block` para a agua ao redor.

### Validar posicionamento (Pro)

```
"Encontre uma area plana onde eu possa colocar este predio."
```

Use `spatial_query.find_flat` para achar candidatos, `spatial_query.check_placement` para valida-los e `manage_camera.focus_position` para inspecao visual.

## Referencia de acoes

### Manage Lighting (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `lighting` | Definir propriedades do servico Lighting | Pro |
| `atmosphere` | Definir propriedades de Atmosphere | Pro |
| `sky` | Definir propriedades de Sky | Pro |
| `terrain_props` | Definir propriedades visuais e de agua de Terrain | Pro |
| `time` | Definir hora do dia | Pro |

### Manage Terrain (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `fill_block` | Preencher terrain em forma de bloco | Pro |
| `fill_ball` | Preencher terrain em forma de esfera | Pro |
| `fill_cylinder` | Preencher terrain em forma de cilindro | Pro |
| `fill_wedge` | Preencher terrain em forma de cunha | Pro |
| `clear_region` | Limpar terrain em uma regiao | Pro |
| `clear_bounds` | Limpar terrain dentro de limites | Pro |
| `replace_material` | Substituir material em uma regiao | Pro |
| `colors_get` | Obter cores de material | Pro |
| `colors_set` | Definir cores de material | Pro |
| `read_voxel` | Ler um voxel individual | Pro |
| `read_voxels` | Ler dados voxel em lote | Pro |
| `write_voxels` | Escrever dados voxel em lote | Pro |
| `generate` | Gerar terrain procedural | Pro |
| `smooth` | Suavizar terrain | Pro |

### Spatial Query (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `raycast` | Lancar um unico raio | Pro |
| `find_ground` | Encontrar a posicao do solo abaixo de um ponto | Pro |
| `check_placement` | Verificar se um posicionamento esta livre de colisao | Pro |
| `multi_raycast` | Lancar varios raios em lote | Pro |
| `scan_area` | Gerar um mapa de altura de uma area | Pro |
| `find_flat` | Encontrar areas planas para construir | Pro |
| `find_spawn` | Encontrar posicoes de spawn adequadas | Pro |
| `analyze_walkable` | Analisar uma grade de navegacao | Pro |
| `spatial_map` | Obter todas as posicoes de BasePart | Pro |
| `find_space` | Encontrar espaco vazio para um objeto | Pro |
| `bounds` | Obter caixas delimitadoras de instancias | Pro |
| `snap_grid` | Ajustar uma posicao a grade | Pro |
| `collision` | Verificar colisao AABB | Pro |

### Manage Camera (Basic)

| Acao | Descricao | Tier |
|------|-----------|------|
| `info` | Obter posicao, rotacao, FOV e tamanho do viewport da camera | Basic |
| `focus_path` | Mover a camera para focar uma instancia | Basic |
| `focus_position` | Mover a camera para focar uma posicao | Basic |
| `suggest` | Obter uma visao de camera sugerida para um alvo | Basic |

## Documentos relacionados

- [Instancias e propriedades](instances-and-properties.md) - posicionar objetos do mundo
- [Assets e efeitos](assets-and-effects.md) - adicionar efeitos, audio e animacao
- [Lista completa de tools](overview.md)
