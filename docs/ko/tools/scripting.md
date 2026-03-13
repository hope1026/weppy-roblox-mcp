# 스크립트 & 코드 실행

> 스크립트 소스 코드를 관리하고, 임의의 Luau 코드를 Studio에서 실행합니다.

## 포함된 도구

| 도구 | 티어 | 설명 |
|------|:----:|------|
| `manage_scripts` | 혼합 | 스크립트 생성, 읽기, 수정, 검색, 종속성 분석 |
| `execute_luau` | Pro | Roblox Studio 샌드박스에서 임의의 Luau 코드 실행 |

## 주요 워크플로우

### 스크립트 수정

```
"ServerScriptService의 GameManager 스크립트에서 maxPlayers를 12에서 24로 변경해줘"
```

`manage_scripts`의 `search`로 해당 줄을 찾고, `edit_replace`로 수정합니다.

### 일괄 리팩터링 (Pro)

```
"모든 스크립트에서 'OldModule'을 'NewModule'로 일괄 교체해줘"
```

`manage_scripts`의 `replace`로 여러 스크립트에서 한 번에 교체합니다.

### 런타임 데이터 조회 (Pro)

```
"현재 Workspace에 있는 모든 Humanoid의 Health 평균을 계산해줘"
```

`execute_luau`로 임의 Luau 코드를 실행해 런타임 데이터를 가져옵니다.

## 액션 레퍼런스

### Manage Scripts (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `get_source` | 스크립트 소스 코드 가져오기 | Basic |
| `set_source` | 스크립트 소스 코드 설정 | Basic |
| `create` | 새 스크립트 생성 | Basic |
| `delete` | 스크립트 삭제 | Basic |
| `edit_replace` | 스크립트의 특정 줄 교체 | Basic |
| `edit_insert` | 특정 위치에 줄 삽입 | Basic |
| `edit_delete` | 특정 줄 삭제 | Basic |
| `search` | 스크립트에서 텍스트 검색 | Basic |
| `get_dependencies` | 스크립트 종속성 가져오기 | Basic |
| `replace` | 여러 스크립트에서 일괄 교체 | Pro |

### Execute Luau (Pro)

Roblox Studio 샌드박스에서 임의의 Luau 코드를 실행합니다.

- **차단된 서비스**: HttpService, DataStoreService, MessagingService
- **접근 불가**: CoreGui, CorePackages

## 관련 문서

- [인스턴스 & 속성](instances-and-properties.md) — 스크립트 인스턴스 생성/이동
- [플레이테스트 & 자동 테스트](playtest.md) — 테스트 스크립트 주입 및 실행
- [도구 전체 목록](overview.md)
