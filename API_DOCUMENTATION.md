# 📡 API Documentation

Complete documentation for all API endpoints in the AI Movie Insight Builder.

## Base URL

**Development**: `http://localhost:3000/api`
**Production**: `https://your-app.vercel.app/api`

---

## Endpoints

### 1. Get Movie Data

Fetches comprehensive movie information and reviews for a given IMDb ID.

#### Request

```http
GET /api/movie?imdbId={imdbId}
```

#### Query Parameters

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `imdbId` | string | Yes | IMDb movie identifier | `tt0133093` |

#### Response

**Success (200)**

```json
{
  "success": true,
  "data": {
    "movie": {
      "imdbID": "tt0133093",
      "title": "The Matrix",
      "year": "1999",
      "poster": "https://m.media-amazon.com/images/...",
      "plot": "When a beautiful stranger leads computer hacker Neo...",
      "rating": "8.7",
      "cast": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
      "genre": "Action, Sci-Fi",
      "director": "Lana Wachowski, Lilly Wachowski",
      "runtime": "136 min"
    },
    "reviews": [
      {
        "author": "John Doe",
        "content": "An absolute masterpiece of science fiction cinema...",
        "rating": 9,
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

**Error (400) - Invalid IMDb ID**

```json
{
  "success": false,
  "error": "Invalid IMDb ID format. Expected format: tt followed by 7-8 digits (e.g., tt0133093)"
}
```

**Error (400) - Missing IMDb ID**

```json
{
  "success": false,
  "error": "IMDb ID is required"
}
```

**Error (500) - Movie Not Found**

```json
{
  "success": false,
  "error": "Movie not found"
}
```

**Error (500) - API Failure**

```json
{
  "success": false,
  "error": "Failed to fetch movie data: [error details]"
}
```

#### Example Usage

**cURL**

```bash
curl "http://localhost:3000/api/movie?imdbId=tt0133093"
```

**JavaScript/TypeScript**

```typescript
const response = await fetch('/api/movie?imdbId=tt0133093');
const data = await response.json();

if (data.success) {
  console.log(data.data.movie);
  console.log(data.data.reviews);
}
```

**Axios**

```typescript
import axios from 'axios';

const { data } = await axios.get('/api/movie', {
  params: { imdbId: 'tt0133093' }
});
```

---

### 2. Analyze Sentiment

Performs AI-powered sentiment analysis on movie reviews.

#### Request

```http
POST /api/sentiment
```

#### Request Body

```json
{
  "reviews": [
    {
      "author": "John Doe",
      "content": "Amazing movie! Loved every minute of it.",
      "rating": 9
    },
    {
      "author": "Jane Smith",
      "content": "Great visuals but the plot was confusing.",
      "rating": 6
    }
  ],
  "movieTitle": "The Matrix"
}
```

#### Body Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `reviews` | Review[] | Yes | Array of review objects |
| `movieTitle` | string | Yes | Title of the movie |

**Review Object Structure**:

```typescript
{
  author: string;
  content: string;
  rating?: number;
  createdAt?: string;
}
```

#### Response

**Success (200)**

```json
{
  "success": true,
  "data": {
    "summary": "Based on audience reviews, viewers have responded very positively to The Matrix. The film is praised for its groundbreaking visual effects, innovative storytelling, and philosophical depth. Most reviewers highlight the strong performances and revolutionary action sequences that have made it a sci-fi classic.",
    "sentiment": "positive"
  }
}
```

**Sentiment Values**:
- `"positive"` - Overall positive reception
- `"mixed"` - Divided opinions
- `"negative"` - Overall negative reception

**Error (400) - Missing Reviews**

```json
{
  "success": false,
  "error": "Reviews array is required"
}
```

**Error (400) - Invalid Reviews**

```json
{
  "success": false,
  "error": "Reviews array is required"
}
```

**Error (400) - Missing Movie Title**

```json
{
  "success": false,
  "error": "Movie title is required"
}
```

**Error (500) - Analysis Failure**

```json
{
  "success": false,
  "error": "Failed to analyze sentiment: [error details]"
}
```

#### Example Usage

**cURL**

```bash
curl -X POST http://localhost:3000/api/sentiment \
  -H "Content-Type: application/json" \
  -d '{
    "reviews": [
      {"author": "User1", "content": "Great movie!", "rating": 9}
    ],
    "movieTitle": "The Matrix"
  }'
