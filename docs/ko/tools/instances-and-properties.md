# 인스턴스 & 속성

> Roblox Studio의 인스턴스를 검색, 생성, 수정하고 속성/어트리뷰트/태그를 관리합니다.

## 포함된 도구

| 도구 | 티어 | 설명 |
|------|:----:|------|
| `query_instances` | 혼합 | 인스턴스 검색, 계층 탐색, 클래스 정보 조회 |
| `mutate_instances` | 혼합 | 인스턴스 생성, 삭제, 복제, 이동 |
| `manage_properties` | 혼합 | 속성 읽기/쓰기, 어트리뷰트, 태그 관리 |

## 주요 워크플로우

### 씬 구조 파악

```
"Workspace 아래 모든 Part를 검색해서 위치와 크기를 알려줘"
```

`query_instances`의 `search_class`로 Part를 찾고, `manage_properties`의 `mass_get`으로 Position/Size를 일괄 조회합니다.

### 오브젝트 배치

```
"맵 중앙에 SpawnLocation 4개를 정사각형으로 배치하고 TeamColor를 각각 다르게 설정해줘"
```

`mutate_instances`의 `mass_create`로 한 번에 생성한 뒤, `manage_properties`의 `mass_set`으로 속성을 일괄 설정합니다.

### 태그 기반 관리

```
"'Collectible' 태그가 붙은 모든 오브젝트를 찾아서 Anchored를 true로 바꿔줘"
```

`manage_properties`의 `get_tagged`로 태그 인스턴스를 조회하고, `mass_set`으로 속성을 변경합니다.

## 액션 레퍼런스

### Query Instances (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `get` | 경로로 인스턴스 속성 가져오기 | Basic |
| `children` | 직계 자식 또는 모든 자손 가져오기 | Basic |
| `find_child` | 이름과 선택적 클래스 필터로 첫 번째 자식 찾기 | Basic |
| `find_descendant` | 이름으로 첫 번째 자손 찾기 | Basic |
| `wait_for_child` | 자식이 나타날 때까지 대기 (타임아웃 포함) | Basic |
| `class_info` | 클래스 정보 및 유효한 속성 가져오기 | Basic |
| `search_name` | 이름 패턴으로 인스턴스 검색 (와일드카드 지원) | Basic |
| `search_class` | 클래스 이름으로 인스턴스 검색 | Basic |
| `file_tree` | 루트에서 파일 트리 구조 가져오기 | Pro |
| `project_structure` | 전체 프로젝트 구조 가져오기 | Pro |
| `descendants` | 인스턴스의 모든 자손 가져오기 | Pro |
| `ancestors` | 인스턴스의 모든 조상 가져오기 | Pro |
| `search_property` | 속성 값으로 인스턴스 검색 | Pro |
| `search_tag` | 태그로 인스턴스 검색 | Pro |

### Mutate Instances (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `create` | 새 인스턴스 생성 | Basic |
| `create_with_props` | 초기 속성을 가진 인스턴스 생성 | Basic |
| `delete` | 인스턴스 삭제 | Basic |
| `clone` | 인스턴스 복제 | Basic |
| `move` | 인스턴스를 새 부모로 이동 | Basic |
| `rename` | 인스턴스 이름 변경 | Basic |
| `pivot` | 피벗 위치 또는 CFrame 설정 | Basic |
| `create_tree` | 계층적 인스턴스 트리 생성 | Pro |
| `mass_create` | 여러 인스턴스 한 번에 생성 | Pro |
| `mass_delete` | 여러 인스턴스 삭제 | Pro |
| `mass_duplicate` | 여러 인스턴스 복제 | Pro |
| `smart_duplicate` | 간격과 개수를 지정하여 복제 | Pro |

### Manage Properties (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `get` | 단일 속성 값 가져오기 | Basic |
| `set` | 단일 속성 값 설정 | Basic |
| `get_all` | 인스턴스의 모든 속성 가져오기 | Basic |
| `set_multiple` | 여러 속성 한 번에 설정 | Basic |
| `get_attr` | 어트리뷰트 값 가져오기 | Basic |
| `set_attr` | 어트리뷰트 값 설정 | Basic |
| `get_all_attrs` | 모든 어트리뷰트 가져오기 | Basic |
| `delete_attr` | 어트리뷰트 삭제 | Basic |
| `add_tag` | 인스턴스에 태그 추가 | Basic |
| `remove_tag` | 인스턴스에서 태그 제거 | Basic |
| `check_tag` | 인스턴스가 태그를 가지고 있는지 확인 | Basic |
| `get_tags` | 인스턴스의 모든 태그 가져오기 | Basic |
| `get_tagged` | 특정 태그를 가진 모든 인스턴스 가져오기 | Basic |
| `set_calculated` | 수식을 사용하여 속성 설정 | Pro |
| `set_relative` | 현재 값을 기준으로 상대적으로 속성 설정 | Pro |
| `mass_set` | 여러 인스턴스에 속성 설정 | Pro |
| `mass_get` | 여러 인스턴스에서 속성 가져오기 | Pro |
| `modify_children` | 부모의 모든 자식 수정 | Pro |

## 관련 문서

- [스크립트 & 코드 실행](scripting.md) — 인스턴스에 스크립트 추가/수정
- [에셋 & 오브젝트 연출](assets-and-effects.md) — 모델 삽입, 트윈, 이펙트
- [도구 전체 목록](overview.md)
