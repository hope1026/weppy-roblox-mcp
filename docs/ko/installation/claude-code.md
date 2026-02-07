# Claude Code 설정

[Claude Code](https://claude.ai/code) (터미널 기반 AI 코딩 도구)에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- **Claude Code** 설치됨
- **Roblox Studio 플러그인** 설치 완료

## 설치

```bash
npm install -g @anthropic-ai/claude-code
```

## MCP 서버 등록

### 방법 1: 마켓플레이스에서 설치 (권장)

Claude Code 터미널에서 실행:

```bash
# 마켓플레이스 추가
/plugin marketplace add hope1026/roblox-mcp

# 플러그인 설치
/plugin install @weppy/roblox-mcp
```

설치 확인:
```bash
/plugin list
```

### 방법 2: 설정 파일 직접 편집

`.mcp.json` 파일 생성:

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
| 프로젝트 | `<프로젝트>/.mcp.json` |
| 글로벌 | `~/.claude/mcp.json` |

## 자동 서버 관리

Claude Code는 MCP 서버를 자동으로 관리합니다:

- 필요할 때 자동 시작
- 세션 종료 시 자동 정지
- 별도 설정 불필요

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **W-MCP** → **Connect**
2. **Claude Code**에서 테스트:
   ```
   Roblox Studio에 파란 파트 만들어줘
   ```

## 문제 해결

### 플러그인 설치 실패

```bash
# 캐시 정리 후 재시도
/plugin cache clear
/plugin install @weppy/roblox-mcp
```

### 서버가 시작되지 않음

1. Node.js 버전 확인 (18.0 이상 필요):
   ```bash
   node --version
   ```

2. 수동으로 서버 시작 테스트:
   ```bash
   npx -y @weppy/roblox-mcp
   ```

### MCP 도구가 보이지 않음

Claude Code에서 확인:
```
사용 가능한 MCP 도구 목록 보여줘
```

## 참고 자료

- [Claude Code 공식 문서](https://docs.anthropic.com/claude-code)
