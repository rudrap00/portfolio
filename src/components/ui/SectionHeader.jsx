import Reveal from "./Reveal";

function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="section-header" style={{ marginBottom: 72 }}>
      <Reveal>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 20,
          }}
        >
          <span
            style={{
              width: 20,
              height: 1,
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          {label}
        </span>
        <h2
          className="section-title"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px,5vw,60px)",
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.0,
            color: "var(--text1)",
            marginBottom: 16,
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p
            style={{
              fontSize: 18,
              color: "var(--text2)",
              maxWidth: 540,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        )}
      </Reveal>
    </div>
  );
}

export default SectionHeader;
