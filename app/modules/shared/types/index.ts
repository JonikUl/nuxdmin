/**
 * Shared Types
 *
 * Common types used across all modules
 */

// API Response wrapper
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination types
export interface PaginationParams {
  page: number
  limit: number
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  totalPages: number
}

// Sort order
export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

// Log levels - type alias for flexibility
export type LogLevel = 'debug' | 'info' | 'warn' | 'error'
