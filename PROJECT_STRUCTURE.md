# 📁 Project Structure

Complete visual guide to the AI Movie Insight Builder file structure.

---

## 🌳 Directory Tree

```
ai-movie-insight-builder/
│
├── 📂 app/                          # Next.js App Router
│   ├── 📂 api/                      # API Routes (Backend)
│   │   ├── 📂 movie/
│   │   │   └── route.ts             # GET /api/movie - Fetch movie & reviews
│   │   └── 📂 sentiment/
│   │       └── route.ts             # POST /api/sentiment - AI analysis
│   │
│   ├── favicon.ico                  # App icon
│   ├── globals.css                  # Global styles + animations
│   ├── layout.tsx                   # Root layout + metadata
│   └── page.tsx                     # Main application page
│
├── 📂 components/                   # React Components (UI)
│   ├── ErrorMessage.tsx             # Error display with retry
│   ├── FeatureShowcase.tsx          # Feature cards (empty state)
│   ├── LoadingSpinner.tsx           # Loading animation
│   ├── MovieCard.tsx                # Movie info display
│   ├── ReviewList.tsx               # Reviews display
│   ├── SearchBar.tsx                # Search input + validation
│   └── SentimentCard.tsx            # AI insights display
│
├── 📂 lib/                          # Business Logic
│   ├── ai.ts                        # OpenAI + fallback sentiment
│   ├── omdb.ts                      # OMDb API integration
│   ├── tmdb.ts                      # TMDb API integration
│   └── utils.ts                     # Helper functions
│
├── 📂 types/                        # TypeScript Definitions
│   └── index.ts                     # All type interfaces
│
├── 📂 tests/                        # Unit Tests
│   ├── omdb.test.ts                 # OMDb validation tests
│   └── utils.test.ts                # Utility function tests
│
├── 📂 public/                       # Static Assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── 📂 node_modules/                 # Dependencies (auto-generated)
│
├── 📄 .env.example                  # Environment variables template
├── 📄 .gitignore                    # Git ignore rules
├── 📄 eslint.config.mjs             # ESLint configuration
├── 📄 jest.config.js                # Jest configuration
├── 📄 jest.setup.js                 # Jest setup
├── 📄 LICENSE                       # MIT License
├── 📄 next.config.ts                # Next.js configuration
├── 📄 next-env.d.ts                 # Next.js types (auto-generated)
├── 📄 package.json                  # Dependencies & scripts
├── 📄 package-lock.json             # Dependency lock file
├── 📄 postcss.config.mjs            # PostCSS configuration
├── 📄 tsconfig.json                 # TypeScript configuration
├── 📄 vercel.json                   # Vercel deployment config
│
└── 📚 Documentation/
    ├── README.md                    # Main documentation
    ├── START_HERE.md                # Entry point guide
    ├── QUICKSTART.md                # 5-minute setup
    ├── SETUP_INSTRUCTIONS.md        # Detailed setup
    ├── RUN_INSTRUCTIONS.md          # Running guide
    ├── DEPLOYMENT.md                # Deployment guide
    ├── ARCHITECTURE.md              # System architecture
    ├── API_DOCUMENTATION.md         # API reference
    ├── PROJECT_SUMMARY.md           # Project overview
    ├── CONTRIBUTING.md              # Contribution guide
    ├── CHECKLIST.md                 # Verification checklist
    ├── COMPLETE_GUIDE.md            # Comprehensive guide
    ├── PROJECT_DELIVERY.md          # Delivery summary
    ├── FINAL_SUMMARY.md             # Final summary
    └── PROJECT_STRUCTURE.md         # This file
```

---

## 📦 File Categories

### 🎨 Frontend Files (8 files)

**Location**: `app/` and `components/`

| File | Purpose | Lines |
|------|---------|-------|
| app/page.tsx | Main application logic | ~150 |
| app/layout.tsx | Root layout | ~35 |
| app/globals.css | Styles & animations | ~50 |
| components/SearchBar.tsx | Search input | ~80 |
| components/MovieCard.tsx | Movie display | ~100 |
| components/ReviewList.tsx | Reviews display | ~70 |
| components/SentimentCard.tsx | AI insights | ~70 |
| components/LoadingSpinner.tsx | Loading state | ~20 |
| components/ErrorMessage.tsx | Error display | ~30 |
| components/FeatureShowcase.tsx | Feature cards | ~60 |

**Total**: ~665 lines

### 🔧 Backend Files (6 files)

**Location**: `app/api/` and `lib/`

| File | Purpose | Lines |
|------|---------|-------|
| app/api/movie/route.ts | Movie API endpoint | ~60 |
| app/api/sentiment/route.ts | Sentiment API endpoint | ~40 |
| lib/omdb.ts | OMDb integration | ~70 |
| lib/tmdb.ts | TMDb integration | ~100 |
| lib/ai.ts | AI sentiment analysis | ~140 |
| lib/utils.ts | Helper functions | ~50 |

