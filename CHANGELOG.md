# Changelog

All notable changes to this project will be documented in this file.















## [2.0.2] - 2026-03-24

### Features

- **New one-line installation method**: Install the MCP server and Roblox Studio plugin with a single command. On macOS/Linux run `curl -fsSL https://weppy.dev/install | bash`, on Windows run `irm https://weppy.dev/install.ps1 | iex`. The installer auto-detects the Claude/Cursor config path, injects the MCP entry, and opens the plugin install page in your browser.
- **Dashboard data clearing**: Added clear buttons to the web dashboard for connection history, tool execution history, and sync history. Each section can now be reset independently without restarting the server.
- **Plugin and MCP stability improvements**: Hardened the HTTP polling loop in the Roblox Studio plugin to recover from transient network errors without dropping the connection. The MCP server now retries failed result deliveries and surfaces timeout details in error responses for easier debugging.


## [2.0.1] - 2026-03-22

### Bug Fixes

- Fix setup scripts (`setup-mcp.sh`, `setup-mcp.bat`) failing to resolve MCP server path on Windows and macOS
- Fix project sync directory path resolution when multiple MCP instances share the same workspace


## [2.0.0] - 2026-03-22

### BREAKING CHANGES

- **ZIP users**: Package directory structure has changed. You must re-run `setup-mcp.sh` (or `setup-mcp.bat`). The MCP server path in `.mcp.json` has moved from `mcp-server/index.js` to `plugins/weppy-roblox-mcp/dist/index.js`.

### Highlights

- **Built-in Dashboard**: The MCP server now includes an embedded dashboard. Access it at `http://127.0.0.1:3002/dashboard` — no extra setup required for npm or ZIP installs.
- **Unified deploy structure**: npm, ZIP, and local dev environments all share the same `plugins/weppy-roblox-mcp/dist/index.js` runtime layout.

### Features

- Built-in dashboard with 7 pages: Overview, Connection, Tools, Sync, Changelog, Playtest, Settings
- Multi-language support (en, ko) with auto-detection
- Real-time SSE updates for connection status and license changes
- Unified tool and sync changelog extraction
- Sync apply modes (auto/manual per content type)

### Bug Fixes

- Unified MCP server path across all setup scripts and guides (6 languages)
- Tooltip clipping at viewport edges


## [1.5.5] - 2026-03-16

### Improved

- Enhanced overall stability and reliability


## [1.5.4] - 2026-03-16

### Improved

- Enhanced build pipeline stability and plugin artifact verification
- Improved production build process with additional validation gates

## [1.5.3] - 2026-03-15

### Bug Fixes

- Fix expected cause of playtest stop not working properly on Windows


## [1.5.2] - 2026-03-14

### Improved

- Improved tool invocation reliability and parameter handling
- Enhanced file name sanitization for Windows reserved names, trailing dots/spaces, and control characters

### Bug Fixes

- Fixed Explorer view not displaying instances correctly in certain sync scenarios


## [1.5.1] - 2026-03-14

### Improved

- Overall stability improvements and internal configuration optimization
- Restore tier comparison UI overlay
- Refine telemetry parameters


## [1.5.0] - 2026-03-13

### Features

- Play Test support — run, stop, pause, resume play tests and monitor output directly from AI agents
- Log streaming with incremental cursor-based retrieval (`sinceSeq`)

### Improved

- MCP server stability improvements and license refresh logic refinement
- Plugin connection handling simplified — removed redundant connect-refresh cycle
- Enhanced command routing and error handling


## [1.4.2] - 2026-03-11

### Improved

- MCP server code refactoring for better maintainability
- Enhanced license check logic for improved reliability
- Plugin internal stability improvements


## [1.4.1] - 2026-03-10

### Changed

- Simplify authentication flow — legacy auth paths removed for improved connection reliability

### Improved

- MCP server internal stability and observability improvements
- Plugin internal cleanup and configuration refinements


## [1.4.0] - 2026-03-08

### New Features

- Add Roblox Explorer VSCode extension — browse Studio instance tree directly in VSCode sidebar
  - TreeDataProvider for real-time instance hierarchy visualization
  - Auto-refresh via FileWatcher on sync data changes
  - Icon mapping for Roblox class names (dark/light theme support)
  - Copy instance path, open backing file, reveal in explorer commands

### Improvements

- Refactor MCP server deployment pipeline and build configuration
- Improve camera and terrain sync stability and accuracy
- Enhance plugin UI icons and visual consistency


## [1.3.1] - 2026-03-07

### Improvements

- Improve sync robustness during rapid consecutive file changes
- Enhance incremental change processor to reduce false-positive conflict detection
- Strengthen sync index integrity checks on startup and reconnect
- Improve LRU cache eviction to prevent stale place data after session switch

### Bug Fixes

- Fix sync stall when file watcher emits duplicate events for the same path
- Fix reverse sync occasionally skipping files with identical hashes but different timestamps
- Fix collision suffix (`~N`) not reindexing correctly after instance rename
- Fix sync-init phase hanging when workspace contains deeply nested empty containers

### Documentation

- Restructure README for faster install path (Quick Install and compatibility table at top)
- Add troubleshooting guide
- Add compatibility matrix (supported clients, system requirements, Basic vs Pro)
- Add `llms.txt` for AI crawler discovery
- Add community health files: CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, SUPPORT
- Add GitHub issue templates (bug report, feature request, install help)


