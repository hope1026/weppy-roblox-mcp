# Roblox MCP — Roblox Studio MCPサーバー | Claude、Codex、Cursor、GeminiでAIゲーム開発

> **WEPPY**は、AIコーディングエージェントがライブRoblox Studioセッションを制御できるMCPサーバーです — 自然言語でスクリプト、インスタンス、Terrain、ライティング、アセット、オーディオ、アニメーションを作成・編集します。

**アクションベース統合ツール · 双方向Sync · 自動プレイテスト · マルチPlace対応**

[English](../../README.md) | [한국어](../ko/README.md) | **日本語** | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![デモ — AIがリアルタイムでRobloxゲームを制作する様子](https://img.youtube.com/vi/puQB4u1VlMw/maxresdefault.jpg)](https://youtu.be/puQB4u1VlMw)

## WEPPY（Weppy Roblox MCP）を使う理由

Claude、Codex、GeminiなどのAIコーディングエージェントは強力ですが、Roblox Studioの内部は見ることも変更することもできません。DataModel、スクリプト、Terrain、ライティングはすべて外部ツールからは不可視です。ブリッジがなければ、AIはコードスニペットを生成するだけで、手動で貼り付ける必要があります。

**WEPPY**は、AIエージェントとRoblox Studioをつなぐブリッジです。AIがStudio内でインスタンス、スクリプト、プロパティ、Terrainなどを直接作成・変更すると、変更内容がStudioとダッシュボードに即座に反映され、**何が変わったか一目で確認**できます。

コードをコピー＆ペーストする必要はありません。AIが作業し、あなたが結果を確認するワークフローです。

## クイックインストール

Webページのガイドに沿ってインストールできます。

👉 **[インストールページ](https://weppyai.com/ja/install)**

### ターミナル ワンラインインストール

ターミナルに慣れている方は、1行ですべてインストールできます。

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

AIアプリを再起動し、Roblox Studioを再起動してください。

自動MCP登録は **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity** に対応しています。

### 手動インストール

ワンラインインストールが動作しない場合:

**Step 1** — Roblox Studioプラグインのインストール:
[プラグインインストールガイド](installation/roblox-plugin.md)

**Step 2** — AIアプリにMCPサーバーを登録:

```bash
npx -y @weppy/roblox-mcp
```

| AIアプリ | ガイド |
|---------|--------|
| Claude Code | [セットアップ](installation/ai-apps/claude-code.md) |
| Claude Desktop | [セットアップ](installation/ai-apps/claude-app.md) |
| Cursor | [セットアップ](installation/ai-apps/cursor.md) |
| Codex CLI | [セットアップ](installation/ai-apps/codex-cli.md) |
| Codex Desktop | [セットアップ](installation/ai-apps/codex-app.md) |
| Gemini CLI | [セットアップ](installation/ai-apps/gemini-cli.md) |
| Antigravity | [セットアップ](installation/ai-apps/antigravity.md) |

> MCP対応のAIアプリであれば利用できます。サーバーコマンド: `npx -y @weppy/roblox-mcp`

## 互換性

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI | Antigravity |
|:-----------:|:--------------:|:------:|:---------:|:----------:|:-----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**要件:** Node.js 18+、Roblox Studio、Windows 10+ または macOS 12+

## 主要機能

### 1) MCP Tool: 自然言語の指示をStudioで直接実行

AIがStudio内で、スクリプト、インスタンス、プロパティ、地形、ライティング、アセット、オーディオ、アニメーションを直接処理します。

- 「プレイヤーのジャンプ時に、パーティクル + サウンド + クールタイムを追加して。」
- 「マップ中央にボスアリーナを作って、衝突しないスポーンポイントを配置して。」
- 「このモジュールのインターフェースを変えて、依存スクリプトを全部更新して。」

### 2) Sync: AIがプロジェクト全体の文脈を維持

同期されたローカルミラーを基準にAIが作業するため、複数ファイルにまたがる変更も一貫して適用できます。

- Basic: 片方向同期（Studio -> Local）
- Pro: 双方向同期 + タイプ別Direction/Apply Mode + 変更履歴 + マルチPlace

![Syncワークフロー — Studioとローカルファイルがリアルタイムで同期される様子](../assets/screenshots/plugin/sync/sync-overview.png)

### 3) Playtest: AIがテストを自動実行して検証

AIがStudioプレイテストを直接制御します。Play（F5）/Run（F8）の開始と停止だけでなく、テストスクリプト注入、ログ収集、レポート生成まで自動化できます。

- 「Runモードでプレイテストを開始して、NPCが目標地点まで移動するか確認して。」
- 「SpawnLocationが地面の上にあることを確認するテストを書いて実行して。」
- 「今修正したスクリプトがエラーなしで動くかプレイテストで検証して。」

![WEPPYプレイテスト ダッシュボード — テスト履歴と詳細レポート](../assets/screenshots/dashboard/dashboard_playtest.png)

### 4) WEPPY Dashboard: AI作業をリアルタイムでモニタリング

MCPサーバーが提供するWebダッシュボードで、接続状態、ツール実行履歴、同期状態、ゲーム変更履歴をリアルタイムで確認します。

- サーバー/プラグイン/エージェントの接続状態を一目で確認
- AIが変更したすべての内容をChangelogでBefore & Afterで比較
- ツール実行履歴と統計で作業フローを分析

![ダッシュボード Overview — サーバー状態、最近の変更、セッション要約](../assets/screenshots/dashboard/dashboard_overview.png)

### 5) WEPPY Roblox Explorer: VSCodeでStudioの階層構造を閲覧

Roblox Studioのインスタンスツリー全体をVSCode内で直接確認できます。サービスを探索し、同期されたスクリプトやプロパティファイルを開き、同期状態を追跡 — Studioに切り替える必要はありません。
WEPPY Roblox Explorerは、WEPPYが生成するsyncデータを扱うcompanion VSCode拡張です。基本のツリー閲覧は同期済みファイルだけで動作し、ローカルMCPサーバーが動作中ならlive sync状態やdirection表示がより正確に反映されます。
[VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) または [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer) からインストールできます。

- Studio同様のクラスアイコンで直感的に識別
- クリックで同期済みスクリプトとプロパティファイルを開く
- 同期状態表示付きのマルチPlaceサポート

![WEPPY Roblox Explorer — VSCodeサイドバーに表示されるStudioインスタンスツリー](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## すぐに実感できる価値

- 反復作業を圧縮: 多数の手作業を1つの指示に集約
- 関連ファイルを同時に変更: 単一ファイル修正で終わらない
- リスク低減: 同期状態と履歴を見ながら安全に変更
- トークン効率向上（Pro）: バルク処理で往復回数を削減

## ユースケース

- **ラピッドプロトタイピング**: 自然言語でゲームメカニクスを説明するだけでAIがStudioで構築
- **一括リファクタリング**: モジュールインターフェースを変更し、すべての依存スクリプトを一度に更新
- **Terrain・環境**: 手続き的地形生成、ライティング/雰囲気設定、アセット配置を1つのプロンプトで
- **マルチファイル一貫性**: AIがSyncでプロジェクト全体を読み取り、関連スクリプトをまとめて変更
- **アセット統合**: Creator Storeの検索、モデルの挿入、プロパティの設定をエディタから離れずに実行

## 詳細ドキュメント

- [インストールガイド](installation/README.md)
- [Tool一覧](tools/overview.md)
- [Sync機能詳細ガイド](sync/overview.md)
- [WEPPY Dashboard ガイド](dashboard/overview.md)
- [WEPPY Roblox Explorer 詳細ガイド](explorer/overview.md)
- [WEPPY Roblox Explorer インストール](installation/roblox-explorer.md)
- [互換性](../compatibility.md)
- [トラブルシューティング](../troubleshooting.md)

### 機能別ツールガイド

- [インスタンス & プロパティ](tools/instances-and-properties.md) - 検索、作成、編集、タグ
- [スクリプト & コード実行](tools/scripting.md) - スクリプト管理、Luau実行
- [ワールド環境](tools/world-and-environment.md) - ライティング、Terrain、カメラ
- [アセット & オブジェクト演出](tools/assets-and-effects.md) - モデル挿入、トゥイーン、エフェクト
- [プレイテスト & 自動テスト](tools/playtest.md) - プレイテスト制御、自動検証
- [システム & デバッグ](tools/system-and-debugging.md) - 接続、ログ、バッチ実行

## FAQ

### Claude CodeをRoblox Studioに接続するには？
Roblox Studioプラグインをインストールし、Claude CodeにMCPサーバー（`npx -y @weppy/roblox-mcp`）を登録してください。ClaudeがStudio内のスクリプトを直接読み書きできるようになります。[Claude Codeセットアップ](installation/ai-apps/claude-code.md)を参照してください。

### Codex CLIでRoblox Studioを使うには？
プラグインをインストールし、Codex CLIにMCPサーバー設定を追加してください。[Codex CLIセットアップ](installation/ai-apps/codex-cli.md)を参照してください。

### Roblox MCPはCursorで動きますか？
はい。[Cursorセットアップ](installation/ai-apps/cursor.md)を参照してください。MCP対応のAIクライアントであれば利用できます。

### AIでRobloxゲームを作れますか？
はい。AIはインスタンスの作成、スクリプトの記述、地形の生成、ライティングの設定、アセットの挿入、物理の設定など、すべてをライブStudioセッション内で直接実行します。コード生成を超えて実行可能なアクションまで処理します。

### BasicとProの違いは？
Basic（無料）にはMCPツール実行と片方向同期（Studio -> Local）が含まれます。Proは双方向同期、バルク操作、地形生成、空間分析、オーディオ/アニメーション制御、マルチPlaceサポートを追加します。[Proアップグレードガイド](https://weppyai.com/ja/plans)を参照してください。

### Weppyは他のRoblox MCPサーバーとどう違いますか？
Weppyは機能ごとに個別ツールを分ける代わりにアクションベースのディスパッチを使用します。これによりAIトークン消費が大幅に削減されます。また、双方向プロジェクト同期とマルチPlaceサポートを提供しますが、他の代替製品にはないことがほとんどです。

### 安全ですか？AIがゲームを壊すことはありますか？
サーバーはlocalhost（127.0.0.1:3002）でのみ動作します。禁止パス（CoreGui、CorePackages）はブロックされます。レート制限（450 req/min）と30秒タイムアウトが暴走操作を防ぎます。すべての変更は同期履歴で追跡できます。

## Proアップグレード

双方向Sync、高度な制作機能、AIトークン効率 — 一度のアップグレードで全てを手に入れる。

[Proアップグレードガイド](https://weppyai.com/ja/plans)

## ライセンス

このリポジトリは`AGPL-3.0`ライセンスの下で公開されています。

商用ライセンスは別途提供されています。[COMMERCIAL-LICENSE.md](../../COMMERCIAL-LICENSE.md)をご覧ください。

Weppyの名前およびロゴの使用は[TRADEMARKS.md](../../TRADEMARKS.md)に準拠します。

---

[![npm version](https://img.shields.io/npm/v/@weppy/roblox-mcp)](https://www.npmjs.com/package/@weppy/roblox-mcp) [![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/) [![Smithery](https://smithery.ai/badge/@hope1026/weppy-roblox-mcp)](https://smithery.ai/server/@hope1026/weppy-roblox-mcp)

[![Roblox MCP on Glama](https://glama.ai/mcp/servers/hope1026/roblox-mcp/badges/card.svg)](https://glama.ai/mcp/servers/hope1026/roblox-mcp)

[GitHubイシュー](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
