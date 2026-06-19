# GitHub Repository Tracking System
**Master Inventory for rdammala Account (27 Repositories)**

**Last Updated:** 2026-06-18 | **Total Repos:** 27 (19 public, 2 private) | **Stars:** 2

---

## 📋 Quick Navigation
- [A. Content-Heavy Training Materials (5 repos)](#a-content-heavy-training-materials)
- [B. Role-Specific Portfolios (9 repos)](#b-role-specific-portfolios)
- [C. Generic/Legacy Portfolios (5 repos)](#c-generic-legacy-portfolios)
- [D. Specialized Content Repos (3 repos)](#d-specialized-content-repos)
- [E. Resume Engine & Tools (3 repos)](#e-resume-engine--tools)
- [F. Career Tracking & Focus (2 repos)](#f-career-tracking--focus)
- [Sync & Maintenance Guide](#sync--maintenance-guide)
- [Cleanup Checklist](#cleanup-checklist)

---

## A. Content-Heavy Training Materials
**Purpose:** In-depth learning resources and educational content
**Sync Frequency:** Weekly (active development)
**Storage:** Primary learning source; backup to OneDrive

| # | Repo | Type | Status | Updated | Size | Purpose |
|---|------|------|--------|---------|------|---------|
| 1 | **personal_rdammala** | Monorepo | 🟢 Active | 2026-06-19 | ~200MB | Root workspace: AzureDevOps (00-11 modules), SupportServices learning, Skills/Resume registries |
| 2 | **AzureDevOpsSelflearn** | Learning | 🟢 Active | 2026-06-14 | ~50MB | 11-module DevOps architecture course (Git, CI/CD, IaC, Testing, Blue-Green, Troubleshooting, Concepts, Optimization, YAML, OneBranch, Containers) |
| 3 | **SupportServicesLearning** | Learning | 🟢 Active | 2026-06-17 | ~100MB | 50-problem interview guides (25 DEV + 25 SRE with code examples) + Support Services platform knowledge |
| 4 | **interview-prep** | Learning | 🔵 Maintenance | 2026-06-13 | ~30MB | Interview prep content (older version; consider archiving if duplicated in SupportServicesLearning) |
| 5 | **career-focus-pages** | Tool + Content | 🟢 Active | 2026-06-18 | ~5MB | Job Application Tracker HTML + Portfolio Guide (public repo; 1⭐) |

**How to Sync:**
```powershell
# Sync all content repos to GitHub
cd c:\rdammala\personal_rdammala
git pull origin master
git add .
git commit -m "Update learning content"
git push origin master

# Individual repo syncs:
cd AzureDevOpsSelflearn; git pull; git push
cd ../SupportServicesLearning; git pull; git push
cd ../career-focus-pages; git pull; git push
```

---

## B. Role-Specific Portfolios
**Purpose:** Application-specific portfolio websites for targeted roles
**Pattern:** `<RoleName>` repos (e.g., "Senior-Manager-SRE")
**Naming Convention:** CompanyName_RoleName when applied (e.g., "Snowflake_Senior-Manager-SRE")
**Sync Frequency:** Weekly (when new applications submitted)
**Tech Stack:** Pure HTML/CSS/JS + Google Fonts

| # | Repo | Role | Status | Updated | Design Theme | Live URL | Download Link |
|---|------|------|--------|---------|--------------|----------|----------------|
| 1 | **Senior-Manager-SRE** | Senior Manager, SRE | 🟢 Active | 2026-06-16 | Cyan/Electric Blue | https://rdammala.github.io/Senior-Manager-SRE/ | Portfolio CV PDF |
| 2 | **Manager-Cloud-Support** | Manager, Cloud Support | 🟢 Active | 2026-06-16 | Rose/Coral | https://rdammala.github.io/Manager-Cloud-Support/ | Portfolio CV PDF |
| 3 | **Technical-Lead-Deployment-Operations** | Tech Lead, Deployment Ops | 🟢 Active | 2026-06-16 | Emerald/Mint | https://rdammala.github.io/Technical-Lead-Deployment-Operations/ | Portfolio CV PDF |
| 4 | **Staff-Escalation-Manager** | Staff Escalation Manager | 🟢 Active | 2026-06-16 | Amber/Gold | https://rdammala.github.io/Staff-Escalation-Manager/ | Portfolio CV PDF |
| 5 | **Senior-Incident-Manager** | Senior Incident Manager | 🟢 Active | 2026-06-16 | Purple/Violet | https://rdammala.github.io/Senior-Incident-Manager/ | Portfolio CV PDF |
| 6 | **Application-SRE-Manager** | Application SRE Manager | 🟢 Active | 2026-06-16 | Lime/Chartreuse | https://rdammala.github.io/Application-SRE-Manager/ | Portfolio CV PDF |
| 7 | **Senior-IT-Systems-Operations-Manager** | Senior IT Systems Ops Manager | 🟢 Active | 2026-06-16 | Indigo/Deep Blue | https://rdammala.github.io/Senior-IT-Systems-Operations-Manager/ | Portfolio CV PDF |
| 8 | **TPM-Infrastructure** | TPM, Infrastructure | 🟢 Active | 2026-06-16 | Magenta/Fuchsia | https://rdammala.github.io/TPM-Infrastructure/ | Portfolio CV PDF |
| 9 | **SRE-Observability-Engineering** | SRE, Observability Eng | 🟢 Active | 2026-06-17 | Slate Blue/Steel | https://rdammala.github.io/SRE-Observability-Engineering/ | Portfolio CV PDF |

**Each Contains:**
- ✅ index.html (hero, about, competencies, experience, impact, philosophy, education)
- ✅ style.css (dark mode, role-specific color gradient, responsive)
- ✅ script.js (dark/light toggle, localStorage, analytics)
- ✅ Rajesh_Dammala_<Role>_Complete_CV.pdf (4-5 page download)
- ✅ favicon.svg (RD icon)
- ✅ README.md (role description)

**How to Sync When Applying:**
```powershell
# Example: Applying to Snowflake for Staff-Escalation-Manager role
cd c:\rdammala\personal_rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\Repos\Staff-Escalation-Manager

# Rename for company tracking (optional):
# gh repo rename Staff-Escalation-Manager Snowflake_Staff-Escalation-Manager

# Or manually create new repo for company-specific version:
gh repo create Snowflake_Staff-Escalation-Manager --public --source=. --push
gh api repos/rdammala/Snowflake_Staff-Escalation-Manager/pages -X POST -f "source[branch]=main" -f "source[path]=/"

# Update Job_Application_Tracker.html with link
```

---

## C. Generic/Legacy Portfolios
**Purpose:** General-purpose portfolios; may be duplicates or older versions
**Status:** Consider consolidation/archival
**Sync Frequency:** Monthly (maintenance only)

| # | Repo | Purpose | Status | Updated | Note |
|---|------|---------|--------|---------|------|
| 1 | **RD-Profile** | Generic Technical Support Director portfolio | 🟡 Legacy | 2026-06-16 | Base portfolio used for all 9 role-specific forks; reusable template |
| 2 | **rajesh-dammala-portfolio** | Original main portfolio | 🔴 Inactive | 2026-06-15 | **Consider deprecating:** Superseded by role-specific portfolios |
| 3 | **portfolio** | Generic portfolio | 🔴 Inactive | 2026-06-15 | **Consider deprecating:** Old version; use RD-Profile as base instead |
| 4 | **Portfolio-D** | Variant portfolio | 🔴 Inactive | 2026-06-16 | **Consider deprecating:** Unclear purpose; check if needed |
| 5 | **tpm-portfolio** | TPM-specific old version | 🔴 Inactive | 2026-06-18 | **Consider archiving:** Replaced by TPM-Infrastructure role-specific repo |

**Recommendation:** Archive inactive repos to reduce clutter. Keep only RD-Profile as the base template.

---

## D. Specialized Content Repos
**Purpose:** Role-specific deep-dive learning materials
**Sync Frequency:** Monthly (when updating interview content)

| # | Repo | Focus | Status | Updated | Content |
|---|------|-------|--------|---------|---------|
| 1 | **Forward-Deployed-Engineer** | Forward Deployed Engineer role | 🟢 Active | 2026-06-19 | Role-specific learning path |
| 2 | **Azure-Build-Engineer** | Azure Build Engineer role | 🟢 Active | 2026-06-17 | Azure-specific content |
| 3 | **Platform-Monitoring-Engineer-Incident-Manager** | Platform Monitoring + Incident Mgmt | 🟢 Active | 2026-06-17 | Combined operational role content |

---

## E. Resume Engine & Tools
**Purpose:** Resume generation automation and templates
**Sync Frequency:** As needed (when updating generation logic)

| # | Repo | Purpose | Status | Type | Note |
|---|------|---------|--------|------|------|
| 1 | **resume-engine** | Main resume generation tool | 🟢 Active | 🌐 Public | Node.js-based docx/pdf generator; used by portfolio generation workflow |
| 2 | **resume-engine-option-b** | Alternative resume builder v2 | 🔵 Testing | 🔒 Private | Experimental; compare with option-c before committing |
| 3 | **resume-engine-option-c** | Alternative resume builder v3 | 🔵 Testing | 🔒 Private | Latest experimental version; evaluate for production use |

**Recommendation:** Consolidate resume-engine-option-b and option-c findings into main resume-engine, then archive the private versions.

---

## F. Career Tracking & Focus
**Purpose:** Job application tracking and portfolio guide
**Sync Frequency:** Daily (actively applying)

| # | Repo | Purpose | Status | Updated | Public |
|---|------|---------|--------|---------|--------|
| 1 | **career-focus-pages** | Job Application Tracker + Portfolio Guide | 🟢 Active | 2026-06-18 | 🌐 Public (1⭐) |
| 2 | **career-focus** | Career planning/tracking work | 🔵 Maintenance | 2026-06-13 | 🔒 Private |

**Key Files:**
- `Job_Application_Tracker.html` — Interactive tracker with Applications, Networking Contacts, Portfolio Guide tabs
- `resume-portfolio-workflow.md` — 14-step resume generation guide

**How to Update Tracker:**
```powershell
# Edit Job_Application_Tracker.html locally
# Add new entry to defaultApps array with:
# - portfolio: CompanyName_RoleName
# - role, company, date, link, status, comments, id

# Sync to repository:
cd career-focus-pages
git add Job_Application_Tracker.html
git commit -m "Add [Company] application to tracker"
git push origin master

# Live URL: https://rdammala.github.io/career-focus-pages/Job_Application_Tracker.html
```

---

## Sync & Maintenance Guide

### Weekly Sync Checklist
```powershell
# 1. Content repos
cd c:\rdammala\personal_rdammala
git pull origin master
git add .
git commit -m "Weekly content sync"
git push origin master

# 2. Active portfolio repos (if updated)
foreach ($repo in @('Senior-Manager-SRE', 'Manager-Cloud-Support', 'Technical-Lead-Deployment-Operations')) {
    cd $repo
    git pull origin master
    git push origin master
    cd ..
}

# 3. Resume engine (if logic changed)
cd resume-engine
git pull origin master
git push origin master
```

### Master Sync Script
Create `sync-all-repos.ps1`:
```powershell
param(
    [string]$baseDir = "C:\rdammala\personal_rdammala",
    [array]$reposToSync = @(
        ".",  # personal_rdammala root
        "AzureDevOpsSelflearn",
        "SupportServicesLearning"
    )
)

foreach ($repo in $reposToSync) {
    $path = Join-Path $baseDir $repo
    if (Test-Path $path) {
        Push-Location $path
        Write-Host "Syncing $repo..."
        git pull origin master
        git add .
        git commit -m "Automated sync - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" -ErrorAction SilentlyContinue
        git push origin master
        Pop-Location
    }
}
```

---

## Repo Dependency Map
```
personal_rdammala (ROOT)
├── AzureDevOpsSelflearn/
├── SupportServicesLearning/
├── Resume_Registry/
│   └── resume-portfolio-workflow.md (references resume-engine)
├── Skills_Registry/
└── References:
    ├── resume-engine (generates docx/pdf)
    ├── career-focus-pages (tracker + links to portfolios)
    └── 9x Role-Specific Portfolios (linked in tracker)
```

---

## Cleanup Checklist

### 🗑️ Candidates for Archival (to reduce clutter)
- [ ] `rajesh-dammala-portfolio` — Superseded by role-specific repos
- [ ] `portfolio` — Old generic version
- [ ] `Portfolio-D` — Unclear purpose; verify before deleting
- [ ] `tpm-portfolio` — Replaced by TPM-Infrastructure
- [ ] `interview-prep` — If content moved to SupportServicesLearning
- [ ] `resume-engine-option-b` — If option-c is approved for production
- [ ] `resume-engine-option-c` — If option-b is approved for production

### 📌 Archive Command (safe — doesn't delete)
```powershell
# Mark repo as archived (keeps it visible but read-only)
gh repo archive rdammala/rajesh-dammala-portfolio --confirm

# View archived repos:
gh repo list rdammala --archived
```

### 🔍 Verify Before Deletion
```powershell
# Check repo size and last commit date
gh repo view rdammala/Portfolio-D --json diskUsage,pushedAt

# Check for stars or forks
gh repo view rdammala/Portfolio-D --json stargazerCount,forkCount
```

---

## 📊 Summary Stats
- **Total Repos:** 27
- **Active (🟢):** 19
- **Maintenance (🔵):** 2
- **Legacy/Inactive (🔴):** 5
- **Public:** 19
- **Private:** 2
- **Content Heavy:** 5 repos (~380MB)
- **Portfolios:** 14 repos (~50MB)
- **Tools/Scripts:** 5 repos (~20MB)
- **Career Tracking:** 2 repos (~5MB)
- **Total Stars:** 2 (career-focus-pages, interview-prep)

---

## 📅 Next Steps
1. **This Week:** Archive 4-5 legacy portfolio repos
2. **This Month:** Consolidate resume-engine options
3. **This Quarter:** Add GitHub Actions for automated resume generation + deployment
4. **Quarterly:** Review all repos for content staleness; update README files with links to tracking system

---

## 📍 Key Tracking Files
- **Master Inventory:** This file (GITHUB_REPOSITORY_TRACKING.md)
- **Resume Workflow:** `/memories/resume-portfolio-workflow.md`
- **Job Tracker:** `career-focus-pages/Job_Application_Tracker.html` → https://rdammala.github.io/career-focus-pages/
- **Interview Content:** `SupportServicesLearning/CODING_INTERVIEW_PRACTICE_*.md`
- **DevOps Learning:** `AzureDevOpsSelflearn/00-DevOps-Architecture-Complete.md`

**To Sync This File Across All Locations:**
```powershell
Copy-Item "C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\_General\GITHUB_REPOSITORY_TRACKING.md" `
  "c:\rdammala\personal_rdammala\GITHUB_REPOSITORY_TRACKING.md" -Force
cd c:\rdammala\personal_rdammala
git add GITHUB_REPOSITORY_TRACKING.md
git commit -m "Add GitHub repository tracking guide"
git push origin master
```
