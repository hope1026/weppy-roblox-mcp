# ダッシュボード

> MCPサーバーの状態、接続、同期、ツール実行履歴、ゲーム変更履歴をWebブラウザでリアルタイムに確認・管理します。

![ダッシュボード Overview — サーバー状態、最近の変更、セッション要約を一目で確認](../../assets/screenshots/dashboard/dashboard_overview.png)

## ダッシュボードとは？

ダッシュボードはMCPサーバーが提供するWeb基盤のモニタリングインターフェースです。MCPサーバーが起動すると自動的にブラウザで開かれ、AIエージェントがRoblox Studioで実行するすべての作業をリアルタイムで追跡できます。

- ターミナルログを探す必要なく、視覚的に状態を把握
- AIがStudioで何を変更したか、変更履歴で追跡
- 同期状態、接続状態、ツール実行統計を一か所で確認

## ページ構成

| ページ | 説明 | 詳細ガイド |
|--------|------|------------|
| [Overview](#overview) | サーバー/プラグイン/エージェント/Sync状態カード、最近の変更フィード | このドキュメント |
| [Changelog](changelog.md) | ゲーム変更履歴 — セッション別カード、変更要約、タイムライン、Before & After | [詳細ガイド](changelog.md) |
| [Connection](connection.md) | サーバー状態、AIエージェント一覧、プラグイン接続情報 | [詳細ガイド](connection.md) |
| [Sync](sync.md) | 同期状態、方向設定、ログ | [詳細ガイド](sync.md) |
| [Playtest](playtest.md) | プレイテスト状態、テスト記録 | [詳細ガイド](playtest.md) |
| [Tools](tools.md) | ツール実行履歴、統計、ティア分布 | [詳細ガイド](tools.md) |
| [Settings](settings.md) | ライセンス、ログレベル、Sync設定、言語 | [詳細ガイド](settings.md) |

## アクセス方法

MCPサーバーが起動するとダッシュボードが自動的にブラウザで開きます。手動でアクセスするには：

```
http://localhost:3002
```

> `DASHBOARD_AUTO_OPEN=false`に設定すると自動オープンを無効化できます（[Settings](settings.md)ページで確認）。

## 接続状態

ダッシュボードは接続状態に応じて使用可能な機能が異なります：

| 状態 | 条件 | 使用可能なページ |
|------|------|-------------------|
| **サーバー切断** | サーバー未接続 | 再接続待機画面のみ表示 |
| **サーバー接続済み** | サーバー接続、プラグイン未接続 | Connection, Tools, Settings |
| **Studio接続済み** | サーバー + プラグイン両方接続 | すべてのページ |

ダッシュボードが **サーバー接続済み** 状態のときは、Overview、Changelog、Sync、Playtestページにアクセスできません。

## Overview

Overviewページはダッシュボードの最初の画面で、システム全体の状態を一目で表示します。

### 状態カード

| カード | 表示情報 |
|------|----------|
| **Server** | サーバー接続状態（Online/Offline） |
| **Plugin** | プラグイン接続状態、Place情報 |
| **Agent** | 現在接続されているAIエージェント名 |
| **Sync** | 同期状態（Idle/Syncing/Error） |

### 最近のゲーム変更（Recent Game Changes）

AIがStudioで実行した最近の変更をリアルタイムで表示します（最大20件）。各項目は変更カテゴリアイコンとともに表示され、クリックすると[Changelog](changelog.md)の詳細ビューに移動します。

カテゴリアイコン：
- Script — スクリプト作成/修正
- Instance — インスタンス作成/削除/移動
- Property — プロパティ変更
- Lighting — ライティング/環境設定
- Terrain — 地形変更
- Asset — アセット挿入

### セッション変更要約（Session Change Summary）

現在のセッションの変更統計をカテゴリ別に集計して表示します（例："4 scripts · 3 properties"）。

## リアルタイム更新

ダッシュボードはSSE（Server-Sent Events）を使用してリアルタイムでデータを更新します：

- サーバー状態：5秒間隔ポーリング
- 変更フィード、接続イベント：SSEリアルタイムストリーミング
- SSE接続切断時：3秒後に自動再接続

## 関連ドキュメント

- [Changelog](changelog.md) — ゲーム変更履歴の追跡
- [Connection](connection.md) — サーバー/エージェント/プラグイン接続状態
- [Sync](sync.md) — 同期状態モニタリング
- [Playtest](playtest.md) — プレイテスト記録
- [Tools](tools.md) — ツール実行履歴/統計
- [Settings](settings.md) — ライセンス、サーバー設定、言語
- [Tool一覧](../tools/overview.md)
- [Sync機能詳細ガイド](../sync/overview.md)
