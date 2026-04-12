# Guia detallada de WEPPY Roblox Explorer

**WEPPY Roblox Explorer** es una extension complementaria para VSCode / Antigravity que replica el arbol del Explorer de Roblox Studio dentro de tu editor. Explora instancias sincronizadas, abre scripts y edita propiedades sin tener que alternar entre Studio y el editor.

> **Opcional** — Explorer no es obligatorio. El servidor MCP y el plugin de Roblox Studio son suficientes para usar todas las funciones principales. Instala Explorer cuando quieras navegar la estructura del proyecto o revisar y editar propiedades directamente desde tu editor.

![WEPPY Roblox Explorer — arbol de instancias de Studio en la barra lateral de VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## Por que usar Explorer

Los agentes de IA pueden entender el contexto completo del proyecto a partir de los archivos generados por Sync, pero cuando una persona explora el mirror directamente, las rutas de archivo por si solas no siempre dejan clara la jerarquia. Explorer reutiliza los mismos datos de sync y los presenta con la **misma estructura que ves en Roblox Studio**, lo que facilita:

- Ver de un vistazo a que servicio / instancia pertenece cada script
- Localizar rapidamente instancias entre servicios por nombre o ruta
- Revisar el estado de sincronizacion por archivo (modified / studio / conflict)
- Editar propiedades sin tener que abrir Studio

## Requisitos

- VSCode 1.85+ o Antigravity
- [Roblox MCP](../installation/README.md) instalado con Sync habilitado (Basic o Pro)
- Un archivo `weppy-project-sync/place_*/.sync-meta.json` generado por Sync bajo la raiz de tu proyecto

Explorer funciona usando solo los archivos de sync en disco. Cuando el servidor MCP local esta en ejecucion, tambien se reflejan el estado de sync en vivo y la informacion de direction.

## Instalacion

Busca **WEPPY Roblox Explorer** en la barra lateral de Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`) de VSCode o Antigravity y haz clic en **Install**.

Enlaces directos al marketplace:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

## Navegar el arbol de instancias

Despues de la instalacion aparece una vista **WEPPY Explorer** en la Activity Bar de VSCode que detecta automaticamente el directorio de sync desde la raiz del proyecto.

- **Raices de servicios**: Los servicios sincronizados como `Workspace`, `ReplicatedStorage` y `ServerScriptService` aparecen en el nivel superior.
- **Iconos de clases Roblox**: Mas de 200 iconos al estilo Studio que cambian automaticamente entre tema oscuro y claro.
- **Multi Place**: Cada Place sincronizado se muestra con su propia raiz de arbol cuando hay mas de uno.
- **Actualizacion automatica**: El arbol se actualiza con un debounce de 500ms cuando los archivos de sync cambian.
- **Insignias de estado sync**: Los estados `modified`, `studio` y `conflict` aparecen junto al icono para detectar cambios y conflictos al instante.

Al hacer clic en un elemento del arbol se abre el archivo que respalda la instancia (`.server.luau`, `.client.luau`, `.module.luau`, `.props.json`, ...). El menu contextual permite copiar la ruta de la instancia en formato `game.Workspace.Part` o mostrar el archivo en el explorador predeterminado de VSCode.

## Panel de propiedades

Selecciona una instancia en el arbol del Explorer y ejecuta **Open Properties** para abrir un panel que se ve como la ventana Properties de Studio. Puedes inspeccionar y editar propiedades agrupadas sin tocar directamente el archivo `.props.json`.

![Panel de propiedades — edita propiedades al estilo Studio dentro de VSCode](../../assets/screenshots/roblox-explorer/roblox-explorer-property-window.png)

- **Vista agrupada**: Las propiedades se ordenan en los mismos grupos que usa Studio (Appearance, Behavior, Data, Part, Transform, etc.).
- **Editores por tipo**: Los controles de entrada se adaptan al tipo de la propiedad: numeros, cadenas, booleanos, colores, Vector3, enums y mas.
- **Edicion basada en archivos**: Los cambios se guardan en el archivo `*.props.json` de la instancia y se propagan a Studio a traves del camino reverso de Sync (Pro, cuando bidirectional esta habilitado).
- **Editor personalizado**: Abrir un archivo `.props.json` directamente carga el Panel de propiedades en lugar del editor de texto predeterminado.

Si quieres que el Panel de propiedades se abra automaticamente al navegar el arbol, cambia `robloxExplorer.propertyPanel.autoOpen` a `true` en la configuracion.

## Busqueda de instancias

Ejecuta el comando `WEPPY Explorer: Search Instances` (desde el icono del encabezado de la vista o la Command Palette) para abrir un QuickPick que busca a traves de todos los servicios sincronizados.

- Coincidencias parciales sobre los nombres de instancia
- Seleccionar un resultado enfoca el arbol en el elemento correspondiente
- Cuando hay varios places sincronizados, los resultados se limitan por place

## Configuracion

| Ajuste | Valor por defecto | Descripcion |
|--------|-------------------|-------------|
| `robloxExplorer.mcpBaseUrl` | `""` | URL HTTP base del MCP local. Si esta vacio, Explorer prueba `http://127.0.0.1:3002` y luego `http://127.0.0.1:3003`. |
| `robloxExplorer.syncRoot` | `""` | Ruta absoluta a la raiz `weppy-project-sync`. Se detecta desde las carpetas del workspace si esta vacia. |
| `robloxExplorer.hidePropsFiles` | `false` | Oculta los archivos de sync (`.props.json`, `_tree.json`, `.value.json`) en el explorador predeterminado de VSCode. |
| `robloxExplorer.autoRefresh` | `true` | Actualiza el arbol automaticamente cuando cambian los archivos de sync. |
| `robloxExplorer.showSyncStatus` | `true` | Muestra decoraciones de estado de sync en los elementos del arbol. |
| `robloxExplorer.followFocusCue` | `false` | Sigue archivos externos de focus cue para expandir el arbol y abrir archivos relacionados. |
| `robloxExplorer.propertyPanel.autoOpen` | `false` | Abre automaticamente el Panel de propiedades al seleccionar una instancia en el arbol. |

## Comandos

| Comando | Descripcion |
|---------|-------------|
| `WEPPY Explorer: Refresh` | Refresca manualmente el arbol de instancias |
| `WEPPY Explorer: Search Instances` | Busca instancias a traves de todos los servicios |
| `WEPPY Explorer: Open Backing File` | Abre el archivo de la instancia seleccionada |
| `WEPPY Explorer: Open Properties` | Abre el Panel de propiedades de la instancia seleccionada |
| `WEPPY Explorer: Copy Instance Path` | Copia la ruta completa de la instancia (p. ej. `game.Workspace.Part`) |
| `WEPPY Explorer: Reveal in Explorer` | Muestra el archivo en el explorador predeterminado de VSCode |
| `WEPPY Explorer: Collapse All` | Contrae todos los nodos del arbol |
| `WEPPY Explorer: Open Settings` | Abre la pagina de ajustes de Explorer |

## Resolucion de problemas

- **El arbol esta vacio**: Verifica que exista el directorio `weppy-project-sync/place_*` y que Sync haya completado al menos un Full Sync. Define `robloxExplorer.syncRoot` manualmente si es necesario.
- **No aparece el estado de sync**: Asegurate de que el servidor MCP local este en ejecucion y prueba a configurar `robloxExplorer.mcpBaseUrl` de forma explicita.
- **El Panel de propiedades no se abre**: Si un archivo `.props.json` se abre en el editor de texto predeterminado, haz clic derecho sobre el y elige **Reopen Editor With... → WEPPY Property Panel**.
- **Los iconos se ven rotos**: Vuelve a seleccionar el tema de VSCode o reinicia la ventana para refrescar la cache de iconos.

## Documentos relacionados

- [Guia de instalacion de Roblox MCP](../installation/README.md)
- [Guia de Sync](../sync/overview.md)
- [Resumen de herramientas](../tools/overview.md)
