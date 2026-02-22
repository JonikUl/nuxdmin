/**
 * Format Utilities Tests
 */

import { describe, it, expect } from 'vitest';
import {
  formatDate,
  formatNumber,
  formatCurrency,
  truncateText,
} from '~/modules/shared/utils/format';

describe('formatDate', () => {
  it('formats a Date object', () => {
    const date = new Date('2024-01-15');
    const result = formatDate(date, 'en-US');
    expect(result).toContain('Jan');
    expect(result).toContain('15');
    expect(result).toContain('2024');
  });

  it('formats a date string', () => {
    const result = formatDate('2024-01-15', 'en-US');
    expect(result).toContain('Jan');
    expect(result).toContain('15');
  });

  it('accepts custom options', () => {
    const date = new Date('2024-01-15');
    const result = formatDate(date, 'en-US', { year: '2-digit' });
    expect(result).toContain('24');
  });
});

describe('formatNumber', () => {
  it('formats number with thousands separator', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('formats decimal numbers', () => {
    expect(formatNumber(1234.56)).toBe('1,234.56');
  });

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0');
  });
});

describe('formatCurrency', () => {
  it('formats USD currency', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  it('formats zero', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  it('formats negative numbers', () => {
    expect(formatCurrency(-100)).toContain('-');
  });
});

describe('truncateText', () => {
  it('truncates text longer than max length', () => {
    expect(truncateText('Hello World', 5)).toBe('He...');
  });

  it('keeps text shorter than max length', () => {
    expect(truncateText('Hi', 5)).toBe('Hi');
  });

  it('keeps text exactly at max length', () => {
    expect(truncateText('Hello', 5)).toBe('Hello');
  });

  it('uses custom suffix', () => {
    expect(truncateText('Hello World', 5, '>>>')).toBe('He>>>');
  });
});
