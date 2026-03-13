# 에셋 & 오브젝트 연출

> 에셋 삽입, 트윈 애니메이션, 오디오, 파티클 이펙트, 물리 충돌 그룹을 관리합니다.

## 포함된 도구

| 도구 | 티어 | 설명 |
|------|:----:|------|
| `manage_assets` | Pro | Creator Store 검색, 모델/패키지 삽입, 에셋 정보 |
| `manage_tween` | Pro | 트윈 생성, 재생, 일시정지, 취소 |
| `manage_animation` | Pro | 애니메이션 로드, 재생, 정지, 트랙 조회 |
| `manage_audio` | Pro | 사운드 재생/정지/일시정지, 오디오 리스너 설정 |
| `manage_effects` | Pro | 파티클 방출, 초기화, 토글 |
| `manage_physics` | Pro | 충돌 그룹 등록, 충돌 여부 설정 |

## 주요 워크플로우

### 에셋으로 씬 구성

```
"Creator Store에서 '나무' 모델을 검색해서 Workspace에 3개 배치해줘"
```

`manage_assets`의 `search_insert`로 검색과 삽입을 한 번에 처리합니다.

### 인터랙티브 연출

```
"문을 클릭하면 3초에 걸쳐 열리는 트윈을 만들어줘"
```

`manage_tween`의 `create`로 트윈을 정의하고 `play`로 재생합니다. 동시에 `manage_audio`의 `play`로 문 여는 효과음을 추가합니다.

### 파티클 + 사운드 조합

```
"보스 등장 시 폭발 파티클과 함께 효과음을 재생해줘"
```

`manage_effects`의 `emit`으로 파티클을 방출하고, `manage_audio`의 `play`로 사운드를 동시에 재생합니다.

## 액션 레퍼런스

### Manage Assets (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `insert` | 에셋 ID로 모델 삽입 | Pro |
| `info` | 에셋 메타데이터 가져오기 | Pro |
| `search` | Creator Store 검색 | Pro |
| `search_insert` | 검색하여 첫 번째 일치 항목 삽입 | Pro |
| `insert_free` | 무료 모델 삽입 | Pro |
| `insert_package` | 패키지 삽입 | Pro |
| `export` | 현재 선택 내보내기 | Pro |

### Manage Tween (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `create` | 대상 속성을 가진 트윈 생성 | Pro |
| `play` | 생성된 트윈 재생 | Pro |
| `pause` | 실행 중인 트윈 일시정지 | Pro |
| `cancel` | 트윈 취소 | Pro |

### Manage Animation (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `load` | Humanoid/AnimationController에 애니메이션 로드 | Pro |
| `play` | 로드된 애니메이션 트랙 재생 | Pro |
| `stop` | 재생 중인 애니메이션 정지 | Pro |
| `get_tracks` | 로드된 모든 애니메이션 트랙 나열 | Pro |

### Manage Audio (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `play` | 사운드 재생 (필요시 Sound 생성) | Pro |
| `stop` | 재생 중인 사운드 정지 | Pro |
| `pause` | 재생 중인 사운드 일시정지 | Pro |
| `resume` | 일시정지된 사운드 재개 | Pro |
| `set_listener` | 오디오 리스너 타입/대상 설정 | Pro |

### Manage Effects (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `emit` | ParticleEmitter에서 파티클 방출 | Pro |
| `clear` | 모든 파티클 초기화 | Pro |
| `toggle` | 효과 활성화 또는 비활성화 | Pro |

### Manage Physics (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `register_group` | 충돌 그룹 등록 | Pro |
| `set_collidable` | 두 그룹이 충돌할 수 있는지 설정 | Pro |
| `get_groups` | 등록된 모든 충돌 그룹 나열 | Pro |

## 관련 문서

- [인스턴스 & 속성](instances-and-properties.md) — 오브젝트 생성 및 배치
- [월드 환경](world-and-environment.md) — 조명, 지형, 카메라
- [도구 전체 목록](overview.md)
