# 🤝 Contributing Guide

Thank you for considering contributing to the AI Movie Insight Builder! This document provides guidelines for contributing to the project.

## 🎯 Ways to Contribute

- Report bugs
- Suggest new features
- Improve documentation
- Submit code improvements
- Add tests
- Fix typos

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/your-username/ai-movie-insight-builder.git
cd ai-movie-insight-builder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding tests

## 💻 Development Workflow

### 1. Make Your Changes

- Follow existing code style
- Use TypeScript
- Add comments for complex logic
- Keep components small and focused

### 2. Test Your Changes

```bash
# Run the dev server
npm run dev

# Run tests
npm test

# Run linter
npm run lint
```

### 3. Commit Your Changes

```bash
git add .
git commit -m "feat: add movie comparison feature"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance

### 4. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 5. Create Pull Request

- Go to the original repository
- Click "New Pull Request"
- Select your branch
- Fill in the PR template
- Submit for review

## 📝 Code Style Guidelines

### TypeScript

```typescript
// ✅ Good: Explicit types
function fetchMovie(id: string): Promise<Movie> {
  // ...
}

// ❌ Bad: Implicit any
function fetchMovie(id) {
  // ...
}
```

### Components

```typescript
// ✅ Good: Props interface
interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  // ...
}

// ❌ Bad: No types
export default function Button({ label, onClick }) {
  // ...
}
```

### Error Handling

```typescript
// ✅ Good: Try-catch with specific error
try {
  const data = await fetchData();
  return data;
} catch (error) {
  console.error('Failed to fetch:', error);
  throw new Error('User-friendly message');
}

// ❌ Bad: No error handling
const data = await fetchData();
return data;
```

### Naming Conventions

- **Components**: PascalCase (`MovieCard.tsx`)
- **Functions**: camelCase (`fetchMovieData`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Types**: PascalCase (`Movie`, `Review`)

## 🧪 Testing Guidelines

### Write Tests For

- New utility functions
- API integrations
- Validation logic
- Data transformations

### Test Example

```typescript
describe('validateImdbId', () => {
  it('should validate correct format', () => {
    expect(validateImdbId('tt0133093')).toBe(true);
  });

  it('should reject invalid format', () => {
    expect(validateImdbId('invalid')).toBe(false);
  });
});
```

## 📚 Documentation Guidelines

### Code Comments

```typescript
/**
 * Fetches movie data from OMDb API
 * @param imdbId - The IMDb movie ID (e.g., tt0133093)
 * @returns Movie object with formatted data
 * @throws Error if API key is missing or movie not found
 */
export async function fetchMovieData(imdbId: string): Promise<Movie> {
  // Implementation
}
```

### README Updates

When adding features:
1. Update feature list
2. Add usage examples
3. Update screenshots if needed
4. Document new environment variables

## 🐛 Bug Reports

### Before Reporting

- Check existing issues
- Verify it's reproducible
- Test on latest version
- Check documentation

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: Windows/Mac/Linux
- Browser: Chrome/Firefox/Safari
- Node version: 18.x
- npm version: 9.x

**Screenshots**
If applicable

**Additional Context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Feature Description**
Clear description of the feature

**Use Case**
Why is this feature needed?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other approaches you've thought about

**Additional Context**
Mockups, examples, etc.
```

## 🔍 Code Review Process

### What We Look For

1. **Functionality**: Does it work as intended?
2. **Code Quality**: Is it clean and maintainable?
3. **Tests**: Are there appropriate tests?
4. **Documentation**: Is it documented?
5. **Style**: Does it follow conventions?

### Review Checklist

- [ ] Code follows style guidelines
- [ ] Tests pass
- [ ] No linter errors
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
- [ ] Commit messages are clear

## 🎨 UI/UX Contributions

### Design Principles

1. **Simplicity**: Keep it clean and uncluttered
2. **Consistency**: Use existing components and styles
3. **Accessibility**: Ensure keyboard navigation and screen reader support
4. **Responsiveness**: Test on multiple screen sizes
5. **Performance**: Optimize images and animations

### Adding New Components

1. Create in `/components` directory
2. Use TypeScript with proper props interface
3. Use TailwindCSS for styling
4. Make it responsive
5. Add to main page or relevant location
6. Document usage

## 🔐 Security Guidelines

### Do Not

- ❌ Commit API keys or secrets
- ❌ Expose sensitive data in logs
- ❌ Use `eval()` or similar dangerous functions
- ❌ Ignore security warnings

### Do

- ✅ Use environment variables for secrets
- ✅ Validate all user input
- ✅ Sanitize data before display
- ✅ Keep dependencies updated

## 📦 Adding Dependencies

### Before Adding

- Is it really needed?
- Is it actively maintained?
- Is it well-documented?
- Is the bundle size acceptable?

### How to Add

```bash
npm install package-name
```

Update documentation:
- Add to README tech stack
- Document usage
- Update package.json

## 🌟 Feature Ideas

### Potential Enhancements

1. **User Features**
   - Save favorite movies
   - Compare multiple movies
   - Movie recommendations
   - Share insights on social media

2. **Technical Features**
   - Dark mode
   - Internationalization
   - Advanced search filters
   - Export to PDF

3. **Analytics**
   - Popular searches
   - Sentiment trends
   - User engagement metrics

## 📞 Getting Help

### Resources

- **Documentation**: Read all .md files
- **Issues**: Check existing GitHub issues
- **Discussions**: Use GitHub Discussions
- **Code**: Review existing implementation

### Contact

- Open an issue for bugs
- Start a discussion for questions
- Submit PR for contributions

## ✅ Pull Request Checklist

Before submitting:

- [ ] Code works locally
- [ ] Tests pass
- [ ] No linter errors
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] Branch is up to date with main
- [ ] PR description is complete

## 🙏 Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🚀**

