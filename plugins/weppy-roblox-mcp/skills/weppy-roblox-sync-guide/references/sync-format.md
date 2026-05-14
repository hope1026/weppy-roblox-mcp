# Sync Format Reference

WEPPY uses sync file format v2: nested directories where each instance owns its own directory.

## Directory Shape

```text
weppy-project-sync/
└── place_<id>/
    ├── explorer/
    │   ├── Workspace/
    │   │   ├── _tree.json
    │   │   ├── Part/
    │   │   │   └── Part.props.json
    │   │   └── MyScript/
    │   │       └── MyScript.server.luau
    │   └── ServerScriptService/
    │       └── _tree.json
    ├── .sync-meta.json
    └── .sync-index.json
```

## File Names

- Props: `{Name}/{Name}.props.json`
- Script: `{Name}/{Name}.server.luau`, `{Name}/{Name}.client.luau`, or `{Name}/{Name}.module.luau`
- Value: `{Name}/{Name}.value.json`
- Folder/container: directory plus `_tree.json` from the parent service tree.

## `_tree.json`

`_tree.json` is stored per service root at `explorer/{ServiceName}/_tree.json`. It records `name`, `className`, `childCount`, `children`, and `syncedAt`. It does not store `siblingIndex` or session debug fields.

## Collision Encoding

Same-name siblings use collision suffixes such as `SpawnLocation~1`. Literal `~` characters are escaped as `~~`.
