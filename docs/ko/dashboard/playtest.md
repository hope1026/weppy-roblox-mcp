# Playtest

> AI가 실행한 플레이테스트의 상태와 테스트 결과를 확인합니다.

![Playtest — 플레이테스트 상태와 테스트 기록](../../assets/screenshots/dashboard/dashboard_playtest.png)

## 개요

Playtest 페이지는 AI가 실행한 플레이테스트의 상태와 테스트 결과를 보여줍니다. 플러그인이 연결된 상태(L2)에서만 접근할 수 있습니다.

## Playtest Status

현재 플레이테스트 상태를 표시합니다:

| 상태 | 의미 |
|------|------|
| **NotRunning** | 플레이테스트 미실행 |
| **Running** | 플레이테스트 실행 중 |
| **Paused** | 플레이테스트 일시정지 (Run 모드) |

## Test History

AI가 `run_test` 액션으로 실행한 테스트 결과를 시간순으로 나열합니다:

| 항목 | 설명 |
|------|------|
| 타임스탬프 | 테스트 실행 시간 |
| Test Report | 테스트 리포트 링크 |
| Mode | 실행 모드 (play/run) |
| Duration | 테스트 소요 시간 |
| Status | 결과 (Passed/Failed) |

테스트 리포트를 클릭하면 마크다운 형식의 상세 리포트와 로그를 확인할 수 있습니다.

## 활용 사례

### 테스트 실패 분석

```
"방금 실행한 자동 테스트가 실패한 원인을 찾고 싶다"
```

Test History에서 Failed 상태의 테스트를 찾아 Test Report를 클릭하면, 상세 로그와 실패 원인을 확인할 수 있습니다.

### 테스트 이력 확인

```
"오늘 실행한 테스트들의 성공/실패 현황을 보고 싶다"
```

Test History에서 타임스탬프와 Status를 확인하여 테스트 결과 추이를 파악합니다.

## 관련 문서

- [대시보드 Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Tools](tools.md)
- [Settings](settings.md)
- [플레이테스트 & 자동 테스트 (도구)](../tools/playtest.md)
