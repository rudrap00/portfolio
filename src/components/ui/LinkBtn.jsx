function LinkBtn({ href, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "8px 18px",
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 600,
        background: primary ? "var(--text1)" : "transparent",
        color: primary ? "var(--bg)" : "var(--text2)",
        border: primary ? "none" : "1px solid var(--border2)",
        transition: "all .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = ".8";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "none";
      }}
    >
      {children}
    </a>
  );
}

export default LinkBtn;
