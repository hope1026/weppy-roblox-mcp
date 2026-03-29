# Connection

> 서버, AI 에이전트, 플러그인의 연결 상태를 한 곳에서 모니터링합니다.

![Connection — 서버 상태, AI 에이전트, 플러그인 연결 정보](../../assets/screenshots/dashboard/dashboard_connection.png)

## 개요

Connection 페이지는 MCP 시스템의 모든 연결 상태를 한 곳에서 모니터링합니다. 대시보드가 **서버 연결됨** 또는 **Studio 연결됨** 상태이면 항상 접근할 수 있습니다.

## Server Status

서버의 핵심 정보를 표시합니다:

| 항목 | 설명 |
|------|------|
| Status | 연결 상태 배지 (Online/Offline) |
| Version | MCP 서버 버전 |
| PID | 서버 프로세스 ID |
| Uptime | 서버 가동 시간 |
| Session ID | 현재 세션 식별자 |
| Exec Path | 서버 실행 경로 |

## AI Agents

현재 연결된 AI 에이전트 목록을 테이블로 표시합니다:

| 열 | 설명 |
|----|------|
| Name | 에이전트 이름 (예: Claude Code) |
| PID | 에이전트 프로세스 ID |
| Working Dir | 에이전트 작업 디렉토리 |
| Connected | 연결 경과 시간 |

여러 에이전트가 동시에 연결된 경우 모두 표시됩니다.

## Plugins

연결된 Roblox Studio 플러그인 목록을 표시합니다:

| 열 | 설명 |
|----|------|
| Place | Place 이름 |
| Client ID | 플러그인 클라이언트 식별자 |
| Last Seen | 마지막 통신 시간 |
| Version | 플러그인 버전 |

## Connection Log

연결 관련 이벤트를 실시간으로 표시합니다. SSE를 통해 에이전트/플러그인의 연결/해제 이벤트가 자동으로 추가됩니다.

## 활용 사례

### 연결 문제 진단

```
"AI가 Studio와 연결되지 않는 것 같다"
```

Server Status가 Online인지, Plugins 테이블에 플러그인이 표시되는지 확인합니다. Connection Log에서 연결/해제 이벤트를 추적할 수 있습니다.

### 에이전트 확인

```
"지금 어떤 AI가 연결되어 있는지 확인하고 싶다"
```

AI Agents 테이블에서 현재 연결된 에이전트의 이름, PID, 작업 디렉토리를 확인합니다.

## 관련 문서

- [대시보드 Overview](overview.md)
- [Changelog](changelog.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
