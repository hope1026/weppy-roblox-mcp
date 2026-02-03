# 기타 MCP 클라이언트 설정

MCP(Model Context Protocol)를 지원하는 다른 AI 앱에서 Roblox MCP를 사용하는 방법입니다.

## 공통 설치

모든 MCP 클라이언트에서 먼저 MCP 서버를 설치해야 합니다:

```bash
npm install -g @weppy/roblox-mcp
```

## 지원 클라이언트 목록

| 클라이언트 | 설정 파일 | localhost 지원 |
|-----------|----------|:--------------:|
| Windsurf | `mcp.json` | ✅ |
| Continue | `config.json` | ✅ |
| Cline | `.cline/mcp.json` | ✅ |
| ChatGPT Desktop | Settings → Connectors | ❌ |

---

## Windsurf

### 설정 파일 위치

```
~/.windsurf/mcp.json
```

### 설정 내용

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

---

## Continue

### 설정 파일 위치

```
~/.continue/config.json
```

### 설정 내용

```json
{
  "mcpServers": [
    {
      "name": "roblox-mcp",
      "command": "npx",
      "args": ["@weppy/roblox-mcp"]
    }
  ]
}
```

---

## Cline

### 설정 파일 위치

프로젝트 폴더:
```
your-project/.cline/mcp.json
```

또는 전역:
```
~/.cline/mcp.json
```

### 설정 내용

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

---

## ChatGPT Desktop (제한적)

⚠️ **주의**: ChatGPT Desktop은 localhost 서버에 직접 연결할 수 없습니다. 원격 서버가 필요합니다.

### ngrok을 사용한 터널링

1. [ngrok](https://ngrok.com/) 설치 및 계정 생성

2. MCP 서버를 HTTP 모드로 실행:
   ```bash
   npx @weppy/roblox-mcp --http
   ```

3. ngrok으로 터널 생성:
   ```bash
   ngrok http 3002
   ```

4. ChatGPT Desktop에서 설정:
   - Settings → Connectors → Advanced → Developer Mode
   - ngrok URL 입력 (예: `https://abc123.ngrok.io`)

### 보안 주의사항

- ngrok 터널을 통해 외부에서 접근 가능해집니다
- 사용 후 반드시 터널 종료
- 민감한 Place에서는 사용 주의

---

## 일반적인 MCP 설정 형식

대부분의 MCP 클라이언트는 비슷한 JSON 형식을 사용합니다:

```json
{
  "mcpServers": {
    "서버-이름": {
      "command": "npx",
      "args": ["@weppy/roblox-mcp"],
      "env": {
        "환경변수": "값"
      }
    }
  }
}
```

### 필수 필드

| 필드 | 설명 |
|-----|------|
| `command` | 실행할 명령어 (예: `npx`) |
| `args` | 명령어 인자 (예: `["@weppy/roblox-mcp"]`) |

### 선택 필드

| 필드 | 설명 |
|-----|------|
| `env` | 환경 변수 (예: `MCP_PORT`) |
| `cwd` | 작업 디렉토리 |

## 문제 해결

### 모든 클라이언트 공통

1. **서버를 찾을 수 없음**: npx 사용
   ```json
   {
     "command": "npx",
     "args": ["@weppy/roblox-mcp"]
   }
   ```

2. **연결 실패**: 방화벽에서 포트 3002 허용

3. **JSON 오류**: [JSONLint](https://jsonlint.com/)에서 문법 확인

## 다음 단계

설정이 완료되면 [예시 프롬프트](../README.md#예시-프롬프트)를 참고하여 게임 개발을 시작하세요!
