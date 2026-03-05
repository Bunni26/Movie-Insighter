# 🎬 AI Movie Insight Builder

A production-ready web application that fetches movie information from IMDb, gathers audience reviews, performs AI-powered sentiment analysis, and displays comprehensive insights in a beautiful, modern UI.

![Next.js](https://img.shields.io/badge/Next.js-16.1-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)
- [Example Movie IDs](#example-movie-ids)
- [Architecture Decisions](#architecture-decisions)
- [Assumptions](#assumptions)

## ✨ Features

- **Movie Search**: Enter any IMDb movie ID to fetch comprehensive movie information
- **Rich Movie Details**: Display poster, title, cast, ratings, plot, and more
- **Review Aggregation**: Automatically fetch audience reviews from TMDb
- **AI Sentiment Analysis**: Powered by OpenAI GPT to analyze and summarize audience sentiment
- **Fallback System**: Graceful degradation with keyword-based sentiment analysis if OpenAI is unavailable
- **Beautiful UI**: Modern, responsive design with smooth animations
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Elegant loading indicators for better UX
- **Mobile Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

### Frontend
- **Next.js 16** (App Router) - React framework with server-side rendering
- **React 19** - UI library
- **TypeScript** - Type safety and better developer experience
- **TailwindCSS 4** - Utility-first CSS framework for rapid UI development

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **Axios** - HTTP client for API requests

### External APIs
- **OMDb API** - Movie data and information
- **TMDb API** - Movie reviews and additional data
- **OpenAI API** - GPT-4 for sentiment analysis

### Testing
- **Jest** - Testing framework
- **React Testing Library** - Component testing

## 📁 Project Structure

```
ai-movie-insight-builder/
├── app/
│   ├── api/
│   │   ├── movie/
│   │   │   └── route.ts          # Movie data API endpoint
│   │   └── sentiment/
│   │       └── route.ts          # Sentiment analysis API endpoint
│   ├── globals.css               # Global styles and animations
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main application page
├── components/
│   ├── ErrorMessage.tsx          # Error display component
│   ├── LoadingSpinner.tsx        # Loading state component
│   ├── MovieCard.tsx             # Movie information display
│   ├── ReviewList.tsx            # Reviews display component
│   ├── SearchBar.tsx             # Search input component
│   └── SentimentCard.tsx         # Sentiment analysis display
├── lib/
│   ├── ai.ts                     # OpenAI sentiment analysis logic
│   ├── omdb.ts                   # OMDb API integration
│   └── tmdb.ts                   # TMDb API integration
├── types/
│   └── index.ts                  # TypeScript type definitions
├── tests/
│   └── omdb.test.ts              # Unit tests
├── .env.example                  # Environment variables template
├── jest.config.js                # Jest configuration
├── jest.setup.js                 # Jest setup file
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 📋 Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** or **pnpm**
- **API Keys** (see Environment Variables section)

## 🚀 Installation

1. **Clone or download the project**

```bash
cd ai-movie-insight-builder
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your API keys (see next section).

## 🔑 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Required

**OMDB_API_KEY** (Required)
- Get your free API key at: https://www.omdbapi.com/apikey.aspx
- Free tier: 1,000 requests per day
- Used for fetching movie data

**TMDB_API_KEY** (Required)
- Get your free API key at: https://www.themoviedb.org/settings/api
- Create an account, go to Settings > API, and request an API key
- Used for fetching movie reviews

### Optional

**OPENAI_API_KEY** (Optional but recommended)
- Get your API key at: https://platform.openai.com/api-keys
- Used for advanced AI sentiment analysis
- If not provided, the app will use a fallback keyword-based sentiment analysis

Example `.env.local`:

```env
OMDB_API_KEY=your_omdb_api_key_here
TMDB_API_KEY=your_tmdb_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

## 💻 Running Locally

1. **Start the development server**

```bash
npm run dev
```

2. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

3. **Test the application**

Enter an IMDb ID (e.g., `tt0133093`) and click "Analyze Movie"

## 🧪 Testing

Run unit tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

2. **Deploy to Vercel**

- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Add environment variables in the Vercel dashboard:
  - `OMDB_API_KEY`
  - `TMDB_API_KEY`
  - `OPENAI_API_KEY`
- Click "Deploy"

3. **Your app is live!**

Vercel will provide you with a production URL.

### Alternative: Build for Production

```bash
npm run build
npm start
```

The application will be available at `http://localhost:3000`

## 🔌 API Endpoints

### GET /api/movie

Fetches movie data and reviews for a given IMDb ID.

**Query Parameters:**
- `imdbId` (string, required) - The IMDb movie ID (e.g., tt0133093)

**Response:**
```json
{
  "success": true,
  "data": {
    "movie": {
      "imdbID": "tt0133093",
      "title": "The Matrix",
      "year": "1999",
      "poster": "https://...",
      "plot": "...",
      "rating": "8.7",
      "cast": "...",
      "genre": "...",
      "director": "...",
      "runtime": "..."
    },
    "reviews": [...]
  }
}
```

### POST /api/sentiment

Analyzes sentiment of movie reviews using AI.

**Request Body:**
```json
{
  "reviews": [...],
  "movieTitle": "The Matrix"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": "Based on audience reviews...",
    "sentiment": "positive"
  }
}
```

## 🎯 Example Movie IDs

Try these IMDb IDs to test the application:

- **tt0133093** - The Matrix (1999)
- **tt0111161** - The Shawshank Redemption (1994)
- **tt0468569** - The Dark Knight (2008)
- **tt0137523** - Fight Club (1999)
- **tt1375666** - Inception (2010)
- **tt0109830** - Forrest Gump (1994)
- **tt0816692** - Interstellar (2014)
- **tt0120737** - The Lord of the Rings: The Fellowship of the Ring (2001)

## 🏗 Architecture Decisions

### Why Next.js App Router?

- **Server-side rendering** for better SEO and performance
- **API Routes** for serverless backend functions
- **Built-in optimization** for images, fonts, and scripts
- **Easy deployment** to Vercel with zero configuration

### Why TypeScript?

- **Type safety** prevents runtime errors
- **Better IDE support** with autocomplete and inline documentation
- **Easier refactoring** and maintenance
- **Self-documenting code** through type definitions

### Why TailwindCSS?

- **Rapid development** with utility classes
- **Consistent design system** out of the box
- **Responsive design** made easy
- **Small bundle size** with automatic purging of unused styles

### Why OpenAI with Fallback?

- **Advanced analysis** when API key is available
- **Graceful degradation** to keyword-based analysis
- **No blocking dependencies** - app works without OpenAI
- **Cost-effective** - users can choose their preference

### Modular Architecture

- **Separation of concerns**: API logic, UI components, and business logic are separated
- **Reusable components**: Each component has a single responsibility
- **Type definitions**: Centralized in `/types` for consistency
- **Library functions**: Isolated API integrations for easy testing and maintenance

## 📝 Assumptions

1. **API Keys**: Users will obtain their own API keys from the respective services
2. **Rate Limits**: The application respects API rate limits (OMDb: 1,000/day free tier)
3. **Review Availability**: Not all movies have reviews on TMDb; fallback mock reviews are provided
4. **OpenAI Optional**: The app works without OpenAI using a keyword-based fallback
5. **IMDb ID Format**: Users know or can find IMDb IDs (format: tt followed by 7-8 digits)
6. **Modern Browsers**: The application targets modern browsers with ES6+ support
7. **English Content**: Reviews and sentiment analysis are optimized for English content
8. **Single Movie Analysis**: The app analyzes one movie at a time (no batch processing)

## 🔧 Troubleshooting

### "API key is not configured" error

Make sure you've created a `.env.local` file with valid API keys.

### Movie not found

- Verify the IMDb ID format (tt followed by 7-8 digits)
- Check that the movie exists on IMDb
- Ensure your OMDb API key is valid

### No reviews available

- Some movies don't have reviews on TMDb
- The app will display mock reviews as fallback
- Sentiment analysis will still work with available data

### OpenAI errors

- Verify your OpenAI API key is valid
- Check your OpenAI account has available credits
- The app will automatically fall back to keyword-based analysis

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues or questions, please open an issue on the GitHub repository.

---

**Built with ❤️ using Next.js, TypeScript, and AI**