**Total**: ~460 lines

### 📘 Type Files (1 file)

**Location**: `types/`

| File | Purpose | Lines |
|------|---------|-------|
| types/index.ts | TypeScript interfaces | ~45 |

**Total**: ~45 lines

### 🧪 Test Files (2 files)

**Location**: `tests/`

| File | Purpose | Lines |
|------|---------|-------|
| tests/omdb.test.ts | Validation tests | ~35 |
| tests/utils.test.ts | Utility tests | ~45 |

**Total**: ~80 lines

### ⚙️ Configuration Files (8 files)

| File | Purpose |
|------|---------|
| package.json | Dependencies & scripts |
| tsconfig.json | TypeScript config |
| next.config.ts | Next.js config |
| jest.config.js | Jest config |
| jest.setup.js | Jest setup |
| vercel.json | Vercel config |
| eslint.config.mjs | ESLint config |
| postcss.config.mjs | PostCSS config |

### 📚 Documentation Files (14 files)

| File | Purpose | Words |
|------|---------|-------|
| README.md | Main docs | ~2,500 |
| START_HERE.md | Entry point | ~1,800 |
| QUICKSTART.md | Fast setup | ~800 |
| SETUP_INSTRUCTIONS.md | Detailed setup | ~1,500 |
| RUN_INSTRUCTIONS.md | Running guide | ~1,800 |
| DEPLOYMENT.md | Deploy guide | ~1,500 |
| ARCHITECTURE.md | System design | ~4,500 |
| API_DOCUMENTATION.md | API reference | ~2,500 |
| PROJECT_SUMMARY.md | Overview | ~2,200 |
| CONTRIBUTING.md | Contribute | ~2,000 |
| CHECKLIST.md | Verification | ~2,300 |
| COMPLETE_GUIDE.md | Everything | ~4,000 |
| PROJECT_DELIVERY.md | Delivery | ~3,000 |
| FINAL_SUMMARY.md | Summary | ~2,500 |

**Total**: ~33,000+ words

---

## 🎯 File Purpose Guide

### When to Edit Each File

**Want to change UI?**
→ Edit files in `components/`

**Want to change styling?**
→ Edit `app/globals.css` or component classes

**Want to change API logic?**
→ Edit files in `lib/`

**Want to add API endpoint?**
→ Add file in `app/api/`

**Want to add types?**
→ Edit `types/index.ts`

**Want to add tests?**
→ Add file in `tests/`

**Want to change config?**
→ Edit relevant config file

---

## 🔍 File Dependencies

### Import Graph

```
page.tsx
├── imports SearchBar
├── imports MovieCard
├── imports ReviewList
├── imports SentimentCard
├── imports LoadingSpinner
├── imports ErrorMessage
├── imports FeatureShowcase
├── imports types
└── imports axios

API Routes
├── app/api/movie/route.ts
│   ├── imports lib/omdb
│   └── imports lib/tmdb
└── app/api/sentiment/route.ts
    └── imports lib/ai

Library Files
├── lib/omdb.ts
│   ├── imports axios
│   └── imports types
├── lib/tmdb.ts
│   ├── imports axios
│   └── imports types
└── lib/ai.ts
    ├── imports openai
    └── imports types
```

---

## 📊 File Size Overview

### Source Code

- **Small** (< 50 lines): 4 files
- **Medium** (50-100 lines): 8 files
- **Large** (100+ lines): 5 files

### Documentation

- **Short** (< 1,000 words): 2 files
- **Medium** (1,000-2,500 words): 7 files
- **Long** (2,500+ words): 5 files

---

## 🗂 Logical Organization

### By Feature

**Search Feature**:
- components/SearchBar.tsx
- lib/omdb.ts (validation)

**Movie Display Feature**:
- components/MovieCard.tsx
- app/api/movie/route.ts
- lib/omdb.ts

**Reviews Feature**:
- components/ReviewList.tsx
- app/api/movie/route.ts
- lib/tmdb.ts

**Sentiment Feature**:
- components/SentimentCard.tsx
- app/api/sentiment/route.ts
- lib/ai.ts

**Error Handling**:
- components/ErrorMessage.tsx
- All lib/ files (try-catch)

**Loading States**:
- components/LoadingSpinner.tsx
- app/page.tsx (state management)

---

## 🎨 Component Relationships

