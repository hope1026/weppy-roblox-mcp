# WEPPY Sync에서 `luau-lsp` 사용하기

WEPPY Sync는 `luau-lsp`가 필요한 sourcemap 파일을 자동으로 생성할 수 있으므로, 별도의 Rojo 프로젝트를 따로 구성하지 않아도 Roblox 인식 편집기 기능을 사용할 수 있습니다.

## WEPPY가 생성하는 파일

Full Sync가 끝나면 WEPPY는 다음 파일을 생성합니다.

- Place sourcemap: `weppy-project-sync/place_<id>/sourcemap.json`
- 루트 대표 파일: `weppy-project-sync/sourcemap.json`

대부분의 사용자에게 권장되는 경로는 `weppy-project-sync/sourcemap.json`입니다.

## 어떤 점이 좋아지나

`luau-lsp`가 WEPPY sourcemap을 읽으면 다음이 개선됩니다.

- `game.*` 자동완성
- 동기화된 스크립트 기준 탐색
- 동기화된 스크립트 사이의 `require` 해석

## 권장 설정 방법

1. WEPPY가 `weppy-project-sync/sourcemap.json`을 만들도록 Full Sync를 한 번 실행합니다.
2. 에디터의 `luau-lsp` sourcemap 설정이 `weppy-project-sync/sourcemap.json`을 가리키게 합니다.
3. 사용하는 클라이언트에서 자동 Rojo 생성을 끌 수 있다면 `luau-lsp.sourcemap.autogenerate`를 `false`로 설정합니다.

VSCode 설정 예시:

```json
{
  "luau-lsp.sourcemap.enabled": true,
  "luau-lsp.sourcemap.autogenerate": false,
  "luau-lsp.sourcemap.sourcemapFile": "weppy-project-sync/sourcemap.json"
}
```

## Multi-place 참고

`weppy-project-sync/sourcemap.json`은 프로젝트의 현재 대표 place를 따라갑니다.
특정 place를 고정해서 쓰고 싶다면 `luau-lsp`가 해당 place의 `weppy-project-sync/place_<id>/sourcemap.json`을 직접 보도록 설정하면 됩니다.
