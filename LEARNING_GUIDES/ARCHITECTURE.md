# 🏗️ Architecture — System Design & Mermaid Diagrams

**Module Duration:** 25 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** [0-PROJECT-OVERVIEW.md](./0-PROJECT-OVERVIEW.md), [1-REPOSITORY-STRUCTURE.md](./1-REPOSITORY-STRUCTURE.md)

---

## 🎯 System Architecture Overview

The personal_rdammala project follows a **multi-tier architecture** combining:
1. **Data Tier** — GitHub repositories (distributed, version-controlled)
2. **Processing Tier** — Automation scripts (PowerShell, Node.js)
3. **Presentation Tier** — Web portfolios (HTML/CSS/JS on GitHub Pages)
4. **Tracking Tier** — Job tracker (localStorage-based)

---

## 📊 Mermaid Diagram 1: High-Level System Architecture

```mermaid
graph TB
    subgraph "Data Layer"
        A["27 GitHub Repos<br/>(distributed)"]
        B["Local Git Repos<br/>(cloned)"]
    end
    
    subgraph "Processing Layer"
        C["PowerShell<br/>Sync Script"]
        D["Node.js<br/>Resume Generator"]
        E["GitHub Actions<br/>(future)"]
    end
    
    subgraph "Presentation Layer"
        F["9 Portfolio<br/>Websites"]
        G["Job Tracker<br/>Web App"]
    end
    
    subgraph "Deployment"
        H["GitHub Pages<br/>(static hosting)"]
        I["GitHub Repos<br/>(version control)"]
    end
    
    A -->|git clone| B
    B -->|PowerShell| C
    C -->|sync status| A
    D -->|generate| F
    D -->|generate| G
    F -->|git push| I
    I -->|builds| H
    G -->|stores| H
    E -.->|future automation| C
    E -.->|future automation| D
    
    style A fill:#e1f5ff
    style B fill:#e1f5ff
    style C fill:#fff3e0
    style D fill:#fff3e0
    style E fill:#fff3e0
    style F fill:#f3e5f5
    style G fill:#f3e5f5
    style H fill:#e8f5e9
    style I fill:#e8f5e9
```

**Reading Guide:**
- 🔵 **Blue**: Data repositories (GitHub repos)
- 🟠 **Orange**: Processing (automation)
- 🟣 **Purple**: Presentation (user-facing)
- 🟢 **Green**: Deployment/hosting

---

## 📊 Mermaid Diagram 2: Repository Sync Flow

```mermaid
sequenceDiagram
    participant User
    participant Script as PowerShell Script
    participant Git as Git CLI
    participant GitHub as GitHub
    participant Local as Local Repos
    
    User->>Script: .\Sync-GitHub-Repos.ps1
    Script->>Script: Load repo list (27 repos)
    Script->>Script: For each repo:
    
    alt Repo exists locally?
        Script->>Git: git fetch origin
        Git->>GitHub: Check for updates
        GitHub-->>Git: Latest commits
        Git-->>Local: Update refs
        Script->>Git: git pull origin main
        Git->>Local: Merge changes
    else Repo missing
        Script->>Git: git clone <URL>
        Git->>GitHub: Download repo
        GitHub-->>Local: Full history
    end
    
    Script->>Script: Report sync status
    Script-->>User: ✅ Sync complete (27/27)
    
    note over Script: Handles errors, retries, dry-run mode
```

**Key Features:**
- **Idempotent:** Safe to run multiple times
- **Error Recovery:** Retry logic on network failures
- **Dry-Run Mode:** Preview changes without making them
- **Status Reporting:** Clear success/failure messages

---

## 📊 Mermaid Diagram 3: Resume Generation Pipeline

