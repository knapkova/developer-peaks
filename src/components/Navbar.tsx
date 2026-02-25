import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "cz", label: "CZ", flag: "🇨🇿" },
  { code: "dk", label: "DK", flag: "🇩🇰" },
];

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button
          onClick={() => scrollTo("hero")}
          className="font-mono text-sm font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          ~/dev
        </button>

        <div className="hidden md:flex items-center gap-6">
          {[
            { id: "about", label: t.nav.about },
            { id: "tech-stack", label: t.nav.techStack },
           // { id: "projects", label: t.nav.projects },
            { id: "websites", label: t.nav.websites },
            { id: "contact", label: t.nav.contact },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 border rounded px-1 py-0.5">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`font-mono text-xs px-2 py-1 rounded transition-colors ${
                lang === l.code
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={`Switch to ${l.label}`}
            >
              {l.flag} {l.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
