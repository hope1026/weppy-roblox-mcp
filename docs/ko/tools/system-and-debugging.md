# 시스템 & 디버깅

> 연결 상태 확인, 로그 관리, 선택 제어, 배치 실행으로 개발/디버깅 생산성을 높입니다.

## 포함된 도구

| 도구 | 티어 | 설명 |
|------|:----:|------|
| `system_info` | 혼합 | ping, connection, usage, place_info, services, studio_settings |
| `manage_logs` | Basic | 로그 조회, 초기화, 오류 필터링 |
| `manage_selection` | 혼합 | 선택 가져오기/설정/모니터링 |
| `batch_execute` | Pro | 여러 명령을 단일 배치로 실행 |

> `system_info`의 플레이테스트 액션(play, stop, pause, resume, play_status, run_test)은 [플레이테스트 & 자동 테스트](playtest.md)를 참고하세요.

## 주요 워크플로우

### 연결 확인

```
"Studio와 연결이 잘 되어 있는지 확인해줘"
```

`system_info`의 `ping`으로 빠르게 연결을 테스트합니다.

### 오류 디버깅

```
"최근 오류 로그를 보여줘"
```

`manage_logs`의 `errors`로 오류만 필터링하여 조회합니다. `get`은 `sinceSeq` 커서로 증분 조회를 지원합니다.

### 일괄 작업 (Pro)

```
"Workspace의 모든 Part 색상을 빨간색으로 바꾸고, 카메라를 첫 번째 Part에 포커스해줘"
```

`batch_execute`로 여러 명령을 하나의 요청으로 묶어 실행합니다.

## 액션 레퍼런스

### System Info (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `ping` | 연결 테스트 | Basic |
| `connection` | 서버/플러그인 연결 정보 가져오기 | Basic |
| `usage` | 현재 티어 가져오기 (basic/pro) | Basic |
| `place_info` | Place ID, 이름, 제작자 가져오기 | Pro |
| `services` | 모든 Roblox 서비스 나열 | Pro |
| `studio_settings` | Studio 환경설정 가져오기 | Pro |

### Manage Logs (Basic)

| 액션 | 설명 | 티어 |
|------|------|------|
| `get` | 필터링된 로그 가져오기 (`sinceSeq` 커서 증분 조회 지원) | Basic |
| `clear` | 로그 버퍼 초기화 | Basic |
| `errors` | 최근 오류만 가져오기 | Basic |

### Manage Selection (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `get` | 현재 선택 가져오기 | Basic |
| `set` | 현재 선택 교체 | Basic |
| `clear` | 선택 초기화 | Basic |
| `cached` | 왕복 없이 캐시된 선택 가져오기 | Basic |
| `context` | 소스와 속성을 포함한 상세 컨텍스트 가져오기 | Pro |
| `details` | 조상/자손을 포함한 계층적 상세 정보 가져오기 | Pro |
| `add` | 선택에 항목 추가 | Pro |
| `remove` | 선택에서 항목 제거 | Pro |
| `watch` | 선택 변경 모니터링 | Pro |

### Batch Execute (Pro)

여러 명령을 단일 배치로 실행합니다. 각 명령은 도구 이름과 인수를 지정합니다. 명령은 순차적으로 실행되며 오류 시 계속 진행 여부를 선택할 수 있습니다.

## 관련 문서

- [플레이테스트 & 자동 테스트](playtest.md) — system_info의 플레이테스트 액션
- [스크립트 & 코드 실행](scripting.md) — execute_luau로 디버깅 코드 실행
- [도구 전체 목록](overview.md)
