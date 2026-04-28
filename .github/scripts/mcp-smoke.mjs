#!/usr/bin/env node

/**
 * MCP server smoke test.
 *
 * 배포된 @weppy/roblox-mcp 를 stdio 로 띄워 initialize + tools/list 를 실제로 주고받는다.
 * 정상 응답이 오면 0, 크래시·에러·timeout 이면 1.
 *
 * v2.6.3 같은 startup crash (예: "input_schema does not support oneOf/allOf/anyOf")
 * 를 public install-test 단계에서 바로 잡아내기 위한 회귀 테스트.
 *
 * Usage:
 *   node mcp-smoke.mjs
 *
 * Env:
 *   MCP_COMMAND   기본 "npx"
 *   MCP_ARGS      기본 "-y @weppy/roblox-mcp@latest"  (공백 분리)
 *   MCP_TIMEOUT   기본 60000 (ms)
 */

import { spawn } from 'node:child_process';
import { once } from 'node:events';

const COMMAND = process.env.MCP_COMMAND || 'npx';
// Default to `@latest` so npx is forced to resolve from the registry instead of
// reusing whatever stale version sits in the runner's npm cache (the v2.0.8
// regression that users hit when bare `@weppy/roblox-mcp` was published).
const ARGS = (process.env.MCP_ARGS || '-y @weppy/roblox-mcp@latest').split(/\s+/).filter(Boolean);
const TIMEOUT_MS = Number(process.env.MCP_TIMEOUT || 60_000);

console.log(`[smoke] launching: ${COMMAND} ${ARGS.join(' ')}`);

const child = spawn(COMMAND, ARGS, {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, NODE_ENV: 'production' },
});

let exited = false;
let timeoutHandle = null;

const fail = (msg, code = 1) => {
  console.error(`[smoke] ❌ ${msg}`);
  if (!exited) {
    try { child.kill('SIGKILL'); } catch {}
  }
  process.exit(code);
};

timeoutHandle = setTimeout(() => {
  fail(`timeout after ${TIMEOUT_MS}ms waiting for MCP responses`);
}, TIMEOUT_MS);

child.on('exit', (code, signal) => {
  exited = true;
  if (!doneOk) {
    fail(`MCP server exited unexpectedly (code=${code}, signal=${signal})`);
  }
});

child.stderr.on('data', (chunk) => {
  process.stderr.write(`[mcp-stderr] ${chunk}`);
});

// stdout 라인 버퍼
let buffer = '';
const pending = new Map(); // id -> resolve

child.stdout.on('data', (chunk) => {
  buffer += chunk.toString('utf8');
  let newlineIndex;
  while ((newlineIndex = buffer.indexOf('\n')) !== -1) {
    const line = buffer.slice(0, newlineIndex).trim();
    buffer = buffer.slice(newlineIndex + 1);
    if (!line) continue;

    let msg;
    try {
      msg = JSON.parse(line);
    } catch {
      // stdio 에 섞여 나오는 non-JSON 라인은 무시 (로깅용)
      process.stderr.write(`[mcp-stdout-nonjson] ${line}\n`);
      continue;
    }

    if (msg.id != null && pending.has(msg.id)) {
      const resolve = pending.get(msg.id);
      pending.delete(msg.id);
      resolve(msg);
    }
  }
});

function sendRequest(id, method, params) {
  return new Promise((resolve) => {
    pending.set(id, resolve);
    const payload = JSON.stringify({ jsonrpc: '2.0', id, method, params });
    child.stdin.write(payload + '\n');
  });
}

function sendNotification(method, params) {
  const payload = JSON.stringify({ jsonrpc: '2.0', method, params });
  child.stdin.write(payload + '\n');
}

let doneOk = false;

(async () => {
  // 1) initialize
  const initResp = await sendRequest(1, 'initialize', {
    protocolVersion: '2024-11-05',
    capabilities: {},
    clientInfo: { name: 'mcp-smoke', version: '1.0.0' },
  });

  if (initResp.error) {
    fail(`initialize returned error: ${JSON.stringify(initResp.error)}`);
  }
  if (!initResp.result || !initResp.result.serverInfo) {
    fail(`initialize response malformed: ${JSON.stringify(initResp)}`);
  }
  console.log(`[smoke] ✓ initialize (server: ${initResp.result.serverInfo.name} ${initResp.result.serverInfo.version})`);

  sendNotification('notifications/initialized');

  // 2) tools/list
  const toolsResp = await sendRequest(2, 'tools/list', {});
  if (toolsResp.error) {
    fail(`tools/list returned error: ${JSON.stringify(toolsResp.error)}`);
  }
  const tools = toolsResp.result && toolsResp.result.tools;
  if (!Array.isArray(tools) || tools.length === 0) {
    fail(`tools/list returned no tools: ${JSON.stringify(toolsResp.result)}`);
  }
  console.log(`[smoke] ✓ tools/list returned ${tools.length} tools`);

  // 기본 schema 위생 체크: top-level oneOf/allOf/anyOf 가 없어야 한다 (v2.6.3 regression)
  const offenders = [];
  for (const tool of tools) {
    const schema = tool.inputSchema || {};
    for (const key of ['oneOf', 'allOf', 'anyOf']) {
      if (schema[key] != null) {
        offenders.push(`${tool.name}.${key}`);
      }
    }
  }
  if (offenders.length > 0) {
    fail(`top-level schema combinator present (breaks strict MCP clients): ${offenders.join(', ')}`);
  }
  console.log('[smoke] ✓ no top-level oneOf/allOf/anyOf in tool schemas');

  doneOk = true;
  clearTimeout(timeoutHandle);
  console.log('[smoke] ✅ all checks passed');

  try { child.kill('SIGTERM'); } catch {}
  // give process a tick to exit cleanly
  setTimeout(() => process.exit(0), 500);
})().catch((err) => {
  fail(`unexpected error: ${err && err.stack ? err.stack : err}`);
});
