# Resume Registry

This registry stores reusable, ATS-focused resume source content for Rajesh Dammala across multiple target roles.

## Purpose

This folder separates two resume use cases:

1. Portfolio resume: detailed 4-5 page downloadable profile tailored to a role family.
2. Application resume: concise 2-page ATS-friendly version for job portals and recruiter submissions.

## Role Coverage

- Forward Deployed Engineer
- Platform Engineer
- Build Engineer
- Director Incident Manager
- Technical Program Manager
- Senior Site Reliability Engineering
- Staff Escalation Manager

## Structure

- data/common-profile.json: shared experience, achievements, certifications, and skills
- data/roles/*.json: role-specific positioning, keywords, summaries, and emphasis
- scripts/generate_role_resume.js: generates docx/pdf outputs from the registry
- generated/<role-slug>/: produced artifacts for each role

## Commands

Run from the repo root after installing dependencies:

```powershell
npm install
node Resume_Registry/scripts/generate_role_resume.js Forward-Deployed-Engineer
```

To generate any other role, replace the slug with one of:

- Forward-Deployed-Engineer
- Platform-Engineer
- Build-Engineer
- Director-Incident-Manager
- Technical-Program-Manager
- Senior-Site-Reliability-Engineering
- Staff-Escalation-Manager

## Output Types

Each role can generate:

- `<Name>_<Role>_2Page.docx`
- `<Name>_<Role>_2Page.pdf`
- `<Name>_<Role>_Portfolio_Full.docx`
- `<Name>_<Role>_Portfolio_Full.pdf`
- `<Name>_CoverLetter_<Role>.docx`
- `<Name>_CoverLetter_<Role>.pdf`

## Notes

- The 2-page version prioritizes relevance, quantified impact, and ATS keyword density.
- The portfolio full version is intentionally expansive and can run 4-5 pages.
- The cover letter is constrained to one page.
