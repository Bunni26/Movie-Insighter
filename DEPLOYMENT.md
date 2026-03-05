# 🚀 Deployment Guide

This guide provides step-by-step instructions for deploying the AI Movie Insight Builder to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier available)
- API keys for OMDb, TMDb, and optionally OpenAI

## Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done)

```bash
git init
```

2. **Create .gitignore** (should already exist)

Ensure these are in your `.gitignore`:
```
node_modules/
.next/
.env.local
.env
.DS_Store
*.log
```

3. **Commit your code**

```bash
git add .
git commit -m "Initial commit: AI Movie Insight Builder"
```

4. **Push to GitHub**

```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/your-username/ai-movie-insight-builder.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `ai-movie-insight-builder` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)

4. **Add Environment Variables**
   
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `OMDB_API_KEY` | Your OMDb API key |
   | `TMDB_API_KEY` | Your TMDb API key |
   | `OPENAI_API_KEY` | Your OpenAI API key (optional) |

   **Important**: Make sure to add these for all environments (Production, Preview, Development)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your app will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? `ai-movie-insight-builder`
- In which directory is your code located? `./`

4. **Add Environment Variables**

```bash
vercel env add OMDB_API_KEY
vercel env add TMDB_API_KEY
vercel env add OPENAI_API_KEY
```

5. **Deploy to Production**

```bash
vercel --prod
```

## Step 3: Verify Deployment

1. **Visit your deployment URL**
   - Vercel will provide a URL like: `https://ai-movie-insight-builder.vercel.app`

2. **Test the application**
   - Enter a test IMDb ID: `tt0133093`
   - Verify movie data loads correctly
   - Check that reviews appear
   - Confirm sentiment analysis works

3. **Check logs** (if issues occur)
   - Go to Vercel Dashboard
   - Select your project
   - Click "Deployments"
   - Click on the deployment
   - View "Function Logs" for any errors

## Step 4: Custom Domain (Optional)

1. **Go to your project in Vercel Dashboard**
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

## 🔄 Continuous Deployment

Once deployed, Vercel automatically:
- Deploys every push to `main` branch to production
- Creates preview deployments for pull requests
- Provides unique URLs for each deployment

## 🐛 Troubleshooting

### Build Fails

**Error: Missing environment variables**
- Solution: Add all required environment variables in Vercel Dashboard

**Error: Module not found**
- Solution: Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

### Runtime Errors

**API calls failing**
- Check that environment variables are set correctly
- Verify API keys are valid and have not expired
- Check API rate limits haven't been exceeded

**Images not loading**
- Next.js Image component requires domain configuration
- Add image domains to `next.config.js` if needed

### Performance Issues

**Slow API responses**
- Consider implementing caching for movie data
- Use Vercel Edge Functions for faster response times
- Implement request debouncing on the frontend

## 📊 Monitoring

### Vercel Analytics

Enable Vercel Analytics for insights:
1. Go to your project in Vercel Dashboard
2. Click "Analytics"
3. Enable Web Analytics
4. View real-time traffic and performance metrics

### Error Tracking

Consider integrating:
- **Sentry** for error tracking
- **LogRocket** for session replay
- **Vercel Logs** for function execution logs

## 🔒 Security Best Practices

1. **Never commit `.env.local`** - Keep API keys secret
2. **Use environment variables** - Never hardcode API keys
3. **Rate limiting** - Consider implementing rate limiting for API routes
4. **Input validation** - Already implemented for IMDb ID format
5. **CORS** - Configure if needed for external API access

## 📈 Scaling Considerations

As your application grows:

1. **Caching**: Implement Redis or similar for caching movie data
2. **Database**: Store movie data and reviews to reduce API calls
3. **Queue System**: Use a queue for processing multiple movies
4. **CDN**: Leverage Vercel's CDN for static assets
5. **Edge Functions**: Move API routes to Edge Functions for global performance

## 🎉 Success!

Your AI Movie Insight Builder is now deployed and accessible worldwide!

Share your deployment URL and start analyzing movies with AI-powered insights.

---

**Need help?** Check the main [README.md](README.md) or open an issue on GitHub.

