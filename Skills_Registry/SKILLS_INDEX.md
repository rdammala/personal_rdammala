# 🔍 Skills Index & Search Reference

A searchable, comprehensive index of all 54 skills organized by keyword, purpose, and context.

## 🔎 Quick Keyword Search

### Infrastructure & IaC
- **bicep-validate**: Validate bicep files, bicep linting
- **azure-prepare**: Generate IaC, infrastructure templates, Terraform, Bicep
- **azure-enterprise-infra-planner**: Architecture, networking, landing zones

### Deployment & DevOps
- **azure-deploy**: Deploy to Azure, azd, terraform apply, az deployment
- **run-nonofficial-pipeline**: CI/CD, build pipeline, deployment automation
- **deploy-official**: Production deployment, ship to prod, Official builds
- **deploy-conversations-tme**: Deploy to test environment, TME deployment
- **bootstrap-conversations-tme**: Setup TME, test environment bootstrap

### Azure Services
- **azure-compute**: VM, VMSS, Virtual Machines, instance sizing
- **azure-kubernetes**: AKS, Kubernetes, container orchestration
- **azure-storage**: Blob storage, file shares, data lake
- **azure-messaging**: Event Hubs, Service Bus, message processing
- **azure-ai**: Search, OpenAI, Speech, Document Intelligence
- **azure-kusto**: KQL, Data Explorer, analytics queries

### Troubleshooting & Diagnostics
- **azure-diagnostics**: Debug production, troubleshoot, AppLens, logs
- **azure-messaging**: SDK troubleshooting, connection failures
- **azure-compute**: Connectivity issues, RDP/SSH problems

### Cost & Optimization
- **azure-cost**: Cost analysis, spending forecast, waste reduction
- **azure-reliability**: High availability, zone redundancy, failover
- **azure-quotas**: Capacity planning, quota checks, regional limits
- **azure-upgrade**: Upgrade plans, modernize, SKU migration

### Security & Identity
- **azure-rbac**: Role assignment, access control, RBAC roles
- **entra-app-registration**: Azure AD, OAuth, MSAL authentication
- **entra-agent-id**: Agent identity, service principal, token exchange
- **azure-compliance**: Security audit, compliance scan, best practices

### Code Review & Quality
- **pr-review-deep**: Code review, convention audit, craft analysis
- **pr-publishing**: PR conventions, branch naming, reviewer selection
- **pr-comment-post**: Inline comments, PR feedback, ADO REST API
- **validate-solutions**: Solution validation, error fixing

### Development & Tools
- **project-setup-info-local**: Project setup, scaffold, initialization
- **agent-customization**: VS Code customization, agent config
- **cosmosdb-best-practices**: Cosmos DB, data modeling, query optimization
- **open-sva-project**: Open VS 2026, SupportServices project

### GitHub Integration
- **create-pull-request**: Create PR, submit code review, draft PR
- **address-pr-comments**: Respond to feedback, resolve threads
- **form-github-search-query**: Search queries, find issues/PRs
- **show-github-search-result**: Format search results, display findings
- **suggest-fix-issue**: Bug fixes, code suggestions
- **summarize-github-issue-pr-notification**: Summarize issues, digests

### AI & ML Development
- **microsoft-foundry**: Build agents, deploy agents, fine-tune models
- **vscode-microsoft-foundry**: Agent development, agent workflow
- **foundrytk-quick-start**: Foundry Toolkit, AI Toolkit, get started
- **azure-hosted-copilot-sdk**: Copilot SDK, @github/copilot-sdk
- **use-winml-cli**: Model optimization, ONNX, Windows ML

### Advanced Topics
- **azure-cloud-migrate**: Cloud migration, Lambda to Functions, AWS to Azure
- **azure-aigateway**: API Management, LLM policies, AI Gateway
- **airunway-aks-setup**: AI Runway, GPU, model serving
- **appinsights-instrumentation**: Application Insights, telemetry, monitoring
- **loyalty-portal-yarn-auth**: Yarn authentication, npm feeds
- **newtonsoft-migration**: JSON serialization, STJ migration
- **powershell-agency-copilot-alias**: PowerShell alias, automation
- **pr-comment-post**: Advanced PR commenting, threading
- **refresh-reviewer-field-guide**: Reviewer guidelines, conventions
- **azure-resource-lookup**: Resource inventory, resource search
- **azure-resource-visualizer**: Architecture diagram, visualization

---

## 🎯 Skills by Problem Domain

### "I need to deploy something"
1. `azure-prepare` — Generate infrastructure
2. `azure-validate` — Check readiness
3. `azure-deploy` — Deploy to Azure
4. `azure-diagnostics` — Debug if issues

### "I need to review code"
1. `pr-review-deep` — Comprehensive review
2. `pr-comment-post` — Post feedback
3. `suggest-fix-issue` — Suggest improvements

### "I need to troubleshoot"
1. `azure-diagnostics` — Check logs & metrics
2. `azure-messaging` — If messaging issues
3. `azure-compute` — If VM/network issues

