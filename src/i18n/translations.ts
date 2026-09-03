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
      techLine: "Python · C# · .NET · Machine Learning",
    },
    techStack: {
      title: "// tech_stack",
      languages: "Languages",
      frameworks: "Frameworks",
      dataAutomation: "Data & Automation",
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
      note: "Note: Some of these websites are still under development.",
      items: [
        {
          name: "Magpie Lane Vintage",
          role: "Vintage shop website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://magpielanevintage.dk"
        },
        {
          name: "BORIX Logistics",
          role: "Logistics website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/BORIX-logistics/"
        },
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
          name: "Momo café Silkeborg",
          role: "Café website — designed and developed a responsive site.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/momo-caffe-silkeborg/"
        },
      ],
    },
    about: {
      title: "// about_me",
      bio: "I'm a full-stack developer with a passion for clean code, mountains, and staying active. I build web applications that are fast, accessible, and maintainable. When I'm not coding, you might find me teaching a yoga class, cycling, or learning about whatever has caught my interest lately.",
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
      techLine: "Python · C# · .NET · Machine Learning",
    },
    techStack: {
      title: "// technologie",
      languages: "Jazyky",
      frameworks: "Frameworky",
      dataAutomation: "Data a automatizace",
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
      note: "Poznámka: Některé z těchto webů jsou stále ve vývoji.",
      items: [
        {
          name: "Magpie Lane Vintage",
          role: "Web vintage obchodu — návrh a vývoj responzivního webu.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://magpielanevintage.dk"
        },
        {
          name: "BORIX Logistics",
          role: "Web logistické společnosti — návrh a vývoj responzivního webu.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/BORIX-logistics/"
        },
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
          name: "Momo café Silkeborg",
          role: "Web pro kavárnu — navrhla a vytvořila responzivní web.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/momo-caffe-silkeborg/"
        },
      ],
    },
    about: {
      title: "// o_mně",
      bio: "Jsem full-stack vývojářka s vášní pro čistý kód, hory a aktivní život. Tvořím webové aplikace, které jsou rychlé, přístupné a udržovatelné. Když zrovna nekóduji, možná mě najdete při výuce jógy, na kole nebo při učení se něčemu, co mě právě zaujalo.",
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
      techLine: "Python · C# · .NET · Machine Learning",
    },
    techStack: {
      title: "// teknologier",
      languages: "Programmeringssprog",
      frameworks: "Frameworks",
      dataAutomation: "Data og automatisering",
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
      note: "Bemærk: Nogle af disse hjemmesider er stadig under udvikling.",
      items: [
        {
          name: "Magpie Lane Vintage",
          role: "Vintagebutik — designede og udviklede en responsiv hjemmeside.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://magpielanevintage.dk"
        },
        {
          name: "BORIX Logistics",
          role: "Logistikwebsite — designet og udviklet en responsiv hjemmeside.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/BORIX-logistics/"
        },
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
          name: "Momo café Silkeborg",
          role: "Web for café — designet og udviklet en responsiv side.",
          tech: ["Next.js", "Vercel", "React"],
          link: "https://knapkova.github.io/momo-caffe-silkeborg/"
        },
      ],
    },
    about: {
      title: "// om_mig",
      bio: "Jeg er en full-stack udvikler med passion for ren kode, bjerge og et aktivt liv. Jeg bygger webapplikationer, der er hurtige, tilgængelige og vedligeholdbare. Når jeg ikke koder, underviser jeg måske i yoga, cykler eller lærer om noget, der har fanget min interesse på det seneste.",
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
