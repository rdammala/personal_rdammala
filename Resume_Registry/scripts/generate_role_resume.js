import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  ExternalHyperlink
} from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');
const registryRoot = path.resolve(__dirname, '..');
const common = JSON.parse(fs.readFileSync(path.join(registryRoot, 'data', 'common-profile.json'), 'utf8'));

const slug = process.argv[2];
if (!slug) {
  console.error('Usage: node Resume_Registry/scripts/generate_role_resume.js <role-slug>');
  process.exit(1);
}

const rolePath = path.join(registryRoot, 'data', 'roles', `${slug}.json`);
if (!fs.existsSync(rolePath)) {
  console.error(`Role data not found: ${rolePath}`);
  process.exit(1);
}

const role = JSON.parse(fs.readFileSync(rolePath, 'utf8'));
const generatedDir = path.join(registryRoot, 'generated', slug);
fs.mkdirSync(generatedDir, { recursive: true });

const safeRole = role.roleTitle.replace(/[^A-Za-z0-9]+/g, '_');
const contactLine = `${common.location} | ${common.email} | ${common.phone} | ${common.linkedin}`;
const defaultSkills = [
  ...common.masterSkills['Cloud Platforms'],
  ...common.masterSkills['Observability and Operations'],
  ...common.masterSkills['Automation and Engineering'],
  ...common.masterSkills['AI and Agentic Systems'],
  ...common.masterSkills['Leadership']
];

function dividerParagraph() {
  return new Paragraph({
    border: { bottom: { color: '000000', space: 1, style: BorderStyle.SINGLE, size: 6 } },
    spacing: { after: 100 }
  });
}

function sectionHeader(text) {
  return new Paragraph({
    children: [new TextRun({ text, bold: true, size: 22, font: 'Calibri' })],
    spacing: { before: 100, after: 80 }
  });
}

function bulletParagraph(text, size = 20) {
  return new Paragraph({
    children: [new TextRun({ text: `• ${text}`, size, font: 'Calibri' })],
    indent: { left: 360 },
    spacing: { after: 40 }
  });
}

function roleExperience() {
  if (Array.isArray(role.experienceFocus) && role.experienceFocus.length > 0) {
    return role.experienceFocus;
  }

  return common.experience.map(exp => ({
    title: exp.baseTitle,
    company: exp.company,
    dates: exp.dates,
    bullets: exp.highlights.slice(0, 4)
  }));
}

function buildTwoPageData() {
  return {
    summary: role.twoPageSummary,
    competencies: role.coreCompetencies,
    impact: role.selectedImpact,
    experience: roleExperience(),
    skillLines: [
      ['Role Keywords', role.atsKeywords.join(', ')],
      ['Cloud and Platform', common.masterSkills['Cloud Platforms'].slice(0, 8).join(', ')],
      ['Observability and Operations', common.masterSkills['Observability and Operations'].slice(0, 8).join(', ')],
      ['Automation and AI', [...common.masterSkills['Automation and Engineering'].slice(0, 5), ...common.masterSkills['AI and Agentic Systems'].slice(0, 5)].join(', ')],
      ['Leadership', common.masterSkills['Leadership'].slice(0, 6).join(', ')]
    ]
  };
}

function buildPortfolioData() {
  const expandedExperience = common.experience.map(exp => ({
    title: exp.baseTitle,
    company: exp.company,
    dates: exp.dates,
    bullets: exp.highlights
  }));

  return {
    summary: role.portfolioSummary,
    competencies: role.coreCompetencies,
    impact: [...role.selectedImpact, ...common.sharedMetrics],
    experience: expandedExperience,
    extras: role.fullExperienceExtras || [],
    skillLines: Object.entries(common.masterSkills).map(([key, values]) => [key, values.join(', ')]),
    certifications: common.certifications
  };
}

