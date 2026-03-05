'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (imdbId: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [imdbId, setImdbId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedId = imdbId.trim();

    // Validate format
    if (!trimmedId) {
      setError('Please enter an IMDb ID');
      return;
    }

    const imdbIdRegex = /^tt\d{7,8}$/;
    if (!imdbIdRegex.test(trimmedId)) {
      setError('Invalid format. Use: tt followed by 7-8 digits (e.g., tt0133093)');
      return;
    }

    onSearch(trimmedId);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="imdbId" className="block text-sm font-medium text-gray-700 mb-2">
            Enter IMDb Movie ID
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              id="imdbId"
              value={imdbId}
              onChange={(e) => setImdbId(e.target.value)}
              placeholder="e.g., tt0133093"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Analyzing...
                </span>
              ) : (
                'Analyze Movie'
              )}
            </button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
        <p className="text-sm text-gray-500">
          Example IDs: tt0133093 (The Matrix), tt0111161 (The Shawshank Redemption), tt0468569 (The Dark Knight)
        </p>
      </form>
    </div>
  );
}

