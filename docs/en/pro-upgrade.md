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

### Broader advanced capabilities

Terrain generation, asset search, spatial analysis, animation, audio, and production-scale automation.

## Buy and Activate

### Step 1: Buy a Pro subscription license on Gumroad

1. Go to [Gumroad - Weppy Roblox Plugin](https://gumroad.com/l/faccjs?utm_source=github&utm_medium=repo&utm_campaign=pro_upgrade_md)
2. Complete your Pro subscription license purchase
3. Copy the license key you receive after purchase

You only need to activate the license once, either in the plugin or in the dashboard. Both surfaces share the same MCP local license state, so once you activate in one place, the same status appears in the other.

### Activate in the plugin

1. Open **W-MCP** in Roblox Studio and connect to the MCP server.
2. Open **Settings > License** in the plugin.
3. Paste your purchased key into the `License key` field.
4. Click **Activate** to activate the license.
5. If the status does not update immediately, click **Refresh**.
6. When activation succeeds, the status changes from Basic to Pro and Pro features become available.

![Plugin license activation screen](../assets/screenshots/license/license-plugin.png)

### Activate in the dashboard

1. Start the MCP server, then open **Settings > License** in the dashboard.
2. Confirm that the provider is set to `gumroad`.
3. Paste your purchased key into the `License Key` field.
4. Click **Activate License** to activate the license.
5. If needed, use **Refresh License** to fetch the latest status.

![Dashboard license activation screen](../assets/screenshots/license/license-dashboard.png)

### After activation

- If the license status is shown as `active` or `grace`, Pro features are available.
- The plugin and dashboard share the same license state, so activating in one place is reflected in the other.
- Use **Refresh** or **Refresh License** whenever you want to check the latest status again.

## Feature Comparison

| Feature | Basic | Pro |
|---------|:-----:|:---:|
| Script, Instance, Property management | ✅ Full access | ✅ Full access |
| Selection, Tag, Camera, Log | ✅ Full access | ✅ Full access |
| Sync Direction | Studio → Local (one-way) | Bidirectional |
| Per-type Sync Direction | ❌ | ✅ Scripts / Values / Containers / Data / Services |
| Per-type Apply Mode | ❌ | ✅ Auto / Manual |
| Change History | ❌ | ✅ |
| Multi-place Sync | ❌ | ✅ Up to 3 places, each with isolated storage |
| Playtest Control (Play/Stop/Pause/Resume) | ❌ | ✅ |
| Advanced tool coverage | Core set | Broader advanced set |
| AI token efficiency | Standard | Better with bulk / high-leverage actions |
