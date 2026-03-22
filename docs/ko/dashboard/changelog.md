# Changelog

> AI가 Roblox Studio에서 수행한 모든 변경 사항을 세션 단위로 기록하고, 변경 요약/타임라인/Before & After를 제공합니다.

![Changelog — 세션별 변경 카드 목록](../../assets/screenshots/dashboard/dashboard_changelog1.png)

## 개요

Changelog는 AI 에이전트가 Studio에서 수행한 게임 변경 이력을 추적하는 페이지입니다. 변경 사항은 세션 단위로 그룹화되며, 각 세션에서 어떤 종류의 변경이 몇 건 발생했는지 한눈에 파악할 수 있습니다.

## 세션 카드 목록

Changelog의 첫 화면은 세션별 카드 목록을 보여줍니다.

### 세션 상태

각 세션 카드에는 상태가 표시됩니다:

| 상태 | 의미 |
|------|------|
| **Active** | 현재 진행 중인 세션 (실시간 업데이트) |
| **Completed** | 완료된 세션 |
| **Bootstrap** | 초기 동기화 세션 |

### 세션 요약

각 카드에는 해당 세션의 변경 건수가 카테고리별로 요약됩니다:

- Script — 스크립트 생성/수정 건수
- Instance — 인스턴스 생성/삭제/이동 건수
- Property — 속성 변경 건수
- Lighting — 조명/환경 설정 건수
- Terrain — 지형 변경 건수
- Asset — 에셋 삽입 건수

### 필터 탭

상단 탭으로 세션을 필터링할 수 있습니다:
- **All** — 모든 세션
- **Active** — 진행 중인 세션만
- **Completed** — 완료된 세션만

## 세션 상세 뷰

세션 카드를 클릭하면 상세 뷰로 진입합니다.

![Changelog 상세 뷰 — 변경 요약, 타임라인, Before & After](../../assets/screenshots/dashboard/dashboard_changelog2.png)

### Change Summary

세션의 변경 사항을 6개 카테고리 카드로 시각화합니다:

| 카테고리 | 아이콘 | 설명 |
|---------|--------|------|
| Scripts | 스크립트 | 스크립트 생성/수정 건수 |
| Instances | 인스턴스 | 인스턴스 생성/삭제/이동 건수 |
| Properties | 속성 | 속성 변경 건수 |
| Lighting | 조명 | 조명/환경 변경 건수 |
| Terrain | 지형 | 지형 변경 건수 |
| Assets | 에셋 | 에셋 삽입 건수 |

### Change Timeline

세션 내 모든 변경을 시간순으로 나열합니다.

- 각 항목에 타임스탬프, 변경 카테고리 태그, 대상 경로가 표시됩니다
- **Category** 드롭다운으로 특정 카테고리만 필터링할 수 있습니다
- 항목을 클릭하면 Before & After 비교 뷰가 펼쳐집니다

### Before & After

변경 전후의 데이터를 비교합니다. 변경 유형에 따라 다른 수준의 정보를 제공합니다:

| 신뢰도 | 의미 | 예시 |
|--------|------|------|
| **exact** | 변경 전후 값이 정확히 기록됨 | 속성 변경, 스크립트 수정 |
| **partial** | 일부 정보만 기록됨 | 복합 변경 |
| **after-only** | 변경 후 값만 존재 | 새 인스턴스 생성 |
| **intent-only** | 의도만 기록됨 | 삭제 등 |

## 활용 사례

### 작업 검증

```
"방금 AI가 수정한 스크립트가 무엇인지 확인하고 싶다"
```

Changelog에서 Active 세션의 Script 카테고리를 필터링하면, 수정된 스크립트 목록과 변경 전후 코드를 비교할 수 있습니다.

### 변경 추적

```
"어제 세션에서 Lighting을 어떻게 설정했는지 다시 보고 싶다"
```

Completed 탭에서 해당 세션을 찾아 Lighting 카테고리로 필터링하면, 변경 이력과 설정 값을 확인할 수 있습니다.

### 문제 디버깅

```
"어떤 시점에서 특정 인스턴스가 삭제되었는지 찾아야 한다"
```

타임라인에서 Instance 카테고리를 필터링하고, delete 타입의 변경을 시간순으로 추적할 수 있습니다.

## 관련 문서

- [대시보드 Overview](overview.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
- [Settings](settings.md)
