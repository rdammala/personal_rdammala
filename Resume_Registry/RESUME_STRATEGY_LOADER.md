# Resume Strategy Loader — One-File Reference
**Created:** June 18, 2026  
**Purpose:** Consolidated entry point for all resume strategy, workflow, and context files.  
**Last Synced:** 2026-06-18

---

## 🎯 Quick Start

When starting a new resume session, load **ONLY** this file for complete context. All references below point to the source of truth.

---

## 📋 Essential Files (Load in this order)

### 1. Resume Context (Your Professional Profile)
**File:** `C:\Users\v-rdammala\.copilot\resume-context.md`  
**What it contains:**
- Contact info: rajesh.dammala@gmail.com, 425-229-0060, linkedin.com/in/rajesh-dammala
- 16+ years work history (Microsoft via TechMahindra/Allyis and Mindtree, IBM)
- Current role: Lead Escalations Manager, Xbox CXT SRE (May 2021–Present)
- Key achievements: 85% → 98% efficiency, 32% resolution time reduction, 30–35% incident automation
- Certifications: MS 70-533/70-534, AZ-900, Google AI/Cloud
- Core skills: Azure, PowerShell, Kusto/KQL, ADO, Leadership, SRE/Operations
- Base location: Morrisville, NC

**Action:** Use this as your **professional baseline**. Every resume starts here.

---

### 2. Resume Portfolio Workflow (The 12-Step Process)
**File:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\_General\resume-portfolio-workflow.md`  
**What it contains:**
- MANDATORY 12-step workflow for every resume application:
  1. Context loading
  2. Create company folder
  3. Generate Job_Details.md
  4. Generate Resume (.docx + .pdf)
  5. Generate Cover Letter (.docx + .pdf)
  6. Generate Portfolio Website
  7. Deploy to GitHub Pages
  8. Add portfolio link to Job_Details.md
  9. Update Job Application Tracker
  10. Embed portfolio link in resume & cover letter
  11. Portfolio UX Baseline (mandatory checklist)
  12. Tracker Reliability Rules (data integrity)

**Key Details:**
- **Resume naming:** `Rajesh_Dammala_<Company>_<RoleShortName>_v<N>.docx` / `.pdf`
- **Cover letter naming:** `Rajesh_Dammala_CoverLetter_<Company>_v<N>.docx` / `.pdf`
- **Portfolio repo location:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\Repos\<RoleName>\`
- **Font:** Calibri (docx) / Helvetica (pdf), 0.5in margins
- **Length:** Resume max 2 pages, Cover Letter max 1 page
- **Styling:** Rotate accent colors per portfolio (teal, purple, amber, emerald, rose, cyan, lime, indigo, magenta)
- **Portfolio UX Baseline (non-negotiable):**
  - Download Resume button in hero section
  - Dark/Light mode toggle with localStorage persistence
  - RD tab icon (favicon.svg) instead of default globe

**Action:** Follow this workflow **exactly** for every application. Do NOT skip steps.

---

### 3. Job Search Strategy (Focus & Constraints)
**File:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\_General\Resume Strategy\job-search-strategy.md`  
**What it contains:**
- H-1B visa sponsorship constraints (focus on big tech, large enterprises, universities)
- Two primary target roles (not ten):
  - **Primary:** Engineering Manager / IT Operations Manager
  - **Secondary:** Senior SRE / SRE Lead
- Skill gaps to close (Python, Kubernetes, Linux, Prometheus/Grafana, Go)
- Application tracking table with follow-up rules
- Networking strategy (LinkedIn, 2 new connections/day, referrals)
- Weekly rhythm: apply 2-3 targeted roles, skill-build 2x/week, network daily
- Immediate action items (follow-ups, confirm H-1B status, start Python project)

**Key Constraint:** You do NOT need another resume. You need:
1. Fewer, better-targeted applications
2. Skills that match modern JDs
3. Human connections (bypass the resume black hole)
4. Disciplined follow-up

**Action:** Review this weekly to stay disciplined on role targeting and follow-ups.

---

