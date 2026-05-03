function Tag({ children, small }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: small ? "3px 10px" : "4px 12px",
        background: "var(--accent3)",
        border: "1px solid var(--border2)",
        borderRadius: 999,
        fontSize: small ? 11 : 12.5,
        fontWeight: 500,
        color: "var(--text2)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {children}
    </span>
  );
}

export default Tag;
