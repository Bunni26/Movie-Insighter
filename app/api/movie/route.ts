import { NextRequest, NextResponse } from 'next/server';
import { fetchMovieData, validateImdbId } from '@/lib/omdb';
import { fetchMovieReviews } from '@/lib/tmdb';
import { Review } from '@/types';

/**
 * GET /api/movie
 * Fetches movie data and reviews for a given IMDb ID
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const imdbId = searchParams.get('imdbId');

    if (!imdbId) {
      return NextResponse.json(
        { success: false, error: 'IMDb ID is required' },
        { status: 400 }
      );
    }

    // Validate IMDb ID format
    if (!validateImdbId(imdbId)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid IMDb ID format. Expected format: tt followed by 7-8 digits (e.g., tt0133093)' 
        },
        { status: 400 }
      );
    }

    // Fetch movie data from OMDb
    const movieData = await fetchMovieData(imdbId);

    // Fetch reviews from TMDb
    let reviews: Review[] = [];
    try {
      reviews = await fetchMovieReviews(imdbId);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      // Continue without reviews if TMDb fails
    }

    return NextResponse.json({
      success: true,
      data: {
        movie: movieData,
        reviews,
      },
    });
  } catch (error) {
    console.error('Movie API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to fetch movie data';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

