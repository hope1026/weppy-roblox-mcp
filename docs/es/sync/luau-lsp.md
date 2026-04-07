# Usar `luau-lsp` con WROX Sync

WROX Sync puede generar automaticamente los archivos sourcemap que necesita `luau-lsp`, para que puedas activar funciones de editor con contexto de Roblox sin preparar un proyecto Rojo aparte.

## Que escribe WROX

Despues de que termina Full Sync, WROX escribe:

- Place sourcemap: `wrox-project-sync/place_<id>/sourcemap.json`
- Archivo representante en la raiz: `wrox-project-sync/sourcemap.json`

Para la mayoria de usuarios, la ruta recomendada es `wrox-project-sync/sourcemap.json`.

## Que mejora

Cuando `luau-lsp` usa el sourcemap de WROX, mejora:

- Autocomplete de `game.*`
- Navegacion entre scripts sincronizados
- Resolucion de `require` entre scripts sincronizados

## Configuracion recomendada

1. Ejecuta Full Sync una vez para que WROX cree `wrox-project-sync/sourcemap.json`.
2. Haz que la configuracion de sourcemap de `luau-lsp` en tu editor apunte a `wrox-project-sync/sourcemap.json`.
3. Si tu cliente puede desactivar la generacion automatica con Rojo, establece `luau-lsp.sourcemap.autogenerate` en `false`.

Ejemplo de configuracion en VSCode:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "wrox-project-sync/sourcemap.json"
}
```

## Nota sobre Multi-place

`wrox-project-sync/sourcemap.json` sigue el place representante actual del proyecto.
Si necesitas fijarlo a un place especifico, apunta `luau-lsp` directamente a `wrox-project-sync/place_<id>/sourcemap.json`.
