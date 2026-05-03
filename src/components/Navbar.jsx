import { useEffect, useState } from "react";
import { NAV_LINKS, PERSONAL } from "../constants";
import { useTheme } from "../context/ThemeContext";
import useReducedMotion from "../hooks/use-reduced-motion";

function Navbar() {
  const { theme, toggle } = useTheme();
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dark = theme === "dark";
  const homeHref = `${process.env.PUBLIC_URL || ""}/#home`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 36px",
    background: scrolled ? "var(--nav-bg)" : "transparent",
    backdropFilter:
      scrolled && !reducedMotion ? "blur(24px) saturate(1.5)" : "none",
    WebkitBackdropFilter:
      scrolled && !reducedMotion ? "blur(24px) saturate(1.5)" : "none",
    borderBottom: scrolled
      ? "1px solid var(--border)"
      : "1px solid transparent",
    transition: "background 0.4s, border-color 0.4s",
  };

  return (
    <>
      <nav style={navStyle} role="navigation" aria-label="Main">
        {/* Logo */}
        <a
          href={homeHref}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text1)",
          }}
        >
          R<span style={{ color: "var(--accent)" }}>.</span>
        </a>

        {/* Desktop links */}
        <ul
          style={{ display: "flex", gap: 4, listStyle: "none" }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--text2)",
                  padding: "6px 14px",
                  borderRadius: 999,
                  transition: "color .2s, background .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text1)";
                  e.currentTarget.style.background = "var(--accent3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "var(--accent3)",
              border: "1px solid var(--border)",
              color: "var(--text2)",
              fontSize: 15,
              transition: "all .2s",
            }}
          >
            {dark ? "☀" : "◑"}
          </button>

          <a
            href={`mailto:${PERSONAL.email}`}
            className="nav-contact"
            style={{
              padding: "8px 18px",
              borderRadius: 10,
              background: "var(--text1)",
              color: "var(--bg)",
              fontSize: 13,
              fontWeight: 600,
              transition: "opacity .2s, transform .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = ".85";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "none";
            }}
          >
            Let's talk →
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            style={{
              display: "none",
              flexDirection: "column",
              gap: 4,
              padding: 8,
            }}
            className="hamburger"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 20,
                  height: 1.5,
                  background: "var(--text1)",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "var(--bg)",
          padding: "48px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform .45s var(--ease-quart)",
        }}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 20,
            right: 28,
            fontSize: 28,
            color: "var(--text2)",
            padding: 8,
          }}
        >
          ✕
        </button>
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              fontWeight: 700,
              color: "var(--text1)",
              padding: "14px 0",
              borderBottom: "1px solid var(--border)",
              letterSpacing: "-0.03em",
            }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}

export default Navbar;
