# 대시보드

> MCP 서버의 상태, 연결, 동기화, 도구 실행 기록, 게임 변경 이력을 웹 브라우저에서 실시간으로 확인하고 관리합니다.

![대시보드 Overview — 서버 상태, 최근 변경 사항, 세션 요약을 한눈에 확인](../../assets/screenshots/dashboard/dashboard_overview.png)

## 대시보드란?

대시보드는 MCP 서버가 제공하는 웹 기반 모니터링 인터페이스입니다. MCP 서버가 실행되면 자동으로 브라우저에서 열리며, AI 에이전트가 Roblox Studio에서 수행하는 모든 작업을 실시간으로 추적할 수 있습니다.

- 터미널 로그를 뒤질 필요 없이 시각적으로 상태를 파악
- AI가 Studio에서 무엇을 변경했는지 변경 이력으로 추적
- 동기화 상태, 연결 상태, 도구 실행 통계를 한 곳에서 확인

## 페이지 구성

| 페이지 | 설명 | 상세 가이드 |
|--------|------|------------|
| [Overview](#overview) | 서버/플러그인/에이전트/Sync 상태 카드, 최근 변경 피드 | 이 문서 |
| [Changelog](changelog.md) | 게임 변경 이력 — 세션별 카드, 변경 요약, 타임라인, Before & After | [상세 가이드](changelog.md) |
| [Connection](connection.md) | 서버 상태, AI 에이전트 목록, 플러그인 연결 정보 | [상세 가이드](connection.md) |
| [Sync](sync.md) | 동기화 상태, 방향 설정, 로그 | [상세 가이드](sync.md) |
| [Playtest](playtest.md) | 플레이테스트 상태, 테스트 기록 | [상세 가이드](playtest.md) |
| [Tools](tools.md) | 도구 실행 기록, 통계, 티어 분포 | [상세 가이드](tools.md) |
| [Settings](settings.md) | 라이선스, 로그 레벨, Sync 설정, 언어 | [상세 가이드](settings.md) |

## 접속 방법

MCP 서버가 실행되면 대시보드가 자동으로 브라우저에서 열립니다. 수동으로 접속하려면:

```
http://localhost:3002
```

> `DASHBOARD_AUTO_OPEN=false`로 설정하면 자동 열림을 비활성화할 수 있습니다 ([Settings](settings.md) 페이지에서 확인).

## 연결 레벨

대시보드는 연결 상태에 따라 사용 가능한 기능이 달라집니다:

| 레벨 | 조건 | 사용 가능한 페이지 |
|:----:|------|-------------------|
| **L0** | 서버 미연결 | 재연결 대기 화면만 표시 |
| **L1** | 서버 연결, 플러그인 미연결 | Connection, Tools, Settings |
| **L2** | 서버 + 플러그인 모두 연결 | 모든 페이지 |

플러그인이 연결되지 않은 상태(L1)에서는 Overview, Changelog, Sync, Playtest 페이지에 접근할 수 없습니다.

## Overview

Overview 페이지는 대시보드의 첫 화면으로, 시스템 전체 상태를 한눈에 보여줍니다.

### 상태 카드

| 카드 | 표시 정보 |
|------|----------|
| **Server** | 서버 연결 상태 (Online/Offline) |
| **Plugin** | 플러그인 연결 상태, Place 정보 |
| **Agent** | 현재 연결된 AI 에이전트 이름 |
| **Sync** | 동기화 상태 (Idle/Syncing/Error) |

### 최근 게임 변경 (Recent Game Changes)

AI가 Studio에서 수행한 최근 변경 사항을 실시간으로 표시합니다 (최대 20개). 각 항목은 변경 카테고리 아이콘과 함께 표시되며, 클릭하면 [Changelog](changelog.md)의 상세 뷰로 이동합니다.

카테고리 아이콘:
- Script — 스크립트 생성/수정
- Instance — 인스턴스 생성/삭제/이동
- Property — 속성 변경
- Lighting — 조명/환경 설정
- Terrain — 지형 변경
- Asset — 에셋 삽입

### 세션 변경 요약 (Session Change Summary)

현재 세션의 변경 통계를 카테고리별로 집계하여 보여줍니다 (예: "4 scripts · 3 properties").

## 실시간 업데이트

대시보드는 SSE(Server-Sent Events)를 사용하여 실시간으로 데이터를 업데이트합니다:

- 서버 상태: 5초 간격 폴링
- 변경 피드, 연결 이벤트: SSE 실시간 스트리밍
- SSE 연결 끊김 시: 3초 후 자동 재연결

## 관련 문서

- [Changelog](changelog.md) — 게임 변경 이력 추적
- [Connection](connection.md) — 서버/에이전트/플러그인 연결 상태
- [Sync](sync.md) — 동기화 상태 모니터링
- [Playtest](playtest.md) — 플레이테스트 기록
- [Tools](tools.md) — 도구 실행 기록/통계
- [Settings](settings.md) — 라이선스, 서버 설정, 언어
- [Tool 전체 목록](../tools/overview.md)
- [Sync 기능 상세 가이드](../sync/overview.md)
