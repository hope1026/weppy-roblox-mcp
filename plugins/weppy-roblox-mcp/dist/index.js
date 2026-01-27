#!/usr/bin/env node
import RobloxMCPServer from './server.js';
import Logger from './utils/logger.js';
import { LogLevel } from './types/index.js';
function parseConfig() {
    const config = {
        httpPort: parseInt(process.env.HTTP_PORT || '3002', 10),
        httpHost: process.env.HTTP_HOST || '127.0.0.1',
        logLevel: process.env.LOG_LEVEL || LogLevel.INFO,
        requestTimeout: parseInt(process.env.REQUEST_TIMEOUT || '30000', 10),
        maxRequestsPerMinute: parseInt(process.env.MAX_REQUESTS_PER_MINUTE || '450', 10),
    };
    Logger.setLevel(config.logLevel);
    return config;
}
async function main() {
    try {
        const config = parseConfig();
        Logger.info('Weppy Roblox MCP Server', {
            version: '0.1.0',
            config: {
                httpHost: config.httpHost,
                httpPort: config.httpPort,
                logLevel: config.logLevel,
                requestTimeout: config.requestTimeout,
                maxRequestsPerMinute: config.maxRequestsPerMinute,
            },
        });
        const server = new RobloxMCPServer(config);
        await server.start();
        const shutdown = async (signal) => {
            Logger.info(`Received ${signal}, shutting down gracefully`);
            try {
                await server.stop();
                process.exit(0);
            }
            catch (error) {
                Logger.error('Error during shutdown', error);
                process.exit(1);
            }
        };
        process.on('SIGINT', () => shutdown('SIGINT'));
        process.on('SIGTERM', () => shutdown('SIGTERM'));
        process.on('uncaughtException', (error) => {
            Logger.error('Uncaught exception', error);
            process.exit(1);
        });
        process.on('unhandledRejection', (reason) => {
            Logger.error('Unhandled rejection', reason);
            process.exit(1);
        });
    }
    catch (error) {
        Logger.error('Failed to start server', error);
        process.exit(1);
    }
}
main();
//# sourceMappingURL=index.js.map