---
name: roblox-sync
description: Synchronize Roblox Studio state with local cache. BLOCKING - does not return until sync is verified complete.
argument-hint: "[full|verify]"
user-invocable: false
hooks:
  PostToolUse:
    - matcher: "mcp__robloxstudio__(create|delete|set|move|rename|clone|edit|insert|terrain).*"
      hooks:
        - type: command
          command: |
            SYNC_DIR=""
            if [ -d "roblox-project-sync" ]; then
              SYNC_DIR="roblox-project-sync"
            elif [ -d "roblox-studio-sync" ]; then
              SYNC_DIR="roblox-studio-sync"
            fi
            if [ -n "$SYNC_DIR" ]; then
              timestamp=$(date +"%Y-%m-%d %H:%M:%S")
              echo "[$timestamp] Modified: $TOOL_NAME" >> "$SYNC_DIR/changes.log"
            fi
---

# Roblox Sync Skill

**CRITICAL: This skill BLOCKS until sync is fully verified. Do NOT return early.**

## Sync Mode Detection

This skill supports two sync modes:

### Project Sync Mode (Automatic, Preferred)

When `.sync-meta.json` exists in `roblox-project-sync/`, the Roblox Studio plugin automatically syncs the instance tree to the local filesystem. **No MCP tool calls needed.**

**Detection:**
```bash
if [ -f "roblox-project-sync/.sync-meta.json" ]; then
  # Project Sync active -- skip MCP calls, just read files
fi
```

**When Project Sync is active:**
1. Skip Steps 2-4 (no MCP tool calls needed)
2. Read files directly from `roblox-project-sync/explorer/`
3. Verify sync freshness via `.sync-meta.json` timestamps
4. All script sources are already on disk as `.luau` files

### Legacy MCP Mode (Fallback)

When Project Sync is NOT active, fall back to MCP tool calls (`get_project_structure`, `get_script_source`) to populate `roblox-project-sync/explorer/`.

---

## Cache Structure (Roblox Studio Mirror)

The explorer folder mirrors Roblox Studio's hierarchy:

```
roblox-project-sync/
├── .sync-meta.json            # Sync metadata (placeId, timestamps, config)
├── .sync-index.json           # Per-file hash tracking
├── changes.log                # Change history (auto-flushed)
├── explorer/                  # Mirrors Studio hierarchy
│   ├── Workspace/
│   │   ├── _tree.json         # Service tree summary
│   │   ├── _props.json        # Service properties
│   │   ├── MyModel/           # Model becomes folder
│   │   │   ├── _props.json    # Model properties
│   │   │   ├── Part1/
│   │   │   │   └── _props.json
│   │   │   └── MyScript.server.luau  # Script SOURCE (full text)
│   │   └── SpawnLocation/
│   │       └── _props.json
│   ├── ServerScriptService/
│   │   ├── _tree.json
│   │   └── GameManager.server.luau
│   ├── ReplicatedStorage/
│   │   ├── _tree.json
│   │   └── SharedModule.module.luau
│   ├── ServerStorage/
│   │   └── _tree.json
│   ├── StarterGui/
│   │   └── _tree.json
│   ├── StarterPlayer/
│   │   ├── _tree.json
│   │   └── StarterPlayerScripts/
│   │       └── _tree.json
│   └── Lighting/
│       ├── _tree.json
│       └── Atmosphere/
│           └── _props.json
└── snapshots/                 # Point-in-time snapshots (.tar.gz)
    └── _index.json            # Snapshot registry
```

### File Formats

**_tree.json (Service/Container Tree Summary):**
```json
{
  "name": "Workspace",
  "className": "Workspace",
  "childCount": 5,
  "children": [
    { "name": "SpawnLocation", "className": "SpawnLocation", "childCount": 0 },
    { "name": "MyModel", "className": "Model", "childCount": 3, "children": [...] }
  ],
  "syncedAt": "2026-02-09T12:00:00.000Z"
}
```

**_props.json (Instance Properties):**
```json
{
  "name": "SpawnLocation",
  "className": "SpawnLocation",
  "properties": {
    "Position": { "x": 160, "y": 26, "z": -40 },
    "Size": { "x": 6, "y": 1, "z": 6 },
    "Anchored": true,
    "Neutral": true
  },
  "attributes": { "SpawnPriority": 1 },
  "tags": ["PlayerSpawn"]
}
```

**.sync-meta.json (Sync Metadata):**
```json
{
  "version": 1,
  "placeId": 12345,
  "placeName": "My Game",
  "lastFullSync": "2026-02-09T12:00:00.000Z",
  "lastIncrementalSync": "2026-02-09T12:05:30.000Z",
  "instanceCount": 1234,
  "scriptCount": 56,
  "syncMode": "mirror",
  "excludePatterns": ["*.Terrain", "*.Camera"],
  "propertyMode": "common"
}
```

**Script Files (.luau):**
- `Name.server.luau` -- Server Script
- `Name.client.luau` -- Local Script
- `Name.module.luau` -- Module Script
- Scripts with children: `Name/init.server.luau` (directory with init file)
- Scripts without children: `Name.server.luau` (flat file in parent dir)
- Contains full script source code

