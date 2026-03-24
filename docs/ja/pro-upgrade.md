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

### AIがプレイテストを直接制御

StudioのプレイテストをAIが実行・検証します。F5(Play)/F8(Run)の開始/停止はもちろん、テストスクリプトを注入してログを収集し、レポートまで自動生成します。

- 「Runモードでプレイテストを開始して、NPCが目標地点に到達するか確認して。」
- 「SpawnLocationが地面の上にあるかテストスクリプトを書いて自動実行して。」
- 「さっき変更したスクリプトがエラーなく動くかプレイテストで検証して。」

### より広い高度な機能

地形生成、アセット検索、空間解析、アニメーション、オーディオ、大規模自動化。

## 購入後のアクティベーション

### ステップ1: GumroadでProサブスクライセンスを購入

1. [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md) にアクセス
2. Proサブスクライセンスを購入
3. 購入後に受け取るライセンスキーをコピー

ライセンスのアクティベーションは、プラグインまたはダッシュボードのどちらか一方で一度行えば十分です。両方の画面は同じMCPローカルライセンス状態を共有するため、片方で有効化するともう片方にも同じ状態が反映されます。

### プラグインで有効化

1. Roblox Studioで **W-MCP** を開き、MCPサーバーに接続します。
2. プラグインの **Settings > License** セクションを開きます。
3. `License key` 入力欄に購入したキーを貼り付けます。
4. **Activate** を押してライセンスを有効化します。
5. 状態がすぐに更新されない場合は **Refresh** を押して再確認します。
6. 有効化が完了すると、状態がBasicからProに変わり、Pro機能を使えるようになります。

![プラグインのライセンス有効化画面](../assets/screenshots/license/license-plugin.png)

### ダッシュボードで有効化

1. MCPサーバーを起動し、ダッシュボードの **Settings > License** セクションを開きます。
2. Provider が `gumroad` になっていることを確認します。
3. `License Key` 入力欄に購入したキーを貼り付けます。
4. **Activate License** を押してライセンスを有効化します。
5. 必要に応じて **Refresh License** で最新状態を再取得します。

![ダッシュボードのライセンス有効化画面](../assets/screenshots/license/license-dashboard.png)

### 有効化後の確認

- ライセンス状態が `active` または `grace` と表示されていれば、Pro機能を利用できます。
- プラグインとダッシュボードは同じライセンス状態を共有するため、片方で有効化した結果はもう片方にも反映されます。
- 最新状態を再確認したいときは **Refresh** または **Refresh License** を使ってください。

## 機能比較

| 機能 | Basic | Pro |
|-----|:-----:|:---:|
| Script、Instance、Property管理 | ✅ フル利用可 | ✅ フル利用可 |
| Selection、Tag、Camera、Log | ✅ フル利用可 | ✅ フル利用可 |
| Sync方向 | Studio → Local（片方向） | 双方向 |
| タイプ別Sync Direction | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| タイプ別Apply Mode | ❌ | ✅ Auto / Manual |
| 変更履歴 | ❌ | ✅ |
| マルチ Place Sync | ❌ | ✅ 最大3 Place、各Place独立ストレージ |
| プレイテスト制御（再生/停止/一時停止/再開） | ❌ | ✅ |
| 高度ツール範囲 | コア範囲 | より広い高度範囲 |
| AIトークン効率 | 標準 | 一括/高効率アクションで有利 |
