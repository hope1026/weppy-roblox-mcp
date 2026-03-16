# Roblox 플러그인 설치

Roblox Studio에서 AI 에이전트와 연결하기 위한 플러그인 설치 방법입니다.

## 1. 플러그인 다운로드

1. [GitHub Releases](https://github.com/hope1026/weppy-roblox-mcp/releases/latest) 열기
2. `weppy-roblox-mcp-v{버전}.zip` 다운로드
3. ZIP 압축 해제 - `roblox-plugin/WeppyRobloxMCP.rbxm` 파일과 설치 가이드 포함

참고:
- Basic은 동일한 플러그인 패키지를 설치하고 Basic 정책(Studio -> Local 단방향 Sync)으로 동작합니다.
- Pro 구독 라이선스 활성화 시 양방향 Sync와 더 넓은 고급 Tool 기능을 사용할 수 있습니다.

## 2. 플러그인 설치

1. **Roblox Studio** 실행
2. 상단 메뉴 **Plugins** 탭 클릭
3. **Plugins Folder** 버튼 클릭

![Plugins Folder 열기](../../assets/screenshots/plugins_menu.png)

4. 압축 해제한 폴더에서 `WeppyRobloxMCP.rbxm` 파일을 열린 Plugins 폴더에 **복사**
5. **Roblox Studio 재시작**

## 3. 설치 확인

재시작 후 Plugins 탭에 **W-MCP** 버튼이 나타납니다.

![W-MCP 버튼](../../assets/screenshots/weppy_plugin_toolbar.png)

## 4. AI 에이전트 연결

### 사전 준비

MCP 서버가 설치되어 있어야 합니다. 사용하는 AI 앱에 맞는 가이드를 먼저 완료하세요:

| AI 앱 | 설치 가이드 |
|-------|-------------|
| Claude Code | [설정 방법](ai-apps/claude-code.md) |
| Claude Desktop | [설정 방법](ai-apps/claude-app.md) |
| Codex CLI | [설정 방법](ai-apps/codex-cli.md) |
| Codex Desktop | [설정 방법](ai-apps/codex-app.md) |
| Gemini CLI | [설정 방법](ai-apps/gemini-cli.md) |
| Antigravity | [설정 방법](ai-apps/antigravity.md) |

### 연결하기

1. **Roblox Studio**에서 아무 프로젝트를 엽니다
2. 상단 **Plugins** 탭 -> **W-MCP** 클릭
3. 플러그인 창에서 **Connect** 버튼 클릭
4. **"Connected"** 상태가 표시되면 연결 완료

![플러그인 메인 화면](../../assets/screenshots/plugin_main.png)

## 5. 설정 (선택사항)

플러그인 우측 상단의 설정 버튼을 클릭하면 다양한 옵션을 변경할 수 있습니다.

![설정 화면](../../assets/screenshots/settings.png)

- **자동 연결**: Studio 시작 시 자동으로 MCP 서버에 연결
- **자동 재연결**: 연결이 끊어지면 자동으로 재연결 시도
- **자동 카메라 포커스**: 생성된 오브젝트로 카메라 자동 이동
- **언어**: 플러그인 UI 언어 변경

## 문제 해결

### 플러그인이 안 보여요

- Roblox Studio를 완전히 종료 후 재시작
- Plugins Folder에 파일이 제대로 복사되었는지 확인
- `.rbxm` 파일이 손상되지 않았는지 확인

### 연결이 안 돼요

- AI 앱에서 MCP 서버가 실행 중인지 확인
- 플러그인에서 **Connect** 버튼을 다시 클릭
- 포트 3002가 다른 프로그램에 사용 중인지 확인

### 연결이 자주 끊어져요

- 설정에서 **자동 재연결** 옵션 활성화
- AI 앱을 재시작
