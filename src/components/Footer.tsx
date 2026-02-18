import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t py-8 bg-card">
      <div className="container mx-auto px-4 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          {t.footer.built} · © {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
