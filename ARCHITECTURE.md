# 🏛 Architecture Documentation

## System Architecture Overview

The AI Movie Insight Builder follows a modern full-stack architecture with clear separation of concerns.

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  Next.js App Router (React 19 + TypeScript)          │  │
│  │  - page.tsx (Main UI with state management)          │  │
│  │  - Components (SearchBar, MovieCard, etc.)           │  │
│  │  - TailwindCSS for styling                           │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                     API Layer (Next.js)                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /api/movie (GET)                                     │  │
│  │  - Validates IMDb ID                                  │  │
│  │  - Fetches movie data + reviews                       │  │
│  │                                                        │  │
│  │  /api/sentiment (POST)                                │  │
│  │  - Receives reviews                                   │  │
│  │  - Performs AI analysis                               │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic Layer                      │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  /lib/omdb.ts - OMDb API integration                 │  │
│  │  /lib/tmdb.ts - TMDb API integration                 │  │
│  │  /lib/ai.ts - OpenAI + fallback sentiment            │  │
│  │  /lib/utils.ts - Helper functions                    │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────┐
│                    External Services                         │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │  OMDb API    │  │  TMDb API    │  │  OpenAI API     │  │
│  │  (Movie Data)│  │  (Reviews)   │  │  (Sentiment)    │  │
│  └──────────────┘  └──────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Layer Breakdown

### 1. Frontend Layer

**Technology**: Next.js 16 with App Router, React 19, TypeScript

**Responsibilities**:
- User interface rendering
- State management (useState hooks)
- User input handling
- API communication
- Loading and error states

**Key Files**:
- `app/page.tsx` - Main application page with state
- `components/*.tsx` - Reusable UI components
- `app/globals.css` - Global styles and animations

**State Management**:
```typescript
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const [movie, setMovie] = useState<Movie | null>(null);
const [reviews, setReviews] = useState<Review[]>([]);
const [sentiment, setSentiment] = useState<SentimentAnalysis | null>(null);
```

### 2. API Layer

**Technology**: Next.js API Routes (Serverless Functions)

**Responsibilities**:
- Request validation
- Business logic orchestration
- Response formatting
- Error handling

**Endpoints**:

**GET /api/movie**
- Validates IMDb ID format
- Calls OMDb API for movie data
- Calls TMDb API for reviews
- Returns combined response

**POST /api/sentiment**
- Validates request body
- Calls AI service for analysis
- Returns sentiment results

### 3. Business Logic Layer

**Technology**: TypeScript modules

**Responsibilities**:
- External API integration
- Data transformation
- Business rules implementation
- Error handling

**Modules**:

**lib/omdb.ts**
- `fetchMovieData(imdbId)` - Fetch from OMDb
- `validateImdbId(imdbId)` - Format validation

**lib/tmdb.ts**
- `fetchMovieReviews(imdbId)` - Fetch reviews
- `getTmdbIdFromImdbId(imdbId)` - ID conversion

**lib/ai.ts**
- `analyzeSentiment(reviews, title)` - AI analysis
- `fallbackSentimentAnalysis(reviews)` - Keyword-based fallback

**lib/utils.ts**
- Helper functions for formatting and error handling

### 4. External Services Layer

**OMDb API**
- Purpose: Movie metadata
- Rate Limit: 1,000/day (free)
- Response Time: ~500ms

**TMDb API**
- Purpose: Movie reviews
- Rate Limit: 40/10s (free)
- Response Time: ~800ms

**OpenAI API**
- Purpose: Sentiment analysis
- Cost: ~$0.002/request
- Response Time: ~2-3s

---

## Data Flow

### Successful Request Flow

```
User enters IMDb ID (tt0133093)
         ↓
SearchBar validates format
         ↓
page.tsx calls /api/movie?imdbId=tt0133093
         ↓
API route validates request
         ↓
lib/omdb.ts fetches movie data from OMDb
         ↓
lib/tmdb.ts fetches reviews from TMDb
         ↓
API route returns { movie, reviews }
         ↓
page.tsx updates state with movie & reviews
         ↓
page.tsx calls /api/sentiment with reviews
         ↓
API route validates request
         ↓
lib/ai.ts analyzes with OpenAI (or fallback)
         ↓
API route returns { summary, sentiment }
         ↓
page.tsx updates state with sentiment
         ↓
UI renders all components with data
```

### Error Flow

```
User enters invalid ID (123456)
         ↓
SearchBar validates format
         ↓
Validation fails
         ↓
Error message displayed
         ↓
No API call made
```

---

## Component Architecture

### Component Hierarchy

