import { NextRequest, NextResponse } from 'next/server';
import { analyzeSentiment } from '@/lib/ai';
import { Review } from '@/types';

/**
 * POST /api/sentiment
 * Analyzes sentiment of movie reviews using AI
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reviews, movieTitle } = body;

    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Reviews array is required' },
        { status: 400 }
      );
    }

    if (!movieTitle) {
      return NextResponse.json(
        { success: false, error: 'Movie title is required' },
        { status: 400 }
      );
    }

    // Perform sentiment analysis
    const sentimentAnalysis = await analyzeSentiment(reviews as Review[], movieTitle);

    return NextResponse.json({
      success: true,
      data: sentimentAnalysis,
    });
  } catch (error) {
    console.error('Sentiment API error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to analyze sentiment';
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}

