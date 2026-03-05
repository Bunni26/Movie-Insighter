import OpenAI from 'openai';
import { Review, SentimentAnalysis } from '@/types';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

/**
 * Analyzes sentiment of movie reviews using OpenAI
 * @param reviews - Array of movie reviews
 * @param movieTitle - Title of the movie for context
 * @returns Sentiment analysis with summary and classification
 */
export async function analyzeSentiment(
  reviews: Review[],
  movieTitle: string
): Promise<SentimentAnalysis> {
  // Check if OpenAI API key is available
  if (!OPENAI_API_KEY) {
    // Fallback to basic sentiment analysis
    return fallbackSentimentAnalysis(reviews);
  }

  try {
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    // Prepare reviews text for analysis
    const reviewsText = reviews
      .map((review, idx) => `Review ${idx + 1}: ${review.content}`)
      .join('\n\n');

    const prompt = `Analyze the following audience reviews for the movie "${movieTitle}" and provide:
1. A 3-4 sentence summary of the overall audience sentiment
2. A sentiment classification: positive, mixed, or negative

Reviews:
${reviewsText}

Respond in JSON format:
{
  "summary": "your 3-4 sentence summary here",
  "sentiment": "positive" or "mixed" or "negative"
}`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a movie review analyst. Analyze sentiment and provide concise summaries.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: 'json_object' },
    });

    const result = completion.choices[0].message.content;
    if (!result) {
      throw new Error('No response from OpenAI');
    }

    const parsed = JSON.parse(result);
    
    // Validate sentiment value
    const validSentiments = ['positive', 'mixed', 'negative'];
    if (!validSentiments.includes(parsed.sentiment)) {
      parsed.sentiment = 'mixed';
    }

    return {
      summary: parsed.summary,
      sentiment: parsed.sentiment,
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    // Fallback to basic analysis if OpenAI fails
    return fallbackSentimentAnalysis(reviews);
  }
}

/**
 * Fallback sentiment analysis using basic keyword matching
 * Used when OpenAI API is not available
 */
function fallbackSentimentAnalysis(reviews: Review[]): SentimentAnalysis {
  const positiveKeywords = [
    'excellent', 'amazing', 'great', 'wonderful', 'fantastic', 'brilliant',
    'outstanding', 'masterpiece', 'loved', 'perfect', 'best', 'incredible',
  ];
  
  const negativeKeywords = [
    'terrible', 'awful', 'bad', 'worst', 'disappointing', 'boring',
    'waste', 'poor', 'horrible', 'dull', 'mediocre',
  ];

  let positiveCount = 0;
  let negativeCount = 0;

  reviews.forEach((review) => {
    const content = review.content.toLowerCase();

    positiveKeywords.forEach((keyword) => {
      if (content.includes(keyword)) positiveCount++;
    });

    negativeKeywords.forEach((keyword) => {
      if (content.includes(keyword)) negativeCount++;
    });

    // Also consider ratings if available
    if (review.rating) {
      if (review.rating >= 7) positiveCount += 2;
      else if (review.rating <= 4) negativeCount += 2;
    }
  });

  // Determine sentiment
  let sentiment: 'positive' | 'mixed' | 'negative';
  const ratio = positiveCount / (positiveCount + negativeCount + 1);

  if (ratio > 0.6) {
    sentiment = 'positive';
  } else if (ratio < 0.4) {
    sentiment = 'negative';
  } else {
    sentiment = 'mixed';
  }

  // Generate summary based on sentiment
  const summaries = {
    positive: `Based on ${reviews.length} reviews, audiences have responded very positively to this film. Viewers consistently praise the performances, direction, and overall execution. The movie has resonated well with its audience, generating enthusiastic recommendations.`,
    negative: `Based on ${reviews.length} reviews, audiences have expressed disappointment with this film. Common criticisms include pacing issues, weak storyline, or unfulfilled expectations. Many viewers found the movie did not meet their hopes.`,
    mixed: `Based on ${reviews.length} reviews, audiences have mixed feelings about this film. While some viewers appreciated certain aspects like performances or visuals, others found issues with the plot or pacing. The movie has divided opinions among its audience.`,
  };

  return {
    summary: summaries[sentiment],
    sentiment,
  };
}

