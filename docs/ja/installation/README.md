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

## ステップ1: Roblox Studioプラグインのインストール

GitHubからプラグインファイルをダウンロードして、Roblox StudioのPluginsフォルダに配置します。

👉 [プラグインインストールガイド](roblox-plugin.md)

---

## ステップ2: AIアプリにMCPサーバーを登録

使用しているAIアプリにMCPサーバーを登録します。MCPをサポートするすべてのAIアプリで使用できます。

| AIアプリ | 設定方法 |
|---------|---------|
| Claude Code | [設定手順](ai-apps/claude-code.md) |
| Cline | [設定手順](ai-apps/cline.md) |
| Roo Code | [設定手順](ai-apps/roo-code.md) |
| Cursor | [設定手順](ai-apps/cursor.md) |
| Zed | [設定手順](ai-apps/zed.md) |
| その他のMCP対応アプリ | [設定手順](ai-apps/other-mcp-clients.md) |

> 上記のリストにないAIアプリでも、MCPをサポートしていれば使用できます。MCPサーバーコマンド: `npx -y @weppy/roblox-mcp`

---

## インストール後

1. **Roblox Studio**を開き、Pluginsタブから **W-MCP** → **Connect** をクリック
2. **AIアプリ**で次のようにテストしてみてください:

```
Roblox Studioに青いパーツを作って
```

正常にパーツが作成されれば、インストール完了です!
