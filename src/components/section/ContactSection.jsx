import { PERSONAL } from "../../constants";
import Reveal from "../ui/Reveal";

function ContactSection() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        padding: "140px 0",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, var(--accent2), transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="page-shell"
        style={{
          maxWidth: 680,
          position: "relative",
          zIndex: 1,
        }}
      >
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
              marginBottom: 24,
            }}
          >
            <span
              style={{ width: 20, height: 1, background: "var(--accent)" }}
            />
            Contact
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px,6vw,72px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              marginBottom: 28,
              color: "var(--text1)",
            }}
          >
            Let's build
            <br />
            something
            <br />
            <em style={{ color: "var(--accent)" }}>great</em>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text2)",
              lineHeight: 1.7,
              marginBottom: 48,
            }}
          >
            I'm {PERSONAL.availability.toLowerCase()}. Whether it's a product
            idea, a collaboration, or just a hello — my inbox is open.
          </p>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="contact-email"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(22px,3.5vw,40px)",
              fontWeight: 700,
              color: "var(--text1)",
              letterSpacing: "-0.02em",
              marginBottom: 48,
              position: "relative",
              transition: "color .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text1)";
            }}
          >
            {PERSONAL.email}
          </a>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {Object.entries(PERSONAL.social).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 22px",
                  borderRadius: 999,
                  border: "1px solid var(--border)",
                  fontSize: 13.5,
                  fontWeight: 600,
                  color: "var(--text2)",
                  textTransform: "capitalize",
                  transition: "all .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--text1)";
                  e.currentTarget.style.borderColor = "var(--border2)";
                  e.currentTarget.style.background = "var(--accent3)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text2)";
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "none";
                }}
              >
                {key} ↗
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
