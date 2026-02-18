import { useLanguage } from "@/i18n/LanguageContext";

const techData = {
  frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML/CSS"],
  backend: ["Node.js", "Express", "PostgreSQL", "Redis", "Go", "Python"],
  tools: ["Docker", "Git", "GitHub Actions", "Vercel", "Figma", "Linux"],
};

const TechStack = () => {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend" as const, label: t.techStack.frontend },
    { key: "backend" as const, label: t.techStack.backend },
    { key: "tools" as const, label: t.techStack.tools },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {t.techStack.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map(({ key, label }) => (
            <div key={key}>
              <h3 className="font-mono text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techData[key].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono border border-tag-border bg-tag-bg text-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
