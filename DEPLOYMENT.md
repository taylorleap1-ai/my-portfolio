# GitHub Pages Deployment Guide

## 🚀 Steps to Host Your Portfolio on GitHub

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** button in the top right → **"New repository"**
3. Repository settings:
   - **Name**: `my-portfolio` (or `yourusername.github.io` for a user site)
   - **Description**: "Taylor Leap - 3D Modeler, VFX Artist, Motion Designer Portfolio"
   - **Visibility**: Public
   - **DO NOT** initialize with README, .gitignore, or license (you already have these)
4. Click **"Create repository"**

### 2. Connect Your Local Repository to GitHub

Copy and run these commands in your terminal (replace `YOUR-USERNAME` with your GitHub username):

```powershell
# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Scroll down and click **Pages** (left sidebar)
4. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **Save**

### 4. Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-3 minutes
- You'll see a message: "Your site is live at `https://YOUR-USERNAME.github.io/my-portfolio/`"

### 5. Access Your Live Portfolio

Your portfolio will be available at:
- `https://YOUR-USERNAME.github.io/my-portfolio/` (if you named it `my-portfolio`)
- OR `https://YOUR-USERNAME.github.io/` (if you named it `YOUR-USERNAME.github.io`)

## 📝 Making Updates

After making changes to your portfolio:

```powershell
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Update: describe your changes"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your changes within 1-3 minutes.

## 🎨 Custom Domain (Optional)

If you have a custom domain:

1. In repository Settings → Pages
2. Add your custom domain in "Custom domain" field
3. Add a `CNAME` file to your repository root with your domain
4. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`

## ⚡ Current Repository Status

✅ All changes committed
✅ Clean folder structure with organized assets
✅ Ready to push to GitHub

**Next step**: Create your GitHub repository and run the commands in Step 2!

## 🔧 Troubleshooting

**Issue**: Images or fonts not loading
- **Solution**: Make sure all paths are relative (no leading `/`)
- All paths should start with `assets/` not `/assets/`

**Issue**: 404 error on page navigation
- **Solution**: GitHub Pages serves files case-sensitively
- Check that all links match file names exactly (3d.html, not 3D.html)

**Issue**: Changes not showing up
- **Solution**: Wait 1-3 minutes for GitHub to rebuild
- Clear your browser cache with Ctrl+Shift+R
- Check Actions tab on GitHub for build status
