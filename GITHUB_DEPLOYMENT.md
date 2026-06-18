# 🚀 GitHub Deployment Guide

Complete guide to push your `personal_rdammala` repository to GitHub.

## Prerequisites

- GitHub account (rdammala)
- GitHub CLI (`gh`) installed and authenticated
- Git installed

## Step 1: Verify GitHub CLI Authentication

```powershell
# Check if gh is available
gh auth status

# If not authenticated, login
gh auth login
```

**Expected Output**: Shows your GitHub account authenticated

---

## Step 2: Initialize Git Repository

```powershell
# Navigate to your repo
cd "c:\rdammala\personal_rdammala"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Personal learning repository with Skills Registry, Azure DevOps guides, and SupportServices interview prep"

# Verify status
git status
```

---

## Step 3: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)

```powershell
# Create public repository and push
gh repo create personal_rdammala `
  --public `
  --source=. `
  --description "Comprehensive learning repository: Azure DevOps, SupportServices architecture, AI agents, and Skills Registry" `
  --remote=origin `
  --push
```

**Expected**: Repository created and code pushed to GitHub

### Option B: Manual GitHub + Git

1. Go to https://github.com/new
2. Create repository named `personal_rdammala`
3. Set to **Public**
4. Copy repository URL
5. In PowerShell:

```powershell
cd "c:\rdammala\personal_rdammala"

# Add remote
git remote add origin https://github.com/rdammala/personal_rdammala.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 4: Verify Repository on GitHub

```powershell
# Open in browser
start "https://github.com/rdammala/personal_rdammala"

# Or use gh command
gh repo view personal_rdammala --web
```

**Check**:
- ✅ Repository is public
- ✅ All folders visible (AzureDevOpsSelflearn, SupportServicesLearning, Skills_Registry)
- ✅ README.md displays correctly
- ✅ .gitignore is present

---

## Step 5: Configure GitHub Pages (Optional)

To host documentation on GitHub Pages:

```powershell
# Enable Pages for /docs folder (if desired)
# Currently, use for hosting portfolio/landing page

# Future: Configure Pages in repository settings
# Settings → Pages → Source: main / /root
```

---

## Step 6: Keep Repository Updated

### Local Development

```powershell
cd "c:\rdammala\personal_rdammala"

# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Update: [Description of changes]"

# Push to GitHub
git push origin main
```

### Pull Latest from GitHub

```powershell
# Fetch updates
git fetch origin

# Merge updates
git pull origin main
```

---

## Common Git Commands

```powershell
# View commit history
git log --oneline -10

# Create a new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature

# Undo recent changes
git reset --hard HEAD~1

# View file history
git log --follow -- path/to/file.md
```

---

## Repository Structure on GitHub

After pushing, your GitHub repo will look like:

```
rdammala/personal_rdammala/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/
├── AzureDevOpsSelflearn/
├── SupportServicesLearning/
├── Skills_Registry/
│   ├── SupportServices/
│   ├── Azure/
│   ├── GitHub/
│   ├── Development/
│   ├── AI_ML/
│   └── *.md (README, INDEX, QUICK_REFERENCE)
├── .editorconfig
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── package.json
├── README.md
└── personal_rdammala.code-workspace
```

---

## Troubleshooting

### Error: "fatal: not a git repository"
```powershell
# Initialize git
cd "c:\rdammala\personal_rdammala"
git init
```

### Error: "fatal: remote origin already exists"
```powershell
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/rdammala/personal_rdammala.git
```

### Error: "refused to merge unrelated histories"
```powershell
# Allow unrelated histories
git pull origin main --allow-unrelated-histories
```

### Can't find gh command
```powershell
# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Verify gh is installed
gh --version
```

---

## Next Steps

1. ✅ Push repo to GitHub
2. ✅ Verify all files appear
3. ⚠️ Configure GitHub Pages (optional)
4. ⚠️ Add GitHub Actions (optional, for automation)
5. ⚠️ Invite collaborators (optional)

---

## Repository URL

📍 **Your Repository**: https://github.com/rdammala/personal_rdammala

---

**Last Updated**: June 2026
