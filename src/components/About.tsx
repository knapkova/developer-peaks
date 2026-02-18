import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-8">
          {t.about.title}
        </h2>
        <p className="text-muted-foreground font-sans leading-relaxed mb-8">
          {t.about.bio}
        </p>
        <div className="bg-terminal-bg rounded p-4 border border-border">
          <div className="flex gap-1.5 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary/50" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-terminal-fg leading-relaxed">
            {t.about.terminalQuote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
