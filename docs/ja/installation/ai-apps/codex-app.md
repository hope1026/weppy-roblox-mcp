# Codex App 設定

[OpenAI Codex App](https://openai.com/codex/) (macOS)でRoblox MCPを使用する方法です。

> **2026年2月2日リリース** - マルチエージェントワークフローをサポートするネイティブmacOSアプリ

## 前提条件

- **Codex App** がインストール済み (macOS)
- **Roblox Studioプラグイン** のインストール完了

## MCPサーバーの登録

### Codex CLI設定の自動同期

Codex CLIで既にMCPを設定している場合、**追加設定なしで**アプリですぐに使用できます。

```
CLIのセッション履歴と設定は自動的にアプリに同期されます。
```

### 新規設定の場合

アプリ内の **Settings** → **MCP Servers** で追加:

```
Server name: weppy-roblox-mcp
Command: npx -y @weppy/roblox-mcp
```

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Codex App**で新しい会話を開始してテスト:
   ```
   Roblox Studioで現在選択されているものを教えて
   ```

## トラブルシューティング

### サーバーが起動しない場合

MCPサーバーを直接実行してエラーを確認してください:
```bash
npx -y @weppy/roblox-mcp
```

### 接続失敗

- Roblox Studioプラグインが **Connected** 状態か確認
- ポート3002がファイアウォールでブロックされていないか確認

## 参考資料

- [Codex App紹介](https://openai.com/index/introducing-the-codex-app/)
- [Codex MCP公式ドキュメント](https://developers.openai.com/codex/mcp/)
