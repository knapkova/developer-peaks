import { useLanguage } from "@/i18n/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-8">
          {t.contact.title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-1.5">
              {t.contact.nameLabel}
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.contact.namePlaceholder}
              className="w-full px-3 py-2 text-sm font-sans bg-background border rounded focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-1.5">
              {t.contact.emailLabel}
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={t.contact.emailPlaceholder}
              className="w-full px-3 py-2 text-sm font-sans bg-background border rounded focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="block font-mono text-xs text-muted-foreground mb-1.5">
              {t.contact.messageLabel}
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              className="w-full px-3 py-2 text-sm font-sans bg-background border rounded focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-mono text-sm rounded border border-primary hover:opacity-90 transition-opacity"
          >
            {t.contact.send}
          </button>
        </form>

        <div className="flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
