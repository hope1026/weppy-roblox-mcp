# Roblox MCPツール

MCPツールの詳細パラメータはMCPツール定義を直接確認してください。

## 機能別ガイド

ワークフロー中心の詳細ガイドを参考にしてください。

| カテゴリ | 説明 | 含まれるツール |
|----------|------|----------------|
| [インスタンス & プロパティ](instances-and-properties.md) | インスタンス検索、作成、編集、タグ管理 | `query_instances`, `mutate_instances`, `manage_properties` |
| [スクリプト & コード実行](scripting.md) | スクリプト管理、Luau実行 | `manage_scripts`, `execute_luau` |
| [ワールド環境](world-and-environment.md) | ライティング、Terrain、空間クエリ、カメラ | `manage_lighting`, `manage_terrain`, `spatial_query`, `manage_camera` |
| [アセット & オブジェクト演出](assets-and-effects.md) | アセット挿入、トゥイーン、アニメーション、音、エフェクト | `manage_assets`, `manage_tween`, `manage_animation`, `manage_audio`, `manage_effects`, `manage_physics` |
| [プレイテスト & 自動テスト](playtest.md) | プレイテスト制御と自動検証 | `system_info` (`play`, `stop`, `pause`, `resume`, `play_status`, `run_test`) |
| [Sync](../sync/overview.md) | Studio とローカルファイルの同期 | `manage_sync`, `workspace_state` |
| [システム & デバッグ](system-and-debugging.md) | 接続確認、ログ、選択、バッチ実行 | `system_info` (`ping`, `connection`, `usage`, ...), `manage_logs`, `manage_selection`, `batch_execute` |

関連ドキュメント:
- [Sync機能詳細ガイド](../sync/overview.md)

Syncポリシー:
- Basic: Studio -> Local 片方向同期
- Pro: 双方向同期 + より広い高度アクション範囲（バルク操作でAIトークン効率向上）

## Query Instances（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get` | パスでインスタンスプロパティを取得 | Basic |
| `children` | 直接の子または全子孫を取得 | Basic |
| `find_child` | 名前とオプションのクラスフィルタで最初の子を検索 | Basic |
| `find_descendant` | 名前で最初の子孫を検索 | Basic |
| `wait_for_child` | 子が表示されるまで待機（タイムアウト付き） | Basic |
| `class_info` | クラス情報と有効なプロパティを取得 | Basic |
| `search_name` | 名前パターンでインスタンスを検索（ワイルドカード対応） | Basic |
| `search_class` | クラス名でインスタンスを検索 | Basic |
| `file_tree` | ルートからファイルツリー構造を取得 | Pro |
| `project_structure` | プロジェクト全体構造を取得 | Pro |
| `descendants` | インスタンスの全子孫を取得 | Pro |
| `ancestors` | インスタンスの全祖先を取得 | Pro |
| `search_property` | プロパティ値でインスタンスを検索 | Pro |
| `search_tag` | タグでインスタンスを検索 | Pro |

## Mutate Instances（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `create` | 新しいインスタンスを作成 | Basic |
| `create_with_props` | 初期プロパティ付きでインスタンスを作成 | Basic |
| `delete` | インスタンスを削除 | Basic |
| `clone` | インスタンスを複製 | Basic |
| `move` | インスタンスを新しい親に移動 | Basic |
| `rename` | インスタンスの名前を変更 | Basic |
| `pivot` | ピボット位置またはCFrameを設定 | Basic |
| `create_tree` | 階層的インスタンスツリーを作成 | Pro |
| `mass_create` | 複数のインスタンスを一括作成 | Pro |
| `mass_delete` | 複数のインスタンスを削除 | Pro |
| `mass_duplicate` | 複数のインスタンスを複製 | Pro |
| `smart_duplicate` | 間隔と個数を指定して複製 | Pro |

