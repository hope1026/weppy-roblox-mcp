# Connection

> サーバー、AIエージェント、プラグインの接続状態を一か所でモニタリングします。

![Connection — サーバー状態、AIエージェント、プラグイン接続情報](../../assets/screenshots/dashboard/dashboard_connection.png)

## 概要

ConnectionページはMCPシステムのすべての接続状態を一か所でモニタリングします。サーバーが接続されていれば（L1以上）常にアクセスできます。

## Server Status

サーバーの主要情報を表示します：

| 項目 | 説明 |
|------|------|
| Status | 接続状態バッジ（Online/Offline） |
| Version | MCPサーバーバージョン |
| PID | サーバープロセスID |
| Uptime | サーバー稼働時間 |
| Session ID | 現在のセッション識別子 |
| Exec Path | サーバー実行パス |

## AI Agents

現在接続されているAIエージェント一覧をテーブルで表示します：

| 列 | 説明 |
|----|------|
| Name | エージェント名（例：Claude Code） |
| PID | エージェントプロセスID |
| Working Dir | エージェント作業ディレクトリ |
| Connected | 接続経過時間 |

複数のエージェントが同時に接続されている場合、すべて表示されます。

## Plugins

接続されているRoblox Studioプラグイン一覧を表示します：

| 列 | 説明 |
|----|------|
| Place | Place名 |
| Client ID | プラグインクライアント識別子 |
| Last Seen | 最終通信時間 |
| Version | プラグインバージョン |

## Connection Log

接続関連イベントをリアルタイムで表示します。SSEを通じてエージェント/プラグインの接続/切断イベントが自動的に追加されます。

## 活用事例

### 接続問題の診断

```
「AIがStudioと接続されていないようだ」
```

Server StatusがOnlineか、PluginsテーブルにプラグインがUPされているかを確認します。Connection Logで接続/切断イベントを追跡できます。

### エージェント確認

```
「今どのAIが接続されているか確認したい」
```

AI Agentsテーブルで現在接続されているエージェントの名前、PID、作業ディレクトリを確認します。

## 関連ドキュメント

- [ダッシュボード Overview](overview.md)
- [Changelog](changelog.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
