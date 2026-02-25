import { useLanguage } from "@/i18n/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useRef, useState } from 'react';


const Contact = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xnjblrvy");
  const captchaRef = useRef<HCaptcha>(null);
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the captcha");
      return;
    }
    const formData = new FormData(e.currentTarget);
    formData.append("h-captcha-response", captchaToken);
    await handleSubmit(formData as any);
    setCaptchaToken("");
    if (captchaRef.current) {
      captchaRef.current.resetCaptcha();
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-foreground mb-8">
          {t.contact.title}
        </h2>
        {state.succeeded && (
          <p className="mb-4 text-sm font-sans text-foreground">
            Thank you! Your message has been sent.
          </p>
        )}
        <form onSubmit={handleFormSubmit} className="space-y-4 mb-8">
          <div>
            <label htmlFor="name" className="block font-mono text-xs text-muted-foreground mb-1.5">
              {t.contact.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t.contact.namePlaceholder}
              required
              className="w-full px-3 py-2 text-sm font-sans bg-background border rounded focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
              className="mt-1 text-xs text-destructive"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-mono text-xs text-muted-foreground mb-1.5">
              {t.contact.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.contact.emailPlaceholder}
              required
              className="w-full px-3 py-2 text-sm font-sans bg-background border rounded focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="mt-1 text-xs text-destructive"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-mono text-xs text-muted-foreground mb-1.5">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              required
              className="w-full px-3 py-2 text-sm font-sans bg-background border rounded focus:outline-none focus:ring-1 focus:ring-ring text-foreground placeholder:text-muted-foreground resize-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="mt-1 text-xs text-destructive"
            />
          </div>
          <div className="flex justify-center py-2">
            <HCaptcha
              ref={captchaRef}
              sitekey="b87a96d2-1630-40ce-8870-1846cee85200"
              onVerify={handleCaptchaVerify}
              theme="dark"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting || !captchaToken}
            className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-mono text-sm rounded border border-primary hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : t.contact.send}
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
