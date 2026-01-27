import express from 'express';
import { randomUUID } from 'crypto';
import { createServer } from 'http';
import Logger from './utils/logger.js';
export class HTTPBridge {
    app;
    server = null;
    config;
    commandQueue = new Map();
    pendingCommands = [];
    sseClients = new Set();
    startTime = Date.now();
    requestCounts = new Map();
    cachedSelection = null;
    isClientMode = false;
    baseUrl = '';
    constructor(config) {
        this.config = config;
        this.app = express();
        this.baseUrl = `http://${config.httpHost}:${config.httpPort}`;
        this.setupMiddleware();
        this.setupRoutes();
    }
    setupMiddleware() {
        this.app.use(express.json());
        this.app.use((_req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3002');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        this.app.use((req, res, next) => {
            if (!this.checkRateLimit(req.ip || 'unknown')) {
                res.status(429).json({
                    error: 'Rate limit exceeded',
                    limit: this.config.maxRequestsPerMinute,
                });
                return;
            }
            next();
        });
        this.app.use((req, _res, next) => {
            Logger.debug(`${req.method} ${req.path}`, { ip: req.ip });
            next();
        });
    }
    checkRateLimit(ip) {
        const now = Date.now();
        const oneMinuteAgo = now - 60000;
        let timestamps = this.requestCounts.get(ip) || [];
        timestamps = timestamps.filter((t) => t > oneMinuteAgo);
        if (timestamps.length >= this.config.maxRequestsPerMinute) {
            return false;
        }
        timestamps.push(now);
        this.requestCounts.set(ip, timestamps);
        return true;
    }
    setupRoutes() {
        this.app.get('/events', (req, res) => this.handleSSEConnection(req, res));
        this.app.get('/commands', (_req, res) => this.handleCommandsPoll(res));
        this.app.post('/result', (req, res) => this.handleResult(req, res));
        this.app.post('/selection-update', (req, res) => this.handleSelectionUpdate(req, res));
        this.app.post('/execute', (req, res) => this.handleExecute(req, res));
        this.app.get('/cached-selection', (req, res) => this.handleCachedSelectionRequest(req, res));
        this.app.get('/status', (_req, res) => this.handleStatus(res));
        this.app.options('*', (_req, res) => {
            res.sendStatus(200);
        });
    }
    handleSSEConnection(_req, res) {
        Logger.info('Plugin connected via SSE');
        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        this.sseClients.add(res);
        this.sendSSEEvent(res, {
            event: 'command',
            id: randomUUID(),
            data: {
                action: 'connected',
                requestId: randomUUID(),
                params: {
                    serverVersion: '0.1.0',
                    timestamp: Date.now(),
                },
            },
        });
        const pingInterval = setInterval(() => {
            this.sendSSEEvent(res, {
                event: 'command',
                id: randomUUID(),
                data: {
                    action: 'keepalive',
                    requestId: randomUUID(),
                    params: { timestamp: Date.now() },
                },
            });
        }, 30000);
        res.on('close', () => {
            Logger.info('Plugin disconnected from SSE');
            clearInterval(pingInterval);
            this.sseClients.delete(res);
        });
    }
    sendSSEEvent(res, event) {
        const data = JSON.stringify(event.data);
        res.write(`event: ${event.event}\n`);
        res.write(`id: ${event.id}\n`);
        res.write(`data: ${data}\n\n`);
    }
    handleCommandsPoll(res) {
        const commands = [...this.pendingCommands];
        this.pendingCommands = [];
        Logger.debug('Commands poll', {
            commandsReturned: commands.length,
        });
        res.json(commands);
    }
    broadcastCommand(command) {
        Logger.debug('Broadcasting command', {
            action: command.data.action,
            requestId: command.data.requestId,
            sseClients: this.sseClients.size,
        });
        this.pendingCommands.push(command);
        for (const client of this.sseClients) {
            this.sendSSEEvent(client, command);
        }
    }
    handleResult(req, res) {
        const result = req.body;
        Logger.debug('Received result from plugin', {
            requestId: result.requestId,
            success: result.success,
        });
        const command = this.commandQueue.get(result.requestId);
        if (!command) {
            Logger.warn('Received result for unknown request', {
                requestId: result.requestId,
            });
            res.status(404).json({ error: 'Unknown request ID' });
            return;
        }
        clearTimeout(command.timeoutId);
        if (result.success) {
            command.resolve(result);
        }
        else {
            command.reject(new Error(result.error || 'Unknown error'));
        }
        this.commandQueue.delete(result.requestId);
        res.json({ status: 'ok' });
    }
    handleSelectionUpdate(req, res) {
        try {
            const body = req.body;
            if (!body || !Array.isArray(body.selection) || typeof body.count !== 'number') {
                Logger.warn('Invalid selection update request', { body });
                res.status(400).json({ error: 'Invalid request body' });
                return;
            }
            this.cachedSelection = {
                selection: body.selection,
                count: body.count,
                timestamp: Date.now(),
            };
            Logger.debug('Selection cache updated', {
                count: body.count,
                timestamp: this.cachedSelection.timestamp,
            });
            res.json({
                status: 'ok',
                timestamp: this.cachedSelection.timestamp,
            });
        }
        catch (error) {
            Logger.error('Error handling selection update', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
    async handleExecute(req, res) {
        try {
            const { action, requestId, params } = req.body;
            if (!action) {
                res.status(400).json({ error: 'Missing action' });
                return;
            }
            Logger.debug('Received execute request from client mode', {
                action,
                requestId,
            });
            const result = await this.executeCommandLocally(action, params, requestId);
            res.json(result);
        }
        catch (error) {
            Logger.error('Execute request failed', error);
            res.status(500).json({
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            });
        }
    }
    async executeCommandLocally(action, params, requestId) {
        Logger.debug('Executing command locally', { action, requestId });
        const resultPromise = new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                this.commandQueue.delete(requestId);
                reject(new Error(`Command timeout after ${this.config.requestTimeout}ms: ${action}`));
            }, this.config.requestTimeout);
            const command = {
                requestId,
                action,
                params,
                timestamp: Date.now(),
                resolve,
                reject,
                timeoutId,
            };
            this.commandQueue.set(requestId, command);
        });
        this.broadcastCommand({
            event: 'command',
            id: randomUUID(),
            data: {
                action,
                requestId,
                params,
            },
        });
        return resultPromise;
    }
    handleCachedSelectionRequest(req, res) {
        const maxAge = parseInt(req.query.maxAge) || 30000;
        const cached = this.getCachedSelection(maxAge);
        if (cached) {
            res.json({
                cached: true,
                ...cached,
            });
        }
        else {
            res.json({
                cached: false,
                message: 'No cached selection available',
            });
        }
    }
    handleStatus(res) {
        const status = {
            status: 'online',
            connectedClients: this.sseClients.size,
            queuedCommands: this.commandQueue.size,
            uptime: Date.now() - this.startTime,
            version: '0.1.0',
            isClientMode: this.isClientMode,
        };
        res.json(status);
    }
    getCachedSelection(maxAge = 30000) {
        if (!this.cachedSelection) {
            return null;
        }
        const age = Date.now() - this.cachedSelection.timestamp;
        if (maxAge === 0 || age <= maxAge) {
            return this.cachedSelection;
        }
        return null;
    }
    async executeCommandViaHttp(action, params) {
        const requestId = randomUUID();
        Logger.debug('Executing command via HTTP (client mode)', {
            action,
            requestId,
            baseUrl: this.baseUrl,
        });
        try {
            const response = await fetch(`${this.baseUrl}/execute`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    action,
                    requestId,
                    params,
                }),
            });
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP ${response.status}: ${errorText}`);
            }
            const result = await response.json();
            return result;
        }
        catch (error) {
            Logger.error('HTTP execute command failed', error);
            return {
                requestId,
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
    async executeCommand(action, params) {
        if (this.isClientMode) {
            return this.executeCommandViaHttp(action, params);
        }
        const requestId = randomUUID();
        Logger.debug('Executing command', { action, requestId, params });
        const resultPromise = new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                this.commandQueue.delete(requestId);
                reject(new Error(`Command timeout after ${this.config.requestTimeout}ms: ${action}`));
            }, this.config.requestTimeout);
            const command = {
                requestId,
                action,
                params,
                timestamp: Date.now(),
                resolve,
                reject,
                timeoutId,
            };
            this.commandQueue.set(requestId, command);
        });
        this.broadcastCommand({
            event: 'command',
            id: randomUUID(),
            data: {
                action,
                requestId,
                params,
            },
        });
        return resultPromise;
    }
    async checkExistingServer() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000);
            const response = await fetch(`${this.baseUrl}/status`, {
                signal: controller.signal,
            });
            clearTimeout(timeoutId);
            if (response.ok) {
                const status = await response.json();
                Logger.info('Existing HTTP Bridge detected', {
                    status: status.status,
                    uptime: status.uptime,
                    version: status.version,
                });
                return true;
            }
            return false;
        }
        catch {
            return false;
        }
    }
    async start() {
        const existingServerAvailable = await this.checkExistingServer();
        if (existingServerAvailable) {
            this.isClientMode = true;
            Logger.info('HTTP Bridge running in CLIENT MODE', {
                baseUrl: this.baseUrl,
                reason: 'Existing server detected on port',
            });
            return;
        }
        return new Promise((resolve, reject) => {
            this.server = createServer(this.app);
            this.server.on('error', async (error) => {
                if (error.code === 'EADDRINUSE') {
                    Logger.warn('Port in use, attempting client mode fallback', {
                        port: this.config.httpPort,
                    });
                    await new Promise(r => setTimeout(r, 500));
                    const canConnect = await this.checkExistingServer();
                    if (canConnect) {
                        this.isClientMode = true;
                        Logger.info('HTTP Bridge running in CLIENT MODE (fallback)', {
                            baseUrl: this.baseUrl,
                        });
                        resolve();
                    }
                    else {
                        reject(new Error(`Port ${this.config.httpPort} is in use but server is not responding`));
                    }
                }
                else {
                    reject(error);
                }
            });
            this.server.listen(this.config.httpPort, this.config.httpHost, () => {
                this.isClientMode = false;
                Logger.info('HTTP Bridge started in SERVER MODE', {
                    host: this.config.httpHost,
                    port: this.config.httpPort,
                });
                resolve();
            });
        });
    }
    async stop() {
        Logger.info('Stopping HTTP Bridge', { isClientMode: this.isClientMode });
        if (this.isClientMode) {
            Logger.info('Client mode - nothing to stop');
            return;
        }
        for (const client of this.sseClients) {
            client.end();
        }
        this.sseClients.clear();
        for (const [requestId, command] of this.commandQueue) {
            clearTimeout(command.timeoutId);
            command.reject(new Error('Server shutting down'));
            this.commandQueue.delete(requestId);
        }
        if (this.server) {
            await new Promise((resolve) => {
                this.server.close(() => {
                    Logger.info('HTTP server closed');
                    resolve();
                });
            });
        }
    }
    getIsClientMode() {
        return this.isClientMode;
    }
}
export default HTTPBridge;
//# sourceMappingURL=http-bridge.js.map