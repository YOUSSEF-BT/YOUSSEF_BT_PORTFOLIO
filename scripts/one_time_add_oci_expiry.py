from pathlib import Path

path = Path("src/pages/CertificationsPage.jsx")
text = path.read_text()
old = '''    title: "Oracle Cloud Infrastructure 2026 Certified Architect Associate",\n    issuer: "Oracle",\n    date: "Sep 2026",'''
new = '''    title: "Oracle Cloud Infrastructure 2026 Certified Architect Associate",\n    issuer: "Oracle",\n    date: "Sep 2026 · Expires Sep 2028",'''

if text.count(old) != 1:
    raise SystemExit(f"Expected exactly one OCI Architect certification block, found {text.count(old)}; aborting safely")

path.write_text(text.replace(old, new, 1))
print("OCI Architect Associate expiry date added successfully.")
