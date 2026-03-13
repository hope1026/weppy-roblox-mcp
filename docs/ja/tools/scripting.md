# スクリプト & コード実行

> スクリプトソースを管理し、Roblox Studio内で任意のLuauを実行します。

## 含まれるツール

| ツール | ティア | 説明 |
|--------|:------:|------|
| `manage_scripts` | 混合 | スクリプト作成、読み取り、編集、検索、依存関係分析 |
| `execute_luau` | Pro | Roblox Studioサンドボックスで任意のLuauを実行 |

## 主なワークフロー

### スクリプトを編集する

```
"ServerScriptService の GameManager スクリプトで maxPlayers を 12 から 24 に変更して。"
```

`manage_scripts.search` で対象行を見つけ、`manage_scripts.edit_replace` で更新します。

### 複数スクリプトをまとめてリファクタリングする（Pro）

```
"すべてのスクリプトで OldModule を NewModule に置き換えて。"
```

`manage_scripts.replace` を使うと、複数スクリプトを一度に更新できます。

### 実行時データを確認する（Pro）

```
"Workspace 内のすべての Humanoid の平均 Health を計算して。"
```

`execute_luau` でカスタムLuauを実行し、実行時データを取得します。

## アクションリファレンス

### Manage Scripts（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get_source` | スクリプトソースコードを取得 | Basic |
| `set_source` | スクリプトソースコードを設定 | Basic |
| `create` | 新しいスクリプトを作成 | Basic |
| `delete` | スクリプトを削除 | Basic |
| `edit_replace` | スクリプトの特定行を置換 | Basic |
| `edit_insert` | 特定位置に行を挿入 | Basic |
| `edit_delete` | 特定行を削除 | Basic |
| `search` | スクリプト内でテキストを検索 | Basic |
| `get_dependencies` | スクリプトの依存関係を取得 | Basic |
| `replace` | 複数スクリプトで一括置換 | Pro |

### Execute Luau（Pro）

Roblox Studioサンドボックスで任意のLuauを実行します。

- ブロックされるサービス: `HttpService`, `DataStoreService`, `MessagingService`
- アクセス不可: `CoreGui`, `CorePackages`

## 関連ドキュメント

- [インスタンス & プロパティ](instances-and-properties.md) - スクリプトインスタンスの作成や移動
- [プレイテスト & 自動テスト](playtest.md) - テストスクリプトの注入と実行
- [Tool一覧](overview.md)
