# ツール一覧

Roblox MCPは**140個のツール**を提供し、2つのエディションに分かれています。

## Basic Edition (無料) — 68ツール

基本的なRoblox Studio操作に必要なすべてのツールを含みます。

### オブジェクト管理 (13)

| ツール | 説明 |
|--------|------|
| `create_instance` | 新しいインスタンスを作成 |
| `create_instance_with_properties` | プロパティと共にインスタンスを作成 |
| `clone_instance` | 既存のインスタンスを複製 |
| `delete_instance` | インスタンスを削除 |
| `move_instance` | インスタンスを新しい親に移動 |
| `rename_instance` | インスタンス名を変更 |
| `get_instance` | インスタンス情報を取得 |
| `get_instance_children` | インスタンスの子一覧を取得 |
| `find_first_child` | 名前で最初の子を検索 |
| `find_first_descendant` | 名前で最初の子孫を検索 |
| `get_class_info` | クラス情報を取得 |
| `wait_for_child` | 子が作成されるまで待機 |
| `pivot_to` | Pivot CFrameを設定 |

### プロパティ設定 (10)

| ツール | 説明 |
|--------|------|
| `get_property` | プロパティ値を取得 |
| `set_property` | プロパティ値を設定 |
| `get_all_properties` | すべてのプロパティを取得 |
| `set_multiple_properties` | 複数のプロパティを同時に設定 |
| `set_calculated_property` | 計算された値でプロパティを設定 |
| `set_relative_property` | 相対的な値でプロパティを設定 |
| `get_attribute` | アトリビュート値を取得 |
| `set_attribute` | アトリビュート値を設定 |
| `get_all_attributes` | すべてのアトリビュートを取得 |
| `delete_attribute` | アトリビュートを削除 |

### スクリプト (9)

| ツール | 説明 |
|--------|------|
| `create_script` | 新しいスクリプトを作成 |
| `get_script_source` | スクリプトのソースコードを取得 |
| `set_script_source` | スクリプトのソースコードを更新 |
| `delete_script` | スクリプトを削除 |
| `edit_script_lines` | 特定の行を編集 |
| `insert_script_lines` | 行を挿入 |
| `delete_script_lines` | 行を削除 |
| `search_in_scripts` | スクリプト内を検索 |
| `replace_in_scripts` | スクリプト内を置換 |

### Studio制御 (12)

| ツール | 説明 |
|--------|------|
| `get_selection` | 現在選択されているインスタンスを取得 |
| `get_selection_context` | コンテキストと共に選択項目を取得 |
| `get_selection_details` | 選択項目の詳細情報を取得 |
| `set_selection` | インスタンスの選択を設定 |
| `clear_selection` | 選択を解除 |
| `add_to_selection` | 選択に追加 |
| `remove_from_selection` | 選択から削除 |
| `get_place_info` | Place情報を取得 |
| `get_services` | ゲームサービス一覧を取得 |
| `get_studio_settings` | Studio設定を取得 |
| `run_command` | Studioコマンドを実行 |
| `export_selection` | 選択をエクスポート |

### 検索 (2)

| ツール | 説明 |
|--------|------|
| `search_by_name` | 名前でインスタンスを検索 |
| `search_by_class` | クラスでインスタンスを検索 |

### タグ (5)

| ツール | 説明 |
|--------|------|
| `add_tag` | インスタンスにタグを追加 |
| `remove_tag` | インスタンスからタグを削除 |
| `get_tags` | インスタンスのタグ一覧を取得 |
| `get_tagged` | タグ付けされたインスタンス一覧を取得 |
| `has_tag` | インスタンスのタグ保有を確認 |

### カメラ (4)

| ツール | 説明 |
|--------|------|
| `get_viewport_info` | ビューポート情報を取得 |
| `get_camera_info` | カメラ情報を取得 |
| `focus_camera_path` | カメラをパスにフォーカス |
| `focus_camera_position` | カメラを位置にフォーカス |

### ログ (3)

| ツール | 説明 |
|--------|------|
| `get_output_logs` | 出力ログを取得 |
| `clear_output_logs` | 出力ログをクリア |
| `get_recent_errors` | 最近のエラーを取得 |

### 接続 (2)

| ツール | 説明 |
|--------|------|
| `ping` | 接続を確認 |
| `get_connection_info` | 接続情報を取得 |

---

## Pro Edition — 追加で72ツール

高度な機能とゲーム開発のワークフローを加速するツールを提供します。

### 高度なスクリプト (2)

| ツール | 説明 |
|--------|------|
| `get_script_dependencies` | スクリプトの依存関係を分析 |
| `execute_script` | スクリプトを実行 |

