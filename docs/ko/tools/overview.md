# 도구 전체 목록

Roblox MCP는 **140개 도구**를 제공합니다. 무료 68개, Pro 72개로 구성됩니다.

## 도구 티어 안내

| 티어 | 설명 | 도구 수 |
|-----|------|:------:|
| **무료** | 모든 사용자 무제한 사용 | 68개 |
| **Pro** | Pro 구독자 무제한, 무료 사용자 일일 할당량 | 72개 |

---

## 무료 도구 (68개)

### 기본 연결 (4개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `ping` | 연결 상태 확인 | "연결 상태 확인해줘" |
| `echo` | 에코 테스트 | - |
| `get_info` | 정보 조회 | "MCP 정보 보여줘" |
| `get_usage_status` | 사용량 상태 | "오늘 사용량 확인해줘" |

### 인스턴스 (13개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `create_instance` | 인스턴스 생성 | "빨간 파트 만들어줘" |
| `delete_instance` | 인스턴스 삭제 | "이 파트 삭제해줘" |
| `clone_instance` | 인스턴스 복제 | "이거 복제해줘" |
| `move_instance` | 인스턴스 이동 | "이 파트를 Folder1으로 옮겨줘" |
| `get_instance` | 인스턴스 정보 | "이 파트 정보 보여줘" |
| `get_instance_children` | 자식 목록 | "Workspace 자식들 보여줘" |
| `rename_instance` | 이름 변경 | "이름을 'Floor'로 바꿔줘" |
| `find_first_child` | 첫 번째 자식 찾기 | "'Part1'이라는 자식 찾아줘" |
| `find_first_descendant` | 자손 찾기 | "하위에서 'Button' 찾아줘" |
| `create_instance_with_properties` | 속성과 함께 생성 | "크기 10,1,10인 파트 만들어줘" |
| `get_class_info` | 클래스 정보 | "Part 클래스 정보 보여줘" |
| `wait_for_child` | 자식 대기 | - |
| `pivot_to` | 피벗 이동 | "이 모델을 (0,5,0)으로 이동" |

### 스크립트 (11개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `create_script` | 스크립트 생성 | "터치하면 색 바뀌는 스크립트" |
| `get_script_source` | 소스 조회 | "이 스크립트 내용 보여줘" |
| `set_script_source` | 소스 설정 | "스크립트 내용 수정해줘" |
| `read_script` | 스크립트 읽기 | "스크립트 코드 읽어줘" |
| `update_script` | 스크립트 업데이트 | "이 스크립트 수정해줘" |
| `delete_script` | 스크립트 삭제 | "이 스크립트 삭제해줘" |
| `edit_script_lines` | 라인 편집 | "5번 줄 수정해줘" |
| `insert_script_lines` | 라인 삽입 | "10번 줄에 코드 추가해줘" |
| `delete_script_lines` | 라인 삭제 | "3-5번 줄 삭제해줘" |
| `search_in_scripts` | 스크립트 내 검색 | "'player' 포함된 스크립트 찾아줘" |
| `get_script_dependencies` | 의존성 조회 | "이 스크립트가 require하는 것들" |

### 속성 (12개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `get_property` | 속성 조회 | "이 파트 색상 뭐야?" |
| `set_property` | 속성 설정 | "색상을 빨간색으로 바꿔줘" |
| `get_properties` | 여러 속성 조회 | "크기랑 위치 알려줘" |
| `set_properties` | 여러 속성 설정 | "크기는 5,5,5 위치는 0,10,0" |
| `get_all_properties` | 모든 속성 | "모든 속성 보여줘" |
| `set_multiple_properties` | 다중 속성 설정 | - |
| `set_calculated_property` | 계산된 속성 | "현재 크기의 2배로" |
| `set_relative_property` | 상대 속성 | "위치를 5만큼 위로" |
| `get_attribute` | 어트리뷰트 조회 | "Health 어트리뷰트 값" |
| `set_attribute` | 어트리뷰트 설정 | "Health를 100으로" |
| `get_all_attributes` | 모든 어트리뷰트 | "어트리뷰트 전부 보여줘" |
| `delete_attribute` | 어트리뷰트 삭제 | "Health 어트리뷰트 삭제" |

### 검색 (5개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `find_first_child` | 자식 찾기 | "'Part1' 찾아줘" |
| `find_first_descendant` | 자손 찾기 | "하위에서 'Enemy' 찾아줘" |
| `find_by_name` | 이름으로 찾기 | "이름이 'Wall'인 것들" |
| `search_by_name` | 이름 검색 | "'floor' 포함된 이름 검색" |
| `search_by_class` | 클래스 검색 | "모든 Part 찾아줘" |