## [1.3.0] - 2026-03-06

### Breaking Changes

- Sync file format now uses nested directory structure for all objects — each instance is represented as its own directory (e.g., `Part/Part.props.json` instead of flat files)
- Duplicate sibling instances are now distinguished using `~N` suffix encoding (Odd-Count Tilde Rule) — e.g., `Part~1/`, `Part~2/`, `Part~3/`
- Existing sync data will be regenerated automatically (no migration from v1)

### Improvements

- Enhance sync stability and performance for bidirectional file synchronization
- Improve sync child indexing and collision handling
- Refine analytics tracking for tool usage

### Bug Fixes

- Improve error handling and resilience during MCP tool execution
- Fix license token cache and Pro auth flow issues
- Resolve sync errors on concurrent file changes
- Fix duplicated instance name handling in sync index
- Fix various edge cases in sync change processing

### Plugin

- Improve plugin icons and UI refinements
- Clean up unused files and modules
- General plugin stability improvements


## [1.2.3] - 2026-03-02

Other Changes
-	improved UI, security, and overall stability


## [1.2.2] - 2026-03-01

### Features

- improve sync conflict UI and tier defaults
- update icon paths to use PNG format and enhance file visibility handling
- add IconResolver for managing icons based on Roblox class names
- Add ManualChangesDialog and ManualSyncPopup for handling manual sync changes

### Bug Fixes

- remove dead run_command action from system_info tool


## [1.2.1] - 2026-02-28

### Other Changes

- UI improvements and stability enhancements


## [1.2.0] - 2026-02-26

### Features

- Update documentation and scripts for CommandHandlers structure and verification process
- Implement extended handlers for Roblox Engine API access


## [1.0.3] - 2026-02-24

### Features

- add restoreToken support for license management

### Documentation

- update tool documentation to clarify sync actions and add `progress`

### Chores

- add initial planning and task documents for manifest-driven codegen architecture
- remove unused license server deployment workflow and coverage reports

### Other Changes

- refactor: remove FooterCard module and integrate reset/feedback functionality directly into SettingsTab
- refactor: centralize UI localization handling across MCP tab components


## [1.0.2] - 2026-02-23

### Bug Fixes

- handle blocked devices and improve graceful fallback for Pro license checks

### Documentation

- add script-based installation instructions to setup guides

### Chores

- update `.mcp.json` to use relative path for `mcp-server` startup script

### Other Changes

- update


## [1.0.1] - 2026-02-23

### Other Changes

- refactor: standardize data directory path logic across modules


## [1.0.0] - 2026-02-23

### Sync

- Implement bidirectional sync between Studio and local files
- Add per-type sync direction control for Scripts, Values, Containers, Data, and Services
- Add per-type apply mode (Auto / Manual) per category
- Add Full Sync and Resync with local file preservation option
- Add real-time sync progress tracking and place promotion support
- Add change history with per-change detail view
- Add multi-place sync with LRU cache (max 3 places) and isolated storage per place
- Add reverse rescan to detect missed changes on direction switch
- Add SyncDirectionCard UI with inline descriptions and hover previews
- Add PreSyncDialog for pre-sync confirmation and local file handling
- Refactor sync state management with runtime and default config handling

### MCP Tools

- Add `batch_execute` tool for running multiple commands in one call
- Add `execute_luau` sandbox with stricter service and path blocking
- Add tree mutation support for instance rename and move operations
- Add sibling index support for duplicate-named instances
- Add per-type sync direction and apply mode to `manage_sync` tool
- Add `trackToolCall` with action and error type tracking
- Improve path resolution with robust Roblox path utilities and root confinement

### Stability

- Add comprehensive MCP flow tests and E2E sync test suite
- Enhance dynamic endpoint handling, reconnection logic, and error resilience
- Fix tooltip positioning in widget-local space
- Refactor settings UI with categories and tooltips
- Improve AI client detection and connection info display


## [0.1.11] - 2026-02-14

### Other Changes

- Improve stability


## [0.1.10] - 2026-02-11

### Bug Fixes

- Fix MCP server registration error in Antigravity


## [0.1.9] - 2026-02-08

### Other Changes

- Improve stability


## [0.1.8] - 2026-02-08

### Fix
- Improve stability


## [0.1.3] - 2026-02-07

### Features
- Add tool history and statistics tracking system
- Add version info display in plugin UI


## [0.1.2] - 2026-02-03


## [0.1.0] - 2026-02-03

### Initial Release

First public release of Roblox MCP - AI-powered Roblox Studio integration.

#### Basic

- Create, delete, clone, and move parts and models
- Write and edit scripts with AI assistance
- Change properties like color, size, and position
- Work with selected items in Studio
- Add and manage tags for organization
- Control camera view and focus
- View output logs and debug errors

#### Pro

- Bulk operations - create or modify hundreds of objects at once
- Search and insert models from Creator Store
- Environment controls - lighting, weather, time of day
- Terrain generation and modification
- Find spawn positions and empty spaces with raycasting
- Visual debugging with area markers and highlights

#### Highlights

- **Real-time Studio control** - AI commands execute instantly in Roblox Studio
- **Works with popular AI apps** - Claude, Codex CLI, Gemini CLI, and more
- **Secure by design** - Localhost only, no external network access
- **Basic tier included** - Essential tools, free forever

[0.1.0]: https://github.com/hope1026/weppy-roblox-mcp/releases/tag/v0.1.0
