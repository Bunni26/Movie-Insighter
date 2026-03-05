// Movie data from OMDb API
export interface Movie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  plot: string;
  rating: string;
  cast: string;
  genre: string;
  director: string;
  runtime: string;
}

// Review data structure
export interface Review {
  author: string;
  content: string;
  rating?: number;
  createdAt?: string;
}

// AI Sentiment Analysis Result
export interface SentimentAnalysis {
  summary: string;
  sentiment: 'positive' | 'mixed' | 'negative';
}

// API Response types
export interface MovieApiResponse {
  success: boolean;
  data?: Movie;
  error?: string;
}

export interface ReviewsApiResponse {
  success: boolean;
  data?: Review[];
  error?: string;
}

export interface SentimentApiResponse {
  success: boolean;
  data?: SentimentAnalysis;
  error?: string;
}

