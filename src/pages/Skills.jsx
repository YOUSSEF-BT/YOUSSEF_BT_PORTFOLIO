import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  Github,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    shortName: "ML",
    eyebrow: "Predictive AI",
    icon: Brain,
    description:
      "From structured data and feature engineering to evaluated, explainable predictive models.",
    skills: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "Model Evaluation",
      "Cross-Validation",
      "Classification",
      "Imbalanced Learning",
      "Explainable AI",
    ],
    evidence: [
      {
        label: "Bank Fraud Detection",
        to: "/projects/ai-powered-bank-fraud-detection-machine-learning-explainable-ai",
      },
      {
        label: "Customer Churn Prediction",
        to: "/projects/1-customer-analytics-churn-prediction-2025-11",
      },
    ],
  },
  {
    id: "computer-vision",
    name: "Computer Vision & Deep Learning",
    shortName: "Computer Vision",
    eyebrow: "Visual Intelligence",
    icon: Eye,
    featured: true,
    description:
      "Real-time detection and tracking pipelines built for video understanding, safety, and traffic analytics.",
    skills: [
      "YOLOv11",
      "YOLOv8",
      "OpenCV",
      "BoT-SORT",
      "Object Detection",
      "Multi-Object Tracking",
      "Real-Time Video",
      "Deep Learning",
      "Roboflow",
    ],
    evidence: [
      {
        label: "Real-Time Road Accident Detection",
        to: "/projects/real-time-road-accident-detection",
      },
      {
        label: "Traffic MVP",
        to: "/projects/traffic-mvp-image-processing",
      },
    ],
  },
  {
    id: "genai-rag",
    name: "Generative AI & RAG",
    shortName: "GenAI & RAG",
    eyebrow: "Grounded LLM Systems",
    icon: Cpu,
    featured: true,
    description:
      "Grounded LLM applications that retrieve evidence, control context, validate citations, and abstain when evidence is insufficient.",
    skills: [
      "RAG",
      "LLM Applications",
      "Embeddings",
      "Semantic Search",
      "Document Processing",
      "Prompt Engineering",
      "Context Engineering",
      "NLP",
      "Evaluation",
    ],
    evidence: [
      {
        label: "OpenLegaMa — Moroccan Legal AI",
        to: "/projects/openlegama-moroccan-legal-ai",
      },
      {
        label: "AI Document Summarizer",
        to: "/projects/5-ai-summarizer-2026-03",
      },
    ],
  },
  {
    id: "agentic-ai",
    name: "Agentic AI & LLM Orchestration",
    shortName: "Agentic AI",
    eyebrow: "Tool-Connected AI",
    icon: Bot,
    description:
      "Design patterns for AI systems that reason across state, tools, workflows, approvals, and reliability boundaries.",
    skills: [
      "Agent Workflows",
      "Tool Calling",
      "Human-in-the-Loop",
      "State Management",
      "Model Context Protocol",
      "Guardrails",
      "Evaluation",
      "API Integration",
    ],
    evidence: [
      {
        label: "Agentic AI & LLM Certifications",
        to: "/certifications",
        meta: "Training evidence",
      },
    ],
  },
  {
    id: "mlops-data",
    name: "MLOps & Data Engineering",
    shortName: "MLOps & Data",
    eyebrow: "Ship & Operate",
    icon: Server,
    description:
      "Reproducible ML workflows with orchestration, experiment tracking, containers, monitoring, and data-quality controls.",
    skills: [
      "Docker",
      "Apache Airflow",
      "MLflow",
      "PostgreSQL",
      "MinIO",
      "Model Monitoring",
      "Experiment Tracking",
      "Data Quality",
      "CI/CD",
    ],
    evidence: [
      {
        label: "Customer MLOps Pipeline",
        to: "/projects/customer-churn-mlops-platform",
      },
      {
        label: "Data Quality Monitoring",
        to: "/projects/2-data-quality-monitoring-2025-12",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & AI Engineering",
    shortName: "Backend",
    eyebrow: "Production Foundations",
    icon: Code2,
    description:
      "The engineering layer around AI systems: Python services, APIs, databases, version control, and deployment-ready interfaces.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "SQL",
      "Git",
      "GitHub",
      "Linux",
      "Streamlit",
      "TypeScript",
    ],
    evidence: [
      {
        label: "Explore implementation repositories",
        href: "https://github.com/YOUSSEF-BT",
        meta: "GitHub evidence",
      },
    ],
  },
];

const engineeringWorkflow = [
  {
    step: "01",
    title: "Build",
    description: "Translate a real problem into a measurable AI system.",
  },
  {
    step: "02",
    title: "Evaluate",
    description: "Measure quality, failure modes, retrieval, or model behavior.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "Package the system behind usable applications and workflows.",
  },
  {
    step: "04",
    title: "Monitor",
    description: "Keep performance, evidence, and operational limits visible.",
  },
];