```mermaid
graph LR
    A["Job Description<br/>(JD)"]
    B["Resume Template<br/>(HTML/placeholders)"]
    C["Resume Generator<br/>(Node.js)"]
    D["Parse JD<br/>Extract keywords"]
    E["Select Template<br/>(SRE/Dev/Manager)"]
    F["Fill Placeholders<br/>with tailored content"]
    G["Generate .docx<br/>(docx package)"]
    H["Generate .pdf<br/>(pdfkit)"]
    I["Output Files"]
    
    A -->|input| D
    B -->|template| E
    D -->|keywords| F
    E -->|format| F
    F -->|docx conversion| G
    F -->|pdf conversion| H
    G -->|Rajesh_Dammala_Company_v1.docx| I
    H -->|Rajesh_Dammala_Company_v1.pdf| I
    
    C -.->|orchestrates| D
    C -.->|orchestrates| E
    C -.->|orchestrates| F
    
    style A fill:#fff3e0
    style B fill:#fff3e0
    style C fill:#fff3e0
    style D fill:#e1f5ff
    style E fill:#e1f5ff
    style F fill:#e1f5ff
    style G fill:#f3e5f5
    style H fill:#f3e5f5
    style I fill:#e8f5e9
```

**Templating Pattern:**
```
Template: "Skills in {{TECHNOLOGY}} and {{METHODOLOGY}}"
JD: "Python, Docker, Kubernetes..."
Output: "Skills in Python, Docker, Kubernetes and DevOps practices"
```

---

## 📊 Mermaid Diagram 4: Portfolio Deployment Flow

```mermaid
graph TB
    A["Create Portfolio<br/>Locally"]
    B["HTML/CSS/JS<br/>Files"]
    C["Git Commit<br/>git add ."]
    D["Git Push<br/>git push origin main"]
    E["GitHub Repo<br/>Created"]
    F["Enable GitHub<br/>Pages"]
    G["GitHub Actions<br/>Build"]
    H["Pages CDN<br/>Cache"]
    I["Live Portfolio"]
    J["Download Resume<br/>Button Works"]
    K["Dark/Light Mode<br/>Toggle Works"]
    
    A -->|create| B
    B -->|stage| C
    C -->|push| D
    D -->|webhook| E
    E -->|enable| F
    F -->|triggers| G
    G -->|builds| H
    H -->|serves| I
    I -->|test| J
    I -->|test| K
    
    style A fill:#fff3e0
    style B fill:#fff3e0
    style C fill:#e1f5ff
    style D fill:#e1f5ff
    style E fill:#e8f5e9
    style F fill:#e8f5e9
    style G fill:#e8f5e9
    style H fill:#e8f5e9
    style I fill:#f3e5f5
    style J fill:#f3e5f5
    style K fill:#f3e5f5
```

**Timing:**
- Commit to GitHub: <1 second
- GitHub Actions build: 30-60 seconds
- CDN cache update: 1-2 minutes
- Full availability: <3 minutes

---

## 📊 Mermaid Diagram 5: Job Application Tracker State Machine

```mermaid
stateDiagram-v2
    [*] --> ApplicationForm
    
    ApplicationForm --> Added: Fill form<br/>Submit
    Added --> Applied: Send application
    Applied --> Reviewing: Recruiter screens
    
    Reviewing --> Interview: Pass screen
    Reviewing --> Rejected: Rejected
    Rejected --> [*]
    
    Interview --> PhoneInterview: Initial call
    Interview --> TechnicalInterview: Tech assessment
    
    PhoneInterview --> TechnicalInterview
    TechnicalInterview --> Interview2: Second round
    Interview2 --> Interview3: Final round
    
    Interview3 --> Offer: Receive offer
    Interview3 --> Rejected
    Offer --> Negotiating: Negotiate salary
    Negotiating --> Accepted: Accept offer
    Negotiating --> Declined: Decline offer
    Accepted --> [*]
    Declined --> [*]
    
    note right of Added
        Stored in localStorage
        + optional cloud sync
    end
    
    note right of Negotiating
        Can track counter-offers,
        start dates, benefits
    end
```

---

## 📊 Mermaid Diagram 6: Component Interaction Diagram

