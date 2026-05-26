export type Project = {
  n: string;
  name: string;
  desc: string;
  status: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    name: "Studio site",
    desc: "Rebuilding Northsoon's own site. A live example of our stack and process.",
    status: "in dev",
    href: "/work/studio-site",
  },
  {
    n: "02",
    name: "Open-source tooling",
    desc: "Astro helpers we built and ship publicly — SEO, icon sets. Used in production.",
    status: "open",
    href: "/work/tooling",
  },
  {
    n: "03",
    name: "Lab",
    desc: "Internal R&D. Small experiments in agent tooling and developer workflows.",
    status: "internal",
    href: "/work/lab",
  },
];
