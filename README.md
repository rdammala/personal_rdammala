# Personal Learning Repository

A comprehensive, self-contained learning repository combining **Azure DevOps** fundamentals and **SupportServices** architecture deep-dives. This repo contains production-grade educational guides with real-world code examples, best practices, and hands-on learning paths.

## 📁 Repository Structure

```
personal_rdammala/
├── AzureDevOpsSelflearn/       # Azure DevOps learning materials
│   ├── 00-DevOps-Architecture-Complete.md
│   ├── 01-Git-Workflow-Branching.md
│   ├── 02-CI-CD-Pipelines.md
│   ├── 03-Infrastructure-as-Code-Bicep.md
│   ├── 04-Testing-Strategy.md
│   ├── 05-Blue-Green-Deployment.md
│   ├── 06-Troubleshooting-Recovery.md
│   ├── 07-DevOps-Concepts.md
│   ├── 08-Cost-Optimization.md
│   ├── 09-YAML-Configuration.md
│   ├── 10-OneBranch-vs-Other-Tools.md
│   ├── 11-Containers-Orchestration.md
│   ├── QUICK-START.md
│   ├── README.md
│   ├── INDEX.md
│   ├── docs/                   # Additional documentation
│   ├── slides/                 # Generated presentation slides
│   ├── videos/                 # Generated tutorial videos
│   ├── audio/                  # Generated audio guides
│   └── [PowerShell scripts]    # Video/audio generation automation
│
├── SupportServicesLearning/    # SupportServices architecture guide
│   ├── CODING_INTERVIEW_PRACTICE_DEV.md      # 25 DEV problems
│   ├── CODING_INTERVIEW_PRACTICE_SRE.md      # 25 SRE problems
│   ├── .NET_PROJECT_STRUCTURE_GUIDE.md
│   ├── CI_CD_PIPELINES_EDUCATIONAL_GUIDE.md
│   ├── DEVOPS_ARCHITECTURE.md
│   ├── DEVOPS_SRE_OPERATIONS_GUIDE.md
│   ├── TECHNOLOGY_STACK_GUIDE.md
│   ├── TROUBLESHOOTING_AND_INTERVIEW_GUIDE.md
│   ├── README.md
│   ├── docs/                   # Reference documentation
│   ├── labs/                   # Hands-on lab exercises
│   ├── playgrounds/            # Code playgrounds
│   ├── roles/                  # Role-specific guides
│   ├── technologies/           # Technology-specific deep-dives
│   └── [Summary files]         # Progress tracking
│
├── .github/
│   ├── ISSUE_TEMPLATE/         # GitHub issue templates
│   └── workflows/              # CI/CD workflow definitions
│
├── .gitignore
├── README.md                   # This file
├── CONTRIBUTING.md
├── LICENSE
└── package.json                # Metadata & dependencies
```

## 🎯 Contents Overview

### AzureDevOpsSelflearn
Comprehensive guides covering the complete DevOps lifecycle:
- **Foundational Concepts**: Architecture, Git workflows, CI/CD pipelines
- **Infrastructure as Code**: Bicep templates and deployment strategies
- **Deployment Patterns**: Blue-green deployments, multi-region failover
- **Operations**: Troubleshooting, recovery, cost optimization
- **Automation**: PowerShell scripts for video/audio content generation
- **Interactive Content**: Generated slides, videos, and audio guides

**Key Features**:
- Sequential learning path (00-11)
- Production-ready examples
- Interactive video tutorials
- Searchable INDEX.md

### SupportServicesLearning
Production-grade interview preparation and architecture mastery:
- **50 Interview Problems**: 25 for Backend (DEV) + 25 for Site Reliability (SRE)
- **Real Code Examples**: C#, PowerShell, KQL, Bicep, YAML
- **Quantified Metrics**: 50+ real-world performance improvements
- **Deep-Dive Guides**: Architecture, CI/CD, .NET project structure, troubleshooting
- **Hands-On Labs**: Lab exercises and code playgrounds
- **Role-Specific Paths**: Technology-specific learning tracks

**Key Features**:
- 3,700+ comment lines explaining design decisions
- 90+ real code examples with best practices
- 50 real-world impact metrics (cost savings, latency improvements)
- Complete unit test examples for each problem

## 🚀 Getting Started

### Prerequisites
- Git
- VS Code or preferred editor
- PowerShell 7+ (for AzureDevOpsSelflearn automation scripts)
- .NET SDK (for SupportServicesLearning code examples)

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rdammala/personal_rdammala.git
   cd personal_rdammala
   ```

2. **Explore learning paths**:
   - **For DevOps**: Start with `AzureDevOpsSelflearn/QUICK-START.md`
   - **For Interviews**: Start with `SupportServicesLearning/README.md`

3. **Generate multimedia content** (AzureDevOpsSelflearn):
   ```bash
   cd AzureDevOpsSelflearn
   .\Run-AudioVideo-Generation.ps1
   ```

## 📚 Learning Paths

### DevOps Fundamentals
1. Read 00-DevOps-Architecture-Complete.md
2. Follow 01-Git-Workflow-Branching.md
3. Deep-dive into 02-CI-CD-Pipelines.md
4. Practice with lab exercises

### Interview Preparation
1. Start with CODING_INTERVIEW_PRACTICE_DEV.md (Problems 1-10)
2. Review all C# code examples and test cases
3. Progress to SRE guide for Operations practice
4. Work through role-specific guides

### Architecture Mastery
1. Review .NET_PROJECT_STRUCTURE_GUIDE.md
2. Study DEVOPS_ARCHITECTURE.md
3. Explore technologies/ folder for deep-dives
4. Complete labs/ exercises

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Adding new content
- Improving existing guides
- Reporting issues
- Submitting pull requests

## 📝 Content Quality Standards

- **Code Examples**: Must include comments explaining design decisions
- **Documentation**: Clear, concise, with practical examples
- **Testing**: All code examples include unit test examples
- **Real-World Impact**: Include quantified metrics where applicable
- **Accessibility**: Multiple learning formats (text, video, audio, interactive)

## 🔄 Updates & Maintenance

- **Last Updated**: June 2026
- **Status**: Active learning repository (regularly updated)
- **Version**: 1.0+

## 📄 License

This repository is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 👤 Author

**Rajesh Dammala** — Cloud & DevOps Learning Repository

---

**Questions or feedback?** Open an issue or submit a PR. All contributions welcome!
