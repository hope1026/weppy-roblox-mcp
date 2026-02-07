# Robloxプラグインのインストール

Roblox StudioでAIエージェントと連携するためのプラグインインストール方法です。

## 1. プラグインのダウンロード

1. [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)から `weppy-roblox-mcp-basic.zip` をダウンロードします
2. ZIPファイルを解凍します — `roblox-plugin/WeppyRobloxMCP.rbxm` ファイルとセットアップガイドが含まれています

## 2. プラグインのインストール

1. **Roblox Studio** を起動
2. 上部メニューの **Plugins** タブをクリック
3. **Plugins Folder** ボタンをクリック

![Plugins Folderを開く](../../assets/screenshots/plugins_menu.png)

4. 解凍したフォルダから `WeppyRobloxMCP.rbxm` ファイルを開いたPluginsフォルダに**コピー**
5. **Roblox Studioを再起動**

## 3. インストール確認

再起動後、Pluginsタブに **W-MCP** ボタンが表示されます。

![W-MCPボタン](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. AIエージェントとの接続

### 事前準備

MCPサーバーがインストールされている必要があります。お使いのAIアプリに合ったガイドを先に完了してください:

| AIアプリ | インストールガイド |
|-------|-------------|
| Claude Code | [設定方法](claude-code.md) |
| Claude Desktop | [設定方法](claude-app.md) |
| Codex CLI | [設定方法](codex-cli.md) |
| Codex Desktop | [設定方法](codex-app.md) |
| Gemini CLI | [設定方法](gemini-cli.md) |
| Cursor, Windsurf など | [設定方法](antigravity.md) |

### 接続する

1. **Roblox Studio**で任意のプロジェクトを開きます
2. 上部の **Plugins** タブ → **W-MCP** をクリック
3. プラグインウィンドウで **Connect** ボタンをクリック

![接続ガイド](../../assets/screenshots/connection_guide.png)

4. **"Connected"** 状態が表示されたら接続完了！

![プラグインメイン画面](../../assets/screenshots/plugin_main.png)

## 5. 設定 (オプション)

プラグイン右上の設定ボタンをクリックすると、さまざまなオプションを変更できます。

![設定画面](../../assets/screenshots/settings.png)

- **自動接続**: Studio起動時に自動的にMCPサーバーに接続
- **自動再接続**: 接続が切断された場合に自動的に再接続を試行
- **自動カメラフォーカス**: 作成されたオブジェクトにカメラを自動移動
- **言語**: プラグインUIの言語を変更

## トラブルシューティング

### プラグインが表示されない

- Roblox Studioを完全に終了してから再起動
- Plugins Folderにファイルが正しくコピーされているか確認
- `.rbxm` ファイルが破損していないか確認

### 接続できない

- AIアプリでMCPサーバーが実行中か確認
- プラグインで **Connect** ボタンを再度クリック
- ポート3002が他のプログラムで使用されていないか確認

### 接続がよく切れる

- 設定で **自動再接続** オプションを有効化
- AIアプリを再起動してみてください