function coverLetterData() {
  if (role.coverLetter && Array.isArray(role.coverLetter.paragraphs) && role.coverLetter.paragraphs.length > 0) {
    return role.coverLetter;
  }

  return {
    subject: `Re: ${role.roleTitle}`,
    paragraphs: [
      `I am applying for ${role.roleTitle} opportunities because the role aligns closely with how I have created value throughout my career: combining technical depth, operational judgment, and cross-functional leadership to deliver measurable outcomes in complex production environments. Across 16+ years at Microsoft and IBM, I have led critical support, reliability, automation, and cloud operations work that required both hands-on execution and clear stakeholder alignment.`,
      `My background includes mission-critical service operations, Azure platform work, escalation leadership, incident and telemetry-driven automation, and the design of repeatable playbooks that improve quality and speed. I have led teams of up to 32 engineers, improved operational efficiency from 85% to 98%, reduced resolution time by 32%, streamlined 500+ noisy alerts, remediated 25,000+ stale incidents, and built AI-assisted workflows that introduced 30-35% automation potential into operational response paths.`,
      `What I would bring to a ${role.roleTitle} role is a pragmatic combination of engineering fluency, systems thinking, and delivery ownership. I am effective in ambiguous environments, comfortable driving decisions with data, and disciplined about turning repeated operational pain into scalable improvements rather than one-off fixes.`,
      `I would welcome the opportunity to discuss how my experience across Azure, operations, automation, reliability, and leadership can support your team and accelerate meaningful outcomes in a ${role.roleTitle} capacity.`
    ]
  };
}

