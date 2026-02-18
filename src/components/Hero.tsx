import { useLanguage } from "@/i18n/LanguageContext";
import { useEffect, useState } from "react";

const techItems = ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "Go"];

const MountainsSvg = () => (
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
    style={{ height: "40%" }}
  >
    {/* Far mountains */}
    <path
      d="M0,280 L120,200 L200,240 L320,160 L440,220 L560,140 L680,200 L800,120 L920,180 L1040,100 L1160,170 L1280,130 L1440,190 L1440,320 L0,320 Z"
      fill="hsl(var(--hero-mountain-far))"
      opacity="0.5"
    />
    {/* Mid mountains */}
    <path
      d="M0,300 L160,230 L280,270 L400,200 L520,260 L640,180 L760,240 L880,170 L1000,230 L1120,160 L1280,220 L1440,200 L1440,320 L0,320 Z"
      fill="hsl(var(--hero-mountain-mid))"
      opacity="0.6"
    />
    {/* Near mountains */}
    <path
      d="M0,310 L200,260 L360,290 L480,240 L600,280 L720,230 L880,270 L1040,240 L1200,270 L1440,250 L1440,320 L0,320 Z"
      fill="hsl(var(--hero-mountain-near))"
      opacity="0.8"
    />
  </svg>
);

const Hero = () => {
  const { t } = useLanguage();
  const [typedIndex, setTypedIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setTypedIndex(0);
  }, []);

  useEffect(() => {
    if (typedIndex < techItems.length) {
      const timer = setTimeout(() => setTypedIndex((i) => i + 1), 300);
      return () => clearTimeout(timer);
    }
  }, [typedIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, hsl(var(--hero-sky-top)), hsl(var(--hero-sky-bottom)))`,
      }}
    >
      <MountainsSvg />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-3">
          {t.hero.name}
        </h1>
        <p className="font-mono text-lg sm:text-xl text-primary font-medium mb-4">
          {t.hero.subtitle}
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 font-sans">
          {t.hero.description}
        </p>

        {/* Typing animation */}
        <div className="font-mono text-xs sm:text-sm text-muted-foreground mb-8">
          <span className="text-primary">const</span> stack = [
          {techItems.slice(0, typedIndex).map((item, i) => (
            <span key={item}>
              <span className="text-accent-foreground">"{item}"</span>
              {i < Math.min(typedIndex, techItems.length) - 1 && ", "}
            </span>
          ))}
          {typedIndex < techItems.length && (
            <span className="inline-block w-1.5 h-4 bg-primary align-middle animate-typing-cursor" />
          )}
          ];
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2.5 bg-primary text-primary-foreground font-mono text-sm rounded border border-primary hover:opacity-90 transition-opacity"
          >
            {t.hero.viewProjects}
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2.5 bg-transparent text-foreground font-mono text-sm rounded border border-border hover:border-primary hover:text-primary transition-colors"
          >
            {t.hero.contactMe}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
