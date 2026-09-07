import { useEffect, useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Users } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { LiveDemoSection } from "@/components/LiveDemoSection";

// Overview section: handles both old string format and new object format
const OverviewSection = ({ overview, projectTitle, setSelectedArchitecture }) => {
  // Legacy: overview is a plain string
  if (typeof overview === "string") {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </section>
    );
  }

  // New format: overview is { architectureImage, keyContributions }
  return (
    <section className="space-y-8">
      <h2 className="text-2xl md:text-3xl font-bold">Overview</h2>

      {/* System Architecture Image */}
      {overview.architectureImage && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">
            System Architecture
          </h3>
          <div className="glass p-4 md:p-6 rounded-2xl border border-border/50 overflow-hidden relative">
            <img
              src={`${import.meta.env.BASE_URL}${overview.architectureImage}`}
              alt="System Architecture"
              className="w-full h-auto rounded-xl object-contain"
              loading="lazy"
              width="1200"
              height="800"
            />
            <button
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              onClick={() => setSelectedArchitecture({
                image: `${import.meta.env.BASE_URL}${overview.architectureImage}`,
                name: projectTitle
              })}
            >
              Agrandir
            </button>
          </div>
        </div>
      )}

      {/* Key Contributions */}
      {overview.keyContributions && overview.keyContributions.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">
            Key Contributions
          </h3>
          <div className="space-y-3">
            {overview.keyContributions.map((contribution, idx) => (
              <div
                key={idx}
                className="flex gap-4 glass p-4 rounded-xl border border-border/50"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {contribution}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedArchitecture, setSelectedArchitecture] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">
            The project you're looking for doesn't exist.
          </p>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                const section = document.getElementById("projects");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            } else {
              const section = document.getElementById("projects");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-6 md:mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </button>

        {/* Header */}
        <div className="max-w-6xl space-y-6 mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {project.company && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.company}
              </div>
            )}
            {project.period && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.period}
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.location}
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {project.role}
              </div>
            )}
          </div>

          {/* Project Image (full image, no empty frame) */}
          <div className="glass rounded-2xl overflow-hidden glow-border">
            <img
              src={`${import.meta.env.BASE_URL}${project.image}`}
              alt={project.title}
              className="w-full h-auto"
              loading="eager"
              fetchPriority="high"
              width="1200"
              height="675"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-4 md:px-6 py-2.5 md:py-3 rounded-lg glass hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.liveDemo && project.liveDemo.url && (
              <a
                href={project.liveDemo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
          <p className="text-center text-muted-foreground mb-8">
            Si ce projet vous est utile, n'hésitez pas à lui donner une étoile sur GitHub ! ⭐
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10 md:mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            {project.overview && (
              <OverviewSection overview={project.overview} projectTitle={project.title} setSelectedArchitecture={setSelectedArchitecture} />
            )}

            {/* Problem Statement */}
            {project.problemStatement && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Problem Statement</h2>
                <div className="glass p-4 md:p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {project.problemStatement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.problemStatement.description}
                  </p>
                  {project.problemStatement.challenges && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm uppercase tracking-wider">Challenges:</p>
                      <ul className="space-y-2">
                        {project.problemStatement.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex gap-3 text-muted-foreground">
                            <span className="text-primary font-bold">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Solution</h2>
                <div className="glass p-4 md:p-6 rounded-2xl border border-border/50 bg-primary/5">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </section>
            )}

            {/* Key Achievements */}
            {project.keyAchievements && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Achievements</h2>
                <div className="space-y-3">
                  {project.keyAchievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 glass p-4 rounded-lg border border-border/50"
                    >
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Modules */}
            {project.modules && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Technical Modules</h2>
                <div className="space-y-4">
                  {project.modules.map((module, idx) => (
                    <div key={idx} className="glass p-4 md:p-6 rounded-2xl border border-border/50">
                      <h3 className="text-xl font-semibold mb-2">
                        {module.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {module.description}
                      </p>
                      {module.details && (
                        <p className="text-sm text-muted-foreground mb-4 italic">
                          {module.details}
                        </p>
                      )}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {Object.entries(module.metrics).map(([key, value]) => (
                          <div key={key} className="space-y-1">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">
                              {key.replace(/([A-Z])/g, " $1")}
                            </p>
                            <p className="text-lg font-semibold text-primary">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Results/Metrics */}
            {project.results && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Results & Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div
                      key={key}
                      className="glass p-4 rounded-lg border border-border/50 space-y-2"
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {key.replace(/([A-Z])/g, " $1")}
                      </p>
                      <p className="text-2xl font-bold text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {project.challenges && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {Object.entries(project.challenges).map(([key, challenge]) => (
                    <div
                      key={key}
                      className="glass p-4 md:p-6 rounded-2xl border border-border/50"
                    >
                      <div className="flex gap-2 items-start mb-3">
                        <div className="text-xl font-bold text-primary">⚠️</div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">
                            {challenge.problem}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            <strong>Solution:</strong> {challenge.solution}
                          </p>
                          {challenge.status && (
                            <p className="text-sm text-primary mt-1">
                              <strong>Status:</strong> {challenge.status}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Dataset */}
            {project.dataset && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Dataset</h2>
                <div className="glass p-4 md:p-6 rounded-2xl border border-border/50">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Name</p>
                      <p className="font-semibold">{project.dataset.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Source</p>
                      <p className="font-semibold">{project.dataset.source}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Volume</p>
                      <p className="font-semibold">{project.dataset.volume}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Annotation</p>
                      <p className="font-semibold text-sm">{project.dataset.annotation}</p>
                    </div>
                  </div>
                  {project.dataset.classes && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Classes:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.dataset.classes.map((cls, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between text-sm text-muted-foreground"
                          >
                            <span>{cls.name} ({cls.label})</span>
                            <span className="text-primary font-semibold">{cls.distribution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="glass p-4 md:p-6 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {(project.primaryDomain || project.projectFocus?.length > 0) && (
              <div className="glass p-4 md:p-6 rounded-2xl space-y-5 border border-border/50">
                {project.primaryDomain && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Primary Domain
                    </h4>
                    <span className="inline-flex px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/30">
                      {project.primaryDomain}
                    </span>
                  </div>
                )}

                {project.projectFocus?.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Project Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.projectFocus.map((focus) => (
                        <span
                          key={focus}
                          className="px-2.5 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-border/50"
                        >
                          {focus}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {(project.team || project.supervisor) && (
              <div className="glass p-4 md:p-6 rounded-2xl space-y-4 border border-border/50">
                <h4 className="font-bold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Team
                </h4>
                {project.team && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-primary">Members:</p>
                    <ul className="space-y-1">
                      {project.team.map((member, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground">
                          • {member}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.supervisor && (
                  <div className="space-y-2 pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-primary">Supervisor:</p>
                    <p className="text-sm text-muted-foreground">{project.supervisor}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Demos Section */}
        <LiveDemoSection liveDemo={project.liveDemo} projectTitle={project.title} />

        {/* Related Projects */}
        <div className="border-t border-border/50 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Explore More Projects</h2>
          <div className="grid grid-cols-1 gap-6">
            <button
              type="button"
              onClick={() => navigate("/demos")}
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all text-left w-full"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold group-hover:text-primary transition-colors">
                  View All Projects
                </span>
                <ExternalLink className="w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {selectedArchitecture && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedArchitecture(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedArchitecture(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedArchitecture.image}
              alt={selectedArchitecture.name}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white max-w-3xl">
              <h3 className="text-2xl font-bold mb-2">{selectedArchitecture.name}</h3>
              {selectedArchitecture.description && (
                <p className="text-gray-300">{selectedArchitecture.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};