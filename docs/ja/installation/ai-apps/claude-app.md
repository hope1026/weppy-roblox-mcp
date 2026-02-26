# Claude Desktop App 設定

[Claude Desktop App](https://claude.ai/download)でRoblox MCPを使用する方法です。

## 前提条件

- **Claude Desktop App** がインストール済み
- **Roblox Studioプラグイン** のインストール完了

## MCPサーバーの登録

### 方法1: Desktop Extensions (推奨)

> 2026年からブラウザ拡張機能のようにワンクリックでインストール可能

1. Claude Desktop → **Settings** → **Extensions**
2. `weppy-roblox-mcp` を検索
3. **Install** をクリック

### 方法2: 設定ファイルを直接編集

1. Claude Desktop → **Settings** → **Developers** → **Edit Config** をクリック

2. [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)からお使いのプラットフォーム用のMCPサーバーバイナリをダウンロード

3. `claude_desktop_config.json` ファイルに以下の内容を追加:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> `<path-to>` をバイナリをダウンロードした実際のディレクトリに置き換えてください。
> `<os>`: `darwin`, `linux`, `windows` / `<arch>`: `amd64`, `arm64`
> Windowsの場合、ファイル名の末尾は `.exe` です（例: `weppy-roblox-mcp-windows-amd64.exe`）。

4. Claude Desktopを**完全に終了**してから再起動

**設定ファイルの場所:**

| OS | パス |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Claude Desktop**で新しい会話を開始してテスト:
   ```
   Roblox Studioに青いパーツを作って
   ```

## トラブルシューティング

### MCPサーバーがロードされない

1. **JSON構文の確認**: オンラインのJSON validatorで設定ファイルを検証
2. **Claude Desktopの完全再起動**: 設定変更後は必ずアプリを完全終了してから再起動
3. **パスの確認**: commandとargsが正しいか確認

### サーバーが起動しない場合

MCPサーバーバイナリを直接実行してエラーを確認してください:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### 接続失敗

- Roblox Studioプラグインが **Connected** 状態か確認
- ポート3002がファイアウォールでブロックされていないか確認

## 参考資料

- [Claude Desktop MCP公式ガイド](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [MCPサーバー接続ガイド](https://modelcontextprotocol.io/docs/develop/connect-local-servers)
