# Gemini CLI セットアップ

[Google Gemini CLI](https://github.com/google-gemini/gemini-cli)でRoblox MCPを使用する方法です。

## 前提条件

1. **Node.js** (v18.0.0以上)
   ```bash
   node --version
   ```

2. **Gemini CLI** インストール済み
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Roblox Studioプラグイン** インストール完了

## MCPサーバーの登録

### 方法1: CLIコマンド（推奨）

ターミナルで1行で登録できます：

```bash
gemini mcp add weppy-roblox-mcp npx --trust -- -y @weppy/roblox-mcp
```

> `--trust`フラグは、ツール呼び出し時の確認プロンプトをスキップします。

グローバル設定として登録するには、`-s user`を追加してください：

```bash
gemini mcp add weppy-roblox-mcp npx -s user --trust -- -y @weppy/roblox-mcp
```

### 方法2: 設定ファイルの編集

`.gemini/settings.json`ファイルに以下の内容を追加してください：

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
| スコープ | パス |
|----------|------|
| プロジェクト | `<プロジェクト>/.gemini/settings.json` |
| グローバル | `~/.gemini/settings.json` |

### 方法3: 環境変数の使用

特定の環境変数が必要な場合：

**CLI:**
```bash
gemini mcp add weppy-roblox-mcp npx --trust -e HTTP_PORT=3002 -- -y @weppy/roblox-mcp
```

**設定ファイル:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_PORT": "3002"
      }
    }
  }
}
```

## 接続テスト

1. **Roblox Studio**を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Gemini CLI**を実行して次のように入力：
   ```
   Roblox Studioで現在選択されているものを教えて
   ```

## MCPサーバーの状態確認

Gemini CLI内で`/mcp`コマンドを使用して、接続されたサーバーの状態を確認できます：

```
/mcp
```

## トラブルシューティング

### サーバーが起動しない場合

MCPサーバーを直接実行してエラーを確認してください：
```bash
npx -y @weppy/roblox-mcp
```

### 接続失敗

- Roblox Studioプラグインが**Connected**状態であることを確認
- ポート3002がファイアウォールでブロックされていないか確認
- `/mcp`コマンドでサーバーの状態を確認

### ツールの競合

複数のMCPサーバーに同じ名前のツールがある場合、`serverAlias__toolName`形式でプレフィックスが付けられます。

## 参考資料

- [Gemini CLI MCP公式ドキュメント](https://geminicli.com/docs/tools/mcp-server/)
- [Gemini CLI設定ガイド](https://geminicli.com/docs/get-started/configuration/)
