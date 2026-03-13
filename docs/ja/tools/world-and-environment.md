# ワールド環境

> ライティング、Terrain、空間クエリ、カメラを使ってゲームワールドを構築し、確認します。

## 含まれるツール

| ツール | ティア | 説明 |
|--------|:------:|------|
| `manage_lighting` | Pro | Lighting、Atmosphere、Sky、時間帯の設定 |
| `manage_terrain` | Pro | Terrain生成、編集、ボクセルデータ管理 |
| `spatial_query` | Pro | レイキャスト、地面探索、配置検証、高低差マップ |
| `manage_camera` | Basic | カメラ状態確認、フォーカス移動、推奨ビュー取得 |

## 主なワークフロー

### ワールドの雰囲気を作る（Pro）

```
"夕暮れの雰囲気にして。オレンジ色の空、濃い霧、時間は18時。"
```

`manage_lighting.time` で時刻を設定し、`manage_lighting.atmosphere` で霧を調整し、`manage_lighting.sky` で空を変更します。

### Terrainを作る（Pro）

```
"マップ中央に半径200の草の丘を作って、その周囲を水で囲んで。"
```

`manage_terrain.fill_ball` で丘を作り、`manage_terrain.fill_block` で周囲の水を配置します。

### 配置を検証する（Pro）

```
"この建物を置ける平らな場所を見つけて。"
```

`spatial_query.find_flat` で候補を探し、`spatial_query.check_placement` で衝突を確認し、`manage_camera.focus_position` で視覚確認します。

## アクションリファレンス

### Manage Lighting（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `lighting` | Lightingサービスプロパティを設定 | Pro |
| `atmosphere` | Atmosphereプロパティを設定 | Pro |
| `sky` | Skyプロパティを設定 | Pro |
| `terrain_props` | Terrain水/視覚プロパティを設定 | Pro |
| `time` | 時間帯を設定 | Pro |

### Manage Terrain（Pro）

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

### Spatial Query（Pro）

| アクション | 説明 | ティア |
|------------|------|--------|
| `raycast` | 単一レイを投射 | Pro |
| `find_ground` | 点の下の地面位置を探す | Pro |
| `check_placement` | 配置が衝突なしか確認 | Pro |
| `multi_raycast` | 複数レイを一括投射 | Pro |
| `scan_area` | 領域の高さマップを生成 | Pro |
| `find_flat` | 建築向けの平坦地を探す | Pro |
| `find_spawn` | 適切なスポーン位置を探す | Pro |
| `analyze_walkable` | 移動可能グリッドを解析 | Pro |
| `spatial_map` | すべてのBasePart位置を取得 | Pro |
| `find_space` | オブジェクト用の空き空間を探す | Pro |
| `bounds` | インスタンスのバウンディングボックスを取得 | Pro |
| `snap_grid` | 位置をグリッドにスナップ | Pro |
| `collision` | AABB衝突を確認 | Pro |

### Manage Camera（Basic）

| アクション | 説明 | ティア |
|------------|------|--------|
| `info` | カメラ位置、回転、FOV、ビューポートサイズを取得 | Basic |
| `focus_path` | カメラをインスタンスへフォーカス移動 | Basic |
| `focus_position` | カメラを位置へフォーカス移動 | Basic |
| `suggest` | ターゲット向け推奨カメラビューを取得 | Basic |

## 関連ドキュメント

- [インスタンス & プロパティ](instances-and-properties.md) - ワールドオブジェクト配置
- [アセット & オブジェクト演出](assets-and-effects.md) - エフェクト、音、アニメーション
- [Tool一覧](overview.md)
