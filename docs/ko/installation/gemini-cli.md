# Gemini CLI 설정

Google Gemini CLI에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- [Gemini CLI](https://github.com/google-gemini/gemini-cli) 설치됨
- [Node.js](https://nodejs.org/) 18.0 이상 설치됨
- [Roblox Studio 플러그인](plugin.md) 설치됨

## 1단계: MCP 서버 설치

```bash
npm install -g @weppy/roblox-mcp
```

## 2단계: Gemini 설정 파일 편집

### 설정 파일 위치

```
~/.gemini/settings.json
```

### 설정 추가

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

### 기존 설정이 있는 경우

`mcpServers` 섹션에 추가:

```json
{
  "theme": "dark",
  "mcpServers": {
    "기존-서버": { ... },
    "roblox-mcp": {
      "command": "npx",
      "args": ["@weppy/roblox-mcp"]
    }
  }
}
```

## 3단계: Gemini CLI 재시작

```bash
# Gemini CLI 종료 후 다시 시작
gemini
```

## 4단계: 연결 테스트

1. Roblox Studio에서 플러그인 연결
2. Gemini CLI에서 테스트:
   ```
   @roblox-mcp Roblox Studio에 보라색 파트 만들어줘
   ```

## MCP 서버 호출 방법

Gemini CLI에서 MCP 서버의 도구를 호출할 때 `@서버이름` 형식을 사용할 수 있습니다:

```
@roblox-mcp 파트 5개 만들어줘
```

또는 자연어로 요청하면 Gemini가 자동으로 적절한 MCP 도구를 선택합니다:

```
Roblox Studio에서 빨간 벽돌 만들어줘
```

## 문제 해결

### 서버를 찾을 수 없음

전체 경로 사용:

```json
{
  "mcpServers": {
    "roblox-mcp": {
      "command": "/usr/local/bin/npx",
      "args": ["@weppy/roblox-mcp"]
    }
  }
}
```

### Windows에서 경로 문제

npx.cmd 사용:

```json
{
  "mcpServers": {
    "roblox-mcp": {
      "command": "npx.cmd",
      "args": ["@weppy/roblox-mcp"]
    }
  }
}
```

### 설정이 적용되지 않음

1. JSON 문법 확인
2. 설정 파일 위치 확인: `~/.gemini/settings.json`
3. Gemini CLI 완전히 재시작

## 리치 콘텐츠 지원

Gemini CLI의 MCP는 텍스트뿐만 아니라 이미지, 오디오 등 다양한 콘텐츠를 지원합니다. 예를 들어:

```
Workspace 스크린샷 찍어줘
```

## Google Cloud MCP 서버

Google Cloud의 관리형 MCP 서버와 함께 사용할 수도 있습니다. 이 경우 BigQuery, GCE, GKE 등과 연동이 가능합니다.

## 다음 단계

설정이 완료되면 [예시 프롬프트](../README.md#예시-프롬프트)를 참고하여 게임 개발을 시작하세요!
