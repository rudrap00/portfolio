import { TOOLS } from "../../constants";

function MarqueeStrip() {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg2)",
        overflow: "hidden",
        padding: "0",
      }}
      aria-hidden
    >
      <div
        className="marquee-track"
        style={{ display: "flex", width: "max-content" }}
      >
        {[0, 1].map((rep) => (
          <div
            key={rep}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 0",
              whiteSpace: "nowrap",
            }}
          >
            {TOOLS.map((t, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "0 28px",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "var(--text3)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {t}
                <span style={{ color: "var(--border2)", fontSize: 10 }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;
