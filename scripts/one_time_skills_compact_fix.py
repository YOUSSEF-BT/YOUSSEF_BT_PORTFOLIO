from pathlib import Path

path = Path("src/pages/Skills.jsx")
text = path.read_text()

replacements = [
    (
        'className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20"',
        'className="min-h-screen overflow-hidden pt-20 md:pt-24 pb-14 md:pb-16"',
        "page top spacing",
    ),
    (
        'className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-8 md:mb-10"',
        'className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-5 md:mb-6"',
        "back button spacing",
    ),
    (
        '<section className="relative mb-10 md:mb-14">',
        '<section className="relative mb-6 md:mb-8">',
        "hero spacing",
    ),
    (
        '<div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />',
        '<div className="absolute -top-10 -left-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />',
        "left hero glow",
    ),
    (
        '<div className="absolute top-10 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />',
        '<div className="absolute top-4 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl pointer-events-none" />',
        "right hero glow",
    ),
    (
        '<div className="relative max-w-5xl">',
        '<div className="relative max-w-6xl">',
        "hero width",
    ),
    (
        'className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight animate-fade-in animation-delay-100"',
        'className="mt-4 max-w-5xl text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight animate-fade-in animation-delay-100"',
        "hero heading size",
    ),
    (
        'className="mt-5 md:mt-6 max-w-3xl text-sm md:text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200"',
        'className="mt-4 md:mt-5 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in animation-delay-200"',
        "hero paragraph spacing",
    ),
    (
        '<div className="mt-6 flex flex-wrap gap-2 animate-fade-in animation-delay-300">',
        '<div className="mt-4 flex flex-wrap gap-2 animate-fade-in animation-delay-300">',
        "core signals spacing",
    ),
    (
        '<section className="mb-10 md:mb-14">\n          <div className="glass rounded-2xl border border-border/50 p-4 md:p-5">',
        '<section className="mb-6 md:mb-8">\n          <div className="glass rounded-2xl border border-border/50 p-3.5 md:p-4">',
        "capability map spacing",
    ),
    (
        '<section className="mb-14 md:mb-20">',
        '<section className="mb-12 md:mb-16">',
        "skills grid spacing",
    ),
]

for old, new, label in replacements:
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"{label}: expected 1 match, found {count}; aborting safely")
    text = text.replace(old, new, 1)

# Sanity checks for the compact first viewport.
checks = [
    'pt-20 md:pt-24',
    'mb-5 md:mb-6',
    'relative mb-6 md:mb-8',
    'md:text-5xl lg:text-6xl',
    'mt-4 flex flex-wrap gap-2',
    'glass rounded-2xl border border-border/50 p-3.5 md:p-4',
]
for check in checks:
    if check not in text:
        raise SystemExit(f"sanity check missing: {check}")

path.write_text(text)
print("Skills page vertical spacing compacted successfully.")
