# 0️⃣ Project Overview — Complete SDLC

**Module Duration:** 15 minutes  
**Difficulty:** Beginner  
**Prerequisites:** None

---

## 🎯 What Is This Project?

The **personal_rdammala** project is a **resume & portfolio automation system** that demonstrates a complete software development lifecycle (SDLC). It manages:

- **27 GitHub repositories** (learning modules, role-based portfolios, tools)
- **9 role-based portfolio websites** (HTML/CSS/JS, GitHub Pages)
- **Resume generation pipeline** (from templates to .docx/.pdf)
- **Infrastructure as Code** (Bicep templates for Azure)
- **DevOps learning materials** (11 modules × 8 files each)
- **Automation scripts** (PowerShell for repo synchronization)

**In plain terms:** "A smart system that generates tailored resumes and portfolios automatically, demonstrating modern DevOps, Git, automation, and full-stack web development skills."

---

## 🤔 Why Build This Project?

**Problems it solves:**
1. **Manual Resume Versioning** → Automate with templates (Node.js)
2. **Portfolio Scattered Across Repos** → Centralize sync with PowerShell
3. **Repetitive Portfolio Deployments** → GitHub Pages automation
4. **Lost Application Tracking** → Web-based Job Tracker
5. **Knowledge Scattered** → Centralized DevOps learning modules

**Business Value:**
- ✅ Reduces manual work by 95% (resume versioning)
- ✅ Enables A/B testing of portfolio layouts
- ✅ Tracks job applications and networking contacts
- ✅ Demonstrates DevOps best practices to employers
- ✅ Provides interview prep material for SRE/DevOps roles

---

## 🏗️ Project Architecture (High Level)

```
┌─────────────────────────────────────────────────────────┐
│                   PERSONAL_RDAMMALA                     │
│              (GitHub Monorepo + Local Sync)             │
└─────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        ▼                  ▼                  ▼
  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
  │  Repository │   │   Resume    │   │ Portfolio   │
  │    Sync     │   │  Generator  │   │  Deployer   │
  │ (PowerShell)│   │  (Node.js)  │   │(Git + GH-P) │
  └─────────────┘   └─────────────┘   └─────────────┘
        │                  │                  │
        ├─ 27 Repos    ├─ Templates      ├─ 9 Websites
        ├─ Sync Status ├─ .docx/.pdf     ├─ GitHub Pages
        └─ Versioning  └─ Job Tracker    └─ Dark Mode
```

---

## 🔄 SDLC Phases

### **Phase 1: Plan & Design**
**What happens:** Define project scope, identify 27 repos, sketch architecture
- Duration: Week 1
- Outputs: Project charter, repo list, tech stack decision
- Key decisions: Monorepo vs. multi-repo, PowerShell vs. Python

### **Phase 2: Develop**
**What happens:** Build core systems
- Duration: Weeks 2-4
- Outputs: PowerShell sync script, Resume generator, Portfolio templates
- Tools: Git, VS Code, PowerShell ISE, Node.js

### **Phase 3: Build & Integrate**
**What happens:** Combine components, test locally
- Duration: Week 5
- Outputs: Tested sync script, validated templates, local testing
- QA: Dry-run scripts, preview portfolios locally

### **Phase 4: Deploy**
**What happens:** Push portfolios to GitHub Pages, activate Job Tracker
- Duration: Week 6
- Outputs: Live portfolios at https://rdammala.github.io/<Role>/
- Validation: Test download buttons, verify CSS/JS loads

### **Phase 5: Monitor & Maintain**
**What happens:** Ongoing: sync repos, add new portfolios, track applications
- Duration: Ongoing (daily/weekly)
- Outputs: Updated portfolios, synced content, application tracking
- Improvements: Add CI-CD, enhance templates, archive old repos

---

## 📊 Tech Stack by Function

