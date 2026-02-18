import { useLanguage } from "@/i18n/LanguageContext";
import { ExternalLink } from "lucide-react";

const Websites = () => {
  const { t } = useLanguage();

  return (
    <section id="websites" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-12">
          {t.websites.title}
        </h2>
        <div className="space-y-4">
          {t.websites.items.map((site, i) => (
            <div
              key={i}
              className="border rounded p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-primary transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-mono text-base font-semibold text-foreground mb-1">
                  {site.name}
                </h3>
                <p className="text-sm text-muted-foreground font-sans mb-2">
                  {site.role}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {site.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] font-mono border border-border text-muted-foreground rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#"
                className="flex items-center gap-1.5 font-mono text-xs text-primary hover:opacity-80 transition-opacity shrink-0"
              >
                <ExternalLink size={14} /> {t.websites.visitSite}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Websites;
