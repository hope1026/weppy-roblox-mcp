# Claude Desktop App 설정

[Claude Desktop App](https://claude.ai/download)에서 Roblox MCP를 사용하는 방법입니다.

## 사전 요구사항

- **Claude Desktop App** 설치됨
- **Roblox Studio 플러그인** 설치 완료

## MCP 서버 등록

### 방법 1: Desktop Extensions (권장)

> 2026년부터 브라우저 확장처럼 원클릭 설치 가능

1. Claude Desktop → **Settings** → **Extensions**
2. `weppy-roblox-mcp` 검색
3. **Install** 클릭

### 방법 2: 설정 파일 직접 편집

1. Claude Desktop → **Settings** → **Developers** → **Edit Config** 클릭

2. [GitHub Releases](https://github.com/hope1026/roblox-mcp/releases/latest)에서 플랫폼에 맞는 MCP 서버 바이너리를 다운로드

3. `claude_desktop_config.json` 파일에 아래 내용 추가:

```json
{
  "mcpServers": {
    "weppy-roblox-mcp": {
      "command": "<path-to>/weppy-roblox-mcp-<os>-<arch>"
    }
  }
}
```

> `<path-to>`를 바이너리를 다운로드한 실제 디렉토리 경로로 교체하세요.
> `<os>`: `darwin`, `linux`, `windows` / `<arch>`: `amd64`, `arm64`
> Windows에서는 파일명이 `.exe`로 끝남 (예: `weppy-roblox-mcp-windows-amd64.exe`)

4. Claude Desktop **완전히 종료** 후 재시작

**설정 파일 위치:**

| OS | 경로 |
|----|------|
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **W-MCP** → **Connect**
2. **Claude Desktop**에서 새 대화 시작 후 테스트:
   ```
   Roblox Studio에 파란 파트 만들어줘
   ```

## 문제 해결

### MCP 서버가 로드되지 않음

1. **JSON 문법 확인**: 온라인 JSON validator로 설정 파일 검증
2. **Claude Desktop 완전 재시작**: 설정 변경 후 반드시 앱 완전 종료 후 재시작
3. **경로 확인**: command와 args가 올바른지 확인

### 서버가 시작되지 않을 때

MCP 서버 바이너리를 직접 실행하여 오류를 확인하세요:
```bash
./weppy-roblox-mcp-<os>-<arch>
```

### 연결 실패

- Roblox Studio 플러그인이 **Connected** 상태인지 확인
- 포트 3002가 방화벽에 의해 차단되지 않았는지 확인

## 참고 자료

- [Claude Desktop MCP 공식 가이드](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [MCP 서버 연결 가이드](https://modelcontextprotocol.io/docs/develop/connect-local-servers)