| Function | Technologies | Why? |
|----------|--------------|------|
| **Version Control** | Git, GitHub | Industry standard, free hosting, CI-CD ready |
| **Automation** | PowerShell 7.x | Cross-platform, integrates with Azure |
| **Resume Generation** | Node.js, docx, pdfkit | Templating, programmatic .docx/.pdf creation |
| **Portfolio Websites** | HTML5, CSS3, JS (Vanilla) | No dependencies, fast, GitHub Pages compatible |
| **Infrastructure** | Bicep, Azure CLI | Infrastructure as Code, Azure-native |
| **Documentation** | Markdown | Version-controlled, readable, web-convertible |
| **Hosting** | GitHub Pages | Free, automatic deployment, built-in CDN |
| **Automation (Future)** | GitHub Actions | Free CI-CD, integrates with repos, YAML-based |

---

## 🎯 Key Components

### **1. Repository Sync System**
**Purpose:** Keep 27 GitHub repos synchronized locally

**Input:** PowerShell script + repo list  
**Process:** Clone (if missing), fetch, pull, merge  
**Output:** Updated local repos, sync status report  
**Technology:** PowerShell, Git  
**Use Case:** DevOps engineers syncing from multiple projects  

**Example Command:**
```powershell
.\Sync-GitHub-Repos.ps1 -SyncType all -DryRun
# Preview all sync operations without making changes
```

### **2. Resume Generator**
**Purpose:** Create tailored resumes from templates (Node.js)

**Input:** JD (job description), template config  
**Process:** Parse JD keywords → select resume template → fill placeholders → generate .docx/.pdf  
**Output:** Rajesh_Dammala_<Company>_Resume_v1.docx + .pdf  
**Technology:** Node.js, docx package, pdfkit  
**Use Case:** HR automation, job application personalization  

**Example Usage:**
```javascript
// Generate resume from template
const resume = generateResume({
  jd: "Python, Docker, Kubernetes...",
  template: "SRE_Manager_v1",
  company: "Google"
});
// Outputs: Google_Resume.docx, Google_Resume.pdf
```

### **3. Portfolio Deployer**
**Purpose:** Create and deploy role-based portfolio websites to GitHub Pages

**Input:** Role title, HTML template, CSS theme, resume PDF  
**Process:** Clone template → customize with role details → test locally → push to GitHub → enable Pages  
**Output:** Live website at https://rdammala.github.io/<RoleName>/  
**Technology:** HTML5, CSS3, Vanilla JS, Git, GitHub Pages  
**Use Case:** Recruitment marketing, showing modern web dev skills  

**Portfolio Site Features:**
- Dark/Light mode toggle (localStorage persistence)
- Download resume button
- Responsive design (mobile-friendly)
- Accessibility (WCAG 2.1 AA)
- Fast load times (<2 sec)

### **4. Job Application Tracker**
**Purpose:** Web-based tracker for job applications + networking contacts

**Input:** Manual entry via HTML form  
**Process:** Store in localStorage + optional cloud sync  
**Output:** Sortable/filterable table of applications  
**Technology:** HTML5, JS (localStorage), Bootstrap  
**Use Case:** Interview prep, application status monitoring  

**Tracked Data:**
- Portfolio name, Role, Company, Date applied, Status, Comments
- Networking contacts (name, company, email, LinkedIn, resume shared)

### **5. DevOps Learning Modules**
**Purpose:** Educational content for SRE/DevOps interviews

**Structure:** 11 modules × 8 files each = 88 markdown files  
**Topics:** Git, CI-CD, Bicep, Testing, Deployment, Cost Optimization  
**Use Case:** Interview prep, knowledge transfer, documentation  
**Examples:** 01-Git-Workflow-Branching.md, 02-CI-CD-Pipelines.md, 03-Infrastructure-as-Code-Bicep.md  

---

## 🎬 Typical Workflow (Day-to-Day)

### **Scenario: Apply to New SRE Job**

**Step 1: Sync Repos** (2 min)
```powershell
cd c:\rdammala\personal_rdammala
.\Sync-GitHub-Repos.ps1 -SyncType all
```

