# 🏃 How to Run the Project

## Quick Start (5 Minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` file:

```bash
# Copy the example file
cp .env.example .env.local

# Or on Windows PowerShell:
Copy-Item .env.example .env.local
```

Edit `.env.local` and add your API keys:

```env
OMDB_API_KEY=your_omdb_key
TMDB_API_KEY=your_tmdb_key
OPENAI_API_KEY=your_openai_key
```

**Get API Keys**:
- OMDb: https://www.omdbapi.com/apikey.aspx (Free, instant)
- TMDb: https://www.themoviedb.org/settings/api (Free, 5 min setup)
- OpenAI: https://platform.openai.com/api-keys (Optional, requires credits)

### 3. Run Development Server

```bash
npm run dev
```

### 4. Open in Browser

Go to: **http://localhost:3000**

### 5. Test with Example

Enter IMDb ID: **tt0133093** (The Matrix)

Click "Analyze Movie" and enjoy! 🎉

---

## Detailed Commands

### Development

```bash
# Start dev server
npm run dev

# Start on different port
npm run dev -- -p 3001
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint
```

---

## Project Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production bundle |
| `npm start` | Start production server |
| `npm test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run lint` | Run ESLint |

---

## Environment Setup

### Required Environment Variables

```env
# OMDb API - Movie data
OMDB_API_KEY=your_key_here

# TMDb API - Reviews
TMDB_API_KEY=your_key_here
```

### Optional Environment Variables

```env
# OpenAI API - Advanced sentiment analysis
# If not provided, uses keyword-based fallback
OPENAI_API_KEY=your_key_here
```

---

## Testing the Application

### Test Cases

1. **Valid Movie ID**
   - Input: `tt0133093`
   - Expected: Movie data, reviews, sentiment analysis

2. **Invalid Format**
   - Input: `123456`
   - Expected: Format validation error

3. **Non-existent Movie**
   - Input: `tt9999999`
   - Expected: "Movie not found" error

4. **Popular Movies**
   - `tt0111161` - The Shawshank Redemption
   - `tt0468569` - The Dark Knight
   - `tt1375666` - Inception

### What to Verify

- ✅ Movie poster loads
- ✅ Title, year, rating display correctly
- ✅ Cast and plot information shown
- ✅ Reviews appear (or fallback message)
- ✅ Sentiment analysis displays
- ✅ Sentiment badge shows correct color
- ✅ Loading spinner appears during fetch
- ✅ Error messages are user-friendly
- ✅ Responsive on mobile devices

---

## Troubleshooting

### Server Won't Start

**Error**: `Port 3000 already in use`

```bash
# Use different port
npm run dev -- -p 3001
```

**Error**: `Cannot find module`

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### API Errors

**Error**: `API key is not configured`

- Check `.env.local` exists in root directory
- Verify variable names match exactly
- Restart dev server after adding variables

**Error**: `Movie not found`

- Verify IMDb ID format (tt + 7-8 digits)
- Check OMDb API key is activated
- Try different movie ID

**Error**: `Failed to fetch reviews`

- TMDb API key may be invalid
- App will continue with fallback reviews

### Build Errors

**Error**: `Type error in component`

```bash
# Check TypeScript errors
npx tsc --noEmit
```

**Error**: `Module not found`

- Ensure all imports use correct paths
- Check `tsconfig.json` has correct path aliases

---

## Development Workflow

### Making Changes

1. **Edit files** in your code editor
2. **Save** - Hot reload will update automatically
3. **Check browser** - Changes appear instantly
4. **Check console** - Look for any errors

### Adding New Features

1. **Create types** in `/types/index.ts`
2. **Build logic** in `/lib/` directory
3. **Create API route** in `/app/api/`
4. **Build component** in `/components/`
5. **Integrate** in `/app/page.tsx`
6. **Test** thoroughly

### Code Style

- Use TypeScript for all files
- Follow existing naming conventions
- Add comments for complex logic
- Keep components small and focused
- Use TailwindCSS for styling

---

## Performance Tips

### Development

- Use `npm run dev` for hot reload
- Keep dev tools open for debugging
- Monitor console for errors
- Use React DevTools for component inspection

### Production

- Always run `npm run build` before deploying
- Test production build locally with `npm start`
- Check build output for errors
- Verify environment variables in production

---

## File Locations

### Configuration Files
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.ts` - TailwindCSS configuration
- `jest.config.js` - Jest testing configuration
- `vercel.json` - Vercel deployment configuration

### Source Code
- `/app` - Pages and API routes
- `/components` - React components
- `/lib` - Business logic and API integrations
- `/types` - TypeScript type definitions

### Documentation
- `README.md` - Main documentation
- `QUICKSTART.md` - Quick start guide
- `SETUP_INSTRUCTIONS.md` - Detailed setup
- `DEPLOYMENT.md` - Deployment guide
- `PROJECT_SUMMARY.md` - Project overview
- `RUN_INSTRUCTIONS.md` - This file

---

## Getting Help

### Check Documentation
1. Read `README.md` for overview
2. Check `SETUP_INSTRUCTIONS.md` for detailed setup
3. Review `DEPLOYMENT.md` for deployment help

### Debug Steps
1. Check console for error messages
2. Verify environment variables
3. Check API key validity
4. Review network tab in browser DevTools
5. Check server logs in terminal

### Common Solutions
- **Restart dev server** - Fixes most issues
- **Clear browser cache** - Fixes stale data
- **Reinstall dependencies** - Fixes module issues
- **Check API keys** - Fixes authentication errors

---

## Success Indicators

You'll know everything is working when:

✅ Dev server starts without errors
✅ Page loads at http://localhost:3000
✅ Search bar accepts input
✅ Movie data appears after search
✅ Reviews are displayed
✅ Sentiment analysis shows results
✅ No console errors
✅ Responsive on mobile

---

## Next Steps

Once running successfully:

1. **Explore the code** - Understand the architecture
2. **Try different movies** - Test various scenarios
3. **Customize the UI** - Make it your own
4. **Add features** - Extend functionality
5. **Deploy to Vercel** - Share with the world

---

**Happy coding! 🚀**

Need more help? Check the other documentation files or open an issue.

