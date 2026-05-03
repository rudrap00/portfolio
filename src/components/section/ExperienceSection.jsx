import { EDUCATION, EXPERIENCE } from "../../constants";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import Tag from "../ui/Tag";

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-pad"
      style={{ padding: "120px 0" }}
    >
      <div className="page-shell">
        <SectionHeader
          label="Career"
          title="Where I've been"
          subtitle="A timeline of the teams, companies, and problems I've worked on."
        />
        <div
          className="experience-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 360px",
            gap: "0 80px",
            alignItems: "start",
          }}
        >
          {/* Timeline */}
          <div style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                top: 10,
                bottom: 0,
                width: 1,
                background: `linear-gradient(to bottom, var(--accent), transparent)`,
              }}
            />
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 120} direction="left">
                <div
                  style={{
                    paddingLeft: 36,
                    paddingBottom: 56,
                    position: "relative",
                  }}
                >
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: -4,
                      top: 8,
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      border: "2px solid var(--bg)",
                      boxShadow: `0 0 0 4px var(--accent2)`,
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      marginBottom: 6,
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        fontFamily: "var(--font-mono)",
                        color: "var(--text3)",
                      }}
                    >
                      {exp.period}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        padding: "2px 8px",
                        background: "var(--accent3)",
                        border: "1px solid var(--border)",
                        borderRadius: 999,
                        color: "var(--text3)",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 26,
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: "var(--text1)",
                      marginBottom: 2,
                    }}
                  >
                    {exp.company}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--accent)",
                      fontWeight: 600,
                      marginBottom: 12,
                    }}
                  >
                    {exp.role}
                  </p>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--text2)",
                      lineHeight: 1.72,
                      marginBottom: 16,
                    }}
                  >
                    {exp.description}
                  </p>
                  <div
                    style={{
                      marginBottom: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    {exp.highlights.map((h) => (
                      <div
                        key={h}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 13.5,
                          color: "var(--text2)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                          →
                        </span>
                        {h}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {exp.tags.map((t) => (
                      <Tag key={t} small>
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Education */}
          <Reveal delay={200} direction="right">
            <div
              className="education-card"
              style={{ position: "sticky", top: 100 }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text3)",
                  marginBottom: 20,
                }}
              >
                Education
              </p>
              {EDUCATION.map((edu) => (
                <div
                  key={edu.institution}
                  style={{
                    background: "var(--bg3)",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    padding: 32,
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      color: "var(--text1)",
                      marginBottom: 4,
                    }}
                  >
                    {edu.institution}
                  </h4>
                  <p
                    style={{
                      fontSize: 13.5,
                      color: "var(--text2)",
                      marginBottom: 10,
                    }}
                  >
                    {edu.degree}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      fontSize: 11,
                      fontFamily: "var(--font-mono)",
                      color: "var(--text3)",
                      marginBottom: 16,
                    }}
                  >
                    <span>{edu.period}</span>
                  </div>
                  {edu.gpa && (
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        background: "var(--accent2)",
                        border: "1px solid var(--accent)",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 700,
                        color: "var(--accent)",
                        marginBottom: 16,
                      }}
                    >
                      GPA {edu.gpa}
                    </span>
                  )}
                  <div
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    {edu.highlights.map((h) => (
                      <div
                        key={h}
                        style={{
                          display: "flex",
                          gap: 10,
                          fontSize: 13,
                          color: "var(--text2)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                          →
                        </span>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
