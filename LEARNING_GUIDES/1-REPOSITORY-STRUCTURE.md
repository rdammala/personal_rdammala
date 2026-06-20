# 1️⃣ Repository Structure — How to Organize Code

**Module Duration:** 20 minutes  
**Difficulty:** Beginner  
**Prerequisites:** [0-PROJECT-OVERVIEW.md](./0-PROJECT-OVERVIEW.md)

---

## 📁 Project Directory Tree

```
personal_rdammala/                          # Root monorepo
│
├── LEARNING_HUB.md                         # ← YOU ARE HERE (main entry point)
├── LEARNING_GUIDES/                        # ← Learning modules (this folder)
│   ├── 0-PROJECT-OVERVIEW.md
│   ├── 1-REPOSITORY-STRUCTURE.md           # ← Current file
│   ├── ARCHITECTURE.md
│   ├── 2-GIT-WORKFLOWS.md
│   ├── 3-SCRIPTING-AUTOMATION.md
│   ├── 4-INFRASTRUCTURE-AS-CODE.md
│   ├── 5-PORTFOLIO-GENERATION.md
│   ├── 6-CI-CD-PIPELINE.md
│   ├── 7-WEB-DEVELOPMENT.md
│   ├── 8-SDLC-COMPLETE.md
│   └── 9-INTERVIEW-GUIDE.md
│
├── Sync-GitHub-Repos.ps1                  # ← Core automation script
├── package.json                            # ← Node.js dependencies (resume generator)
│
├── AzureDevOpsSelflearn/                  # ← Learning content (11 modules)
│   ├── 00-DevOps-Architecture-Complete.md
│   ├── 01-Git-Workflow-Branching.md
│   ├── 02-CI-CD-Pipelines.md
│   ├── 03-Infrastructure-as-Code-Bicep.md
│   └── ...
│
├── SupportServicesLearning/               # ← Interview prep (50 problems)
│   ├── DEVOPS_ARCHITECTURE.md
│   ├── CODING_INTERVIEW_PRACTICE_SRE.md
│   ├── labs/
│   ├── playgrounds/
│   │   ├── agentic-support-assistant/
│   │   ├── container-platform/
│   │   └── ship-observe-recover/
│   └── ...
│
├── Resume_Registry/                       # ← Resume generation tools
│   ├── COMPREHENSIVE_TECH_TEAMS_INVENTORY.md
│   ├── ENHANCED_RESUME_GUIDE.md
│   ├── PORTFOLIO_STYLE_SYSTEM.md
│   ├── scripts/
│   │   └── enhanced-resume-generator.js
│   └── ...
│
├── Grow-Therapy-SRE/                      # ← Portfolio example
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── favicon.svg
│   ├── Rajesh_Dammala_Resume.pdf
│   └── README.md
│
└── Skills_Registry/                       # ← Tech skills inventory
    └── ...
```

---

## 🗂️ Folder Organization Principles

### **Principle 1: Purpose-Based Grouping**
Files are organized by **what they do**, not by file type.

✅ **GOOD:**
```
Resume_Registry/
├── COMPREHENSIVE_TECH_TEAMS_INVENTORY.md   # ← What is this?
├── ENHANCED_RESUME_GUIDE.md                # ← Resume content
└── scripts/
    └── enhanced-resume-generator.js        # ← Resume logic
```

❌ **BAD:**
```
All_Files/
├── markdown/
│   └── COMPREHENSIVE_TECH_TEAMS_INVENTORY.md
├── docs/
│   └── ENHANCED_RESUME_GUIDE.md
└── code/
    └── enhanced-resume-generator.js
```

### **Principle 2: Monorepo Pattern**
Single repo containing **multiple related projects**:
- Sync script (PowerShell)
- Resume generator (Node.js)
- 11 learning modules (Markdown)
- Multiple portfolios (HTML/CSS/JS)
- Interview prep content (Markdown)

**Benefit:** Unified versioning, single CI-CD pipeline, easier refactoring

### **Principle 3: Naming Conventions**

