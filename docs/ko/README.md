# Roblox MCP

[English](../../README.md) | **한국어** | [日本語](../ja/README.md) | [Español](../es/README.md) | [Português](../pt-br/README.md) | [Bahasa Indonesia](../id/README.md)

> AI에게 말하면, Roblox Studio에서 바로 실행됩니다.

[![Demo](https://img.youtube.com/vi/3jrUpBbZPaw/maxresdefault.jpg)](https://youtu.be/3jrUpBbZPaw)

## 핵심 기능

### 1) MCP Tool: 말로 지시하면 Studio에서 바로 실행

Roblox MCP의 첫 번째 축은 **MCP Tool 실행 능력**입니다.  
스크립트, 인스턴스, 속성, 지형, 조명, 에셋, 오디오, 애니메이션까지 AI가 Studio에서 직접 처리합니다.

- "플레이어 점프 시 파티클 + 사운드 + 쿨타임까지 한 번에 넣어줘."
- "맵 중앙에 보스 아레나 만들고, 스폰 포인트도 충돌 없이 배치해줘."
- "이 모듈 인터페이스 바꾸고 참조하는 스크립트 전부 함께 수정해줘."

단순 코드 생성이 아니라, **실행 가능한 작업 단위**로 처리된다는 점이 핵심입니다.

### 2) Sync: AI가 프로젝트 전체 문맥을 읽고 유지

두 번째 축은 **Project Sync**입니다.
AI가 로컬 동기화된 프로젝트를 기준으로 전체 구조를 이해해, 여러 파일에 걸친 변경을 일관되게 수행합니다.

![Sync 워크플로우 — Studio와 로컬 파일이 실시간으로 동기화되는 모습](../assets/screenshots/sync.png)

- Basic: Studio -> Local 단방향 동기화
- Pro: 양방향 동기화 + 타입별 Direction/Apply Mode + 변경 기록 + 멀티 Place

즉, "지금 어떤 파일이 실제 기준인지", "무엇이 언제 바뀌었는지"를 놓치지 않고 협업할 수 있습니다.

## 유저가 바로 체감하는 장점

- 반복 작업 압축: 수십 번 클릭/수정을 자연어 한 번으로 처리
- 연관 변경 자동화: 한 파일 수정이 아니라 의존 파일까지 함께 반영
- 리스크 감소: 변경 이력과 동기화 상태를 기준으로 안전하게 수정
- 토큰 효율 개선(Pro): 대량 action과 batch 실행으로 왕복 요청 감소

## 세부 문서

- [Tool 지원 범위 (Tools Overview)](tools/overview.md)
- [Sync 기능 상세 가이드](sync/overview.md)

## 시작하기

설치는 두 단계로 완료됩니다:

1. **Roblox Studio 플러그인 설치** — Studio와 AI를 연결하는 다리 역할을 합니다
2. **AI 앱에 MCP 서버 등록** — 사용하는 AI 앱에서 Roblox MCP를 인식하도록 설정합니다

5분이면 끝나요. 👉 [설치 가이드 보기](installation/README.md)

## Pro로 업그레이드

양방향 Sync, 고급 제작 기능, AI 토큰 효율 — 한 번의 업그레이드로 모두 누리세요.

👉 [Pro 업그레이드 가이드](pro-upgrade.md)

## 링크

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [이슈 리포트](https://github.com/hope1026/roblox-mcp/issues)
