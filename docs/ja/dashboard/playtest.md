# Playtest

> AIが実行したプレイテストの状態とテスト結果を確認します。

![Playtest — プレイテスト状態とテスト記録](../../assets/screenshots/dashboard/dashboard_playtest.png)

## 概要

PlaytestページはAIが実行したプレイテストの状態とテスト結果を表示します。ダッシュボードが **Studio接続済み** 状態のときのみアクセスできます。

## Playtest Status

現在のプレイテスト状態を表示します：

| 状態 | 意味 |
|------|------|
| **NotRunning** | プレイテスト未実行 |
| **Running** | プレイテスト実行中 |
| **Paused** | プレイテスト一時停止（Runモード） |

## Test History

AIが`run_test`アクションで実行したテスト結果を時系列で一覧表示します：

| 項目 | 説明 |
|------|------|
| タイムスタンプ | テスト実行時間 |
| Test Report | テストレポートリンク |
| Mode | 実行モード（play/run） |
| Duration | テスト所要時間 |
| Status | 結果（Passed/Failed） |

テストレポートをクリックすると、マークダウン形式の詳細レポートとログを確認できます。

## 活用事例

### テスト失敗の分析

```
「実行した自動テストが失敗した原因を探したい」
```

Test HistoryでFailed状態のテストを見つけてTest Reportをクリックすると、詳細ログと失敗原因を確認できます。

### テスト履歴の確認

```
「今日実行したテストの成功/失敗状況を確認したい」
```

Test HistoryでタイムスタンプとStatusを確認して、テスト結果の推移を把握します。

## 関連ドキュメント

- [ダッシュボード Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [プレイテスト & 自動テスト（ツール）](../tools/playtest.md)
