# プレイテスト & 自動テスト

> AIでStudioプレイテストを制御し、テストスクリプトを注入して自動実行、検証、レポート生成を行います。

## 含まれるツール

| ツール | ティア | 説明 |
|--------|:------:|------|
| `system_info` | Pro | `play`, `stop`, `pause`, `resume`, `play_status`, `run_test` アクション |

> `ping`、`connection`、`usage` など `system_info` の他アクションは [システム & デバッグ](system-and-debugging.md) を参照してください。

## 主なワークフロー

### 手動でプレイテストを制御する

```
"Play モード（F5）でゲームを開始して。"
"今のプレイテストを止めて。"
```

基本の流れは `play` -> `play_status` -> `stop` です。

### 自動テストを実行する

```
"SpawnLocation が正しい位置にあるか確認するテストを書いて実行して。"
```

`run_test` はテストスクリプトを注入し、プレイテストを自動開始し、ログ収集と後片付けまで行います。

### CI風の検証

```
"Run モード（F8）で NPC が目標地点まで移動するかテストして、失敗したらログを見せて。"
```

サーバー中心の検証には `mode: "run"` を使って `run_test` を実行します。

## プレイテスト状態マシン

```text
Edit --play--> Running --stop--> Edit
                  |               ^
                pause             |
                  |               |
                  v               |
               Paused --resume--> Running
```

| 状態 | 利用可能アクション |
|------|--------------------|
| `edit` | `play` |
| `running` | `stop`, `pause`（Runモードのみ） |
| `paused` | `resume`, `stop` |

- Playモード（F5）: クライアント + サーバーのシミュレーション、一時停止と再開は不可
- Runモード（F8）: サーバー専用シミュレーション、一時停止と再開に対応

## `run_test` パイプライン

`run_test` は次の手順を自動オーケストレーションします。

### 1. 準備

- `place_info` で Place 情報を取得
- 既存ログバッファをクリア

### 2. スクリプト注入

- `ServerScriptService.__MCP_TestRunner` にラップ済みテストスクリプトを作成
- ラッパーが `START` / `FINISHED` シグナルとエラートレースバックを処理

### 3. 実行と監視

- Play または Run モードでプレイテスト開始
- 500ms ごとにログをポーリング
- `[WEPPY_TEST]:FINISHED` 検出で完了判定
- タイムアウト時は自動停止（デフォルト60秒、最大300秒）

### 4. 後片付け

- プレイテスト自動停止
- 注入したテストスクリプトを削除
- 最終ログを回収

### 5. レポート出力

レポートとログはローカルファイルとして保存されます。

```text
roblox-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/
├── test-report.md
└── test-log.txt
```

`test-report.md` の例:

```markdown
# Test Report

- Status: passed
- Test Name: spawn_location_test
- Mode: run
- Place ID: 123456
- Duration (ms): 1523
- Total Logs: 12
- Signal Count: 2

## Signals

- START: 2026-03-12T10:30:00.000Z
- FINISHED: 2026-03-12T10:30:01.523Z
```

## アクションリファレンス

| アクション | 説明 | パラメータ | ティア |
|------------|------|------------|--------|
| `play` | Play（F5）または Run（F8）モードでプレイテスト開始 | `mode`: `"play"` \| `"run"` | Pro |
| `stop` | 現在のプレイテストを停止 | - | Pro |
| `pause` | Runモードのプレイテストを一時停止 | - | Pro |
| `resume` | 一時停止したRunモードのプレイテストを再開 | - | Pro |
| `play_status` | プレイテスト状態と利用可能アクションを取得 | - | Pro |
| `run_test` | テストスクリプト注入、実行、ログ収集、レポート生成 | `script`（必須）, `test_name`, `mode`, `timeout` | Pro |

### `run_test` パラメータ

| パラメータ | 型 | 必須 | 説明 |
|------------|----|:----:|------|
| `script` | string | ✅ | 実行するLuauテストコード本体 |
| `test_name` | string | - | レポートに表示するテスト名 |
| `mode` | `"play"` \| `"run"` | - | プレイテストモード。デフォルトは `"play"` |
| `timeout` | number | - | タイムアウト秒。デフォルト60、最大300 |

## 関連ドキュメント

- [システム & デバッグ](system-and-debugging.md) - 接続系アクションとログ管理
- [スクリプト & コード実行](scripting.md) - スクリプト作成とLuau実行
- [Tool一覧](overview.md)
