# GitHub Skills Registry

This directory contains skills for GitHub integration, pull request management, code review automation, and issue handling.

## Available Skills

### 1. **address-pr-comments** ✅
**Purpose**: Address review comments (including Copilot comments) on the active pull request  
**When to Use**: Responding to PR feedback; fixing review comments; resolving PR threads  
**Key Features**:
- Comment addressing
- Thread resolution
- Feedback implementation

### 2. **create-pull-request** ✅
**Purpose**: Create a GitHub Pull Request from the current or specified branch  
**When to Use**: Opening a PR; submitting code for review; creating a draft PR  
**Key Features**:
- PR creation
- Draft support
- Branch targeting

### 3. **form-github-search-query** ✅
**Purpose**: Forms a GitHub search query based on natural language  
**When to Use**: Creating effective GitHub searches; finding relevant issues or PRs  
**Key Features**:
- Query generation
- Natural language parsing
- Issue & PR filtering

### 4. **show-github-search-result** ✅
**Purpose**: Summarizes GitHub search results in a friendly markdown table  
**When to Use**: Displaying GitHub search results; formatting query results  
**Key Features**:
- Result formatting
- Markdown table generation
- Readability enhancement

### 5. **suggest-fix-issue** ✅
**Purpose**: Given the details of an issue, suggests a fix for the issue  
**When to Use**: Proposing solutions; suggesting bug fixes; code recommendations  
**Key Features**:
- Fix suggestions
- Code examples
- Solution guidance

### 6. **summarize-github-issue-pr-notification** ✅
**Purpose**: Summarizes the content of a GitHub issue, PR, or notification  
**When to Use**: Summarizing issues; PR summary; notification overview  
**Key Features**:
- Issue summarization
- PR summarization
- Notification digests

---

## Quick Reference Table

| Skill | Category | Use Case | Complexity |
|-------|----------|----------|-----------|
| address-pr-comments | Code Review | Feedback response | Low |
| create-pull-request | PR Management | PR creation | Low |
| form-github-search-query | Search | Query generation | Low |
| show-github-search-result | Search | Result display | Low |
| suggest-fix-issue | Problem Solving | Fix recommendations | Medium |
| summarize-github-issue-pr-notification | Documentation | Content summary | Low |

---

## Workflow Integration

### Code Review Workflow
1. `summarize-github-issue-pr-notification` — Understand PR changes
2. `address-pr-comments` — Respond to feedback
3. `suggest-fix-issue` — Propose solutions

### PR Management Workflow
1. `form-github-search-query` — Find relevant PRs
2. `create-pull-request` — Create new PR
3. `show-github-search-result` — Display search results

---

## Navigation

- **Main Registry**: See [Skills_Registry/README.md](../README.md)
- **SupportServices Skills**: See [SupportServices/README.md](../SupportServices/README.md)
- **Azure Skills**: See [Azure/README.md](../Azure/README.md)

**Last Updated**: June 2026