const coreSignals = [
  "AI/ML Engineering",
  "Computer Vision",
  "RAG & LLM Systems",
  "MLOps & Data Engineering",
];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const filteredSkills =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((category) => category.id === selectedCategory);

  return (
    <div className="min-h-screen overflow-hidden pt-20 md:pt-24 pb-14 md:pb-16">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-5 md:mb-6"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          Back Home
        </Link>

        <section className="relative mb-6 md:mb-8">
          <div className="absolute -top-10 -left-10 w-44 h-44 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-4 right-0 w-36 h-36 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-6xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              AI Engineering Skills
            </div>

            <h1 className="mt-4 max-w-5xl text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.02] tracking-tight animate-fade-in animation-delay-100">
              From models to
              <span className="font-serif italic font-normal text-primary">
                {" "}intelligent systems.
              </span>
            </h1>

            <p className="mt-4 md:mt-5 max-w-3xl text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              A focused view of the technologies and engineering practices I use
              to design, evaluate, deploy, and improve AI products — backed by
              project evidence instead of a generic list of tools.
            </p>

            <div className="mt-4 flex flex-wrap gap-2 animate-fade-in animation-delay-300">
              {coreSignals.map((signal) => (
                <span
                  key={signal}
                  className="px-3 py-1.5 rounded-full border border-border/70 bg-background/60 backdrop-blur-sm text-xs md:text-sm font-medium text-foreground/80"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-6 md:mb-8">
          <div className="glass rounded-2xl border border-border/50 p-3.5 md:p-4">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  Capability map
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Filter the stack by the part of the AI lifecycle you want to inspect.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  aria-pressed={selectedCategory === "all"}
                  className={`px-3.5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "border border-border/70 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  All Expertise
                </button>

                {skillCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategory(category.id)}
                    aria-pressed={selectedCategory === category.id}
                    className={`px-3.5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "border border-border/70 bg-background/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {category.shortName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {filteredSkills.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.id}
                  className={`group relative overflow-hidden rounded-2xl border bg-background/55 backdrop-blur-md p-5 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    category.featured
                      ? "border-primary/35 shadow-[0_0_0_1px_rgba(45,212,191,0.04)]"
                      : "border-border/60 hover:border-primary/35"
                  }`}
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>

                        <div>
                          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.16em] font-semibold text-primary">
                            {category.eyebrow}
                          </p>
                          <h2 className="mt-1 text-xl md:text-2xl font-bold leading-tight">
                            {category.name}
                          </h2>
                        </div>
                      </div>

                      <span className="hidden sm:inline-flex text-xs font-mono text-muted-foreground/60">
                        0{skillCategories.findIndex((item) => item.id === category.id) + 1}
                      </span>
                    </div>

                    <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface/60 px-2.5 py-1.5 text-[11px] md:text-xs font-medium text-foreground/80 transition-colors hover:border-primary/35 hover:text-primary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 pt-5 border-t border-border/50">
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
                </article>
              );
            })}
          </div>
        </section>

        <section className="mb-14 md:mb-20">
          <div className="mb-6 md:mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Engineering workflow
            </p>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold">
              Skills are useful when they connect into a
              <span className="font-serif italic font-normal text-foreground">
                {" "}working system.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
            {engineeringWorkflow.map((item, index) => (
              <div
                key={item.step}
                className="relative glass rounded-2xl border border-border/50 p-5 md:p-6 overflow-hidden group hover:border-primary/35 transition-all"
              >
                {index < engineeringWorkflow.length - 1 && (
                  <ArrowRight className="hidden xl:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/40 z-10" />
                )}
                <span className="text-xs font-mono text-primary">{item.step}</span>
                <h3 className="mt-3 text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-4 md:gap-6">
          <div className="glass rounded-2xl border border-border/50 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] font-semibold text-primary">
                  Engineering foundations
                </p>
                <h2 className="text-xl md:text-2xl font-bold">Built around fundamentals.</h2>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["Python", "SQL", "Git & GitHub", "Linux"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-border/60 bg-background/45 px-3 py-3 text-center text-xs md:text-sm font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              I keep the fundamentals visible because strong AI systems still depend
              on reliable data handling, readable code, reproducible workflows, and
              interfaces that other people can actually use.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-primary/25 bg-primary/5 p-6 md:p-8">
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-primary">
                See the evidence
              </p>
              <h2 className="mt-2 text-xl md:text-2xl font-bold">
                Explore the systems behind the stack.
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The project pages show architectures, implementation choices,
                measured results, limitations, demos, and repositories.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/demos"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
                >
                  Explore Demos
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/YOUSSEF-BT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/25 bg-background/55 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
