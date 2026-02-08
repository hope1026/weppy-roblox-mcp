# Gemini CLI 設定

[Google Gemini CLI](https://github.com/google-gemini/gemini-cli)でRoblox MCPを使用する方法です。

## 前提条件

1. **Node.js** (v18.0.0以上)
   ```bash
   node --version
   ```

2. **Gemini CLI** がインストール済み
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Roblox Studioプラグイン** のインストール完了

## MCPサーバーの登録

### 方法1: 設定ファイルの編集 (推奨)

`.gemini/settings.json` ファイルに以下の内容を追加してください:

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
| プロジェクト | `<プロジェクト>/.gemini/settings.json` |
| グローバル | `~/.gemini/settings.json` |

### 方法2: 環境変数の使用

特定の環境変数が必要な場合:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Gemini CLI** を起動して以下を入力:
   ```
   Roblox Studioで現在選択されているものを教えて
   ```

## MCPサーバー状態の確認

Gemini CLI内で `/mcp` コマンドを使用して接続されているサーバーの状態を確認できます:

```
/mcp
```

## 詳細設定

### ツールのフィルタリング

特定のツールのみを使用したり、除外したりできます:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "excludeTools": ["execute_script"],
      "includeTools": ["get_selection", "create_instance", "set_property"]
    }
  }
}
```

> `excludeTools` は `includeTools` より優先されます。

### デバッグモード

接続の問題をデバッグするには:

```bash
gemini --debug
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
- `/mcp` コマンドでサーバー状態を確認

### ツールの競合

複数のMCPサーバーで同じ名前のツールがある場合、`serverAlias__toolName` 形式でプレフィックスが付きます。

## 参考資料

- [Gemini CLI MCP公式ドキュメント](https://geminicli.com/docs/tools/mcp-server/)
- [Gemini CLI設定ガイド](https://geminicli.com/docs/get-started/configuration/)
