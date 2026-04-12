# Cursor セットアップ

[Cursor](https://cursor.com/) で Roblox MCP を使う方法です。

## 前提条件

- **Cursor** がインストール済み
- **Node.js** (v18.0.0 以上)
- **Roblox Studio プラグイン** がインストール済み

## MCP サーバー登録

### 方法 1: プロジェクト設定

プロジェクトの `.cursor/mcp.json` に次を追加します。

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

### 方法 2: グローバル設定

グローバル Cursor MCP 設定ファイルにも同じ内容を追加できます。

**設定ファイルの場所:**

| 範囲 | パス |
|------|------|
| プロジェクト | `<project>/.cursor/mcp.json` |
| グローバル (macOS/Linux) | `~/.cursor/mcp.json` |
| グローバル (Windows) | `%USERPROFILE%\\.cursor\\mcp.json` |

> 既存ファイルがある場合は、`mcpServers` オブジェクトへ `weppy-roblox-mcp` を追加してください。

### 反映

設定を保存したら Cursor ウィンドウを再読み込みするか、アプリを再起動してください。

## 接続テスト

1. **Roblox Studio** を開く → Plugins タブ → **WEPPY** → **Connect**
2. **Cursor** で次を入力:
   ```
   Tell me what's currently selected in Roblox Studio
   ```

## トラブルシューティング

### MCP サーバーが表示されない

- 設定ファイルのパスが正しいか確認する
- JSON 構文が有効か確認する
- 設定変更後に Cursor を再読み込みしたか確認する

### サーバーが起動しない

直接 MCP サーバーを起動してエラーを確認します。

```bash
npx -y @weppy/roblox-mcp
```

### 接続に失敗する

- Roblox Studio プラグインが **Connected** 状態か確認する
- ポート 3002 がファイアウォールでブロックされていないか確認する

## 参考資料

- [Cursor MCP ドキュメント](https://docs.cursor.com/context/model-context-protocol)
