# Roblox MCP

> Roblox Studio用MCPサーバー＆プラグイン — Claude Code、Cursor、Codex、GeminiでスクリプトやTerrain、アセット、ライティングをAI制御。

[English](../../README.md) | [한국어](../ko/README.md) | **日本語** | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![デモ](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## クイックインストール（5分）

**Step 1** — Roblox Studioプラグインのインストール（StudioとAIを接続する橋渡し）:
[プラグインインストールガイド](../en/installation/roblox-plugin.md)

**Step 2** — AIアプリにMCPサーバーを登録:

```bash
npx -y @weppy/roblox-mcp
```

| AIアプリ | ガイド |
|---------|--------|
| Claude Code | [セットアップ](../en/installation/ai-apps/claude-code.md) |
| Claude Desktop | [セットアップ](../en/installation/ai-apps/claude-app.md) |
| Codex CLI | [セットアップ](../en/installation/ai-apps/codex-cli.md) |
| Codex Desktop | [セットアップ](../en/installation/ai-apps/codex-app.md) |
| Gemini CLI | [セットアップ](../en/installation/ai-apps/gemini-cli.md) |

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

### 3) Roblox Explorer: VSCodeでStudioの階層構造を閲覧

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

- [インストールガイド](../en/installation/README.md)
- [Tool対応範囲](../en/tools/overview.md)
- [Sync機能詳細ガイド](../en/sync/overview.md)
- [Roblox Explorer (VSCode拡張)](../en/installation/roblox-explorer.md)
- [互換性](../compatibility.md)
- [トラブルシューティング](../troubleshooting.md)

## Proアップグレード

双方向Sync、高度な制作機能、AIトークン効率 — 一度のアップグレードで全てを手に入れる。

[Proアップグレードガイド](../en/pro-upgrade.md)

---

[GitHubイシュー](https://github.com/hope1026/roblox-mcp/issues) · [Discussions](https://github.com/hope1026/roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
