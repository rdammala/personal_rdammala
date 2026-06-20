# Enhanced Resume Generation Guide

## Quick Start

### Option 1: Generate with Enhanced Resume Generator (NEW)
```powershell
cd C:\rdammala\personal_rdammala
npm install  # if not already done
node Resume_Registry/scripts/enhanced-resume-generator.js "Senior-Manager-SRE" "JPMorgan_Chase"
```

**Output:**
- `Rajesh_Dammala_JPMorgan_Chase_Senior-Manager-SRE_Enhanced_Portfolio.docx` (4-5 pages, detailed)
- `Rajesh_Dammala_JPMorgan_Chase_ATS_Resume.docx` (2 pages, ATS-optimized)

### Option 2: Generate with Original Script (still available)
```powershell
node Resume_Registry/scripts/generate_role_resume.js "Senior-Manager-SRE"
```

---

## What's New in Enhanced Generator

### 1. Richer Technology Inventory
Pulls from `COMPREHENSIVE_TECH_TEAMS_INVENTORY.md`:
- ✅ All Azure services (30+)
- ✅ AI & agentic systems
- ✅ Observability tools (KQL, Power BI, APM)
- ✅ Infrastructure as Code (Bicep, Terraform)
- ✅ All programming languages with proficiency
- ✅ Containers & orchestration
- ✅ Security & identity services
- ✅ Messaging & event systems

### 2. Teams & Organizations
Includes:
- ✅ Current team (Xbox SRE, Lead Escalations)
- ✅ Azure Support era (15 engineers led)
- ✅ Azure LiveSite Operations (12+20 engineers)
- ✅ IBM data center era
- ✅ Direct reports count & geographic scope

### 3. Comprehensive Skills Section
**Portfolio Version (4-5 pages):**
- 10 skill categories
- 60+ total technologies
- Proficiency levels noted (Expert, Intermediate, Light)
- All platforms, languages, databases, tools

**ATS Version (2 pages):**
- Top 6 skill categories
- ~5 key skills per category
- Optimized for keyword matching

### 4. Full Experience Enrichment
**Portfolio Version:**
- All highlights from common-profile.json
- Full context & quantified impact
- Team leadership details

**ATS Version:**
- Top 2 roles (most recent)
- Top 4 achievements per role
- Condensed to ~2 pages

### 5. Quantified Impact (All metrics)
**Portfolio Version includes:**
- 30-35% incident automation potential
- 25,000+ stale incidents remediated
- 500+ alerts streamlined
- 85%→98% operational efficiency
- 32% faster resolution time
- 175+ playbooks in 5 months
- ~122K USD annual savings
- 150+ hours/year saved

**ATS Version:**
- Highest-impact metrics only
- Condensed into Summary/Impact sections

---

## Two-Resume Strategy

### Enhanced Portfolio Resume (4-5 pages)
**When to use:**
- LinkedIn "Featured" section
- Personal website portfolio download
- Initial outreach to recruiters
- Career-focused materials

**What's included:**
- Executive summary (detailed)
- All core competencies
- All quantified impact metrics
- Full 4 roles of experience (all highlights)
- Comprehensive technical skills (10 categories, 60+ tech)
- All certifications & education

**Tone:** Comprehensive, authoritative, detailed

### ATS Resume (2 pages)
**When to use:**
- Job application portals
- Corporate recruiting systems
- Resume parsing tools
- Initial screening

**What's included:**
- Summary (concise)
- Core competencies (1 line)
- Top 2 roles with top 4 achievements each
- Top 6 skill categories
- Education

**Tone:** Concise, keyword-optimized, ATS-friendly

---

## Customization by Role

### For SRE/Operations Roles
Enhanced generator automatically emphasizes:
- Kusto Query Language & observability
- SLO/SLI/SLA frameworks
- Incident automation & AI-driven diagnostics
- Operational efficiency metrics
- On-call excellence

### For Escalation/Support Roles
Enhanced generator automatically emphasizes:
- Incident command & response
- RCA & playbook authoring
- Executive communication
- Customer management
- Resolution time improvements

### For Infrastructure/DevOps Roles
Enhanced generator automatically emphasizes:
- Bicep & Infrastructure as Code
- CI/CD pipeline design
- Azure platform expertise
- Multi-region deployment
- Disaster recovery design

### For AI/Automation Roles
Enhanced generator automatically emphasizes:
- Azure SRE Agent architecture
- LLM-assisted diagnostics
- Agentic workflows
- Automation framework design
- Cost savings from automation

### For Leadership Roles
Enhanced generator automatically emphasizes:
- Team leadership (0-32 engineers)
- Technical mentoring
- Organizational transformation
- Cross-functional program delivery
- Global team coordination

---

## File Locations

