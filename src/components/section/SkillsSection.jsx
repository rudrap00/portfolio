import { SKILLS, TOOLS } from "../../constants";
import useInView from "../../hooks/use-inView";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";
import SkillBar from "../ui/SkillBar";
import Tag from "../ui/Tag";

function SkillsSection() {
  const [ref, animate] = useInView({ threshold: 0.05 });
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ padding: "120px 0", background: "var(--bg2)" }}
    >
      <div className="page-shell">
        <SectionHeader
          label="Craft"
          title="What I work with"
          subtitle="Tools, languages, and systems I reach for when solving hard problems."
        />
        <div
          ref={ref}
          className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px 80px",
          }}
        >
          {SKILLS.map((cat, ci) => (
            <Reveal key={cat.category} delay={ci * 100}>
              <div
                style={{
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: "var(--accent)", fontSize: 16 }}>
                  {cat.icon}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                    color: "var(--text3)",
                  }}
                >
                  {cat.category}
                </span>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  delay={ci * 100 + si * 60}
                  animate={animate}
                />
              ))}
            </Reveal>
          ))}
        </div>

        {/* Tools marquee row */}
        <Reveal delay={200}>
          <div
            style={{
              marginTop: 60,
              paddingTop: 40,
              borderTop: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text3)",
                marginBottom: 16,
              }}
            >
              Also familiar with
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {TOOLS.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default SkillsSection;
