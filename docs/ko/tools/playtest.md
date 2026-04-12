# 플레이테스트 & 자동 테스트

> Studio 플레이테스트를 AI로 제어하고, 테스트 스크립트를 주입해 자동으로 실행/검증/리포트를 생성합니다.

## 포함된 도구

| 도구 | 티어 | 설명 |
|------|:----:|------|
| `system_info` | Pro | play, stop, pause, resume, play_status, run_test 액션 |

> `system_info`의 나머지 액션(ping, connection, usage 등)은 [시스템 & 디버깅](system-and-debugging.md)을 참고하세요.

## 주요 워크플로우

### 수동 플레이테스트 제어

```
"Play 모드(F5)로 게임을 시작해줘"
"현재 플레이테스트를 멈춰줘"
```

`play` → `play_status`로 상태 확인 → `stop`으로 종료합니다.

### 자동 테스트 실행 (run_test)

```
"SpawnLocation이 올바른 위치에 있는지 확인하는 테스트를 작성해서 실행해줘"
```

`run_test`는 테스트 스크립트를 주입하고 플레이테스트를 자동으로 시작/수집/정리합니다.

### CI 스타일 검증

```
"NPC AI가 목표 지점까지 이동하는지 Run 모드(F8)에서 테스트하고, 실패하면 로그를 보여줘"
```

`run_test`를 `mode: "run"`으로 실행하여 서버 사이드 테스트를 진행합니다.

## 플레이테스트 상태 머신

```
Edit ──play──→ Running ──stop──→ Edit
                  │                 ↑
                pause             stop
                  │                 │
                  ↓                 │
               Paused ──resume──→ Running
```

| 상태 | 가능한 액션 |
|------|------------|
| `edit` | play |
| `running` | stop, pause (Run 모드만) |
| `paused` | resume, stop |

- **Play 모드 (F5)**: 클라이언트+서버 시뮬레이션. pause/resume 불가.
- **Run 모드 (F8)**: 서버 전용 시뮬레이션. pause/resume 가능.

## run_test 파이프라인

`run_test`는 다음 단계를 자동으로 오케스트레이션합니다:

### 1. 준비
- Place 정보 조회 (`place_info`)
- 기존 로그 버퍼 초기화

### 2. 스크립트 주입
- `ServerScriptService.__MCP_TestRunner`에 래핑된 테스트 스크립트 생성
- 래퍼가 자동으로 START/FINISHED 시그널과 에러 트레이스백을 처리

### 3. 실행 및 모니터링
- 플레이테스트 시작 (Play 또는 Run 모드)
- 500ms 간격으로 로그 폴링
- `[WEPPY_TEST]:FINISHED` 시그널 수신 시 완료 판정
- 타임아웃 초과 시 자동 중단 (기본 60초, 최대 300초)

### 4. 정리
- 플레이테스트 자동 중지
- 주입된 테스트 스크립트 삭제
- 마지막 로그 수집

### 5. 리포트 생성
리포트와 로그는 로컬 `{projectRoot}/weppy-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/` 아래에 저장됩니다.

```
{projectRoot}/weppy-project-sync/place_XXXXX/tests/YYYYMMDD-HHmmss/
├── test-report.md    # 결과 요약 (상태, 시간, 시그널)
└── test-log.txt      # 전체 로그 (타임스탬프, 시퀀스, 레벨)
```

**test-report.md 예시:**
```markdown
# Test Report

- Status: passed
- Test Name: spawn_location_test
- Mode: run
- Place ID: 123456
- Duration (ms): 1523
- Total Logs: 12
- Signal Count: 2

## Signals

- START: 2026-03-12T10:30:00.000Z
- FINISHED: 2026-03-12T10:30:01.523Z
```

## 액션 레퍼런스

| 액션 | 설명 | 파라미터 | 티어 |
|------|------|---------|------|
| `play` | Play(F5) 또는 Run(F8) 모드로 플레이테스트 시작 | `mode`: "play" \| "run" | Pro |
| `stop` | 현재 플레이테스트 중지 | — | Pro |
| `pause` | Run 모드 플레이테스트 일시정지 | — | Pro |
| `resume` | 일시정지된 Run 모드 플레이테스트 재개 | — | Pro |
| `play_status` | 플레이테스트 상태와 가능한 액션 조회 | — | Pro |
| `run_test` | 테스트 스크립트 주입 → 실행 → 로그 수집 → 리포트 생성 | `script` (필수), `test_name`, `mode`, `timeout` | Pro |

### run_test 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|:----:|------|
| `script` | string | ✅ | 실행할 Luau 테스트 코드 본문 |
| `test_name` | string | — | 리포트에 표시할 테스트 이름 |
| `mode` | "play" \| "run" | — | 플레이테스트 모드 (기본: "play") |
| `timeout` | number | — | 타임아웃 초 (기본: 60, 최대: 300) |

## 관련 문서

- [시스템 & 디버깅](system-and-debugging.md) — system_info의 연결/상태 액션, 로그 관리
- [스크립트 & 코드 실행](scripting.md) — 스크립트 작성 및 Luau 실행
- [도구 전체 목록](overview.md)
