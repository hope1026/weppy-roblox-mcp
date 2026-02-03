import { LogLevel } from '../types/index.js';
export declare class Logger {
    private static currentLevel;
    static setLevel(level: LogLevel): void;
    static getLevel(): LogLevel;
    private static shouldLog;
    private static getTimestamp;
    private static formatData;
    private static log;
    static debug(message: string, data?: unknown): void;
    static info(message: string, data?: unknown): void;
    static warn(message: string, data?: unknown): void;
    static error(message: string, error?: Error | unknown): void;
}
export default Logger;
//# sourceMappingURL=logger.d.ts.map