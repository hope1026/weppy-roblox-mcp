# Privacy and Telemetry

WEPPY uses privacy-conscious telemetry to understand product usage, reliability, platform coverage, and feature adoption.

## Telemetry Provider

The MCP server sends telemetry through Google Analytics 4 Measurement Protocol.

## Telemetry Opt-Out

You can disable telemetry by setting the MCP server environment variable:

```bash
ENABLE_TELEMETRY=false
```

or:

```bash
ENABLE_TELEMETRY=0
```

## Data Collected

When telemetry is enabled, WEPPY sends only product-usage metadata, not Roblox project content.

Telemetry can include:

- Event names
- Command categories
- AI client
- Platform
- Locale and timezone
- MCP server version
- License tier label
- Approximate region derived by Google Analytics
- Pseudonymous random device ID used to recognize repeat usage from the same local installation

Command categories describe which WEPPY feature was used. They do not include your prompt text, script source, file path, or Roblox object path. License tier labels do not include the raw license key.

## Data Not Collected

WEPPY telemetry is not designed to collect:

- Personal information
- Secrets or credentials
- Raw license keys
- AI prompts or chats
- Local file paths or file names
- Script source
- Terminal output
- Screenshots or media files
- Playtest logs
- Roblox project content

Telemetry diagnostics intentionally use broad categories instead of raw user content.

## Device Identifier

WEPPY creates a random local device identifier for telemetry deduplication and aggregate usage reporting. This identifier is pseudonymous and is not your name, email address, Roblox account, or license key.

WEPPY does not register `device_key` as a GA4 custom dimension.

## Local Product Data

WEPPY sync, history, dashboard, and Explorer features may create local files on your machine so the product can work. Those local files are separate from telemetry and are not sent through GA4 telemetry.
