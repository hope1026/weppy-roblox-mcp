# Claude Desktop 설정

Claude Desktop 앱에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- [Claude Desktop](https://claude.ai/download) 설치됨
- [Node.js](https://nodejs.org/) 18.0 이상 설치됨
- [Roblox Studio 플러그인](plugin.md) 설치됨

## 1단계: MCP 서버 설치

터미널(명령 프롬프트)에서 실행:

```bash
npm install -g @weppy/roblox-mcp
```

설치 확인:
```bash
npx @weppy/roblox-mcp --version
```

## 2단계: Claude Desktop 설정

### 설정 파일 위치

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

**macOS:**
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

### 설정 파일 편집

파일이 없으면 새로 생성하고, 다음 내용을 추가하세요:

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

`mcpServers` 안에 `roblox-mcp` 항목만 추가:

```json
{
  "mcpServers": {
    "기존-서버": { ... },
    "roblox-mcp": {
      "command": "npx",
      "args": ["@weppy/roblox-mcp"]
    }
  }
}
```

## 3단계: Claude Desktop 재시작

1. Claude Desktop 완전히 종료
2. 다시 실행
3. 새 대화 시작

## 4단계: 연결 확인

1. Roblox Studio에서 플러그인 연결 (Connect)
2. Claude에게 테스트 요청:
   ```
   Roblox Studio에 빨간 파트 하나 만들어줘
   ```
3. Studio에 파트가 생성되면 성공!

## 문제 해결

### "MCP 서버를 찾을 수 없습니다"

1. npm 전역 설치 경로 확인:
   ```bash
   npm root -g
   ```
2. 해당 경로가 시스템 PATH에 있는지 확인
3. 또는 npx를 사용 (권장):
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

### Windows에서 경로 문제

npx 전체 경로 사용:
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

### 연결은 되는데 명령이 안 됨

1. Roblox Studio 플러그인이 "Connected" 상태인지 확인
2. Claude에게 다시 요청해보기
3. Studio Output 창에서 에러 확인

## 설정 예시 파일

전체 설정 예시:

```json
{
  "mcpServers": {
    "roblox-mcp": {
      "command": "npx",
      "args": ["@weppy/roblox-mcp"],
      "env": {
        "MCP_PORT": "3002"
      }
    }
  }
}
```

## 다음 단계

설정이 완료되면 [예시 프롬프트](../README.md#예시-프롬프트)를 참고하여 다양한 기능을 사용해보세요!
