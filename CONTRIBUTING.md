# Contributing to Personal Learning Repository

Thank you for your interest in contributing! This repository is designed as a comprehensive learning resource, and we welcome improvements, corrections, and new content.

## Getting Started

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your changes: `git checkout -b feature/your-feature-name`
4. **Make your changes** following our guidelines
5. **Test** your contributions
6. **Commit** with clear, descriptive messages
7. **Push** to your fork and **submit a pull request**

## Content Guidelines

### Code Examples
- Include clear, commented explanations of design decisions
- Provide complete, runnable examples when possible
- Add unit test examples for all code snippets
- Follow language-specific best practices (C#, PowerShell, etc.)
- Include performance considerations and tradeoffs

### Documentation
- Use clear, concise language
- Include practical, real-world examples
- Add hyperlinks to related content
- Use consistent formatting and structure
- Proofread for grammar and spelling

### Multimedia Content
- Follow the naming conventions in AzureDevOpsSelflearn/
- Ensure video/audio content is properly indexed
- Include transcripts for accessibility
- Test generation scripts before submitting

### Interview Problems
- Include 2-3 variations of each problem
- Provide complete solution with explanations
- Add real-world impact metrics
- Include comprehensive unit test examples
- Explain design tradeoffs and alternatives

## Style & Format Standards

### Markdown
- Use consistent heading hierarchy (# → ##, not # → ###)
- Code blocks must include language identifiers
- Line length: max 100 characters (soft limit, hard at 120)
- Lists use consistent formatting (bullets or numbers)

### Code Comments
- Explain **why**, not just **what**
- Reference design patterns or architectural decisions
- Include complexity analysis where relevant
- Call out edge cases and assumptions

### Commit Messages
- Use clear, descriptive titles (50 chars max)
- Reference issue numbers: `Fixes #123`
- Include brief explanation of changes
- Example: `Add exponential backoff pattern to retry logic (Fixes #45)`

## Branch Naming

- `feature/short-description` — New content or features
- `fix/short-description` — Bug fixes or corrections
- `docs/short-description` — Documentation improvements
- `refactor/short-description` — Content reorganization

## Pull Request Process

1. **Title**: Clear, descriptive PR title
2. **Description**: Explain what you changed and why
3. **Link issues**: Reference related issues with `Fixes #123`
4. **Checklist**: Verify your changes are complete
5. **Review**: Address reviewer feedback promptly

### PR Checklist
- [ ] Content follows style guidelines
- [ ] Code examples include comments and tests
- [ ] Documentation is clear and complete
- [ ] No spelling or grammar errors
- [ ] Related issues are referenced
- [ ] Commits have clear messages
- [ ] No unrelated changes included

## Reporting Issues

When reporting bugs or suggesting improvements:

1. **Be specific**: Describe the exact issue or location
2. **Provide context**: What topic, file, or section?
3. **Suggest improvements**: If possible, propose a solution
4. **Include references**: Link to related content or issues

### Issue Template
```markdown
## Issue Type
- [ ] Bug
- [ ] Enhancement
- [ ] New Content
- [ ] Documentation

## Description
[Clear description of the issue or suggestion]

## Location
File/Section: [path/to/content]

## Expected Behavior
[What should happen]

## Additional Context
[Any other relevant information]
```

## Content Organization

### AzureDevOpsSelflearn/
- Sequential numbering (00-11) for learning path
- One topic per file where possible
- Related content cross-linked
- Supporting scripts in root directory
- Generated content in dated subdirectories

### SupportServicesLearning/
- Interview problems clearly numbered and categorized
- Separate guides for DEV vs SRE roles
- Technology-specific content in `technologies/` folder
- Hands-on exercises in `labs/` folder
- Role-specific paths in `roles/` folder

## Review Process

Our team reviews all contributions:
- **Timeline**: Expect feedback within 3-5 business days
- **Feedback**: We'll provide constructive comments and suggestions
- **Revisions**: Work with reviewers to address feedback
- **Approval**: Once approved, your contribution will be merged

## Code of Conduct

Contributors are expected to:
- Be respectful and inclusive
- Provide constructive feedback
- Focus on the content and ideas, not the person
- Follow all repository guidelines
- Help maintain a positive community

## Questions?

- **Open an issue** with your question
- **Check existing documentation** for answers
- **Review past issues** for similar questions
- **Follow up on PRs** with questions or concerns

---

**Thank you for contributing!** Your improvements help make this a better learning resource for everyone.
