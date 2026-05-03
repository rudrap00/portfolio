// ─────────────────────────────────────────────────────────────
// src/constants/index.js  —  barrel export
// Import everything from here in App.jsx:
//   import { PERSONAL, PROJECTS, SKILLS, TOOLS, EXPERIENCE, EDUCATION, NAV_LINKS } from "./constants";
// ─────────────────────────────────────────────────────────────

export { EDUCATION, EXPERIENCE } from "./experience.js";
export { PERSONAL } from "./personal.js";
export { PROJECTS } from "./projects.js";
export { SKILLS, TOOLS } from "./skills.js";

// Nav links live here so you can reorder / add sections without touching the Navbar component
export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
