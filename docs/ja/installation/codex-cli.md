# Codex CLI 設定

[OpenAI Codex CLI](https://github.com/openai/codex) (ターミナルベースのAIコーディングツール)でRoblox MCPを使用する方法です。

## 前提条件

- **Node.js** (v18.0.0以上)
- **Roblox Studioプラグイン** のインストール完了

## インストール

```bash
npm install -g @openai/codex
```

## MCPサーバーの登録

### 方法1: CLIコマンド (推奨)

```bash
codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp
```

### 方法2: 設定ファイルを直接編集

`~/.codex/config.toml` ファイルに以下の内容を追加してください:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "npx"
args = ["-y", "@weppy/roblox-mcp"]
```

**設定ファイルの場所:**

| OS | パス |
|----|------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Codex CLI** を起動して以下を入力:
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

- [Codex CLI GitHub](https://github.com/openai/codex)
- [Codex MCP公式ドキュメント](https://developers.openai.com/codex/mcp/)
- [Codex設定リファレンス](https://developers.openai.com/codex/config-reference/)
