from pathlib import Path

path = Path('src/pages/CertificationsPage.jsx')
text = path.read_text()

old = '''  {
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

new = '''  {
    id: 114,
    title: "Oracle Cloud Infrastructure 2026 Certified Architect Associate",
    issuer: "Oracle",
    date: "Sep 2026",
    credentialId: "331188949OCI26CAA",
    description: "Associate-level certification validating cloud architecture skills across Oracle Cloud Infrastructure, including core compute, networking, storage, identity, security, availability, and resilient solution design.",
    icon: <Award className="w-6 h-6" />,
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7465F31933EE411B1EB7C5C55C45F6DAD74F72D873EE0DA369F50F835F7F78D6",
    category: "cloud-architecture",
  },
'''

if old not in text:
    raise RuntimeError('OCI Architect certification block not found or already changed')

path.write_text(text.replace(old, new, 1))
print('Added official Oracle credential link to OCI Architect certification.')
