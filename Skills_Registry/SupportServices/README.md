# SupportServices Skills Registry

This directory contains all SupportServices-specific skills for CI/CD, infrastructure, code review, and deployment automation.

## Available Skills

### 1. **bicep-validate** ✅
**Purpose**: Validates bicep files without generating ARM template JSON artifacts  
**When to Use**: After making changes to any `.bicep` or `.bicepparam` file; validating, linting, or checking bicep files  
**Key Features**:
- Syntax validation
- Linting checks
- Error detection
- Best practice validation

### 2. **bootstrap-conversations-tme** ✅
**Purpose**: Bootstraps a personal Conversations environment in the TME01 test tenant  
**When to Use**: Setting up Conversations TME environment; creating personal test environments; bootstrapping  
**Key Features**:
- Az CLI login verification
- PIM role elevation
- Temporary bicep params generation
- Environment-level bicep deployment

### 3. **deploy-conversations-tme** ✅
**Purpose**: Deploys Conversations frontend code from local repo to personal TME environment  
**When to Use**: Deploying code to TME; pushing code to test environment; updating TME Conversations app  
**Key Features**:
- Az CLI login verification
- PIM elevation (Owner role)
- Frontend build
- App Service deployment via az webapp deploy

### 4. **deploy-official** ✅
**Purpose**: Queues Official build pipelines for selected SupportServices domains  
**When to Use**: Deploying to production; kicking off official builds; shipping services  
**Key Features**:
- Pipeline queuing
- Change computation since last prod deployment
- Deployment summary posting to Teams
- Supports multiple domains (Chat, Search, Refunds, etc.)

### 5. **loyalty-portal-yarn-auth** ✅
**Purpose**: Refreshes Yarn auth for Loyalty Portal UI private npm feed  
**When to Use**: Running yarn install; updating packages; modifying resolutions; package.json/yarn.lock changes  
**Key Features**:
- Authentication refresh
- Private feed access
- Dependency resolution

### 6. **newtonsoft-migration** ✅
**Purpose**: Guide for migrating libraries from Newtonsoft.Json to System.Text.Json  
**When to Use**: STJ migration; JSON serializer migration; Newtonsoft removal  
**Key Features**:
- Migration patterns
- Code conversion guidance
- Best practices
- Configuration examples

### 7. **open-sva-project** ✅
**Purpose**: Opens Visual Studio 2026 for an SVA (Conversations) project with ConsoleApp tooling and PIM activation  
**When to Use**: Opening SVA; opening Conversations; setting up local SVA dev environment  
**Key Features**:
- VS 2026 integration
- ConsoleApp tooling
- PIM activation
- Project setup

### 8. **powershell-agency-copilot-alias** ✅
**Purpose**: Adds or updates PowerShell profile function/alias for agency copilot command with tool flags  
**When to Use**: Creating or updating PowerShell alias for agency copilot  
**Key Features**:
- Alias creation
- Profile integration
- Tool flag support

### 9. **pr-comment-post** ✅
**Purpose**: Post inline PR comments with correct line anchoring using the ADO REST API  
**When to Use**: Posting file-level (inline) comments on pull requests  
**Key Features**:
- Correct line anchoring
- ADO REST API integration
- pullRequestThreadContext support
- Context-aware commenting

### 10. **pr-publishing** ✅
**Purpose**: Conventions for creating pull requests in this repo  
**When to Use**: Creating or updating PRs  
**Key Features**:
- Title conventions
- Description standards
- Branch naming
- Reviewer selection guidelines

### 11. **pr-review-deep** ✅
**Purpose**: Deep PR review with convention audit, code craft analysis, and cross-file synthesis  
**When to Use**: Reviewing PRs; checking code against conventions; conventions review; craft review  
**Key Features**:
- Convention audit
- Code craft analysis
- Cross-file synthesis
- Severity-ranked reporting
- Self-assembled parallel agents

### 12. **refresh-reviewer-field-guide** ✅
**Purpose**: Refreshes Reviewer Field Guide by analyzing recent PR feedback  
**When to Use**: Refreshing reviewer field guide; updating conventions guide; regenerating field guide  
**Key Features**:
- Merged PR analysis
- Feedback pattern tallying
- Convention mapping
- Field guide updates

### 13. **run-nonofficial-pipeline** ✅
**Purpose**: Runs a NonOfficial build pipeline and monitors the auto-triggered deploy pipeline  
**When to Use**: Running, triggering, or queuing a build/deployment for any SupportServices domain  
**Key Features**:
- Pipeline execution
- Auto-triggered deployment monitoring
- Domain-scoped targeting

### 14. **validate-solutions** ✅
**Purpose**: Runs the Tools/ValidateSolutions project and fixes any errors  
**When to Use**: Validating solutions; fixing solution validation errors  
**Key Features**:
- Solution validation
- Error detection and fixing
- Transitive dependency checking
- Project layout validation

---

## Quick Reference Table

| Skill | Category | Frequency | Complexity |
|-------|----------|-----------|-----------|
| bicep-validate | Infrastructure | High | Low |
| bootstrap-conversations-tme | Testing | Medium | High |
| deploy-conversations-tme | Deployment | Medium | Medium |
| deploy-official | Deployment | Low | High |
| loyalty-portal-yarn-auth | Package Mgmt | Medium | Low |
| newtonsoft-migration | Refactoring | Low | High |
| open-sva-project | Development | High | Low |
| powershell-agency-copilot-alias | Automation | Low | Low |
| pr-comment-post | Code Review | High | Medium |
| pr-publishing | Process | High | Low |
| pr-review-deep | Code Review | High | High |
| refresh-reviewer-field-guide | Documentation | Low | High |
| run-nonofficial-pipeline | Deployment | Medium | Medium |
| validate-solutions | Quality Gate | High | Low |

---

## Workflow Integration

These skills are designed to integrate into your daily SupportServices development workflow:

1. **Development Phase**
   - `open-sva-project` — Set up local environment
   - `validate-solutions` — Ensure solution integrity
   - `bicep-validate` — Validate infrastructure code

2. **Testing Phase**
   - `bootstrap-conversations-tme` — Create test environment
   - `deploy-conversations-tme` — Deploy to TME
   - `loyalty-portal-yarn-auth` — Manage dependencies

3. **Code Review Phase**
   - `pr-publishing` — Create quality PRs
   - `pr-review-deep` — Conduct thorough reviews
   - `pr-comment-post` — Post contextual feedback

4. **Deployment Phase**
   - `run-nonofficial-pipeline` — Test deployment
   - `deploy-official` — Production deployment

5. **Maintenance Phase**
   - `refresh-reviewer-field-guide` — Keep conventions current
   - `newtonsoft-migration` — Modernize codebase

---

## Navigation

- **Main Registry**: See [Skills_Registry/README.md](../README.md)
- **All Categories**: Check parent directory listing
- **Skill Details**: Each skill has detailed documentation in its source file

**Last Updated**: June 2026
