# Roblox Studio 플러그인 설치

## Creator Store에서 설치 (권장)

1. [Creator Store 링크](https://create.roblox.com/store/asset/YOUR_ASSET_ID) 클릭
2. **Get Plugin** 버튼 클릭
3. Roblox Studio 재시작
4. Plugins 탭에서 **W-MCP** 확인

## 수동 설치

### Windows

1. 플러그인 파일 다운로드: `WeppyRobloxMCP.rbxm`
2. 다음 폴더에 복사:
   ```
   %LOCALAPPDATA%\Roblox\Plugins\
   ```
3. 전체 경로: `C:\Users\<사용자명>\AppData\Local\Roblox\Plugins\WeppyRobloxMCP.rbxm`
4. Roblox Studio 재시작

### macOS

1. 플러그인 파일 다운로드: `WeppyRobloxMCP.rbxm`
2. 다음 폴더에 복사:
   ```
   ~/Documents/Roblox/Plugins/
   ```
3. 전체 경로: `/Users/<사용자명>/Documents/Roblox/Plugins/WeppyRobloxMCP.rbxm`
4. Roblox Studio 재시작

## 플러그인 사용법

![Main Interface](../../../assets/screenshots/plugin_main.png)


### 연결하기

1. Roblox Studio에서 Place 열기
2. **Plugins** 탭 클릭
3. **W-MCP** 버튼 클릭 → 위젯 열림
4. **Connect** 버튼 클릭
5. 상태가 "Connected"로 변경되면 완료

![Connection Popup](../../../assets/screenshots/connection_popup.png)


### 상태 표시

| 상태 | 의미 |
|-----|------|
| 🔴 Disconnected | MCP 서버에 연결되지 않음 |
| 🟡 Connecting... | 연결 시도 중 |
| 🟢 Connected | 연결됨, AI 명령 대기 중 |

### 연결 해제

- **Disconnect** 버튼 클릭
- 또는 위젯 닫기

### 설정

플러그인 우측 상단의 톱니바퀴 아이콘을 클릭하여 설정을 변경할 수 있습니다.

![Settings](../../../assets/screenshots/settings.png)


## 문제 해결

### 플러그인이 보이지 않음

1. Roblox Studio 완전히 종료 후 재시작
2. 플러그인 파일이 올바른 폴더에 있는지 확인
3. 파일 확장자가 `.rbxm`인지 확인

### "Not Connected" 상태 지속

1. AI 앱에서 MCP 서버가 실행 중인지 확인
2. 방화벽에서 포트 3002 허용:
   - Windows: Windows 방화벽 → 인바운드 규칙 추가
   - macOS: 시스템 환경설정 → 보안 및 개인정보 → 방화벽
3. **Reconnect** 버튼 클릭

### 명령이 실행되지 않음

1. 플러그인 상태가 "Connected"인지 확인
2. AI 앱에서 MCP 서버 연결 상태 확인
3. Output 창에서 에러 메시지 확인 (View → Output)

## 다음 단계

플러그인 설치가 완료되면, 사용하는 AI 앱에 맞는 MCP 서버 설정을 진행하세요:

- [Claude Desktop 설정](claude-desktop.md)
- [Claude Code 설정](claude-code.md)
- [Cursor 설정](cursor.md)
- [Codex CLI 설정](codex-cli.md)
- [Gemini CLI 설정](gemini-cli.md)