---

## Mandatory Workflow

### Step 0: Detect Sync Mode

```bash
# Check for Project Sync first
if [ -f "roblox-project-sync/.sync-meta.json" ]; then
  echo "Project Sync active"
  # Check freshness
  LAST_SYNC=$(grep -o '"lastFullSync":"[^"]*"' roblox-project-sync/.sync-meta.json | cut -d'"' -f4)
  if [ -n "$LAST_SYNC" ]; then
    echo "Last sync: $LAST_SYNC"
    # Skip to Step 6 (verify only)
  fi
fi
```

If Project Sync is active AND data is fresh (< 30 minutes old), skip directly to verification.

### Step 1: Run Pre-Check Script (BLOCKING)

```bash
./.claude/skills/roblox-sync/scripts/pre-check.sh
```

**Exit codes:**
| Code | Meaning | Action |
|------|---------|--------|
| 0 | Already synced | Skip to Step 6 (verify only) |
| 100 | Connection OK, sync needed | Proceed to Step 2 |
| 11 | Studio not connected | Script WAITS for user |
| 10/12/13 | Error | Report and STOP |

### Step 2: Load MCP Tools (Legacy Mode Only)

Skip this step if Project Sync is active.

```
ToolSearch: "+robloxstudio project structure"
ToolSearch: "+robloxstudio get_script_source"
```

### Step 3: Fetch Service Structures (Legacy Mode Only)

Skip this step if Project Sync is active.

Call `get_project_structure` for ALL services in parallel:

```javascript
get_project_structure({ rootPath: "game.Workspace", depth: 10 })
get_project_structure({ rootPath: "game.Lighting", depth: 5 })
get_project_structure({ rootPath: "game.ReplicatedStorage", depth: 10 })
get_project_structure({ rootPath: "game.ServerStorage", depth: 10 })
get_project_structure({ rootPath: "game.ServerScriptService", depth: 10 })
get_project_structure({ rootPath: "game.StarterGui", depth: 10 })
get_project_structure({ rootPath: "game.StarterPlayer", depth: 10 })
```

### Step 4: Create Folder Hierarchy (Legacy Mode Only)

Skip this step if Project Sync is active.

For each service response, create folder structure under `roblox-project-sync/explorer/`:

```typescript
function syncService(serviceName: string, data: any) {
  const baseDir = `roblox-project-sync/explorer/${serviceName}`;
  mkdir(baseDir);

  // Write _tree.json
  Write(`${baseDir}/_tree.json`, JSON.stringify({
    name: data.structure.name,
    className: data.structure.className,
    childCount: data.structure.childCount,
    children: data.structure.children?.map(c => ({
      name: c.name, className: c.className, childCount: c.childCount
    })) || [],
    syncedAt: new Date().toISOString()
  }, null, 2));

  // Process children recursively
  for (const child of data.structure.children || []) {
    syncInstance(baseDir, child);
  }
}

async function syncInstance(parentDir: string, instance: any) {
  const isScript = ["Script", "LocalScript", "ModuleScript"].includes(instance.className);
  const isContainer = instance.childCount > 0 || ["Folder", "Model"].includes(instance.className);

  if (isScript) {
    const source = await get_script_source({ path: instance.path });
    const ext = instance.className === "Script" ? ".server.luau"
              : instance.className === "LocalScript" ? ".client.luau"
              : ".module.luau";
    Write(`${parentDir}/${instance.name}${ext}`, source.source);
  } else if (isContainer) {
    const subDir = `${parentDir}/${instance.name}`;
    mkdir(subDir);

    // Write _props.json for the container
    Write(`${subDir}/_props.json`, JSON.stringify({
      name: instance.name,
      className: instance.className,
      properties: instance.properties || {}
    }, null, 2));

    for (const child of instance.children || []) {
      syncInstance(subDir, child);
    }
  } else {
    // Instance with properties
    const subDir = `${parentDir}/${instance.name}`;
    mkdir(subDir);
    Write(`${subDir}/_props.json`, JSON.stringify({
      name: instance.name,
      className: instance.className,
      properties: instance.properties || {}
    }, null, 2));
  }
}
```

### Step 5: Update Metadata

```bash
./.claude/skills/roblox-sync/scripts/update-metadata.sh roblox-project-sync
```

### Step 6: Verify Completion (REQUIRED)

```bash
./.claude/skills/roblox-sync/scripts/post-verify.sh
```

**Verification checks:**
1. All required service folders exist
2. Each folder has valid `_tree.json`
3. Workspace has children (in _tree.json)
4. Timestamp is current (from .sync-meta.json or last-sync.txt)

### Step 7: Report Success

```
Sync Complete
- Mode: Project Sync (automatic) / Legacy (MCP calls)
- Services: Workspace, Lighting, ReplicatedStorage, ServerStorage, ServerScriptService, StarterGui, StarterPlayer
- Scripts synced: {count}
- Instances: {count}
- Last sync: {timestamp}
```

---

## Data Validation Rules

