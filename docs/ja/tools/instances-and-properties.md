# インスタンス & プロパティ

> Roblox Studioのインスタンスを検索、作成、編集し、プロパティ、アトリビュート、タグを管理します。

## 含まれるツール

| ツール | ティア | 説明 |
|--------|:------:|------|
| `query_instances` | 混合 | インスタンス検索、階層探索、クラス情報確認 |
| `mutate_instances` | 混合 | インスタンス作成、削除、複製、移動、名前変更 |
| `manage_properties` | 混合 | プロパティ、アトリビュート、タグの読み書き |

## 主なワークフロー

### シーン構造を把握する

```
"Workspace配下のすべてのPartを検索して、位置とサイズを教えて。"
```

`query_instances.search_class` で Part を探し、`manage_properties.mass_get` で `Position` と `Size` を一括取得します。

### オブジェクトをまとめて配置する

```
"マップ中央に SpawnLocation を4つ正方形に配置して、それぞれ別の TeamColor を設定して。"
```

`mutate_instances.mass_create` でまとめて作成し、`manage_properties.mass_set` でプロパティを一括設定します。

### タグでまとめて管理する

```
"Collectible タグが付いたオブジェクトを全部探して Anchored を true にして。"
```

`manage_properties.get_tagged` で対象を集め、`manage_properties.mass_set` でまとめて更新します。

## アクションリファレンス

### Query Instances（混合）

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

### Mutate Instances（混合）

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

### Manage Properties（混合）

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

## 関連ドキュメント

- [スクリプト & コード実行](scripting.md) - インスタンス上のスクリプトを追加、修正
- [アセット & オブジェクト演出](assets-and-effects.md) - モデル挿入、トゥイーン、エフェクト
- [Tool一覧](overview.md)
