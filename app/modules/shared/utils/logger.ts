/**
 * Logger Utility
 *
 * Structured logging with configurable log levels
 */

import type { LogLevel } from '~/modules/shared/types';

const LOG_LEVEL = (process.env.LOG_LEVEL || 'info') as LogLevel;

const LOG_LEVELS: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

interface LogEntry {
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  timestamp: string;
}

export interface Logger {
  debug: (message: string, context?: Record<string, unknown>) => void;
  info: (message: string, context?: Record<string, unknown>) => void;
  warn: (message: string, context?: Record<string, unknown>) => void;
  error: (message: string, context?: Record<string, unknown>) => void;
}

export function createLogger(context?: string): Logger {
  const shouldLog = (level: LogLevel): boolean => {
    return LOG_LEVELS[level] >= LOG_LEVELS[LOG_LEVEL];
  };

  const log = (
    level: LogLevel,
    message: string,
    extraContext?: Record<string, unknown>,
  ): void => {
    if (!shouldLog(level)) {
      return;
    }

    const entry: LogEntry = {
      level,
      message,
      context: context ? { ...extraContext, _context: context } : extraContext,
      timestamp: new Date().toISOString(),
    };

    const logMsg = `[${entry.timestamp}] [${level.toUpperCase()}]${context ? ` [${context}]` : ''} ${message}`;
    const logData = entry.context || undefined;

    switch (level) {
      case 'debug':
        console.debug(logMsg, logData);
        break;
      case 'info':
        console.info(logMsg, logData);
        break;
      case 'warn':
        console.warn(logMsg, logData);
        break;
      case 'error':
        console.error(logMsg, logData);
        break;
    }
  };

  return {
    debug: (message, context) => log('debug', message, context),
    info: (message, context) => log('info', message, context),
    warn: (message, context) => log('warn', message, context),
    error: (message, context) => log('error', message, context),
  };
}
