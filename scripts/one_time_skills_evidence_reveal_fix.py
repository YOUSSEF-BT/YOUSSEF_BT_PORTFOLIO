from pathlib import Path

path = Path("src/pages/Skills.jsx")
text = path.read_text()

article_old = '''                <article
                  key={category.id}
                  className={`group relative overflow-hidden rounded-2xl border bg-background/55 backdrop-blur-md p-5 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${'''
article_new = '''                <article
                  key={category.id}
                  tabIndex={0}
                  className={`group relative overflow-hidden rounded-2xl border bg-background/55 backdrop-blur-md p-5 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${'''

if text.count(article_old) != 1:
    raise SystemExit(f"article marker: expected 1 match, found {text.count(article_old)}")
text = text.replace(article_old, article_new, 1)

start = '                    <div className="mt-5 pt-4 border-t border-border/50">'
end = '\n                  </div>\n                </article>'
start_idx = text.find(start)
if start_idx == -1:
    raise SystemExit("evidence block start not found")
end_idx = text.find(end, start_idx)
if end_idx == -1:
    raise SystemExit("evidence block end not found")

new_block = '''                    {/* Desktop: completely hidden at rest, revealed by card hover/focus. */}
                    <div className="hidden md:block overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-out group-hover:max-h-44 group-hover:opacity-100 group-focus-within:max-h-44 group-focus-within:opacity-100">
                      <div className="mt-5 pt-4 border-t border-border/50">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                            Evidence
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {category.evidence.map((item) =>
                            item.href ? (
                              <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs md:text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs md:text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                {item.meta && (
                                  <span className="hidden md:inline text-[10px] font-medium text-muted-foreground">
                                    · {item.meta}
                                  </span>
                                )}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Touch devices: a compact control opens the evidence on demand. */}
                    <div className="md:hidden mt-4 pt-3 border-t border-border/50">
                      <button
                        type="button"
                        onClick={() =>
                          setExpandedEvidence((current) =>
                            current === category.id ? null : category.id,
                          )
                        }
                        aria-expanded={isEvidenceExpanded}
                        aria-controls={`evidence-mobile-${category.id}`}
                        className="flex w-full items-center justify-between gap-3 rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                      >
                        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          Project evidence
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 text-primary transition-transform duration-300 ${
                            isEvidenceExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      <div
                        id={`evidence-mobile-${category.id}`}
                        className={`overflow-hidden transition-all duration-300 ease-out ${
                          isEvidenceExpanded
                            ? "max-h-44 opacity-100 mt-3"
                            : "max-h-0 opacity-0 mt-0"
                        }`}
                      >
                        <div className="flex flex-wrap gap-2 pt-1">
                          {category.evidence.map((item) =>
                            item.href ? (
                              <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ) : (
                              <Link
                                key={item.label}
                                to={item.to}
                                className="inline-flex items-center gap-1.5 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2 text-xs font-semibold text-primary hover:bg-primary/10 hover:border-primary/35 transition-all"
                              >
                                {item.label}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>'''

text = text[:start_idx] + new_block + text[end_idx:]

checks = [
    'tabIndex={0}',
    'Desktop: completely hidden at rest',
    'group-hover:max-h-44',
    'Project evidence',
    'evidence-mobile-${category.id}',
]
for check in checks:
    if check not in text:
        raise SystemExit(f"sanity check failed: {check}")

if 'Evidence available' in text:
    raise SystemExit('old Evidence available UI still present')

path.write_text(text)
print('Skills evidence now fully hidden at rest on desktop and tap-revealed on mobile.')
