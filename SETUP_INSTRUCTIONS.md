# 📖 Complete Setup Instructions

Follow these instructions to get the AI Movie Insight Builder running on your local machine.

## 🎯 Overview

This application requires:
1. Node.js and npm installed
2. Three API keys (two required, one optional)
3. Environment variables configured
4. Dependencies installed

Total setup time: **10-15 minutes**

---

## Step-by-Step Setup

### 1️⃣ Verify Node.js Installation

Check if Node.js is installed:

```bash
node --version
npm --version
```

You should see version 18.x or higher. If not installed:
- Download from [nodejs.org](https://nodejs.org/)
- Install the LTS version
- Restart your terminal

### 2️⃣ Navigate to Project Directory

```bash
cd ai-movie-insight-builder
```

### 3️⃣ Install Dependencies

```bash
npm install
```

This will install:
- Next.js 16
- React 19
- TypeScript
- TailwindCSS
- Axios
- OpenAI SDK
- Testing libraries

**Expected time**: 2-3 minutes

### 4️⃣ Obtain API Keys

#### A. OMDb API Key (REQUIRED) ⭐

**Purpose**: Fetch movie data (title, poster, cast, ratings, plot)

**Steps**:
1. Visit https://www.omdbapi.com/apikey.aspx
2. Select **"FREE! (1,000 daily limit)"**
3. Enter your email address
4. Fill in your name
5. Check your email inbox
6. Click the activation link in the email
7. Your API key will be displayed - **copy it**

**Cost**: Free (1,000 requests per day)

#### B. TMDb API Key (REQUIRED) ⭐

**Purpose**: Fetch audience reviews

**Steps**:
1. Visit https://www.themoviedb.org/signup
2. Create a free account
3. Verify your email
4. Log in and go to https://www.themoviedb.org/settings/api
5. Click **"Request an API Key"**
6. Choose **"Developer"**
7. Accept the terms
8. Fill in the application form:
   - **Application Name**: AI Movie Insight Builder
   - **Application URL**: http://localhost:3000
   - **Application Summary**: Personal project for movie analysis
9. Submit the form
10. Copy your **API Key (v3 auth)**

**Cost**: Free (unlimited requests for personal use)

#### C. OpenAI API Key (OPTIONAL) 💡

**Purpose**: Advanced AI sentiment analysis

**Steps**:
1. Visit https://platform.openai.com/signup
2. Create an account
3. Go to https://platform.openai.com/api-keys
4. Click **"Create new secret key"**
5. Name it "Movie Insight Builder"
6. Copy the key (you won't see it again!)
7. Add credits to your account:
   - Go to https://platform.openai.com/account/billing
   - Add at least $5 (minimum)

**Cost**: Pay-as-you-go (~$0.002 per analysis)

**Note**: If you skip this, the app will use a keyword-based fallback sentiment analysis.

### 5️⃣ Configure Environment Variables

1. **Copy the example file**:

```bash
cp .env.example .env.local
```

On Windows PowerShell:
```powershell
Copy-Item .env.example .env.local
```

2. **Edit `.env.local`**:

Open `.env.local` in your text editor and replace the placeholder values:

```env
OMDB_API_KEY=abc12345
TMDB_API_KEY=xyz67890abcdef
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxx
```

**Important**: 
- Remove `your_omdb_api_key_here` and paste your actual key
- No quotes needed around the values
- No spaces around the `=` sign

### 6️⃣ Start the Development Server

```bash
npm run dev
```

You should see:

```
▲ Next.js 16.1.6
- Local:        http://localhost:3000
- Ready in 2.5s
```

### 7️⃣ Open in Browser

Navigate to: **http://localhost:3000**

### 8️⃣ Test the Application

1. You'll see the search interface
2. Enter this IMDb ID: **tt0133093**
3. Click **"Analyze Movie"**
4. Wait 5-10 seconds
5. You should see:
   - Movie poster and details for "The Matrix"
   - Audience reviews
   - AI sentiment analysis

---

## ✅ Verification Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] `.env.local` file created
- [ ] OMDb API key added and activated
- [ ] TMDb API key added
- [ ] OpenAI API key added (or skipped intentionally)
- [ ] Dev server running without errors
- [ ] Application opens in browser
- [ ] Test search works (tt0133093)

---

## 🐛 Common Issues

### Issue: "API key is not configured"

**Solution**: 
- Check `.env.local` exists in the root directory
- Verify variable names are exactly: `OMDB_API_KEY`, `TMDB_API_KEY`, `OPENAI_API_KEY`
- Restart the dev server after adding variables

### Issue: "Movie not found"

**Solution**:
- Verify the IMDb ID format (tt followed by 7-8 digits)
- Check your OMDb API key is activated (check email)
- Try a different movie ID

### Issue: "Failed to fetch movie data"

**Solution**:
- Check your internet connection
- Verify OMDb API key is valid
- Check you haven't exceeded the daily limit (1,000 requests)

### Issue: Port 3000 already in use

**Solution**:
```bash
npm run dev -- -p 3001
```

Then open http://localhost:3001

### Issue: OpenAI errors

**Solution**:
- Verify your OpenAI API key is correct
- Check you have credits in your OpenAI account
- The app will automatically fall back to keyword-based analysis

---

## 🎉 Success!

If you can see movie data and sentiment analysis, you're all set!

**Next steps**:
- Try different movie IDs
- Explore the code in your editor
- Customize the UI
- Deploy to Vercel (see [DEPLOYMENT.md](DEPLOYMENT.md))

---

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- Open an issue on GitHub if you encounter problems

**Happy coding! 🚀**

