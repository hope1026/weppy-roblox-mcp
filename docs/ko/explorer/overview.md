# WEPPY Roblox Explorer 상세 가이드

**WEPPY Roblox Explorer**는 Roblox Studio의 Explorer 트리를 VSCode·Antigravity 같은 에디터 안에서 동일한 형태로 보여주는 companion 확장입니다. Studio와 로컬을 오가지 않고도 동기화된 인스턴스 계층을 탐색하고, 스크립트를 열고, 속성을 편집할 수 있습니다.

> **선택 사항** — Explorer는 필수가 아닙니다. MCP 서버와 Roblox Studio 플러그인만으로도 모든 핵심 기능을 사용할 수 있습니다. 에디터 안에서 프로젝트 구조를 탐색하거나 속성을 빠르게 확인·편집하고 싶을 때 설치하세요.

![WEPPY Roblox Explorer — VSCode 사이드바에 표시되는 Studio 인스턴스 트리](../../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## 왜 Explorer를 쓰는가

Sync가 생성한 파일만으로도 AI는 프로젝트 전체 문맥을 이해할 수 있지만, 사람이 직접 탐색할 때는 파일 경로만으로는 구조가 잘 드러나지 않습니다. Explorer는 같은 sync 데이터를 **Roblox Studio와 동일한 계층 구조**로 다시 보여주기 때문에 다음이 편해집니다.

- 스크립트가 어느 서비스/인스턴스 아래에 있는지 한눈에 파악
- 여러 서비스에 걸친 인스턴스를 이름·경로 기준으로 빠르게 찾기
- 동기화 상태(modified / studio / conflict)를 파일별로 확인
- Studio로 전환하지 않고 속성값을 편집

## 요구 사항

- VSCode 1.85+ 또는 Antigravity
- [Roblox MCP](../installation/README.md) 설치 및 Sync 활성화 (Basic 또는 Pro)
- 프로젝트 루트 아래에 Sync가 생성한 `weppy-project-sync/place_*/.sync-meta.json` 존재

Explorer는 기본적으로 디스크의 sync 파일만 읽어도 동작하며, 로컬 MCP 서버가 실행 중이면 실시간 sync 상태와 direction 정보를 추가로 반영합니다.

## 설치 방법

VSCode 또는 Antigravity의 Extensions 사이드바(`Ctrl+Shift+X` / `Cmd+Shift+X`)에서 **WEPPY Roblox Explorer**를 검색하고 **Install**을 클릭합니다.

마켓플레이스 직접 링크:

- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

## 인스턴스 트리 탐색

설치 후 VSCode Activity Bar에 **WEPPY Explorer** 뷰가 생성되며, 프로젝트 루트에서 sync 디렉토리를 자동 탐색합니다.

- **서비스 루트**: `Workspace`, `ReplicatedStorage`, `ServerScriptService` 등 동기화 대상 서비스가 최상위에 표시됩니다.
- **Roblox 클래스 아이콘**: 200개 이상의 Studio 아이콘이 다크/라이트 테마에 맞춰 자동으로 전환됩니다.
- **멀티 Place**: 동기화된 Place가 여러 개일 때 각 Place별로 트리 루트가 분리되어 표시됩니다.
- **자동 새로고침**: Sync 파일이 변경되면 500ms 디바운스로 트리가 자동 갱신됩니다.
- **Sync 상태 배지**: `modified`, `studio`, `conflict` 상태가 아이콘 옆에 표시되어 변경/충돌을 즉시 확인할 수 있습니다.

트리에서 항목을 클릭하면 해당 인스턴스를 뒷받침하는 파일(`.server.luau`, `.client.luau`, `.module.luau`, `.props.json` 등)이 바로 열립니다. 우클릭 메뉴로 인스턴스 경로를 `game.Workspace.Part` 형식으로 복사하거나, 기본 VSCode 탐색기에서 해당 파일 위치를 보여줄 수 있습니다.

## Property Panel

Explorer 트리에서 인스턴스를 선택하고 **Open Properties** 명령을 실행하면, Studio의 Properties 창과 같은 형태의 패널이 열립니다. `.props.json` 파일을 직접 편집하지 않고도 속성을 그룹별로 확인하고 수정할 수 있습니다.

![Property Panel — Roblox Studio와 동일한 속성 편집 화면을 VSCode에서 사용](../../assets/screenshots/roblox-explorer/roblox-explorer-property-window.png)

- **그룹별 표시**: Appearance, Behavior, Data, Part, Transform 등 Studio와 같은 분류로 속성을 정리합니다.
- **타입 기반 에디터**: 숫자, 문자열, Boolean, Color, Vector3, Enum 등 속성 타입에 맞는 입력 위젯이 제공됩니다.
- **파일 기반 편집**: 변경 내용은 해당 인스턴스의 `*.props.json` 파일에 저장되며, Sync의 reverse 경로를 통해 Studio로 반영됩니다(Pro, bidirectional 설정 시).
- **커스텀 에디터 등록**: `.props.json` 파일을 직접 열면 기본 편집기 대신 Property Panel이 자동으로 연결됩니다.

자동으로 Property Panel을 열고 싶다면 설정에서 `robloxExplorer.propertyPanel.autoOpen` 을 `true` 로 바꾸면 됩니다.

## 인스턴스 검색

`WEPPY Explorer: Search Instances` 명령(뷰 상단 아이콘 또는 Command Palette)을 사용하면 모든 서비스에 걸쳐 QuickPick 기반 검색을 할 수 있습니다.

- 인스턴스 이름의 부분 일치로 빠르게 탐색
- 결과 선택 시 트리에서 해당 항목으로 포커스 이동
- 여러 Place가 동기화된 경우 Place별 네임스페이스에서 검색

## 설정

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `robloxExplorer.mcpBaseUrl` | `""` | 로컬 MCP HTTP 베이스 URL. 비워두면 `http://127.0.0.1:3002`, `http://127.0.0.1:3003` 순으로 시도합니다. |
| `robloxExplorer.syncRoot` | `""` | `weppy-project-sync` 루트 절대 경로. 비워두면 워크스페이스 폴더에서 자동 탐색합니다. |
| `robloxExplorer.hidePropsFiles` | `false` | 기본 VSCode 탐색기에서 sync 파일(`.props.json`, `_tree.json`, `.value.json`)을 숨깁니다. |
| `robloxExplorer.autoRefresh` | `true` | Sync 파일 변경 시 트리를 자동 새로고침합니다. |
| `robloxExplorer.showSyncStatus` | `true` | 트리 항목에 Sync 상태 배지를 표시합니다. |
| `robloxExplorer.followFocusCue` | `false` | 외부 focus cue 파일에 따라 트리를 자동으로 열고 관련 파일을 엽니다. |
| `robloxExplorer.propertyPanel.autoOpen` | `false` | 트리에서 인스턴스 선택 시 Property Panel을 자동으로 엽니다. |

## 명령어

| 명령어 | 설명 |
|--------|------|
| `WEPPY Explorer: Refresh` | 인스턴스 트리 수동 새로고침 |
| `WEPPY Explorer: Search Instances` | 모든 서비스에서 인스턴스 검색 |
| `WEPPY Explorer: Open Backing File` | 선택한 인스턴스의 backing 파일 열기 |
| `WEPPY Explorer: Open Properties` | 선택한 인스턴스의 Property Panel 열기 |
| `WEPPY Explorer: Copy Instance Path` | 전체 인스턴스 경로 복사 (예: `game.Workspace.Part`) |
| `WEPPY Explorer: Reveal in Explorer` | 기본 VSCode 탐색기에서 파일 위치 표시 |
| `WEPPY Explorer: Collapse All` | 트리의 모든 노드 접기 |
| `WEPPY Explorer: Open Settings` | Explorer 설정 페이지 열기 |

## 문제 해결

- **트리가 비어 있음**: `weppy-project-sync/place_*` 디렉토리가 존재하는지, Sync가 최소 한 번 Full Sync를 마쳤는지 확인하세요. 필요하다면 `robloxExplorer.syncRoot`를 수동 지정합니다.
- **Sync 상태가 표시되지 않음**: 로컬 MCP 서버가 실행 중인지 확인하고, `robloxExplorer.mcpBaseUrl`을 명시적으로 설정해 보세요.
- **Property Panel이 열리지 않음**: `.props.json` 파일이 기본 편집기로 열릴 경우, 파일 우클릭 메뉴에서 **Reopen Editor With... → WEPPY Property Panel**을 선택합니다.
- **아이콘이 깨짐**: VSCode 테마를 다시 선택하거나 창을 재시작해 아이콘 캐시를 갱신합니다.

## 함께 보면 좋은 문서

- [Roblox MCP 설치 가이드](../installation/README.md)
- [Sync 기능 상세 가이드](../sync/overview.md)
- [Tool 지원 범위 (Tools Overview)](../tools/overview.md)
