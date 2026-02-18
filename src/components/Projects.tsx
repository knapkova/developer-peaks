import { useLanguage } from "@/i18n/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, i) => (
            <div
              key={i}
              className="border rounded bg-background p-6 hover:border-primary transition-colors group"
            >
              <h3 className="font-mono text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 font-sans leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-border text-muted-foreground rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href="#" className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={14} /> {t.projects.github}
                </a>
                <a href="#" className="flex items-center gap-1.5 text-xs font-mono text-primary hover:opacity-80 transition-opacity">
                  <ExternalLink size={14} /> {t.projects.liveDemo}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
