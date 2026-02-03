# Cursor 설정

Cursor IDE에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- [Cursor](https://cursor.sh/) 설치됨
- [Node.js](https://nodejs.org/) 18.0 이상 설치됨
- [Roblox Studio 플러그인](plugin.md) 설치됨

## 1단계: MCP 서버 설치

터미널에서 실행:

```bash
npm install -g @weppy/roblox-mcp
```

## 2단계: Cursor MCP 설정

### 설정 파일 위치

프로젝트 폴더에 `.cursor/mcp.json` 파일 생성:

```
your-project/
└── .cursor/
    └── mcp.json
```

### 설정 파일 내용

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

### 전역 설정 (모든 프로젝트)

사용자 홈 디렉토리에 설정:

**Windows:**
```
%USERPROFILE%\.cursor\mcp.json
```

**macOS/Linux:**
```
~/.cursor/mcp.json
```

## 3단계: Cursor 재시작

1. Cursor 완전히 종료
2. 다시 실행
3. 프로젝트 열기

## 4단계: 연결 확인

1. Roblox Studio에서 플러그인 연결
2. Cursor에서 Composer 열기 (Cmd/Ctrl + I)
3. 테스트 요청:
   ```
   Roblox Studio에 녹색 파트 만들어줘
   ```

## MCP 상태 확인

Cursor 하단 상태바에서 MCP 연결 상태를 확인할 수 있습니다.

또는 Composer에서:
```
MCP 서버 상태 확인해줘
```

## 문제 해결

### "MCP 서버를 찾을 수 없습니다"

전체 경로 사용:

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

### Windows에서 작동하지 않음

Node.js 경로 직접 지정:

```json
{
  "mcpServers": {
    "roblox-mcp": {
      "command": "C:\\Program Files\\nodejs\\npx.cmd",
      "args": ["@weppy/roblox-mcp"]
    }
  }
}
```

### 설정이 적용되지 않음

1. `.cursor` 폴더가 프로젝트 루트에 있는지 확인
2. JSON 문법 오류 확인
3. Cursor 완전히 재시작 (백그라운드 프로세스도 종료)

## 다음 단계

설정이 완료되면 [예시 프롬프트](../README.md#예시-프롬프트)를 참고하여 게임 개발을 시작하세요!
