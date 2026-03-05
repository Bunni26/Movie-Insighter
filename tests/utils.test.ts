import { formatErrorMessage, truncateText, formatDate } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('formatErrorMessage', () => {
    it('should format Error object', () => {
      const error = new Error('Test error');
      expect(formatErrorMessage(error)).toBe('Test error');
    });

    it('should format string error', () => {
      expect(formatErrorMessage('String error')).toBe('String error');
    });

    it('should handle unknown error types', () => {
      expect(formatErrorMessage(null)).toBe('An unexpected error occurred. Please try again.');
      expect(formatErrorMessage(undefined)).toBe('An unexpected error occurred. Please try again.');
      expect(formatErrorMessage(123)).toBe('An unexpected error occurred. Please try again.');
    });
  });

  describe('truncateText', () => {
    it('should not truncate text shorter than max length', () => {
      expect(truncateText('Short text', 20)).toBe('Short text');
    });

    it('should truncate text longer than max length', () => {
      const longText = 'This is a very long text that needs to be truncated';
      expect(truncateText(longText, 20)).toBe('This is a very long...');
    });

    it('should handle empty string', () => {
      expect(truncateText('', 10)).toBe('');
    });
  });

  describe('formatDate', () => {
    it('should format ISO date string', () => {
      const result = formatDate('2024-01-15T10:30:00Z');
      expect(result).toContain('January');
      expect(result).toContain('15');
      expect(result).toContain('2024');
    });
  });
});

