// ─────────────────────────────────────────────────────────────
// src/constants/experience.js
//
// EXPERIENCE  → vertical timeline on the left
// EDUCATION   → sticky card on the right
//
// highlights: each string becomes a "→ bullet" in the timeline
// color: accent dot color on the timeline spine
// ─────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    id: "e1",
    company: "BlackHawk Network",
    role: "Software Engineer",
    period: "Nov 2024 — Present",
    type: "Full-time",
    description:
      "Leading front-end development of a scalable micro frontend widget platform powering multiple product teams. Driving performance, accessibility, and design-system standards across the org.",
    highlights: [
      "Designed and built the Personalization Widget from scratch — full system design, admin + user surfaces, drag-and-drop canvas with React-RND and Framer Motion, media uploads to S3, Redis caching, NestJS backend",
      "Micro frontend widget platform — accelerated feature delivery by 30%",
      "Shared component library cut code duplication by 30% across teams",
      "LCP/FCP improved 40%+ via code splitting, lazy loading, and memoization",
      "Reduced redundant API calls 25% with TanStack Query deduplication & debouncing",
      "API response times cut 50–70% with cache-aside and TTL caching strategies",
      "Built centralized Storybook hub — internal teams onboard widgets with minimal config changes",
      "WCAG 2.1 AA accessibility compliance across all widget components",
    ],
    tags: [
      "React",
      "TypeScript",
      "Micro Frontends",
      "TanStack Query",
      "Storybook",
      "Jest",
      "Tailwind CSS",
    ],
    color: "#E8D2A0",
  },
  {
    id: "e2",
    company: "Wipro Limited",
    role: "Project Engineer",
    period: "Jul 2022 — Jan 2024",
    type: "Full-time",
    description:
      "Built full-stack internal tools for enterprise teams using React, Node.js, and REST APIs. Delivered modular, reusable components integrated with backend data pipelines for cross-functional business teams.",
    highlights: [
      "Full-stack internal tools improved enterprise team efficiency by 20%",
      "Scalable REST APIs with Node.js/Express.js — 12% faster response times",
      "Modular frontend components integrated with backend data pipelines",
      "Collaborated across product, design, and infrastructure teams",
    ],
    tags: ["React", "Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    color: "#6C8EBF",
  },
];

export const EDUCATION = [
  {
    institution: "Vellore Institute of Technology",
    degree: "B.Tech, Computer Science",
    period: "June 2018 — June 2022",
    location: "Vellore, India",
    gpa: null, // set to e.g. "8.9 / 10" to show the GPA badge
    highlights: [
      "Specialization in Software Engineering & Systems",
      "Final year project in distributed systems",
      "Active member of the coding & open-source club",
    ],
  },
];
