# インストールガイド

Roblox MCPを使用するには、**2つ**をインストールする必要があります。

```
AIアプリ (Claude、Codex、Geminiなど)
       │
   MCPサーバー ← ここでAIの命令をRobloxが理解できる形式に変換
       │
Roblox Studioプラグイン ← Studio内で命令を実行
```

AIアプリが「青いパーツを作って」と言うと、MCPサーバーがこのリクエストを変換し、Roblox Studioプラグインが実際にパーツを作成します。

---

## ワンラインインストール（推奨）

MCPサーバー、Roblox Studioプラグイン、AIアプリへの登録を一度に完了します：

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Roblox Studioを再起動したら完了です！

自動でMCP登録できるのは現在 **Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI** です。
**Codex App** と **Antigravity** はスクリプト完了後に手動設定が必要です。

WindowsでPowerShellの実行がブロックされる場合は、下の手動インストールに進んでください。ZIPパッケージを使う場合は `setup-plugin.bat` と `setup-mcp.bat` を実行できます。

---

## 手動インストール

ワンラインインストールが動作しない場合、または環境上自動インストールを使えない場合に進める代替インストール方法です。

### ステップ1: Roblox Studioプラグインのインストール

GitHubからプラグインファイルをダウンロードして、Roblox StudioのPluginsフォルダに配置します。

👉 [プラグインインストールガイド](roblox-plugin.md)

---

### ステップ2: AIアプリにMCPサーバーを登録

使用しているAIアプリにMCPサーバーを登録します。MCPをサポートするすべてのAIアプリで使用できます。

| AIアプリ | 設定方法 |
|---------|---------|
| Claude Code | [設定手順](ai-apps/claude-code.md) |
| Claude Desktop | [設定手順](ai-apps/claude-app.md) |
| Cursor | [設定手順](ai-apps/cursor.md) |
| Codex CLI | [設定手順](ai-apps/codex-cli.md) |
| Codex Desktop | [設定手順](ai-apps/codex-app.md) |
| Gemini CLI | [設定手順](ai-apps/gemini-cli.md) |
| Antigravity | [設定手順](ai-apps/antigravity.md) |

> 上記のリストにないAIアプリでも、MCPをサポートしていれば使用できます。MCPサーバーコマンド: `npx -y @weppy/roblox-mcp`

---

## オプション: Roblox Explorer (VSCode拡張) のインストール

同期されたインスタンスツリーをRobloxクラスアイコン付きでVSCode内で閲覧できます。
この拡張を使うには、先に上記のRoblox MCPセットアップを完了している必要があります。ExplorerはSyncが生成した`roblox-project-sync`データを読み取るためです。

👉 [Roblox Explorerインストールガイド](roblox-explorer.md)

---

## インストール後

1. **Roblox Studio**を開き、Pluginsタブから **W-MCP** → **Connect** をクリック
2. **AIアプリ**で次のようにテストしてみてください:

```
Roblox Studioに青いパーツを作って
```

正常にパーツが作成されれば、インストール完了です!