## Manage Properties（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get` | 単一プロパティ値を取得 | Basic |
| `set` | 単一プロパティ値を設定 | Basic |
| `get_all` | インスタンスの全プロパティを取得 | Basic |
| `set_multiple` | 複数プロパティを一括設定 | Basic |
| `get_attr` | アトリビュート値を取得 | Basic |
| `set_attr` | アトリビュート値を設定 | Basic |
| `get_all_attrs` | 全アトリビュートを取得 | Basic |
| `delete_attr` | アトリビュートを削除 | Basic |
| `add_tag` | インスタンスにタグを追加 | Basic |
| `remove_tag` | インスタンスからタグを削除 | Basic |
| `check_tag` | インスタンスがタグを持っているか確認 | Basic |
| `get_tags` | インスタンスの全タグを取得 | Basic |
| `get_tagged` | 特定タグを持つ全インスタンスを取得 | Basic |
| `set_calculated` | 数式を使ってプロパティを設定 | Pro |
| `set_relative` | 現在値を基準に相対的にプロパティを設定 | Pro |
| `mass_set` | 複数インスタンスにプロパティを設定 | Pro |
| `mass_get` | 複数インスタンスからプロパティを取得 | Pro |
| `modify_children` | 親の全子を修正 | Pro |

## Manage Scripts（混合）

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

## Manage Lighting（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `lighting` | Lightingサービスプロパティを設定 | Pro |
| `atmosphere` | Atmosphereプロパティを設定 | Pro |
| `sky` | Skyプロパティを設定 | Pro |
| `terrain_props` | Terrain水/視覚プロパティを設定 | Pro |
| `time` | 時間帯を設定 | Pro |

## Manage Selection（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get` | 現在の選択を取得 | Basic |
| `set` | 現在の選択を置換 | Basic |
| `clear` | 選択をクリア | Basic |
| `cached` | ラウンドトリップなしでキャッシュされた選択を取得 | Basic |
| `context` | ソースとプロパティを含む詳細コンテキストを取得 | Pro |
| `details` | 祖先/子孫を含む階層的詳細を取得 | Pro |
| `add` | 選択にアイテムを追加 | Pro |
| `remove` | 選択からアイテムを削除 | Pro |
| `watch` | 選択変更を監視 | Pro |

## Manage Camera（Basic）

| アクション | 説明 | ティア |
|------------|------|--------|
| `info` | カメラ位置、回転、FOV、ビューポートサイズを取得 | Basic |
| `focus_path` | カメラをインスタンスにフォーカス移動 | Basic |
| `focus_position` | カメラを位置にフォーカス移動 | Basic |
| `suggest` | ターゲットの推奨カメラビューを取得 | Basic |

## Manage Tween（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `create` | ターゲットプロパティ付きトゥイーンを作成 | Pro |
| `play` | 作成したトゥイーンを再生 | Pro |
| `pause` | 実行中のトゥイーンを一時停止 | Pro |
| `cancel` | トゥイーンをキャンセル | Pro |

## Manage Audio（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `play` | サウンドを再生（必要に応じてSound作成） | Pro |
| `stop` | 再生中のサウンドを停止 | Pro |
| `pause` | 再生中のサウンドを一時停止 | Pro |
| `resume` | 一時停止中のサウンドを再開 | Pro |
| `set_listener` | オーディオリスナータイプ/ターゲットを設定 | Pro |

## Manage Animation（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `load` | Humanoid/AnimationControllerにアニメーションをロード | Pro |
| `play` | ロード済みアニメーショントラックを再生 | Pro |
| `stop` | 再生中のアニメーションを停止 | Pro |
| `get_tracks` | ロード済み全アニメーショントラックを一覧 | Pro |

## Manage Physics（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `register_group` | 衝突グループを登録 | Pro |
| `set_collidable` | 2つのグループが衝突可能か設定 | Pro |
| `get_groups` | 登録済み全衝突グループを一覧 | Pro |

## Manage Effects（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `emit` | ParticleEmitterからパーティクルを放出 | Pro |
| `clear` | 全パーティクルをクリア | Pro |
| `toggle` | エフェクトを有効化または無効化 | Pro |

## Manage Terrain（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `fill_block` | ブロック形状の地形を塗りつぶし | Pro |
| `fill_ball` | 球形状の地形を塗りつぶし | Pro |
| `fill_cylinder` | 円柱形状の地形を塗りつぶし | Pro |
| `fill_wedge` | くさび形状の地形を塗りつぶし | Pro |
| `clear_region` | 領域の地形をクリア | Pro |
| `clear_bounds` | 境界の地形をクリア | Pro |
| `replace_material` | 領域のマテリアルを置換 | Pro |
| `colors_get` | マテリアル色を取得 | Pro |
| `colors_set` | マテリアル色を設定 | Pro |
| `read_voxel` | 単一ボクセルデータを読み取り | Pro |
| `read_voxels` | 一括ボクセルデータを読み取り | Pro |
| `write_voxels` | 一括ボクセルデータを書き込み | Pro |
| `generate` | 手続き型地形を生成 | Pro |
| `smooth` | 地形を滑らかにする | Pro |

