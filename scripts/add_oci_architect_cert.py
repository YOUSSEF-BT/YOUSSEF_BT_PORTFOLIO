from pathlib import Path

path = Path('src/pages/CertificationsPage.jsx')
text = path.read_text()

if 'Oracle Cloud Infrastructure 2026 Certified Architect Associate' in text:
    raise SystemExit('Certification already exists; no changes needed.')

anchor = '''  {
    id: 113,
    title: "Oracle AI Database Certified Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2026 · Expires Sep 2028",
    credentialId: "7022BC9CA3F2FE2B58B4706AE7646E5212D5D17F87BAA6D5A3E1B137AF38CE50",
    description: "Foundational certification in Oracle AI Database, covering core concepts for AI-enabled database technologies, data management, and AI-oriented database capabilities.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7022BC9CA3F2FE2B58B4706AE7646E5212D5D17F87BAA6D5A3E1B137AF38CE50",
    category: "data-science",
  },
'''

new_cert = anchor + '''  {
    id: 114,
    title: "Oracle Cloud Infrastructure 2026 Certified Architect Associate",
    issuer: "Oracle",
    date: "Sep 2026",
    credentialId: "331188949OCI26CAA",
    description: "Associate-level certification validating cloud architecture skills across Oracle Cloud Infrastructure, including core compute, networking, storage, identity, security, availability, and resilient solution design.",
    icon: <Award className="w-6 h-6" />,
    category: "cloud-architecture",
  },
'''

if anchor not in text:
    raise RuntimeError('Could not locate Oracle AI Database certification anchor')
text = text.replace(anchor, new_cert, 1)

old_overrides = '''const certificationRecencyOverrides = {
  113: Date.UTC(2026, 8, 1),
  112: Date.UTC(2026, 7, 30),
'''
new_overrides = '''const certificationRecencyOverrides = {
  114: Date.UTC(2026, 8, 7),
  113: Date.UTC(2026, 8, 1),
  112: Date.UTC(2026, 7, 30),
'''
if old_overrides not in text:
    raise RuntimeError('Could not locate recency override block')
text = text.replace(old_overrides, new_overrides, 1)

old_categories = '''  { id: "all", name: "All Certifications" },
  { id: "data-science", name: "Data Science & AI" },
  { id: "machine-learning-dl", name: "Machine Learning & Deep Learning" },
'''
new_categories = '''  { id: "all", name: "All Certifications" },
  { id: "data-science", name: "Data Science & AI" },
  { id: "cloud-architecture", name: "Cloud & Architecture" },
  { id: "machine-learning-dl", name: "Machine Learning & Deep Learning" },
'''
if old_categories not in text:
    raise RuntimeError('Could not locate category list')
text = text.replace(old_categories, new_categories, 1)

path.write_text(text)
print('Added OCI Architect Associate certification as ID 114.')
