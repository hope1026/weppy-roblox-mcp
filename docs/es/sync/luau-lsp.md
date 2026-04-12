# Usar `luau-lsp` con WEPPY Sync

WEPPY Sync puede generar automaticamente los archivos sourcemap que necesita `luau-lsp`, para que puedas activar funciones de editor con contexto de Roblox sin preparar un proyecto Rojo aparte.

## Que escribe WEPPY

Despues de que termina Full Sync, WEPPY escribe:

- Place sourcemap: `weppy-project-sync/place_<id>/sourcemap.json`
- Archivo representante en la raiz: `weppy-project-sync/sourcemap.json`

Para la mayoria de usuarios, la ruta recomendada es `weppy-project-sync/sourcemap.json`.

## Que mejora

Cuando `luau-lsp` usa el sourcemap de WEPPY, mejora:

- Autocomplete de `game.*`
- Navegacion entre scripts sincronizados
- Resolucion de `require` entre scripts sincronizados

## Configuracion recomendada

1. Ejecuta Full Sync una vez para que WEPPY cree `weppy-project-sync/sourcemap.json`.
2. Haz que la configuracion de sourcemap de `luau-lsp` en tu editor apunte a `weppy-project-sync/sourcemap.json`.
3. Si tu cliente puede desactivar la generacion automatica con Rojo, establece `luau-lsp.sourcemap.autogenerate` en `false`.

Ejemplo de configuracion en VSCode:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "weppy-project-sync/sourcemap.json"
}
```

## Nota sobre Multi-place

`weppy-project-sync/sourcemap.json` sigue el place representante actual del proyecto.
Si necesitas fijarlo a un place especifico, apunta `luau-lsp` directamente a `weppy-project-sync/place_<id>/sourcemap.json`.
