# WEPPY Roblox Explorer 詳細ガイド

**WEPPY Roblox Explorer** は、Roblox Studio の Explorer ツリーを VSCode / Antigravity などのエディタ内で同じ形で表示する companion 拡張機能です。Studio とローカルを行き来することなく、同期済みインスタンス階層を閲覧し、スクリプトを開き、プロパティを編集できます。

> **任意** — Explorer は必須ではありません。MCP サーバーと Roblox Studio プラグインだけで、すべてのコア機能を利用できます。エディタ内でプロジェクト構造を閲覧したり、プロパティをすばやく確認・編集したい場合にインストールしてください。

![WEPPY Roblox Explorer — VSCode サイドバーに表示される Studio インスタンスツリー](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## なぜ Explorer を使うのか

Sync が生成するファイルだけで AI はプロジェクト全体の文脈を理解できますが、人間が直接閲覧するときはファイルパスだけでは構造が把握しづらいことがあります。Explorer は同じ sync データを **Roblox Studio と同じ階層構造** で再表示するため、次のような作業が楽になります。

- スクリプトがどのサービス / インスタンス配下にあるかを一目で把握
- 複数のサービスにまたがるインスタンスを名前・パスですばやく検索
- 同期状態 (modified / studio / conflict) をファイル単位で確認
- Studio に切り替えずにプロパティを編集

## 必要要件

- VSCode 1.85+ または Antigravity
- [Roblox MCP](../installation/README.md) をインストールし Sync を有効化 (Basic または Pro)
- プロジェクトルート以下に Sync が生成した `weppy-project-sync/place_*/.sync-meta.json` が存在すること

Explorer は基本的にディスク上の sync ファイルだけで動作し、ローカル MCP サーバーが動作中であれば、リアルタイムの sync 状態と direction 情報もあわせて反映されます。

## インストール方法

VSCode または Antigravity の Extensions サイドバー (`Ctrl+Shift+X` / `Cmd+Shift+X`) で **WEPPY Roblox Explorer** を検索し、**Install** をクリックしてください。

マーケットプレース直接リンク:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

## インスタンスツリーの閲覧

インストール後、VSCode の Activity Bar に **WEPPY Explorer** ビューが追加され、プロジェクトルートから sync ディレクトリを自動検出します。

- **サービスルート**: `Workspace`、`ReplicatedStorage`、`ServerScriptService` など、同期対象のサービスが最上位に表示されます。
- **Roblox クラスアイコン**: 200 以上の Studio アイコンが、ダーク / ライトテーマに応じて自動で切り替わります。
- **マルチ Place**: 複数 Place が同期されている場合、Place ごとに独立したツリールートとして表示されます。
- **自動更新**: sync ファイルが変更されると 500ms のデバウンスでツリーが自動更新されます。
- **Sync 状態バッジ**: `modified`、`studio`、`conflict` の状態がアイコン横に表示され、変更や競合をすぐに確認できます。

ツリー上でアイテムをクリックすると、そのインスタンスを構成するファイル (`.server.luau`、`.client.luau`、`.module.luau`、`.props.json` など) が開きます。右クリックメニューから `game.Workspace.Part` 形式でインスタンスパスをコピーしたり、デフォルトの VSCode エクスプローラーでファイル位置を表示したりできます。

## Property Panel

Explorer ツリーでインスタンスを選択し、**Open Properties** コマンドを実行すると、Studio の Properties ウィンドウと同じ形式のパネルが開きます。`.props.json` ファイルを直接編集することなく、グループ化された形でプロパティを確認・編集できます。

![Property Panel — VSCode 内で Studio と同じプロパティ編集画面を利用](../../assets/screenshots/roblox-explorer/roblox-explorer-property-window.png)

- **グループ別表示**: Appearance、Behavior、Data、Part、Transform など、Studio と同じ分類でプロパティが整理されます。
- **型対応エディタ**: 数値、文字列、Boolean、Color、Vector3、Enum などプロパティの型に合わせた入力ウィジェットが提供されます。
- **ファイルベース編集**: 変更内容は該当インスタンスの `*.props.json` ファイルに保存され、Sync の reverse 経路を通じて Studio へ反映されます (Pro, bidirectional 設定時)。
- **カスタムエディタ登録**: `.props.json` ファイルを直接開くと、デフォルトのエディタではなく Property Panel が自動的に起動します。

ツリー操作中に自動で Property Panel を開きたい場合は、設定で `robloxExplorer.propertyPanel.autoOpen` を `true` に変更してください。

## インスタンス検索

`WEPPY Explorer: Search Instances` コマンド (ビュー上部アイコンまたはコマンドパレット) を使うと、すべてのサービスにまたがって QuickPick 検索を実行できます。

- インスタンス名の部分一致で高速に検索
- 結果を選択するとツリー上の該当項目にフォーカスが移動
- 複数 Place が同期されている場合は Place 単位で検索結果が分離

## 設定

| 設定 | デフォルト | 説明 |
|------|--------|------|
| `robloxExplorer.mcpBaseUrl` | `""` | ローカル MCP HTTP のベース URL。空の場合は `http://127.0.0.1:3002`、`http://127.0.0.1:3003` の順に試行します。 |
| `robloxExplorer.syncRoot` | `""` | `weppy-project-sync` ルートの絶対パス。空の場合はワークスペースフォルダから自動検出します。 |
| `robloxExplorer.hidePropsFiles` | `false` | デフォルトの VSCode エクスプローラーで sync ファイル (`.props.json`、`_tree.json`、`.value.json`) を非表示にします。 |
| `robloxExplorer.autoRefresh` | `true` | sync ファイル変更時にツリーを自動更新します。 |
| `robloxExplorer.showSyncStatus` | `true` | ツリー項目に sync 状態バッジを表示します。 |
| `robloxExplorer.followFocusCue` | `false` | 外部 focus cue ファイルに従ってツリーを自動展開し、関連ファイルを開きます。 |
| `robloxExplorer.propertyPanel.autoOpen` | `false` | ツリーでインスタンスを選択したときに Property Panel を自動で開きます。 |

## コマンド

| コマンド | 説明 |
|--------|------|
| `WEPPY Explorer: Refresh` | インスタンスツリーを手動で更新 |
| `WEPPY Explorer: Search Instances` | すべてのサービスでインスタンスを検索 |
| `WEPPY Explorer: Open Backing File` | 選択したインスタンスの backing ファイルを開く |
| `WEPPY Explorer: Open Properties` | 選択したインスタンスの Property Panel を開く |
| `WEPPY Explorer: Copy Instance Path` | 完全なインスタンスパスをコピー (例: `game.Workspace.Part`) |
| `WEPPY Explorer: Reveal in Explorer` | デフォルトの VSCode エクスプローラーでファイル位置を表示 |
| `WEPPY Explorer: Collapse All` | ツリーのすべてのノードを折りたたむ |
| `WEPPY Explorer: Open Settings` | Explorer 設定ページを開く |

## トラブルシューティング

- **ツリーが空**: `weppy-project-sync/place_*` ディレクトリが存在し、Sync が少なくとも 1 回 Full Sync を完了しているか確認してください。必要であれば `robloxExplorer.syncRoot` を手動で指定します。
- **Sync 状態が表示されない**: ローカル MCP サーバーが動作中か確認し、`robloxExplorer.mcpBaseUrl` を明示的に設定してみてください。
- **Property Panel が開かない**: `.props.json` ファイルがデフォルトエディタで開く場合、ファイルを右クリックして **Reopen Editor With... → WEPPY Property Panel** を選択してください。
- **アイコンが崩れる**: VSCode のテーマを選び直すか、ウィンドウを再起動してアイコンキャッシュを更新してください。

## 関連ドキュメント

- [Roblox MCP インストールガイド](../installation/README.md)
- [Sync ガイド](../sync/overview.md)
- [Tools 概要](../tools/overview.md)