### 4. SRE Skills Learning Plan (30-Day Sprint)
**File:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\_General\Resume Strategy\learning-plan.md`  
**What it contains:**
- **Week 1–2:** Python fundamentals + Linux daily use (WSL2 Ubuntu)
- **Week 3–4:** Kubernetes + Python intermediate
- **Week 5–6:** Prometheus/Grafana + Python monitoring
- **Week 7–8:** Go language basics
- **GitHub portfolio targets:** 5 repos in 8 weeks
  - `incident-triage-bot` (Python)
  - `k8s-health-checker` (Python)
  - `prometheus-custom-exporter` (Python)
  - `endpoint-health-cli` (Go)
  - `sre-runbook-automator` (Python)
- **Certifications to target:** CKA (Week 8–10), AZ-305 (Month 3), PCA (Month 3–4)

**Action:** Follow this as your skill-building roadmap. Python is priority #1.

---

### 5. AI Resume Prompt (For Copilot/ChatGPT/Claude)
**File:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\_General\Resume Strategy\AI_Resume_Prompt.md`  
**What it contains:**
- Reusable prompt template for any AI assistant (GitHub Copilot CLI, ChatGPT, Claude, Gemini)
- Your complete professional profile (no need to repeat yourself every session)
- Workflow for when you share a JD:
  - Analyze job → Extract key requirements
  - Create tailored resume, cover letter, Job Details summary
  - File organization guidance

**Action:** Copy this prompt into new AI sessions when you need resume help. It's self-contained.

---

## 🗂️ File Organization Reference

```
Resumes/2026/
├── _General/
│   ├── Resume Strategy/
│   │   ├── resume-context.md ← START HERE
│   │   ├── resume-portfolio-workflow.md ← MANDATORY WORKFLOW
│   │   ├── job-search-strategy.md ← WEEKLY REVIEW
│   │   ├── learning-plan.md ← SKILL ROADMAP
│   │   └── AI_Resume_Prompt.md ← FOR AI SESSIONS
│   ├── resume-portfolio-workflow.md (duplicate copy for accessibility)
│   ├── *.docx / *.pdf (generic resumes by role)
│   └── STAR_Interview_Preparation_Guide.* (interview prep)
├── Repos/
│   ├── career-focus-pages/ (Job Application Tracker)
│   ├── AzureDevOpsSelflearn/
│   ├── RD-Profile/ (generic portfolio)
│   ├── Senior-Manager-SRE/ (SRE-specific portfolio)
│   ├── Senior-Incident-Manager/ (incident management portfolio)
│   ├── Staff-Escalation-Manager/ (escalation portfolio)
│   ├── TPM-Infrastructure/ (TPM portfolio)
│   ├── Application-SRE-Manager/ (app-focused SRE)
│   ├── Technical-Lead-Deployment-Operations/ (deployment ops)
│   ├── Manager-Cloud-Support/ (cloud support manager)
│   ├── Senior-IT-Systems-Operations-Manager/ (IT ops)
│   └── [9 more portfolio repos to follow same pattern]
├── [CompanyName]/ (per-application folders)
│   ├── Job_Details.md
│   ├── Rajesh_Dammala_<Company>_<Role>.docx
│   ├── Rajesh_Dammala_<Company>_<Role>.pdf
│   ├── Rajesh_Dammala_CoverLetter_<Company>.docx
│   └── Rajesh_Dammala_CoverLetter_<Company>.pdf
└── Job_Application_Tracker.html ← Master tracker file
```

---

## ⚡ Workflow Quick Reference

### Starting a New Application

```
1. Load this file (RESUME_STRATEGY_LOADER.md)
2. Load resume-context.md — understand your profile
3. Fetch job posting (URL from recruiter/career portal)
4. Follow resume-portfolio-workflow.md step-by-step (all 12 steps)
5. Use AI_Resume_Prompt.md to brief any AI assistant
6. Generate deliverables: Resume, Cover Letter, Job Details, Portfolio
7. Deploy portfolio to GitHub Pages
8. Update Job Application Tracker
9. Track follow-up: 5 business days → 1st follow-up, 10 days → 2nd follow-up, then move on
```

### Weekly Discipline Check

