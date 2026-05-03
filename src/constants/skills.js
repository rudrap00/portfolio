// ─────────────────────────────────────────────────────────────
// src/constants/skills.js
//
// SKILLS   → shown as animated progress bars, grouped by category
// TOOLS    → shown as a tag cloud ("Full toolkit" row)
//
// level: 0–100 — controls the bar fill width
// ─────────────────────────────────────────────────────────────

export const SKILLS = [
  {
    category: "Frontend",
    icon: "◈",
    skills: [
      { name: "React.js / Next.js", level: 95 },
      { name: "TypeScript / JavaScript", level: 93 },
      { name: "TanStack Query", level: 88 },
      { name: "Tailwind CSS / ShadCN UI", level: 90 },
      { name: "Redux", level: 82 },
    ],
  },
  {
    category: "Backend",
    icon: "⬡",
    skills: [
      { name: "Node.js / Express.js", level: 88 },
      { name: "NestJS", level: 82 },
      { name: "REST APIs / OAuth", level: 90 },
      { name: "Prisma ORM", level: 80 },
    ],
  },
  {
    category: "Databases & Infra",
    icon: "✦",
    skills: [
      { name: "PostgreSQL / MySQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Docker", level: 72 },
      { name: "Caching (Cache-Aside, TTL)", level: 85 },
    ],
  },
  {
    category: "Quality & Tooling",
    icon: "◎",
    skills: [
      { name: "Jest / Vitest / RTL", level: 85 },
      { name: "Storybook", level: 88 },
      { name: "WCAG Accessibility", level: 86 },
      { name: "Performance (Lighthouse)", level: 90 },
    ],
  },
];

export const TOOLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Express.js",
  "TanStack Query",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Tailwind CSS",
  "ShadCN UI",
  "Storybook",
  "Redux",
  "Docker",
  "Jest",
  "Vitest",
  "React Testing Library",
  "Git",
  "Postman",
  "Zod",
];
