# Roblox MCP

[English](../../README.md) | [한국어](../ko/README.md) | **日本語** | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

> AIに話しかけるだけで、Roblox Studioで実行されます。

[![デモ](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## 主要機能

### 1) MCP Tool: 自然言語の指示をStudioで直接実行

Roblox MCPの第一の柱は**MCP Tool実行**です。
AIがStudio内で、スクリプト、インスタンス、プロパティ、地形、ライティング、アセット、オーディオ、アニメーションを直接処理します。

- 「プレイヤーのジャンプ時に、パーティクル + サウンド + クールタイムを追加して。」
- 「マップ中央にボスアリーナを作って、衝突しないスポーンポイントを配置して。」
- 「このモジュールのインターフェースを変えて、依存スクリプトを全部更新して。」

単なるコード生成ではなく、**実行可能な作業単位**として処理できる点が重要です。

### 2) Sync: AIがプロジェクト全体の文脈を維持

第二の柱は**Project Sync**です。
同期されたローカルミラーを基準にAIが作業するため、複数ファイルにまたがる変更も一貫して適用できます。

- Basic: 片方向同期 (Studio -> Local)
- Pro: 双方向同期 + タイプ別Direction/Apply Mode + 変更履歴 + マルチPlace

どちらを正とするかを明確に保ち、変更文脈の取りこぼしを防げます。

## すぐに実感できる価値

- 反復作業を圧縮: 多数の手作業を1つの指示に集約
- 関連ファイルを同時に変更: 単一ファイル修正で終わらない
- リスク低減: 同期状態と履歴を見ながら安全に変更
- トークン効率向上 (Pro): バルク処理で往復回数を削減

## 詳細ドキュメント

- [Tool対応範囲 (Tools Overview)](tools/overview.md)
- [Sync機能詳細ガイド](sync/overview.md)

## はじめに

インストールは2つのステップで完了します:

1. **Roblox Studioプラグインのインストール** — StudioとAIを接続する橋渡し
2. **AIアプリにMCPサーバーを登録** — 使用するAIアプリでRoblox MCPを認識

5分で終わります。👉 [インストールガイド](installation/README.md)

## Proアップグレード

双方向Sync、高度な制作機能、AIトークン効率 — 一度のアップグレードで全てを手に入れる。

👉 [Proアップグレードガイド](pro-upgrade.md)

## リンク

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [Issue報告](https://github.com/hope1026/roblox-mcp/issues)
