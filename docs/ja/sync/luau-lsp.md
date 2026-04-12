# WEPPY Sync で `luau-lsp` を使う

WEPPY Sync は `luau-lsp` が必要とする sourcemap ファイルを自動生成できるため、別の Rojo プロジェクトを用意しなくても Roblox 対応のエディタ機能を利用できます。

## WEPPY が書き出すファイル

Full Sync が完了すると、WEPPY は次のファイルを書き出します。

- Place sourcemap: `weppy-project-sync/place_<id>/sourcemap.json`
- ルート代表ファイル: `weppy-project-sync/sourcemap.json`

ほとんどのユーザーには `weppy-project-sync/sourcemap.json` の利用を推奨します。

## 何が改善されるか

`luau-lsp` が WEPPY sourcemap を読むと、次の点が改善されます。

- `game.*` の補完
- 同期済みスクリプト間のナビゲーション
- 同期済みスクリプト同士の `require` 解決

## 推奨セットアップ

1. WEPPY が `weppy-project-sync/sourcemap.json` を生成できるように、まず Full Sync を 1 回実行します。
2. エディタの `luau-lsp` sourcemap 設定で `weppy-project-sync/sourcemap.json` を指定します。
3. 利用中のクライアントで自動 Rojo 生成を無効にできる場合は、`luau-lsp.sourcemap.autogenerate` を `false` に設定します。

VSCode 設定例:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "weppy-project-sync/sourcemap.json"
}
```

## Multi-place メモ

`weppy-project-sync/sourcemap.json` は、プロジェクトの現在の代表 place に追従します。
特定の place に固定したい場合は、その place の `weppy-project-sync/place_<id>/sourcemap.json` を `luau-lsp` から直接指定してください。
