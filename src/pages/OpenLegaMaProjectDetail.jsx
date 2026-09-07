import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Users,
  ShieldAlert,
} from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import { LiveDemoSection } from "@/components/LiveDemoSection";
import { resolveAssetUrl } from "@/utils/assetUrl";

const formatLabel = (value) =>
  value
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (character) => character.toUpperCase());

const OverviewSection = ({
  overview,
  projectTitle,
  setSelectedArchitecture,
}) => {
  if (typeof overview === "string") {
    return (
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Overview</h2>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {overview}
        </p>
      </section>
    );
  }

  const architectureUrl = resolveAssetUrl(overview.architectureImage);

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Overview</h2>
        {overview.description && (
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {overview.description}
          </p>
        )}
      </div>

      {overview.architectureImage && (
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">
              System Architecture
            </h3>
            {overview.architectureDescription && (
              <p className="text-sm text-muted-foreground mt-2">
                {overview.architectureDescription}
              </p>
            )}
          </div>

          <div className="glass p-3 md:p-5 rounded-2xl border border-border/50 overflow-hidden relative">
            <img
              src={architectureUrl}
              alt={`${projectTitle} system architecture diagram`}
              className="w-full h-auto rounded-xl object-contain bg-background/40"
              loading="lazy"
              width="1400"
              height="900"
            />
            <button
              type="button"
              className="absolute bottom-6 right-6 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              onClick={() =>
                setSelectedArchitecture({
                  image: architectureUrl,
                  name: `${projectTitle} — System Architecture`,
                  description: overview.architectureDescription,
                })
              }
            >
              Expand diagram
            </button>
          </div>
        </div>
      )}

      {overview.keyContributions?.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">
            Key Contributions
          </h3>
          <div className="space-y-3">
            {overview.keyContributions.map((contribution, index) => (
              <div
                key={contribution}
                className="flex gap-4 glass p-4 rounded-xl border border-border/50"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-primary">
                    {index + 1}
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
  const [selectedArchitecture, setSelectedArchitecture] = useState(null);
  const returnToDemos =
    location.state?.fromDemos === true &&
    typeof location.state?.returnTo === "string" &&
    location.state.returnTo.startsWith("/demos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="text-muted-foreground">
            The project you are looking for does not exist.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const metadata = [
    project.company,
    project.period,
    project.location,
    project.role,
    project.version && `Version ${project.version}`,
    project.status,
    project.license && `${project.license} license`,
  ].filter(Boolean);

  const goBackToProjects = () => {
    if (returnToDemos) {
      navigate(location.state.returnTo);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }

    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <button
          type="button"
          onClick={goBackToProjects}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-6 md:mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          {returnToDemos ? "Back to Demos" : "Back to Projects"}
        </button>

        <div className="max-w-6xl space-y-6 mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {metadata.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full" />
                {item}
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl overflow-hidden glow-border bg-background/40">
            <img
              src={resolveAssetUrl(project.image)}
              alt={`${project.title} home-page preview`}
              className="w-full h-auto object-cover"
              loading="eager"
              fetchPriority="high"
              width="2048"
              height="996"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg glass hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
            {project.liveDemo?.url && project.liveDemo.url !== "#" && (
              <a
                href={project.liveDemo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>

          {project.github && project.github !== "#" && (
            <p className="text-center text-sm text-muted-foreground mb-8">
              If this project is useful to you, consider giving it a star on
              GitHub. ⭐
            </p>
          )}
        </div>

        {project.disclaimer && (
          <div className="max-w-6xl mb-10 glass p-4 md:p-5 rounded-2xl border border-highlight/30 bg-highlight/5">
            <div className="flex gap-3 items-start">
              <ShieldAlert className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Important limitation</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.disclaimer}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 mb-10 md:mb-16">
          <div className="lg:col-span-2 space-y-12">
            {project.overview && (
              <OverviewSection
                overview={project.overview}
                projectTitle={project.title}
                setSelectedArchitecture={setSelectedArchitecture}
              />
            )}

            {project.problemStatement && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Problem Statement
                </h2>
                <div className="glass p-4 md:p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {project.problemStatement.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.problemStatement.description}
                  </p>
                  {project.problemStatement.challenges?.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm uppercase tracking-wider">
                        Challenges
                      </p>
                      <ul className="space-y-2">
                        {project.problemStatement.challenges.map((challenge) => (
                          <li
                            key={challenge}
                            className="flex gap-3 text-muted-foreground"
                          >
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

            {project.solution && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">Solution</h2>
                <div className="glass p-4 md:p-6 rounded-2xl border border-border/50 bg-primary/5">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </section>
            )}

            {project.keyAchievements?.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Key Achievements
                </h2>
                <div className="space-y-3">
                  {project.keyAchievements.map((achievement) => (
                    <div
                      key={achievement}
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

            {project.modules?.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Technical Modules
                </h2>
                <div className="space-y-4">
                  {project.modules.map((module) => (
                    <div
                      key={module.id ?? module.name}
                      className="glass p-4 md:p-6 rounded-2xl border border-border/50"
                    >
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
                      {module.metrics && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                          {Object.entries(module.metrics).map(([key, value]) => (
                            <div key={key} className="space-y-1">
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                {formatLabel(key)}
                              </p>
                              <p className="text-base md:text-lg font-semibold text-primary">
                                {value}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.results && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Results & Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div
                      key={key}
                      className="glass p-4 rounded-lg border border-border/50 space-y-2"
                    >
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {formatLabel(key)}
                      </p>
                      <p className="text-lg md:text-2xl font-bold text-primary">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                {project.resultsNote && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {project.resultsNote}
                  </p>
                )}
              </section>
            )}

            {project.challenges && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {Object.entries(project.challenges).map(([key, challenge]) => (
                    <div
                      key={key}
                      className="glass p-4 md:p-6 rounded-2xl border border-border/50"
                    >
                      <div className="flex gap-3 items-start">
                        <div className="text-xl font-bold text-primary">⚠️</div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2">
                            {challenge.problem ??
                              challenge.description ??
                              formatLabel(key)}
                          </h3>
                          {challenge.solution && (
                            <p className="text-sm text-muted-foreground">
                              <strong>Solution:</strong> {challenge.solution}
                            </p>
                          )}
                          {challenge.status && (
                            <p className="text-sm text-primary mt-2">
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

            {project.dataset && (
              <section className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.dataset.sectionTitle ?? "Dataset"}
                </h2>
                <div className="glass p-4 md:p-6 rounded-2xl border border-border/50">
                  <div className="grid sm:grid-cols-2 gap-5 mb-4">
                    {[
                      ["Name", project.dataset.name],
                      ["Source", project.dataset.source],
                      ["Volume", project.dataset.volume],
                      ["Structure", project.dataset.annotation],
                    ]
                      .filter(([, value]) => value)
                      .map(([label, value]) => (
                        <div key={label}>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            {label}
                          </p>
                          <p className="font-semibold text-sm md:text-base">
                            {value}
                          </p>
                        </div>
                      ))}
                  </div>

                  {project.dataset.classes?.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm">Classes</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.dataset.classes.map((item) => (
                          <div
                            key={item.name}
                            className="flex justify-between gap-3 text-sm text-muted-foreground"
                          >
                            <span>
                              {item.name} {item.label && `(${item.label})`}
                            </span>
                            <span className="text-primary font-semibold">
                              {item.distribution}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-6">
            {project.techStack?.length > 0 && (
              <div className="glass p-4 md:p-6 rounded-2xl space-y-4">
                <h3 className="text-xl font-bold">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/30"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {(project.primaryDomain || project.projectFocus?.length > 0) && (
              <div className="glass p-4 md:p-6 rounded-2xl space-y-5 border border-border/50">
                {project.primaryDomain && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Primary Domain
                    </h3>
                    <span className="inline-flex px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/30">
                      {project.primaryDomain}
                    </span>
                  </div>
                )}

                {project.projectFocus?.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-border/50">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Project Focus
                    </h3>
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

            {(project.team?.length > 0 || project.supervisor) && (
              <div className="glass p-4 md:p-6 rounded-2xl space-y-4 border border-border/50">
                <h3 className="font-bold flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Project Team
                </h3>
                {project.team?.length > 0 && (
                  <ul className="space-y-1">
                    {project.team.map((member) => (
                      <li key={member} className="text-sm text-muted-foreground">
                        • {member}
                      </li>
                    ))}
                  </ul>
                )}
                {project.supervisor && (
                  <div className="space-y-1 pt-4 border-t border-border/50">
                    <p className="text-sm font-semibold text-primary">
                      Supervisor
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.supervisor}
                    </p>
                  </div>
                )}
              </div>
            )}
          </aside>
        </div>

        <LiveDemoSection
          liveDemo={project.liveDemo}
          projectTitle={project.title}
        />

        <div className="border-t border-border/50 pt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Explore More Projects
          </h2>
          <button
            type="button"
            onClick={() => navigate(returnToDemos ? location.state.returnTo : "/demos")}
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

      {selectedArchitecture && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedArchitecture(null)}
        >
          <div
            className="relative max-w-7xl max-h-[92vh] flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              onClick={() => setSelectedArchitecture(null)}
              aria-label="Close architecture diagram"
            >
              &times;
            </button>
            <img
              src={selectedArchitecture.image}
              alt={selectedArchitecture.name}
              className="max-w-full max-h-[82vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center text-white max-w-4xl">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {selectedArchitecture.name}
              </h3>
              {selectedArchitecture.description && (
                <p className="text-sm md:text-base text-gray-300">
                  {selectedArchitecture.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