| Pattern | Example | Reason |
|---------|---------|--------|
| **MD files: NUMBER-TOPIC** | `02-CI-CD-Pipelines.md` | Clear learning order |
| **Scripts: verb-noun** | `Sync-GitHub-Repos.ps1` | Self-documenting action |
| **Folders: noun (plural)** | `LEARNING_GUIDES/` `AzureDevOpsSelflearn/` | Clear content type |
| **Portfolio folders: RoleName** | `Application-SRE-Manager/` | SEO-friendly, descriptive |
| **Resume files: FirstName_LastName_Company** | `Rajesh_Dammala_Google_SRE_Resume_v1.docx` | Clear versioning |

### **Principle 4: README Files at Each Level**

| Level | File | Purpose |
|-------|------|---------|
| **Root** | `README.md` | Project overview, quick start |
| **Learning** | `LEARNING_GUIDES/` | Entry point (this guide) |
| **Resume** | `Resume_Registry/README.md` | Resume generation guide |
| **Portfolio** | `Grow-Therapy-SRE/README.md` | Tech stack only (NOT resume!) |

---

## 📝 File Naming Conventions

### **Learning Modules: `NUMBER-TOPIC.md`**

```
0-PROJECT-OVERVIEW.md           # High-level introduction
1-REPOSITORY-STRUCTURE.md       # This file (organization)
2-GIT-WORKFLOWS.md              # Version control practices
3-SCRIPTING-AUTOMATION.md       # PowerShell + error handling
4-INFRASTRUCTURE-AS-CODE.md     # Bicep templates
5-PORTFOLIO-GENERATION.md       # Resume + portfolio automation
6-CI-CD-PIPELINE.md             # GitHub Actions, YAML
7-WEB-DEVELOPMENT.md            # HTML/CSS/JS, dark mode
8-SDLC-COMPLETE.md              # Design patterns, testing, deployment
9-INTERVIEW-GUIDE.md            # Q&A, demo scripts, talking points
```

**Why numbers?**
- Enforces learning order
- Sorts naturally (file systems + humans)
- Easy to reference: "Read module 2 first"

### **PowerShell Scripts: `Verb-Noun.ps1`**

```
Sync-GitHub-Repos.ps1           # Action: verb (Sync)
                                # Target: noun (GitHub repos)
Generate-Resume.ps1             # Future: Generate resumes
Deploy-Portfolio.ps1            # Future: Deploy portfolios
```

**Why?** PowerShell cmdlets follow `Verb-Noun` convention for discoverability.

### **Resume Files: `FirstName_LastName_Company_Role_vX.docx`**

```
Rajesh_Dammala_Google_SRE_Manager_v1.docx
Rajesh_Dammala_Google_SRE_Manager_v2.docx  # Version 2 after feedback
Rajesh_Dammala_Netflix_Staff_Engineer_v1.docx
```

**Why?**
- First/Last name: Application context
- Company: Multiple versions per company
- Role: Different templates per role
- vX: Version tracking

### **Portfolio Repos: `RoleName` (kebab-case)**

```
https://github.com/rdammala/Senior-Manager-SRE
https://github.com/rdammala/Staff-Escalation-Manager
https://github.com/rdammala/Application-SRE-Manager
```

**Why?**
- SEO-friendly URL slugs
- Human-readable (not UUIDs)
- Portfolio-specific (not company-specific)
- Easy to find in GitHub profile

---

## 🏢 Each Portfolio Repository Structure

Every role-based portfolio follows this **exact structure**:

```
Senior-Manager-SRE/                  # Repo name
├── index.html                       # Main portfolio page
├── style.css                        # External stylesheet (NOT inline)
├── script.js                        # JavaScript (dark mode, interactivity)
├── favicon.svg                      # Browser tab icon (RD logo)
├── Rajesh_Dammala_Resume.pdf       # Downloadable resume
├── README.md                        # Tech stack ONLY (4-8 lines)
└── .gitignore                       # Git tracking rules
```

**Critical Rules:**
1. `index.html` — Single-page portfolio (no other HTML files)
2. `style.css` — External CSS file (not inline `<style>` tags)
3. `script.js` — Vanilla JavaScript (no frameworks like React)
4. `favicon.svg` — SVG format (scalable, theme colors)
5. `.pdf` file — Git-tracked (remove `*.pdf` from .gitignore)
6. `.gitignore` — Only excludes `*.docx`, `.DS_Store`, `node_modules/`

