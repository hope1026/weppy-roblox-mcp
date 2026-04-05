# 설치 가이드

Roblox MCP를 사용하려면 **두 가지**를 설치해야 합니다.

```
AI 앱 (Claude, Codex, Gemini 등)
       │
   MCP 서버 ← 여기서 AI의 명령을 Roblox가 이해하는 형태로 변환
       │
Roblox Studio 플러그인 ← Studio 안에서 명령을 실행
```

AI 앱이 "파란 파트를 만들어줘"라고 하면, MCP 서버가 이 요청을 변환하고, Roblox Studio 플러그인이 실제로 파트를 만듭니다.

---

## 원라인 설치 (권장)

아래 명령어 한 줄로 MCP 서버와 플러그인을 한 번에 설치합니다:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

AI 앱을 다시 열고 Roblox Studio를 재시작하세요.

설치 중 오류가 발생하면 임시 로그 파일 경로를 출력하고, 대화형 실행에서는 종료 전에 콘솔을 유지해서 원인을 확인할 수 있습니다.

자동 MCP 등록은 **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity**를 지원합니다.

Windows에서 PowerShell 실행이 차단되면 아래 수동 설치로 진행하세요. ZIP 패키지를 사용하는 경우 `setup-plugin.bat`, `setup-mcp.bat`를 실행할 수 있습니다.

---

## 수동 설치

원라인 설치가 동작하지 않거나 환경상 자동 설치를 사용할 수 없는 경우에 진행하는 대안 설치 방법입니다.

### 1단계: Roblox Studio 플러그인 설치

GitHub에서 플러그인 파일을 다운로드한 뒤, Roblox Studio의 Plugins 폴더에 넣으면 됩니다.

👉 [플러그인 설치 가이드](roblox-plugin.md)

---

### 2단계: AI 앱에 MCP 서버 등록

사용하는 AI 앱에 MCP 서버를 등록합니다. MCP를 지원하는 모든 AI 앱에서 사용할 수 있어요.

| AI 앱 | 설치 가이드 |
|-------|-------------|
| Claude Code | [설정 방법](ai-apps/claude-code.md) |
| Claude Desktop | [설정 방법](ai-apps/claude-app.md) |
| Cursor | [설정 방법](ai-apps/cursor.md) |
| Codex CLI | [설정 방법](ai-apps/codex-cli.md) |
| Codex Desktop | [설정 방법](ai-apps/codex-app.md) |
| Gemini CLI | [설정 방법](ai-apps/gemini-cli.md) |
| Antigravity | [설정 방법](ai-apps/antigravity.md) |

> 위 목록에 없는 AI 앱이라도 MCP를 지원한다면 사용할 수 있습니다. MCP 서버 명령어는 `npx -y @weppy/roblox-mcp` 입니다.

---

## 선택 사항: WROX Roblox Explorer (VSCode 확장) 설치

동기화된 인스턴스 트리를 Roblox 클래스 아이콘과 함께 VSCode에서 탐색할 수 있습니다.
이 확장은 위의 Roblox MCP 설치를 먼저 완료해야 사용할 수 있습니다. Explorer가 프로젝트 루트 아래의 `wrox-project-sync` Sync 데이터를 읽기 때문입니다.

👉 [WROX Roblox Explorer 설치 가이드](roblox-explorer.md)

바로 설치:
- [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer)
- [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)

---

## 설치 완료 후

1. **Roblox Studio**를 열고, Plugins 탭에서 **WROX** → **Connect** 클릭
2. **AI 앱**에서 다음과 같이 테스트해보세요:

```
Roblox Studio에 파란 파트 만들어줘
```

정상적으로 파트가 생성되면 설치가 완료된 것입니다!
