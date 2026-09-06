export type Locale = "es" | "en";

export const ui = {
  es: {
    // Nav
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.lang": "EN",

    // Hero
    "hero.description": "Hacemos la web. Tú haces el negocio.",
    "hero.offer": "Una presencia profesional en internet y menos trabajo manual para pequeños negocios.",
    "hero.subtitle": "Rápido. Claro. Tuyo.",

    // Section labels
    "section.work": "Proyectos",
    "section.how": "Cómo trabajamos",
    "section.help": "Con qué ayudamos",
    "section.cta": "Contacto",

    // How we work
    "how.1.title": "Definimos qué necesita tu negocio",
    "how.1.desc":
      "Acordamos qué vamos a construir, qué incluye y qué problema debe resolver.",
    "how.2.title": "Trabajas directo con quien construye",
    "how.2.desc":
      "Conversas con quien diseña y desarrolla tu proyecto. Revisamos los avances contigo y explicamos las decisiones con claridad.",
    "how.3.title": "Dejamos algo funcionando y fácil de mantener",
    "how.3.desc":
      "Entregamos la web o herramienta lista para usar, con documentación para su mantenimiento.",

    // What we help with
    "help.1.title": "Sitios web rápidos",
    "help.1.desc":
      "Para negocios que necesitan presencia profesional, buena velocidad y una explicación clara de lo que hacen.",
    "help.2.title": "Páginas para campañas",
    "help.2.desc":
      "Páginas enfocadas en presentar una oferta concreta y captar consultas.",
    "help.3.title": "Formularios conectados",
    "help.3.desc":
      "Datos desde formularios hacia email, hojas de cálculo o flujos internos sin copiar y pegar manualmente.",
    "help.4.title": "Automatizaciones simples",
    "help.4.desc":
      "Pequeños flujos para reducir tareas repetitivas y ahorrar tiempo en el trabajo diario.",

    // CTA
    "cta.title": "Hablemos de tu proyecto.",
    "cta.desc":
      "Cuéntanos qué necesitas resolver. Revisamos el alcance y los próximos pasos, sin compromiso.",
    "cta.action": "Hablar por WhatsApp",
    "whatsapp.message": "Hola, me gustaría conversar sobre un proyecto para mi negocio.",

    // About page
    "about.breadcrumb": "Northsoon · Nosotros",
    "about.h1": "Nosotros",
    "about.p1":
      "Northsoon es un estudio independiente que crea sitios web y herramientas para pequeños negocios que necesitan una presencia profesional y menos trabajo manual.",
    "about.p2":
      "Construimos webs que explican tus servicios, páginas para campañas y formularios conectados al correo o a hojas de cálculo. También automatizamos tareas repetitivas del día a día.",
    "about.p3":
      "Trabajas directamente con quien diseña y desarrolla. Definimos el alcance según tus prioridades, revisamos los avances contigo y dejamos documentado lo que entregamos.",
    "about.p4.before": "Fundado por",
    "about.p4.after":
      "en San Esteban, Los Andes, Chile.",
    "about.cta.label": "Hablemos de tu proyecto",
    "about.cta.desc":
      "Si necesitas una web o quieres simplificar una tarea repetitiva, hablemos.",

    // Shared
    back: "Volver",
    "mailto.subject": "Northsoon - Consulta de proyecto",

    // SEO
    "seo.home.title": "Northsoon · Sitios web y automatización simple",
    "seo.home.desc":
      "Creamos sitios web para pequeños negocios, páginas para campañas y formularios conectados. Automatizamos tareas repetitivas para ahorrar trabajo manual.",
    "seo.about.title": "Nosotros · Northsoon",
    "seo.about.desc":
      "Northsoon es un estudio independiente fundado por Manuel Caballero en San Esteban, Los Andes, Chile. Creamos sitios web rápidos y herramientas simples para negocios pequeños.",

    // Work pages
    "work.studio.breadcrumb": "Proyectos · Northsoon.com",
    "work.studio.h1": "Northsoon.com",
    "work.studio.status": "activo",
    "work.studio.p1":
      "Este es el sitio real de Northsoon, construido con Astro, Tailwind CSS y Vercel.",
    "work.studio.p2":
      "El diseño busca ser rápido, legible y fácil de mantener: el tipo de base simple que también sirve para negocios pequeños.",
    "work.studio.p3":
      "Una versión anterior del sitio sigue disponible para referencia:",

    "work.fmg3d.breadcrumb": "Proyectos · FMG3D",
    "work.fmg3d.h1": "FMG3D",
    "work.fmg3d.imageAlt": "Portada del sitio web de FMG3D",
    "work.fmg3d.status": "en línea",
    "work.fmg3d.need": "La necesidad",
    "work.fmg3d.work": "El trabajo",
    "work.fmg3d.delivery": "La entrega",
    "work.fmg3d.p1":
      "Sitio web para FMG3D, un estudio familiar chileno de diseño e impresión 3D que comienza con objetos para aprender, comunicar y organizar.",
    "work.fmg3d.p2":
      "Presentar el estudio, sus primeras líneas de objetos y su forma de trabajar, con un lugar claro para proponer un proyecto.",
    "work.fmg3d.p3":
      "Organizamos el contenido y diseñamos el recorrido entre proyectos, origen y proceso. Las imágenes muestran sus líneas de exploración y los enlaces llevan a la sección de contacto.",
    "work.fmg3d.p4":
      "Una web publicada en fmg3d.cl, con secciones para los proyectos en desarrollo y un formulario que pide nombre, correo y la necesidad a resolver. Incluye un enlace al correo del estudio como alternativa de contacto.",
    "work.fmg3d.link": "Ver fmg3d.cl",

    "work.tooling.breadcrumb": "Proyectos · Astro tools",
    "work.tooling.h1": "Astro tools",
    "work.tooling.intro":
      "Construimos sitios sobre un conjunto de helpers de Astro que mantenemos y publicamos públicamente. Ambos tienen licencia MIT y los usamos en este sitio.",
    "work.tooling.packages": "Paquetes",

    "work.lab.breadcrumb": "Proyectos · Laboratorio",
    "work.lab.h1": "Laboratorio de automatización",
    "work.lab.status": "interno",
    "work.lab.p1":
      "Un proyecto interno de I+D para explorar cómo una operación pequeña puede apoyarse en agentes, scripts y flujos automatizados sin depender de plataformas empresariales complejas.",
    "work.lab.p2":
      "La premisa es simple: un setup pequeño y bien ajustado puede quitar carga diaria real, como borradores, investigación, seguimientos internos o tareas repetitivas.",
    "work.lab.p3":
      "No es un producto. Es una caja de arena: construimos las partes que necesitamos para operar Northsoon, y conservamos lo que funciona.",
    "work.lab.p4": "Más detalles pronto.",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.lang": "ES",

    // Hero
    "hero.description": "We build the website. You run the business.",
    "hero.offer": "A professional online presence and less manual work for small businesses.",
    "hero.subtitle": "Fast. Clear. Yours.",

    // Section labels
    "section.work": "Projects",
    "section.how": "How we work",
    "section.help": "What we help with",
    "section.cta": "Contact",

    // How we work
    "how.1.title": "We define what your business needs",
    "how.1.desc":
      "We agree on what we will build, what is included, and which problem it should solve.",
    "how.2.title": "You work directly with the person building",
    "how.2.desc":
      "You speak with the person designing and developing your project. We review progress with you and explain our decisions clearly.",
    "how.3.title": "We leave you with something working and maintainable",
    "how.3.desc":
      "We deliver a website or tool that is ready to use, with documentation to help you maintain it.",

    // What we help with
    "help.1.title": "Fast websites",
    "help.1.desc":
      "For businesses that need a professional presence, strong performance, and a clear explanation of what they do.",
    "help.2.title": "Landing pages",
    "help.2.desc":
      "Pages focused on presenting a specific offer and generating inquiries.",
    "help.3.title": "Connected forms",
    "help.3.desc":
      "Send form data to email, spreadsheets, or internal workflows without manual copy-paste.",
    "help.4.title": "Simple automations",
    "help.4.desc":
      "Small workflows that reduce repetitive tasks and save time in day-to-day work.",

    // CTA
    "cta.title": "Let’s talk about your project.",
    "cta.desc":
      "Tell us what you need to solve. We’ll discuss the scope and next steps, with no commitment.",
    "cta.action": "Chat on WhatsApp",
    "whatsapp.message": "Hi, I would like to talk about a project for my business.",

    // About page
    "about.breadcrumb": "Northsoon · About",
    "about.h1": "About",
    "about.p1":
      "Northsoon is an independent studio building websites and tools for small businesses that need a professional presence and less manual work.",
    "about.p2":
      "We build websites that explain your services, landing pages for campaigns, and forms connected to email or spreadsheets. We also automate repetitive day-to-day tasks.",
    "about.p3":
      "You work directly with the person designing and developing your project. We define the scope around your priorities, review progress with you, and document what we deliver.",
    "about.p4.before": "Founded by",
    "about.p4.after":
      "in San Esteban, Los Andes, Chile.",
    "about.cta.label": "Let’s talk about your project",
    "about.cta.desc":
      "If you need a website or want to simplify a repetitive task, let's talk.",

    // Shared
    back: "Back",
    "mailto.subject": "Northsoon - Project inquiry",

    // SEO
    "seo.home.title": "Northsoon · Websites and simple automation",
    "seo.home.desc":
      "We build websites for small businesses, landing pages for campaigns, and connected forms. We automate repetitive tasks to reduce manual work.",
    "seo.about.title": "About · Northsoon",
    "seo.about.desc":
      "Northsoon is an independent studio founded by Manuel Caballero in San Esteban, Los Andes, Chile. We build fast websites and simple tools for small businesses.",

    // Work pages
    "work.studio.breadcrumb": "Projects · Northsoon website",
    "work.studio.h1": "Northsoon website",
    "work.studio.status": "live",
    "work.studio.p1":
      "This is the Northsoon site, built with Astro, Tailwind CSS, and Vercel.",
    "work.studio.p2":
      "The design is fast, readable, and easy to maintain: the kind of simple foundation that also works well for small businesses.",
    "work.studio.p3":
      "The previous version of the site is still available for reference:",

    "work.fmg3d.breadcrumb": "Projects · FMG3D",
    "work.fmg3d.h1": "FMG3D",
    "work.fmg3d.imageAlt": "FMG3D website homepage",
    "work.fmg3d.status": "live",
    "work.fmg3d.need": "The need",
    "work.fmg3d.work": "The work",
    "work.fmg3d.delivery": "The delivery",
    "work.fmg3d.p1":
      "Website for FMG3D, a family-run Chilean 3D design and printing studio starting with objects for learning, communication, and organization.",
    "work.fmg3d.p2":
      "Introduce the studio, its first product lines, and its approach, with a clear place for visitors to propose a project.",
    "work.fmg3d.p3":
      "We organized the content and designed the path through projects, the studio’s origins, and its process. Images show the areas it is exploring, and links lead to the contact section.",
    "work.fmg3d.p4":
      "A website published at fmg3d.cl, with sections for projects in development and a form asking for a name, email address, and the need to address. A link to the studio’s email offers another way to get in touch.",
    "work.fmg3d.link": "Visit fmg3d.cl",

    "work.tooling.breadcrumb": "Projects · Tools",
    "work.tooling.h1": "Astro tools",
    "work.tooling.intro":
      "We build websites on top of a small set of Astro helpers that we maintain and ship publicly. Both are MIT-licensed and used on this site.",
    "work.tooling.packages": "Packages",

    "work.lab.breadcrumb": "Projects · Lab",
    "work.lab.h1": "Automation lab",
    "work.lab.status": "internal",
    "work.lab.p1":
      "An internal R&D effort exploring how a small operation can use agents, scripts, and automated workflows without depending on heavyweight enterprise platforms.",
    "work.lab.p2":
      "The premise is simple: a small, custom setup can remove real daily load such as drafting, research, internal follow-ups, or repetitive tasks.",
    "work.lab.p3":
      "It is not a product. It is a sandbox: we build the parts we need to run Northsoon itself, and keep what works.",
    "work.lab.p4": "More to share soon.",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return (ui[locale][key] ?? ui["es"][key]) as string;
  };
}

