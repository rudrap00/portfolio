function SkillBar({ name, level, delay, animate }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 8,
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text1)" }}>
          {name}
        </span>
        <span
          style={{
            fontSize: 11,
            fontFamily: "var(--font-mono)",
            color: "var(--text3)",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: 3,
          background: "var(--border)",
          borderRadius: 2,
          overflow: "hidden",
        }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div
          style={{
            height: "100%",
            background: "linear-gradient(90deg, var(--accent), var(--text1))",
            borderRadius: 2,
            width: `${level}%`,
            transform: animate ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: `transform 1.3s var(--ease-expo) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default SkillBar;
