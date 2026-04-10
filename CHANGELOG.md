# Changelog

All notable changes to this project will be documented in this file.







## [2.4.0] - 2026-04-10

### ⚠️ BREAKING CHANGES

- **Tool statistics and changelog history format updated** — The internal storage format for tool execution statistics (`tool-stats.json`) and changelog history has changed. Existing data will be automatically reset on first launch after upgrading. You will start with fresh statistics — previous history is not migrated.

### Features

- **Dashboard "What's New" page** — A new announcements page in the dashboard keeps you informed about important changes, breaking updates, and tips. Accessible via the bell icon in the sidebar, with unread indicators for new announcements.
- **Improved blocked-tool feedback** — When a Pro-only tool is used on Basic tier, the dashboard and plugin now show clearer outcome details (fallback, unsupported, failed) instead of generic error labels.
- **Connection stability improvements** — Added handshake timeout, connection cancel button, and license reconnect race condition fixes for more reliable Studio connections.

### Bug Fixes

- **Fix `ws` module not found on install** — Replaced dynamic `require("ws")` with a static import, resolving installation failures where the `ws` dependency could not be located by the bundler.


## [2.3.1] - 2026-04-07

### Features

- **WROX Sourcemap support** — Added sourcemap builder that generates and refreshes sourcemaps automatically after sync, enabling luau-lsp integration for WROX users
- **Dashboard improvements** — Added agent activity indicators, last-seen/last-command columns, process termination, and active place path display to the connection and sync dashboards

### Stability

- **Sourcemap generation hardened** — Fixed multiple edge cases around sourcemap refresh timing, redundant rebuilds, and state persistence to ensure reliable sourcemap output
- **Sync reliability improvements** — Improved sync history diff recording, collision index mapping, and error handling across sync and camera operations


## [2.3.0] - 2026-04-05

### Performance

- **Dramatically faster tool action execution** — Switched MCP ↔ Plugin communication from polling to streaming, eliminating round-trip latency and significantly improving response throughput

### Stability

- **Hardened connection management** — Streaming-based transport replaces polling with a real-time bidirectional channel, reducing dropped connections and improving reconnect resilience

### Bug Fixes

- **Prevent OOM on large history files** — Tool history and sync changelog reads now use reverse-chunk tail scanning instead of loading the full file into memory, preventing out-of-memory crashes on long-running sessions
- **Auto-trim history files** — History files are now automatically trimmed when they exceed 2 MB, keeping disk usage bounded without manual cleanup


## [2.2.2] - 2026-04-03

### Features

- add configurable MCP message polling interval and related options to plugin UI


## [2.2.1] - 2026-04-03

### Features

- implement command acknowledgment and in-flight request tracking to ensure reliable command delivery and timeout handling


## [2.2.0] - 2026-04-03

### Sync Stability

- Redesign sync algorithm for large-scale instances — snapshot-based scanner replaces legacy chokidar detector for improved reliability
- Add throttled sync initialization with retry logic and session cleanup
- Harden scanner lifecycle transitions: startup cancellation, resume, finalize, and queue ordering
- Close full-sync detector lifecycle races and preserve snapshot kind transitions
- Improve reverse sync path resolution with snapshot-based scanning

### Features

- Add client-mode idle watchdog with configurable timeout for automatic shutdown
- Separate health check and polling failure thresholds for better connection state management
- Add upstream permanent failure detection with graceful shutdown callback

### Bug Fixes

- Fix cancel-pending license state incorrectly treated as inactive
- Fix detector activity reporting and status exposure in idle responses


## [2.1.3] - 2026-03-31

### Stability Improvements

- Improve overall system stability and reliability

## [2.1.2] - 2026-03-31

### Stability Improvements

- Improve overall system stability and reliability


## [2.1.1] - 2026-03-29

### Bug Fixes

- fix Windows install script (`install.ps1`) to resolve `npm.cmd` execution policy issues by introducing `Invoke-Npm` wrapper


## [2.1.0] - 2026-03-29

### ⚠️ BREAKING CHANGES

- **Sync directory renamed**: `roblox-project-sync/` → `wrox-project-sync/`. All existing sync data will be stored under the new directory. The old `roblox-project-sync/` directory is no longer used.
- **App data directory renamed**: `~/.weppy-roblox-mcp` → `~/.wrox-data`. The old `~/.weppy-roblox-mcp` directory is no longer recognized.
- **Project sync resets from Studio**: After upgrading, project sync data is re-initialized from Studio as the source of truth. Any local-only changes not yet synced back to Studio will be lost — ensure your Studio state is up to date before upgrading.
- **License downgrade requires plugin action**: If your license changes from Pro to Basic, you **must** click "Refresh" in the plugin UI or deactivate and reactivate the plugin for the tier change to take effect. Without this step, the plugin may continue to report the previous tier.

### Features

- **Dashboard project root switching**: Added the ability to change the project root directory directly from the Dashboard overview page, with restart and path migration support.
- **Dashboard Place UI improvements**: Redesigned the Place summary display for better visual clarity and usability.
- Dashboard place summary API and persistence for active project state
- Sync root switch flow with configurable overrides and path migration

### Bug Fixes

- Harden sync-root switching with error handling and fallback resolution
- Preserve and surface dashboard sync-root restart errors
- Normalize observability sync roots and honor override root in runtime paths
- Cover remaining wrox runtime paths

### Documentation

- Expand documentation with project rationale, use cases, FAQ, and license details across all locales
- Update sync data path documentation to reflect project-root-based storage


## [2.0.10] - 2026-03-28

### Improved

- Improved sync logic with play mode detection, suppression, and post-play reconciliation.
- Enhanced plugin UI for sync collision resolution.


## [2.0.9] - 2026-03-27

### Improved

- Enhanced stability and reliability


## [2.0.8] - 2026-03-27

### Improved

- Updated dashboard settings toggles to use switches for clearer controls.
- Improved overall stability across MCP and plugin workflows.
- Fixed an issue where the MCP server could fail to shut down cleanly.


## [2.0.7] - 2026-03-25

### What's New

- Published WROX Explorer to VS Code Marketplace and Open VSX Registry. Install directly from your editor's extension marketplace.
- Updated installation guide to reflect new marketplace links for Roblox Explorer.


## [2.0.6] - 2026-03-25

### Improved

- Enhanced overall stability and reliability


## [2.0.5] - 2026-03-24

### Bug Fixes

- resolve sync path resolution errors when launched from filesystem root


## [2.0.4] - 2026-03-24

### Bug Fixes

- Fix deployment script bug.


## [2.0.3] - 2026-03-24

### Bug Fixes

- **Fix install script failures on macOS/Linux**: Resolved a path resolution bug in `install.sh` that caused the installer to fail when the Claude or Cursor config directory did not exist yet. The script now creates the config directory automatically before writing the MCP entry.


## [2.0.2] - 2026-03-24

### Features

- **New one-line installation method**: Install the MCP server and Roblox Studio plugin with a single command. On macOS/Linux run `curl -fsSL https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.sh | bash`, on Windows run `irm https://raw.githubusercontent.com/hope1026/weppy-roblox-mcp/main/install.ps1 | iex`. The installer auto-detects the Claude/Cursor config path, injects the MCP entry, and opens the plugin install page in your browser.
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
