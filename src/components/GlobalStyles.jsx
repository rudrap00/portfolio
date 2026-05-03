function GlobalStyles({ theme }) {
  const dark = theme === "dark";
  const css = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --font-display: 'Syne', sans-serif;
      --font-body: 'DM Sans', system-ui, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --ease-expo: cubic-bezier(0.16,1,0.3,1);
      --ease-quart: cubic-bezier(0.76,0,0.24,1);
      --ease-apple: cubic-bezier(0.22,1,0.36,1);
      ${
        dark
          ? `
      --bg: #060606;
      --bg2: #0d0d0d;
      --bg3: #141414;
      --bg4: #1a1a1a;
      --border: rgba(255,255,255,0.07);
      --border2: rgba(255,255,255,0.13);
      --text1: #F2EDE6;
      --text2: rgba(242,237,230,0.52);
      --text3: rgba(242,237,230,0.28);
      --accent: #E8D2A0;
      --accent2: rgba(232,210,160,0.12);
      --accent3: rgba(232,210,160,0.06);
      --nav-bg: rgba(6,6,6,0.8);
      --shadow: 0 0 0 1px rgba(255,255,255,0.05),0 40px 80px rgba(0,0,0,0.7);
      --glow: 0 0 80px rgba(232,210,160,0.08);
      `
          : `
      --bg: #F8F5F0;
      --bg2: #F0EBE2;
      --bg3: #FFFFFF;
      --bg4: #EDE6D9;
      --border: rgba(0,0,0,0.07);
      --border2: rgba(0,0,0,0.14);
      --text1: #1A1714;
      --text2: rgba(26,23,20,0.52);
      --text3: rgba(26,23,20,0.32);
      --accent: #7A5C2E;
      --accent2: rgba(122,92,46,0.1);
      --accent3: rgba(122,92,46,0.05);
      --nav-bg: rgba(248,245,240,0.85);
      --shadow: 0 0 0 1px rgba(0,0,0,0.06),0 20px 50px rgba(0,0,0,0.09);
      --glow: none;
      `
      }
    }
    html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; font-size: 16px; }
    body {
      font-family: var(--font-body);
      background: var(--bg);
      color: var(--text1);
      line-height: 1.6;
      overflow-x: hidden;
      transition: background 0.5s ease, color 0.5s ease;
      cursor: auto;
    }
    a { color: inherit; text-decoration: none; }
    button { border: none; background: none; cursor: pointer; font-family: inherit; }
    ul { list-style: none; }
    ::selection { background: var(--accent); color: var(--bg); }
    :target { scroll-margin-top: 88px; }

    @media (pointer:fine) and (prefers-reduced-motion:no-preference) {
      body, button { cursor: none; }
    }
 
    /* Noise */
    body::after {
      content: '';
      position: fixed; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      opacity: ${dark ? "0.022" : "0.015"};
      pointer-events: none; z-index: 9998;
    }

    /* Custom cursor dot */
    .cursor-dot {
      position: fixed; top: 0; left: 0;
      width: 7px; height: 7px;
      background: var(--accent);
      border-radius: 50%;
      pointer-events: none; z-index: 10000;
      transform: translate(-50%,-50%);
      transition: width 0.2s, height 0.2s, background 0.2s;
    }
    .cursor-dot.hover { width: 14px; height: 14px; background: var(--accent); opacity: 0.6; }
    @media (hover:none) { .cursor-dot { display: none; } }

    .page-shell {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 36px;
      width: 100%;
    }
    .scroll-scene {
      transform-origin: center top;
      will-change: transform, opacity;
    }
    .apple-card {
      transform-origin: center;
      transition:
        opacity 0.9s var(--ease-apple),
        transform 0.9s var(--ease-apple),
        border-color 0.25s ease,
        box-shadow 0.25s ease;
    }
    .desktop-nav { display: flex; }
    .hamburger { display: none !important; }
 
    /* Scrollbar */
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: var(--bg); }
    ::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }
 
    /* Skip link */
    .skip { position:absolute; top:-40px; left:16px; background:var(--text1); color:var(--bg); padding:8px 16px; border-radius:8px; font-size:14px; z-index:999; transition:top .2s; }
    .skip:focus { top:16px; }
 
    /* Marquee */
    @keyframes marquee { from { transform:translateX(0) } to { transform:translateX(-50%) } }
    .marquee-track { animation: marquee 28s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }
 
    /* Pulse dot */
    @keyframes pulse { 0%,100% { box-shadow: 0 0 0 3px rgba(74,222,128,.2) } 50% { box-shadow: 0 0 0 7px rgba(74,222,128,.04) } }
 
    /* Skill bar */
    @keyframes barFill { from { transform: scaleX(0) } to { transform: scaleX(1) } }
 
    /* Loader */
    @keyframes loaderLine { to { transform: scaleX(1) } }
    @keyframes loaderFade { from { opacity:1 } to { opacity:0; visibility:hidden } }
 
    /* Hero text reveal */
    @keyframes slideUp { from { transform:translateY(105%); opacity:0 } to { transform:translateY(0); opacity:1 } }
    @keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
 
    /* Float orbs */
    @keyframes orbFloat { 0%,100% { transform: translate(0,0) scale(1) } 33% { transform: translate(20px,-30px) scale(1.04) } 66% { transform: translate(-10px,15px) scale(.97) } }
 
    /* Scroll caret blink */
    @keyframes caretBlink { 0%,100% { opacity: 1 } 50% { opacity:0 } }
 
    /* Stagger util */
    .stagger-1 { transition-delay: 0ms !important; }
    .stagger-2 { transition-delay: 80ms !important; }
    .stagger-3 { transition-delay: 160ms !important; }
    .stagger-4 { transition-delay: 240ms !important; }

    @media (max-width: 960px) {
      .page-shell { padding: 0 28px; }
      .section-pad { padding-top: 88px !important; padding-bottom: 88px !important; }
      .work-header,
      .about-grid,
      .experience-grid,
      .featured-card {
        grid-template-columns: 1fr !important;
      }
      .work-header { gap: 28px !important; margin-bottom: 48px !important; }
      .skills-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
      .experience-grid { gap: 48px !important; }
      .education-card { position: static !important; }
      .about-grid { gap: 56px !important; }
      .featured-card { border-radius: 18px !important; }
      .featured-card.is-flipped .visual-pane { order: -1; }
      .visual-pane { min-height: 260px !important; }
      .content-pane { padding: 36px 30px !important; }
      .metrics-row { gap: 18px !important; flex-wrap: wrap !important; }
    }

    @media (max-width: 720px) {
      .page-shell { padding: 0 20px; }
      nav { padding-left: 20px !important; padding-right: 20px !important; }
      .desktop-nav { display: none !important; }
      .hamburger { display: flex !important; }
      .nav-contact { display: none !important; }
      .section-pad { padding-top: 72px !important; padding-bottom: 72px !important; }
      .hero-section { min-height: 92svh !important; padding-top: 88px !important; }
      .hero-heading { font-size: clamp(46px, 16vw, 76px) !important; line-height: 0.94 !important; }
      .hero-copy { font-size: 16px !important; margin-bottom: 36px !important; }
      .hero-cta { width: 100%; justify-content: stretch; }
      .hero-cta a { flex: 1 1 150px; text-align: center; padding-left: 18px !important; padding-right: 18px !important; }
      .section-title { font-size: clamp(34px, 12vw, 48px) !important; }
      .section-header { margin-bottom: 48px !important; }
      .work-grid { grid-template-columns: 1fr !important; }
      .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
      .card-stack { height: auto !important; display: grid; gap: 14px; }
      .card-stack > div {
        position: static !important;
        width: auto !important;
        transform: none !important;
      }
      .project-card-small { border-radius: 16px !important; padding: 28px 22px !important; }
      .contact-email { overflow-wrap: anywhere; }
    }

    @media (max-width: 480px) {
      .page-shell { padding: 0 18px; }
      .stats-grid { grid-template-columns: 1fr !important; }
      .content-pane { padding: 30px 22px !important; }
      .visual-pane { min-height: 210px !important; }
      .visual-pane span { font-size: 58px !important; }
      .mobile-drawer { padding: 40px 24px !important; }
      .mobile-drawer a { font-size: 34px !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.01ms !important;
      }
      body { cursor: auto; }
      button { cursor: pointer; }
      body::after { display: none; }
      .cursor-dot { display: none; }
      .marquee-track { animation: none; }
      .scroll-scene {
        opacity: 1 !important;
        transform: none !important;
      }
    }
  `;
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

export default GlobalStyles;
