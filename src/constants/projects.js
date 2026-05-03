// ─────────────────────────────────────────────────────────────
// src/constants/projects.js
//
// HOW TO ADD A PROJECT:
//   1. Copy any object below and paste it into the array
//   2. Set featured: true  → large two-column card (hero layout)
//      Set featured: false → small card in the grid at the bottom
//   3. Leave links.live or links.github as "" to hide that button
//   4. gradientDark is a CSS linear-gradient string for the visual pane
// ─────────────────────────────────────────────────────────────

export const PROJECTS = [
  // ── FEATURED (large cards, rendered in order) ───────────────
  {
    id: "personalization-widget",
    title: "Personalization Widget",
    subtitle: "Givingli-inspired gifting experience at BHN",
    description:
      "Built from scratch at BlackHawk Network — a fully personalized gifting widget platform with drag-and-drop canvas, rich media uploads, and real-time preview. Designed the entire system architecture and delivered both the customer-facing widget and the admin control panel end-to-end.",
    tags: [
      "React",
      "NestJS",
      "TypeScript",
      "Framer Motion",
      "React-RND",
      "Redis",
      "AWS S3",
      "TanStack Query",
    ],
    category: "Full Stack",
    year: "2025",
    status: "Live",
    featured: true,
    links: { live: "", github: "" },
    gradientDark: "135deg, #3d0d6b, #6b0f3d",
    icon: "🎁",
    metrics: [
      { label: "Surfaces", value: "2" },
      { label: "Built from", value: "Scratch" },
      { label: "Stack", value: "Full" },
    ],
  },
  {
    id: "ecommerce",
    title: "ShopStack",
    subtitle: "Full-stack e-commerce platform",
    description:
      "Production-grade e-commerce platform built with Next.js and NestJS. Features OAuth auth, server-side rendering, Zod schema validation, and cache-aside strategy — cutting load times by 35% and runtime errors by 40%.",
    tags: [
      "Next.js",
      "NestJS",
      "TanStack Query",
      "Prisma",
      "MongoDB",
      "TypeScript",
      "Zod",
    ],
    category: "Full Stack",
    year: "2024",
    status: "Live",
    featured: true,
    links: { live: "#", github: "https://github.com/rudrap00" },
    gradientDark: "135deg, #1e3a5f, #0f2027",
    icon: "🛒",
    metrics: [
      { label: "Load time ↓", value: "35%" },
      { label: "Runtime errors ↓", value: "40%" },
      { label: "Auth", value: "OAuth" },
    ],
  },
  {
    id: "microfrontend",
    title: "Widget Platform",
    subtitle: "Micro frontend widget system",
    description:
      "Scalable micro frontend platform at BlackHawk Network powering multiple product teams. Shared component library + design system integrations — 30% faster feature delivery, 30% less code duplication.",
    tags: [
      "React",
      "TypeScript",
      "Micro Frontends",
      "Storybook",
      "TanStack Query",
      "Tailwind CSS",
    ],
    category: "Architecture",
    year: "2024",
    status: "Live",
    featured: true,
    links: { live: "", github: "" },
    gradientDark: "135deg, #1a1a2e, #16213e",
    icon: "⚙️",
    metrics: [
      { label: "Delivery faster", value: "30%" },
      { label: "LCP/FCP ↑", value: "40%+" },
      { label: "API calls ↓", value: "25%" },
    ],
  },

  // ── SMALL GRID (rendered below the featured cards) ──────────
  {
    id: "storybook-hub",
    title: "Centralized Storybook",
    subtitle: "Universal widget onboarding hub at BHN",
    description:
      "Built a centralized Storybook at BlackHawk Network that serves as a single source of truth for all internal widgets. Any team can integrate and onboard their widget with minimal config changes — no boilerplate, no friction.",
    tags: [
      "Storybook",
      "React",
      "TypeScript",
      "Micro Frontends",
      "Design System",
    ],
    category: "Developer Experience",
    year: "2024",
    status: "Live",
    featured: false,
    links: { live: "", github: "" },
    gradientDark: "135deg, #1c1033, #2d1b69",
    icon: "📖",
    metrics: [
      { label: "Teams onboarded", value: "5+" },
      { label: "Inconsistencies ↓", value: "35%" },
    ],
  },
  {
    id: "internaltools",
    title: "Enterprise Toolkit",
    subtitle: "Internal tooling at Wipro",
    description:
      "Full-stack internal tools built with React, Node.js, and REST APIs for enterprise teams. Modular component architecture integrated with backend data pipelines — improved team efficiency by 20%.",
    tags: ["React", "Node.js", "Express.js", "REST APIs", "PostgreSQL"],
    category: "Full Stack",
    year: "2023",
    status: "Live",
    featured: false,
    links: { live: "", github: "" },
    gradientDark: "135deg, #0f3460, #533483",
    icon: "🔧",
    metrics: [
      { label: "Efficiency ↑", value: "20%" },
      { label: "API response ↓", value: "12%" },
    ],
  },
];