```
Monday    → Review Job_Application_Tracker.html, send follow-ups, apply to 2–3 targeted roles
Tuesday   → Skill-building (Python/K8s) — 1 hour minimum
Wednesday → Networking (LinkedIn, reach out, engage)
Thursday  → Skill-building — 1 hour minimum
Friday    → Mock interview OR informational chat with target company
Weekend   → GitHub project work (5-repo portfolio goal)
```

### Tracker Sync & Update Rules

**File:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\Job_Application_Tracker.html`

**Also in repo:** `C:\Users\v-rdammala\OneDrive - Microsoft\Desktop\Personal\Resumes\2026\Repos\career-focus-pages\Job_Application_Tracker.html`

**After every application:**
1. Add entry to `defaultApps` array in HTML `<script>` section:
   - `portfolio`: Portfolio repo name (e.g., `Senior-Manager-SRE`)
   - `role`: Exact role title from JD
   - `company`: Company name
   - `date`: Today's date (YYYY-MM-DD)
   - `link`: GitHub Pages URL (e.g., `https://rdammala.github.io/Senior-Manager-SRE/`)
   - `status`: `'Applied'`
   - `comments`: `''`
   - `id`: Next sequential number
2. Copy to career-focus-pages repo
3. Push: `git add . ; git commit -m "Add <Company> application to tracker" ; git push origin master`
4. **Live tracker:** https://rdammala.github.io/career-focus-pages/Job_Application_Tracker.html

**Data integrity rules:**
- No trailing commas in `defaultApps` array
- `loadApps()` must merge new `defaultApps` entries into existing localStorage
- Header shows **Last Updated** in local time (not UTC)
- Metadata key: `rd_tracker_meta` with `lastUpdatedMs` (epoch ms)

---

## 🔗 External References

- **GitHub account:** https://github.com/rdammala
- **Existing portfolio:** https://rdammala.github.io/rajesh-dammala-portfolio/
- **Job tracker live:** https://rdammala.github.io/career-focus-pages/Job_Application_Tracker.html
- **H-1B data lookup:** https://h1bdata.info (for finding companies that sponsor)
- **npm packages already installed:** docx, pdfkit (in Resumes/2026/)

---

## 📊 Sync Status (as of 2026-06-18)

### Local Workspace Repos
| Repo | Remote | Branch | Hash Match? | Status |
|------|--------|--------|-------------|--------|
| `c:\rdammala\personal_rdammala` | `rdammala/personal_rdammala` | master | ✅ Yes (09e7486f) | In sync |
| `Resumes/Repos/AzureDevOpsSelflearn` | `rdammala/AzureDevOpsSelflearn` | main | ✅ Yes (e1c8136) | In sync |
| `Resumes/Repos/career-focus-pages` | `rdammala/career-focus-pages` | master | ✅ Yes (0d9dc4b) | In sync |

### Strategy Files
| File | Location | Last Updated | Synced Copies |
|------|----------|--------------|----------------|
| resume-context.md | `C:\Users\v-rdammala\.copilot\` | 2026-06 | ✅ 4 copies |
| resume-portfolio-workflow.md | `_General\` | 2026-06-17 | ✅ Documented in memories |
| job-search-strategy.md | `_General\Resume Strategy\` | 2026-06-08 | — |
| learning-plan.md | `_General\Resume Strategy\` | 2026-06-08 | — |
| AI_Resume_Prompt.md | `_General\Resume Strategy\` | 2026-06 | — |

---

## ✅ Next Actions

- [ ] Review this file (RESUME_STRATEGY_LOADER.md) at the start of every resume session
- [ ] When job posting arrives: Load resume-context + workflow → Follow 12 steps exactly
- [ ] Skill-building: Start learning-plan.md Week 1 (Python + Linux)
- [ ] Follow-ups: Check Job_Application_Tracker weekly, send overdue follow-ups
- [ ] GitHub sync: Ensure all portfolio repos are pushed before deploying to GitHub Pages

---

**💡 Pro Tip:** Bookmark this file and return here first before every resume session. Everything flows from this entry point.

**📍 Location:** `c:\rdammala\personal_rdammala\Resume_Registry\RESUME_STRATEGY_LOADER.md`

**Version:** 1.0 | Created: 2026-06-18 | Next Review: Weekly (tied to Job Application Tracker updates)