```

**JavaScript/TypeScript**

```typescript
const response = await fetch('/api/sentiment', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    reviews: [
      { author: 'User1', content: 'Great movie!', rating: 9 }
    ],
    movieTitle: 'The Matrix'
  })
});

const data = await response.json();
```

**Axios**

```typescript
import axios from 'axios';

const { data } = await axios.post('/api/sentiment', {
  reviews: [
    { author: 'User1', content: 'Great movie!', rating: 9 }
  ],
  movieTitle: 'The Matrix'
});
```

---

## Data Models

### Movie

```typescript
interface Movie {
  imdbID: string;      // IMDb identifier (e.g., "tt0133093")
  title: string;       // Movie title
  year: string;        // Release year
  poster: string;      // Poster image URL
  plot: string;        // Plot summary
  rating: string;      // IMDb rating (e.g., "8.7")
  cast: string;        // Comma-separated cast list
  genre: string;       // Comma-separated genres
  director: string;    // Director name(s)
  runtime: string;     // Runtime (e.g., "136 min")
}
```

### Review

```typescript
interface Review {
  author: string;      // Review author name
  content: string;     // Review text content
  rating?: number;     // Optional rating (0-10)
  createdAt?: string;  // Optional ISO date string
}
```

### SentimentAnalysis

```typescript
interface SentimentAnalysis {
  summary: string;                              // 3-4 sentence summary
  sentiment: 'positive' | 'mixed' | 'negative'; // Classification
}
```

---

## Error Handling

### Error Response Format

All errors follow this structure:

```json
{
  "success": false,
  "error": "Human-readable error message"
}
```

### HTTP Status Codes

| Code | Meaning | When It Occurs |
|------|---------|----------------|
| 200 | Success | Request completed successfully |
| 400 | Bad Request | Invalid input or missing parameters |
| 500 | Server Error | API failure or server-side error |

### Common Error Messages

| Error | Cause | Solution |
|-------|-------|----------|
| "IMDb ID is required" | Missing query parameter | Add `?imdbId=tt0133093` |
| "Invalid IMDb ID format" | Wrong format | Use tt + 7-8 digits |
| "Movie not found" | Non-existent movie | Verify IMDb ID on imdb.com |
| "API key is not configured" | Missing env variable | Add API key to `.env.local` |
| "Reviews array is required" | Empty/missing reviews | Send valid reviews array |
| "Movie title is required" | Missing title | Include movieTitle in body |

---

## Rate Limits

### OMDb API
- **Free Tier**: 1,000 requests per day
- **Reset**: Daily at midnight UTC
- **Exceeded**: Returns error, wait until reset

### TMDb API
- **Free Tier**: 40 requests per 10 seconds
- **Daily**: Unlimited for personal use
- **Exceeded**: Temporary block, retry after 10 seconds

### OpenAI API
- **Rate Limit**: Depends on your tier
- **Cost**: ~$0.002 per sentiment analysis
- **Fallback**: Automatic if unavailable

---

## Response Times

Typical response times:

| Endpoint | Average | Maximum |
|----------|---------|---------|
| `/api/movie` | 1-2s | 5s |
| `/api/sentiment` | 2-3s | 10s |

**Factors affecting speed**:
- API response times
- Network latency
- OpenAI processing time
- Number of reviews

---

## Best Practices

### 1. Error Handling

Always check the `success` field:

```typescript
const response = await fetch('/api/movie?imdbId=tt0133093');
const data = await response.json();

