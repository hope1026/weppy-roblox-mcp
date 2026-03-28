# Roblox MCP — Roblox Studio MCP 서버 | Claude, Codex, Cursor, Gemini로 AI 게임 개발

> **weppy-roblox-mcp (WROX)**는 AI 코딩 에이전트가 라이브 Roblox Studio 세션을 제어할 수 있게 하는 MCP 서버입니다 — 자연어로 스크립트, 인스턴스, 지형, 조명, 에셋, 오디오, 애니메이션을 생성하고 편집합니다.

**21개 통합 도구 · 140+ 액션 · 양방향 Sync · 자동 플레이테스트 · 멀티 Place 지원**

[English](../../README.md) | **한국어** | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![데모 — AI가 실시간으로 Roblox 게임을 제작하는 모습](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## 빠른 설치

**원라인 설치** — MCP 서버, Roblox Studio 플러그인, AI 앱 등록을 한 번에 진행합니다:

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

Roblox Studio를 재시작하면 완료입니다!

자동 MCP 등록은 현재 **Claude Code, Claude Desktop, Cursor, Codex CLI, Gemini CLI**만 지원합니다.
**Codex App**과 **Antigravity**는 스크립트 완료 후 수동 설정이 필요합니다.

Windows에서 PowerShell 실행이 차단되면 아래 수동 설치로 진행하세요. ZIP 패키지를 사용하는 경우 `setup-plugin.bat`, `setup-mcp.bat`도 사용할 수 있습니다.

### 수동 설치

원라인 설치가 동작하지 않거나 환경상 자동 설치를 사용할 수 없는 경우, 아래 수동 설치를 대안으로 진행하세요.

**1단계** — Roblox Studio 플러그인 설치 (Studio와 AI를 연결하는 다리):
[플러그인 설치 가이드](installation/roblox-plugin.md)

**2단계** — AI 앱에 MCP 서버 등록:

```bash
npx -y @weppy/roblox-mcp
```

| AI 앱 | 가이드 |
|-------|--------|
| Claude Code | [설정](installation/ai-apps/claude-code.md) |
| Claude Desktop | [설정](installation/ai-apps/claude-app.md) |
| Cursor | [설정](installation/ai-apps/cursor.md) |
| Codex CLI | [설정](installation/ai-apps/codex-cli.md) |
| Codex Desktop | [설정](installation/ai-apps/codex-app.md) |
| Gemini CLI | [설정](installation/ai-apps/gemini-cli.md) |

> MCP를 지원하는 모든 AI 앱에서 사용 가능합니다. 서버 명령어: `npx -y @weppy/roblox-mcp`

## 호환성

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI |
|:-----------:|:--------------:|:------:|:---------:|:----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ |

**요구 사항:** Node.js 18+, Roblox Studio, Windows 10+ 또는 macOS 12+

## 핵심 기능

### 1) MCP Tool: 말로 지시하면 Studio에서 바로 실행

스크립트, 인스턴스, 속성, 지형, 조명, 에셋, 오디오, 애니메이션까지 AI가 Studio에서 직접 처리합니다.

- "플레이어 점프 시 파티클 + 사운드 + 쿨타임까지 한 번에 넣어줘."
- "맵 중앙에 보스 아레나 만들고, 스폰 포인트도 충돌 없이 배치해줘."
- "이 모듈 인터페이스 바꾸고 참조하는 스크립트 전부 함께 수정해줘."

단순 코드 생성이 아니라, **실행 가능한 작업 단위**로 처리된다는 점이 핵심입니다.

### 2) Sync: AI가 프로젝트 전체 문맥을 읽고 유지

AI가 로컬 동기화된 프로젝트를 기준으로 전체 구조를 이해해, 여러 파일에 걸친 변경을 일관되게 수행합니다.

![Sync 워크플로우 — Studio와 로컬 파일이 실시간으로 동기화되는 모습](../assets/screenshots/plugin/sync/sync-overview.png)

- Basic: Studio -> Local 단방향 동기화
- Pro: 양방향 동기화 + 타입별 Direction/Apply Mode + 변경 기록 + 멀티 Place

### 3) Playtest: AI가 테스트를 자동으로 실행하고 검증

Studio 플레이테스트를 AI가 직접 제어합니다. F5(Play)/F8(Run) 시작/중지는 물론, 테스트 스크립트를 주입하고 로그를 수집해 리포트까지 자동 생성합니다.

- "Run 모드로 플레이테스트 시작하고, NPC가 목표 지점까지 이동하는지 확인해줘."
- "SpawnLocation이 지면 위에 있는지 테스트 스크립트를 작성해서 자동 실행해줘."
- "방금 수정한 스크립트가 에러 없이 동작하는지 플레이테스트로 검증해줘."

![WROX 플레이테스트 대시보드 — 테스트 기록 및 상세 리포트](../assets/screenshots/dashboard/dashboard_playtest.png)

### 4) WROX Dashboard: AI 작업을 실시간으로 모니터링

MCP 서버가 제공하는 웹 대시보드에서 연결 상태, 도구 실행 기록, 동기화 상태, 게임 변경 이력을 실시간으로 확인합니다.

![대시보드 Overview — 서버 상태, 최근 변경 사항, 세션 요약](../assets/screenshots/dashboard/dashboard_overview.png)

- 서버/플러그인/에이전트 연결 상태 한눈에 확인
- AI가 변경한 모든 내용을 Changelog에서 Before & After로 비교
- 도구 실행 기록과 통계로 작업 흐름 분석

### 5) WROX Roblox Explorer: VSCode에서 Studio 계층 구조 탐색

Roblox Studio의 전체 인스턴스 트리를 VSCode 안에서 바로 확인할 수 있습니다. 서비스를 탐색하고, 동기화된 스크립트와 속성 파일을 열고, 동기화 상태를 추적하세요 — Studio로 전환할 필요 없이.
WROX Roblox Explorer는 WROX가 생성한 sync 데이터를 위한 companion VSCode 확장입니다. 기본 트리 탐색은 동기화된 파일만으로 동작하고, 로컬 MCP 서버가 실행 중이면 실시간 sync 상태와 direction 표시가 더 정확하게 반영됩니다.
설치는 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) 또는 [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)에서 할 수 있습니다.

