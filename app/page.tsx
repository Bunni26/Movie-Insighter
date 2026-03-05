'use client';

import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import MovieCard from '@/components/MovieCard';
import ReviewList from '@/components/ReviewList';
import SentimentCard from '@/components/SentimentCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import FeatureShowcase from '@/components/FeatureShowcase';
import { Movie, Review, SentimentAnalysis } from '@/types';
import axios from 'axios';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sentiment, setSentiment] = useState<SentimentAnalysis | null>(null);

  const handleSearch = async (imdbId: string) => {
    setIsLoading(true);
    setError(null);
    setMovie(null);
    setReviews([]);
    setSentiment(null);

    try {
      // Step 1: Fetch movie data and reviews
      const movieResponse = await axios.get(`/api/movie?imdbId=${imdbId}`);

      if (!movieResponse.data.success) {
        throw new Error(movieResponse.data.error || 'Failed to fetch movie data');
      }

      const { movie: movieData, reviews: reviewsData } = movieResponse.data.data;
      setMovie(movieData);
      setReviews(reviewsData);

      // Step 2: Analyze sentiment if reviews are available
      if (reviewsData && reviewsData.length > 0) {
        const sentimentResponse = await axios.post('/api/sentiment', {
          reviews: reviewsData,
          movieTitle: movieData.title,
        });

        if (sentimentResponse.data.success) {
          setSentiment(sentimentResponse.data.data);
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🎬 AI Movie Insight Builder
            </h1>
            <p className="text-gray-600">
              Discover movie insights powered by AI sentiment analysis
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {/* Feature Showcase - Only show when no results */}
        {!isLoading && !error && !movie && (
          <FeatureShowcase />
        )}

        {/* Loading State */}
        {isLoading && <LoadingSpinner />}

        {/* Error State */}
        {error && !isLoading && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}

        {/* Results */}
        {!isLoading && !error && movie && (
          <div className="space-y-8 animate-fadeIn">
            {/* Movie Information */}
            <MovieCard movie={movie} />

            {/* Reviews Section */}
            {reviews.length > 0 && (
              <ReviewList reviews={reviews} />
            )}

            {/* AI Sentiment Analysis */}
            {sentiment && (
              <SentimentCard sentiment={sentiment} />
            )}
          </div>
        )}

        {/* Empty State */}
        {!isLoading && !error && !movie && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
              Ready to Analyze
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              Enter an IMDb movie ID above to get started. We&apos;ll fetch movie details, 
              gather reviews, and provide AI-powered sentiment insights.
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            Built with Next.js, TypeScript, TailwindCSS, and OpenAI
          </p>
        </div>
      </footer>
    </main>
  );
}