async function generateDocx(filePath, title, data, options = {}) {
  const children = [];
  children.push(new Paragraph({
    children: [new TextRun({ text: common.name.toUpperCase(), bold: true, size: 28, font: 'Calibri' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 30 }
  }));

  children.push(new Paragraph({
    children: [new TextRun({ text: title, bold: true, size: 22, font: 'Calibri' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 20 }
  }));

  children.push(new Paragraph({
    children: [new TextRun({ text: contactLine, size: 20, font: 'Calibri' })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 }
  }));

  if (options.portfolioUrl && options.portfolioLabel) {
    children.push(new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [
        new ExternalHyperlink({
          link: options.portfolioUrl,
          children: [new TextRun({ text: options.portfolioLabel, style: 'Hyperlink', size: 20, font: 'Calibri' })]
        })
      ]
    }));
  }

  children.push(dividerParagraph());
  children.push(sectionHeader('PROFESSIONAL SUMMARY'));
  children.push(new Paragraph({ children: [new TextRun({ text: data.summary, size: 20, font: 'Calibri' })], spacing: { after: 140 } }));

  children.push(dividerParagraph());
  children.push(sectionHeader('CORE COMPETENCIES'));
  for (let i = 0; i < data.competencies.length; i += 2) {
    const left = data.competencies[i];
    const right = data.competencies[i + 1] || '';
    children.push(new Paragraph({
      children: [
        new TextRun({ text: `• ${left}`, size: 20, font: 'Calibri' }),
        new TextRun({ text: right ? `     • ${right}` : '', size: 20, font: 'Calibri' })
      ],
      spacing: { after: 40 }
    }));
  }

  children.push(dividerParagraph());
  children.push(sectionHeader('SELECTED IMPACT'));
  data.impact.forEach(item => children.push(bulletParagraph(item)));

  children.push(dividerParagraph());
  children.push(sectionHeader('PROFESSIONAL EXPERIENCE'));
  data.experience.forEach(job => {
    children.push(new Paragraph({ children: [new TextRun({ text: job.title, bold: true, size: 21, font: 'Calibri' })], spacing: { before: 80, after: 20 } }));
    children.push(new Paragraph({ children: [new TextRun({ text: `${job.company} | ${job.dates}`, italics: true, size: 19, font: 'Calibri' })], spacing: { after: 60 } }));
    job.bullets.forEach(item => children.push(bulletParagraph(item)));
  });

  if (data.extras && data.extras.length) {
    children.push(dividerParagraph());
    children.push(sectionHeader('ADDITIONAL ROLE-RELEVANT HIGHLIGHTS'));
    data.extras.forEach(item => children.push(bulletParagraph(item)));
  }

  children.push(dividerParagraph());
  children.push(sectionHeader('EDUCATION & CERTIFICATIONS'));
  children.push(new Paragraph({ children: [new TextRun({ text: common.education, size: 20, font: 'Calibri' })], spacing: { after: 50 } }));
  (data.certifications || common.certifications).forEach(cert => children.push(bulletParagraph(cert)));

  children.push(dividerParagraph());
  children.push(sectionHeader('TECHNICAL SKILLS'));
  data.skillLines.forEach(([key, value]) => {
    children.push(new Paragraph({
      children: [
        new TextRun({ text: `${key}: `, bold: true, size: 20, font: 'Calibri' }),
        new TextRun({ text: value, size: 20, font: 'Calibri' })
      ],
      spacing: { after: 40 }
    }));
  });

  const doc = new Document({
    sections: [{ properties: { page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } } }, children }]
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(filePath, buffer);
}

function ensurePdfPage(doc, needed = 120) {
  if (doc.y > doc.page.height - doc.page.margins.bottom - needed) {
    doc.addPage();
  }
}

function drawPdfSection(doc, title) {
  doc.moveTo(50, doc.y).lineTo(562, doc.y).stroke();
  doc.moveDown(0.3);
  doc.font('Helvetica-Bold').fontSize(11).text(title);
  doc.moveDown(0.2);
}

function generatePdf(filePath, title, data, options = {}) {
  const doc = new PDFDocument({ margin: 50, size: 'LETTER' });
  doc.pipe(fs.createWriteStream(filePath));

  doc.font('Helvetica-Bold').fontSize(16).text(common.name.toUpperCase(), { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(11).text(title, { align: 'center' });
  doc.font('Helvetica').fontSize(9.5).text(contactLine, { align: 'center' });
  if (options.portfolioUrl && options.portfolioLabel) {
    doc.font('Helvetica').fontSize(9.5).fillColor('blue').text(options.portfolioLabel, { align: 'center', link: options.portfolioUrl, underline: true });
    doc.fillColor('black');
  }
  doc.moveDown(0.5);

  drawPdfSection(doc, 'PROFESSIONAL SUMMARY');
  doc.font('Helvetica').fontSize(9.5).text(data.summary, { align: 'justify' });
  doc.moveDown(0.4);

  drawPdfSection(doc, 'CORE COMPETENCIES');
  for (let i = 0; i < data.competencies.length; i += 2) {
    const left = `• ${data.competencies[i]}`;
    const right = data.competencies[i + 1] ? `• ${data.competencies[i + 1]}` : '';
    const startY = doc.y;
    doc.font('Helvetica').fontSize(9).text(left, 50, startY, { width: 240 });
    if (right) doc.text(right, 310, startY, { width: 240 });
    doc.y = Math.max(doc.y, startY + 12);
  }
  doc.moveDown(0.5);

  drawPdfSection(doc, 'SELECTED IMPACT');
  data.impact.forEach(item => {
    ensurePdfPage(doc, 80);
    doc.font('Helvetica').fontSize(9.5).text(`• ${item}`, 65, doc.y, { width: 485 });
    doc.moveDown(0.2);
  });

  drawPdfSection(doc, 'PROFESSIONAL EXPERIENCE');
  data.experience.forEach(job => {
    ensurePdfPage(doc, 120);
    doc.font('Helvetica-Bold').fontSize(10).text(job.title);
    doc.font('Helvetica-Oblique').fontSize(9).text(`${job.company} | ${job.dates}`);
    job.bullets.forEach(item => {
      ensurePdfPage(doc, 60);
      doc.font('Helvetica').fontSize(9.5).text(`• ${item}`, 65, doc.y, { width: 485 });
      doc.moveDown(0.1);
    });
    doc.moveDown(0.2);
  });

  if (data.extras && data.extras.length) {
    ensurePdfPage(doc, 160);
    drawPdfSection(doc, 'ADDITIONAL ROLE-RELEVANT HIGHLIGHTS');
    data.extras.forEach(item => {
      ensurePdfPage(doc, 60);
      doc.font('Helvetica').fontSize(9.5).text(`• ${item}`, 65, doc.y, { width: 485 });
      doc.moveDown(0.1);
    });
  }

  ensurePdfPage(doc, 160);
  drawPdfSection(doc, 'EDUCATION & CERTIFICATIONS');
  doc.font('Helvetica').fontSize(9.5).text(common.education);
  (data.certifications || common.certifications).forEach(cert => {
    doc.font('Helvetica').fontSize(9.5).text(`• ${cert}`, 65, doc.y, { width: 485 });
  });
  doc.moveDown(0.3);

  ensurePdfPage(doc, 180);
  drawPdfSection(doc, 'TECHNICAL SKILLS');
  data.skillLines.forEach(([key, value]) => {
    doc.font('Helvetica-Bold').fontSize(9.5).text(`${key}: `, { continued: true });
    doc.font('Helvetica').text(value);
  });

  doc.end();
}

async function generateCoverLetterDocx(filePath, portfolioLabel, portfolioUrl) {
  const children = [];
  const roleName = role.roleTitle;
  const coverLetter = coverLetterData();
  const paragraphs = coverLetter.paragraphs;

  children.push(new Paragraph({ children: [new TextRun({ text: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), size: 22, font: 'Calibri' })], spacing: { after: 160 } }));
  children.push(new Paragraph({ children: [new TextRun({ text: role.coverLetterTarget || 'Hiring Team', size: 22, font: 'Calibri' })], spacing: { after: 20 } }));
  children.push(new Paragraph({ children: [new TextRun({ text: coverLetter.subject || `Re: ${roleName}`, bold: true, size: 22, font: 'Calibri' })], spacing: { after: 180 } }));
  children.push(new Paragraph({ children: [new TextRun({ text: 'Dear Hiring Team,', size: 22, font: 'Calibri' })], spacing: { after: 140 } }));
  paragraphs.forEach(text => children.push(new Paragraph({ children: [new TextRun({ text, size: 22, font: 'Calibri' })], spacing: { after: 160 } })));
  children.push(new Paragraph({ children: [new TextRun({ text: 'Best regards,', size: 22, font: 'Calibri' })], spacing: { before: 120, after: 60 } }));
  children.push(new Paragraph({
    children: [
      new ExternalHyperlink({
        link: portfolioUrl,
        children: [new TextRun({ text: portfolioLabel, style: 'Hyperlink', size: 22, font: 'Calibri' })]
      })
    ],
    spacing: { after: 40 }
  }));
  children.push(new Paragraph({ children: [new TextRun({ text: `${common.email} | ${common.phone} | ${common.linkedin}`, size: 20, font: 'Calibri' })] }));

  const doc = new Document({
    sections: [{ properties: { page: { margin: { top: 900, bottom: 900, left: 900, right: 900 } } }, children }]
  });

  fs.writeFileSync(filePath, await Packer.toBuffer(doc));
}

function generateCoverLetterPdf(filePath, portfolioLabel, portfolioUrl) {
  const doc = new PDFDocument({ margin: 72, size: 'LETTER' });
  const coverLetter = coverLetterData();
  doc.pipe(fs.createWriteStream(filePath));
  doc.font('Helvetica').fontSize(11).text(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  doc.moveDown(0.8);
  doc.text(role.coverLetterTarget || 'Hiring Team');
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').text(coverLetter.subject || `Re: ${role.roleTitle}`);
  doc.moveDown(0.8);
  doc.font('Helvetica').text('Dear Hiring Team,');
  doc.moveDown(0.6);
  coverLetter.paragraphs.forEach(text => {
    doc.font('Helvetica').fontSize(10.5).text(text, { align: 'justify', lineGap: 2 });
    doc.moveDown(0.6);
  });
  doc.moveDown(0.4);
  doc.font('Helvetica').fontSize(11).text('Best regards,');
  doc.moveDown(0.4);
  doc.fillColor('blue').text(portfolioLabel, { link: portfolioUrl, underline: true });
  doc.fillColor('black').font('Helvetica').fontSize(10).text(`${common.email} | ${common.phone} | ${common.linkedin}`);
  doc.end();
}

async function main() {
  const portfolioLabel = `${common.name} - ${role.portfolioRoleTitle}`;
  const portfolioUrl = `https://rdammala.github.io/${slug}/`;
  const shortData = buildTwoPageData();
  const fullData = buildPortfolioData();

  await generateDocx(path.join(generatedDir, `${common.name.replace(/ /g, '_')}_${safeRole}_2Page.docx`), role.roleTitle, shortData, { portfolioLabel, portfolioUrl });
  generatePdf(path.join(generatedDir, `${common.name.replace(/ /g, '_')}_${safeRole}_2Page.pdf`), role.roleTitle, shortData, { portfolioLabel, portfolioUrl });

  await generateDocx(path.join(generatedDir, `${common.name.replace(/ /g, '_')}_${safeRole}_Portfolio_Full.docx`), `${role.portfolioRoleTitle} - Full Portfolio Profile`, fullData, { portfolioLabel, portfolioUrl });
  generatePdf(path.join(generatedDir, `${common.name.replace(/ /g, '_')}_${safeRole}_Portfolio_Full.pdf`), `${role.portfolioRoleTitle} - Full Portfolio Profile`, fullData, { portfolioLabel, portfolioUrl });

  await generateCoverLetterDocx(path.join(generatedDir, `${common.name.replace(/ /g, '_')}_CoverLetter_${safeRole}.docx`), portfolioLabel, portfolioUrl);
  generateCoverLetterPdf(path.join(generatedDir, `${common.name.replace(/ /g, '_')}_CoverLetter_${safeRole}.pdf`), portfolioLabel, portfolioUrl);

  console.log(`Generated resume package for ${slug} in ${generatedDir}`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});