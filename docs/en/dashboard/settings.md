# Settings

> View and manage license information, server settings, sync settings, and language.

## Overview

The Settings page lets you view license information and server settings, and modify some of them. It is accessible whenever the server is connected (L1 or above).

## License (Read-Only)

Displays the current license status:

| Field | Description |
|-------|-------------|
| Status | Status badge (Active/Inactive) |
| Tier | Current tier (Basic/Pro) |
| License Key | Masked license key |
| Provider | License provider information |

## General

| Setting | Description |
|---------|-------------|
| Log Level | Log output level |
| History Recording | Whether tool execution history is saved |
| Stats Collection | Whether tool statistics are collected |
| Request Timeout | Request timeout (seconds) |

## Server Environment (Read-Only)

Displays server settings configured via environment variables:

| Environment Variable | Description | Default |
|---------------------|-------------|---------|
| `HTTP_PORT` | HTTP port | 3002 |
| `HTTP_HOST` | HTTP host | 127.0.0.1 |
| `DASHBOARD_AUTO_OPEN` | Auto-open dashboard | true |

## Sync Settings

| Setting | Description |
|---------|-------------|
| Max Depth | Maximum sync depth |
| Max Instances | Maximum number of synced instances |

## Language

Change the dashboard UI language. 6 languages + Auto (automatic browser language detection) are supported.

| Option | Language |
|--------|----------|
| Auto | Automatic browser language detection |
| English | English |
| 한국어 | Korean |
| 日本語 | Japanese |
| Español | Spanish |
| Português | Portuguese |
| Bahasa Indonesia | Indonesian |

## Related Documents

- [Dashboard Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
