from pathlib import Path


def replace_once(text: str, old: str, new: str, label: str) -> str:
    if old not in text:
        raise SystemExit(f"{label} not found; aborting safely")
    return text.replace(old, new, 1)


demos_path = Path("src/pages/Demos.jsx")
rich_path = Path("src/pages/OpenLegaMaProjectDetail.jsx")
legacy_path = Path("src/pages/LegacyProjectDetail.jsx")

demos = demos_path.read_text()
rich = rich_path.read_text()
legacy = legacy_path.read_text()

# --- Demos: make selected category URL-addressable and preserve it in project navigation state.
demos = replace_once(
    demos,
    'import { useState, useEffect } from "react";\nimport { Link } from "react-router-dom";',
    'import { useEffect } from "react";\nimport { Link, useSearchParams } from "react-router-dom";',
    "Demos imports",
)

demos = replace_once(
    demos,
    '''const DEMO_CATEGORIES = [\n  "Computer Vision",\n  "GenAI & RAG",\n  "Machine Learning",\n  "MLOps & Data Engineering",\n];''',
    '''const DEMO_CATEGORIES = [\n  "Computer Vision",\n  "GenAI & RAG",\n  "Machine Learning",\n  "MLOps & Data Engineering",\n];\n\nconst DEMO_CATEGORY_PARAMS = {\n  "Computer Vision": "computer-vision",\n  "GenAI & RAG": "genai-rag",\n  "Machine Learning": "machine-learning",\n  "MLOps & Data Engineering": "mlops-data-engineering",\n};\n\nconst DEMO_PARAM_CATEGORIES = Object.fromEntries(\n  Object.entries(DEMO_CATEGORY_PARAMS).map(([category, param]) => [param, category]),\n);''',
    "Demos category map",
)

demos = replace_once(
    demos,
    '''export const Demos = () => {\n  const [selectedCategory, setSelectedCategory] = useState("All");\n\n  useEffect(() => {''',
    '''export const Demos = () => {\n  const [searchParams, setSearchParams] = useSearchParams();\n  const selectedCategory =\n    DEMO_PARAM_CATEGORIES[searchParams.get("category")] ?? "All";\n\n  const selectCategory = (category) => {\n    const nextParams = new URLSearchParams(searchParams);\n\n    if (category === "All") {\n      nextParams.delete("category");\n    } else {\n      nextParams.set("category", DEMO_CATEGORY_PARAMS[category]);\n    }\n\n    setSearchParams(nextParams, { replace: true });\n  };\n\n  const demosReturnPath =\n    selectedCategory === "All"\n      ? "/demos"\n      : `/demos?category=${DEMO_CATEGORY_PARAMS[selectedCategory]}`;\n\n  useEffect(() => {''',
    "Demos selected category state",
)

demos = replace_once(
    demos,
    'onClick={() => setSelectedCategory(category)}',
    'onClick={() => selectCategory(category)}',
    "Demos category click",
)

demos = replace_once(
    demos,
    '''                    <Link\n                      to={`/projects/${demo.projectSlug}`}\n                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"\n                    >''',
    '''                    <Link\n                      to={`/projects/${demo.projectSlug}`}\n                      state={{ fromDemos: true, returnTo: demosReturnPath }}\n                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground transition-all"\n                    >''',
    "Demos project detail link",
)

# --- Rich project detail: return to the originating Demos category when available.
rich = replace_once(
    rich,
    '''  const navigate = useNavigate();\n  const location = useLocation();\n  const [selectedArchitecture, setSelectedArchitecture] = useState(null);''',
    '''  const navigate = useNavigate();\n  const location = useLocation();\n  const [selectedArchitecture, setSelectedArchitecture] = useState(null);\n  const returnToDemos =\n    location.state?.fromDemos === true &&\n    typeof location.state?.returnTo === "string" &&\n    location.state.returnTo.startsWith("/demos");''',
    "Rich return context",
)

rich = replace_once(
    rich,
    '''  const goBackToProjects = () => {\n    if (location.pathname !== "/") {''',
    '''  const goBackToProjects = () => {\n    if (returnToDemos) {\n      navigate(location.state.returnTo);\n      return;\n    }\n\n    if (location.pathname !== "/") {''',
    "Rich back handler",
)

rich = replace_once(
    rich,
    '''          <ArrowLeft className="w-5 h-5" />\n          Back to Projects\n        </button>''',
    '''          <ArrowLeft className="w-5 h-5" />\n          {returnToDemos ? "Back to Demos" : "Back to Projects"}\n        </button>''',
    "Rich back label",
)

rich = replace_once(
    rich,
    'onClick={() => navigate("/demos")}',
    'onClick={() => navigate(returnToDemos ? location.state.returnTo : "/demos")}',
    "Rich bottom demo navigation",
)

# --- Legacy project detail: same behavior for every other project.
legacy = replace_once(
    legacy,
    '''  const navigate = useNavigate();\n  const location = useLocation();\n\n  useEffect(() => {''',
    '''  const navigate = useNavigate();\n  const location = useLocation();\n  const returnToDemos =\n    location.state?.fromDemos === true &&\n    typeof location.state?.returnTo === "string" &&\n    location.state.returnTo.startsWith("/demos");\n\n  useEffect(() => {''',
    "Legacy return context",
)

legacy = replace_once(
    legacy,
    '''          onClick={() => {\n            if (location.pathname !== "/") {''',
    '''          onClick={() => {\n            if (returnToDemos) {\n              navigate(location.state.returnTo);\n              return;\n            }\n\n            if (location.pathname !== "/") {''',
    "Legacy back handler",
)

legacy = replace_once(
    legacy,
    '''          <ArrowLeft className="w-5 h-5" />\n          Back to Projects\n        </button>''',
    '''          <ArrowLeft className="w-5 h-5" />\n          {returnToDemos ? "Back to Demos" : "Back to Projects"}\n        </button>''',
    "Legacy back label",
)

legacy = replace_once(
    legacy,
    'onClick={() => navigate("/demos")}',
    'onClick={() => navigate(returnToDemos ? location.state.returnTo : "/demos")}',
    "Legacy bottom demo navigation",
)

# Sanity checks: no old category state setter remains, and both detail variants contain the return context.
if "setSelectedCategory(" in demos:
    raise SystemExit("Old category state setter still present; aborting safely")
if demos.count("state={{ fromDemos: true, returnTo: demosReturnPath }}") != 1:
    raise SystemExit("Demos return state was not added exactly once; aborting safely")
if rich.count("const returnToDemos =") != 1 or legacy.count("const returnToDemos =") != 1:
    raise SystemExit("Return-to-demos context count is invalid; aborting safely")

# Write only after all guarded transformations and checks succeed.
demos_path.write_text(demos)
rich_path.write_text(rich)
legacy_path.write_text(legacy)
print("Guarded demos return-context UX patch applied successfully.")
