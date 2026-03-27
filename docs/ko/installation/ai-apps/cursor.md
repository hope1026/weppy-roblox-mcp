# Cursor 설정

[Cursor](https://cursor.com/)에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- **Cursor** 설치됨
- **Node.js** (v18.0.0 이상)
- **Roblox Studio 플러그인** 설치 완료

## MCP 서버 등록

### 방법 1: 프로젝트 설정

프로젝트의 `.cursor/mcp.json` 파일에 아래 내용을 추가하세요:

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

### 방법 2: 글로벌 설정

전역 Cursor MCP 설정 파일에 같은 내용을 추가하세요.

**설정 파일 위치:**

| 범위 | 경로 |
|------|------|
| 프로젝트 | `<프로젝트>/.cursor/mcp.json` |
| 글로벌 (macOS/Linux) | `~/.cursor/mcp.json` |
| 글로벌 (Windows) | `%USERPROFILE%\\.cursor\\mcp.json` |

> 파일이 이미 있으면 기존 `mcpServers` 객체 안에 `weppy-roblox-mcp` 항목만 병합하세요.

### 적용

설정을 수정한 뒤 Cursor 창을 다시 로드하거나 앱을 재시작하세요.

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **WROX** → **Connect**
2. **Cursor**에서 다음을 입력:
   ```
   Roblox Studio에서 현재 선택된 것을 알려줘
   ```

## 문제 해결

### MCP 서버가 보이지 않을 때

- 설정 파일 경로가 올바른지 확인
- JSON 문법이 유효한지 확인
- 설정 변경 후 Cursor를 다시 로드했는지 확인

### 서버가 시작되지 않을 때

MCP 서버를 직접 실행하여 오류를 확인하세요:

```bash
npx -y @weppy/roblox-mcp
```

### 연결 실패

- Roblox Studio 플러그인이 **Connected** 상태인지 확인
- 포트 3002가 방화벽에 의해 차단되지 않았는지 확인

## 참고 자료

- [Cursor MCP 문서](https://docs.cursor.com/context/model-context-protocol)
