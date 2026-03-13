# Assets & Effects

> Insert assets and control tweening, audio, particles, animation, and collision groups.

## Included Tools

| Tool | Tier | Description |
|------|:----:|-------------|
| `manage_assets` | Pro | Search Creator Store, insert models and packages, inspect asset info |
| `manage_tween` | Pro | Create, play, pause, and cancel tweens |
| `manage_animation` | Pro | Load, play, stop, and inspect animation tracks |
| `manage_audio` | Pro | Play, stop, pause, and resume sounds; set the audio listener |
| `manage_effects` | Pro | Emit particles, clear effects, and toggle effect state |
| `manage_physics` | Pro | Register collision groups and configure collisions |

## Key Workflows

### Build a scene with assets

```
"Search Creator Store for a tree model and place three of them in Workspace."
```

Use `manage_assets.search_insert` to search and insert in a single step.

### Create interactive set pieces

```
"Make the door open with a 3-second tween when clicked."
```

Use `manage_tween.create` to define the motion, then `manage_tween.play` to trigger it. Pair it with `manage_audio.play` for a matching sound effect.

### Combine particles and audio

```
"Play an explosion sound and emit burst particles when the boss appears."
```

Use `manage_effects.emit` for the particles and `manage_audio.play` for the sound in the same workflow.

## Action Reference

### Manage Assets (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `insert` | Insert a model by asset ID | Pro |
| `info` | Get asset metadata | Pro |
| `search` | Search Creator Store | Pro |
| `search_insert` | Search and insert the first match | Pro |
| `insert_free` | Insert a free model | Pro |
| `insert_package` | Insert a package | Pro |
| `export` | Export the current selection | Pro |

### Manage Tween (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `create` | Create a tween with target properties | Pro |
| `play` | Play a created tween | Pro |
| `pause` | Pause a running tween | Pro |
| `cancel` | Cancel a tween | Pro |

### Manage Animation (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `load` | Load animation on a Humanoid or AnimationController | Pro |
| `play` | Play a loaded animation track | Pro |
| `stop` | Stop a playing animation | Pro |
| `get_tracks` | List all loaded animation tracks | Pro |

### Manage Audio (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `play` | Play a sound and create `Sound` if needed | Pro |
| `stop` | Stop a playing sound | Pro |
| `pause` | Pause a playing sound | Pro |
| `resume` | Resume a paused sound | Pro |
| `set_listener` | Set the audio listener type or target | Pro |

### Manage Effects (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `emit` | Emit particles from a `ParticleEmitter` | Pro |
| `clear` | Clear all particles | Pro |
| `toggle` | Enable or disable an effect | Pro |

### Manage Physics (Pro)

| Action | Description | Tier |
|--------|-------------|------|
| `register_group` | Register a collision group | Pro |
| `set_collidable` | Set whether two groups can collide | Pro |
| `get_groups` | List all registered collision groups | Pro |

## Related Docs

- [Instances & Properties](instances-and-properties.md) - create and place objects
- [World & Environment](world-and-environment.md) - lighting, terrain, and camera
- [Tools Reference](overview.md)
