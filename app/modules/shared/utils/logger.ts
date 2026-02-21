/**
 * Logger Utility
 *
 * Structured logging with configurable log levels
 */

import type { LogLevel } from '~/modules/shared/types'

const LOG_LEVEL = (import.meta.env.LOG_LEVEL || 'info') as Lowercase<keyof typeof LogLevel>

const LOG_LEVELS: Record<string, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
}

interface LogEntry {
  level: LogLevel
  message: string
  context?: Record<string, unknown>
  timestamp: string
}

export interface Logger {
  debug: (message: string, context?: Record<string, unknown>) => void
  info: (message: string, context?: Record<string, unknown>) => void
  warn: (message: string, context?: Record<string, unknown>) => void
  error: (message: string, context?: Record<string, unknown>) => void
}

export function createLogger(context?: string): Logger {
  const shouldLog = (level: string): boolean => {
    return LOG_LEVELS[level] >= LOG_LEVELS[LOG_LEVEL] || 0
  }

  const log = (level: LogLevel, message: string, extraContext?: Record<string, unknown>): void => {
    if (!shouldLog(level.toLowerCase())) {
      return
    }

    const entry: LogEntry = {
      level,
      message,
      context: context ? { ...extraContext, _context: context } : extraContext,
      timestamp: new Date().toISOString(),
    }

    const logMethod = level.toLowerCase() as keyof typeof console
    console[logMethod](`[${entry.timestamp}] [${level.toUpperCase()}]${context ? ` [${context}]` : ''} ${message}`, entry.context || '')
  }

  return {
    debug: (message, context) => log(LogLevel.DEBUG, message, context),
    info: (message, context) => log(LogLevel.INFO, message, context),
    warn: (message, context) => log(LogLevel.WARN, message, context),
    error: (message, context) => log(LogLevel.ERROR, message, context),
  }
}
