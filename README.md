# FunWeb — Azure Static Web App

A small, interactive static web app built with plain HTML, CSS, and JavaScript. No build tools, no frameworks, no dependencies.

---

## What's in this project

```
FunWeb/
  src/
    index.html                  Main page
    styles.css                  All styles
    app.js                      All interactivity
    staticwebapp.config.json    Azure routing config
  README.md                     This file
```

The app has four interactive widgets:
- **Color Burst** — random background color generator
- **Quote of the Moment** — random dev quotes
- **Click Counter** — 10-second clicking challenge
- **Emoji Rain** — animated emoji shower

---

## Prerequisites

Before you deploy, make sure you have all of the following:

| Requirement | Notes |
|---|---|
| **Azure account** | Free account works: [portal.azure.com](https://portal.azure.com) |
| **GitHub account** | Azure Static Web Apps deploys via GitHub Actions |
| **Git installed** | [git-scm.com](https://git-scm.com) |
| **VS Code** | [code.visualstudio.com](https://code.visualstudio.com) |
| **Azure Static Web Apps extension** | Already installed (you confirmed this) |

---

## Step 1 — Push the project to GitHub

Azure Static Web Apps connects to a GitHub repo and deploys automatically on every push. You need to get this folder into GitHub first.

### 1a. Create a new GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** icon (top right) → **New repository**.
3. Name it `FunWeb` (or anything you like).
4. Set visibility to **Public** or **Private** — both work.
5. **Do NOT** check "Add a README file" (you already have one).
6. Click **Create repository**.
7. GitHub will show you a page with setup instructions. Copy the **remote URL** — it looks like:
   ```
   https://github.com/YOUR-USERNAME/FunWeb.git
   ```

### 1b. Initialize git and push from VS Code terminal

Open a terminal in VS Code (`Ctrl+`` ` ``) and run these commands one at a time:

```powershell
cd C:\Workdir\LearningLab\FunWeb

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/FunWeb.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username. After `git push` you'll be prompted to sign in to GitHub if you haven't already.

---

## Step 2 — Deploy from VS Code using the Azure Static Web Apps extension

### 2a. Sign in to Azure

1. In VS Code, open the **Activity Bar** (left sidebar) and click the **Azure** icon (looks like an "A" in a triangle).
2. If you see **Sign in to Azure**, click it and follow the browser prompt to authenticate with your Azure account.
3. After signing in, your Azure subscriptions will appear in the panel.

### 2b. Create the Static Web App

1. In the Azure panel, find **Static Web Apps** in the resource list.
2. Click the **+** (Create) button next to **Static Web Apps**.
   - If you don't see it, hover over the "Static Web Apps" section header — the + will appear.
3. A wizard will run in the VS Code Command Palette at the top. Answer each prompt:

   | Prompt | What to enter |
   |---|---|
   | **Select subscription** | Pick your Azure subscription |
   | **Enter a name** | `FunWeb` (or anything you like) |
   | **Select a region** | Pick one close to you (e.g., `East US 2`) |
   | **Select a build preset** | Choose **Custom** |
   | **Enter the location of your app code** | `/src` |
   | **Enter the location of your build output** | *(leave blank and press Enter)* |

4. VS Code will open a browser window asking you to authorize the Azure Static Web Apps GitHub App on your repository. Click **Authorize** and approve access to your `FunWeb` repo.

### 2c. Watch the deployment

After you authorize GitHub:

1. Azure automatically creates a **GitHub Actions workflow file** in your repo (`.github/workflows/azure-static-web-apps-*.yml`).
2. A GitHub Actions build + deploy run starts immediately.
3. You can watch it live:
   - Go to your GitHub repo → **Actions** tab.
   - You'll see a workflow named something like `Azure Static Web Apps CI/CD`.
   - Click it to watch the steps. It usually takes 1–2 minutes.

---

## Step 3 — Open your live site

1. Once the GitHub Actions workflow shows a green checkmark, go back to VS Code.
2. In the Azure panel under **Static Web Apps**, expand your `FunWeb` entry.
3. Right-click your app → **Browse Site** (or click the globe icon).
4. Your site is live at a URL like:
   ```
   https://wonderful-sand-0abc1234.azurestaticapps.net
   ```

You can also find the URL in the Azure Portal:
- Go to [portal.azure.com](https://portal.azure.com) → search for **Static Web Apps** → click your `FunWeb` app → the URL is shown on the **Overview** page.

---

## Step 4 — Make a change and redeploy

Every time you push to the `main` branch, GitHub Actions redeploys automatically. To test this:

1. Edit any file in `src/` (e.g., change the tagline text in `index.html`).
2. In the VS Code terminal:
   ```powershell
   git add .
   git commit -m "Update tagline"
   git push
   ```
3. Go to GitHub → **Actions** tab and watch the redeployment.
4. Refresh your live URL when the workflow completes.

---

## Troubleshooting

**The GitHub Actions workflow fails with a "build" error**
- Make sure the app location is set to `/src` (with the leading slash) in the workflow YAML file at `.github/workflows/azure-static-web-apps-*.yml`. Look for `app_location: "/src"` and `output_location: ""`.

**I don't see the Azure panel in VS Code**
- Press `Ctrl+Shift+X` to open Extensions, search for `Azure Static Web Apps`, and confirm it's installed and enabled.

**I get a "403 Forbidden" when browsing the site**
- This usually means the deployment is still in progress. Wait for the GitHub Actions workflow to finish.

**I want to use a custom domain**
- In the Azure Portal, go to your Static Web App → **Custom domains** → **+ Add** and follow the DNS configuration steps.

---

## Useful links

- [Azure Static Web Apps docs](https://learn.microsoft.com/en-us/azure/static-web-apps/overview)
- [VS Code Azure Static Web Apps extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps)
- [staticwebapp.config.json reference](https://learn.microsoft.com/en-us/azure/static-web-apps/configuration)
- [GitHub Actions for Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/github-actions-workflow)
