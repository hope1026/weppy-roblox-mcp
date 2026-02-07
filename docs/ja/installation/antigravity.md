# Antigravity 設定

[Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)でRoblox MCPを使用する方法です。

> **Antigravity**はGoogleのエージェントベース開発プラットフォームで、AIエージェントがコード編集、ターミナル、ブラウザを横断して複雑なタスクを自律的に実行します。

## 前提条件

1. **Antigravity** がインストール済み (macOS, Windows, Linux対応)
2. **Roblox Studioプラグイン** のインストール完了

## MCPサーバーの登録

### 方法1: MCP Storeからインストール (推奨)

1. Antigravityを起動
2. **Settings** → **MCP** に移動
3. MCP Storeで `weppy-roblox-mcp` を検索
4. **Install** をクリック

### 方法2: 設定ファイルを直接編集

1. Antigravityで **⋯** メニュー → **MCP Servers** → **Manage MCP Servers** → **View raw config** をクリック

2. `mcp_config.json` ファイルに以下の内容を追加:

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

3. 保存後、**Manage MCP Servers** で **Refresh** をクリック

**設定ファイルの場所:**

| OS | パス |
|----|------|
| macOS/Linux | `~/.gemini/antigravity/mcp_config.json` |
| Windows | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |

### 方法3: Agentに依頼

Antigravity Agentに直接依頼することもできます:

```
Roblox MCP (@weppy/roblox-mcp)をMCPサーバーとして追加して
```

## 重要: 絶対パスの使用

> **注意**: Antigravityは `${workspaceFolder}` 変数をサポートしていません。必ず**絶対パス**を使用してください。

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "PROJECT_ROOT": "/Users/username/projects/my-roblox-game"
      }
    }
  }
}
```

## 接続テスト

1. **Roblox Studio** を起動 → Pluginsタブ → **W-MCP** → **Connect**
2. **Antigravity**で以下を入力:
   ```
   Roblox Studioで現在選択されているものを教えて
   ```

## Skillsの活用

Antigravityの**Skills**システムと組み合わせることで、より強力なワークフローを構築できます:

- プロジェクト別のRoblox開発ワークフローを定義
- よく使うタスクをSkillとしてパッケージ化
- エージェントが自動的にタスクを計画、実行、検証

## サポートモデル

AntigravityでRoblox MCPを使用する際、以下のモデルを選択できます:

| モデル | 特徴 |
|------|------|
| **Gemini 3 Pro** | デフォルトモデル、無料で使用可能 |
| **Claude Sonnet 4.5** | Anthropicモデル対応 |
| **GPT-OSS** | OpenAIモデル対応 |

## トラブルシューティング

### サーバーが起動しない場合

MCPサーバーを直接実行してエラーを確認してください:
```bash
npx -y @weppy/roblox-mcp
```

### 接続失敗

- Roblox Studioプラグインが **Connected** 状態か確認
- ポート3002がファイアウォールでブロックされていないか確認
- Settings → MCPでサーバー状態を確認

### 絶対パスエラー

`${workspaceFolder}` を使用するとエラーが発生します。絶対パスに変更してください:

```json
// ❌ 間違い
"args": ["--workspace", "${workspaceFolder}"]

// ✅ 正しい
"args": ["--workspace", "/absolute/path/to/project"]
```

## 参考資料

- [Antigravity入門ガイド](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Antigravity MCP連携ガイド](https://composio.dev/blog/howto-mcp-antigravity)
- [Antigravity Skillsコレクション](https://github.com/sickn33/antigravity-awesome-skills)
