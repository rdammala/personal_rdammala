# Repository Structure Guide

This document outlines the organization and purpose of each folder in the `personal_rdammala` repository.

## Root Level Files

| File | Purpose |
|------|---------|
| `README.md` | Main repository overview and quick start |
| `CONTRIBUTING.md` | Guidelines for contributing new content |
| `LICENSE` | MIT License for the repository |
| `package.json` | Node.js metadata and scripts |
| `.gitignore` | Git ignore patterns |
| `.editorconfig` | Editor configuration for consistent formatting |
| `personal_rdammala.code-workspace` | VS Code workspace configuration |

## Folder Structure

### 📂 `.github/`
Repository automation and templates:
- `ISSUE_TEMPLATE/` — GitHub issue templates for bug reports and feature requests
- `PULL_REQUEST_TEMPLATE.md` — Pull request template with checklist
- `workflows/` — CI/CD workflow definitions (future expansion)

### 📂 `AzureDevOpsSelflearn/`
Comprehensive Azure DevOps learning path with sequential, numbered guides:

```
AzureDevOpsSelflearn/
├── README.md                    # Folder-specific overview
├── INDEX.md                     # Searchable index of all topics
├── QUICK-START.md              # Getting started guide
├── 00-DevOps-Architecture-Complete.md
├── 01-Git-Workflow-Branching.md
├── 02-CI-CD-Pipelines.md
├── 03-Infrastructure-as-Code-Bicep.md
├── 04-Testing-Strategy.md
├── 05-Blue-Green-Deployment.md
├── 06-Troubleshooting-Recovery.md
├── 07-DevOps-Concepts.md
├── 08-Cost-Optimization.md
├── 09-YAML-Configuration.md
├── 10-OneBranch-vs-Other-Tools.md
├── 11-Containers-Orchestration.md
├── GENERATE-AUDIO-VIDEO.md     # Content generation guide
├── PowerShell scripts:
│   ├── Run-AudioVideo-Generation.ps1
│   ├── Generate-Audio.ps1
│   ├── Generate-Slides.ps1
│   ├── Generate-Videos.ps1
│   ├── [Additional video generation variants]
├── docs/                       # Reference documentation
├── slides/                     # Generated presentation slides
├── videos/                     # Generated video tutorials
├── audio/                      # Generated audio guides
├── interview-qa/               # Interview Q&A content
└── videos-transcript/          # Video transcripts
```

**Purpose**: Sequential learning path from foundational DevOps concepts through advanced deployment strategies and container orchestration.

### 📂 `SupportServicesLearning/`
Production-grade interview preparation and architecture deep-dives:

```
SupportServicesLearning/
├── README.md                              # Folder-specific overview
├── CODING_INTERVIEW_PRACTICE_DEV.md       # 25 backend/DEV problems
├── CODING_INTERVIEW_PRACTICE_SRE.md       # 25 SRE/Operations problems
├── .NET_PROJECT_STRUCTURE_GUIDE.md        # Architecture fundamentals
├── CI_CD_PIPELINES_EDUCATIONAL_GUIDE.md   # Pipeline patterns
├── DEVOPS_ARCHITECTURE.md                 # System design guide
├── DEVOPS_SRE_OPERATIONS_GUIDE.md         # Operations best practices
├── TECHNOLOGY_STACK_GUIDE.md              # Tech stack overview
├── TROUBLESHOOTING_AND_INTERVIEW_GUIDE.md # Debugging strategies
├── [Summary files]:
│   ├── COMPLETION_SUMMARY.md
│   ├── ENHANCEMENT_PROGRESS_DETAILED.md
│   ├── SESSION_SUMMARY.md
│   └── WAKE_UP_CHECKLIST.md
├── docs/                    # Reference documentation
├── labs/                    # Hands-on lab exercises
├── playgrounds/             # Code playgrounds and sandboxes
├── roles/                   # Role-specific learning paths
└── technologies/            # Technology-specific deep-dives
    ├── [C# patterns]
    ├── [PowerShell automation]
    ├── [Bicep/IaC]
    ├── [KQL queries]
    └── [More]
```

**Purpose**: Comprehensive interview preparation with 50 real-world problems, production architecture patterns, and technology-specific mastery guides.

## Navigation Guide

### For Learning DevOps
1. Start → `AzureDevOpsSelflearn/QUICK-START.md`
2. Follow → Sequential numbered files (00-11)
3. Reference → `AzureDevOpsSelflearn/INDEX.md`
4. Generate → Use PowerShell scripts for multimedia content

### For Interview Preparation
1. Start → `SupportServicesLearning/README.md`
2. Backend Track → `CODING_INTERVIEW_PRACTICE_DEV.md` (Problems 1-25)
3. SRE Track → `CODING_INTERVIEW_PRACTICE_SRE.md` (Problems 1-25)
4. Deep-Dive → Architecture and technology guides
5. Practice → Use `labs/` and `playgrounds/` folders

### For Architecture Understanding
1. Explore → `.NET_PROJECT_STRUCTURE_GUIDE.md`
2. Study → `DEVOPS_ARCHITECTURE.md`
3. Technology-Specific → Folders in `technologies/`
4. Hands-On → `labs/` folder exercises

## File Naming Conventions

- **Documentation**: `SCREAMING_SNAKE_CASE.md` for guides
- **Numbered Content**: `00-Topic-Name.md` for sequential lessons
- **Code Files**: Language-specific conventions (C# PascalCase, PowerShell PascalCase)
- **Generated Content**: Dated or numbered subdirectories (e.g., `videos/2026-06/`)

## Growth & Maintenance

- **Regular Updates**: Content is maintained and improved quarterly
- **Version**: See `package.json` for current version
- **Contributions**: Follow [CONTRIBUTING.md](CONTRIBUTING.md) guidelines
- **Issues/Feedback**: Use GitHub issue templates for reporting

---

**Last Updated**: June 2026  
**Repository**: https://github.com/rdammala/personal_rdammala
