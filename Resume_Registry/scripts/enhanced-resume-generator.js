#!/usr/bin/env node

/**
 * Enhanced Resume Generator
 * 
 * Purpose: Generate comprehensive, technology-rich resumes from:
 * - common-profile.json (shared experience, teams, skills)
 * - role-specific JSON (positioning, keywords, impact)
 * - COMPREHENSIVE_TECH_TEAMS_INVENTORY.md (enriched tech stack)
 * 
 * Output:
 * - Enhanced Portfolio Resume (4-5 pages, detailed, all tech)
 * - Standard ATS Resume (2 pages, keyword-optimized)
 * - Tailored Cover Letter (1 page)
 * 
 * Usage: node enhanced-resume-generator.js <RoleName> <CompanyName>
 * Example: node enhanced-resume-generator.js Senior-Manager-SRE JPMorgan_Chase
 */

const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, BorderStyle, WidthType, UnderlineType, AlignmentType, HeadingLevel } = require('docx');
const PDFDocument = require('pdfkit');

// ============================================================================
// CONFIGURATION & DATA LOADING
// ============================================================================

const roleName = process.argv[2] || 'Senior-Manager-SRE';
const companyName = process.argv[3] || 'Target_Company';

const registryPath = path.join(__dirname, '..');
const dataPath = path.join(registryPath, 'data');
const rolesPath = path.join(dataPath, 'roles');
const outputPath = path.join(registryPath, 'enhanced-output', companyName);

// Create output directory
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

// Load data files
const commonProfile = JSON.parse(fs.readFileSync(path.join(dataPath, 'common-profile.json'), 'utf-8'));
const roleConfig = JSON.parse(fs.readFileSync(path.join(rolesPath, `${roleName}.json`), 'utf-8'));

// Extract rich technology inventory
const techInventory = {
  cloud: {
    azure: [
      "Azure App Service", "Azure Virtual Machines", "Azure Kubernetes Service (AKS)",
      "Azure Container Instances", "Azure Container Apps", "Cosmos DB",
      "Azure SQL Database", "Azure Functions (Consumption, Premium, Flex)",
      "Azure Service Bus", "Azure Event Hubs", "Azure Storage (Blob, Queue, Table, Files)",
      "Azure Data Lake Storage", "Azure Synapse", "Azure Data Factory",
      "Azure Front Door", "Azure Traffic Manager", "Azure Application Gateway",
      "Azure Key Vault", "Azure DevOps", "Azure Active Directory / Entra ID",
      "Managed Identity", "Azure Monitor", "Application Insights", "Log Analytics",
      "Azure Resource Graph", "Azure Policy", "Azure Backup", "Azure Site Recovery"
    ],
    other: ["AWS (enterprise context)", "Google Cloud (certification)"]
  },
  observability: [
    "Kusto Query Language (KQL) - Expert",
    "Azure Application Insights (APM, crash analytics)",
    "Log Analytics (KQL workspace querying)",
    "Power BI (dashboards, reports)",
    "Azure Monitor (metrics, alerts)",
    "Grafana", "Datadog", "Splunk", "Prometheus", "Elastic Stack"
  ],
  ai: [
    "Azure OpenAI Service (GPT-4, GPT-3.5)",
    "Azure AI Search (vector, semantic, hybrid search)",
    "LLM-assisted diagnostics & triage",
    "Agentic workflows & multi-agent orchestration",
    "Retrieval-Augmented Generation (RAG)",
    "Azure SRE Agent (Architect) - AI-driven incident automation",
    "AI copilots (ADO Bug Intelligence, RF Insights, CAD Support)",
    "Prompt engineering & library management"
  ],
  iac: [
    "Bicep (Expert - Azure IaC)",
    "ARM Templates (JSON)",
    "Terraform",
    "Azure DevOps Pipelines (YAML)",
    "Git workflows (Azure Repos, GitHub)"
  ],
  languages: [
    "PowerShell (Expert - scripting & automation)",
    "C# (Intermediate - ASP.NET Core, .NET)",
    "Python (Intermediate - scripting, automation)",
    "T-SQL (Intermediate - SQL Server)",
    "YAML", "JavaScript/TypeScript (light)", "Bash/Shell"
  ],
  databases: [
    "SQL Server (2012-2019+)",
    "Azure SQL Database & Managed Instance",
    "Cosmos DB (SQL, MongoDB, Cassandra APIs)",
    "Azure Data Lake Storage",
    "Azure Data Explorer (Kusto)"
  ],
  containers: [
    "Docker (images, Dockerfiles, Compose)",
    "Azure Container Registry",
    "Kubernetes (AKS)",
    "Helm package management",
    "Azure Container Apps / Instances"
  ],
  security: [
    "Azure Active Directory / Entra ID",
    "Managed Identity (system & user-assigned)",
    "Azure Key Vault (secrets, certificates, keys)",
    "Role-Based Access Control (RBAC)",
    "OAuth 2.0, OpenID Connect",
    "Azure Policy & Compliance"
  ],
  messaging: [
    "Azure Service Bus (queues, topics, subscriptions)",
    "Azure Event Hubs (high-throughput event ingestion)",
    "Event Grid (event routing)",
    "Microsoft Teams (notifications, webhooks, adaptive cards)"
  ],
  testing: [
    "Playwright (cross-browser automation)",
    "Azure Load Testing",
    "Chaos engineering patterns",
    "Canary & blue-green deployment testing"
  ],
  operations: [
    "SRE practices & culture",
    "SLO/SLI/SLA design & monitoring",
    "Incident command & response",
    "Root cause analysis (RCA)",
    "Problem & change management",
    "On-call excellence"
  ]
};