### 선택 (12개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `get_selection` | 선택 항목 | "지금 뭐 선택됐어?" |
| `get_selection_context` | 선택 컨텍스트 | "선택된 것들 상세 정보" |
| `get_selection_details` | 선택 상세 | "선택된 파트들 속성" |
| `set_selection` | 선택 설정 | "Part1 선택해줘" |
| `clear_selection` | 선택 해제 | "선택 해제해줘" |
| `add_to_selection` | 선택 추가 | "Part2도 선택에 추가" |
| `remove_from_selection` | 선택 제거 | "Part1은 선택에서 제외" |
| `get_place_info` | Place 정보 | "현재 Place 정보" |
| `get_services` | 서비스 목록 | "사용 가능한 서비스들" |
| `get_studio_settings` | Studio 설정 | "Studio 설정 보여줘" |
| `run_command` | 명령 실행 | - |
| `watch_selection` | 선택 감시 | - |

### 태그 (5개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `add_tag` | 태그 추가 | "'Enemy' 태그 추가해줘" |
| `remove_tag` | 태그 제거 | "'Enemy' 태그 제거해줘" |
| `get_tags` | 태그 목록 | "이 파트의 태그들" |
| `get_tagged` | 태그된 항목 | "'Enemy' 태그가 붙은 것들" |
| `has_tag` | 태그 확인 | "'Enemy' 태그 있어?" |

### 카메라 (3개)

| 도구                          | 설명 | 예시 프롬프트          |
|-----------------------------|------|------------------|
| `get_camera_info`           | 카메라 정보 | "현재 카메라 위치"      |
| `get_suggested_camera_view` | 추천 뷰 | "이 모델 볼 때 추천 각도" |
| `focus_camera_path`         | 카메라 포커스 | "이 파트로 카메라 이동"   |
| `focus_camera_position`     | 카메라 포커스 | "이 위치로 카메라 이동"   |

### 로그 (3개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `get_output_logs` | 출력 로그 | "최근 로그 보여줘" |
| `clear_output_logs` | 로그 삭제 | "로그 지워줘" |
| `get_recent_errors` | 최근 에러 | "에러 있어?" |

---

## Pro 도구 (72개)

### 고급 스크립트 (2개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `replace_in_scripts` | 일괄 치환 | "모든 스크립트에서 'player'를 'character'로" |
| `execute_script` | 스크립트 실행 | "이 코드 실행해줘" |

### 고급 검색 (8개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `find_instances` | 인스턴스 검색 | "조건에 맞는 인스턴스들" |
| `find_by_class` | 클래스별 검색 | "모든 MeshPart 찾아줘" |
| `get_file_tree` | 파일 트리 | "전체 구조 보여줘" |
| `get_project_structure` | 프로젝트 구조 | "프로젝트 구조 분석해줘" |
| `search_by_property` | 속성 검색 | "Anchored가 false인 파트들" |
| `search_by_tag` | 태그 검색 | "'Collectible' 태그 검색" |
| `get_descendants` | 모든 자손 | "Workspace 전체 자손들" |
| `get_ancestors` | 모든 조상 | "이 파트의 부모 계층" |

### 대량 작업 (11개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `bulk_create` | 대량 생성 | "파트 50개 만들어줘" |
| `bulk_delete` | 대량 삭제 | "Part 클래스 전부 삭제" |
| `bulk_set_properties` | 대량 속성 설정 | "모든 파트 색상 변경" |
| `mass_create_instances` | 대량 인스턴스 생성 | "벽돌 100개 그리드로" |
| `mass_delete_instances` | 대량 삭제 | "선택된 것들 전부 삭제" |
| `mass_set_property` | 대량 속성 | "전부 빨간색으로" |
| `mass_get_property` | 대량 조회 | "모든 파트 위치 조회" |
| `mass_duplicate` | 대량 복제 | "이거 10개 복제" |
| `smart_duplicate` | 스마트 복제 | "패턴 유지하면서 복제" |
| `batch_execute` | 배치 실행 | "여러 명령 한번에" |
| `modify_children` | 자식 수정 | "모든 자식 속성 변경" |

### 에셋 (8개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `insert_asset` | 에셋 삽입 | "에셋 ID 123456 삽입" |
| `insert_model` | 모델 삽입 | "이 모델 넣어줘" |
| `get_asset_info` | 에셋 정보 | "이 에셋 정보" |
| `search_creator_store` | 스토어 검색 | "자동차 모델 검색해줘" |
| `search_and_insert_model` | 검색 후 삽입 | "나무 모델 찾아서 넣어줘" |
| `insert_free_model` | 무료 모델 삽입 | "무료 집 모델" |
| `insert_package` | 패키지 삽입 | "패키지 삽입해줘" |
| `export_selection` | 선택 내보내기 | "선택한 것 내보내기" |

