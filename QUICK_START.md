# 🚀 Quick Start Guide

## Installation & Running

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# The site will automatically open at http://localhost:3000
```

That's it! The landing page should now be running locally.

## What You'll See

The landing page includes these sections in order:

1. **Header** - Sticky navigation with logo and CTAs
2. **Hero** - Main headline, stats, and phone mockup
3. **Trust Bar** - Social proof indicators
4. **Problem** - The digital violence crisis
5. **Solution** - How Saife AI works (3 key features)
6. **Features** - Complete feature grid (6 features)
7. **Traction** - Live metrics and proof
8. **Who We Protect** - Target audience and regions
9. **Roadmap** - 12-month scaling plan
10. **Testimonials** - User feedback
11. **Partners** - Partner categories and logos
12. **Dual CTA** - Download (users) + Support (investors)
13. **Footer** - Links, newsletter, legal

## Making Changes

### Update Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    DEFAULT: '#1A4D8F', // Change this
  }
}
```

### Update Content
Edit the relevant component in `src/components/sections/`

Example - Change hero headline:
```jsx
// File: src/components/sections/Hero.jsx
<h1>Your New Headline Here</h1>
```

### Add New Section
1. Create file: `src/components/sections/NewSection.jsx`
2. Import in `App.jsx`: `import NewSection from './components/sections/NewSection'`
3. Add to render: `<NewSection />`

## Building for Production

```bash
# Create optimized build
npm run build

# The build files will be in the 'dist' folder
# Upload this folder to your hosting provider
```

## Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts - that's it!
```

Or simply:
1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Auto-deploy on every push

## Common Issues

### Port already in use
```bash
# Kill process on port 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill

# Or change port in vite.config.js
```

### Dependencies errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind styles not working
```bash
# Make sure postcss.config.js exists
# Restart dev server
npm run dev
```

## Need Help?

- Check `README.md` for detailed documentation
- Check `PROJECT_OVERVIEW.md` for full project details
- Check `DEPLOYMENT.md` for deployment options

## Next Steps

1. ✅ Replace placeholder partner logos
2. ✅ Add real product screenshots
3. ✅ Set up actual download links
4. ✅ Configure analytics
5. ✅ Test on mobile devices
6. ✅ Deploy to production

---

**Happy building! 🎉**

