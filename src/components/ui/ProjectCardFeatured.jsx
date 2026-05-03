import useInView from "../../hooks/use-inView";
import LinkBtn from "./LinkBtn";
import Tag from "./Tag";

function ProjectCardFeatured({ project, flip }) {
  const [ref, inView] = useInView();
  const statusColor = project.status === "Live" ? "#4ade80" : "#fbbf24";

  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    background: "var(--bg3)",
    border: "1px solid var(--border)",
    borderRadius: 24,
    overflow: "hidden",
    boxShadow: "var(--shadow)",
    opacity: inView ? 1 : 0,
    transform: inView ? "none" : "translateY(50px)",
    transition:
      "opacity 0.9s var(--ease-expo), transform 0.9s var(--ease-expo)",
    marginBottom: 24,
  };

  return (
    <article
      ref={ref}
      className={`featured-card apple-card${flip ? " is-flipped" : ""}`}
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "var(--shadow), var(--glow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "var(--shadow)";
      }}
    >
      {!flip && <VisualPane project={project} />}
      <ContentPane project={project} statusColor={statusColor} />
      {flip && <VisualPane project={project} />}
    </article>
  );
}

function VisualPane({ project }) {
  return (
    <div
      className="visual-pane"
      style={{
        position: "relative",
        minHeight: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(${project.gradientDark})`,
        overflow: "hidden",
      }}
    >
      {/* Grid overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
      <span
        style={{
          fontSize: 80,
          filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))",
          position: "relative",
          zIndex: 1,
        }}
        aria-hidden
      >
        {project.icon}
      </span>
    </div>
  );
}

function ContentPane({ project, statusColor }) {
  return (
    <div
      className="content-pane"
      style={{
        padding: "52px 48px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {project.category}
        </span>
        <span style={{ color: "var(--border2)", fontSize: 10 }}>·</span>
        <span
          style={{
            fontSize: 11,
            color: "var(--text3)",
            fontFamily: "var(--font-mono)",
          }}
        >
          {project.year}
        </span>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            padding: "3px 10px",
            background: "var(--accent3)",
            border: "1px solid var(--border2)",
            borderRadius: 999,
            fontSize: 10,
            fontWeight: 700,
            color: "var(--accent)",
            marginLeft: "auto",
          }}
        >
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: statusColor,
            }}
          />
          {project.status}
        </span>
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 34,
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
          marginBottom: 16,
        }}
      >
        {project.subtitle}
      </p>
      <p
        style={{
          fontSize: 15,
          color: "var(--text2)",
          lineHeight: 1.72,
          marginBottom: 28,
        }}
      >
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && (
        <div
          className="metrics-row"
          style={{
            display: "flex",
            gap: 28,
            marginBottom: 28,
            paddingBottom: 28,
            borderBottom: "1px solid var(--border)",
          }}
        >
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--text1)",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "var(--text3)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}
      >
        {project.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        {project.links.live && (
          <LinkBtn href={project.links.live} primary>
            Visit site ↗
          </LinkBtn>
        )}
        {project.links.github && (
          <LinkBtn href={project.links.github}>GitHub ↗</LinkBtn>
        )}
      </div>
    </div>
  );
}

export default ProjectCardFeatured;
