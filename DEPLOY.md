# How to Deploy Your Portfolio

There are several ways to deploy your Angular portfolio so others can access it. Here are the easiest options:

## Option 1: Netlify (Recommended - Easiest)

### Method A: Drag & Drop (Fastest)
1. Build your project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Drag and drop the `dist` folder onto Netlify
4. Your site will be live instantly with a URL like `https://random-name-123.netlify.app`
5. You can customize the domain name in Site Settings

### Method B: Git Integration (Auto-deploy)
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"
7. Every time you push to GitHub, Netlify will automatically rebuild and deploy

---

## Option 2: Vercel (Also Very Easy)

1. Build your project:
   ```bash
   npm run build
   ```
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   cd portfolio-site-angular
   vercel
   ```
4. Follow the prompts (or use the web interface at [vercel.com](https://vercel.com))

---

## Option 3: GitHub Pages

1. Update `angular.json` to set `baseHref`:
   ```json
   "build": {
     "options": {
       "baseHref": "/portfolio-site-angular/"
     }
   }
   ```
   (Or use `/` if deploying to a custom domain)

2. Build:
   ```bash
   npm run build
   ```

3. Push the `dist` folder contents to the `gh-pages` branch:
   ```bash
   npx angular-cli-ghpages --dir=dist
   ```

4. Enable GitHub Pages in your repo settings (Settings → Pages)

---

## Option 4: Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```
   - Select `dist` as public directory
   - Configure as single-page app: Yes
   - Don't overwrite index.html: No

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

---

## Quick Start (Netlify - Recommended)

**Fastest way to go live:**

1. Run: `npm run build`
2. Go to: https://app.netlify.com/drop
3. Drag the `dist` folder
4. Share your URL!

Your portfolio will be live in seconds! 🚀

---

## Custom Domain

After deploying, you can add a custom domain:
- **Netlify**: Site Settings → Domain management → Add custom domain
- **Vercel**: Project Settings → Domains → Add domain
- **GitHub Pages**: Repository Settings → Pages → Custom domain

---

## Important Notes

- Make sure `npm run build` completes successfully before deploying
- The `dist` folder contains your production-ready site
- All routes will work correctly with the provided configuration files
- Your site will be accessible 24/7 once deployed
