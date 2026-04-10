# Roblox MCP Sync 詳細ガイド

SyncはRoblox Studioの状態とローカルファイルを接続し、AIがプロジェクト全体の文脈を安定して読み取り・変更できるようにする機能です。

## なぜSyncが重要か

Syncがない場合、AIはチャットに貼られた断片だけを見て判断します。Syncを有効にすると、プロジェクト全体を基準に作業できます。

- 複数スクリプトにまたがるリファクタリングを一貫して適用
- 変更履歴を使って高リスクな変更を素早く確認
- Studioとローカルのどちらを正とするかを明確化

## 基本の動作

![Syncワークフロー — Studioツリーがローカルファイルにミラーされる様子](../../assets/screenshots/plugin/sync/sync-overview.png)

1. Full Sync: Studioツリー/インスタンスをローカルに初期ミラー
2. Incremental Sync: 以後の変更分のみを継続反映
3. History/Status追跡: いつ・どの方向で何が変わったかを確認

Sync データは `{projectRoot}/wrox-project-sync/place_{placeId}/explorer` 配下に生成されます。
加えて、WROX は place ごとの sourcemap を `{projectRoot}/wrox-project-sync/place_{placeId}/sourcemap.json` に書き出し、推奨されるルート代表ファイルを `{projectRoot}/wrox-project-sync/sourcemap.json` に維持します。
`luau-lsp` などのエディタ連携ではルートパスの利用を推奨します。設定手順は [WROX Sync で `luau-lsp` を使う](./luau-lsp.md) を参照してください。

### VSCodeで同期データを閲覧する

[WROX Roblox Explorer](../installation/roblox-explorer.md) 拡張機能をインストールすると、Roblox Studioと同じようにVSCode上で同期済みインスタンスツリーを閲覧できます。
Explorerはここで生成されたsyncファイルを読み取り、ローカルMCPサーバーが動作中なら追加でlive sync状態とdirection情報も表示できます。

![WROX Roblox Explorer — VSCodeで同期済みインスタンスツリーを閲覧](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Robloxクラスアイコン付きのサービス/インスタンスツリー
- スクリプトをクリックして編集用に開く
- 同期ステータスバッジで変更/コンフリクト状態を表示

## Basic vs Pro

| 項目 | Basic | Pro |
|------|------|-----|
| 同期方向 | Studio -> Local | 双方向 |
| タイプ別Direction | 非対応 | 対応 (Scripts / Values / Containers / Data / Services) |
| タイプ別Apply Mode | 非対応 | 対応 (Auto / Manual) |
| 状態/履歴API | 非対応 | 対応 (`status`, `history`, `progress`) |
| `manage_sync` ツール | 非対応 | 対応 |
| マルチPlace Sync | 非対応 | 対応 (最大3 Place) |

## 同期対象と既定の除外ルール

既定の同期対象サービス:

- `Workspace`
- `Lighting`
- `ReplicatedStorage`
- `ServerStorage`
- `ServerScriptService`
- `StarterGui`
- `StarterPlayer`
- `StarterPack`
- `ReplicatedFirst`
- `SoundService`
- `Chat`
- `LocalizationService`

既定の除外項目:

- クラス: `Terrain`, `Camera`
- セキュリティ上アクセス禁止のパス: `CoreGui`, `CorePackages`, `RobloxScript`, `RobloxScriptSecurity`

## Direction と Apply Mode

### Direction（タイプ別同期方向）

- `forward`: Studio -> Local
- `reverse`: Local -> Studio
- `bidirectional`: 双方向

タイプは `scripts`, `values`, `containers`, `data`, `services` に分かれて管理されます。

### Apply Mode（reverse変更の適用方法）

- `manual`: Studio反映前にユーザー確認
- `auto`: 検出された変更を自動適用

ProではタイプごとにDirection/Apply Modeを細かく制御できます。

## `manage_sync` アクションガイド (Pro)

| アクション | 説明 | 主な引数 |
|------|------|-----------|
| `status` | Placeの現在の同期状態を確認 | `placeId` |
| `history` | 変更履歴を取得 | `placeId`, `query.limit`, `query.offset` |
| `directions` | タイプ別Directionを取得 | `placeId` |
| `read_file` | 同期ファイルを読み取り | `placeId`, `instancePath` |
| `write_file` | 同期ファイルに書き込み | `placeId`, `instancePath`, `content` |
| `progress` | リアルタイム進行状況/処理量を取得 | `placeId` |

## 推奨ワークフロー

### 1) 安全に開始

- まずFull Syncを完了して基準点を作る
- 初期は `manual` 適用でリスクを下げる

### 2) AIと変更作業

- 「Sync状態を確認して、直近履歴からリスクの高い変更だけ要約して」
- 「`ServerScriptService` のスクリプトを先にリファクタリングして、履歴も残して」

### 3) コンフリクトの解決

双方向同期中にStudioとローカルの両方で変更が検出されると、コンフリクト解決ダイアログが表示されます。

![Local Changes Detected — コンフリクト解決オプション (Studio Priority / Local Priority / Per-File)](../../assets/screenshots/plugin/sync/sync-conflict.png)

- **Studio Priority**: Studio側の状態を基準に上書き
- **Local Priority**: ローカルファイルをStudioに反映
- **Per-File**: ファイルごとにどちら側を優先するか個別に選択

### 4) 問題時の復旧

- `history` で最近の変更を追跡
- `read_file` で対象ファイルを確認
- `write_file` で内容を復元してStudio状態を再確認

## ファイルフォーマット (v2 nested directory)

各Robloxインスタンスは独自のディレクトリとして保存され、ディレクトリ内にメタファイルが配置されます:

```
explorer/
├── Workspace/
│   ├── _tree.json
│   ├── Part/
│   │   └── Part.props.json
│   ├── MyScript/
│   │   └── MyScript.server.luau
│   └── Coins/
│       └── Coins.value.json
```

命名規則:
- プロパティ: `{Name}/{Name}.props.json`
- スクリプト: `{Name}/{Name}.server.luau` / `.client.luau` / `.module.luau`
- 値: `{Name}/{Name}.value.json`

同名インスタンスはディレクトリ名に `~N` サフィックスを付けて区別します（例: `Part~2/Part.props.json`）。
名前に `~` が含まれる場合は `~~` にエスケープされます（例: `Part~2` → `Part~~2/`）。Odd-Count Tilde ルール: 末尾の `~+N` でチルダの数が奇数の場合のみ collision suffix として解釈されます。

## 関連ドキュメント

- [WROX Sync で `luau-lsp` を使う](./luau-lsp.md)
- [Tool対応範囲 (Tools Overview)](../tools/overview.md)
- [Proアップグレードガイド](https://weppyai.com/ja/plans)