```
page.tsx (Main Container)
├── SearchBar
│   └── Input + Button
├── FeatureShowcase (Empty state)
│   └── Feature cards
├── LoadingSpinner (Loading state)
├── ErrorMessage (Error state)
└── Results (Success state)
    ├── MovieCard
    │   ├── Image
    │   └── Details sections
    ├── ReviewList
    │   └── Review items
    └── SentimentCard
        ├── Badge
        └── Summary box
```

### Component Communication

**Props Down**:
- Parent passes data to children via props
- Type-safe with TypeScript interfaces

**Events Up**:
- Children call parent functions via callbacks
- Example: `onSearch` callback from SearchBar

### Component Responsibilities

**SearchBar**:
- Input handling
- Format validation
- Submit action
- Loading state display

**MovieCard**:
- Display movie information
- Image optimization
- Responsive layout

**ReviewList**:
- Iterate over reviews
- Display author and content
- Show ratings
- Handle empty state

**SentimentCard**:
- Display AI analysis
- Color-coded sentiment
- Badge with emoji
- Summary text

**LoadingSpinner**:
- Animated loading indicator
- Descriptive text

**ErrorMessage**:
- Error display
- Retry functionality
- Icon for clarity

---

## Type System

### Core Types

```typescript
// Movie data structure
interface Movie {
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

// Review structure
interface Review {
  author: string;
  content: string;
  rating?: number;
  createdAt?: string;
}

// Sentiment analysis result
interface SentimentAnalysis {
  summary: string;
  sentiment: 'positive' | 'mixed' | 'negative';
}
```

### API Response Types

```typescript
interface MovieApiResponse {
  success: boolean;
  data?: { movie: Movie; reviews: Review[] };
  error?: string;
}

interface SentimentApiResponse {
  success: boolean;
  data?: SentimentAnalysis;
  error?: string;
}
```

---

## Error Handling Strategy

### Levels of Error Handling

**1. Input Validation (Frontend)**
- Format checking before API call
- Immediate user feedback
- No unnecessary API requests

**2. API Route Validation (Backend)**
- Request parameter validation
- Type checking
- Early return with 400 status

**3. External API Errors (Backend)**
- Try-catch around API calls
- Specific error messages
- Fallback mechanisms

**4. Display Errors (Frontend)**
- User-friendly messages
- Retry functionality
- Clear call-to-action

### Fallback Mechanisms

**Reviews Fallback**:
```typescript
// If TMDb fails, return mock reviews
catch (error) {
  return [
    { author: 'Sample', content: '...', rating: 8 }
  ];
}
```

**Sentiment Fallback**:
```typescript
// If OpenAI fails, use keyword analysis
if (!OPENAI_API_KEY) {
  return fallbackSentimentAnalysis(reviews);
}
```

---

## Performance Considerations

### Frontend Optimizations

1. **Code Splitting**
   - Automatic with Next.js App Router
   - Components loaded on demand

2. **Image Optimization**
   - Next.js Image component
   - Lazy loading
   - Responsive images

3. **CSS Optimization**
   - TailwindCSS purges unused styles
   - Minimal CSS bundle

### Backend Optimizations

1. **Serverless Functions**
   - Auto-scaling with Vercel
   - Pay per execution
   - Global edge network

2. **API Efficiency**
   - Single endpoint for movie + reviews
   - Parallel API calls where possible

3. **Caching Opportunities**
   - Movie data rarely changes
   - Could implement Redis cache
   - Browser caching for images

### Response Time Targets

- **Initial Page Load**: < 2s
- **Movie Search**: < 5s
- **Sentiment Analysis**: < 8s

---

## Security Architecture

### API Key Management

```
Environment Variables (.env.local)
         ↓
Next.js Server Runtime
         ↓
API Routes (Server-side only)
         ↓
External APIs
```

**Key Points**:
- API keys never exposed to client
- All external calls from server-side
- Environment variables in Vercel dashboard

### Input Validation

**Client-side**:
- Format validation
- Type checking
- User feedback

**Server-side**:
- Re-validation of all inputs
- Type safety with TypeScript
- Sanitization of user input

### HTTPS

- Enforced in production (Vercel)
- Secure API communication
- No mixed content warnings

---

## Deployment Architecture

### Vercel Platform

```
GitHub Repository
         ↓
Vercel Build System
         ↓
┌─────────────────────────────────────┐
│  Static Assets → CDN                │
│  API Routes → Serverless Functions  │
│  Images → Image Optimization        │
└─────────────────────────────────────┘
         ↓
Global Edge Network
         ↓
End Users (Worldwide)
```

### Build Process

1. **Install**: `npm install`
2. **Type Check**: TypeScript compilation
3. **Build**: `next build`
4. **Optimize**: Code splitting, minification
5. **Deploy**: Upload to Vercel edge network

