# Claude Code 설정

Claude Code(터미널 기반 AI 코딩 도구)에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- [Claude Code](https://claude.ai/code) 설치됨
- [Roblox Studio 플러그인](plugin.md) 설치됨

## 1단계: 마켓플레이스에서 설치

Claude Code 터미널에서 실행:

```bash
# 마켓플레이스 추가
/plugin marketplace add hope1026/roblox-mcp

# 플러그인 설치
/plugin install weppy-roblox-mcp
```

## 2단계: 설치 확인

```bash
/plugin list
```

`weppy-roblox-mcp`가 목록에 있으면 설치 완료입니다.

## 3단계: 연결 확인

1. Roblox Studio 실행
2. Studio 플러그인에서 **Connect** 클릭
3. Claude Code에서 테스트:
   ```
   Roblox Studio에 파란 파트 만들어줘
   ```

## 자동 서버 관리

Claude Code는 MCP 서버를 자동으로 관리합니다:

- 필요할 때 자동 시작
- 세션 종료 시 자동 정지
- 별도 설정 불필요

## 수동 설치 (대안)

마켓플레이스를 사용하지 않는 경우:

### 1. npm으로 설치

```bash
npm install -g @weppy/roblox-mcp
```

### 2. MCP 설정 파일 생성

프로젝트 루트에 `.mcp.json` 파일 생성:

```json
{
  "mcpServers": {
    "roblox-mcp": {
      "command": "npx",
      "args": ["@weppy/roblox-mcp"]
    }
  }
}
```

### 3. Claude Code 재시작

```bash
# Claude Code 종료 후 다시 시작
claude
```

## 문제 해결

### 플러그인 설치 실패

```bash
# 캐시 정리 후 재시도
/plugin cache clear
/plugin install weppy-roblox-mcp
```

### 서버가 시작되지 않음

1. Node.js 버전 확인 (18.0 이상 필요):
   ```bash
   node --version
   ```

2. 수동으로 서버 시작 테스트:
   ```bash
   npx @weppy/roblox-mcp
   ```

### MCP 도구가 보이지 않음

Claude Code에서 확인:
```
사용 가능한 MCP 도구 목록 보여줘
```

## 다음 단계

설정이 완료되면 [예시 프롬프트](../README.md#예시-프롬프트)를 참고하여 게임 개발을 시작하세요!
