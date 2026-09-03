import { useLanguage } from "@/i18n/LanguageContext";

const techData = {
  languages: ["Python", "C#", "C", "C++", "SQL", "TypeScript", "Java"],
  frameworks: [".NET", "Entity Framework Core", "React", "Svelte", "Ionic"],
  dataAutomation: [
    "Machine Learning",
    "REST APIs",
    "Power Automate",
    "Power Apps",
    "Power BI",
    "KNIME",
    "Git",
    "GitHub Actions",
  ],
};

const TechStack = () => {
  const { t } = useLanguage();

  const categories = [
    { key: "languages" as const, label: t.techStack.languages },
    { key: "frameworks" as const, label: t.techStack.frameworks },
    { key: "dataAutomation" as const, label: t.techStack.dataAutomation },
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
