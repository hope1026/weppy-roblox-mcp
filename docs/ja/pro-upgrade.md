# Proアップグレードガイド

## なぜProか？

### 実際の開発ワークフローのための双方向Sync

Pro Syncは単方向エクスポートを超えます。ローカルでスクリプトを編集してStudioに反映。Studioで変更してローカルに取り込む。Proが両側を常に同期します。

- **双方向Sync** — StudioとローカルファイルのSyncが双方向で変更を反映します。
- **タイプ別Direction** — Scripts、Values、Containers、Data、Servicesをそれぞれ独立して設定。
- **タイプ別Apply Mode** — タイプごとにAutoまたはManualを選択し、速度と制御のバランスを調整。
- **Full Sync / Resync** — 大規模変更や再接続後に即座にクリーンなプロジェクト状態を再構築。
- **変更履歴** — 適用前に何が、いつ、どの方向に変更されたかを追跡。
- **マルチ Place Sync** — 最大3つのRoblox Placeを同時にSync。各Placeは独立したストレージと変更履歴を持ちます。

### 高効率ワークフローでAIトークンを節約

一括/高度なアクションで繰り返し呼び出しを削減 — 1プロンプトでより多くの作業を。

### より広い高度な機能

地形生成、アセット検索、空間解析、アニメーション、オーディオ、大規模自動化。

## サブスク購入とダウンロード

### ステップ1: GumroadでProサブスクライセンスを購入

1. [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md) にアクセス
2. Proサブスクライセンスを購入

### ステップ2: GitHub Releasesからダウンロード

1. [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest) を開く
2. `weppy-roblox-mcp-v{version}.zip` をダウンロード
3. 解凍して `roblox-plugin/WeppyRobloxMCP.rbxm` を Roblox Plugins フォルダへコピー

### ステップ3: 確認

1. Roblox StudioでW-MCPを開く
2. Proバッジが表示されることを確認
3. Proアクション（例: `manage_sync`、一括操作）を実行

## 機能比較

| 機能 | Basic | Pro |
|-----|:-----:|:---:|
| Script、Instance、Property管理 | ✅ フル利用可 | ✅ フル利用可 |
| Selection、Tag、Camera、Log | ✅ フル利用可 | ✅ フル利用可 |
| Sync方向 | Studio → Local（片方向） | 双方向 |
| タイプ別Sync Direction | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| タイプ別Apply Mode | ❌ | ✅ Auto / Manual |
| Full Sync | ❌ | ✅ |
| Resync / 状態再構築 | ❌ | ✅ |
| 変更履歴 | ❌ | ✅ |
| マルチ Place Sync | ❌ | ✅ 最大3 Place、各Place独立ストレージ |
| プレイテスト制御（再生/停止/一時停止/再開） | ❌ | ✅ |
| 高度ツール範囲 | コア範囲 | より広い高度範囲 |
| AIトークン効率 | 標準 | 一括/高効率アクションで有利 |
