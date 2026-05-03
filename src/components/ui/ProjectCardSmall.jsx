import useInView from "../../hooks/use-inView";
import LinkBtn from "./LinkBtn";
import Tag from "./Tag";

function ProjectCardSmall({ project, delay }) {
  const [ref, inView] = useInView();
  return (
    <article
      ref={ref}
      className="project-card-small apple-card"
      style={{
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        borderRadius: 20,
        padding: "36px 32px",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
        transition: `opacity .8s var(--ease-expo) ${delay}ms, transform .8s var(--ease-expo) ${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.borderColor = "var(--border2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.borderColor = "var(--border)";
      }}
    >
      <div style={{ fontSize: 40, marginBottom: 24 }} aria-hidden>
        {project.icon}
      </div>
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 12,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {project.category}
        </span>
        <span style={{ color: "var(--border2)", fontSize: 9 }}>·</span>
        <span
          style={{
            fontSize: 10,
            color: "var(--text3)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {project.year}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 24,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "var(--text1)",
          marginBottom: 4,
        }}
      >
        {project.title}
      </h3>
      <p
        style={{
          fontSize: 13,
          color: "var(--accent)",
          fontStyle: "italic",
          marginBottom: 12,
        }}
      >
        {project.subtitle}
      </p>
      <p
        style={{
          fontSize: 14,
          color: "var(--text2)",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: 20,
        }}
      >
        {project.description}
      </p>
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}
      >
        {project.tags.map((t) => (
          <Tag key={t} small>
            {t}
          </Tag>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        {project.links.live && (
          <LinkBtn href={project.links.live} primary>
            Visit ↗
          </LinkBtn>
        )}
        {project.links.github && (
          <LinkBtn href={project.links.github}>GitHub ↗</LinkBtn>
        )}
      </div>
    </article>
  );
}

export default ProjectCardSmall;
