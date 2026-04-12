# WEPPY Roblox Explorer (VSCode拡張)

Roblox StudioのExplorerと同じインスタンスツリーをVSCodeで表示できる拡張機能です。同期済みインスタンスの探索、スクリプトの直接開封、Sync状態の確認をエディタ内で行えます。
この拡張はWEPPY用のcompanion拡張であり、単体のRoblox連携ツールではありません。

![WEPPY Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## 要件

- VSCode 1.85+
- [Roblox MCP](../../../README.md) をインストールし、Syncを有効化 (BasicまたはPro)
- プロジェクトルート配下に Sync により `weppy-project-sync/place_*/.sync-meta.json` が生成済みであること

## インストール方法

VSCode Extensionsサイドバー（`Ctrl+Shift+X` / `Cmd+Shift+X`）で **WEPPY Roblox Explorer** を検索し、**Install** をクリックします。

または次のマーケットプレイスから直接インストールできます。

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

基本のツリー閲覧はディスク上のsyncファイルだけで動作します。ローカルMCPサーバーに接続できる場合は、live sync状態、direction表示、Explorerテレメトリ転送も利用できます。

## 機能

- **インスタンスツリー**: Roblox Studioと同一のサービス/インスタンス階層
- **Robloxクラスアイコン**: 200以上のクラスアイコン（ダーク/ライトテーマ対応）
- **マルチPlace**: 同期済みPlaceごとにツリールートを分離
- **クリックでファイルを開く**: `.server.luau`、`.client.luau`、`.module.luau`、`.props.json`などを直接開く
- **インスタンス検索**: 全サービスにわたるQuickPick検索
- **Sync状態バッジ**: `modified`、`studio`、`conflict`の状態を一目で確認
- **自動更新**: Syncファイルの変更時にツリーを自動更新（500msデバウンス）
- **インスタンスパスコピー**: 右クリックで`game.Workspace.Part`形式のパスをコピー

## 設定

| 設定 | デフォルト | 説明 |
|------|-----------|------|
| `robloxExplorer.syncRoot` | `""` | `weppy-project-sync` ルートの絶対パス。空の場合は自動検出します。WEPPY は `{projectRoot}/weppy-project-sync` を使います。 |
| `robloxExplorer.hidePropsFiles` | `false` | デフォルトのVSCodeエクスプローラーでSyncファイル（`.props.json`、`_tree.json`、`.value.json`）を非表示にする。 |
| `robloxExplorer.autoRefresh` | `true` | Syncファイルの変更時にツリーを自動更新する。 |
| `robloxExplorer.showSyncStatus` | `true` | ツリー項目にSync状態のデコレーションを表示する。 |

## コマンド

| コマンド | 説明 |
|---------|------|
| `WEPPY Explorer: Refresh` | インスタンスツリーを手動で更新 |
| `WEPPY Explorer: Search Instances` | 全サービスでインスタンスを検索 |
| `WEPPY Explorer: Open Backing File` | 選択したインスタンスのファイルを開く |
| `WEPPY Explorer: Copy Instance Path` | 完全なインスタンスパスをコピー（例: `game.Workspace.Part`） |
| `WEPPY Explorer: Reveal in Explorer` | デフォルトのVSCodeエクスプローラーでファイルを表示 |

## 関連ドキュメント

- [Sync詳細ガイド](../sync/overview.md)
- [インストールガイド](README.md)