export const projects = {
  es: [
    {
      n: "01",
      name: "FMG3D",
      desc: "Web para un estudio chileno de diseño e impresión 3D: proyectos en desarrollo, proceso de trabajo y formulario de contacto.",
      status: "en línea",
      href: "/work/fmg3d",
    },
    {
      n: "02",
      name: "Northsoon.com",
      desc: "Este sitio. Construido con Astro, Tailwind y Vercel. Rápido, legible y fácil de mantener.",
      status: "sitio web",
      href: "/work/studio-site",
    },
    {
      n: "03",
      name: "Open Source",
      desc: "Paquetes para Astro que usamos en cada proyecto. MIT. Publicados y mantenidos.",
      status: "open source",
      href: "/work/tooling",
    },
  ],
  en: [
    {
      n: "01",
      name: "FMG3D",
      desc: "Website for a Chilean 3D design and printing studio: projects in development, its process, and a contact form.",
      status: "live",
      href: "/en/work/fmg3d",
    },
    {
      n: "02",
      name: "Northsoon.com",
      desc: "This site. Built with Astro, Tailwind, and Vercel. Fast, readable, and easy to maintain.",
      status: "website",
      href: "/en/work/studio-site",
    },
    {
      n: "03",
      name: "Open Source",
      desc: "Astro packages we use on every project. MIT-licensed. Published and maintained.",
      status: "open source",
      href: "/en/work/tooling",
    },
  ],
};