### "I need to optimize costs"
1. `azure-cost` — Analyze spending
2. `azure-quotas` — Check usage
3. `azure-reliability` — Optimize for HA

### "I need to build an AI agent"
1. `foundrytk-quick-start` — Learn basics
2. `microsoft-foundry` — Build & deploy
3. `use-winml-cli` — Optimize models

### "I need to set up infrastructure"
1. `azure-prepare` — Generate IaC
2. `bicep-validate` — Validate templates
3. `azure-kubernetes` — If using K8s

### "I need to set up security"
1. `azure-rbac` — Role assignment
2. `entra-app-registration` — App registration
3. `azure-compliance` — Security audit

### "I need to migrate to Azure"
1. `azure-cloud-migrate` — Migration assessment
2. `azure-prepare` — Generate infrastructure
3. `azure-deploy` — Execute migration

---

## 📊 Skills Matrix

### By Context

| Context | Primary Skills | Supporting Skills |
|---------|---|---|
| **Local Development** | project-setup-info-local, agent-customization, cosmosdb-best-practices | open-sva-project |
| **Infrastructure** | bicep-validate, azure-prepare, azure-enterprise-infra-planner | azure-validate |
| **Deployment** | azure-deploy, azure-validate, run-nonofficial-pipeline, deploy-official | azure-reliability |
| **Testing** | bootstrap-conversations-tme, deploy-conversations-tme, azure-validate | validate-solutions |
| **Troubleshooting** | azure-diagnostics, azure-messaging, azure-compute | azure-kusto |
| **Cost Management** | azure-cost, azure-quotas, azure-reliability | azure-upgrade |
| **Code Review** | pr-review-deep, pr-publishing, pr-comment-post | validate-solutions |
| **AI Development** | microsoft-foundry, vscode-microsoft-foundry, foundrytk-quick-start | use-winml-cli |
| **Security** | azure-rbac, entra-app-registration, entra-agent-id | azure-compliance |
| **GitHub** | create-pull-request, address-pr-comments, form-github-search-query | summarize-github-issue-pr-notification |

---

## 🔗 Cross-Skill Dependencies

### Skills that often work together:
- `azure-prepare` + `azure-validate` + `azure-deploy`
- `pr-review-deep` + `pr-comment-post` + `address-pr-comments`
- `microsoft-foundry` + `vscode-microsoft-foundry` + `azure-hosted-copilot-sdk`
- `bicep-validate` + `azure-prepare` + `azure-enterprise-infra-planner`
- `azure-cost` + `azure-quotas` + `azure-reliability`
- `azure-rbac` + `entra-app-registration` + `azure-compliance`

---

## 📋 Skills Checklist by Role

### ✅ Cloud Developer
- [ ] `project-setup-info-local`
- [ ] `azure-prepare`
- [ ] `appinsights-instrumentation`
- [ ] `cosmosdb-best-practices`
- [ ] `azure-validate`
- [ ] `azure-deploy`
- [ ] `azure-diagnostics`

### ✅ SRE / DevOps Engineer
- [ ] `bicep-validate`
- [ ] `azure-kubernetes`
- [ ] `azure-diagnostics`
- [ ] `azure-reliability`
- [ ] `azure-cost`
- [ ] `run-nonofficial-pipeline`
- [ ] `deploy-official`

### ✅ AI/ML Engineer
- [ ] `foundrytk-quick-start`
- [ ] `vscode-microsoft-foundry`
- [ ] `microsoft-foundry`
- [ ] `azure-hosted-copilot-sdk`
- [ ] `use-winml-cli`

### ✅ Platform Engineer
- [ ] `azure-enterprise-infra-planner`
- [ ] `azure-kubernetes`
- [ ] `azure-compliance`
- [ ] `azure-rbac`
- [ ] `bicep-validate`

### ✅ Security Engineer
- [ ] `azure-rbac`
- [ ] `entra-app-registration`
- [ ] `entra-agent-id`
- [ ] `azure-compliance`
- [ ] `azure-diagnostics`

### ✅ SupportServices Developer
- [ ] `validate-solutions`
- [ ] `open-sva-project`
- [ ] `pr-review-deep`
- [ ] `bicep-validate`
- [ ] `bootstrap-conversations-tme`
- [ ] `deploy-conversations-tme`

---

## 🚀 Performance Profiles

### Quick Wins (< 30 minutes)
- `bicep-validate`
- `azure-quotas`
- `form-github-search-query`
- `azure-resource-lookup`
- `loyalty-portal-yarn-auth`

### Medium Tasks (30 min - 2 hours)
- `azure-prepare`
- `azure-validate`
- `appinsights-instrumentation`
- `azure-rbac`
- `pr-review-deep`

### Long Engagements (2+ hours)
- `azure-cloud-migrate`
- `azure-kubernetes`
- `microsoft-foundry`
- `azure-enterprise-infra-planner`
- `azure-diagnostics`

---

## 📚 Reference

**Total Skills**: 54
**Categories**: 5
**Last Updated**: June 2026

---

**Pro Tip**: Use Ctrl+F to search this page for specific keywords!
