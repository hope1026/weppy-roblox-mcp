# Weepy Roblox Explorer (VSCode 확장)

Roblox Studio의 Explorer와 동일한 인스턴스 트리를 VSCode에서 볼 수 있는 확장입니다. 동기화된 인스턴스를 탐색하고, 스크립트를 바로 열고, Sync 상태를 에디터 안에서 확인할 수 있습니다.

![Weepy Roblox Explorer](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## 요구 사항

- VSCode 1.85+
- [Roblox MCP](../../../README.md) Sync 활성화 (Basic 또는 Pro)

## 설치 방법

### 1. 릴리스 ZIP 다운로드

[Releases](https://github.com/hope1026/weppy-roblox-mcp/releases) 페이지에서 최신 `weppy-roblox-explorer-v*.zip` 파일을 다운로드합니다.

> ZIP 패키지 안에 VSCode에 설치할 `weppy-roblox-explorer-*.vsix` 파일이 들어 있습니다.

### 2. VSCode에서 설치

1. VSCode를 엽니다
2. Extensions 사이드바를 엽니다 (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. 상단 `...` 메뉴 → **Install from VSIX...** 클릭

![Install from VSIX](../../assets/screenshots/roblox-explorer/install-from-vsix.png)

4. ZIP을 압축 해제한 뒤 포함된 `.vsix` 파일을 선택합니다
5. 안내에 따라 VSCode를 리로드합니다

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
| `robloxExplorer.syncRoot` | `""` | `roblox-project-sync` 루트 절대 경로. 비워두면 자동 탐색. |
| `robloxExplorer.hidePropsFiles` | `false` | 기본 VSCode 탐색기에서 동기화 파일(`.props.json`, `_tree.json`, `.value.json`)을 숨깁니다. |
| `robloxExplorer.autoRefresh` | `true` | Sync 파일 변경 시 트리를 자동으로 새로고침합니다. |
| `robloxExplorer.showSyncStatus` | `true` | 트리 항목에 Sync 상태 장식을 표시합니다. |

## 명령어

| 명령어 | 설명 |
|--------|------|
| `Weepy Roblox Explorer: Refresh` | 인스턴스 트리 수동 새로고침 |
| `Weepy Roblox Explorer: Search Instances` | 모든 서비스에서 인스턴스 검색 |
| `Weepy Roblox Explorer: Open Backing File` | 선택한 인스턴스의 파일 열기 |
| `Weepy Roblox Explorer: Copy Instance Path` | 전체 인스턴스 경로 복사 (예: `game.Workspace.Part`) |
| `Weepy Roblox Explorer: Reveal in Explorer` | 기본 VSCode 탐색기에서 파일 표시 |

## 업데이트

[Releases](https://github.com/hope1026/weppy-roblox-mcp/releases)에서 최신 `weppy-roblox-explorer-v*.zip`를 다운로드하고 `.vsix`를 압축 해제한 뒤 동일한 설치 과정을 반복하면 됩니다. 기존 버전이 자동으로 교체됩니다.

## 관련 문서

- [Sync 기능 상세 가이드](../sync/overview.md)
- [설치 가이드](README.md)