## Spatial Query（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `raycast` | 単一レイを投射 | Pro |
| `find_ground` | 地点下の地面位置を検出 | Pro |
| `check_placement` | 配置が衝突なしか確認 | Pro |
| `multi_raycast` | 複数レイを一括投射 | Pro |
| `scan_area` | 領域のハイトマップを生成 | Pro |
| `find_flat` | 建築用の平坦エリアを検索 | Pro |
| `find_spawn` | 適切なスポーン位置を検索 | Pro |
| `analyze_walkable` | 歩行可能グリッドを分析 | Pro |
| `spatial_map` | 全BasePartの位置を取得 | Pro |
| `find_space` | オブジェクト用の空きスペースを検索 | Pro |
| `bounds` | インスタンスのバウンディングボックスを取得 | Pro |
| `snap_grid` | 位置をグリッドにスナップ | Pro |
| `collision` | AABB衝突を確認 | Pro |

## Manage Assets（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `insert` | アセットIDでモデルを挿入 | Pro |
| `info` | アセットメタデータを取得 | Pro |
| `search` | Creator Storeを検索 | Pro |
| `search_insert` | 検索して最初のマッチを挿入 | Pro |
| `insert_free` | フリーモデルを挿入 | Pro |
| `insert_package` | パッケージを挿入 | Pro |
| `export` | 現在の選択をエクスポート | Pro |

## Manage Sync（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `status_current_place` | 現在接続中のPlaceの同期状態を取得 | Pro |
| `history` | 変更履歴を取得 | Pro |
| `directions` | タイプ別同期方向を取得 | Pro |
| `read_file` | 同期済みファイルを読み取り | Pro |
| `write_file` | 同期済みファイルに書き込み | Pro |
| `progress` | リアルタイム同期進捗と帯域幅を取得 | Pro |

## Workspace State（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `sync` | 現在のWorkspace状態を取得 | Pro |
| `snapshot` | 完全なインスタンスツリー構造を取得 | Pro |
| `changes` | 最近の変更を取得 | Pro |
| `viewport` | カメラとビューポート情報を取得 | Pro |

## Manage Logs（Basic）

| アクション | 説明 | ティア |
|------------|------|--------|
| `get` | フィルタリングされたログを取得 | Basic |
| `clear` | ログバッファをクリア | Basic |
| `errors` | 最近のエラーのみ取得 | Basic |

## System Info（混合）

| アクション | 説明 | ティア |
|------------|------|--------|
| `ping` | 接続テスト | Basic |
| `connection` | サーバー/プラグイン接続情報を取得 | Basic |
| `usage` | 現在のティアを取得（basic/pro） | Basic |
| `place_info` | Place ID、名前、クリエイターを取得 | Pro |
| `services` | 全Robloxサービスを一覧 | Pro |
| `studio_settings` | Studio設定を取得 | Pro |
| `play` | Play(F5) または Run(F8) モードでプレイテスト開始 | Pro |
| `stop` | 現在のプレイテストを停止 | Pro |
| `pause` | Run モードのプレイテストを一時停止 | Pro |
| `resume` | 一時停止した Run モードのプレイテストを再開 | Pro |
| `play_status` | プレイテスト状態と利用可能な action を取得 | Pro |
| `run_test` | 一時テストスクリプトを注入し、プレイテスト実行後にログ収集とローカルレポート作成 | Pro |

## Batch Execute（Pro）

複数のコマンドを単一バッチで実行します。各コマンドはツール名と引数を指定します。コマンドは順次実行され、エラー時の続行動作を選択できます。

## Execute Luau（Pro）

Roblox Studioサンドボックスで任意のLuauコードを実行します。ブロックされたサービス：HttpService、DataStoreService、MessagingService。CoreGui/CorePackagesにはアクセスできません。