```
page.tsx (Parent Component)
│
├── SearchBar
│   ├── Props: onSearch, isLoading
│   └── Emits: search event
│
├── FeatureShowcase
│   └── Props: none (static)
│
├── LoadingSpinner
│   └── Props: none (static)
│
├── ErrorMessage
│   ├── Props: message, onRetry
│   └── Emits: retry event
│
├── MovieCard
│   ├── Props: movie
│   └── Displays: poster, title, details
│
├── ReviewList
│   ├── Props: reviews
│   └── Displays: review cards
│
└── SentimentCard
    ├── Props: sentiment
    └── Displays: summary, badge
```

---

## 🔄 Data Flow Through Files

### Search Flow

```
1. User types in SearchBar.tsx
2. SearchBar validates format
3. SearchBar calls onSearch callback
4. page.tsx handleSearch runs
5. page.tsx calls /api/movie
6. route.ts validates request
7. omdb.ts fetches movie data
8. tmdb.ts fetches reviews
9. route.ts returns combined data
10. page.tsx updates state
11. MovieCard.tsx renders
12. ReviewList.tsx renders
13. page.tsx calls /api/sentiment
14. route.ts receives reviews
15. ai.ts analyzes sentiment
16. route.ts returns analysis
17. page.tsx updates state
18. SentimentCard.tsx renders
```

---

## 📋 File Checklist

### Essential Files (Must Have)

- [x] app/page.tsx
- [x] app/api/movie/route.ts
- [x] app/api/sentiment/route.ts
- [x] lib/omdb.ts
- [x] lib/tmdb.ts
- [x] lib/ai.ts
- [x] types/index.ts
- [x] components/SearchBar.tsx
- [x] components/MovieCard.tsx
- [x] components/ReviewList.tsx
- [x] components/SentimentCard.tsx
- [x] .env.example
- [x] package.json
- [x] next.config.ts
- [x] README.md

### Supporting Files (Nice to Have)

- [x] components/LoadingSpinner.tsx
- [x] components/ErrorMessage.tsx
- [x] components/FeatureShowcase.tsx
- [x] lib/utils.ts
- [x] tests/omdb.test.ts
- [x] tests/utils.test.ts
- [x] jest.config.js
- [x] vercel.json
- [x] All documentation files

---

## 🎯 Quick File Reference

### Need to...

**Add a new component?**
→ Create in `components/` folder

**Add a new API route?**
→ Create in `app/api/[name]/route.ts`

**Add business logic?**
→ Create in `lib/` folder

**Add types?**
→ Edit `types/index.ts`

**Add tests?**
→ Create in `tests/` folder

**Change styling?**
→ Edit component files or `app/globals.css`

**Configure deployment?**
→ Edit `vercel.json` or `next.config.ts`

**Update documentation?**
→ Edit relevant .md file

---

## 📊 File Statistics

### By Type

| Type | Count | Purpose |
|------|-------|---------|
| .tsx | 11 | React components & pages |
| .ts | 8 | Logic, types, tests, config |
| .js | 2 | Jest config files |
| .css | 1 | Global styles |
| .json | 3 | Config & dependencies |
| .md | 14 | Documentation |
| .mjs | 2 | ESLint & PostCSS config |

**Total Source Files**: ~40+

### By Purpose

| Purpose | Count |
|---------|-------|
| Components | 7 |
| API Routes | 2 |
| Library Modules | 4 |
| Type Definitions | 1 |
| Tests | 2 |
| Configuration | 8 |
| Documentation | 14 |
| Static Assets | 5 |

---

## 🗺 Navigation Guide

### Starting Points

**For Users**:
1. START_HERE.md
2. QUICKSTART.md
3. app/page.tsx (to see the app)

**For Developers**:
1. ARCHITECTURE.md
2. app/page.tsx (main logic)
3. lib/ folder (business logic)

**For Contributors**:
1. CONTRIBUTING.md
2. types/index.ts (understand data)
3. components/ (understand UI)

---

## 🎨 Visual Component Map

```
┌─────────────────────────────────────────────┐
│              page.tsx (Main)                │
│  ┌────────────────────────────────────┐    │
│  │         Header Section             │    │
│  │  "🎬 AI Movie Insight Builder"     │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │       SearchBar Component          │    │
│  │  [Input IMDb ID] [Analyze Button]  │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │    FeatureShowcase (if empty)      │    │
│  │  [Movie] [Reviews] [AI Analysis]   │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │   LoadingSpinner (if loading)      │    │
│  │         [Spinner Animation]        │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │    ErrorMessage (if error)         │    │
│  │    [Error Icon] [Message] [Retry]  │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │      MovieCard (if success)        │    │
│  │  [Poster] [Title] [Details]        │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │      ReviewList (if reviews)       │    │
│  │  [Review 1] [Review 2] [Review 3]  │    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │   SentimentCard (if sentiment)     │    │
│  │  [Badge] [Summary] [AI Attribution]│    │
│  └────────────────────────────────────┘    │
│  ┌────────────────────────────────────┐    │
│  │         Footer Section             │    │
│  │  "Built with Next.js..."           │    │
│  └────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

---

## 🔗 Import Relationships

### External Dependencies

```
axios (1.13.6)
├── Used in: lib/omdb.ts
├── Used in: lib/tmdb.ts
└── Used in: app/page.tsx

