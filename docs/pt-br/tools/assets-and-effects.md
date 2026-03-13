# Assets e efeitos

> Insira assets e controle tween, audio, particulas, animacao e grupos de colisao.

## Tools incluidas

| Tool | Tier | Descricao |
|------|:----:|-----------|
| `manage_assets` | Pro | Busca na Creator Store, insere modelos e pacotes, consulta info do asset |
| `manage_tween` | Pro | Cria, reproduz, pausa e cancela tweens |
| `manage_animation` | Pro | Carrega, reproduz, para e inspeciona tracks de animacao |
| `manage_audio` | Pro | Reproduz, para, pausa e retoma sons; configura o listener |
| `manage_effects` | Pro | Emite particulas, limpa efeitos e alterna seu estado |
| `manage_physics` | Pro | Registra grupos de colisao e configura colisoes |

## Fluxos principais

### Montar uma cena com assets

```
"Busque um modelo de arvore na Creator Store e coloque tres no Workspace."
```

Use `manage_assets.search_insert` para buscar e inserir em um unico passo.

### Criar uma interacao visual

```
"Faca a porta abrir com um tween de 3 segundos quando for clicada."
```

Use `manage_tween.create` para definir o movimento e `manage_tween.play` para reproduzi-lo. Voce pode combinar com `manage_audio.play` para o som.

### Combinar particulas e audio

```
"Reproduza um som de explosao e emita particulas quando o boss aparecer."
```

Use `manage_effects.emit` para as particulas e `manage_audio.play` para o som.

## Referencia de acoes

### Manage Assets (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `insert` | Inserir um modelo por ID de asset | Pro |
| `info` | Obter metadados do asset | Pro |
| `search` | Buscar na Creator Store | Pro |
| `search_insert` | Buscar e inserir a primeira correspondencia | Pro |
| `insert_free` | Inserir um modelo gratuito | Pro |
| `insert_package` | Inserir um pacote | Pro |
| `export` | Exportar a selecao atual | Pro |

### Manage Tween (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `create` | Criar um tween com propriedades alvo | Pro |
| `play` | Reproduzir um tween criado | Pro |
| `pause` | Pausar um tween em execucao | Pro |
| `cancel` | Cancelar um tween | Pro |

### Manage Animation (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `load` | Carregar uma animacao em Humanoid ou AnimationController | Pro |
| `play` | Reproduzir um track de animacao carregado | Pro |
| `stop` | Parar uma animacao em reproducao | Pro |
| `get_tracks` | Listar todos os tracks de animacao carregados | Pro |

### Manage Audio (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `play` | Reproduzir um som e criar `Sound` se necessario | Pro |
| `stop` | Parar um som em reproducao | Pro |
| `pause` | Pausar um som em reproducao | Pro |
| `resume` | Retomar um som pausado | Pro |
| `set_listener` | Definir o tipo ou alvo do listener de audio | Pro |

### Manage Effects (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `emit` | Emitir particulas a partir de `ParticleEmitter` | Pro |
| `clear` | Limpar todas as particulas | Pro |
| `toggle` | Ativar ou desativar um efeito | Pro |

### Manage Physics (Pro)

| Acao | Descricao | Tier |
|------|-----------|------|
| `register_group` | Registrar um grupo de colisao | Pro |
| `set_collidable` | Definir se dois grupos podem colidir | Pro |
| `get_groups` | Listar todos os grupos de colisao registrados | Pro |

## Documentos relacionados

- [Instancias e propriedades](instances-and-properties.md) - criar e posicionar objetos
- [Mundo e ambiente](world-and-environment.md) - iluminacao, terrain e camera
- [Lista completa de tools](overview.md)
