export type Language = "en" | "cz" | "dk";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      techStack: "Tech Stack",
      websites: "Websites",
      contact: "Contact",
    },
    hero: {
      name: "Tereza Knápková",
      subtitle: "Full-Stack Developer",
      description: "Building clean, performant web applications with modern tools.",
      viewProjects: "View Projects",
      viewWebsites: "View Websites",
      contactMe: "Contact Me",
      techLine: "React · Node.js · TypeScript · PostgreSQL",
    },
    techStack: {
      title: "// tech_stack",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
    projects: {
      title: "// projects",
      github: "GitHub",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Task Manager API",
          description: "RESTful API with authentication, rate limiting, and real-time WebSocket notifications.",
          tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
        },
        {
          title: "E-Commerce Dashboard",
          description: "Analytics dashboard with interactive charts, inventory management, and order tracking.",
          tech: ["React", "TypeScript", "Tailwind", "Recharts"],
        },
        {
          title: "DevOps Pipeline Tool",
          description: "CI/CD pipeline visualization tool with GitHub Actions integration and deployment logs.",
          tech: ["Go", "Docker", "GitHub API", "SQLite"],
        },
      ],
    },
    websites: {
      title: "// websites",
      visitSite: "Visit Site",
      note: "Note: These websites are currently under development and not live yet — this is a draft.",
      items: [
        {
          name: "Den Gul Café",
          role: "Café website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "Supabase", "React"],
          link: "https://knapkova.github.io/dengulecafe/"
        },
        {
          name: "Caffé Vespa",
          role: "Café website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/caff-vespa-digital-clipboard/"
        },
        {
          name: "Kavárna Maty",
          role: "Café website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/cafe-bar-maty/"
        },
        {
          name: "Onkel A",
          role: "Café website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/onkel-a-hygge-hub"
        },
        {
          name: "The fresh barber Aarhus",
          role: "barbershop website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/the-fresh-barber-aarhus/"
        },
        {
          name: "Momo café Silkeborg",
          role: "Café website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/momo-caffe-silkeborg/"
        },
      ],
    },
    about: {
      title: "// about_me",
      bio: "I'm a full-stack developer with a passion for clean code and mountain trails. I build web applications that are fast, accessible, and maintainable. When I'm not coding, you'll find me hiking somewhere in the Alps or experimenting with new tech over a cup of strong coffee.",
      terminalQuote: '> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler',
    },
    contact: {
      title: "// contact",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      send: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Your message...",
    },
    footer: {
      built: "Built with React & TypeScript",
      rights: "All rights reserved.",
    },
  },
  cz: {
    nav: {
      about: "O mně",
      projects: "Projekty",
      techStack: "Technologie",
      websites: "Weby",
      contact: "Kontakt",
    },
    hero: {
      name: "Tereza Knápková",
      subtitle: "Full-Stack Vývojář",
      description: "Tvořím čistá, výkonná webová řešení s moderními nástroji.",
      viewProjects: "Zobrazit projekty",
      viewWebsites: "Zobrazit weby",
      contactMe: "Kontaktujte mě",
      techLine: "React · Node.js · TypeScript · PostgreSQL",
    },
    techStack: {
      title: "// technologie",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Nástroje",
    },
    projects: {
      title: "// projekty",
      github: "GitHub",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Task Manager API",
          description: "RESTful API s autentizací, omezením rychlosti a real-time WebSocket notifikacemi.",
          tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
        },
        {
          title: "E-Commerce Dashboard",
          description: "Analytický dashboard s interaktivními grafy, správou skladu a sledováním objednávek.",
          tech: ["React", "TypeScript", "Tailwind", "Recharts"],
        },
        {
          title: "DevOps Pipeline Tool",
          description: "Vizualizační nástroj CI/CD pipeline s integrací GitHub Actions a logy nasazení.",
          tech: ["Go", "Docker", "GitHub API", "SQLite"],
        },
      ],
    },
    websites: {
      title: "// weby",
      visitSite: "Navštívit web",
      note: "Poznámka: Tyto weby jsou aktuálně ve vývoji a nejsou zatím live — jedná se o draft.",
      items: [
        {
          name: "Den Gul Café",
          role: "Web pro kavárnu — navrhla a vytvořila responzivní web.",
          tech: ["Next.js", "Vercel", "Supabase", "React"],
          link: "https://knapkova.github.io/dengulecafe/"
        },
        {
          name: "Caffé Vespa",
          role: "Web pro kavárnu — navrhl  a vytvořil  responzivní web.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/caff-vespa-digital-clipboard/"
        },
        {
          name: "Kavárna Maty",
          role: "Web pro kavárnu — navrhla a vytvořila responzivní web.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/cafe-bar-maty/"
        },
        {
          name: "Onkel A",
          role: "Web pro kavárnu — navrhl a vytvořil responzivní web.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/onkel-a-hygge-hub"
        },
        {
          name: "The fresh barber Aarhus",
          role: "Web pro holičství — navrhla a vytvořila responzivní web.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/the-fresh-barber-aarhus/"
        },
        {
          name: "Momo café Silkeborg",
          role: "Web pro kavárnu — navrhla a vytvořila responzivní web.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/momo-caffe-silkeborg/"
        },
      ],
    },
    about: {
      title: "// o_mně",
      bio: "Jsem full-stack vývojář s vášní pro čistý kód a horské stezky. Tvořím webové aplikace, které jsou rychlé, přístupné a udržovatelné. Když zrovna nekóduji, najdete mě na túře někde v Alpách nebo experimentuji s novými technologiemi u šálku silné kávy.",
      terminalQuote: '> "Každý hlupák dokáže napsat kód, kterému rozumí počítač. Dobří programátoři píší kód, kterému rozumí lidé." — Martin Fowler',
    },
    contact: {
      title: "// kontakt",
      nameLabel: "Jméno",
      emailLabel: "Email",
      messageLabel: "Zpráva",
      send: "Odeslat zprávu",
      namePlaceholder: "Vaše jméno",
      emailPlaceholder: "vas@email.cz",
      messagePlaceholder: "Vaše zpráva...",
    },
    footer: {
      built: "Postaveno s React & TypeScript",
      rights: "Všechna práva vyhrazena.",
    },
  },
  dk: {
    nav: {
      about: "Om mig",
      projects: "Projekter",
      techStack: "Teknologier",
      websites: "Websites",
      contact: "Kontakt",
    },
    hero: {
      name: "Tereza Knápková",
      subtitle: "Full-Stack Udvikler",
      description: "Jeg bygger rene, performante webapplikationer med moderne værktøjer.",
      viewProjects: "Se projekter",
      viewWebsites: "Se hjemmesider",
      contactMe: "Kontakt mig",
      techLine: "React · Node.js · TypeScript · PostgreSQL",
    },
    techStack: {
      title: "// teknologier",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Værktøjer",
    },
    projects: {
      title: "// projekter",
      github: "GitHub",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Task Manager API",
          description: "RESTful API med autentificering, rate limiting og real-time WebSocket notifikationer.",
          tech: ["Node.js", "Express", "PostgreSQL", "Redis"],
        },
        {
          title: "E-Commerce Dashboard",
          description: "Analytisk dashboard med interaktive grafer, lagerstyring og ordresporing.",
          tech: ["React", "TypeScript", "Tailwind", "Recharts"],
        },
        {
          title: "DevOps Pipeline Tool",
          description: "CI/CD pipeline visualiseringsværktøj med GitHub Actions integration og deployment logs.",
          tech: ["Go", "Docker", "GitHub API", "SQLite"],
        },
      ],
    },
    websites: {
      title: "// websites",
      visitSite: "Besøg side",
      note: "Bemærk: Disse hjemmesider er i øjeblikket under udvikling og er ikke live endnu — dette er et udkast.",
      items: [
        {
          name: "Den Gul Café",
          role: "Web for café — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "Supabase", "React"],
          link: "https://knapkova.github.io/dengulecafe/"
        },
        {
          name: "Caffé Vespa",
          role: "Web for café — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/caff-vespa-digital-clipboard/"
        },
        {
          name: "Kavárna Maty",
          role: "Web for café — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/cafe-bar-maty/"
        },
        {
          name: "Onkel A",
          role: "Web for café — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/onkel-a-hygge-hub"
        },
        {
          name: "The fresh barber Aarhus",
          role: "Web for barber — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/the-fresh-barber-aarhus/"
        },
        {
          name: "Momo café Silkeborg",
          role: "Web for café — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/momo-caffe-silkeborg/"
        },
      ],
    },
    about: {
      title: "// om_mig",
      bio: "Jeg er en full-stack udvikler med passion for ren kode og bjergstier. Jeg bygger webapplikationer der er hurtige, tilgængelige og vedligeholdbare. Når jeg ikke koder, finder du mig på vandretur et sted i Alperne eller eksperimenterende med ny teknologi over en kop stærk kaffe.",
      terminalQuote: '> "Enhver idiot kan skrive kode som en computer kan forstå. Gode programmører skriver kode som mennesker kan forstå." — Martin Fowler',
    },
    contact: {
      title: "// kontakt",
      nameLabel: "Navn",
      emailLabel: "Email",
      messageLabel: "Besked",
      send: "Send besked",
      namePlaceholder: "Dit navn",
      emailPlaceholder: "din@email.dk",
      messagePlaceholder: "Din besked...",
    },
    footer: {
      built: "Bygget med React & TypeScript",
      rights: "Alle rettigheder forbeholdes.",
    },
  },
} as const;

// Writable recursive type
type DeepWritable<T> = T extends string ? string : T extends readonly (infer U)[] ? readonly DeepWritable<U>[] : { readonly [K in keyof T]: DeepWritable<T[K]> };
export type Translations = DeepWritable<typeof translations.en>;