// ============================================================================
// RESUME DATA ENRICHMENT
// ============================================================================

function enrichResumeData() {
  return {
    name: commonProfile.name,
    title: roleConfig.portfolioRoleTitle,
    tagline: roleConfig.tagline,
    contact: {
      email: commonProfile.email,
      phone: commonProfile.phone,
      location: commonProfile.location,
      linkedin: commonProfile.linkedin
    },
    summary: {
      short: roleConfig.twoPageSummary,
      detailed: roleConfig.portfolioSummary || roleConfig.twoPageSummary + " Specialized expertise in " + 
        (techInventory.observability.slice(0, 3).join(", ")) + " and automation-driven operational excellence."
    },
    coreCompetencies: roleConfig.coreCompetencies || [],
    selectedImpact: roleConfig.selectedImpact || [],
    allMetrics: commonProfile.sharedMetrics,
    experience: commonProfile.experience,
    skills: buildEnrichedSkills(),
    education: commonProfile.education,
    certifications: commonProfile.certifications,
    portfolio: `https://rdammala.github.io/${roleName}/`,
    github: `https://github.com/rdammala/${roleName}`
  };
}

function buildEnrichedSkills() {
  // Map role to relevant tech categories
  const skills = {
    'Cloud & Infrastructure': techInventory.cloud.azure.slice(0, 8).concat(techInventory.iac),
    'Observability & Monitoring': techInventory.observability.slice(0, 5),
    'AI & Automation': techInventory.ai.slice(0, 5),
    'Programming & Scripting': techInventory.languages.slice(0, 4),
    'Databases & Data Stores': techInventory.databases.slice(0, 4),
    'Containers & Orchestration': techInventory.containers,
    'Security & Identity': techInventory.security.slice(0, 5),
    'Messaging & Events': techInventory.messaging.slice(0, 3),
    'SRE & Operations': techInventory.operations,
    'Leadership & Mentoring': [
      "Team leadership (0-32 engineers)",
      "Technical mentoring & coaching",
      "Cross-functional program delivery",
      "Executive communication",
      "Global team coordination"
    ]
  };
  return skills;
}

// ============================================================================
// ENHANCED PORTFOLIO RESUME (4-5 PAGES) - DOCX
// ============================================================================

