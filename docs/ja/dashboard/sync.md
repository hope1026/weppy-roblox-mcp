# Sync

> Studio ↔ ローカルファイル同期の現在の状態、方向設定、ログをモニタリングします。

![Sync — 同期状態、方向設定、ログ](../../assets/screenshots/dashboard/dashboard_sync.png)

> Sync機能自体の詳細ガイドは[Sync機能詳細ガイド](../sync/overview.md)をご参照ください。

## 概要

SyncページはStudio ↔ ローカルファイル同期の現在の状態と設定を視覚的に表示します。ダッシュボードが **Studio接続済み** 状態のときのみアクセスできます。

## Sync Status

現在の同期状態を表示します：

| 状態 | 意味 |
|------|------|
| **Idle** | 同期待機中 |
| **Initializing** | 初期同期進行中 |
| **Syncing** | 増分同期進行中 |
| **Error** | 同期エラー発生 |

状態カードには同期パス、同期されたインスタンス数、現在の適用モード（Auto/Manual）が併せて表示されます。

## Sync Directions

タイプ別の同期方向をテーブルで表示します：

| 列 | 説明 |
|----|------|
| Type | 同期対象タイプ（Scripts, Values, Instances, Data, Services） |
| Direction | 同期方向（Local → Studio, Studio → Local） |
| Apply Mode | 適用モード（Auto/Manual） |

各タイプの同期方向を確認して、どの変更がどの方向に反映されるかを把握できます。

## Sync Log

同期イベントを時系列で表示します。各ログ項目には変更タイプタグ（create, update, deleteなど）と対象パスが含まれます。

## 活用事例

### 同期状態の確認

```
「Syncが正しく動作しているか確認したい」
```

Sync StatusがIdleであることを確認し、Sync Logで最近の変更が正常に記録されているか確認します。

### 同期方向の把握

```
「スクリプトの変更がどの方向に同期されるか知りたい」
```

Sync DirectionsテーブルでScriptsタイプのDirectionを確認します。

## 関連ドキュメント

- [ダッシュボード Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Sync機能詳細ガイド](../sync/overview.md)
