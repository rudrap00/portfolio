import { PROJECTS } from "../../constants";
import ProjectCardFeatured from "../ui/ProjectCardFeatured";
import ProjectCardSmall from "../ui/ProjectCardSmall";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

function WorkSection() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="work" className="section-pad" style={{ padding: "120px 0" }}>
      <div className="page-shell">
        <div
          className="work-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 32,
            marginBottom: 72,
          }}
        >
          <SectionHeader
            label="Selected Work"
            title="Projects that<br><em>ship</em>"
          />
          <Reveal delay={100}>
            <p
              style={{
                fontSize: 17,
                color: "var(--text2)",
                maxWidth: 420,
                lineHeight: 1.7,
              }}
            >
              A curated selection of products I've designed, built, and launched
              — from side projects to production systems.
            </p>
          </Reveal>
        </div>
        {featured.map((p, i) => (
          <ProjectCardFeatured key={p.id} project={p} flip={i % 2 === 1} />
        ))}
        {rest.length > 0 && (
          <div
            className="work-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
              marginTop: 24,
            }}
          >
            {rest.map((p, i) => (
              <ProjectCardSmall key={p.id} project={p} delay={i * 100} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default WorkSection;