**Why external CSS/JS?**
- GitHub Pages caches them efficiently
- Cleaner HTML structure
- Easier to maintain and update
- Browser can render while loading

**Portfolio README.md Template:**
```markdown
# Senior Manager, Site Reliability Engineering — Portfolio

Personal portfolio site showcasing 14+ years of SRE leadership and platform reliability expertise.

## Live Site
https://rdammala.github.io/Senior-Manager-SRE/

## Stack
HTML5 / CSS3 / Vanilla JavaScript / Google Fonts / Dark/Light theme

## Color Scheme
Cyan/Electric Blue (#00a8e8 to #00d4ff) with deep space background
```

---

## 🔄 Content Organization by Topic

### **A. Learning Modules** (`AzureDevOpsSelflearn/`)

**11 modules** covering DevOps fundamentals:

```
00-DevOps-Architecture-Complete.md          # System design, patterns
01-Git-Workflow-Branching.md                # Version control strategies
02-CI-CD-Pipelines.md                       # Automated testing/deployment
03-Infrastructure-as-Code-Bicep.md          # Bicep syntax, Azure
04-Testing-Strategy.md                      # Unit, integration, E2E tests
05-Blue-Green-Deployment.md                 # Zero-downtime deployments
06-Troubleshooting-Recovery.md              # Incident response, debugging
07-DevOps-Concepts.md                       # Terminology, best practices
08-Cost-Optimization.md                     # Azure cost management
09-YAML-Configuration.md                    # YAML syntax, GitHub Actions
10-OneBranch-vs-Other-Tools.md              # CI-CD tool comparison
11-Containers-Orchestration.md              # Docker, Kubernetes, AKS
```

**Why 11 modules?** Core DevOps topics for comprehensive knowledge.

### **B. Interview Prep** (`SupportServicesLearning/`)

**50+ problems** organized by role:

```
DEVOPS_ARCHITECTURE.md                      # "Design a CI-CD pipeline"
CODING_INTERVIEW_PRACTICE_DEV.md            # Developer interview problems
CODING_INTERVIEW_PRACTICE_SRE.md            # SRE-specific challenges
TROUBLESHOOTING_AND_INTERVIEW_GUIDE.md      # Root cause analysis
TECHNOLOGY_STACK_GUIDE.md                   # Tech recommendations
labs/                                       # Hands-on exercises
playgrounds/                                # Sandbox environments
├── agentic-support-assistant/              # AI agent example
├── container-platform/                     # Kubernetes example
└── ship-observe-recover/                   # Observability example
```

### **C. Resume Registry** (`Resume_Registry/`)

**Resume generation engine:**

```
COMPREHENSIVE_TECH_TEAMS_INVENTORY.md       # Tech stack reference
ENHANCED_RESUME_GUIDE.md                    # Resume content guidelines
PORTFOLIO_STYLE_SYSTEM.md                   # CSS/UX patterns
scripts/
└── enhanced-resume-generator.js            # Node.js generator logic
```

---

## 🎯 File Organization Best Practices

### **1. Keep Root Directory Clean**
❌ Don't do this:
```
personal_rdammala/
├── file1.md
├── file2.md
├── script1.ps1
├── script2.ps1
├── index.html
└── 50+ more files
```

✅ Do this:
```
personal_rdammala/
├── LEARNING_GUIDES/              # All learning content
├── scripts/                       # All PowerShell scripts
├── web/                           # HTML files
└── Resume_Registry/              # Resume generation
```

### **2. Use .gitignore Strategically**

**Standard .gitignore for this project:**
```
# Microsoft Office
*.docx                             # Exclude work-in-progress resumes

# Node.js
node_modules/
*.lock                             # package-lock.json

# OS
.DS_Store                          # macOS
Thumbs.db                          # Windows

# IDE
.vscode/
.idea/

# Build outputs
dist/
build/

# DON'T exclude PDFs (portfolios need them)
# DON'T exclude .json (package.json needed)
```