### Critical Services (MUST have content)

| Service | Minimum Children |
|---------|------------------|
| Workspace | At least 1 child |
| Lighting | (any) |
| StarterPlayer | StarterPlayerScripts |

### Allowed Empty Services

These can be empty for new projects:
- ReplicatedStorage
- ServerStorage
- ServerScriptService
- StarterGui

### Validation Logic

```typescript
function validateSync(): boolean {
  const errors: string[] = [];
  const syncDir = "roblox-project-sync";

  // Check .sync-meta.json for Project Sync mode
  const metaPath = `${syncDir}/.sync-meta.json`;
  if (fileExists(metaPath)) {
    const meta = readJSON(metaPath);
    // Check freshness via lastFullSync
    if (meta.lastFullSync) {
      const syncAge = Date.now() - Date.parse(meta.lastFullSync);
      if (syncAge > 30 * 60 * 1000) {
        errors.push("Sync data is stale (>30 minutes old)");
      }
    }
  }

  // Check Workspace tree
  const wsTree = readJSON(`${syncDir}/explorer/Workspace/_tree.json`);
  if (!wsTree || wsTree.childCount < 1) {
    errors.push("Workspace must have at least 1 child");
  }

  // Check all required _tree.json files exist
  const required = ["Workspace", "Lighting", "ReplicatedStorage",
                    "ServerStorage", "ServerScriptService", "StarterGui", "StarterPlayer"];
  for (const svc of required) {
    if (!fileExists(`${syncDir}/explorer/${svc}/_tree.json`)) {
      errors.push(`Missing ${svc}/_tree.json`);
    }
  }

  return errors.length === 0;
}
```

---

## Script Sync Details

In **Project Sync mode**, scripts are already on disk. Just read them directly:

```typescript
// Scripts are at:
// - Without children: ParentDir/ScriptName.server.luau
// - With children:    ScriptName/init.server.luau

// Extension mapping:
const ext = {
  "Script": ".server.luau",
  "LocalScript": ".client.luau",
  "ModuleScript": ".module.luau"
}[instance.className];
```

In **Legacy mode**, fetch via MCP:

```typescript
const scriptSource = await mcp__robloxstudio__get_script_source({
  path: instance.path
});

const ext = {
  "Script": ".server.luau",
  "LocalScript": ".client.luau",
  "ModuleScript": ".module.luau"
}[instance.className];

Write(`${parentDir}/${instance.name}${ext}`, scriptSource.source);
```

---

## Migration from roblox-studio-sync

If `roblox-studio-sync/` exists but `roblox-project-sync/` does not:
1. The old folder uses `_index.json` and `.lua` extensions
2. Create `roblox-project-sync/` with the new structure
3. Do NOT delete `roblox-studio-sync/` (user may want to keep it)
4. Future syncs will use `roblox-project-sync/` exclusively

---

## Error Handling

| Error | Action |
|-------|--------|
| MCP not responding | Wait and guide user |
| Studio not connected | Wait and guide user |
| Session ID mismatch | Guide user to reconnect plugin |
| Service sync failed | Retry up to 3 times |
| Script fetch failed | Log warning, continue |
| Verification failed | Retry full sync |

**Never silently fail. Always report specific errors.**

### Session ID Debugging

When the user reports "plugin shows connected but sync doesn't work":

1. Call `get_connection_info()` and note `server.sessionId` (e.g., "A3F2-B1C7")
2. Ask user to check plugin UI for "ID: XXXX-XXXX" next to server URL
3. If IDs don't match:
   - Multiple MCP servers may be running
   - Ask user to disconnect and reconnect the plugin
   - Or restart Claude Code session

---

## Arguments

| Argument | Action |
|----------|--------|
| `full` | Execute full sync workflow (Steps 0-7) |
| `verify` | Run verification only (Step 6) |
| (none) | Same as `full` |

---

## Exit Criteria

**This skill is NOT complete until ALL conditions are true:**

1. MCP connection verified (or Project Sync active)
2. All 7+ service folders created with `_tree.json`
3. Workspace has children (childCount >= 1)
4. All scripts have `.luau` source files
5. `post-verify.sh` returns exit 0
6. Timestamps are current

**If ANY fails, DO NOT return success.**

---

## Plugin Logs

When `enableLogSync` is enabled in plugin settings, logs are synced to the MCP server and saved to:

```
~/.roblox-studio-sync/logs/
├── current.log           # Rolling log (last 500 lines)
└── plugin-YYYY-MM-DD.log # Daily log files
```

### Log Format

```
[2026-01-29 14:30:45] [INFO] Plugin initialized
[2026-01-29 14:30:46] [DEBUG] Health check OK - Latency: 15ms
[2026-01-29 14:31:02] [ERROR] Connection failed: timeout
```

### Log Levels

| Level | Description |
|-------|-------------|
| DEBUG | Detailed debugging information |
| INFO | General operational information |
| WARN | Warning messages for potential issues |
| ERROR | Error messages for failures |
| FATAL | Critical errors that may crash the plugin |

The `logLevel` setting in the plugin controls the minimum level displayed and synced.
