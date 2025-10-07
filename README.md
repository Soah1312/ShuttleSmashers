# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2777e441-9ea2-4a5c-8aba-7e649debd8ff

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2777e441-9ea2-4a5c-8aba-7e649debd8ff) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy to Railway (Recommended for Production)

This project is configured for easy deployment to Railway.

**Prerequisites:**
- Railway account ([railway.app](https://railway.app))
- GitHub repository

**Deployment Steps:**

1. **Push to GitHub** (if not already done):
   ```sh
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Railway:**
   - Go to [Railway.app](https://railway.app) and sign in
   - Click "New Project" → "Deploy from GitHub repo"
   - Connect your GitHub account and select this repository

3. **Automatic Deployment:**
   - Railway will automatically detect your Vite React app
   - Build command: `npm run build`
   - Start command: `npm run preview`

4. **Custom Domain (Optional):**
   - Go to your project settings
   - Add your domain in the "Domains" section
   - Configure DNS records as instructed

**Configuration Files Included:**
- `railway.json` - Railway-specific configuration
- `Dockerfile` - Alternative Docker deployment
- `public/_redirects` - SPA routing support

### Deploy to Lovable

Simply open [Lovable](https://lovable.dev/projects/2777e441-9ea2-4a5c-8aba-7e649debd8ff) and click on Share → Publish.
