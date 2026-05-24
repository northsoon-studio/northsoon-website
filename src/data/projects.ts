/**
 * "On the bench" — items shown on the home page.
 * Each item links to an internal work page.
 */

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
    desc: "Full rebuild in progress. The previous site is still online.",
    status: "in dev",
    href: "/work/studio-site",
  },
  {
    n: "02",
    name: "Open-source tooling",
    desc: "Astro helpers we ship publicly: SEO, icons.",
    status: "open",
    href: "/work/tooling",
  },
  {
    n: "03",
    name: "Lab",
    desc: "Internal R&D. Small experiments in agent tooling.",
    status: "internal",
    href: "/work/lab",
  },
];
