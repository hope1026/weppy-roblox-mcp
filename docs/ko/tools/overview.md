# Roblox MCP 도구

MCP 도구의 상세 파라미터는 MCP 도구 정의를 직접 확인하세요.

관련 문서:
- [Sync 기능 상세 가이드](../sync/overview.md)

Sync 정책:
- Basic: Studio -> Local 단방향 동기화
- Pro: 양방향 동기화 + 더 넓은 고급 action 범위(대량 작업으로 AI 토큰 효율 개선)

## Query Instances (혼합)

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

## Mutate Instances (혼합)

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

## Manage Properties (혼합)

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

## Manage Scripts (혼합)

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

## Manage Lighting (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `lighting` | Lighting 서비스 속성 설정 | Pro |
| `atmosphere` | Atmosphere 속성 설정 | Pro |
| `sky` | Sky 속성 설정 | Pro |
| `terrain_props` | Terrain 물/시각 속성 설정 | Pro |
| `time` | 시간대 설정 | Pro |

## Manage Selection (혼합)

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

## Manage Camera (Basic)

| 액션 | 설명 | 티어 |
|------|------|------|
| `info` | 카메라 위치, 회전, FOV, 뷰포트 크기 가져오기 | Basic |
| `focus_path` | 카메라를 인스턴스에 포커스 이동 | Basic |
| `focus_position` | 카메라를 위치에 포커스 이동 | Basic |
| `suggest` | 대상에 대한 추천 카메라 뷰 가져오기 | Basic |

## Manage Tween (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `create` | 대상 속성을 가진 트윈 생성 | Pro |
| `play` | 생성된 트윈 재생 | Pro |
| `pause` | 실행 중인 트윈 일시정지 | Pro |
| `cancel` | 트윈 취소 | Pro |

## Manage Audio (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `play` | 사운드 재생 (필요시 Sound 생성) | Pro |
| `stop` | 재생 중인 사운드 정지 | Pro |
| `pause` | 재생 중인 사운드 일시정지 | Pro |
| `resume` | 일시정지된 사운드 재개 | Pro |
| `set_listener` | 오디오 리스너 타입/대상 설정 | Pro |

## Manage Animation (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `load` | Humanoid/AnimationController에 애니메이션 로드 | Pro |
| `play` | 로드된 애니메이션 트랙 재생 | Pro |
| `stop` | 재생 중인 애니메이션 정지 | Pro |
| `get_tracks` | 로드된 모든 애니메이션 트랙 나열 | Pro |

## Manage Physics (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `register_group` | 충돌 그룹 등록 | Pro |
| `set_collidable` | 두 그룹이 충돌할 수 있는지 설정 | Pro |
| `get_groups` | 등록된 모든 충돌 그룹 나열 | Pro |

## Manage Effects (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `emit` | ParticleEmitter에서 파티클 방출 | Pro |
| `clear` | 모든 파티클 초기화 | Pro |
| `toggle` | 효과 활성화 또는 비활성화 | Pro |

## Manage Terrain (Pro)

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

## Spatial Query (Pro)

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

## Manage Assets (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `insert` | 에셋 ID로 모델 삽입 | Pro |
| `info` | 에셋 메타데이터 가져오기 | Pro |
| `search` | Creator Store 검색 | Pro |
| `search_insert` | 검색하여 첫 번째 일치 항목 삽입 | Pro |
| `insert_free` | 무료 모델 삽입 | Pro |
| `insert_package` | 패키지 삽입 | Pro |
| `export` | 현재 선택 내보내기 | Pro |

## Manage Sync (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `status` | Place의 동기화 상태 가져오기 | Pro |
| `config` | 동기화 설정 가져오기 | Pro |
| `history` | 변경 기록 가져오기 | Pro |
| `directions` | 타입별 동기화 방향 가져오기 | Pro |
| `read_file` | 동기화된 파일 읽기 | Pro |
| `write_file` | 동기화된 파일에 쓰기 | Pro |
| `progress` | 실시간 동기화 진행률 및 대역폭 가져오기 | Pro |

## Workspace State (Pro)

| 액션 | 설명 | 티어 |
|------|------|------|
| `sync` | 현재 Workspace 상태 가져오기 | Pro |
| `snapshot` | 전체 인스턴스 트리 구조 가져오기 | Pro |
| `changes` | 최근 변경 사항 가져오기 | Pro |
| `viewport` | 카메라 및 뷰포트 정보 가져오기 | Pro |

## Manage Logs (Basic)

| 액션 | 설명 | 티어 |
|------|------|------|
| `get` | 필터링된 로그 가져오기 | Basic |
| `clear` | 로그 버퍼 초기화 | Basic |
| `errors` | 최근 오류만 가져오기 | Basic |

## System Info (혼합)

| 액션 | 설명 | 티어 |
|------|------|------|
| `ping` | 연결 테스트 | Basic |
| `connection` | 서버/플러그인 연결 정보 가져오기 | Basic |
| `usage` | 현재 티어 가져오기 (basic/pro) | Basic |
| `place_info` | Place ID, 이름, 제작자 가져오기 | Pro |
| `services` | 모든 Roblox 서비스 나열 | Pro |
| `studio_settings` | Studio 환경설정 가져오기 | Pro |
| `run_command` | Studio 명령 실행 | Pro |

## Batch Execute (Pro)

여러 명령을 단일 배치로 실행합니다. 각 명령은 도구 이름과 인수를 지정합니다. 명령은 순차적으로 실행되며 오류 시 계속 진행 여부를 선택할 수 있습니다.

## Execute Luau (Pro)

Roblox Studio 샌드박스에서 임의의 Luau 코드를 실행합니다. 차단된 서비스: HttpService, DataStoreService, MessagingService. CoreGui/CorePackages에 접근할 수 없습니다.
