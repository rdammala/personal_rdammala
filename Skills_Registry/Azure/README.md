# Azure Skills Registry

This directory contains all Azure-related skills for infrastructure, deployment, diagnostics, cost management, and cloud services.

## Available Skills

### 1. **airunway-aks-setup** ✅
**Purpose**: Set up AI Runway on AKS — from bare cluster to running model  
**When to Use**: Setup AI Runway; onboard AKS cluster; install AI Runway; deploy model to AKS  
**Key Features**:
- Cluster verification
- Controller installation
- GPU assessment
- Provider setup
- First deployment

### 2. **appinsights-instrumentation** ✅
**Purpose**: Guidance for instrumenting webapps with Azure Application Insights  
**When to Use**: Instrument app; App Insights SDK; telemetry patterns; APM best practices  
**Key Features**:
- Telemetry patterns
- SDK setup
- Configuration references

### 3. **azure-ai** ✅
**Purpose**: Azure AI: Search, Speech, OpenAI, Document Intelligence  
**When to Use**: AI Search; vector/hybrid search; speech-to-text; text-to-speech; OCR  
**Key Features**:
- Semantic search
- Vector embeddings
- Speech services
- Document intelligence

### 4. **azure-aigateway** ✅
**Purpose**: Configure Azure API Management as an AI Gateway for AI models, MCP tools, and agents  
**When to Use**: Semantic caching; token limits; content safety; load balancing; AI governance  
**Key Features**:
- Semantic caching
- Token management
- Content filtering
- Rate limiting
- Cost control

### 5. **azure-cloud-migrate** ✅
**Purpose**: Assess and migrate cross-cloud workloads to Azure  
**When to Use**: Migrate Lambda to Functions; AWS to Azure; Beanstalk/Heroku migration; Kubernetes to ACA  
**Key Features**:
- Assessment reporting
- Code conversion
- Multi-cloud support

### 6. **azure-compliance** ✅
**Purpose**: Run Azure compliance and security audits with azqr + Key Vault expiration checks  
**When to Use**: Compliance scan; security audit; Key Vault expiration check; best-practice assessment  
**Key Features**:
- AZQR integration
- Security posture check
- Key Vault auditing
- Orphaned resource detection

### 7. **azure-compute** ✅
**Purpose**: Azure VM/VMSS router for provisioning, sizing, and troubleshooting  
**When to Use**: Create/provision/deploy VM; recommend VM size; GPU workloads; troubleshooting connectivity  
**Key Features**:
- VM provisioning
- SKU recommendations
- Capacity planning
- Connectivity troubleshooting

### 8. **azure-cost** ✅
**Purpose**: Azure cost management: query costs, forecast spending, optimize to reduce waste  
**When to Use**: Review Azure costs; forecast spending; optimize costs; analyze cost spike  
**Key Features**:
- Cost breakdown
- Forecasting
- Waste identification
- Rightsizing recommendations

### 9. **azure-deploy** ✅
**Purpose**: Execute Azure deployments for ALREADY-PREPARED applications  
**When to Use**: Run azd up/deploy; push to production; publish to Azure  
**Key Features**:
- AZD integration
- Terraform/Bicep deployment
- Error recovery

### 10. **azure-diagnostics** ✅
**Purpose**: Debug Azure production issues using AppLens, Azure Monitor, and resource health  
**When to Use**: Debug production issues; troubleshoot App Service; analyze logs; KQL queries  
**Key Features**:
- AppLens integration
- Azure Monitor queries
- KQL support
- Log analysis

### 11. **azure-enterprise-infra-planner** ✅
**Purpose**: Architect and provision enterprise Azure infrastructure from workload descriptions  
**When to Use**: Plan Azure infrastructure; architect landing zones; design hub-spoke networks  
**Key Features**:
- Network architecture
- Identity & security
- Compliance design
- Multi-region planning

### 12. **azure-hosted-copilot-sdk** ✅
**Purpose**: Build, deploy, and modify GitHub Copilot SDK apps on Azure  
**When to Use**: Copilot SDK apps; @github/copilot-sdk; BYOM (bring your own model)  
**Key Features**:
- Copilot SDK integration
- Custom model support
- Azure deployment

### 13. **azure-kubernetes** ✅
**Purpose**: Plan, create, and configure production-ready AKS clusters  
**When to Use**: Create AKS environment; enable observability; design networking; optimize costs  
**Key Features**:
- Day-0 checklist
- SKU selection
- Network design
- Auto-scaling setup

### 14. **azure-kusto** ✅
**Purpose**: Query and analyze data in Azure Data Explorer using KQL  
**When to Use**: KQL queries; Azure Data Explorer; log analytics; time-series analysis  
**Key Features**:
- KQL query support
- Data exploration
- Time-series analysis

### 15. **azure-messaging** ✅
**Purpose**: Troubleshoot and resolve issues with Azure Messaging SDKs (Event Hubs, Service Bus)  
**When to Use**: Event hub SDK error; Service Bus issue; connection failure; AMQP error  
**Key Features**:
- SDK troubleshooting
- Connection diagnostics
- Message processing
- Lock management

### 16. **azure-prepare** ✅
**Purpose**: Prepare Azure apps for deployment (infra Bicep/Terraform, azure.yaml, Dockerfiles)  
**When to Use**: Create app; build web app; create serverless API; modernize application  
**Key Features**:
- Infrastructure generation
- Dockerfile creation
- Azure config setup

