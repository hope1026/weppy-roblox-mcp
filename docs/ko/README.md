# Roblox MCP — Roblox Studio MCP 서버 | Claude, Codex, Cursor, Gemini로 AI 게임 개발

> **WROX**는 AI 코딩 에이전트가 라이브 Roblox Studio 세션을 제어할 수 있게 하는 MCP 서버입니다 — 자연어로 스크립트, 인스턴스, 지형, 조명, 에셋, 오디오, 애니메이션을 생성하고 편집합니다.

**액션 기반 통합 도구 · 양방향 Sync · 자동 플레이테스트 · 멀티 Place 지원**

[English](../../README.md) | **한국어** | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

[![데모 — AI가 실시간으로 Roblox 게임을 제작하는 모습](https://img.youtube.com/vi/puQB4u1VlMw/maxresdefault.jpg)](https://youtu.be/puQB4u1VlMw)

## WROX (Weppy Roblox MCP)를 쓰는 이유

Claude, Codex, Gemini 같은 AI 코딩 에이전트는 강력하지만 — Roblox Studio 내부는 볼 수도, 수정할 수도 없습니다. DataModel, 스크립트, 지형, 조명 전부 외부 도구에는 보이지 않습니다. 브릿지 없이는 AI가 코드 조각을 생성해도 직접 붙여넣어야 합니다.

**WROX**는 AI 에이전트와 Roblox Studio를 연결하는 브릿지입니다. AI가 Studio 안에서 인스턴스, 스크립트, 속성, 지형 등을 직접 생성하고 수정하면, 변경 내용이 Studio와 대시보드에 즉시 반영되어 **무엇이 바뀌었는지 한눈에 확인**할 수 있습니다.

코드를 복사해서 붙여넣을 필요 없이, AI가 작업하고 내가 결과를 확인하는 방식입니다.

## 빠른 설치

웹페이지에서 안내에 따라 설치할 수 있습니다.

👉 **[설치 페이지](https://weppy-web.pages.dev/ko/install)**

### 터미널 원라인 설치

터미널이 익숙하다면 아래 한 줄로 MCP 서버와 플러그인을 한 번에 설치할 수 있습니다.

**macOS / Linux**

```bash
curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash
```

**Windows (PowerShell)**

```powershell
irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex
```

AI 앱을 다시 열고 Roblox Studio를 재시작하세요.

자동 MCP 등록은 **Claude Code, Claude Desktop, Cursor, Codex CLI/App, Gemini CLI, Antigravity**를 지원합니다.

### 수동 설치

원라인 설치가 동작하지 않거나 환경상 자동 설치를 사용할 수 없는 경우:

**1단계** — Roblox Studio 플러그인 설치:
[플러그인 설치 가이드](https://weppy-web.pages.dev/ko/install#plugin)

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
| Antigravity | [설정](installation/ai-apps/antigravity.md) |

> MCP를 지원하는 모든 AI 앱에서 사용 가능합니다. 서버 명령어: `npx -y @weppy/roblox-mcp`

## 호환성

| Claude Code | Claude Desktop | Cursor | Codex CLI | Gemini CLI | Antigravity |
|:-----------:|:--------------:|:------:|:---------:|:----------:|:-----------:|
| ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

**요구 사항:** Node.js 18+, Roblox Studio, Windows 10+ 또는 macOS 12+

## 핵심 기능

### 1) MCP Tool: 말로 지시하면 Studio에서 바로 실행

스크립트, 인스턴스, 속성, 지형, 조명, 에셋, 오디오, 애니메이션까지 AI가 Studio에서 직접 처리합니다.

- "플레이어 점프 시 파티클 + 사운드 + 쿨타임까지 한 번에 넣어줘."
- "맵 중앙에 보스 아레나 만들고, 스폰 포인트도 충돌 없이 배치해줘."
- "이 모듈 인터페이스 바꾸고 참조하는 스크립트 전부 함께 수정해줘."

### 2) Sync: AI가 프로젝트 전체 문맥을 읽고 유지

AI가 로컬 동기화된 프로젝트를 기준으로 전체 구조를 이해해, 여러 파일에 걸친 변경을 일관되게 수행합니다.

- Basic: Studio -> Local 단방향 동기화
- Pro: 양방향 동기화 + 타입별 Direction/Apply Mode + 변경 기록 + 멀티 Place

![Sync 워크플로우 — Studio와 로컬 파일이 실시간으로 동기화되는 모습](../assets/screenshots/plugin/sync/sync-overview.png)

### 3) Playtest: AI가 테스트를 자동으로 실행하고 검증

Studio 플레이테스트를 AI가 직접 제어합니다. F5(Play)/F8(Run) 시작/중지는 물론, 테스트 스크립트를 주입하고 로그를 수집해 리포트까지 자동 생성합니다.

- "Run 모드로 플레이테스트 시작하고, NPC가 목표 지점까지 이동하는지 확인해줘."
- "SpawnLocation이 지면 위에 있는지 테스트 스크립트를 작성해서 자동 실행해줘."
- "방금 수정한 스크립트가 에러 없이 동작하는지 플레이테스트로 검증해줘."

![WROX 플레이테스트 대시보드 — 테스트 기록 및 상세 리포트](../assets/screenshots/dashboard/dashboard_playtest.png)

### 4) WROX Dashboard: AI 작업을 실시간으로 모니터링

MCP 서버가 제공하는 웹 대시보드에서 연결 상태, 도구 실행 기록, 동기화 상태, 게임 변경 이력을 실시간으로 확인합니다.

- 서버/플러그인/에이전트 연결 상태 한눈에 확인
- AI가 변경한 모든 내용을 Changelog에서 Before & After로 비교
- 도구 실행 기록과 통계로 작업 흐름 분석

![대시보드 Overview — 서버 상태, 최근 변경 사항, 세션 요약](../assets/screenshots/dashboard/dashboard_overview.png)

### 5) WROX Roblox Explorer: VSCode에서 Studio 계층 구조 탐색

Roblox Studio의 전체 인스턴스 트리를 VSCode 안에서 바로 확인할 수 있습니다. 서비스를 탐색하고, 동기화된 스크립트와 속성 파일을 열고, 동기화 상태를 추적하세요 — Studio로 전환할 필요 없이.
WROX Roblox Explorer는 WROX가 생성한 sync 데이터를 위한 companion VSCode 확장입니다. 기본 트리 탐색은 동기화된 파일만으로 동작하고, 로컬 MCP 서버가 실행 중이면 실시간 sync 상태와 direction 표시가 더 정확하게 반영됩니다.
설치는 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=weppy.weppy-roblox-explorer) 또는 [Open VSX](https://open-vsx.org/extension/weppy/weppy-roblox-explorer)에서 할 수 있습니다.

- Studio와 동일한 클래스 아이콘으로 직관적 구분
- 클릭으로 동기화된 스크립트와 속성 파일 열기
- 동기화 상태 표시를 포함한 멀티 Place 지원

![WROX Roblox Explorer — VSCode 사이드바에 표시되는 Studio 인스턴스 트리](../assets/screenshots/roblox-explorer/roblox-explorer-screen.png)

## 유저가 바로 체감하는 장점

- 반복 작업 압축: 수십 번 클릭/수정을 자연어 한 번으로 처리
- 연관 변경 자동화: 한 파일 수정이 아니라 의존 파일까지 함께 반영
- 리스크 감소: 변경 이력과 동기화 상태를 기준으로 안전하게 수정
- 토큰 효율 개선(Pro): 대량 action과 batch 실행으로 왕복 요청 감소

## 활용 사례

- **빠른 프로토타이핑**: 자연어로 게임 메카닉을 설명하면 AI가 Studio에서 바로 구현
- **대량 리팩터링**: 모듈 인터페이스를 변경하고 의존 스크립트를 한 번에 업데이트
- **지형 & 환경**: 절차적 지형 생성, 조명/분위기 설정, 에셋 배치를 단일 프롬프트로
- **멀티 파일 일관성**: AI가 Sync를 통해 전체 프로젝트를 읽고 관련 스크립트를 함께 수정
- **에셋 통합**: Creator Store 검색, 모델 삽입, 속성 설정을 에디터를 벗어나지 않고 수행

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

## FAQ

### Claude Code를 Roblox Studio에 어떻게 연결하나요?
Roblox Studio 플러그인을 설치한 뒤, Claude Code에 MCP 서버(`npx -y @weppy/roblox-mcp`)를 등록하세요. Claude가 Studio 안의 스크립트를 직접 읽고 쓸 수 있습니다. [Claude Code 설정](installation/ai-apps/claude-code.md)을 참고하세요.

### Codex CLI로 Roblox Studio를 사용하려면?
플러그인을 설치하고 Codex CLI에 MCP 서버 설정을 추가하세요. [Codex CLI 설정](installation/ai-apps/codex-cli.md)을 참고하세요.

### Roblox MCP가 Cursor에서도 동작하나요?
네. [Cursor 설정](installation/ai-apps/cursor.md)을 참고하세요. MCP를 지원하는 모든 AI 클라이언트에서 동작합니다.

### AI로 Roblox 게임을 만들 수 있나요?
네. AI가 인스턴스 생성, 스크립트 작성, 지형 생성, 조명 설정, 에셋 삽입, 물리 설정 등을 라이브 Studio 세션 안에서 직접 수행합니다. 코드 생성을 넘어 실행 가능한 작업까지 처리합니다.

### Basic과 Pro의 차이는?
Basic(무료)은 MCP 도구 실행과 단방향 동기화(Studio -> Local)를 포함합니다. Pro는 양방향 동기화, 대량 작업, 지형 생성, 공간 분석, 오디오/애니메이션 제어, 멀티 Place 지원을 추가합니다. [Pro 업그레이드 가이드](https://weppy-web.pages.dev/ko/plans)를 참고하세요.

### Weppy는 다른 Roblox MCP 서버와 어떻게 다른가요?
Weppy는 기능별 도구 분리 대신 액션 기반 디스패칭을 사용합니다. 이로 인해 AI 토큰 소비가 크게 줄어듭니다. 또한 양방향 프로젝트 동기화와 멀티 Place 지원을 제공하는데, 대부분의 대안에는 없는 기능입니다.

### 안전한가요? AI가 게임을 망가뜨릴 수 있나요?
서버는 localhost(127.0.0.1:3002)에서만 실행됩니다. 금지 경로(CoreGui, CorePackages)는 차단됩니다. 속도 제한(450 req/min)과 30초 타임아웃이 폭주 작업을 방지합니다. 모든 변경 사항은 동기화 기록으로 추적할 수 있습니다.

## Pro로 업그레이드

양방향 Sync, 고급 제작 기능, AI 토큰 효율 — 한 번의 업그레이드로 모두 누리세요.

[Pro 업그레이드 가이드](https://weppy-web.pages.dev/ko/plans)

## 라이선스

이 저장소는 `AGPL-3.0` 라이선스를 따릅니다.

상업용 라이선스는 별도로 제공됩니다. [COMMERCIAL-LICENSE.md](../../COMMERCIAL-LICENSE.md)를 참고하세요.

Weppy 이름 및 로고 사용은 [TRADEMARKS.md](../../TRADEMARKS.md)에 따릅니다.

---

[![npm version](https://img.shields.io/npm/v/@weppy/roblox-mcp)](https://www.npmjs.com/package/@weppy/roblox-mcp) [![Node.js](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/) [![Smithery](https://smithery.ai/badge/@hope1026/weppy-roblox-mcp)](https://smithery.ai/server/@hope1026/weppy-roblox-mcp)

[![Roblox MCP on Glama](https://glama.ai/mcp/servers/hope1026/roblox-mcp/badges/card.svg)](https://glama.ai/mcp/servers/hope1026/roblox-mcp)

[GitHub 이슈](https://github.com/hope1026/weppy-roblox-mcp/issues) · [Discussions](https://github.com/hope1026/weppy-roblox-mcp/discussions) · [npm](https://www.npmjs.com/package/@weppy/roblox-mcp)
