# Saife AI - Deployment Guide

## Development

```bash
# Install dependencies
npm install

# Run development server (opens at http://localhost:3000)
npm run dev
```

## Production Build

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment Options

### 1. Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### 2. Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`

### 3. GitHub Pages
Add to `vite.config.js`:
```js
export default defineConfig({
  base: '/saife-ai/', // Replace with your repo name
  // ... rest of config
})
```

Then deploy:
```bash
npm run build
npx gh-pages -d dist
```

### 4. Custom Server (Apache/Nginx)
After running `npm run build`, upload the `dist` folder to your server.

**Nginx config:**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Environment Variables

Create `.env` file for production:
```bash
VITE_APP_NAME=Saife AI
VITE_API_URL=https://api.saife.ai
```

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset compression
- Tree shaking
- Minification
- Image optimization

## SEO & Meta Tags

Update `index.html` for production:
- Add Google Analytics
- Update meta descriptions
- Add Open Graph tags
- Add Twitter Card tags

## Custom Domain

After deployment, configure your custom domain:
1. Add CNAME record pointing to your deployment platform
2. Configure SSL certificate (usually automatic)
3. Update DNS settings

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Hotjar for user behavior
- Vercel/Netlify Analytics