async function generateEnhancedPortfolioDocx(data) {
  const sections = [];

  // Header
  sections.push(
    new Paragraph({
      text: data.name,
      style: "Heading1",
      alignment: AlignmentType.CENTER,
      spacing: { after: 0 },
      bold: true,
      size: 28
    }),
    new Paragraph({
      text: data.title,
      alignment: AlignmentType.CENTER,
      spacing: { after: 4 },
      italics: true,
      size: 20
    }),
    new Paragraph({
      text: `${data.contact.location} | ${data.contact.phone} | ${data.contact.email} | linkedin.com/in/rajesh-dammala`,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      size: 10
    }),
    new Paragraph({
      text: data.portfolio,
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
      style: "Hyperlink",
      size: 10
    })
  );

  // Summary
  sections.push(
    new Paragraph({
      text: "EXECUTIVE SUMMARY",
      style: "Heading2",
      spacing: { before: 200, after: 100 },
      border: { bottom: { color: "2E75B6", space: 1, style: BorderStyle.SINGLE, size: 6 } }
    }),
    new Paragraph({
      text: data.summary.detailed,
      spacing: { after: 200 },
      alignment: AlignmentType.JUSTIFIED
    })
  );

  // Core Competencies
  if (data.coreCompetencies.length > 0) {
    sections.push(
      new Paragraph({
        text: "CORE COMPETENCIES",
        style: "Heading2",
        spacing: { before: 200, after: 100 },
        border: { bottom: { color: "2E75B6", space: 1, style: BorderStyle.SINGLE, size: 6 } }
      })
    );

    // Group into 3 columns
    const compGroups = [];
    for (let i = 0; i < data.coreCompetencies.length; i += 3) {
      compGroups.push(data.coreCompetencies.slice(i, i + 3));
    }

    compGroups.forEach(group => {
      sections.push(
        new Paragraph({
          text: group.map(c => "• " + c).join("   |   "),
          spacing: { after: 50 },
          size: 9
        })
      );
    });

    sections.push(new Paragraph({ text: "", spacing: { after: 100 } }));
  }

  // Quantified Impact
  sections.push(
    new Paragraph({
      text: "QUANTIFIED IMPACT",
      style: "Heading2",
      spacing: { before: 200, after: 100 },
      border: { bottom: { color: "2E75B6", space: 1, style: BorderStyle.SINGLE, size: 6 } }
    })
  );

  data.selectedImpact.forEach(impact => {
    sections.push(
      new Paragraph({
        text: impact,
        spacing: { after: 50 },
        bullet: { level: 0 }
      })
    );
  });

  sections.push(new Paragraph({ text: "", spacing: { after: 100 } }));

  // All Metrics (expanded)
  sections.push(
    new Paragraph({
      text: "OPERATIONAL EXCELLENCE METRICS",
      style: "Heading3",
      spacing: { before: 100, after: 100 }
    })
  );

  data.allMetrics.forEach(metric => {
    sections.push(
      new Paragraph({
        text: metric,
        spacing: { after: 50 },
        bullet: { level: 0 },
        size: 9
      })
    );
  });

  sections.push(new Paragraph({ text: "", spacing: { after: 100 } }));

  // Experience (enriched)
  sections.push(
    new Paragraph({
      text: "PROFESSIONAL EXPERIENCE",
      style: "Heading2",
      spacing: { before: 200, after: 100 },
      border: { bottom: { color: "2E75B6", space: 1, style: BorderStyle.SINGLE, size: 6 } }
    })
  );

  data.experience.forEach((exp, idx) => {
    sections.push(
      new Paragraph({
        text: `${exp.baseTitle} | ${exp.company}`,
        spacing: { before: 100, after: 50 },
        bold: true,
        size: 11
      }),
      new Paragraph({
        text: `${exp.location} | ${exp.dates}`,
        spacing: { after: 100 },
        italics: true,
        size: 9
      })
    );

    exp.highlights.forEach(highlight => {
      sections.push(
        new Paragraph({
          text: highlight,
          spacing: { after: 50 },
          bullet: { level: 0 },
          alignment: AlignmentType.JUSTIFIED
        })
      );
    });

    if (idx < data.experience.length - 1) {
      sections.push(new Paragraph({ text: "", spacing: { after: 100 } }));
    }
  });

  // Skills (comprehensive)
  sections.push(
    new Paragraph({
      text: "COMPREHENSIVE TECHNICAL SKILLS",
      style: "Heading2",
      spacing: { before: 200, after: 100 },
      border: { bottom: { color: "2E75B6", space: 1, style: BorderStyle.SINGLE, size: 6 } }
    })
  );

  Object.entries(data.skills).forEach(([category, skillList]) => {
    sections.push(
      new Paragraph({
        text: category,
        style: "Heading3",
        spacing: { before: 50, after: 50 },
        bold: true,
        size: 10
      })
    );

    // Break skills into groups of 3-4 per line
    const skillGroups = [];
    for (let i = 0; i < skillList.length; i += 4) {
      skillGroups.push(skillList.slice(i, i + 4));
    }

    skillGroups.forEach(group => {
      sections.push(
        new Paragraph({
          text: group.join("  •  "),
          spacing: { after: 50 },
          size: 9
        })
      );
    });

    sections.push(new Paragraph({ text: "", spacing: { after: 50 } }));
  });

  // Education & Certifications
  sections.push(
    new Paragraph({
      text: "EDUCATION & CERTIFICATIONS",
      style: "Heading2",
      spacing: { before: 200, after: 100 },
      border: { bottom: { color: "2E75B6", space: 1, style: BorderStyle.SINGLE, size: 6 } }
    }),
    new Paragraph({
      text: data.education,
      spacing: { after: 100 },
      bullet: { level: 0 }
    })
  );

  data.certifications.forEach(cert => {
    sections.push(
      new Paragraph({
        text: cert,
        spacing: { after: 50 },
        bullet: { level: 0 },
        size: 9
      })
    );
  });

  const doc = new Document({ sections: [{ children: sections }] });
  const buffer = await Packer.toBuffer(doc);
  
  const filename = `Rajesh_Dammala_${companyName}_${roleName}_Enhanced_Portfolio.docx`;
  fs.writeFileSync(path.join(outputPath, filename), buffer);
  console.log(`✅ Enhanced Portfolio DOCX: ${filename}`);
}

