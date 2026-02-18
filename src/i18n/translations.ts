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
      name: "John Developer",
      subtitle: "Full-Stack Developer",
      description: "Building clean, performant web applications with modern tools.",
      viewProjects: "View Projects",
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
      items: [
        {
          name: "TechStartup.io",
          role: "Lead developer — built the full platform from scratch including payment integration.",
          tech: ["Next.js", "Stripe", "Supabase"],
        },
        {
          name: "LocalCafe.cz",
          role: "Freelance — designed and developed a responsive website with online ordering.",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          name: "MountainGuide.dk",
          role: "Co-developer — hiking route planner with interactive maps and weather data.",
          tech: ["Vue.js", "Mapbox", "Python"],
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
      name: "John Developer",
      subtitle: "Full-Stack Vývojář",
      description: "Tvořím čistá, výkonná webová řešení s moderními nástroji.",
      viewProjects: "Zobrazit projekty",
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
      items: [
        {
          name: "TechStartup.io",
          role: "Hlavní vývojář — postavil celou platformu od nuly včetně platební integrace.",
          tech: ["Next.js", "Stripe", "Supabase"],
        },
        {
          name: "LocalCafe.cz",
          role: "Freelance — navrhl a vyvinul responzivní web s online objednávkami.",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          name: "MountainGuide.dk",
          role: "Spoluvývojář — plánovač turistických tras s interaktivními mapami a počasím.",
          tech: ["Vue.js", "Mapbox", "Python"],
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
      name: "John Developer",
      subtitle: "Full-Stack Udvikler",
      description: "Jeg bygger rene, performante webapplikationer med moderne værktøjer.",
      viewProjects: "Se projekter",
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
      items: [
        {
          name: "TechStartup.io",
          role: "Hovedudvikler — byggede hele platformen fra bunden inklusive betalingsintegration.",
          tech: ["Next.js", "Stripe", "Supabase"],
        },
        {
          name: "LocalCafe.cz",
          role: "Freelance — designede og udviklede en responsiv hjemmeside med online bestilling.",
          tech: ["React", "Node.js", "MongoDB"],
        },
        {
          name: "MountainGuide.dk",
          role: "Medudvikler — vandreruteplanlægger med interaktive kort og vejrdata.",
          tech: ["Vue.js", "Mapbox", "Python"],
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
