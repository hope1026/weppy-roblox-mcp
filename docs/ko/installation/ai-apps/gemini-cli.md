# Gemini CLI 설정

[Google Gemini CLI](https://github.com/google-gemini/gemini-cli)에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

1. **Node.js** (v18.0.0 이상)
   ```bash
   node --version
   ```

2. **Gemini CLI** 설치됨
   ```bash
   npm install -g @google/gemini-cli
   ```

3. **Roblox Studio 플러그인** 설치 완료

## MCP 서버 등록

### 방법 1: CLI 명령어 (권장)

터미널에서 한 줄로 등록할 수 있습니다:

```bash
gemini mcp add weppy-roblox-mcp npx --trust -- -y @weppy/roblox-mcp
```

> `--trust` 플래그는 도구 호출 시 매번 확인 프롬프트를 건너뜁니다.

글로벌 설정으로 등록하려면 `-s user`를 추가하세요:

```bash
gemini mcp add weppy-roblox-mcp npx -s user --trust -- -y @weppy/roblox-mcp
```

### 방법 2: 설정 파일 편집

`.gemini/settings.json` 파일에 아래 내용을 추가하세요:

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

**설정 파일 위치:**
| 범위 | 경로 |
|------|------|
| 프로젝트 | `<프로젝트>/.gemini/settings.json` |
| 글로벌 | `~/.gemini/settings.json` |

### 방법 3: 환경 변수 사용

특정 환경 변수가 필요한 경우:

**CLI:**
```bash
gemini mcp add weppy-roblox-mcp npx --trust -e HTTP_PORT=3002 -- -y @weppy/roblox-mcp
```

**설정 파일:**
```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "npx",
      "args": ["-y", "@weppy/roblox-mcp"],
      "env": {
        "HTTP_PORT": "3002"
      }
    }
  }
}
```

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **W-MCP** → **Connect**
2. **Gemini CLI** 실행 후 다음을 입력:
   ```
   Roblox Studio에서 현재 선택된 것을 알려줘
   ```

## MCP 서버 상태 확인

Gemini CLI 내에서 `/mcp` 명령으로 연결된 서버 상태를 확인할 수 있습니다:

```
/mcp
```

## 문제 해결

### 서버가 시작되지 않을 때

MCP 서버를 직접 실행하여 오류를 확인하세요:
```bash
npx -y @weppy/roblox-mcp
```

### 연결 실패

- Roblox Studio 플러그인이 **Connected** 상태인지 확인
- 포트 3002가 방화벽에 의해 차단되지 않았는지 확인
- `/mcp` 명령으로 서버 상태 확인

### 도구 충돌

여러 MCP 서버에서 같은 이름의 도구가 있으면 `serverAlias__toolName` 형식으로 프리픽스가 붙습니다.

## 참고 자료

- [Gemini CLI MCP 공식 문서](https://geminicli.com/docs/tools/mcp-server/)
- [Gemini CLI 설정 가이드](https://geminicli.com/docs/get-started/configuration/)
