# Student Portal - Deployment Guide

## Netlify Deployment Steps

### 1. **Prerequisites**
- Git installed and configured
- GitHub/GitLab/Bitbucket account
- Netlify account (sign up at https://app.netlify.com)

### 2. **Prepare Your Project**
All necessary configuration files have been created:
- ✅ `netlify.toml` - Build and deployment settings
- ✅ `.gitignore` - Excludes unnecessary files from git
- ✅ `angular.json` - Angular build configuration
- ✅ `package.json` - Project dependencies and scripts

### 3. **Push to GitHub**
Your project is already connected to Git. If not yet pushed, run:

```bash
cd c:\Users\Fatou Jagne\Desktop\admin dashboatrd\student-portal
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

### 4. **Deploy on Netlify**

#### Option A: Connect GitHub Repository (Recommended)
1. Go to https://app.netlify.com
2. Click **"New site from Git"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository (`student-portal`)
5. Netlify will auto-detect your `netlify.toml` configuration
6. Click **"Deploy site"**

#### Option B: Manual Deployment (Drag & Drop)
1. Run production build locally:
   ```bash
   npm run build
   ```
2. Go to https://app.netlify.com/drag-and-drop
3. Drag the `dist/student-portal/browser` folder to Netlify
4. Your site will be live immediately!

### 5. **Build Configuration**
Your `netlify.toml` file includes:
- **Build Command:** `npm run build`
- **Publish Directory:** `dist/student-portal/browser`
- **Redirects:** All routes redirect to `index.html` for client-side routing
- **Caching:** Optimized cache headers for assets

### 6. **Environment Variables** (if needed)
Add environment variables in Netlify dashboard:
1. Go to **Site Settings → Build & Deploy → Environment**
2. Add any environment variables your app needs
3. Redeploy

### 7. **Custom Domain** (Optional)
1. Go to **Site Settings → Domain Management**
2. Add your custom domain
3. Follow DNS configuration instructions

### 8. **Post-Deployment Checks**
- ✅ Verify all routes work (Dashboard, Products, Reports, Settings)
- ✅ Test sidebar navigation
- ✅ Check responsive design on mobile
- ✅ Verify API calls (if any)

### 9. **Troubleshooting**

**Build fails:**
- Check that `npm run build` works locally
- Verify all dependencies are in `package.json`
- Check Node version compatibility (v18 recommended)

**Routes not working:**
- The `netlify.toml` redirects handle SPA routing
- No additional changes needed

**Assets not loading:**
- Verify `public` folder assets are in `angular.json`
- Check asset paths are relative

---

**Your deployment is ready!** 🚀

Visit your site at: `https://your-project-name.netlify.app`