if (!data.success) {
  console.error(data.error);
  return;
}

// Use data.data safely
```

### 2. Loading States

Show loading indicators during API calls:

```typescript
setIsLoading(true);
try {
  const response = await fetch('/api/movie?imdbId=tt0133093');
  // Handle response
} finally {
  setIsLoading(false);
}
```

### 3. Input Validation

Validate IMDb ID before calling API:

```typescript
const imdbIdRegex = /^tt\d{7,8}$/;
if (!imdbIdRegex.test(imdbId)) {
  // Show error
  return;
}
```

### 4. Caching

Consider caching responses to reduce API calls:

```typescript
const cache = new Map();

async function fetchWithCache(imdbId: string) {
  if (cache.has(imdbId)) {
    return cache.get(imdbId);
  }
  
  const data = await fetch(`/api/movie?imdbId=${imdbId}`);
  cache.set(imdbId, data);
  return data;
}
```

---

## Integration Examples

### React Component

```typescript
'use client';

import { useState } from 'react';

export default function MovieSearch() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovie = async (imdbId: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/movie?imdbId=${imdbId}`);
      const data = await res.json();
      
      if (data.success) {
        setMovie(data.data.movie);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={() => searchMovie('tt0133093')}>
        Search Matrix
      </button>
      {loading && <p>Loading...</p>}
      {movie && <div>{movie.title}</div>}
    </div>
  );
}
```

### Server-Side Usage

```typescript
import { fetchMovieData } from '@/lib/omdb';
import { fetchMovieReviews } from '@/lib/tmdb';
import { analyzeSentiment } from '@/lib/ai';

async function getMovieInsights(imdbId: string) {
  // Fetch movie data
  const movie = await fetchMovieData(imdbId);
  
  // Fetch reviews
  const reviews = await fetchMovieReviews(imdbId);
  
  // Analyze sentiment
  const sentiment = await analyzeSentiment(reviews, movie.title);
  
  return { movie, reviews, sentiment };
}
```

---

## Testing APIs

### Using Browser

Navigate to:
```
http://localhost:3000/api/movie?imdbId=tt0133093
```

### Using Postman

1. **GET Request**
   - URL: `http://localhost:3000/api/movie`
   - Params: `imdbId = tt0133093`

2. **POST Request**
   - URL: `http://localhost:3000/api/sentiment`
   - Method: POST
   - Body (JSON):
   ```json
   {
     "reviews": [...],
     "movieTitle": "The Matrix"
   }
   ```

### Using Thunder Client (VS Code)

1. Install Thunder Client extension
2. Create new request
3. Set method and URL
4. Add parameters/body
5. Send request

---

## Security

### API Keys

- Never expose API keys in client-side code
- Always use environment variables
- Never commit `.env.local` to git
- Rotate keys if compromised

### Input Validation

- IMDb ID format validated server-side
- Request body validated before processing
- SQL injection not applicable (no database)
- XSS prevented by React's default escaping

### Rate Limiting

Consider implementing rate limiting for production:

```typescript
// Example middleware
const rateLimit = new Map();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimit.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < 60000);
  
  if (recentRequests.length >= 10) {
    return false; // Rate limit exceeded
  }
  
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  return true;
}
```

---

## Monitoring

### Logging

Server-side logs are available in:
- **Development**: Terminal console
- **Production**: Vercel function logs

### Error Tracking

Recommended tools:
- Sentry for error tracking
- LogRocket for session replay
- Vercel Analytics for performance

### Metrics to Monitor

- API response times
- Error rates
- API key usage
- User engagement

---

## Versioning

Current API Version: **v1** (implicit)

Future versions would use:
```
/api/v2/movie
/api/v2/sentiment
```

---

## Support

For API issues:
1. Check this documentation
2. Verify API keys are valid
3. Check rate limits
4. Review error messages
5. Open an issue on GitHub

---

**Last Updated**: March 2026

