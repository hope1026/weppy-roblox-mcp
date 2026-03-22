# Settings

> ライセンス情報、サーバー設定、同期設定、言語を確認・管理します。

## 概要

Settingsページではライセンス情報とサーバー設定を確認し、一部を変更できます。サーバーが接続されていれば（L1以上）常にアクセスできます。

## License（読み取り専用）

現在のライセンス状態を表示します：

| 項目 | 説明 |
|------|------|
| Status | 状態バッジ（Active/Inactive） |
| Tier | 現在のティア（Basic/Pro） |
| License Key | マスクされたライセンスキー |
| Provider | ライセンスプロバイダー情報 |

## General

| 設定 | 説明 |
|------|------|
| Log Level | ログ出力レベル |
| History Recording | ツール実行履歴の保存有無 |
| Stats Collection | ツール統計収集の有無 |
| Request Timeout | リクエストタイムアウト（秒） |

## Server Environment（読み取り専用）

環境変数で設定されたサーバー設定を表示します：

| 環境変数 | 説明 | デフォルト値 |
|----------|------|--------|
| `HTTP_PORT` | HTTPポート | 3002 |
| `HTTP_HOST` | HTTPホスト | 127.0.0.1 |
| `DASHBOARD_AUTO_OPEN` | ダッシュボード自動オープン | true |

## Sync Settings

| 設定 | 説明 |
|------|------|
| Max Depth | 同期最大深度 |
| Max Instances | 同期最大インスタンス数 |

## Language

ダッシュボードUI言語を変更します。6言語 + Auto（ブラウザ言語自動検出）をサポートしています。

| オプション | 言語 |
|------|------|
| Auto | ブラウザ言語自動検出 |
| English | 英語 |
| 한국어 | 韓国語 |
| 日本語 | 日本語 |
| Español | スペイン語 |
| Português | ポルトガル語 |
| Bahasa Indonesia | インドネシア語 |

## 関連ドキュメント

- [ダッシュボード Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
