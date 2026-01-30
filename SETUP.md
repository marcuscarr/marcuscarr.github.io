# GitHub Pages Setup Guide

This guide will help you deploy your Premium Dry-Mix site to GitHub Pages.

## Prerequisites

- A GitHub account
- This repository forked or cloned to your account as `username.github.io`

## Step-by-Step Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (gear icon in the top menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - This will use the workflow file at `.github/workflows/deploy.yml`

### 2. Merge to Main Branch

The GitHub Actions workflow is configured to run when code is pushed to the `main` branch.

```bash
# If you're on a feature branch, merge to main:
git checkout main
git merge claude/create-github-pages-site-VRFBn
git push origin main
```

Alternatively, create a Pull Request on GitHub and merge it there.

### 3. Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Click on it to see the progress
4. Once complete (green checkmark), your site is live!

### 4. Access Your Site

Your site will be available at:
- **https://marcuscarr.github.io/** (or your GitHub username)

The deployment typically takes 1-3 minutes.

## Troubleshooting

### Workflow Fails

If the GitHub Actions workflow fails:

1. Check the Actions tab for error messages
2. Common issues:
   - **Permission denied**: Ensure GitHub Pages permissions are enabled (Settings → Actions → General → Workflow permissions → Read and write permissions)
   - **Build errors**: Check that all dependencies are in package.json
   - **404 errors**: Verify the base path in vite.config.js is set to '/'

### Site Not Updating

If you push changes but don't see them on your site:

1. Check that the workflow ran successfully in the Actions tab
2. Clear your browser cache (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)
3. Wait a few minutes - GitHub Pages can take time to propagate changes

### Custom Domain (Optional)

To use a custom domain like `www.premiumdrymix.com`:

1. In Settings → Pages, add your custom domain
2. Configure your DNS provider to point to GitHub Pages:
   - Add a CNAME record pointing to `marcuscarr.github.io`
   - Or A records to GitHub's IP addresses (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

## GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers**: Runs on push to `main` branch or manual trigger
2. **Build Job**:
   - Checks out code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds the site with `npm run build`
   - Uploads the `dist` folder as an artifact
3. **Deploy Job**:
   - Takes the build artifact
   - Deploys to GitHub Pages

## Local Testing

Before deploying, always test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## More Information

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)
