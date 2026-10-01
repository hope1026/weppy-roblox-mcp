# Sync Workflow Reference

WEPPY sync mirrors Roblox Studio content into local files under `weppy-project-sync`.

## Lifecycle

1. Check the connected place with `manage_sync.status_current_place`.
2. Read the effective version 2 policy and capabilities with `manage_sync.policy`.
3. If Sync is Off, the user starts it from the Studio plugin while Studio is in edit mode. MCP and the Dashboard are read-only policy surfaces.
4. Let incremental Studio changes flow to files according to the effective semantic scope direction.
5. Let allowed local file changes become reverse pending changes according to the effective policy.
6. Use Sync history, progress, and read/write actions for inspection and targeted edits.
7. Stop Sync in the Studio plugin before changing project root or when Studio disconnects.

## Play And Edit Changes

Ordinary edit tools change the Edit DataModel. The Test Agent works in the temporary Play runtime. Runtime-only changes are not promoted to Edit files or sync history.

During Play, Sync pauses change sending. When the last test connection exits, Sync compares the final Edit state with changes it previously confirmed as sent. It then follows the effective direction and apply policy before normal sending resumes. Forward changes use Edit as the source, reverse scopes preserve the authorized local source, and bidirectional conflicts still require the existing review choice. Play does not grant permission to auto-apply local deletions to Studio.

Check `manage_sync.status_current_place` or the Plugin and Dashboard Sync details for the separate change-sending status: `inactive`, `active`, `paused_play`, `reconciling`, `blocked`, or `unknown`. `blocked` includes a reason to investigate. `active` means sending is enabled, not that every mirrored file is current. A missing report or ended connection is `unknown`; inspect the current Studio session before relying on local files.

## Safe Defaults

Sync starts Off on first use. Start on connection is also Off, and the first-use workflow is Studio First. Saved settings always take precedence after the user saves a value, including explicit Off and false values. Basic resolves to the Studio-to-local capability; Pro can use additional directions without silently changing the stored policy.

Local file deletion does not remove a Studio instance by default. Applying local deletion to Studio requires an additional opt-in, and that setting is separate from UI Studio history cleanup.

## Detector And Project Root Recovery

Reverse detection uses a snapshot scanner, not an OS watcher. If status shows an inactive or suspended detector after full sync, run the supported manual rescan or restart path before editing local files. Changing the Dashboard project root stops active sync and starts a fresh full sync in the new root; it does not move or delete the previous sync directory.

## Workflows And Semantic Scopes

The Studio plugin offers these workflows:

- Studio First
- Bidirectional Review
- Local Code, Studio World
- Custom

Custom configures these semantic scope keys:

- `scriptSource`: Script source text.
- `properties`: Instance properties, attributes, tags, and value content.
- `structure`: Instance creation, deletion, reparenting, and ordering.
- `serviceProperties`: supported root service properties.

Direction values:

- `forward`: Studio is authoritative.
- `reverse`: local files are authoritative.
- `bidirectional`: both sides can change; conflicts require resolution.

Content Changes and Structure Changes application modes are reported separately from scope direction. Treat them as application behavior, not additional scopes.

Policy editing belongs to the Studio plugin. Use `manage_sync.policy` to explain the current effective policy and capability, but do not attempt to write it through MCP or the Dashboard.

## Version Boundary

The WEPPY MCP Server and WEPPY Roblox Studio Plugin must come from the same release and use command protocol version 4. If the connection reports a mismatch, do not start Sync. Tell the user to update both together and restart Roblox Studio before reconnecting.

## Multi-Place

The project sync root is `${resolvedProjectRoot}/weppy-project-sync`. Place data is isolated in `place_<id>/` directories. The runtime keeps one active project sync root, stores place metadata separately, and keeps up to five synced Places active in memory before older contexts are evicted.
