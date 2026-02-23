# Pro 업그레이드 가이드

## 왜 Pro인가?

### 실제 개발 워크플로우를 위한 양방향 Sync

Pro Sync는 단방향 내보내기를 넘어섭니다. 로컬에서 스크립트를 편집하고 Studio에 반영하세요. Studio에서 변경하고 로컬로 가져오세요. Pro는 양쪽을 항상 동기화합니다.

- **양방향 Sync** — Studio와 로컬 파일 간 양방향으로 변경사항이 흐릅니다.
- **타입별 Direction** — Scripts, Values, Containers, Data, Services를 각각 독립적으로 방향 설정.
- **타입별 Apply Mode** — 타입별로 Auto 또는 Manual을 선택하여 속도와 제어를 균형있게.
- **Full Sync / Resync** — 대규모 변경이나 재연결 후 즉시 깨끗한 프로젝트 상태를 재구축.
- **변경 기록** — 적용 전에 무엇이, 언제, 어느 방향으로 변경됐는지 추적.
- **멀티 Place Sync** — 최대 3개의 Roblox Place를 동시에 Sync하며, 각 Place마다 독립된 저장소와 변경 기록을 유지합니다.

### 고효율 워크플로우로 AI 토큰 절약

대량 및 고급 작업으로 반복 호출을 줄여 프롬프트 한 번에 더 많은 작업을 처리합니다.

### 더 넓은 고급 기능

지형 생성, 에셋 검색, 공간 분석, 애니메이션, 오디오, 대규모 자동화.

## 구독 및 다운로드

### 1단계: Gumroad에서 Pro 구독 라이선스 구매

1. [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md) 접속
2. Pro 구독 라이선스 구매 완료

### 2단계: GitHub Releases에서 다운로드

1. [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest) 열기
2. `weppy-roblox-mcp-v{version}.zip` 다운로드
3. 압축 해제 후 `roblox-plugin/WeppyRobloxMCP.rbxm`를 Roblox Plugins 폴더에 복사

### 3단계: 확인

1. Roblox Studio에서 W-MCP 열기
2. Pro 배지가 표시되는지 확인
3. Pro action(예: `manage_sync`, 대량 작업) 실행 확인

## 기능 비교

| 기능 | Basic | Pro |
|-----|:-----:|:---:|
| Script, Instance, Property 관리 | ✅ 전체 사용 | ✅ 전체 사용 |
| Selection, Tag, Camera, Log | ✅ 전체 사용 | ✅ 전체 사용 |
| Sync 방향 | Studio → Local (단방향) | 양방향 |
| 타입별 Sync Direction | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| 타입별 Apply Mode | ❌ | ✅ Auto / Manual |
| Full Sync | ❌ | ✅ |
| Resync / 상태 재구축 | ❌ | ✅ |
| 변경 기록 | ❌ | ✅ |
| 멀티 Place Sync | ❌ | ✅ 최대 3개 Place, 각각 독립 저장소 |
| 고급 Tool 범위 | 기본 범위 | 더 넓은 고급 범위 |
| AI 토큰 효율 | 기본 | 대량/고효율 action으로 더 유리 |