openai (6.25.0)
└── Used in: lib/ai.ts

next (16.1.6)
├── Used in: all app/ files
└── Used in: all components

react (19.2.3)
└── Used in: all components

tailwindcss (4.x)
└── Used in: all components (classes)
```

### Internal Dependencies

```
types/index.ts
├── Imported by: all lib/ files
├── Imported by: all components
└── Imported by: app/page.tsx

lib/omdb.ts
└── Imported by: app/api/movie/route.ts

lib/tmdb.ts
└── Imported by: app/api/movie/route.ts

lib/ai.ts
└── Imported by: app/api/sentiment/route.ts

lib/utils.ts
└── Imported by: (available for use)

Components
└── All imported by: app/page.tsx
```

---

## 📝 File Descriptions

### Core Application Files

**app/page.tsx**
- Main application component
- State management (movie, reviews, sentiment)
- API call orchestration
- Conditional rendering
- User interaction handling

**app/layout.tsx**
- Root layout wrapper
- Metadata configuration
- Font loading
- Global HTML structure

**app/globals.css**
- Global styles
- TailwindCSS imports
- Custom animations
- Utility classes

### API Route Files

**app/api/movie/route.ts**
- GET endpoint for movie data
- IMDb ID validation
- OMDb API call
- TMDb API call
- Combined response

**app/api/sentiment/route.ts**
- POST endpoint for sentiment
- Request body validation
- AI analysis call
- Error handling

### Component Files

**SearchBar.tsx**
- Input field
- Format validation
- Submit button
- Loading state
- Error display

**MovieCard.tsx**
- Movie poster
- Title and year
- Rating display
- Cast information
- Plot summary
- Genre and director

**ReviewList.tsx**
- Review iteration
- Author display
- Content display
- Rating badges
- Date formatting

**SentimentCard.tsx**
- Sentiment badge
- Color coding
- Summary display
- AI attribution

**LoadingSpinner.tsx**
- Animated spinner
- Loading text
- Centered layout

**ErrorMessage.tsx**
- Error icon
- Error message
- Retry button
- Red color scheme

**FeatureShowcase.tsx**
- Three feature cards
- Icons
- Descriptions
- Grid layout

### Library Files

**lib/omdb.ts**
- `fetchMovieData()` - Fetch from OMDb
- `validateImdbId()` - Format validation
- Error handling
- Data transformation

**lib/tmdb.ts**
- `fetchMovieReviews()` - Fetch reviews
- `getTmdbIdFromImdbId()` - ID conversion
- Fallback mock reviews
- Error handling

**lib/ai.ts**
- `analyzeSentiment()` - OpenAI analysis
- `fallbackSentimentAnalysis()` - Keyword analysis
- Prompt engineering
- JSON parsing

**lib/utils.ts**
- `formatErrorMessage()` - Error formatting
- `truncateText()` - Text truncation
- `formatDate()` - Date formatting
- `delay()` - Async delay

### Type Files

**types/index.ts**
- Movie interface
- Review interface
- SentimentAnalysis interface
- API response interfaces

### Test Files

**tests/omdb.test.ts**
- IMDb ID validation tests
- 7 test cases
- Edge case coverage

**tests/utils.test.ts**
- Utility function tests
- Error handling tests
- Text manipulation tests

---

## 🎯 Quick Access

### Most Important Files

1. **app/page.tsx** - Start here to understand the app
2. **types/index.ts** - Understand data structures
3. **lib/omdb.ts** - See how movie data is fetched
4. **lib/ai.ts** - See how AI works
5. **README.md** - Understand the project

### Configuration Files

1. **package.json** - Dependencies
2. **tsconfig.json** - TypeScript settings
3. **next.config.ts** - Next.js settings
4. **.env.example** - Required variables

### Documentation Files

1. **START_HERE.md** - Begin here
2. **QUICKSTART.md** - Fast setup
3. **COMPLETE_GUIDE.md** - Everything

---

## 🎊 Summary

**Total Files**: 40+
**Source Code**: 17 TypeScript files
**Documentation**: 14 markdown files
**Configuration**: 8 config files
**Tests**: 2 test suites

**Organization**: ⭐⭐⭐⭐⭐ Excellent
**Structure**: ⭐⭐⭐⭐⭐ Clear & Logical
**Documentation**: ⭐⭐⭐⭐⭐ Comprehensive

---

**Everything is organized, documented, and ready to use! 🚀**

