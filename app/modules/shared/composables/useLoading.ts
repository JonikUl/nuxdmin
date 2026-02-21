/**
 * useLoading Composable
 *
 * Manage loading state for async operations
 */

import { createLogger } from '~/modules/shared/utils/logger'

const logger = createLogger('useLoading')

export function useLoading(initialState = false) {
  const isLoading = ref(initialState)
  const error = ref<string | null>(null)

  const startLoading = () => {
    isLoading.value = true
    error.value = null
    logger.debug('Loading started')
  }

  const stopLoading = (err?: string | Error | null) => {
    isLoading.value = false
    if (err) {
      const errorMessage = typeof err === 'string' ? err : err.message
      error.value = errorMessage
      logger.error('Loading failed', { error: errorMessage })
    } else {
      logger.debug('Loading completed')
    }
  }

  const withLoading = async <T>(fn: () => Promise<T>): Promise<T> => {
    startLoading()
    try {
      const result = await fn()
      stopLoading()
      return result
    }
    catch (err) {
      stopLoading(err instanceof Error ? err : new Error(String(err)))
      throw err
    }
  }

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    withLoading,
  }
}
