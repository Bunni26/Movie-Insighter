import axios from 'axios';
import { Movie } from '@/types';

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const OMDB_BASE_URL = 'https://www.omdbapi.com/';

/**
 * Fetches movie data from OMDb API using IMDb ID
 * @param imdbId - The IMDb movie ID (e.g., tt0133093)
 * @returns Movie object with formatted data
 */
export async function fetchMovieData(imdbId: string): Promise<Movie> {
  if (!OMDB_API_KEY) {
    throw new Error('OMDb API key is not configured');
  }

  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        apikey: OMDB_API_KEY,
        i: imdbId,
        plot: 'full',
      },
    });

    const data = response.data;

    if (data.Response === 'False') {
      throw new Error(data.Error || 'Movie not found');
    }

    return {
      imdbID: data.imdbID,
      title: data.Title,
      year: data.Year,
      poster: data.Poster !== 'N/A' ? data.Poster : '/placeholder-movie.png',
      plot: data.Plot !== 'N/A' ? data.Plot : 'No plot available',
      rating: data.imdbRating !== 'N/A' ? data.imdbRating : 'N/A',
      cast: data.Actors !== 'N/A' ? data.Actors : 'Cast information not available',
      genre: data.Genre !== 'N/A' ? data.Genre : 'N/A',
      director: data.Director !== 'N/A' ? data.Director : 'N/A',
      runtime: data.Runtime !== 'N/A' ? data.Runtime : 'N/A',
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to fetch movie data: ${error.message}`);
    }
    throw error;
  }
}

/**
 * Validates IMDb ID format
 * @param imdbId - The IMDb ID to validate
 * @returns true if valid, false otherwise
 */
export function validateImdbId(imdbId: string): boolean {
  const imdbIdRegex = /^tt\d{7,8}$/;
  return imdbIdRegex.test(imdbId);
}

