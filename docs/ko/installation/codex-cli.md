# Codex CLI 설정

OpenAI Codex CLI에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- [Codex CLI](https://github.com/openai/codex-cli) 설치됨
- [Node.js](https://nodejs.org/) 18.0 이상 설치됨
- [Roblox Studio 플러그인](plugin.md) 설치됨

## 1단계: MCP 서버 설치

```bash
npm install -g @weppy/roblox-mcp
```

## 2단계: Codex 설정 파일 편집

Codex는 TOML 형식의 설정 파일을 사용합니다.

### 설정 파일 위치

```
~/.codex/config.toml
```

### 설정 추가

`config.toml` 파일에 다음 내용 추가:

```toml
[mcp_servers.roblox-mcp]
command = "npx"
args = ["@weppy/roblox-mcp"]
```

### 전체 설정 예시

```toml
# Codex CLI 설정
model = "gpt-5.2-codex"

# MCP 서버 설정
[mcp_servers.roblox-mcp]
command = "npx"
args = ["@weppy/roblox-mcp"]
env = { MCP_PORT = "3002" }
```

## 3단계: 설정 확인

터미널에서 Codex 실행 후 MCP 확인:

```bash
codex
```

Codex TUI에서:
```
/mcp
```

`roblox-mcp`가 목록에 있으면 성공입니다.

## 4단계: 연결 테스트

1. Roblox Studio에서 플러그인 연결
2. Codex에서 테스트:
   ```
   Roblox Studio에 노란 파트 만들어줘
   ```

## MCP 명령어

Codex CLI에서 사용 가능한 MCP 관련 명령어:

```bash
# MCP 도움말
codex mcp --help

# 활성 MCP 서버 확인
/mcp

# MCP 서버 상태 확인
/mcp status
```

## 문제 해결

### 서버를 찾을 수 없음

npx 전체 경로 사용:

```toml
[mcp_servers.roblox-mcp]
command = "/usr/local/bin/npx"
args = ["@weppy/roblox-mcp"]
```

### Windows에서 경로 문제

```toml
[mcp_servers.roblox-mcp]
command = "npx.cmd"
args = ["@weppy/roblox-mcp"]
```

### 설정이 적용되지 않음

1. TOML 문법 확인 (온라인 TOML 검증기 사용)
2. Codex 완전히 재시작
3. 설정 파일 경로 확인: `~/.codex/config.toml`

## Codex와 VSCode Extension 공유

Codex CLI와 VSCode Extension은 동일한 설정 파일을 공유합니다. 한 번 설정하면 둘 다 사용 가능합니다.

## 다음 단계

설정이 완료되면 [예시 프롬프트](../README.md#예시-프롬프트)를 참고하여 게임 개발을 시작하세요!
