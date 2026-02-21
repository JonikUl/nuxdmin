/**
 * Form Types
 *
 * Common form-related types
 */

export interface FormErrors {
  [field: string]: string | string[] | undefined
}

export interface ValidationRule {
  validate: (value: unknown) => boolean | string
  message?: string
}

export interface FormState<T = unknown> {
  data: T
  errors: FormErrors
  touched: Record<string, boolean>
  loading: boolean
  dirty: boolean
}