### Environment Configuration

**Development**:
- `.env.local` for local secrets
- Hot reload enabled
- Source maps available

**Production**:
- Environment variables in Vercel
- Optimized bundles
- Error tracking enabled

---

## Scalability Considerations

### Current Architecture

- **Serverless**: Auto-scales with traffic
- **Stateless**: No server-side state
- **CDN**: Static assets globally distributed

### Future Scaling Options

**Database Layer**:
```
Add PostgreSQL or MongoDB
         ↓
Cache movie data
Store user preferences
Track analytics
```

**Caching Layer**:
```
Add Redis
         ↓
Cache API responses
Reduce external API calls
Improve response times
```

**Queue System**:
```
Add Bull or similar
         ↓
Process batch analyses
Handle high traffic
Rate limit management
```

---

## Testing Architecture

### Unit Tests

**Location**: `/tests`

**Coverage**:
- Utility functions
- Validation logic
- Data transformation

**Framework**: Jest + React Testing Library

### Integration Tests (Future)

- API route testing
- Component integration
- End-to-end flows

### Manual Testing

- Browser testing (Chrome, Firefox, Safari)
- Mobile testing (iOS, Android)
- Different screen sizes
- Various movie IDs

---

## Monitoring & Observability

### Logging Strategy

**Development**:
```typescript
console.log() // Debug information
console.error() // Error tracking
```

**Production**:
```typescript
// Vercel Function Logs
// Structured logging
// Error aggregation
```

### Metrics to Track

1. **Performance**
   - API response times
   - Page load times
   - Time to interactive

2. **Usage**
   - Searches per day
   - Most searched movies
   - API success rates

3. **Errors**
   - Error frequency
   - Error types
   - Failed API calls

### Recommended Tools

- **Vercel Analytics** - Built-in performance monitoring
- **Sentry** - Error tracking and alerting
- **LogRocket** - Session replay and debugging

---

## Design Patterns Used

### 1. Separation of Concerns

- **UI Layer**: Components (presentation)
- **Logic Layer**: lib/ (business logic)
- **API Layer**: api/ (routing and orchestration)
- **Type Layer**: types/ (data structures)

### 2. Dependency Injection

```typescript
// Components receive dependencies via props
<SearchBar onSearch={handleSearch} isLoading={isLoading} />
```

### 3. Error Boundary Pattern

```typescript
try {
  // Risky operation
} catch (error) {
  // Handle gracefully
  // Show user-friendly message
}
```

### 4. Fallback Pattern

```typescript
// Primary approach
if (OPENAI_API_KEY) {
  return await openAIAnalysis();
}
// Fallback approach
return fallbackAnalysis();
```

### 5. Single Responsibility

Each component/function has one clear purpose:
- `SearchBar` - Only handles search input
- `MovieCard` - Only displays movie data
- `fetchMovieData()` - Only fetches from OMDb

---

## Technology Decisions

### Why Next.js?

**Pros**:
- Server-side rendering for SEO
- API routes for backend
- Excellent developer experience
- Built-in optimizations
- Easy Vercel deployment

**Alternatives Considered**:
- Create React App (no SSR, no API routes)
- Vite (no built-in backend)
- Remix (less mature ecosystem)

### Why TypeScript?

**Pros**:
- Type safety prevents bugs
- Better IDE support
- Self-documenting code
- Easier refactoring

**Alternatives Considered**:
- JavaScript (less safe, more errors)

### Why TailwindCSS?

**Pros**:
- Rapid development
- Consistent design system
- Small bundle size
- No CSS naming conflicts

**Alternatives Considered**:
- CSS Modules (more boilerplate)
- Styled Components (runtime cost)
- Plain CSS (harder to maintain)

### Why OpenAI?

**Pros**:
- State-of-the-art language understanding
- Reliable sentiment analysis
- Easy to integrate
- Good documentation

**Alternatives Considered**:
- HuggingFace (implemented as fallback)
- Google Cloud NLP (more expensive)
- AWS Comprehend (more complex setup)

---

## Code Organization Principles

### 1. Modular Structure

Each module has a clear purpose and minimal dependencies.

### 2. Type Safety

All functions have explicit types:
```typescript
export async function fetchMovieData(imdbId: string): Promise<Movie>
```

### 3. Error Handling

Every async function has try-catch:
```typescript
try {
  const result = await apiCall();
  return result;
} catch (error) {
  // Handle appropriately
}
```

### 4. Reusability

Components are generic and reusable:
```typescript
<ErrorMessage message={error} onRetry={handleRetry} />
```

### 5. Documentation

