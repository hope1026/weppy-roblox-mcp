# Roblox MCPツール

MCPツールの詳細パラメータはMCPツール定義を直接確認してください。

---

## Basicツール (68個)

### Instance (インスタンス) - 13個

| ツール | 説明 |
|------|-------------|
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

### Property (プロパティ) - 10個

| ツール | 説明 |
|------|-------------|
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

### Script (スクリプト) - 9個

| ツール | 説明 |
|------|-------------|
| `create_script` | 新しいスクリプトを作成 |
| `get_script_source` | スクリプトのソースコードを取得 |
| `set_script_source` | スクリプトのソースコードを更新 |
| `delete_script` | スクリプトを削除 |
| `edit_script_lines` | 特定の行を編集 |
| `insert_script_lines` | 行を挿入 |
| `delete_script_lines` | 行を削除 |
| `search_in_scripts` | スクリプト内を検索 |
| `get_script_dependencies` | 依存関係を取得 |

### Selection (選択) - 12個

| ツール | 説明 |
|------|-------------|
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
| `watch_selection` | 選択変更を監視 |

### Search (検索) - 2個

| ツール | 説明 |
|------|-------------|
| `search_by_name` | 名前でインスタンスを検索 |
| `search_by_class` | クラスでインスタンスを検索 |

### Tag (タグ) - 5個

| ツール | 説明 |
|------|-------------|
| `add_tag` | インスタンスにタグを追加 |
| `remove_tag` | インスタンスからタグを削除 |
| `get_tags` | インスタンスのタグ一覧を取得 |
| `get_tagged` | タグ付けされたインスタンス一覧を取得 |
| `has_tag` | インスタンスのタグ保有を確認 |

### Camera (カメラ) - 4個

| ツール | 説明 |
|------|-------------|
| `get_camera_info` | カメラ情報を取得 |
| `get_suggested_camera_view` | おすすめのカメラビューを取得 |
| `focus_camera_path` | パスでインスタンスにカメラをフォーカス |
| `focus_camera_position` | ワールド位置にカメラをフォーカス |

### Log (ログ) - 3個

| ツール | 説明 |
|------|-------------|
| `get_output_logs` | 出力ログを取得 |
| `clear_output_logs` | 出力ログをクリア |
| `get_recent_errors` | 最近のエラーを取得 |

### Connection (接続) - 2個

| ツール | 説明 |
|------|-------------|
| `get_connection_info` | 接続状態を取得 |
| `get_usage_status` | 使用量/割り当て状態を取得 |

---

## Proツール (+72個)
👉 [Proアップグレードガイド](pro-upgrade.md)

### Script (スクリプト) - 2個

| ツール | 説明 |
|------|-------------|
| `replace_in_scripts` | スクリプト内容を一括置換 |
| `execute_script` | Luauコードを直接実行 |

### Search (検索) - 6個

| ツール | 説明 |
|------|-------------|
| `get_file_tree` | ファイルツリーを取得 |
| `get_project_structure` | プロジェクト構造ツリーを取得 |
| `search_by_property` | プロパティで検索 |
| `search_by_tag` | タグで検索 |
| `get_descendants` | すべての子孫を取得 |
| `get_ancestors` | 祖先を取得 |

### Bulk (一括操作) - 8個

| ツール | 説明 |
|------|-------------|
| `mass_create_instances` | インスタンスを一括作成 |
| `mass_delete_instances` | インスタンスを一括削除 |
| `mass_set_property` | プロパティを一括設定 |
| `mass_get_property` | プロパティを一括取得 |
| `mass_duplicate` | インスタンスを一括複製 |
| `smart_duplicate` | オフセットを適用したスマート複製 |
| `batch_execute` | 複数コマンドを一括実行 |
| `modify_children` | すべての子を修正 |

### Asset (アセット) - 7個