**Why allow `.pdf`?**
- Portfolio resume PDFs must be downloaded from GitHub Pages
- Remove `*.pdf` from .gitignore for portfolio repos

### **3. Version Your Files Semantically**

```
Rajesh_Dammala_Resume_v1.docx     # Initial version
Rajesh_Dammala_Resume_v1.1.docx   # Minor update (typo fix)
Rajesh_Dammala_Resume_v2.docx     # Major update (new section)
```

**Semantic Versioning:**
- **v1.0** → First release (major.minor)
- **v1.1** → Bug fix, minor content update
- **v2.0** → Significant restructuring or redesign

### **4. Use Consistent File Paths**

**Good (absolute or relative from root):**
```
c:\rdammala\personal_rdammala\LEARNING_GUIDES\2-GIT-WORKFLOWS.md
./LEARNING_GUIDES/2-GIT-WORKFLOWS.md
```

**Bad (absolute paths to user machines):**
```
C:\Users\v-rdammala\Documents\personal_rdammala\...   # ← Breaks for other users
```

---

## 🔍 How to Navigate This Repository

### **Quick Start (5 minutes)**
1. Read `LEARNING_HUB.md` (this directory)
2. Browse `LEARNING_GUIDES/` folder
3. Check `AzureDevOpsSelflearn/` for DevOps content
4. Look at `Grow-Therapy-SRE/` as portfolio example

### **Deep Dive (1-2 hours)**
1. Start with `0-PROJECT-OVERVIEW.md`
2. Read all modules in `LEARNING_GUIDES/` sequentially
3. Study `Sync-GitHub-Repos.ps1` for scripting patterns
4. Review portfolio HTML/CSS/JS in `Grow-Therapy-SRE/`
5. Complete exercises in `SupportServicesLearning/labs/`

### **Find Specific Topics**
```bash
# Search for Git content
find . -name "*Git*" -type f

# Search for Bicep/Infrastructure
find . -name "*Bicep*" -o -name "*Infra*"

# Search for resume content
find Resume_Registry/ -type f -name "*.md"
```

---

## 📊 Repository Statistics

| Metric | Value |
|--------|-------|
| **Total Files** | 150+ |
| **Learning Modules** | 88 files (11 modules × 8 files) |
| **Portfolio Repos** | 9 (separate GitHub repos) |
| **Markdown Files** | 50+ |
| **Code Files** | 20+ (PowerShell, Node.js, HTML/CSS/JS) |
| **Resume Versions** | 10+ |
| **Total LOC** | ~5000 |
| **Total Size** | ~50 MB |

---

## 🎯 Interview Question: "Explain Your Repository Structure"

**Your Answer (2-3 minutes):**

"I organize this project using a **monorepo pattern** with purpose-based grouping. The root contains:

- **LEARNING_GUIDES/**: Educational modules (modules 0-9) teaching DevOps/Git/CI-CD
- **AzureDevOpsSelflearn/**: 11 comprehensive modules covering DevOps architecture, Git workflows, CI-CD pipelines, Infrastructure as Code
- **SupportServicesLearning/**: Interview preparation with 50+ problems and hands-on labs
- **Resume_Registry/**: Resume generation tools and content guidelines
- **Sync-GitHub-Repos.ps1**: PowerShell script automating sync of 27 GitHub repos

Each portfolio repo (like `Senior-Manager-SRE/`) follows a strict structure: `index.html` + `style.css` + `script.js` + `favicon.svg` + Resume PDF + README.

I use consistent naming conventions: learning modules use numbers (0-PROJECT-OVERVIEW.md), scripts use Verb-Noun (Sync-GitHub-Repos.ps1), and portfolios use RoleName (kebab-case).

This structure supports my goals: **organize learning content**, **demonstrate DevOps practices**, and **manage multiple portfolio websites at scale**."

---

## 🚀 Next Module

**→ [ARCHITECTURE.md](./ARCHITECTURE.md)** — Learn the system design with Mermaid diagrams

---

**Completed:** Understanding folder organization, naming conventions, and repository structure  
**Next Up:** Visual system architecture and component relationships
