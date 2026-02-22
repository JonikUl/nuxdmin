/**
 * Validation Utilities
 *
 * Common validation functions
 */

import type { ValidationRule } from '~/modules/shared/types/forms';

/**
 * Email validation rule
 */
export const emailRule: ValidationRule = {
  validate: (value: unknown) => {
    if (typeof value !== 'string' || !value) {
      return true; // Required validation should be separate
    }
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  },
  message: 'Invalid email format',
};

/**
 * Required validation rule
 */
export const requiredRule: ValidationRule = {
  validate: (value: unknown) => {
    if (typeof value === 'string') {
      return value.trim().length > 0;
    }
    if (Array.isArray(value)) {
      return value.length > 0;
    }
    return value !== null && value !== undefined;
  },
  message: 'This field is required',
};

/**
 * Min length validation rule factory
 */
export function minLengthRule(min: number): ValidationRule {
  return {
    validate: (value: unknown) => {
      if (typeof value !== 'string') {
        return true;
      }
      return value.length >= min;
    },
    message: `Minimum length is ${min} characters`,
  };
}

/**
 * Max length validation rule factory
 */
export function maxLengthRule(max: number): ValidationRule {
  return {
    validate: (value: unknown) => {
      if (typeof value !== 'string') {
        return true;
      }
      return value.length <= max;
    },
    message: `Maximum length is ${max} characters`,
  };
}

/**
 * Common validation patterns
 */
export const patterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  url: /^https?:\/\/[^\s/$.?#].[^\s]*$/,
  number: /^[+-]?\d+(\.\d+)?$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
};
