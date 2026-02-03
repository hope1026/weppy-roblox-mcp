# Roblox MCP

[English](../en/README.md) | **한국어** | [日本語](../ja/README.md) | [中文](../zh/README.md)

> AI로 Roblox Studio를 제어하세요. 140개 도구로 게임 개발이 더 쉬워집니다.

![Demo](../../assets/gifs/quick-demo.gif)

## 무엇을 할 수 있나요?

AI에게 말하면 Roblox Studio에서 바로 실행됩니다:

```
"빨간 벽돌 만들어줘"                    → 파트 생성
"모든 파트를 네온으로 바꿔줘"            → 일괄 수정
"터치하면 점프력이 올라가는 스크립트"     → 스크립트 자동 생성
"밤으로 바꾸고 별 추가해"                → 환경 설정
"산악 지형 만들어줘"                    → 지형 생성
```

## 빠른 시작

### 1단계: Roblox 플러그인 설치

**Roblox Creator Store**에서 **"W-MCP"** 검색 후 설치

또는 직접 다운로드:
- [Creator Store에서 설치](https://create.roblox.com/store/asset/YOUR_ASSET_ID)

### 2단계: MCP 서버 설정

사용하는 AI 앱을 선택하세요:

| AI 앱 | 설치 가이드 |
|-------|------------|
| Claude Desktop | [설정 방법](installation/claude-desktop.md) |
| Claude Code | [설정 방법](installation/claude-code.md) |
| Cursor | [설정 방법](installation/cursor.md) |
| Codex CLI | [설정 방법](installation/codex-cli.md) |
| Gemini CLI | [설정 방법](installation/gemini-cli.md) |
| 기타 MCP 앱 | [설정 방법](installation/other-clients.md) |

### 3단계: 연결

1. Roblox Studio 실행
2. Plugins 탭 → **W-MCP** 클릭
3. **Connect** 버튼 클릭
4. "Connected" 표시 확인
4. "Connected" 표시 확인
5. AI와 게임 개발 시작!

![Connection Guide](../../assets/screenshots/connection_guide.png)


## 140개 도구

### 무료 도구 (68개)

| 카테고리 | 할 수 있는 것 | 예시 프롬프트 |
|---------|-------------|--------------|
| **인스턴스** | 파트, 모델 생성/삭제/복제 | "빨간 공 만들어줘" |
| **스크립트** | 코드 작성/수정/검색 | "터치하면 사라지는 스크립트" |
| **속성** | 색상, 크기, 위치 변경 | "이 파트 크기를 2배로" |
| **선택** | Studio에서 선택한 항목 제어 | "선택한 것들 복제해줘" |
| **태그** | CollectionService 태그 관리 | "이 파트에 'Enemy' 태그 추가" |
| **카메라** | 뷰 이동, 포커스 | "이 모델로 카메라 이동" |
| **로그** | 에러 확인, 디버깅 | "최근 에러 보여줘" |

### Pro 도구 (72개)

| 카테고리 | 할 수 있는 것 | 예시 프롬프트 |
|---------|-------------|--------------|
| **대량 작업** | 수백 개 동시 생성/수정 | "나무 100그루 심어줘" |
| **에셋** | 모델 검색/삽입 | "무료 자동차 모델 찾아서 넣어줘" |
| **환경** | 조명, 날씨, 시간 | "밤으로 바꾸고 안개 추가해" |
| **지형** | Terrain 생성/수정 | "산악 지형 만들어줘" |
| **레이캐스트** | 충돌 감지, 위치 찾기 | "플레이어 스폰 위치 5개 찾아줘" |
| **시각화** | 영역 표시, 마커 생성 | "이 영역을 빨간색으로 표시" |

👉 [전체 도구 목록 보기](tools/overview.md)

## 무료 vs Pro

| 기능 | 무료 | Pro |
|-----|:----:|:----:|
| 기본 도구 (68개) | ✅ | ✅ |
| Pro 도구 (72개) | 일일 할당량 | ✅ 무제한 |
| 대량 작업 | 10개 제한 | 무제한 |
| 에셋 검색/삽입 | 일일 5회 | 무제한 |
| 지형 생성 | 일일 3회 | 무제한 |

## 예시 프롬프트

### 초보자용
```
"(0, 5, 0) 위치에 빨간 파트 만들어줘"
"이 파트 이름을 'Floor'로 바꿔줘"
"선택한 파트 삭제해줘"
"현재 선택된 게 뭐야?"
```

### 중급자용
```
"터치하면 색이 바뀌는 스크립트 추가해줘"
"'Platform' 태그가 있는 모든 파트를 찾아줘"
"이 모델을 5개 복제해서 일렬로 배치해줘"
"조명을 저녁 분위기로 바꿔줘"
```

### 고급자용
```
"10x10 그리드로 타일 100개 생성해줘"
"Workspace에서 빈 공간 찾아서 NPC 스폰 위치 추천해줘"
"이 스크립트에서 'player'를 'character'로 전부 바꿔줘"
"산악 지형 생성하고 나무 50그루 배치해줘"
```

## 문제 해결

### "Not Connected" 표시됨

1. AI 앱에서 MCP 서버가 실행 중인지 확인
2. 방화벽에서 포트 3002 허용
3. Studio 플러그인 재시작 (Plugins → W-MCP → Reconnect)

### AI가 변경사항을 못 봄

1. AI에게 "현재 상태 동기화해줘" 요청
2. `sync_workspace_state` 도구 사용 요청

### 명령이 실행되지 않음

1. Studio에서 플러그인이 "Connected" 상태인지 확인
2. 명령이 너무 복잡하면 단계별로 나눠서 요청

👉 [전체 FAQ 보기](faq.md)

## 보안

- 서버는 **localhost에서만** 실행 (127.0.0.1:3002)
- 외부 네트워크 접근 불가
- CoreGui, CorePackages 등 보호된 경로 차단
- 분당 450회 요청 제한

## 지원 AI 앱

| 앱 | 지원 | localhost |
|----|:----:|:---------:|
| Claude Desktop | ✅ | ✅ |
| Claude Code | ✅ | ✅ |
| Cursor | ✅ | ✅ |
| Codex CLI | ✅ | ✅ |
| Gemini CLI | ✅ | ✅ |
| Windsurf | ✅ | ✅ |
| Continue | ✅ | ✅ |
| Cline | ✅ | ✅ |
| ChatGPT Desktop | ✅ | ❌ (ngrok 필요) |

## 링크

- [GitHub](https://github.com/hope1026/roblox-mcp)
- [이슈 리포트](https://github.com/hope1026/roblox-mcp/issues)
- [Creator Store](https://create.roblox.com/store/asset/YOUR_ASSET_ID)

## 라이선스

게임 개발에 자유롭게 사용할 수 있습니다.

✅ **허용**: 게임 개발, 상업용 게임, 개인 프로젝트
❌ **금지**: 소프트웨어 재판매, 경쟁 제품 제작

---

Roblox 커뮤니티를 위해 만들었습니다 ❤️
