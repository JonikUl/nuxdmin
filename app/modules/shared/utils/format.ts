/**
 * Format Utilities
 *
 * Common formatting functions
 */

/**
 * Format date to localized string
 */
export function formatDate(date: Date | string, locale = 'en-US', options?: Intl.DateTimeFormatOptions): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  }).format(d)
}

/**
 * Format number with thousands separator
 */
export function formatNumber(value: number, locale = 'en-US', options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(locale, options).format(value)
}

/**
 * Format currency value
 */
export function formatCurrency(
  value: number,
  currency = 'USD',
  locale = 'en-US',
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number, suffix = '...'): string {
  if (text.length <= maxLength) {
    return text
  }
  return text.slice(0, maxLength - suffix.length) + suffix
}
