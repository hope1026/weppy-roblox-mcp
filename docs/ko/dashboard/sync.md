# Sync

> Studio ↔ 로컬 파일 동기화의 현재 상태, 방향 설정, 로그를 모니터링합니다.

![Sync — 동기화 상태, 방향 설정, 로그](../../assets/screenshots/dashboard/dashboard_sync.png)

> Sync 기능 자체의 상세 가이드는 [Sync 기능 상세 가이드](../sync/overview.md)를 참고하세요.

## 개요

Sync 페이지는 Studio ↔ 로컬 파일 동기화의 현재 상태와 설정을 시각적으로 보여줍니다. 대시보드가 **Studio 연결됨** 상태일 때만 접근할 수 있습니다.

## Sync Status

현재 동기화 상태를 표시합니다:

| 상태 | 의미 |
|------|------|
| **Idle** | 동기화 대기 중 |
| **Initializing** | 초기 동기화 진행 중 |
| **Syncing** | 증분 동기화 진행 중 |
| **Error** | 동기화 오류 발생 |

상태 카드에는 동기화 경로, 동기화된 인스턴스 수, 현재 적용 모드(Auto/Manual)가 함께 표시됩니다.

## Sync Directions

타입별 동기화 방향을 테이블로 보여줍니다:

| 열 | 설명 |
|----|------|
| Type | 동기화 대상 타입 (Scripts, Values, Instances, Data, Services) |
| Direction | 동기화 방향 (Local → Studio, Studio → Local) |
| Apply Mode | 적용 모드 (Auto/Manual) |

각 타입의 동기화 방향을 확인하여 어떤 변경이 어느 방향으로 반영되는지 파악할 수 있습니다.

## Sync Config

동기화 설정 값을 표시합니다:
- Max Depth — 동기화 최대 깊이
- Max Instances — 동기화 최대 인스턴스 수
- Interval — 동기화 간격

## Sync Log

동기화 이벤트를 시간순으로 표시합니다. 각 로그 항목에는 변경 유형 태그(create, update, delete 등)와 대상 경로가 포함됩니다.

## 활용 사례

### 동기화 상태 확인

```
"Sync가 제대로 동작하는지 확인하고 싶다"
```

Sync Status가 Idle인지 확인하고, Sync Log에서 최근 변경이 정상적으로 기록되었는지 확인합니다.

### 동기화 방향 파악

```
"스크립트 변경이 어느 방향으로 동기화되는지 알고 싶다"
```

Sync Directions 테이블에서 Scripts 타입의 Direction을 확인합니다.

## 관련 문서

- [대시보드 Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [Sync 기능 상세 가이드](../sync/overview.md)
