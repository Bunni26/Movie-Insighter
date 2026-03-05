import { validateImdbId } from '@/lib/omdb';

describe('OMDb Library', () => {
  describe('validateImdbId', () => {
    it('should validate correct IMDb ID format with 7 digits', () => {
      expect(validateImdbId('tt0133093')).toBe(true);
    });

    it('should validate correct IMDb ID format with 8 digits', () => {
      expect(validateImdbId('tt12345678')).toBe(true);
    });

    it('should reject IMDb ID without tt prefix', () => {
      expect(validateImdbId('0133093')).toBe(false);
    });

    it('should reject IMDb ID with less than 7 digits', () => {
      expect(validateImdbId('tt123456')).toBe(false);
    });

    it('should reject IMDb ID with more than 8 digits', () => {
      expect(validateImdbId('tt123456789')).toBe(false);
    });

    it('should reject empty string', () => {
      expect(validateImdbId('')).toBe(false);
    });

    it('should reject IMDb ID with letters after tt', () => {
      expect(validateImdbId('tt0133abc')).toBe(false);
    });
  });
});

