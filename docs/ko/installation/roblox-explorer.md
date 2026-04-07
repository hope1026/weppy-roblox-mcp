# WROX Roblox Explorer (VSCode · Antigravity 확장)

> **선택 사항** — Explorer는 필수가 아닙니다. MCP와 플러그인만으로도 모든 핵심 기능을 사용할 수 있습니다. 프로젝트 구조를 에디터에서 탐색하고 싶을 때 설치하세요.

Roblox Studio의 Explorer와 동일한 인스턴스 트리를 에디터에서 볼 수 있는 확장입니다. 동기화된 인스턴스를 탐색하고, 스크립트를 바로 열고, Sync 상태를 에디터 안에서 확인할 수 있습니다.
이 확장은 WROX용 companion 확장이며, 단독 Roblox 연동 도구는 아닙니다.

![WROX Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## 요구 사항

- VSCode 1.85+ 또는 Antigravity
- [Roblox MCP](../../../README.md) 설치 및 Sync 활성화 (Basic 또는 Pro)
- 프로젝트 루트 아래에 Sync가 생성한 `wrox-project-sync/place_*/.sync-meta.json` 존재

## 설치 방법

### VSCode

VSCode Extensions 사이드바(`Ctrl+Shift+X` / `Cmd+Shift+X`)에서 **WROX Roblox Explorer**를 검색하고 **Install**을 클릭합니다.

또는 아래 마켓플레이스에서 바로 설치할 수 있습니다.

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

### Antigravity

Antigravity는 VSCode 기반이므로 동일한 확장을 사용합니다. Antigravity의 Extensions 탭에서 **WROX Roblox Explorer**를 검색하고 **Install**을 클릭합니다.

---

기본 트리 탐색은 디스크에 있는 sync 파일만으로 동작합니다. 로컬 MCP 서버에 연결되면 실시간 sync 상태, direction 표시, Explorer 텔레메트리 전달 기능을 함께 사용할 수 있습니다.

## 기능

- **인스턴스 트리**: Roblox Studio와 동일한 서비스/인스턴스 계층 구조
- **Roblox 클래스 아이콘**: 200개 이상의 클래스 아이콘 (다크/라이트 테마 지원)
- **멀티 Place**: 동기화된 Place별로 트리 루트 분리
- **클릭으로 파일 열기**: `.server.luau`, `.client.luau`, `.module.luau`, `.props.json` 등 바로 열기
- **인스턴스 검색**: 모든 서비스에 걸쳐 QuickPick 검색
- **Sync 상태 배지**: `modified`, `studio`, `conflict` 상태를 한눈에 확인
- **자동 새로고침**: Sync 파일 변경 시 트리 자동 갱신 (500ms 디바운스)
- **인스턴스 경로 복사**: 우클릭으로 `game.Workspace.Part` 형식의 경로 복사

## 설정

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `robloxExplorer.syncRoot` | `""` | `wrox-project-sync` 루트 절대 경로. 비워두면 자동 탐색합니다. WROX는 `{projectRoot}/wrox-project-sync` 를 사용합니다. |
| `robloxExplorer.hidePropsFiles` | `false` | 기본 VSCode 탐색기에서 동기화 파일(`.props.json`, `_tree.json`, `.value.json`)을 숨깁니다. |
| `robloxExplorer.autoRefresh` | `true` | Sync 파일 변경 시 트리를 자동으로 새로고침합니다. |
| `robloxExplorer.showSyncStatus` | `true` | 트리 항목에 Sync 상태 장식을 표시합니다. |

## 명령어

| 명령어 | 설명 |
|--------|------|
| `WROX Explorer: Refresh` | 인스턴스 트리 수동 새로고침 |
| `WROX Explorer: Search Instances` | 모든 서비스에서 인스턴스 검색 |
| `WROX Explorer: Open Backing File` | 선택한 인스턴스의 파일 열기 |
| `WROX Explorer: Copy Instance Path` | 전체 인스턴스 경로 복사 (예: `game.Workspace.Part`) |
| `WROX Explorer: Reveal in Explorer` | 기본 VSCode 탐색기에서 파일 표시 |

## 관련 문서

- [Sync 기능 상세 가이드](../sync/overview.md)
- [설치 가이드](README.md)
