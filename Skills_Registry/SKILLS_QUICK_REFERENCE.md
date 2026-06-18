# ⚡ Skills Quick Reference Cheat Sheet

One-page quick reference for all 54 skills.

## 🎯 Top 10 Most Used Skills

| Rank | Skill | Use | Trigger |
|------|-------|-----|---------|
| 1 | `bicep-validate` | Validate IaC | After .bicep edits |
| 2 | `azure-validate` | Pre-deploy checks | Before azure-deploy |
| 3 | `azure-prepare` | Generate infrastructure | Starting new project |
| 4 | `azure-deploy` | Deploy to Azure | Ready to ship |
| 5 | `pr-review-deep` | Code review | Review PR |
| 6 | `project-setup-info-local` | Project scaffold | Create new project |
| 7 | `pr-comment-post` | Post PR feedback | Reviewing code |
| 8 | `azure-diagnostics` | Troubleshoot | Prod issue |
| 9 | `validate-solutions` | Check solution | Before commit |
| 10 | `cosmosdb-best-practices` | Optimize DB | Cosmos DB work |

---

## 📋 All 54 Skills (One-Line Summary)

### SupportServices (14)
1. `bicep-validate` — Validate bicep IaC syntax
2. `bootstrap-conversations-tme` — Set up TME environment
3. `deploy-conversations-tme` — Deploy to TME test env
4. `deploy-official` — Production deployment
5. `loyalty-portal-yarn-auth` — Refresh yarn npm feed
6. `newtonsoft-migration` — Migrate to System.Text.Json
7. `open-sva-project` — Launch VS 2026 project
8. `powershell-agency-copilot-alias` — Create PowerShell alias
9. `pr-comment-post` — Post inline PR comments
10. `pr-publishing` — PR conventions & standards
11. `pr-review-deep` — Comprehensive code review
12. `refresh-reviewer-field-guide` — Update review guidelines
13. `run-nonofficial-pipeline` — Run CI/CD pipeline
14. `validate-solutions` — Validate .NET solution

### Azure (26)
1. `airunway-aks-setup` — Set up AI Runway on AKS
2. `appinsights-instrumentation` — Add App Insights
3. `azure-ai` — Use Azure AI services
4. `azure-aigateway` — API Management for AI
5. `azure-cloud-migrate` — Migrate to Azure
6. `azure-compliance` — Security audit
7. `azure-compute` — VM/VMSS provisioning
8. `azure-cost` — Cost analysis & optimization
9. `azure-deploy` — Deploy to Azure
10. `azure-diagnostics` — Troubleshoot production
11. `azure-enterprise-infra-planner` — Architecture planning
12. `azure-hosted-copilot-sdk` — Copilot SDK apps
13. `azure-kubernetes` — Set up AKS cluster
14. `azure-kusto` — KQL queries & analytics
15. `azure-messaging` — Fix messaging issues
16. `azure-prepare` — Generate infrastructure
17. `azure-quotas` — Check capacity limits
18. `azure-rbac` — Role assignments
19. `azure-reliability` — High availability
20. `azure-resource-lookup` — Find resources
21. `azure-resource-visualizer` — Draw architecture
22. `azure-storage` — Blob/file/queue storage
23. `azure-upgrade` — Upgrade workloads
24. `azure-validate` — Pre-deploy validation
25. `entra-agent-id` — Agent identity setup
26. `entra-app-registration` — Register app

### GitHub (6)
1. `address-pr-comments` — Respond to feedback
2. `create-pull-request` — Create PR
3. `form-github-search-query` — Build search query
4. `show-github-search-result` — Display results
5. `suggest-fix-issue` — Fix suggestions
6. `summarize-github-issue-pr-notification` — Summary

### Development (4)
1. `agent-customization` — Configure VS Code agents
2. `cosmosdb-best-practices` — Cosmos DB patterns
3. `get-search-view-results` — Get search results
4. `project-setup-info-local` — Scaffold project

### AI/ML (4)
1. `foundrytk-quick-start` — Foundry Toolkit intro
2. `microsoft-foundry` — Build AI agents
3. `use-winml-cli` — Optimize ONNX models
4. `vscode-microsoft-foundry` — Agent development

---

## 🎮 Quick Command Reference

```bash
# Navigate to Skills Registry
cd "c:\rdammala\personal_rdammala\Skills_Registry"

# View specific category
code SupportServices/README.md
code Azure/README.md
code GitHub/README.md
code Development/README.md
code AI_ML/README.md

# Search for skill
grep -r "keyword" .

# Open in browser (from local file)
# Right-click README.md → Open with → Default Browser
```

---

## 🔨 Common Workflows

### Deploy Workflow
```
1. azure-prepare     (Generate infrastructure)
2. bicep-validate    (Validate templates)
3. azure-validate    (Pre-deployment checks)
4. azure-deploy      (Deploy to Azure)
5. azure-diagnostics (If issues)
```

### Code Review Workflow
```
1. summarize-github-issue-pr-notification (Understand changes)
2. pr-review-deep                          (Review deeply)
3. pr-comment-post                         (Post feedback)
4. address-pr-comments                     (If creating PR)
```

### Troubleshoot Workflow
```
1. azure-diagnostics  (Check logs)
2. azure-kusto        (KQL queries if needed)
3. azure-messaging    (If messaging issues)
4. azure-compute      (If VM/network issues)
```

### AI Agent Workflow
```
1. foundrytk-quick-start      (Learn)
2. vscode-microsoft-foundry   (Develop)
3. microsoft-foundry          (Build & deploy)
4. use-winml-cli              (Optimize)
```

---

## ⏱️ Skill Duration Guide

| Duration | Skills |
|----------|--------|
| **5 min** | bicep-validate, azure-quotas, pr-publishing |
| **15 min** | azure-validate, pr-comment-post, cosmosdb-best-practices |
| **30 min** | azure-prepare, azure-deploy, pr-review-deep |
| **1-2 hrs** | azure-kubernetes, appinsights-instrumentation |
| **2+ hrs** | azure-cloud-migrate, microsoft-foundry |

---

## 🎓 Role Quick-Start

### Cloud Developer
Start → `project-setup-info-local` → `azure-prepare` → `azure-deploy`

### SRE/DevOps
Start → `bicep-validate` → `azure-kubernetes` → `azure-diagnostics`

### AI Engineer
Start → `foundrytk-quick-start` → `microsoft-foundry`

### Security Engineer
Start → `azure-rbac` → `azure-compliance` → `entra-app-registration`

---

## 🆘 "Help, I need to..." Finder

| Situation | Use Skill |
|-----------|-----------|
| Deploy code | `azure-deploy` |
| Review PR | `pr-review-deep` |
| Fix production bug | `azure-diagnostics` |
| Validate IaC | `bicep-validate` |
| Set up project | `project-setup-info-local` |
| Save costs | `azure-cost` |
| Check quota | `azure-quotas` |
| Build agent | `microsoft-foundry` |
| Post PR feedback | `pr-comment-post` |
| Migrate to Azure | `azure-cloud-migrate` |

---

**💡 TIP**: Bookmark this page! Use Ctrl+F to search.

**📍 Location**: `c:\rdammala\personal_rdammala\Skills_Registry\SKILLS_QUICK_REFERENCE.md`

**Last Updated**: June 2026
