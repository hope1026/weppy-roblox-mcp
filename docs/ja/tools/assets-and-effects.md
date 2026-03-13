# アセット & オブジェクト演出

> アセット挿入、トゥイーン、音、パーティクル、アニメーション、衝突グループを管理します。

## 含まれるツール

| ツール | ティア | 説明 |
|--------|:------:|------|
| `manage_assets` | Pro | Creator Store検索、モデル/パッケージ挿入、アセット情報確認 |
| `manage_tween` | Pro | トゥイーン作成、再生、一時停止、キャンセル |
| `manage_animation` | Pro | アニメーション読み込み、再生、停止、トラック確認 |
| `manage_audio` | Pro | サウンド再生、停止、一時停止、再開、リスナー設定 |
| `manage_effects` | Pro | パーティクル放出、クリア、効果切替 |
| `manage_physics` | Pro | 衝突グループ登録と衝突設定 |

## 主なワークフロー

### アセットでシーンを作る

```
"Creator Store で木のモデルを検索して、Workspace に3つ配置して。"
```

`manage_assets.search_insert` を使うと、検索と挿入を一度に実行できます。

### インタラクティブ演出を作る

```
"クリックしたらドアが3秒かけて開くトゥイーンを作って。"
```

`manage_tween.create` で動きを定義し、`manage_tween.play` で再生します。必要なら `manage_audio.play` で効果音を追加します。

### パーティクルと音を組み合わせる

```
"ボス出現時に爆発音を鳴らして、同時にバーストパーティクルを出して。"
```

`manage_effects.emit` でパーティクルを放出し、`manage_audio.play` で音を再生します。

## アクションリファレンス

### Manage Assets（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `insert` | アセットIDでモデルを挿入 | Pro |
| `info` | アセットメタデータを取得 | Pro |
| `search` | Creator Storeを検索 | Pro |
| `search_insert` | 検索して最初の一致を挿入 | Pro |
| `insert_free` | 無料モデルを挿入 | Pro |
| `insert_package` | パッケージを挿入 | Pro |
| `export` | 現在の選択をエクスポート | Pro |

### Manage Tween（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `create` | ターゲットプロパティ付きトゥイーンを作成 | Pro |
| `play` | 作成したトゥイーンを再生 | Pro |
| `pause` | 実行中のトゥイーンを一時停止 | Pro |
| `cancel` | トゥイーンをキャンセル | Pro |

### Manage Animation（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `load` | Humanoid または AnimationController にアニメーションをロード | Pro |
| `play` | ロード済みアニメーショントラックを再生 | Pro |
| `stop` | 再生中のアニメーションを停止 | Pro |
| `get_tracks` | ロード済みアニメーショントラックを一覧 | Pro |

### Manage Audio（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `play` | サウンドを再生（必要なら `Sound` を作成） | Pro |
| `stop` | 再生中のサウンドを停止 | Pro |
| `pause` | 再生中のサウンドを一時停止 | Pro |
| `resume` | 一時停止したサウンドを再開 | Pro |
| `set_listener` | オーディオリスナーの種類または対象を設定 | Pro |

### Manage Effects（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `emit` | `ParticleEmitter` からパーティクルを放出 | Pro |
| `clear` | すべてのパーティクルをクリア | Pro |
| `toggle` | 効果を有効化または無効化 | Pro |

### Manage Physics（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `register_group` | 衝突グループを登録 | Pro |
| `set_collidable` | 2つのグループが衝突可能か設定 | Pro |
| `get_groups` | 登録済み衝突グループを一覧 | Pro |

## 関連ドキュメント

- [インスタンス & プロパティ](instances-and-properties.md) - オブジェクト作成と配置
- [ワールド環境](world-and-environment.md) - ライティング、Terrain、カメラ
- [Tool一覧](overview.md)
