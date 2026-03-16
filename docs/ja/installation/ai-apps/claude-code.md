# Claude Code 設定

[Claude Code](https://claude.ai/code) (ターミナルベースのAIコーディングツール)でRoblox MCPを使用する方法です。

## 前提条件

- **Claude Code** がインストール済み
- **Roblox Studioプラグイン** のインストール完了

## インストール

```bash
npm install -g @anthropic-ai/claude-code
```

## MCPサーバーの登録

### 方法1: マーケットプレイスからインストール (推奨)

Claude Codeターミナルで実行:

```bash
# マーケットプレイスを追加
/plugin marketplace add hope1026/weppy-roblox-mcp

# プラグインをインストール
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

インストール確認:
```bash
/plugin list
```

### 方法2: 設定ファイルを直接編集

`.mcp.json` ファイルを作成:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"]
    }
  }
}
```

**設定ファイルの場所:**

| 範囲 | パス |
|------|------|
| プロジェクト | `<プロジェクト>/.mcp.json` |
| グローバル | `~/.claude/mcp.json` |

## 自動サーバー管理

Claude CodeはMCPサーバーを自動的に管理します:

- 必要時に自動起動
- セッション終了時に自動停止
- 追加設定は不要

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Claude Code**でテスト:
   ```
   Roblox Studioに青いパーツを作って
   ```

## トラブルシューティング

### プラグインのインストール失敗

```bash
# キャッシュをクリアして再試行
/plugin cache clear
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

### サーバーが起動しない

1. Node.jsのバージョンを確認 (18.0以上が必要):
   ```bash
   node --version
   ```

2. 手動でサーバー起動をテスト:
   ```bash
   npx -y @weppy/roblox-mcp
   ```

### MCPツールが表示されない

Claude Codeで確認:
```
利用可能なMCPツールの一覧を表示して
```

## 参考資料

- [Claude Code公式ドキュメント](https://docs.anthropic.com/claude-code)
