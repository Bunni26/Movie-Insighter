# ⚡ Quick Start Guide

Get the AI Movie Insight Builder running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Get API Keys

### OMDb API Key (Required) - 2 minutes

1. Go to https://www.omdbapi.com/apikey.aspx
2. Select "FREE" plan (1,000 requests/day)
3. Enter your email
4. Check your email and click the activation link
5. Copy your API key

### TMDb API Key (Required) - 3 minutes

1. Go to https://www.themoviedb.org/signup
2. Create a free account
3. Go to Settings > API
4. Click "Request an API Key"
5. Select "Developer"
6. Fill in the application details (can use dummy data for personal use)
7. Copy your API key (v3 auth)

### OpenAI API Key (Optional) - 2 minutes

1. Go to https://platform.openai.com/signup
2. Create an account
3. Go to https://platform.openai.com/api-keys
4. Click "Create new secret key"
5. Copy your API key
6. Add credits to your account (pay-as-you-go)

**Note**: If you skip OpenAI, the app will use a keyword-based fallback for sentiment analysis.

## Step 3: Configure Environment Variables

1. **Copy the example file**

```bash
cp .env.example .env.local
```

2. **Edit `.env.local`** and add your API keys:

```env
OMDB_API_KEY=your_actual_omdb_key
TMDB_API_KEY=your_actual_tmdb_key
OPENAI_API_KEY=your_actual_openai_key
```

## Step 4: Run the Application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 5: Test It Out

1. Enter this IMDb ID: `tt0133093` (The Matrix)
2. Click "Analyze Movie"
3. Wait a few seconds
4. See the magic happen! ✨

## 🎯 What You Should See

1. **Movie Card**: Poster, title, year, rating, cast, plot
2. **Reviews Section**: Audience reviews with ratings
3. **AI Sentiment Analysis**: Summary and sentiment classification (Positive/Mixed/Negative)

## 🚨 Troubleshooting

### Port 3000 already in use?

```bash
# Use a different port
npm run dev -- -p 3001
```

### Environment variables not loading?

- Make sure the file is named `.env.local` (not `.env.txt`)
- Restart the dev server after adding environment variables
- Check for typos in variable names

### API errors?

- Verify your API keys are correct
- Check you've activated your OMDb key via email
- Ensure you have OpenAI credits (if using OpenAI)

## 🎬 More Movie IDs to Try

- `tt0111161` - The Shawshank Redemption
- `tt0468569` - The Dark Knight
- `tt1375666` - Inception
- `tt0109830` - Forrest Gump
- `tt0816692` - Interstellar

## 📚 Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- Customize the UI to match your preferences
- Add more features like movie comparisons or watchlists

---

**Enjoy building with AI! 🚀**

