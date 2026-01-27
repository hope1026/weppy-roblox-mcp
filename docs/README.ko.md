# Weppy Roblox MCP

[English](../README.md)

> Claude Code를 위한 AI 기반 Roblox Studio 연동

## 소개

Weppy Roblox MCP는 **Claude Code**가 Roblox Studio와 직접 상호작용할 수 있게 해줍니다. 자연어로 인스턴스 생성, 속성 수정, 스크립트 작성, 게임 제작이 가능합니다.

### 주요 기능

- **76개 이상의 도구** - Roblox Studio 작업 완벽 지원
- **실시간 연동** - SSE를 통한 Studio 직접 통신
- **자연어 지원** - 원하는 것을 설명하면 AI가 구현
- **자동 관리** - Claude Code가 서버를 자동으로 실행

## 빠른 시작

### 1. Claude Code에서 플러그인 설치

```bash
# 마켓플레이스 추가
/plugin marketplace add hope1026/roblox-mcp

# 플러그인 설치
/plugin install weppy-roblox-mcp@hope1026-roblox-mcp
```

### 2. Roblox Studio 플러그인 설치

Roblox Studio 플러그인을 다운로드하여 설치하세요:

**Windows:**
```
%LOCALAPPDATA%\Roblox\Plugins\WeppyRobloxMCP.rbxm
```

**macOS:**
```
~/Documents/Roblox/Plugins/WeppyRobloxMCP.rbxm
```

설치 후 Roblox Studio를 재시작하세요.

### 3. 연결

1. Roblox Studio 실행
2. Plugins 메뉴에서 **Weppy MCP** 위젯 열기
3. **Connect** 클릭 - "Connected" 상태 확인
4. Claude Code와 게임 개발 시작!

## 예시 프롬프트

Claude Code에게 다음과 같이 요청해보세요:

```
"(10, 5, 10) 위치에 빨간 벽돌 만들어줘"

"터치하면 회전하는 스크립트 추가해줘"

"플랫폼 5개로 간단한 장애물 코스 만들어줘"

"'Floor'라는 이름의 모든 파트를 네온 재질로 바꿔줘"

"플레이어 점수를 추적하는 리더보드 시스템 만들어줘"
```

## 사용 가능한 도구

| 카테고리 | 도구 수 | 예시 |
|----------|---------|------|
| **Instance** | 12 | 생성, 삭제, 복제, 이동 |
| **Property** | 10 | 속성/어트리뷰트 get/set |
| **Script** | 10 | 스크립트 생성, 편집, 검색 |
| **Search** | 8 | 이름, 클래스, 속성으로 검색 |
| **Selection** | 12 | Studio 선택 get/set |
| **Bulk** | 8 | 대량 작업 |
| **Tag** | 5 | CollectionService 태그 |
| **Asset** | 6 | 모델, 패키지 삽입 |
| **Environment** | 5 | 조명, 대기, 하늘 |

## 문제 해결

### Studio에서 "Not Connected" 표시

1. Claude Code를 재시작하여 MCP 서버가 실행 중인지 확인
2. 방화벽에서 포트 3002가 차단되지 않았는지 확인
3. Studio 플러그인 재시작

### AI가 변경사항을 인식하지 못함

1. Claude에게 `get_selection`을 사용하여 새로고침 요청
2. Place가 저장되었는지 확인

## 보안

- 서버는 **localhost에서만** 실행 (127.0.0.1)
- 외부 네트워크 접근 없음
- 보호된 경로(CoreGui, CorePackages) 차단

## 링크

- [GitHub 저장소](https://github.com/hope1026/roblox-mcp)
- [이슈 트래커](https://github.com/hope1026/roblox-mcp/issues)

## 라이선스

이 소프트웨어는 게임 개발에 자유롭게 사용할 수 있지만, 소프트웨어 자체의 재판매는 금지하는 커스텀 라이선스로 제공됩니다. 자세한 내용은 [LICENSE](../LICENSE)를 참조하세요.

**허용:** 게임 개발, 상업용 게임, 개인 프로젝트에 사용
**금지:** 소프트웨어 재판매, 경쟁 제품 제작

---

Roblox 커뮤니티를 위해 만들었습니다
