# Tools

> AI가 실행한 MCP 도구의 기록과 통계를 확인합니다.

![Tools — 도구 실행 기록과 통계](../../assets/screenshots/dashboard/dashboard_tools.png)

## 개요

Tools 페이지는 AI가 실행한 MCP 도구의 기록과 통계를 제공합니다. **History**와 **Statistics** 두 개의 서브탭으로 구성됩니다. 서버가 연결되어 있으면(L1 이상) 항상 접근할 수 있습니다.

## History 탭

도구 실행 기록을 시간순 테이블로 보여줍니다:

| 열 | 설명 |
|----|------|
| Time | 실행 시간 |
| Tool.Action | 실행된 도구와 액션 (예: `query_instances.get_instance`) |
| Duration | 실행 소요 시간 |
| Status | 결과 상태 (OK/Error) |
| Tier | 사용된 티어 (Basic/Pro) |

기능:
- **Tool 필터** 드롭다운으로 특정 도구만 필터링
- 페이지네이션으로 대량의 기록 탐색
- 실시간으로 새 실행 기록 추가

## Statistics 탭

도구 사용 통계를 시각적으로 분석합니다:

- **티어 분포** — Basic/Pro 도구 사용 비율
- **도구별 통계** — 각 도구의 호출 횟수, 평균 응답 시간
- **액션별 분석** — 도구 내 액션별 세부 통계

## Basic 티어 전용 기능

Basic 티어 사용자에게는 추가 UI가 표시됩니다:

- **Tier Usage Progress** — 사용량 진행 바
- **Basic vs Pro 비교 모달** — Pro 티어의 추가 기능을 안내

## 활용 사례

### 도구 성능 분석

```
"어떤 도구가 가장 오래 걸리는지 알고 싶다"
```

Statistics 탭에서 도구별 평균 응답 시간을 확인합니다.

### 오류 추적

```
"방금 실행한 도구가 실패한 이유를 알고 싶다"
```

History 탭에서 Status가 Error인 항목을 찾아 상세 정보를 확인합니다.

## 관련 문서

- [대시보드 Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Settings](settings.md)
- [Tool 전체 목록](../tools/overview.md)
