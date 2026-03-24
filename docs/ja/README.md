# Roblox MCP — Roblox Studio MCPサーバー | Claude、Codex、Cursor、GeminiでAIゲーム開発

> **Weppy Roblox MCP**は、AIコーディングエージェントがライブRoblox Studioセッションを制御できるMCPサーバーです — 自然言語でスクリプト、インスタンス、Terrain、ライティング、アセット、オーディオ、アニメーションを作成・編集します。

**21統合ツール · 140+アクション · 双方向Sync · 自動プレイテスト · マルチPlace対応**

[English](../../README.md) | [한국어](../ko/README.md) | **日本語** | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![デモ — AIがリアルタイムでRobloxゲームを制作する様子](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## クイックインストール

**ワンラインインストール** — MCPサーバー、Roblox Studioプラグイン、AIアプリへの登録を一度に完了します：

```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash

# Windows (PowerShell)
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Roblox Studioを再起動したら完了です！

WindowsでPowerShellの実行がブロックされる場合は、下の手動インストールに進んでください。ZIPパッケージを使う場合は `setup-plugin.bat` と `setup-mcp.bat` も利用できます。

### 手動インストール

ワンラインインストールが動作しない場合、または環境上自動インストールを使えない場合は、以下の手動インストールを代替手段として進めてください。

**Step 1** — Roblox Studioプラグインのインストール（StudioとAIを接続する橋渡し）:
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

> MCP対応のAIアプリであれば利用できます。サーバーコマンド: `npx -y @weppy/roblox-mcp`

## 互換性

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI |
|:-----------:|:--------------:|:------:|:---------:|:----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

**要件:** Node.js 18+、Roblox Studio、Windows 10+ または macOS 12+

## 主要機能

### 1) MCP Tool: 自然言語の指示をStudioで直接実行

AIがStudio内で、スクリプト、インスタンス、プロパティ、地形、ライティング、アセット、オーディオ、アニメーションを直接処理します。

- 「プレイヤーのジャンプ時に、パーティクル + サウンド + クールタイムを追加して。」
- 「マップ中央にボスアリーナを作って、衝突しないスポーンポイントを配置して。」
- 「このモジュールのインターフェースを変えて、依存スクリプトを全部更新して。」

単なるコード生成ではなく、**実行可能な作業単位**として処理できる点が重要です。

### 2) Sync: AIがプロジェクト全体の文脈を維持

同期されたローカルミラーを基準にAIが作業するため、複数ファイルにまたがる変更も一貫して適用できます。

![Syncワークフロー — Studioとローカルファイルがリアルタイムで同期される様子](../assets/screenshots/sync.png)

- Basic: 片方向同期（Studio -> Local）
- Pro: 双方向同期 + タイプ別Direction/Apply Mode + 変更履歴 + マルチPlace

### 3) Playtest: AIがテストを自動実行して検証

AIがStudioプレイテストを直接制御します。Play（F5）/Run（F8）の開始と停止だけでなく、テストスクリプト注入、ログ収集、レポート生成まで自動化できます。

- 「Runモードでプレイテストを開始して、NPCが目標地点まで移動するか確認して。」
- 「SpawnLocationが地面の上にあることを確認するテストを書いて実行して。」
- 「今修正したスクリプトがエラーなしで動くかプレイテストで検証して。」

### 4) Dashboard: AI作業をリアルタイムでモニタリング

MCPサーバーが提供するWebダッシュボードで、接続状態、ツール実行履歴、同期状態、ゲーム変更履歴をリアルタイムで確認します。

![ダッシュボード Overview — サーバー状態、最近の変更、セッション要約](../assets/screenshots/dashboard/dashboard_overview.png)

- サーバー/プラグイン/エージェントの接続状態を一目で確認
- AIが変更したすべての内容をChangelogでBefore & Afterで比較
- ツール実行履歴と統計で作業フローを分析

### 5) Roblox Explorer: VSCodeでStudioの階層構造を閲覧

Roblox Studioのインスタンスツリー全体をVSCode内で直接確認できます。サービスを探索し、同期されたスクリプトやプロパティファイルを開き、同期状態を追跡 — Studioに切り替える必要はありません。

![Roblox Explorer — VSCodeサイドバーに表示されるStudioインスタンスツリー](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Studio同様のクラスアイコンで直感的に識別
- クリックで同期済みスクリプトとプロパティファイルを開く
- 同期状態表示付きのマルチPlaceサポート

## すぐに実感できる価値

- 反復作業を圧縮: 多数の手作業を1つの指示に集約
- 関連ファイルを同時に変更: 単一ファイル修正で終わらない
- リスク低減: 同期状態と履歴を見ながら安全に変更
- トークン効率向上（Pro）: バルク処理で往復回数を削減

## 詳細ドキュメント

- [インストールガイド](installation/README.md)
- [Tool一覧](tools/overview.md)
- [Sync機能詳細ガイド](sync/overview.md)
- [ダッシュボードガイド](dashboard/overview.md)
- [Roblox Explorer (VSCode拡張)](installation/roblox-explorer.md)
- [互換性](../compatibility.md)
- [トラブルシューティング](../troubleshooting.md)

### 機能別ツールガイド

- [インスタンス & プロパティ](tools/instances-and-properties.md) - 検索、作成、編集、タグ
- [スクリプト & コード実行](tools/scripting.md) - スクリプト管理、Luau実行
- [ワールド環境](tools/world-and-environment.md) - ライティング、Terrain、カメラ
- [アセット & オブジェクト演出](tools/assets-and-effects.md) - モデル挿入、トゥイーン、エフェクト
- [プレイテスト & 自動テスト](tools/playtest.md) - プレイテスト制御、自動検証
- [システム & デバッグ](tools/system-and-debugging.md) - 接続、ログ、バッチ実行

## Proアップグレード

双方向Sync、高度な制作機能、AIトークン効率 — 一度のアップグレードで全てを手に入れる。

[Proアップグレードガイド](pro-upgrade.md)

---

[GitHubイシュー](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
