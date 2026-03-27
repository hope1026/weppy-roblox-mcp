# システム & デバッグ

> 接続状態の確認、ログ管理、選択制御、バッチ実行で開発とデバッグの生産性を高めます。

## 含まれるツール

| ツール | ティア | 説明 |
|--------|:------:|------|
| `system_info` | 混合 | `ping`, `connection`, `usage`, `place_info`, `services`, `studio_settings` |
| `manage_logs` | Basic | ログ取得、バッファクリア、最近のエラー抽出 |
| `manage_selection` | 混合 | 現在選択の取得、置換、監視 |
| `batch_execute` | Pro | 複数コマンドを1回で実行 |

> `system_info` の `play`、`stop`、`run_test` などプレイテスト系アクションは [プレイテスト & 自動テスト](playtest.md) を参照してください。

## 主なワークフロー

### 接続状態を確認する

```
"Studio と正しく接続されているか確認して。"
```

`system_info.ping` で素早く疎通確認できます。

### 最近のエラーを調べる

```
"最新のエラーログを見せて。"
```

`manage_logs.errors` で最近のエラーだけを取得できます。`manage_logs.get` は `sinceSeq` カーソルによる増分ポーリングにも対応します。

### バッチで実行する（Pro）

```
"Workspace のすべての Part を赤くして、その後カメラを最初の Part に合わせて。"
```

`batch_execute` を使えば複数コマンドを1つのリクエストにまとめられます。

## アクションリファレンス

### System Info（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `ping` | 接続テスト | Basic |
| `connection` | サーバー/プラグイン接続情報を取得 | Basic |
| `usage` | 現在のティア（`basic` / `pro`）を取得 | Basic |
| `place_info` | Place ID、名前、作成者を取得 | Pro |
| `services` | 全Robloxサービスを一覧 | Pro |
| `studio_settings` | Studio設定を取得 | Pro |

### Manage Logs（Basic）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get` | フィルタ付きログを取得（`sinceSeq` 増分取得対応） | Basic |
| `clear` | ログバッファをクリア | Basic |
| `errors` | 最近のエラーのみ取得 | Basic |

### Manage Selection（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get` | 現在の選択を取得 | Basic |
| `set` | 現在の選択を置換 | Basic |
| `clear` | 選択をクリア | Basic |
| `cached` | ラウンドトリップなしでキャッシュ済み選択を取得 | Basic |
| `context` | ソースとプロパティを含む詳細コンテキストを取得 | Pro |
| `details` | 祖先/子孫を含む階層的詳細を取得 | Pro |
| `add` | 選択に項目を追加 | Pro |
| `remove` | 選択から項目を削除 | Pro |
| `watch` | 選択変更を監視 | Pro |

### Manage Context（Basic）

| アクション | 説明 | ティア |
|------------|------|--------|
| `begin` | 現在のセッション/Place スコープで構造化された実行コンテキストを開始 | Basic |
| `update` | アクティブなコンテキストの intent、affected areas、replay metadata を更新 | Basic |
| `end` | アクティブな実行コンテキストを終了し、最終スナップショットを保存 | Basic |

### Batch Execute（Pro）

複数コマンドを1つのバッチで実行します。各コマンドはツール名と引数を持ち、順番に実行され、必要に応じてエラー後も継続できます。

## 関連ドキュメント

- [プレイテスト & 自動テスト](playtest.md) - `system_info` のプレイテスト系アクション
- [スクリプト & コード実行](scripting.md) - 調査やデバッグのためのLuau実行
- [Tool一覧](overview.md)
