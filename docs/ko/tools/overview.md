# Roblox MCP 도구

MCP 도구의 상세 파라미터는 MCP 도구 정의를 직접 확인하세요.

---

## Basic 도구 (68개)

### Instance (인스턴스) - 13개

| 도구 | 설명 |
|------|-------------|
| `create_instance` | 새로운 인스턴스 생성 |
| `create_instance_with_properties` | 속성과 함께 인스턴스 생성 |
| `clone_instance` | 기존 인스턴스 복제 |
| `delete_instance` | 인스턴스 삭제 |
| `move_instance` | 인스턴스를 새로운 부모로 이동 |
| `rename_instance` | 인스턴스 이름 변경 |
| `get_instance` | 인스턴스 정보 조회 |
| `get_instance_children` | 인스턴스의 자식 목록 조회 |
| `find_first_child` | 이름으로 첫 번째 자식 찾기 |
| `find_first_descendant` | 이름으로 첫 번째 자손 찾기 |
| `get_class_info` | 클래스 정보 조회 |
| `wait_for_child` | 자식이 생길 때까지 대기 |
| `pivot_to` | Pivot CFrame 설정 |

### Property (속성) - 10개

| 도구 | 설명 |
|------|-------------|
| `get_property` | 속성 값 조회 |
| `set_property` | 속성 값 설정 |
| `get_all_properties` | 모든 속성 조회 |
| `set_multiple_properties` | 여러 속성 동시 설정 |
| `set_calculated_property` | 계산된 값으로 속성 설정 |
| `set_relative_property` | 상대적인 값으로 속성 설정 |
| `get_attribute` | 어트리뷰트 값 조회 |
| `set_attribute` | 어트리뷰트 값 설정 |
| `get_all_attributes` | 모든 어트리뷰트 조회 |
| `delete_attribute` | 어트리뷰트 삭제 |

### Script (스크립트) - 9개

| 도구 | 설명 |
|------|-------------|
| `create_script` | 새로운 스크립트 생성 |
| `get_script_source` | 스크립트 소스 코드 조회 |
| `set_script_source` | 스크립트 소스 코드 업데이트 |
| `delete_script` | 스크립트 삭제 |
| `edit_script_lines` | 특정 라인 편집 |
| `insert_script_lines` | 라인 삽입 |
| `delete_script_lines` | 라인 삭제 |
| `search_in_scripts` | 스크립트 내 검색 |
| `get_script_dependencies` | 의존성 조회 |

### Selection (선택) - 12개

| 도구 | 설명 |
|------|-------------|
| `get_selection` | 현재 선택된 인스턴스 조회 |
| `get_selection_context` | 컨텍스트와 함께 선택 항목 조회 |
| `get_selection_details` | 선택 항목 상세 정보 조회 |
| `set_selection` | 인스턴스 선택 설정 |
| `clear_selection` | 선택 해제 |
| `add_to_selection` | 선택에 추가 |
| `remove_from_selection` | 선택에서 제거 |
| `get_place_info` | Place 정보 조회 |
| `get_services` | 게임 서비스 목록 조회 |
| `get_studio_settings` | Studio 설정 조회 |
| `run_command` | Studio 명령 실행 |
| `watch_selection` | 선택 변경 감시 |

### Search (검색) - 2개

| 도구 | 설명 |
|------|-------------|
| `search_by_name` | 이름으로 인스턴스 검색 |
| `search_by_class` | 클래스로 인스턴스 검색 |

### Tag (태그) - 5개

| 도구 | 설명 |
|------|-------------|
| `add_tag` | 인스턴스에 태그 추가 |
| `remove_tag` | 인스턴스에서 태그 제거 |
| `get_tags` | 인스턴스의 태그 목록 조회 |
| `get_tagged` | 태그가 된 인스턴스 목록 조회 |
| `has_tag` | 인스턴스 태그 보유 여부 확인 |

### Camera (카메라) - 4개

| 도구 | 설명 |
|------|-------------|
| `get_camera_info` | 카메라 정보 조회 |
| `get_suggested_camera_view` | 추천 카메라 뷰 조회 |
| `focus_camera_path` | 경로로 인스턴스에 카메라 포커스 |
| `focus_camera_position` | 월드 위치에 카메라 포커스 |

### Log (로그) - 3개

| 도구 | 설명 |
|------|-------------|
| `get_output_logs` | 출력 로그 조회 |
| `clear_output_logs` | 출력 로그 초기화 |
| `get_recent_errors` | 최근 에러 조회 |

### Connection (연결) - 2개

| 도구 | 설명 |
|------|-------------|
| `get_connection_info` | 연결 상태 조회 |
| `get_usage_status` | 사용량/할당량 상태 조회 |

---

## Pro 도구 (+72개)
👉 [Pro 업그레이드 가이드](pro-upgrade.md)

### Script (스크립트) - 2개

| 도구 | 설명 |
|------|-------------|
| `replace_in_scripts` | 스크립트 내용 일괄 치환 |
| `execute_script` | Luau 코드 직접 실행 |

### Search (검색) - 6개

