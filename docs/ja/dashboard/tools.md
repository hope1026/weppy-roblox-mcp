# Tools

> AIが実行したMCPツールの履歴と統計を確認します。

![Tools — ツール実行履歴と統計](../../assets/screenshots/dashboard/dashboard_tools.png)

## 概要

ToolsページはAIが実行したMCPツールの履歴と統計を提供します。**History**と**Statistics**の2つのサブタブで構成されています。サーバーが接続されていれば（L1以上）常にアクセスできます。

## Historyタブ

ツール実行履歴を時系列テーブルで表示します：

| 列 | 説明 |
|----|------|
| Time | 実行時間 |
| Tool.Action | 実行されたツールとアクション（例：`query_instances.get_instance`） |
| Duration | 実行所要時間 |
| Status | 結果ステータス（OK/Error） |
| Tier | 使用されたティア（Basic/Pro） |

機能：
- **Toolフィルター**ドロップダウンで特定のツールのみフィルタリング
- ページネーションで大量の履歴を閲覧
- リアルタイムで新しい実行履歴を追加

## Statisticsタブ

ツール使用統計を視覚的に分析します：

- **ティア分布** — Basic/Proツール使用比率
- **ツール別統計** — 各ツールの呼び出し回数、平均応答時間
- **アクション別分析** — ツール内のアクション別詳細統計

## Basicティア専用機能

Basicティアユーザーには追加UIが表示されます：

- **Tier Usage Progress** — 使用量プログレスバー
- **Basic vs Pro比較モーダル** — Proティアの追加機能を案内

## 活用事例

### ツールパフォーマンス分析

```
「どのツールが最も時間がかかるか知りたい」
```

Statisticsタブでツール別の平均応答時間を確認します。

### エラー追跡

```
「実行したツールが失敗した理由を知りたい」
```

HistoryタブでStatusがErrorの項目を見つけて詳細情報を確認します。

## 関連ドキュメント

- [ダッシュボード Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Settings](settings.md)
- [Tool一覧](../tools/overview.md)
