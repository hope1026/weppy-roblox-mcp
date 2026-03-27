# WROX Roblox Explorer (Extensión VSCode)

Vista de árbol de instancias similar al Explorer de Roblox Studio, dentro de VSCode. Navega instancias sincronizadas, abre scripts directamente y consulta el estado de sincronización sin salir del editor.
Esta es una extensión complementaria para WROX, no una integración de Roblox independiente.

![WROX Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Requisitos

- VSCode 1.85+
- [Roblox MCP](../../../README.md) instalado con Sync habilitado (Basic o Pro)
- `roblox-project-sync/place_*/.sync-meta.json` ya generado por Sync

## Instalación

Busca **WROX Roblox Explorer** en la barra lateral de Extensiones de VSCode (`Ctrl+Shift+X` / `Cmd+Shift+X`) y haz clic en **Install**.

O instala directamente desde estos marketplaces:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

La navegación básica del árbol funciona con los archivos sincronizados en disco. El estado sync en vivo, los indicadores de direction y el reenvío de telemetría del Explorer están disponibles cuando el servidor MCP local es accesible.

## Características

- **Árbol de instancias**: Jerarquía de servicios/instancias idéntica a Roblox Studio
- **Iconos de clases Roblox**: Más de 200 iconos con soporte de tema oscuro/claro
- **Multi-Place**: Raíces de árbol separadas por cada Place sincronizado
- **Abrir al hacer clic**: Abre archivos de respaldo (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`)
- **Búsqueda de instancias**: Búsqueda QuickPick en todos los servicios
- **Insignias de estado Sync**: Visualiza los estados `modified`, `studio`, `conflict` de un vistazo
- **Actualización automática**: El árbol se actualiza automáticamente cuando cambian los archivos Sync (debounce 500ms)
- **Copiar ruta de instancia**: Clic derecho para copiar rutas tipo `game.Workspace.Part`

## Configuración

| Configuración | Valor por defecto | Descripción |
|---------------|-------------------|-------------|
| `robloxExplorer.syncRoot` | `""` | Ruta absoluta a la raíz de `roblox-project-sync`. Se detecta automáticamente si está vacío. |
| `robloxExplorer.hidePropsFiles` | `false` | Oculta los archivos de Sync (`.props.json`, `_tree.json`, `.value.json`) en el explorador predeterminado de VSCode. |
| `robloxExplorer.autoRefresh` | `true` | Actualiza automáticamente el árbol cuando cambian los archivos Sync. |
| `robloxExplorer.showSyncStatus` | `true` | Muestra decoraciones de estado Sync en los elementos del árbol. |

## Comandos

| Comando | Descripción |
|---------|-------------|
| `WROX Explorer: Refresh` | Actualizar manualmente el árbol de instancias |
| `WROX Explorer: Search Instances` | Buscar instancias en todos los servicios |
| `WROX Explorer: Open Backing File` | Abrir el archivo de respaldo de una instancia seleccionada |
| `WROX Explorer: Copy Instance Path` | Copiar la ruta completa de la instancia (ej. `game.Workspace.Part`) |
| `WROX Explorer: Reveal in Explorer` | Mostrar el archivo en el explorador predeterminado de VSCode |

## Relacionado

- [Guía detallada de Sync](../sync/overview.md)
- [Guía de instalación](README.md)