| 도구 | 설명 |
|------|-------------|
| `get_file_tree` | 파일 트리 조회 |
| `get_project_structure` | 프로젝트 구조 트리 조회 |
| `search_by_property` | 속성으로 검색 |
| `search_by_tag` | 태그로 검색 |
| `get_descendants` | 모든 자손 조회 |
| `get_ancestors` | 조상 조회 |

### Bulk (대량 작업) - 8개

| 도구 | 설명 |
|------|-------------|
| `mass_create_instances` | 인스턴스 대량 생성 |
| `mass_delete_instances` | 인스턴스 대량 삭제 |
| `mass_set_property` | 속성 대량 설정 |
| `mass_get_property` | 속성 대량 조회 |
| `mass_duplicate` | 인스턴스 대량 복제 |
| `smart_duplicate` | 오프셋을 적용한 스마트 복제 |
| `batch_execute` | 다중 명령 일괄 실행 |
| `modify_children` | 모든 자식 수정 |

### Asset (에셋) - 7개

| 도구 | 설명 |
|------|-------------|
| `insert_model` | Creator Store에서 모델 삽입 |
| `get_asset_info` | 에셋 정보 조회 |
| `search_creator_store` | Creator Store 에셋 검색 |
| `search_and_insert_model` | 모델 검색 및 삽입 |
| `insert_free_model` | 무료 모델 삽입 |
| `insert_package` | 패키지 삽입 |
| `export_selection` | 선택 항목 내보내기 |

### Environment (환경) - 5개

| 도구 | 설명 |
|------|-------------|
| `set_lighting` | 조명 속성 설정 |
| `set_atmosphere` | Atmosphere 속성 설정 |
| `set_sky` | Sky 속성 설정 |
| `set_terrain` | Terrain 속성 설정 |
| `set_time_of_day` | 시간 설정 |

### State (상태) - 9개

| 도구 | 설명 |
|------|-------------|
| `sync_workspace_state` | Workspace 상태 동기화 |
| `get_workspace_snapshot` | Workspace 스냅샷 조회 |
| `get_recent_changes` | 최근 변경 사항 조회 |
| `clear_change_history` | 변경 이력 초기화 |
| `get_viewport_info` | 뷰포트 상태 정보 조회 |
| `get_workspace_metadata` | Workspace 메타데이터 조회 |
| `get_script_list` | 스크립트 목록 조회 |
| `get_selection_info` | 선택 정보 조회 |
| `clear_state_cache` | 상태 캐시 초기화 |

### Spatial (공간) - 5개

| 도구 | 설명 |
|------|-------------|
| `get_spatial_map` | 영역의 공간 맵 조회 |
| `find_empty_space` | 영역 내 빈 공간 찾기 |
| `get_bounds` | 인스턴스의 경계 박스 조회 |
| `snap_to_grid` | 위치를 그리드에 스냅 |
| `check_collision` | 인스턴스 간 충돌 확인 |

### Raycast (레이캐스트) - 8개

| 도구 | 설명 |
|------|-------------|
| `raycast` | 레이캐스트 실행 및 충돌 정보 조회 |
| `find_ground` | 해당 지점의 지면 위치 찾기 |
| `check_placement` | 물체 배치 가능 여부 확인 |
| `multi_raycast` | 다중 레이캐스트 수행 |
| `scan_area` | 영역 스캔 및 높이맵 생성 |
| `find_flat_areas` | 평평한 배치 영역 찾기 |
| `find_spawn_positions` | 유효한 스폰 위치 찾기 |
| `analyze_walkable_area` | 이동 가능 영역 분석 |

### Terrain (지형) - 14개

| 도구 | 설명 |
|------|-------------|
| `terrain_fill_block` | 블록 형태로 지형 채우기 |
| `terrain_fill_ball` | 구 형태로 지형 채우기 |
| `terrain_fill_cylinder` | 원통 형태로 지형 채우기 |
| `terrain_fill_wedge` | 쐐기 형태로 지형 채우기 |
| `terrain_clear` | 지형 삭제 (Region 객체 사용) |
| `terrain_clear_region` | 지형 삭제 (최소/최대 좌표 사용) |
| `terrain_replace_material` | 지형 재질 교체 |
| `terrain_get_material_color` | 지형 재질 색상 조회 |
| `terrain_set_material_color` | 지형 재질 색상 설정 |
| `terrain_read_voxel` | 단일 복셀 읽기 |
| `terrain_read_voxels` | 복셀 데이터 읽기 |
| `terrain_write_voxels` | 복셀 데이터 쓰기 |
| `terrain_generate` | 절차적 지형 생성 |
| `terrain_smooth` | 지형 부드럽게 하기 |

### Visualization (시각화) - 7개

| 도구 | 설명 |
|------|-------------|
| `visualization_create_area` | 영역 시각화 생성 |
| `visualization_create_marker` | 마커 시각화 생성 (미리보기 포함) |
| `visualization_create_line` | 선 시각화 생성 |
| `visualization_remove` | 시각화 제거 |
| `visualization_clear` | 모든 시각화 제거 |
| `visualization_get_status` | 시각화 상태 조회 |
| `visualization_focus` | 시각화 항목으로 카메라 포커스 |
