import { LogLevel } from '../types/index.js';
const COLORS = {
    reset: '\x1b[0m',
    debug: '\x1b[36m',
    info: '\x1b[32m',
    warn: '\x1b[33m',
    error: '\x1b[31m',
    gray: '\x1b[90m',
};
export class Logger {
    static currentLevel = LogLevel.INFO;
    static {
        const envLevel = process.env.LOG_LEVEL?.toLowerCase();
        if (envLevel && Object.values(LogLevel).includes(envLevel)) {
            this.currentLevel = envLevel;
        }
    }
    static setLevel(level) {
        this.currentLevel = level;
    }
    static getLevel() {
        return this.currentLevel;
    }
    static shouldLog(level) {
        const levels = [LogLevel.DEBUG, LogLevel.INFO, LogLevel.WARN, LogLevel.ERROR];
        const currentIndex = levels.indexOf(this.currentLevel);
        const messageIndex = levels.indexOf(level);
        return messageIndex >= currentIndex;
    }
    static getTimestamp() {
        const now = new Date();
        return now.toISOString();
    }
    static formatData(data) {
        if (data === undefined || data === null) {
            return '';
        }
        if (data instanceof Error) {
            return `\n  Error: ${data.message}\n  Stack: ${data.stack}`;
        }
        if (typeof data === 'object') {
            try {
                return '\n  ' + JSON.stringify(data, null, 2).replace(/\n/g, '\n  ');
            }
            catch {
                return '\n  [Circular or non-serializable object]';
            }
        }
        return ` ${String(data)}`;
    }
    static log(level, message, data) {
        if (!this.shouldLog(level)) {
            return;
        }
        const timestamp = this.getTimestamp();
        const color = COLORS[level];
        const formattedData = this.formatData(data);
        const logMessage = `${COLORS.gray}[${timestamp}]${COLORS.reset} ${color}[${level.toUpperCase()}]${COLORS.reset} ${message}${formattedData}`;
        switch (level) {
            case LogLevel.ERROR:
                console.error(logMessage);
                break;
            case LogLevel.WARN:
                console.warn(logMessage);
                break;
            case LogLevel.DEBUG:
            case LogLevel.INFO:
            default:
                console.log(logMessage);
                break;
        }
    }
    static debug(message, data) {
        this.log(LogLevel.DEBUG, message, data);
    }
    static info(message, data) {
        this.log(LogLevel.INFO, message, data);
    }
    static warn(message, data) {
        this.log(LogLevel.WARN, message, data);
    }
    static error(message, error) {
        this.log(LogLevel.ERROR, message, error);
    }
}
export default Logger;
//# sourceMappingURL=logger.js.map