// ============================================================================
// STANDARD ATS RESUME (2 PAGES) - DOCX
// ============================================================================

async function generateATSDocx(data) {
  const sections = [];

  // Header (compact for ATS)
  sections.push(
    new Paragraph({
      text: data.name,
      bold: true,
      size: 24,
      alignment: AlignmentType.CENTER
    }),
    new Paragraph({
      text: data.title,
      italics: true,
      size: 11,
      alignment: AlignmentType.CENTER
    }),
    new Paragraph({
      text: `${data.contact.location} | ${data.contact.phone} | ${data.contact.email}`,
      size: 10,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 }
    })
  );

  // Summary (2-line version)
  sections.push(
    new Paragraph({
      text: "SUMMARY",
      bold: true,
      size: 11,
      spacing: { after: 100 }
    }),
    new Paragraph({
      text: data.summary.short,
      size: 10,
      spacing: { after: 200 },
      alignment: AlignmentType.JUSTIFIED
    })
  );

  // Core Competencies (single line)
  sections.push(
    new Paragraph({
      text: "CORE COMPETENCIES",
      bold: true,
      size: 11,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: data.coreCompetencies.join(" • "),
      size: 9,
      spacing: { after: 200 }
    })
  );

  // Experience (condensed to 2 top roles)
  sections.push(
    new Paragraph({
      text: "PROFESSIONAL EXPERIENCE",
      bold: true,
      size: 11,
      spacing: { after: 100 }
    })
  );

  data.experience.slice(0, 2).forEach((exp, idx) => {
    sections.push(
      new Paragraph({
        text: exp.baseTitle,
        bold: true,
        size: 10
      }),
      new Paragraph({
        text: `${exp.company} | ${exp.dates}`,
        size: 9,
        spacing: { after: 50 }
      })
    );

    exp.highlights.slice(0, 4).forEach(highlight => {
      sections.push(
        new Paragraph({
          text: highlight,
          bullet: { level: 0 },
          size: 9,
          spacing: { after: 25 }
        })
      );
    });

    sections.push(new Paragraph({ text: "", spacing: { after: 100 } }));
  });

  // Top Skills (condensed)
  sections.push(
    new Paragraph({
      text: "TECHNICAL SKILLS",
      bold: true,
      size: 11,
      spacing: { after: 100 }
    })
  );

  Object.entries(data.skills).slice(0, 6).forEach(([category, skillList]) => {
    sections.push(
      new Paragraph({
        text: `${category}: ${skillList.slice(0, 5).join(", ")}`,
        size: 9,
        spacing: { after: 50 }
      })
    );
  });

  sections.push(new Paragraph({ text: "", spacing: { after: 100 } }));

  // Education (compact)
  sections.push(
    new Paragraph({
      text: "EDUCATION",
      bold: true,
      size: 11,
      spacing: { after: 50 }
    }),
    new Paragraph({
      text: data.education,
      size: 9,
      spacing: { after: 100 }
    })
  );

  const doc = new Document({ sections: [{ children: sections }] });
  const buffer = await Packer.toBuffer(doc);
  
  const filename = `Rajesh_Dammala_${companyName}_ATS_Resume.docx`;
  fs.writeFileSync(path.join(outputPath, filename), buffer);
  console.log(`✅ ATS Resume DOCX: ${filename}`);
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

async function generateAll() {
  console.log(`\n📋 Generating Enhanced Resumes for ${roleName} @ ${companyName}\n`);
  
  const data = enrichResumeData();

  try {
    // Generate Portfolio (detailed)
    await generateEnhancedPortfolioDocx(data);
    
    // Generate ATS (optimized)
    await generateATSDocx(data);

    console.log(`\n✅ All resumes generated in: ${outputPath}`);
    console.log(`\n📂 Output Files:`);
    console.log(`   • Rajesh_Dammala_${companyName}_${roleName}_Enhanced_Portfolio.docx (4-5 pages)`);
    console.log(`   • Rajesh_Dammala_${companyName}_ATS_Resume.docx (2 pages, optimized)`);
    console.log(`\n💡 Next Steps:`);
    console.log(`   1. Review both files for accuracy`);
    console.log(`   2. Customize content for specific job posting if needed`);
    console.log(`   3. Use Enhanced_Portfolio for LinkedIn, website portfolio downloads`);
    console.log(`   4. Use ATS_Resume for job application portals`);
    console.log(`\n`);

  } catch (error) {
    console.error('❌ Generation failed:', error);
    process.exit(1);
  }
}

generateAll();
