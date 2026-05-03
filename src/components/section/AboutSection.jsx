import { PERSONAL } from "../../constants";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

function AboutSection() {
  const stats = [
    { value: "3+", label: "Years building" },
    { value: "10+", label: "Projects shipped" },
    { value: "25M+", label: "Users reached" },
    { value: "5", label: "Countries" },
  ];

  const cards = [
    {
      emoji: "🧠",
      title: "System thinker first",
      body: "Before I write a line of code I ask: what breaks at scale? I design the data flow, cache layer, and failure modes on paper — then build.",
      position: { top: 0, right: 0, transform: "rotate(3deg)", width: 280 },
    },
    {
      emoji: "🎁",
      title: "I own the whole problem",
      body: "The Personalization Widget started as a brief and ended as a full product — system design, NestJS API, drag-and-drop canvas, admin panel, S3 pipeline. I don't hand off, I ship.",
      position: { top: 90, left: 0, transform: "rotate(-2.5deg)", width: 250 },
    },
    {
      emoji: "⚡",
      title: "Speed is a feature",
      body: "A 40% LCP improvement isn't a metric — it's a user who didn't leave. Performance work is product work.",
      position: {
        bottom: 0,
        right: 20,
        transform: "rotate(-1deg)",
        width: 290,
      },
    },
  ];

  return (
    <section
      id="about"
      className="section-pad"
      style={{ padding: "120px 0", background: "var(--bg2)" }}
    >
      <div className="page-shell">
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div>
            <SectionHeader label="About" title="A bit about me" />
            <Reveal>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                I'm{" "}
                <strong style={{ color: "var(--text1)", fontWeight: 600 }}>
                  {PERSONAL.name}
                </strong>
                , a {PERSONAL.role} based in {PERSONAL.location}. {PERSONAL.bio}
              </p>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--text2)",
                  lineHeight: 1.8,
                  marginBottom: 20,
                }}
              >
                When I'm not writing code, I obsess over typography, design
                systems, and random side projects that teach me things even if
                they don't ship.
              </p>
              <p
                style={{ fontSize: 17, color: "var(--text2)", lineHeight: 1.8 }}
              >
                I believe software should be{" "}
                <strong style={{ color: "var(--text1)" }}>
                  fast, accessible, and a pleasure to use
                </strong>
                . Not two of the three — all three.
              </p>
            </Reveal>
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginTop: 44,
              }}
            >
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div
                    style={{
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      borderRadius: 16,
                      padding: "24px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 38,
                        fontWeight: 900,
                        letterSpacing: "-0.04em",
                        color: "var(--text1)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text2)",
                        marginTop: 6,
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Decorative card stack */}
          <Reveal direction="scale" delay={150}>
            <div
              className="card-stack"
              style={{ position: "relative", height: 460 }}
            >
              {cards.map((c, i) => {
                return (
                  <div
                    key={c.title}
                    style={{
                      position: "absolute",
                      ...c.position,
                      background: "var(--bg3)",
                      border: "1px solid var(--border)",
                      borderRadius: 20,
                      padding: 24,
                      boxShadow: "var(--shadow)",
                      transition: "transform 0.4s var(--ease-expo)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        c.position.transform + " translateY(-6px) scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = c.position.transform;
                    }}
                  >
                    <div style={{ fontSize: 28, marginBottom: 12 }}>
                      {c.emoji}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "var(--text1)",
                        marginBottom: 6,
                      }}
                    >
                      {c.title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "var(--text2)",
                        lineHeight: 1.55,
                      }}
                    >
                      {c.body}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