```mermaid
graph TB
    subgraph "Monorepo (personal_rdammala)"
        Scripts["PowerShell Scripts"]
        Generator["Resume Generator"]
        Content["Learning Content"]
    end
    
    subgraph "Portfolio Repos (separate)"
        P1["Senior-Manager-SRE"]
        P2["Staff-Escalation-Manager"]
        P3["Application-SRE-Manager"]
        PX["... (6 more)"]
    end
    
    subgraph "GitHub Infrastructure"
        GP["GitHub Pages CDN"]
        GA["GitHub Actions"]
        GR["Git Refs"]
    end
    
    subgraph "Developer Workflow"
        DW["Developer<br/>Edit Code"]
        DT["Dev Test<br/>Locally"]
        DR["Dev Review<br/>Changes"]
    end
    
    Scripts -->|generates| Generator
    Generator -->|outputs| P1
    Generator -->|outputs| P2
    Generator -->|outputs| P3
    
    Content -->|references| Scripts
    Content -->|references| Generator
    
    P1 -->|git push| GR
    P2 -->|git push| GR
    P3 -->|git push| GR
    
    GR -->|webhook| GA
    GA -->|builds| GP
    GP -->|serves| P1
    
    DW -->|edit| Scripts
    DW -->|edit| Generator
    DT -->|test| Scripts
    DR -->|review| Content
    
    style Scripts fill:#fff3e0
    style Generator fill:#fff3e0
    style Content fill:#e1f5ff
    style P1 fill:#f3e5f5
    style P2 fill:#f3e5f5
    style P3 fill:#f3e5f5
    style GP fill:#e8f5e9
    style GA fill:#e8f5e9
```

---

## 📊 Mermaid Diagram 7: Data Flow Architecture

```mermaid
graph LR
    subgraph "Input"
        I1["Job Description"]
        I2["GitHub Repos"]
        I3["Resume Template"]
    end
    
    subgraph "Processing"
        P1["Parse JD"]
        P2["Sync Repos"]
        P3["Generate Resume"]
        P4["Deploy Website"]
    end
    
    subgraph "Storage"
        S1["Local Git Repos"]
        S2["GitHub (Master)"]
        S3["Generated Files"]
    end
    
    subgraph "Output"
        O1["Portfolios<br/>GitHub Pages"]
        O2["Resumes<br/>.docx/.pdf"]
        O3["Job Tracker<br/>localStorage"]
    end
    
    I1 --> P1
    I2 --> P2
    I3 --> P3
    
    P1 --> P3
    P2 --> S1
    P3 --> S3
    P4 --> S2
    
    S1 --> P4
    S3 --> O2
    S2 --> O1
    S3 --> O3
    
    style I1 fill:#fff3e0
    style I2 fill:#fff3e0
    style I3 fill:#fff3e0
    style P1 fill:#e1f5ff
    style P2 fill:#e1f5ff
    style P3 fill:#e1f5ff
    style P4 fill:#e1f5ff
    style S1 fill:#e8f5e9
    style S2 fill:#e8f5e9
    style S3 fill:#e8f5e9
    style O1 fill:#f3e5f5
    style O2 fill:#f3e5f5
    style O3 fill:#f3e5f5
```

---

## 🔗 Data Flow Examples

### **Example 1: Applying to a Job**

```
User Input (Job URL)
    ↓
Job Application Tracker
    ↓ (stores)
localStorage on browser
    ↓ (manual sync)
Job_Application_Tracker.html copied to
    ↓
career-focus-pages repo
    ↓ (git push)
GitHub repo
    ↓ (automatic build)
GitHub Pages
    ↓ (served)
Live tracker at https://rdammala.github.io/career-focus-pages/
```

### **Example 2: Syncing 27 Repos**

```
PowerShell Script (.ps1 file)
    ↓ (reads config)
27 GitHub repo URLs
    ↓ (for each repo)
    ├─ Check if exists locally
    ├─ If missing: git clone
    ├─ If exists: git fetch + git pull
    ↓ (loops through all)
Local sync complete
    ↓
Status report (✅ 27/27 synced)
```

### **Example 3: Creating a Portfolio**

```
Resume PDF + Role name
    ↓
Clone portfolio template
    ↓
Customize HTML/CSS/JS
    ↓
Add resume PDF + favicon
    ↓ (git add . && git commit && git push)
Push to GitHub
    ↓ (webhook triggers)
GitHub Actions build
    ↓ (deploys to Pages)
Live at: https://rdammala.github.io/<RoleName>/
```

---

## 🏢 Deployment Architecture

