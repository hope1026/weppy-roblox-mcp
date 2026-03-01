# Changelog

All notable changes to this project will be documented in this file.










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

[0.1.0]: https://github.com/hope1026/roblox-mcp/releases/tag/v0.1.0
