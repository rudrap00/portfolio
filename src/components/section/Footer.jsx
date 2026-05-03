import { PERSONAL } from "../../constants/personal";

function Footer() {
  return (
    <footer
      style={{ padding: "36px 0", borderTop: "1px solid var(--border)" }}
      role="contentinfo"
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 36px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 13, color: "var(--text3)" }}>
          {PERSONAL.footerNote}
        </p>
        <p
          style={{
            fontSize: 11,
            fontFamily: "var(--font-mono)",
            color: "var(--text3)",
          }}
        >
          © {new Date().getFullYear()} {PERSONAL.name} · Built from scratch
        </p>
      </div>
    </footer>
  );
}

export default Footer;
