/**
 * useNotification Composable
 *
 * Toast notification wrapper using Nuxt UI's useToast
 */

import { createLogger } from '~/modules/shared/utils/logger'

const logger = createLogger('useNotification')

type NotificationColor = 'white' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate'

export function useNotification() {
  const toast = useToast()
  if (!toast) {
    logger.warn('useToast not available - notifications may not work')
  }

  const add = (title: string, options?: { color?: NotificationColor; icon?: string; description?: string }) => {
    logger.info('Showing notification', { title, color: options?.color })
    toast?.add({
      title,
      color: options?.color || 'blue',
      icon: options?.icon,
      description: options?.description,
    })
  }

  const success = (title: string, description?: string) => {
    add(title, { color: 'green', icon: 'i-lucide-check-circle', description })
  }

  const error = (title: string, description?: string) => {
    add(title, { color: 'red', icon: 'i-lucide-alert-circle', description })
  }

  const warning = (title: string, description?: string) => {
    add(title, { color: 'orange', icon: 'i-lucide-alert-triangle', description })
  }

  const info = (title: string, description?: string) => {
    add(title, { color: 'blue', icon: 'i-lucide-info', description })
  }

  return {
    add,
    success,
    error,
    warning,
    info,
  }
}