### 高度な検索 (6)

| ツール | 説明 |
|--------|------|
| `get_file_tree` | ファイルツリーを取得 |
| `get_project_structure` | プロジェクト構造ツリーを取得 |
| `search_by_property` | プロパティで検索 |
| `search_by_tag` | タグで検索 |
| `get_descendants` | すべての子孫を取得 |
| `get_ancestors` | すべての祖先を取得 |

### 一括操作 (8)

| ツール | 説明 |
|--------|------|
| `mass_create_instances` | インスタンスを一括作成 |
| `mass_delete_instances` | インスタンスを一括削除 |
| `mass_set_property` | プロパティを一括設定 |
| `mass_get_property` | プロパティを一括取得 |
| `mass_duplicate` | インスタンスを一括複製 |
| `smart_duplicate` | オフセットを適用したスマート複製 |
| `batch_execute` | バッチ実行 |
| `modify_children` | 子を一括変更 |

### アセット (7)

| ツール | 説明 |
|--------|------|
| `insert_model` | Creator Storeからモデルを挿入 |
| `get_asset_info` | アセット情報を取得 |
| `search_creator_store` | Creator Storeアセットを検索 |
| `search_and_insert_model` | モデルを検索して挿入 |
| `insert_free_model` | 無料モデルを挿入 |
| `insert_package` | パッケージを挿入 |
| `watch_selection` | 選択を監視 |

### 環境設定 (5)

| ツール | 説明 |
|--------|------|
| `set_lighting` | ライティングプロパティを設定 |
| `set_atmosphere` | Atmosphereプロパティを設定 |
| `set_sky` | Skyプロパティを設定 |
| `set_terrain` | 地形を設定 |
| `set_time_of_day` | 時刻を設定 |

### 状態管理 (9)

| ツール | 説明 |
|--------|------|
| `sync_workspace_state` | ワークスペース状態を同期 |
| `get_workspace_snapshot` | ワークスペースのスナップショットを取得 |
| `get_recent_changes` | 最近の変更を取得 |
| `get_cached_selection` | キャッシュされた選択を取得 |
| `get_suggested_camera_view` | 推奨カメラビューを取得 |
| `get_spatial_map` | 空間マップを取得 |
| `find_empty_space` | 空きスペースを検索 |
| `get_bounds` | 境界を取得 |
| `snap_to_grid` | グリッドにスナップ |

### 空間分析 (5)

| ツール | 説明 |
|--------|------|
| `check_collision` | 衝突をチェック |
| `raycast` | レイキャスト |
| `find_ground` | 地面を検索 |
| `check_placement` | 配置をチェック |
| `multi_raycast` | マルチレイキャスト |

### レイキャスト (8)

| ツール | 説明 |
|--------|------|
| `scan_area` | エリアをスキャン |
| `find_flat_areas` | 平らなエリアを検索 |
| `find_spawn_positions` | スポーン位置を検索 |
| `analyze_walkable_area` | 歩行可能エリアを分析 |
| `raycast` | レイキャスト |
| `find_ground` | 地面を検索 |
| `check_placement` | 配置をチェック |
| `multi_raycast` | マルチレイキャスト |

### 地形 (14)

| ツール | 説明 |
|--------|------|
| `terrain_fill_block` | ブロック地形を埋める |
| `terrain_fill_ball` | 球体地形を埋める |
| `terrain_fill_cylinder` | 円柱地形を埋める |
| `terrain_fill_wedge` | くさび地形を埋める |
| `terrain_clear` | 地形をクリア |
| `terrain_clear_region` | 地形領域をクリア |
| `terrain_replace_material` | 地形素材を置換 |
| `terrain_get_material_color` | 地形素材の色を取得 |
| `terrain_set_material_color` | 地形素材の色を設定 |
| `terrain_read_voxel` | ボクセルを読み取り |
| `terrain_read_voxels` | 複数のボクセルを読み取り |
| `terrain_write_voxels` | ボクセルを書き込み |
| `terrain_generate` | 地形を生成 |
| `terrain_smooth` | 地形をスムーズに |

### 可視化 (7)

| ツール | 説明 |
|--------|------|
| `visualization_create_area` | エリアを可視化 |
| `visualization_create_marker` | マーカーを作成 |
| `visualization_create_line` | ラインを作成 |
| `visualization_remove` | 可視化を削除 |
| `visualization_clear` | すべての可視化をクリア |
| `visualization_get_status` | 可視化ステータスを取得 |
| `visualization_focus` | 可視化にフォーカス |

---

## Pro版へのアップグレード

より高度な機能が必要ですか? 👉 [Pro版アップグレードガイド](../pro-upgrade.md)