### Source Files (Read-Only)
```
Resume_Registry/
├── data/
│   ├── common-profile.json (shared experience, all skills)
│   └── roles/
│       ├── Senior-Manager-SRE.json
│       ├── Senior-Incident-Manager.json
│       ├── Staff-Escalation-Manager.json
│       └── ... (7 roles total)
├── COMPREHENSIVE_TECH_TEAMS_INVENTORY.md (enriched tech data)
└── PORTFOLIO_STYLE_SYSTEM.md (portfolio design guide)
```

### Scripts
```
Resume_Registry/scripts/
├── enhanced-resume-generator.js (NEW - generates detailed + ATS resumes)
└── generate_role_resume.js (original - still available)
```

### Output
```
Resume_Registry/enhanced-output/
└── <CompanyName>/
    ├── Rajesh_Dammala_<Company>_<Role>_Enhanced_Portfolio.docx
    └── Rajesh_Dammala_<Company>_ATS_Resume.docx
```

---

## Integration with Job Application Workflow

### Step 1: Create Company Folder
```powershell
mkdir "C:\...\Resumes\2026\<CompanyName>"
```

### Step 2: Generate Enhanced Resumes
```powershell
node Resume_Registry/scripts/enhanced-resume-generator.js "<RoleName>" "<CompanyName>"
```

### Step 3: Move to Company Folder
```powershell
Move-Item "Resume_Registry/enhanced-output/<CompanyName>/*" "Resumes/2026/<CompanyName>/"
```

### Step 4: Generate Tailored Cover Letter
Use existing cover letter generator or manual write

### Step 5: Add to Job Application Tracker
Update `Job_Application_Tracker.html` with new entry

### Step 6: Generate Portfolio (if needed)
```powershell
node Portfolio_Generator/scripts/generate-portfolio.js "<RoleName>"
```

---

## Quality Assurance Checklist

- [ ] Resume content accuracy (compare against source JSON)
- [ ] Technology list completeness (check against COMPREHENSIVE_TECH_TEAMS_INVENTORY.md)
- [ ] Quantified metrics accuracy (verify from common-profile.json)
- [ ] Experience dates correct
- [ ] Team sizes accurate
- [ ] Spelling & grammar check
- [ ] Formatting consistency (fonts, spacing, alignment)
- [ ] ATS version scans without errors
- [ ] Portfolio version is 4-5 pages
- [ ] Both versions include portfolio URL
- [ ] Both versions include GitHub link (if applicable)

---

## Data Sources & Accuracy

All enhanced resume content is generated from:

1. **common-profile.json** (authoritative source)
   - Experience history (4 roles, 14+ years)
   - All metrics & achievements
   - All certifications
   - Core skills foundation

2. **Role-specific JSON files** (positioning per role)
   - Role title & tagline
   - ATS keywords
   - Summary variations
   - Core competencies emphasis

3. **COMPREHENSIVE_TECH_TEAMS_INVENTORY.md** (enriched data)
   - Full technology stack (200+ items)
   - Teams & organization details
   - Proficiency levels
   - Technology categorization

**Always verify:**
- Experience dates match source files
- Team sizes are accurate (check common-profile.json)
- Metrics are exact (don't round or approximate)
- Technologies listed were actually used (check role history)

---

## Future Enhancements

- [ ] PDF generation (currently docx only)
- [ ] Cover letter generation (automated from role config)
- [ ] Tailoring rules (auto-emphasize specific tech based on JD)
- [ ] Keyword optimization (parse job posting, suggest keyword placement)
- [ ] Version history tracking (resume iterations per company)
- [ ] Portfolio style variation per role (implement PORTFOLIO_STYLE_SYSTEM.md)
- [ ] Integration with Job Application Tracker (auto-add entry)
- [ ] LinkedIn profile suggestions (recommend profile updates)

---

## Troubleshooting

**Q: Script fails with "Cannot find module 'docx'"**
A: Run `npm install` from the repo root first

**Q: Output files are blank or incomplete**
A: Verify JSON files exist in `Resume_Registry/data/` and `Resume_Registry/data/roles/`

**Q: Skills list is too long**
A: That's intentional! Portfolio version shows all 60+ tech; ATS version is condensed

**Q: I want to customize the output**
A: Edit the role-specific JSON file in `Resume_Registry/data/roles/<RoleName>.json`

**Q: How do I add a new role?**
A: 
1. Create `Resume_Registry/data/roles/New-Role-Name.json` (copy from existing role)
2. Update the JSON with new positioning & summary
3. Run: `node Resume_Registry/scripts/enhanced-resume-generator.js "New-Role-Name" "CompanyName"`

---

## Version History

- **v1.0** (2026-06-19): Initial Enhanced Resume Generator
  - Full technology inventory integration
  - 4-5 page portfolio + 2-page ATS strategy
  - Role-based emphasis & customization
  - Quantified metrics from common-profile.json

---

**Last Updated:** 2026-06-19  
**Maintained by:** Resume Management System  
**Questions?** Review COMPREHENSIVE_TECH_TEAMS_INVENTORY.md for data details