### 환경 (5개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `set_lighting` | 조명 설정 | "조명 밝게 해줘" |
| `set_atmosphere` | 대기 설정 | "안개 추가해줘" |
| `set_sky` | 하늘 설정 | "밤하늘로 바꿔줘" |
| `set_terrain` | 지형 설정 | "지형 설정 변경" |
| `set_time_of_day` | 시간 설정 | "저녁 6시로" |

### 상태 관리 (9개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `sync_workspace_state` | 상태 동기화 | "현재 상태 동기화해줘" |
| `get_workspace_snapshot` | 스냅샷 | "Workspace 스냅샷" |
| `get_recent_changes` | 최근 변경 | "최근 변경사항" |
| `clear_change_history` | 이력 삭제 | "변경 이력 삭제" |
| `capture_viewport` | 뷰포트 캡처 | "화면 캡처해줘" |
| `get_workspace_metadata` | 메타데이터 | "Workspace 메타데이터" |
| `get_script_list` | 스크립트 목록 | "모든 스크립트 목록" |
| `get_selection_info` | 선택 정보 | "선택 상세 정보" |
| `clear_state_cache` | 캐시 삭제 | "캐시 정리해줘" |

### 공간 (5개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `get_spatial_map` | 공간 맵 | "공간 구조 분석" |
| `find_empty_space` | 빈 공간 찾기 | "빈 공간 찾아줘" |
| `get_bounds` | 경계 조회 | "이 모델의 크기/경계" |
| `snap_to_grid` | 그리드 스냅 | "그리드에 맞춰줘" |
| `check_collision` | 충돌 확인 | "다른 파트랑 겹쳐?" |

### 레이캐스트 (8개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `raycast` | 레이캐스트 | "이 방향으로 레이캐스트" |
| `find_ground` | 지면 찾기 | "이 위치의 지면 높이" |
| `check_placement` | 배치 확인 | "여기 배치 가능해?" |
| `multi_raycast` | 다중 레이캐스트 | "여러 방향으로 레이캐스트" |
| `scan_area` | 영역 스캔 | "이 영역 스캔해줘" |
| `find_flat_areas` | 평평한 영역 | "평평한 곳 찾아줘" |
| `find_spawn_positions` | 스폰 위치 | "스폰 위치 5개 추천" |
| `analyze_walkable_area` | 이동 가능 영역 | "걸을 수 있는 영역 분석" |

### 지형 (12개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `terrain_fill_block` | 블록 채우기 | "흙 블록 채워줘" |
| `terrain_fill_ball` | 구 채우기 | "돌 구체 생성" |
| `terrain_fill_cylinder` | 원통 채우기 | "물 원통 생성" |
| `terrain_fill_wedge` | 쐐기 채우기 | "경사면 생성" |
| `terrain_clear` | 지형 삭제 | "이 영역 지형 삭제" |
| `terrain_replace_material` | 재질 교체 | "잔디를 모래로 바꿔줘" |
| `terrain_get_material_color` | 재질 색상 조회 | "잔디 색상 뭐야?" |
| `terrain_set_material_color` | 재질 색상 설정 | "잔디를 연두색으로" |
| `terrain_read_voxels` | 복셀 읽기 | "이 영역 복셀 데이터" |
| `terrain_write_voxels` | 복셀 쓰기 | "복셀 데이터 적용" |
| `terrain_generate` | 지형 생성 | "산악 지형 만들어줘" |
| `terrain_smooth` | 지형 스무딩 | "지형 부드럽게 해줘" |

### 시각화 (6개)

| 도구 | 설명 | 예시 프롬프트 |
|-----|------|-------------|
| `visualization_create_area` | 영역 표시 | "이 영역 빨간색으로 표시" |
| `visualization_create_marker` | 마커 생성 | "여기에 마커 표시" |
| `visualization_remove` | 시각화 제거 | "이 시각화 제거" |
| `visualization_clear` | 전체 제거 | "모든 시각화 제거" |
| `visualization_get_status` | 상태 조회 | "시각화 상태" |
| `visualization_focus` | 시각화 포커스 | "이 시각화로 이동" |

---

## 티어별 사용량 제한 (무료 사용자)

| Pro 도구 카테고리 | 일일 할당량 |
|-----------------|:----------:|
| 대량 작업 | 10회 |
| 에셋 검색/삽입 | 5회 |
| 지형 생성 | 3회 |
| 환경 설정 | 5회 |
| 레이캐스트 | 10회 |
| 기타 Pro 도구 | 20회 |

Pro 구독 시 모든 제한이 해제됩니다.