### 17. **azure-quotas** ✅
**Purpose**: Check/manage Azure quotas and usage across providers  
**When to Use**: Check quotas; validate capacity; region selection; deployment planning  
**Key Features**:
- Quota queries
- Usage tracking
- Capacity validation

### 18. **azure-rbac** ✅
**Purpose**: Find the right Azure RBAC role with least privilege; generate CLI/Bicep code  
**When to Use**: Role assignment; least privilege access; managed identity permissions  
**Key Features**:
- Role recommendations
- Bicep generation
- Permission guidance

### 19. **azure-reliability** ✅
**Purpose**: Assess and improve reliability posture of PaaS Applications  
**When to Use**: Assess reliability; check zone redundancy; high availability; disaster recovery  
**Key Features**:
- Reliability assessment
- Zone redundancy checking
- Multi-region failover
- SLA validation

### 20. **azure-resource-lookup** ✅
**Purpose**: List, find, and show Azure resources across subscriptions  
**When to Use**: List websites; find resources; tag analysis; orphaned resource discovery  
**Key Features**:
- Resource enumeration
- Cross-subscription search
- Tag analysis

### 21. **azure-resource-visualizer** ✅
**Purpose**: Analyze Azure resource groups and generate Mermaid architecture diagrams  
**When to Use**: Create architecture diagram; visualize resources; show relationships  
**Key Features**:
- Mermaid diagram generation
- Resource mapping
- Topology visualization

### 22. **azure-storage** ✅
**Purpose**: Azure Storage Services: Blob, File Shares, Queue, Table, Data Lake  
**When to Use**: Blob storage; file shares; storage tiers; lifecycle management  
**Key Features**:
- Access tier management
- Storage tiering
- Lifecycle policies

### 23. **azure-upgrade** ✅
**Purpose**: Upgrade Azure workloads between plans/tiers or modernize SDK dependencies  
**When to Use**: Upgrade Functions plan; migrate to Container Apps; modernize SDKs  
**Key Features**:
- Plan upgrades
- Tier migration
- SDK modernization

### 24. **azure-validate** ✅
**Purpose**: Pre-deployment validation for Azure readiness  
**When to Use**: Validate app; check deployment readiness; verify configuration  
**Key Features**:
- Configuration validation
- RBAC verification
- Managed identity checks

### 25. **entra-agent-id** ✅
**Purpose**: Provision Microsoft Entra Agent Identity Blueprints and token exchange  
**When to Use**: Agent Identity Blueprint; agent OAuth; token exchange; polyglot agent auth  
**Key Features**:
- Blueprint provisioning
- OAuth 2.0 setup
- Token exchange

### 26. **entra-app-registration** ✅
**Purpose**: Guide Microsoft Entra ID app registration and OAuth 2.0 authentication  
**When to Use**: Create app registration; register Azure AD app; set up authentication  
**Key Features**:
- App registration
- OAuth configuration
- MSAL integration

---

## Quick Reference Table

| Skill | Domain | Use Frequency | Complexity |
|-------|--------|---------------|-----------|
| airunway-aks-setup | ML/AI | Low | High |
| appinsights-instrumentation | Monitoring | Medium | Low |
| azure-ai | AI Services | Medium | High |
| azure-aigateway | API Management | Low | High |
| azure-cloud-migrate | Migration | Low | Very High |
| azure-compliance | Security | Medium | Medium |
| azure-compute | IaaS | High | Medium |
| azure-cost | Cost Management | Low | Medium |
| azure-deploy | Deployment | High | Low |
| azure-diagnostics | Troubleshooting | High | Very High |
| azure-enterprise-infra-planner | Architecture | Low | Very High |
| azure-hosted-copilot-sdk | Development | Low | High |
| azure-kubernetes | Container Ops | Medium | Very High |
| azure-kusto | Analytics | Medium | High |
| azure-messaging | Messaging | High | High |
| azure-prepare | Development | High | Medium |
| azure-quotas | Planning | Low | Low |
| azure-rbac | Security | High | Medium |
| azure-reliability | Operations | Medium | High |
| azure-resource-lookup | Administration | High | Low |
| azure-resource-visualizer | Architecture | Medium | Low |
| azure-storage | Data Services | High | Medium |
| azure-upgrade | Modernization | Medium | High |
| azure-validate | Quality Gate | High | Low |
| entra-agent-id | Identity | Low | Very High |
| entra-app-registration | Identity | Medium | Medium |

---

## Category Organization

### Infrastructure & Architecture
- `azure-enterprise-infra-planner`
- `azure-kubernetes`
- `azure-compute`

### Deployment & DevOps
- `azure-prepare`
- `azure-deploy`
- `azure-validate`
- `azure-upgrade`

### Monitoring & Diagnostics
- `appinsights-instrumentation`
- `azure-diagnostics`
- `azure-kusto`

### Security & Identity
- `azure-rbac`
- `entra-app-registration`
- `entra-agent-id`
- `azure-compliance`

### Cost & Optimization
- `azure-cost`
- `azure-quotas`
- `azure-reliability`

### AI & Advanced Services
- `azure-ai`
- `azure-aigateway`
- `azure-hosted-copilot-sdk`
- `airunway-aks-setup`

### Migration
- `azure-cloud-migrate`

### Data & Messaging
- `azure-messaging`
- `azure-storage`

### Resource Management
- `azure-resource-lookup`
- `azure-resource-visualizer`

---

## Navigation

- **Main Registry**: See [Skills_Registry/README.md](../README.md)
- **All Categories**: Check parent directory listing
- **SupportServices Skills**: See [SupportServices/README.md](../SupportServices/README.md)

**Last Updated**: June 2026
