# 월드 환경

> 조명, 지형, 공간 쿼리, 카메라를 사용해 게임 월드를 구축하고 확인합니다.

## 포함된 도구

| 도구 | 티어 | 설명 |
|------|:----:|------|
| `manage_lighting` | Pro | Lighting, Atmosphere, Sky, 시간대 설정 |
| `manage_terrain` | Pro | 지형 생성/수정/복셀 데이터 관리 |
| `spatial_query` | Pro | 레이캐스트, 지면 탐색, 배치 검증, 높이맵 |
| `manage_camera` | Basic | 카메라 정보 조회, 포커스 이동, 추천 뷰 |

## 주요 워크플로우

### 월드 분위기 설정 (Pro)

```
"해질녘 분위기로 바꿔줘. 주황색 하늘, 안개 밀도 높이고, 시간대는 18시로 설정"
```

`manage_lighting`의 `time`으로 시간대 설정, `atmosphere`로 안개 조정, `sky`로 하늘 컬러를 변경합니다.

### 지형 빌딩 (Pro)

```
"맵 중앙에 반경 200의 잔디 언덕을 만들고, 주변에 물을 채워줘"
```

`manage_terrain`의 `fill_ball`로 언덕을 생성하고, `fill_block`으로 주변 물 영역을 채웁니다.

### 배치 검증 (Pro)

```
"이 건물을 놓을 수 있는 평평한 땅을 찾아줘"
```

`spatial_query`의 `find_flat`으로 적합한 위치를 찾고, `check_placement`로 충돌 여부를 확인한 뒤, `manage_camera`의 `focus_position`으로 결과를 시각적으로 확인합니다.

## 액션 레퍼런스

### Manage Lighting (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `lighting` | Lighting 서비스 속성 설정 | Pro |
| `atmosphere` | Atmosphere 속성 설정 | Pro |
| `sky` | Sky 속성 설정 | Pro |
| `terrain_props` | Terrain 물/시각 속성 설정 | Pro |
| `time` | 시간대 설정 | Pro |

### Manage Terrain (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `fill_block` | 블록 형태의 지형 채우기 | Pro |
| `fill_ball` | 구 형태의 지형 채우기 | Pro |
| `fill_cylinder` | 원통 형태의 지형 채우기 | Pro |
| `fill_wedge` | 쐐기 형태의 지형 채우기 | Pro |
| `clear_region` | 영역의 지형 초기화 | Pro |
| `clear_bounds` | 경계의 지형 초기화 | Pro |
| `replace_material` | 영역의 재질 교체 | Pro |
| `colors_get` | 재질 색상 가져오기 | Pro |
| `colors_set` | 재질 색상 설정 | Pro |
| `read_voxel` | 단일 복셀 데이터 읽기 | Pro |
| `read_voxels` | 대량 복셀 데이터 읽기 | Pro |
| `write_voxels` | 대량 복셀 데이터 쓰기 | Pro |
| `generate` | 절차적 지형 생성 | Pro |
| `smooth` | 지형 부드럽게 하기 | Pro |

### Spatial Query (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `raycast` | 단일 광선 투사 | Pro |
| `find_ground` | 지점 아래 지면 위치 찾기 | Pro |
| `check_placement` | 배치가 충돌 없는지 확인 | Pro |
| `multi_raycast` | 여러 광선 일괄 투사 | Pro |
| `scan_area` | 영역의 높이맵 생성 | Pro |
| `find_flat` | 건축을 위한 평평한 영역 찾기 | Pro |
| `find_spawn` | 적절한 스폰 위치 찾기 | Pro |
| `analyze_walkable` | 이동 가능 영역 그리드 분석 | Pro |
| `spatial_map` | 모든 BasePart 위치 가져오기 | Pro |
| `find_space` | 오브젝트를 위한 빈 공간 찾기 | Pro |
| `bounds` | 인스턴스의 바운딩 박스 가져오기 | Pro |
| `snap_grid` | 위치를 그리드에 스냅 | Pro |
| `collision` | AABB 충돌 확인 | Pro |

### Manage Camera (Basic)

| 액션 | 설명 | 티어 |
|------|------|------|
| `info` | 카메라 위치, 회전, FOV, 뷰포트 크기 가져오기 | Basic |
| `focus_path` | 카메라를 인스턴스에 포커스 이동 | Basic |
| `focus_position` | 카메라를 위치에 포커스 이동 | Basic |
| `suggest` | 대상에 대한 추천 카메라 뷰 가져오기 | Basic |

## 관련 문서

- [인스턴스 & 속성](instances-and-properties.md) — 월드 오브젝트 배치
- [에셋 & 오브젝트 연출](assets-and-effects.md) — 이펙트, 트윈, 오디오
- [도구 전체 목록](overview.md)
