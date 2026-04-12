# Codex CLI 설정

[OpenAI Codex CLI](https://github.com/openai/codex) (터미널 기반 AI 코딩 도구)에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- **Node.js** (v18.0.0 이상)
- **Roblox Studio 플러그인** 설치 완료

## 설치

```bash
npm install -g @openai/codex
```

## MCP 서버 등록

### 방법 1: CLI 명령어 (권장)

```bash
codex mcp add weppy-roblox-mcp -- npx -y @weppy/roblox-mcp
```

### 방법 2: 설정 파일 직접 편집

`~/.codex/config.toml` 파일에 아래 내용을 추가하세요:

```toml
[mcp_servers.weppy-roblox-mcp]
command = "npx"
args = ["-y", "@weppy/roblox-mcp"]
```

**설정 파일 위치:**

| OS | 경로 |
|----|------|
| macOS/Linux | `~/.codex/config.toml` |
| Windows | `%USERPROFILE%\.codex\config.toml` |

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **WEPPY** → **Connect**
2. **Codex CLI** 실행 후 다음을 입력:
   ```
   Roblox Studio에서 현재 선택된 것을 알려줘
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

## 참고 자료

- [Codex CLI GitHub](https://github.com/openai/codex)
- [Codex MCP 공식 문서](https://developers.openai.com/codex/mcp/)
- [Codex 설정 레퍼런스](https://developers.openai.com/codex/config-reference/)
