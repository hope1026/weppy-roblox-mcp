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
            if [ -d "roblox-studio-sync" ]; then
              timestamp=$(date +"%Y-%m-%d %H:%M:%S")
              echo "[$timestamp] Modified: $TOOL_NAME" >> "roblox-studio-sync/changes.log"
            fi
---

# Roblox Sync Skill

**CRITICAL: This skill BLOCKS until sync is fully verified. Do NOT return early.**

## Cache Structure (Roblox Studio Mirror)

The explorer folder mirrors Roblox Studio's hierarchy exactly:

```
roblox-studio-sync/
├── last-sync.txt              # ISO timestamp of last successful sync
├── connection-status.txt      # "connected" or "disconnected"
├── rojo-detected.txt          # "true" or "false"
├── changes.log                # MCP tool usage log
├── activity.log               # All MCP activity
├── explorer/                  # Mirrors Studio hierarchy
│   ├── Workspace/
│   │   ├── _index.json        # Service summary (className, childCount, path)
│   │   ├── Camera.json        # Instance: { className, properties }
│   │   ├── Terrain.json       # Instance: { className, properties }
│   │   └── MyModel/           # Model becomes folder
│   │       ├── _index.json    # Model summary
│   │       ├── Part1.json     # Part properties
│   │       └── MyScript.server.lua  # Script SOURCE (full text)
│   ├── ServerScriptService/
│   │   ├── _index.json
│   │   └── GameManager.server.lua   # Script source file
│   ├── ReplicatedStorage/
│   │   ├── _index.json
│   │   └── Events/
│   │       └── _index.json
│   ├── ServerStorage/
│   │   └── _index.json
│   ├── StarterGui/
│   │   └── _index.json
│   ├── StarterPlayer/
│   │   ├── _index.json
│   │   └── StarterPlayerScripts/
│   │       └── _index.json
│   └── Lighting/
│       ├── _index.json
│       ├── Atmosphere.json
│       └── Sky.json
├── snapshots/                 # Point-in-time snapshots
└── screenshots/               # Visual captures
```

### File Formats

**_index.json (Service/Folder Summary):**
```json
{
  "name": "Workspace",
  "className": "Workspace",
  "path": "game.Workspace",
  "childCount": 5,
  "children": ["Camera", "Terrain", "SpawnLocation", "Monsters", "Bosque"],
  "syncedAt": "2026-01-28T21:00:00+09:00"
}
```

**Instance.json (Part, Model, etc.):**
```json
{
  "name": "SpawnLocation",
  "className": "SpawnLocation",
  "path": "game.Workspace.SpawnLocation",
  "properties": {
    "Position": [160, 26, -40],
    "Size": [6, 1, 6],
    "Anchored": true,
    "Neutral": true
  }
}
```

**Script Files (.lua):**
- `Name.server.lua` → Server Script
- `Name.client.lua` → Local Script
- `Name.lua` → Module Script
- Contains full script source code

---

## Mandatory Workflow

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

### Step 2: Load MCP Tools

```
ToolSearch: "+robloxstudio project structure"
ToolSearch: "+robloxstudio get_script_source"
```

### Step 3: Fetch Service Structures

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

### Step 4: Create Folder Hierarchy

For each service response, create folder structure:

```typescript
function syncService(serviceName: string, data: any) {
  const baseDir = `roblox-studio-sync/explorer/${serviceName}`;

  // Create service folder
  mkdir(baseDir);

  // Write _index.json
  Write(`${baseDir}/_index.json`, JSON.stringify({
    name: data.structure.name,
    className: data.structure.className,
    path: data.structure.path,
    childCount: data.structure.childCount,
    children: data.structure.children?.map(c => c.name) || [],
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
    // Fetch and save script source
    const source = await get_script_source({ path: instance.path });
    const ext = instance.className === "Script" ? ".server.lua"
              : instance.className === "LocalScript" ? ".client.lua"
              : ".lua";
    Write(`${parentDir}/${instance.name}${ext}`, source.source);
  } else if (isContainer) {
    // Create subfolder
    const subDir = `${parentDir}/${instance.name}`;
    mkdir(subDir);
    Write(`${subDir}/_index.json`, JSON.stringify({
      name: instance.name,
      className: instance.className,
      path: instance.path,
      childCount: instance.childCount,
      children: instance.children?.map(c => c.name) || []
    }, null, 2));

    // Recurse into children
    for (const child of instance.children || []) {
      syncInstance(subDir, child);
    }
  } else {
    // Simple instance - save properties
    Write(`${parentDir}/${instance.name}.json`, JSON.stringify({
      name: instance.name,
      className: instance.className,
      path: instance.path,
      childCount: instance.childCount
    }, null, 2));
  }
}
```

### Step 5: Update Metadata

```bash
./.claude/skills/roblox-sync/scripts/update-metadata.sh
```

### Step 6: Verify Completion (REQUIRED)

```bash
./.claude/skills/roblox-sync/scripts/post-verify.sh
```

**Verification checks:**
1. ✅ All required service folders exist
2. ✅ Each folder has valid `_index.json`
3. ✅ Workspace has children (Camera, Terrain minimum)
4. ✅ Timestamp is current

### Step 7: Report Success

```
✓ Sync Complete
- Services: Workspace, Lighting, ReplicatedStorage, ServerStorage, ServerScriptService, StarterGui, StarterPlayer
- Scripts synced: {count}
- Timestamp: {last-sync.txt}
- Rojo mode: {rojo-detected.txt}
```

---

## Data Validation Rules

### Critical Services (MUST have content)

| Service | Minimum Children |
|---------|------------------|
| Workspace | Camera, Terrain |
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

  // Check Workspace has children
  const wsIndex = readJSON("explorer/Workspace/_index.json");
  if (!wsIndex || wsIndex.childCount < 2) {
    errors.push("Workspace must have at least Camera and Terrain");
  }

  // Check all required _index.json files exist
  const required = ["Workspace", "Lighting", "ReplicatedStorage",
                    "ServerStorage", "ServerScriptService", "StarterGui", "StarterPlayer"];
  for (const svc of required) {
    if (!fileExists(`explorer/${svc}/_index.json`)) {
      errors.push(`Missing ${svc}/_index.json`);
    }
  }

  // Check timestamp freshness (max 30 minutes)
  const lastSync = readFile("last-sync.txt");
  const syncAge = Date.now() - Date.parse(lastSync);
  if (syncAge > 30 * 60 * 1000) {
    errors.push("Sync data is stale (>30 minutes old)");
  }

  return errors.length === 0;
}
```

---

## Script Sync Details

When syncing scripts, fetch full source:

```typescript
// For each Script/LocalScript/ModuleScript found:
const scriptSource = await mcp__robloxstudio__get_script_source({
  path: instance.path
});

// Determine file extension
const ext = {
  "Script": ".server.lua",
  "LocalScript": ".client.lua",
  "ModuleScript": ".lua"
}[instance.className];

// Save to file
Write(`${parentDir}/${instance.name}${ext}`, scriptSource.source);
```

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
| `full` | Execute full sync workflow (Steps 1-7) |
| `verify` | Run verification only (Step 6) |
| (none) | Same as `full` |

---

## Exit Criteria

**This skill is NOT complete until ALL conditions are true:**

1. ✅ MCP connection verified
2. ✅ All 7 service folders created with `_index.json`
3. ✅ Workspace has children (childCount >= 2)
4. ✅ All scripts have `.lua` source files
5. ✅ `post-verify.sh` returns exit 0
6. ✅ `last-sync.txt` has current timestamp

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
