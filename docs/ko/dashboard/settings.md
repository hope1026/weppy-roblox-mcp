# Settings

> 라이선스 정보, 서버 설정, 동기화 설정, 언어를 확인하고 관리합니다.

## 개요

Settings 페이지에서는 라이선스 정보와 서버 설정을 확인하고 일부를 변경할 수 있습니다. 서버가 연결되어 있으면(L1 이상) 항상 접근할 수 있습니다.

## License (읽기 전용)

현재 라이선스 상태를 표시합니다:

| 항목 | 설명 |
|------|------|
| Status | 상태 배지 (Active/Inactive) |
| Tier | 현재 티어 (Basic/Pro) |
| License Key | 마스킹된 라이선스 키 |
| Provider | 라이선스 제공자 정보 |

## General

| 설정 | 설명 |
|------|------|
| Log Level | 로그 출력 수준 |
| History Recording | 도구 실행 기록 저장 여부 |
| Stats Collection | 도구 통계 수집 여부 |
| Request Timeout | 요청 타임아웃 (초) |

## Server Environment (읽기 전용)

환경 변수로 설정된 서버 설정을 표시합니다:

| 환경 변수 | 설명 | 기본값 |
|----------|------|--------|
| `HTTP_PORT` | HTTP 포트 | 3002 |
| `HTTP_HOST` | HTTP 호스트 | 127.0.0.1 |
| `DASHBOARD_AUTO_OPEN` | 대시보드 자동 열림 | true |

## Sync Settings

| 설정 | 설명 |
|------|------|
| Max Depth | 동기화 최대 깊이 |
| Max Instances | 동기화 최대 인스턴스 수 |

## Language

대시보드 UI 언어를 변경합니다. 6개 언어 + Auto(브라우저 언어 자동 감지)를 지원합니다.

| 옵션 | 언어 |
|------|------|
| Auto | 브라우저 언어 자동 감지 |
| English | 영어 |
| 한국어 | 한국어 |
| 日本語 | 일본어 |
| Español | 스페인어 |
| Português | 포르투갈어 |
| Bahasa Indonesia | 인도네시아어 |

## 관련 문서

- [대시보드 Overview](overview.md)
- [Changelog](changelog.md)
- [Connection](connection.md)
- [Sync](sync.md)
- [Playtest](playtest.md)
- [Tools](tools.md)