| ツール | 説明 |
|------|-------------|
| `insert_model` | Creator Storeからモデルを挿入 |
| `get_asset_info` | アセット情報を取得 |
| `search_creator_store` | Creator Storeアセットを検索 |
| `search_and_insert_model` | モデルを検索して挿入 |
| `insert_free_model` | 無料モデルを挿入 |
| `insert_package` | パッケージを挿入 |
| `export_selection` | 選択項目をエクスポート |

### Environment (環境) - 5個

| ツール | 説明 |
|------|-------------|
| `set_lighting` | ライティングプロパティを設定 |
| `set_atmosphere` | Atmosphereプロパティを設定 |
| `set_sky` | Skyプロパティを設定 |
| `set_terrain` | Terrainプロパティを設定 |
| `set_time_of_day` | 時間を設定 |

### State (状態) - 9個

| ツール | 説明 |
|------|-------------|
| `sync_workspace_state` | Workspace状態を同期 |
| `get_workspace_snapshot` | Workspaceスナップショットを取得 |
| `get_recent_changes` | 最近の変更を取得 |
| `clear_change_history` | 変更履歴をクリア |
| `get_viewport_info` | ビューポート状態情報を取得 |
| `get_workspace_metadata` | Workspaceメタデータを取得 |
| `get_script_list` | スクリプト一覧を取得 |
| `get_selection_info` | 選択情報を取得 |
| `clear_state_cache` | 状態キャッシュをクリア |

### Spatial (空間) - 5個

| ツール | 説明 |
|------|-------------|
| `get_spatial_map` | エリアの空間マップを取得 |
| `find_empty_space` | エリア内の空きスペースを検索 |
| `get_bounds` | インスタンスのバウンディングボックスを取得 |
| `snap_to_grid` | 位置をグリッドにスナップ |
| `check_collision` | インスタンス間の衝突を確認 |

### Raycast (レイキャスト) - 8個

| ツール | 説明 |
|------|-------------|
| `raycast` | レイキャストを実行して衝突情報を取得 |
| `find_ground` | その地点の地面位置を検索 |
| `check_placement` | オブジェクト配置の可否を確認 |
| `multi_raycast` | 複数レイキャストを実行 |
| `scan_area` | エリアをスキャンしてハイトマップを生成 |
| `find_flat_areas` | 平坦な配置エリアを検索 |
| `find_spawn_positions` | 有効なスポーン位置を検索 |
| `analyze_walkable_area` | 移動可能エリアを分析 |

### Terrain (地形) - 14個

| ツール | 説明 |
|------|-------------|
| `terrain_fill_block` | ブロック形状で地形を塗りつぶし |
| `terrain_fill_ball` | 球形状で地形を塗りつぶし |
| `terrain_fill_cylinder` | 円筒形状で地形を塗りつぶし |
| `terrain_fill_wedge` | 楔形状で地形を塗りつぶし |
| `terrain_clear` | 地形を削除 (Regionオブジェクト使用) |
| `terrain_clear_region` | 地形を削除 (最小/最大座標使用) |
| `terrain_replace_material` | 地形マテリアルを置換 |
| `terrain_get_material_color` | 地形マテリアルの色を取得 |
| `terrain_set_material_color` | 地形マテリアルの色を設定 |
| `terrain_read_voxel` | 単一ボクセルを読み取り |
| `terrain_read_voxels` | ボクセルデータを読み取り |
| `terrain_write_voxels` | ボクセルデータを書き込み |
| `terrain_generate` | 手続き的に地形を生成 |
| `terrain_smooth` | 地形をスムーズに |

### Visualization (可視化) - 7個

| ツール | 説明 |
|------|-------------|
| `visualization_create_area` | エリア可視化を作成 |
| `visualization_create_marker` | マーカー可視化を作成 (プレビュー含む) |
| `visualization_create_line` | ライン可視化を作成 |
| `visualization_remove` | 可視化を削除 |
| `visualization_clear` | すべての可視化を削除 |
| `visualization_get_status` | 可視化状態を取得 |
| `visualization_focus` | 可視化項目にカメラをフォーカス |
