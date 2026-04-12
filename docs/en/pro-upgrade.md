# Pro Upgrade Guide

## Why Pro?

### Bidirectional Sync built for real development workflows

Pro Sync goes beyond one-way export. Edit scripts locally and push them to Studio. Make changes in Studio and pull them back to disk. Pro keeps both sides in sync.

- **Bidirectional Sync** — Changes flow in both directions between Studio and local files.
- **Per-type Direction** — Set direction independently for Scripts, Values, Containers, Data, and Services.
- **Per-type Apply Mode** — Choose Auto or Manual per type to balance speed and control.
- **Full Sync / Resync** — Rebuild clean project state on demand after large changes or reconnects.
- **Change History** — Track what changed, when, and in which direction before applying.
- **Multi-place Sync** — Sync up to 3 Roblox Places simultaneously, each with isolated storage and its own change history.

### Save AI tokens with high-leverage workflows

Bulk and advanced actions reduce repetitive round trips — do more per prompt.

### Let AI run and verify playtests directly

AI can control Roblox Studio playtests directly. It can start and stop Play (F5) or Run (F8), inject test scripts, collect logs, and generate local reports automatically.

- "Start a Run-mode playtest and check whether the NPC reaches the target."
- "Write a test that verifies the SpawnLocation is above the ground and run it."
- "Validate that the script I just changed runs without errors in playtest."

### More Pro-only features

Pro unlocks additional features beyond the core workflow.

- **Bulk operations** — Create, modify, or delete multiple instances in a single request
- **Terrain generation** — Fill with block, ball, cylinder, wedge, and replace materials
- **Asset search/insert** — Search the Roblox marketplace and insert assets directly
- **Spatial analysis** — Raycast, find ground, flat area search, collision checks
- **Environment control** — Lighting, atmosphere, sky, and time-of-day settings
- **Audio/Animation** — Sound playback and animation load/play

## Buy and Activate

### Step 1: Buy a Pro subscription license on Gumroad

1. Go to [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md)
2. Complete your Pro subscription license purchase
3. Copy the license key you receive after purchase

You only need to activate the license once, either in the plugin or in the dashboard. Both surfaces share the same MCP local license state, so once you activate in one place, the same status appears in the other.

### Activate in the plugin

1. Open **WEPPY** in Roblox Studio and connect to the MCP server.
2. Open **Settings > License** in the plugin.
3. Paste your purchased key into the `License key` field.
4. Click **Activate** to activate the license.
5. If the status does not update immediately, click **Refresh**.
6. When activation succeeds, the status changes from Basic to Pro and Pro features become available.

![WEPPY Plugin license activation screen](../assets/screenshots/plugin/license/plugin-license-screen.png)

### Activate in the dashboard

1. Start the MCP server, then open **Settings > License** in the dashboard.
2. Confirm that the provider is set to `gumroad`.
3. Paste your purchased key into the `License Key` field.
4. Click **Activate License** to activate the license.
5. If needed, use **Refresh License** to fetch the latest status.

![WEPPY Dashboard license activation screen](../assets/screenshots/plugin/license/dashboard-license-screen.png)

### After activation

- If the license status is shown as `active` or `grace`, Pro features are available.
- The plugin and dashboard share the same license state, so activating in one place is reflected in the other.
- Use **Refresh** or **Refresh License** whenever you want to check the latest status again.

## Feature Comparison

| Feature | Basic | Pro |
|---------|:-----:|:---:|
| Script create/edit | ✅ | ✅ |
| Instance create/delete/move | ✅ | ✅ + bulk operations |
| Property read/write | ✅ | ✅ + bulk changes |
| Selection, tags, search | ✅ | ✅ |
| Camera control | ✅ | ✅ |
| Log monitoring | ✅ | ✅ |
| Luau code execution | ✅ | ✅ |
| Project sync | Studio → Local one-way | Bidirectional + per-type direction/mode |
| Multi-place sync | — | Up to 3 Places simultaneously |
| Change history | — | Track changes before applying |
| Playtest control | — | Play / stop / pause / resume + automated tests |
| Terrain generation/editing | — | Block, ball, cylinder, wedge, material replace |
| Asset search/insert | — | Search Roblox marketplace and insert directly |
| Spatial analysis | — | Raycast, find ground, collision checks |
| Environment control | — | Lighting, atmosphere, sky, time of day |
| Audio / Animation | — | Sound playback, animation load/play |
| AI token efficiency | Per-action calls | Fewer calls with bulk actions |
