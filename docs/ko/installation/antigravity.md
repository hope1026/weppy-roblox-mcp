# Antigravity 설정

[Google Antigravity](https://developers.googleblog.com/build-with-google-antigravity-our-new-agentic-development-platform/)에서 Roblox MCP를 사용하는 방법입니다.

> **Antigravity**는 Google의 에이전트 기반 개발 플랫폼으로, AI 에이전트가 코드 편집, 터미널, 브라우저를 넘나들며 복잡한 작업을 자율적으로 수행합니다.

## 사전 요구사항

1. **Antigravity** 설치됨 (macOS, Windows, Linux 지원)
2. **Roblox Studio 플러그인** 설치 완료

## MCP 서버 등록

### 방법 1: MCP Store에서 설치 (권장)

1. Antigravity 실행
2. **Settings** → **MCP** 이동
3. MCP Store에서 `weppy-roblox-mcp` 검색
4. **Install** 클릭

### 방법 2: 설정 파일 직접 편집

1. Antigravity에서 **⋯** 메뉴 → **MCP Servers** → **Manage MCP Servers** → **View raw config** 클릭

2. `mcp_config.json` 파일에 아래 내용을 추가:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"]
    }
  }
}
```

3. 저장 후 **Manage MCP Servers**에서 **Refresh** 클릭

**설정 파일 위치:**

| OS | 경로 |
|----|------|
| macOS/Linux | `~/.gemini/antigravity/mcp_config.json` |
| Windows | `%USERPROFILE%\.gemini\antigravity\mcp_config.json` |

### 방법 3: Agent에게 요청

Antigravity Agent에게 직접 요청할 수도 있습니다:

```
Roblox MCP (@weppy/roblox-mcp)를 MCP 서버로 추가해줘
```

## 중요: 절대 경로 사용

> **주의**: Antigravity는 `${workspaceFolder}` 변수를 지원하지 않습니다. 반드시 **절대 경로**를 사용하세요.

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "PROJECT_ROOT": "/Users/username/projects/my-roblox-game"
      }
    }
  }
}
```

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **W-MCP** → **Connect**
2. **Antigravity**에서 다음을 입력:
   ```
   Roblox Studio에서 현재 선택된 것을 알려줘
   ```

## Skills 활용

Antigravity의 **Skills** 시스템과 함께 사용하면 더 강력한 워크플로우를 구성할 수 있습니다:

- 프로젝트별 Roblox 개발 워크플로우 정의
- 자주 사용하는 작업을 Skill로 패키징
- 에이전트가 자동으로 작업을 계획, 실행, 검증

## 지원 모델

Antigravity에서 Roblox MCP를 사용할 때 다음 모델을 선택할 수 있습니다:

| 모델 | 특징 |
|------|------|
| **Gemini 3 Pro** | 기본 모델, 무료 사용 가능 |
| **Claude Sonnet 4.5** | Anthropic 모델 지원 |
| **GPT-OSS** | OpenAI 모델 지원 |

## 문제 해결

### 서버가 시작되지 않을 때

MCP 서버를 직접 실행하여 오류를 확인하세요:
```bash
npx -y @weppy/roblox-mcp
```

### 연결 실패

- Roblox Studio 플러그인이 **Connected** 상태인지 확인
- 포트 3002가 방화벽에 의해 차단되지 않았는지 확인
- Settings → MCP에서 서버 상태 확인

### 절대 경로 오류

`${workspaceFolder}` 사용 시 오류가 발생합니다. 절대 경로로 변경하세요:

```json
// ❌ 잘못됨
"args": ["--workspace", "${workspaceFolder}"]

// ✅ 올바름
"args": ["--workspace", "/absolute/path/to/project"]
```

## 참고 자료

- [Antigravity 시작 가이드](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Antigravity MCP 연동 가이드](https://composio.dev/blog/howto-mcp-antigravity)
- [Antigravity Skills 컬렉션](https://github.com/sickn33/antigravity-awesome-skills)
