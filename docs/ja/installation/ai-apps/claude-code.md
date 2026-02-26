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
/plugin marketplace add hope1026/roblox-mcp

# プラグインをインストール
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

インストール確認:
```bash
/plugin list
```

### 方法2: バイナリをダウンロードして手動設定

1. [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)から最新リリースをダウンロード
2. ZIPを展開し、お使いのプラットフォーム用のGoバイナリのパスを確認
3. `.mcp.json` ファイルを作成:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> `<os>`: darwin, linux, windows / `<arch>`: amd64, arm64
> Windowsの場合、ファイル名の末尾は `.exe` です

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

手動でサーバーバイナリの起動をテスト:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### MCPツールが表示されない

Claude Codeで確認:
```
利用可能なMCPツールの一覧を表示して
```

## 参考資料

- [Claude Code公式ドキュメント](https://docs.anthropic.com/claude-code)
