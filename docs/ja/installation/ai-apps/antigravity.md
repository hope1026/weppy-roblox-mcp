# Antigravity 設定

[Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)でRoblox MCPを使用する方法です。

> **Antigravity**はGoogleのエージェントベース開発プラットフォームで、AIエージェントがコード編集、ターミナル、ブラウザを横断して複雑なタスクを自律的に実行します。

## 前提条件

1. **Antigravity** がインストール済み（対応OS/要件は公式ドキュメント参照）
2. **Node.js**（v18.0.0以上、`npx` が利用可能）
3. **Roblox Studioプラグイン** のインストール完了

## MCPサーバーの登録

AntigravityではMCPサーバーを **エージェントパネル（Agent pane）** で管理します。

### Raw configで手動登録（推奨）

1. エージェントパネルで **⋯** → **MCP Servers** → **Manage MCP Servers** → **View raw config** をクリック

![MCP Serversメニューを開く](../../../assets/screenshots/antigravity/antigravity_mcp_services_menu.png)

2. 表示される設定（JSON）に以下の内容を追加/マージ:

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

![Raw configを編集](../../../assets/screenshots/antigravity/antigravity_mcp_raw.png)

3. 保存後、**Refresh**（またはUIの案内に従って再起動/更新）を実行

> 設定ファイルの実際のパス/名前はOSとAntigravityのバージョンによって異なる場合があります。必ず **View raw config** で案内される場所を基準に編集してください。

### オプション: 環境変数でポート/ログを調整

デフォルト値（HTTP `127.0.0.1:3002`）のまま利用することを推奨します。必要に応じて以下のように環境変数を設定できます:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_HOST": "127.0.0.1",
        "HTTP_PORT": "3002",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **WROX** → **Connect**
2. **Antigravity**で次を入力:
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
- ポート **3002** がファイアウォールでブロックされていないか確認
- エージェントパネル **⋯** → **MCP Servers** でサーバー状態を確認
- (上級) `HTTP_PORT` を変更した場合は、Roblox Studioプラグイン/ブリッジ設定も同じポートを使用するように合わせる必要があります。

## 参考資料

- [Google Antigravity 紹介](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)
- [Antigravity 開始ガイド（Codelab）](https://codelabs.developers.google.com/getting-started-google-antigravity)