```mermaid
graph TB
    subgraph "Developer Machine"
        Dev["VS Code +<br/>PowerShell"]
        Local["Local Git Repos"]
        Files["HTML/CSS/JS/Resume"]
    end
    
    subgraph "GitHub"
        GH["GitHub Repos<br/>27 in sync<br/>9 portfolios"]
        GHActions["GitHub Actions<br/>CI/CD (planned)"]
    end
    
    subgraph "CDN & Hosting"
        Pages["GitHub Pages<br/>(global CDN)"]
        Cache["Edge Caching<br/>(Cloudflare/AWS)"]
    end
    
    subgraph "End Users"
        Recruiter["Recruiter"]
        Interviewer["Interviewer"]
        Network["Network Contact"]
    end
    
    Dev -->|edit| Files
    Files -->|git push| GH
    Local -->|sync| GH
    GH -->|webhook| GHActions
    GHActions -->|build| Pages
    Pages -->|distribute| Cache
    Cache -->|serve| Recruiter
    Cache -->|serve| Interviewer
    Cache -->|serve| Network
    
    style Dev fill:#fff3e0
    style Local fill:#fff3e0
    style Files fill:#fff3e0
    style GH fill:#e1f5ff
    style GHActions fill:#e1f5ff
    style Pages fill:#e8f5e9
    style Cache fill:#e8f5e9
```

---

## 🔐 Security Architecture

### **Data Protection**

| Layer | Protection | Implementation |
|-------|-----------|-----------------|
| **Repos** | Public (portfolio), Private (tools) | GitHub visibility settings |
| **Resume** | Specific sharing | Manual control (.pdf in repo) |
| **Job Tracker** | Client-side storage | localStorage (no server) |
| **Secrets** | Not stored | Manual entry during generation |

### **Authentication Flow** (Future with GitHub Actions)

```mermaid
sequenceDiagram
    participant Developer
    participant GitHub as GitHub Actions
    participant Azure as Azure
    
    Developer->>GitHub: git push
    GitHub->>GitHub: Trigger workflow
    GitHub->>Azure: Authenticate with OIDC
    Azure->>Azure: Verify token
    Azure-->>GitHub: Access granted
    GitHub->>Azure: Deploy resources
    Azure-->>GitHub: Deployment complete
    GitHub-->>Developer: Workflow summary
```

---

## 🎯 Architecture Interview Questions

### **Q: "Explain your system architecture"**

**Answer:**
"My architecture is a **four-tier system**:

1. **Data Tier:** 27 GitHub repositories distributed across monorepo and portfolio repos
2. **Processing Tier:** PowerShell scripts for repo sync, Node.js for resume generation
3. **Presentation Tier:** 9 HTML/CSS/JS portfolio websites deployed to GitHub Pages
4. **Tracking Tier:** Browser-based job tracker using localStorage

The key flows:
- **Sync:** PowerShell script fetches/pulls 27 repos in <2 minutes
- **Generate:** Node.js creates tailored .docx/.pdf from templates
- **Deploy:** Git push → GitHub → Actions build → GitHub Pages live

All components are loosely coupled through Git and GitHub. Future enhancements: GitHub Actions for CI-CD automation, cloud storage for tracking data."

### **Q: "How do you handle scaling?"**

**Answer:**
"Currently optimized for personal use (27 repos, 1 person). For scaling:

- **Repos:** Monorepo strategy can handle 100+ repos with better filtering
- **Resume Generation:** Switch from Node.js to microservice (serverless function)
- **Portfolios:** Automated template system (now manual)
- **Tracking:** Move from localStorage to cloud database (Firebase/Cosmos DB)
- **CI-CD:** GitHub Actions can parallelize builds across multiple portfolios"

### **Q: "What are your single points of failure?"**

**Answer:**
"Current SPOFs:
1. **GitHub as single provider** → Mitigate: Backup repos to GitLab/Azure DevOps
2. **Resume template breaking** → Mitigate: Version control templates, test generation
3. **localStorage data loss** → Mitigate: Regular exports, cloud backup
4. **Monorepo too large** → Mitigate: Split into multiple repos if >100 items

Future: Multi-cloud deployment for resilience."

---

## 🚀 Next Module

**→ [2-GIT-WORKFLOWS.md](./2-GIT-WORKFLOWS.md)** — Learn Git commands, branching strategies, and conflict resolution

---

**Completed:** Understanding system architecture with 7 Mermaid diagrams  
**Next Up:** Git workflows and version control best practices