![WROX Roblox Explorer — VSCode 사이드바에 표시되는 Studio 인스턴스 트리](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

- Studio와 동일한 클래스 아이콘으로 직관적 구분
- 클릭으로 동기화된 스크립트와 속성 파일 열기
- 동기화 상태 표시를 포함한 멀티 Place 지원

## 유저가 바로 체감하는 장점

- 반복 작업 압축: 수십 번 클릭/수정을 자연어 한 번으로 처리
- 연관 변경 자동화: 한 파일 수정이 아니라 의존 파일까지 함께 반영
- 리스크 감소: 변경 이력과 동기화 상태를 기준으로 안전하게 수정
- 토큰 효율 개선(Pro): 대량 action과 batch 실행으로 왕복 요청 감소

## 세부 문서

- [설치 가이드](installation/README.md)
- [Tool 전체 목록](tools/overview.md)
- [Sync 기능 상세 가이드](sync/overview.md)
- [WROX Dashboard 가이드](dashboard/overview.md)
- [WROX Roblox Explorer (VSCode 확장)](installation/roblox-explorer.md)
- [호환성](../compatibility.md)
- [문제 해결 가이드](../troubleshooting.md)

### 기능별 도구 가이드

- [인스턴스 & 속성](tools/instances-and-properties.md) — 검색, 생성, 수정, 태그
- [스크립트 & 코드 실행](tools/scripting.md) — 스크립트 관리, Luau 실행
- [월드 환경](tools/world-and-environment.md) — 조명, 지형, 카메라
- [에셋 & 오브젝트 연출](tools/assets-and-effects.md) — 모델 삽입, 트윈, 이펙트
- [플레이테스트 & 자동 테스트](tools/playtest.md) — 플레이테스트 제어, 자동 검증
- [시스템 & 디버깅](tools/system-and-debugging.md) — 연결, 로그, 배치 실행

## Pro로 업그레이드

양방향 Sync, 고급 제작 기능, AI 토큰 효율 — 한 번의 업그레이드로 모두 누리세요.

[Pro 업그레이드 가이드](pro-upgrade.md)

---

[GitHub 이슈](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
