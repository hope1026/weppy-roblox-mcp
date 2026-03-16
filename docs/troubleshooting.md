# Troubleshooting

## Plugin not connecting

**Symptom:** "Connection failed" or plugin shows disconnected in Roblox Studio.

1. Make sure the MCP server is running: `npx -y @weppy/roblox-mcp`
2. In Roblox Studio: Plugins tab → W-MCP → Connect
3. Confirm nothing is blocking `localhost:3002` (firewall, antivirus, VPN)
4. Try restarting both Roblox Studio and the MCP server

## MCP server not found by AI client

1. Verify your AI client config uses the correct command: `npx -y @weppy/roblox-mcp`
2. Ensure Node.js >= 18 is installed: `node --version`
3. On Windows, try running your terminal as Administrator if permission errors appear
4. Check the client-specific setup guide in [Installation](en/installation/README.md)

## "Pro feature required" error

The action you're requesting requires the Pro tier.
See [Pro Upgrade Guide](en/pro-upgrade.md) for details.

## Sync not working

1. Check sync status: ask AI `manage_sync status`
2. Ensure the plugin is connected before starting sync
3. For reverse sync (file → Studio), confirm Pro tier is active
4. Check that the local sync folder exists and has write permissions

## Common error messages

| Error | Cause | Fix |
|-------|-------|-----|
| `ECONNREFUSED localhost:3002` | MCP server not running | Run `npx -y @weppy/roblox-mcp` |
| `Timeout waiting for plugin` | Studio plugin not connected | Click Connect in plugin panel |
| `Rate limit exceeded` | Over 450 requests/min | Reduce or batch requests |
| `Forbidden path` | Accessing CoreGui/CorePackages | Use valid instance paths only |
| `Place ID mismatch` | Wrong place connected | Reconnect from correct Studio session |

## Still stuck?

[Open a Discussion](https://github.com/hope1026/weppy-roblox-mcp/discussions) and include:
- OS and Node.js version
- AI client and version
- Error message or logs
- Steps you already tried
