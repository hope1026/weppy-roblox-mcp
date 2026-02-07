# Codex App 설정

[OpenAI Codex App](https://openai.com/codex/) (macOS)에서 Roblox MCP를 사용하는 방법입니다.

> **2026년 2월 2일 출시** - 멀티 에이전트 워크플로우를 지원하는 네이티브 macOS 앱

## 사전 요구사항

- **Codex App** 설치됨 (macOS)
- **Roblox Studio 플러그인** 설치 완료

## MCP 서버 등록

### Codex CLI 설정 자동 동기화

Codex CLI에서 이미 MCP를 설정했다면 **추가 설정 없이** 앱에서 바로 사용 가능합니다.

```
CLI 세션 히스토리와 설정이 자동으로 앱에 동기화됩니다.
```

### 새로 설정하는 경우

앱 내 **Settings** → **MCP Servers**에서 추가:

```
Server name: weppy-roblox-mcp
Command: npx -y @weppy/roblox-mcp
```

## 연결 테스트

1. **Roblox Studio** 실행 → Plugins 탭 → **W-MCP** → **Connect**
2. **Codex App**에서 새 대화 시작 후 테스트:
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

- [Codex App 소개](https://openai.com/index/introducing-the-codex-app/)
- [Codex MCP 공식 문서](https://developers.openai.com/codex/mcp/)