Functions have JSDoc comments:
```typescript
/**
 * Fetches movie data from OMDb API
 * @param imdbId - The IMDb movie ID
 * @returns Movie object with formatted data
 */
```

---

## Configuration Management

### Environment Variables

**Development**: `.env.local`
**Production**: Vercel dashboard

**Access Pattern**:
```typescript
const API_KEY = process.env.OMDB_API_KEY;
```

### Next.js Configuration

**next.config.ts**:
- Image domain allowlist
- Build optimizations
- Environment variable handling

### TypeScript Configuration

**tsconfig.json**:
- Path aliases (`@/*`)
- Strict mode enabled
- ES2017 target

### TailwindCSS Configuration

**tailwind.config.ts**:
- Content paths
- Theme customization
- Plugin configuration

---

## Deployment Pipeline

### Local Development

```
Edit code
    ↓
Hot reload
    ↓
Test in browser
    ↓
Commit changes
```

### CI/CD Pipeline (Vercel)

```
Push to GitHub
    ↓
Vercel detects push
    ↓
Install dependencies
    ↓
Run build
    ↓
Run tests (if configured)
    ↓
Deploy to edge network
    ↓
Generate preview URL
    ↓
Merge to main → Production
```

---

## API Integration Details

### OMDb Integration

**Flow**:
1. Receive IMDb ID
2. Validate format
3. Make GET request with API key
4. Parse response
5. Transform to Movie type
6. Handle errors

**Error Cases**:
- Invalid API key
- Movie not found
- Network failure
- Rate limit exceeded

### TMDb Integration

**Flow**:
1. Receive IMDb ID
2. Convert to TMDb ID
3. Fetch reviews endpoint
4. Parse and limit to 10 reviews
5. Transform to Review type
6. Fallback to mock if empty

**Error Cases**:
- Movie not on TMDb
- No reviews available
- API failure

### OpenAI Integration

**Flow**:
1. Receive reviews array
2. Format as prompt
3. Call GPT-4o-mini
4. Parse JSON response
5. Validate sentiment value
6. Return analysis

**Error Cases**:
- No API key
- Insufficient credits
- API timeout
- Invalid response

**Fallback**:
- Keyword-based analysis
- Sentiment classification
- Generic summaries

---

## State Management

### Approach: React Hooks

**Why not Redux/Zustand?**
- Simple state requirements
- No global state needed
- Hooks are sufficient
- Less boilerplate

### State Structure

```typescript
{
  isLoading: boolean,      // Loading indicator
  error: string | null,    // Error message
  movie: Movie | null,     // Movie data
  reviews: Review[],       // Reviews array
  sentiment: SentimentAnalysis | null  // AI analysis
}
```

### State Updates

**Sequential**:
1. Set loading to true
2. Fetch movie data
3. Update movie state
4. Fetch sentiment
5. Update sentiment state
6. Set loading to false

---

## UI/UX Design Principles

### 1. Progressive Disclosure

Show information gradually:
- Search first
- Movie data second
- Reviews third
- Sentiment last

### 2. Feedback

Always inform the user:
- Loading states
- Error messages
- Success indicators
- Empty states

### 3. Responsive Design

Mobile-first approach:
- Stack on mobile
- Side-by-side on desktop
- Touch-friendly buttons
- Readable text sizes

### 4. Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Color contrast compliance

### 5. Performance

- Lazy loading images
- Smooth animations
- Fast interactions
- Optimized bundles

---

## Future Architecture Enhancements

### 1. Add Database Layer

```
PostgreSQL/MongoDB
    ↓
Store movie data
Cache API responses
User preferences
Analytics data
```

### 2. Add Authentication

```
NextAuth.js
    ↓
User accounts
Saved favorites
Search history
```

### 3. Add Caching

```
Redis
    ↓
Cache movie data (24h)
Cache reviews (6h)
Reduce API calls
```

### 4. Add Queue System

```
Bull Queue
    ↓
Batch processing
Rate limiting
Background jobs
```

### 5. Microservices (Advanced)

```
Movie Service
Review Service
Sentiment Service
    ↓
Independent scaling
Better isolation
```

---

## Conclusion

This architecture provides:

✅ **Scalability**: Serverless functions auto-scale
✅ **Maintainability**: Clear separation of concerns
✅ **Reliability**: Multiple fallback mechanisms
✅ **Performance**: Optimized at every layer
✅ **Security**: API keys protected, input validated
✅ **Developer Experience**: TypeScript, hot reload, clear structure

The architecture is production-ready and can handle real-world traffic while remaining simple enough for easy maintenance and future enhancements.

---

**Architecture Version**: 1.0
**Last Updated**: March 2026