**Step 2: Generate Resume** (3 min)
```bash
node resume-generator.js \
  --jd "jobdesc.txt" \
  --company "Netflix" \
  --role "Senior SRE Manager"
```

**Step 3: Deploy Portfolio** (5 min)
```bash
gh repo create Netflix-SRE-Manager --public --source=. --push
```

**Step 4: Track Application** (1 min)
- Open Job_Application_Tracker.html
- Add Netflix entry with link to portfolio
- Update status as application progresses

**Step 5: Follow Up** (ongoing)
- Networking contacts → Email template
- Check tracker for overdue follow-ups
- Update portfolio with new case studies

**Total Time:** ~15 minutes for end-to-end setup

---

## 💡 Key Concepts You'll Learn

| Concept | Definition | Why Important? |
|---------|-----------|-----------------|
| **SDLC** | Plan → Design → Develop → Test → Deploy → Maintain | Shows project management maturity |
| **Monorepo** | Single repo containing multiple related projects | Easier coordination, shared CI-CD |
| **GitFlow** | Master + develop + feature branches | Standard industry practice |
| **Infrastructure as Code** | Infra defined in version-controlled code files | Reproducible, auditable, automated |
| **CI-CD** | Continuous Integration/Continuous Deployment | Automates testing, reduces manual work |
| **Templating** | Generate content from reusable templates | Resume/portfolio customization at scale |
| **Versioning** | Track changes across versions (v1, v2, v3) | Resume iteration, rollback capability |
| **GitHub Pages** | Static site hosting from GitHub repos | Free portfolio hosting, automatic deployment |
| **Dark Mode** | UI theme switching with localStorage | Modern UX, accessibility |
| **API Integration** | Calling external services programmatically | Job APIs, resume APIs (future) |

---

## 📈 Metrics & Outcomes

**After building this project, you can claim:**

| Metric | Value | Interview Talking Point |
|--------|-------|------------------------|
| **Repos Managed** | 27 | "Automated synchronization of 27 GitHub repositories" |
| **Portfolios Deployed** | 9 | "Created 9 role-based portfolio websites using HTML/CSS/JS" |
| **Resumes Generated** | 10+ | "Built resume generator supporting templating + PDF export" |
| **Applications Tracked** | 15+ | "Developed web-based job application tracker" |
| **Learning Modules** | 88 | "Curated 88 DevOps learning documents (11 modules)" |
| **Time Saved** | ~95% | "Automated resume versioning reduces manual work by 95%" |
| **LOC (Code)** | ~5000 | "PowerShell + Node.js + HTML/CSS/JS" |
| **CI-CD Ready** | ✅ | "Infrastructure ready for GitHub Actions automation" |

---

## 🎓 What You'll Be Able to Explain in Interviews

After completing this learning hub:

✅ "I built a complete automation system managing 27 GitHub repos"  
✅ "Our resume generator creates tailored .docx/.pdf from templates in seconds"  
✅ "I deployed 9 portfolio websites to GitHub Pages using HTML/CSS/JS"  
✅ "I use PowerShell for cross-platform automation and error recovery"  
✅ "My infrastructure is defined as code using Bicep for Azure"  
✅ "I track job applications with a web-based HTML/JS tracker"  
✅ "My portfolios include dark mode, accessibility, and responsive design"  
✅ "I follow Git best practices: branching, commits, pull requests, code review"  
✅ "I've implemented versioning strategies for resume iterations"  
✅ "I'm ready to set up CI-CD with GitHub Actions"  

---

## 🚀 Next Module

**→ [1-REPOSITORY-STRUCTURE.md](./1-REPOSITORY-STRUCTURE.md)** — Learn how to organize code in folders, files, and across repos

---

**Completed:** Understanding high-level project goals, architecture, tech stack, and SDLC phases  
**Next Up:** Deep dive into folder organization and file conventions
