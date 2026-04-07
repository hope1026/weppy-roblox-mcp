# Usar `luau-lsp` com WROX Sync

O WROX Sync pode gerar automaticamente os arquivos sourcemap que o `luau-lsp` precisa, para que voce habilite recursos de editor com contexto de Roblox sem montar um projeto Rojo separado.

## O que o WROX grava

Depois que o Full Sync termina, o WROX grava:

- Place sourcemap: `wrox-project-sync/place_<id>/sourcemap.json`
- Arquivo representativo da raiz: `wrox-project-sync/sourcemap.json`

Para a maioria dos usuarios, o caminho recomendado e `wrox-project-sync/sourcemap.json`.

## O que melhora

Quando o `luau-lsp` usa o sourcemap do WROX, melhora:

- Autocomplete de `game.*`
- Navegacao entre scripts sincronizados
- Resolucao de `require` entre scripts sincronizados

## Configuracao recomendada

1. Execute o Full Sync uma vez para que o WROX crie `wrox-project-sync/sourcemap.json`.
2. Aponte a configuracao de sourcemap do `luau-lsp` no seu editor para `wrox-project-sync/sourcemap.json`.
3. Se o seu cliente puder desativar a geracao automatica com Rojo, defina `luau-lsp.sourcemap.autogenerate` como `false`.

Exemplo de configuracao no VSCode:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "wrox-project-sync/sourcemap.json"
}
```

## Observacao sobre Multi-place

`wrox-project-sync/sourcemap.json` acompanha o place representativo atual do projeto.
Se voce precisar fixar um place especifico, aponte o `luau-lsp` diretamente para `wrox-project-sync/place_<id>/sourcemap.json`.
