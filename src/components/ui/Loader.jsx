import { PERSONAL } from "../../constants/personal";

function Loader({ done }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 9000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: done ? 0 : 1,
        visibility: done ? "hidden" : "visible",
        transition: "opacity 0.7s ease 0.1s, visibility 0.7s ease 0.1s",
      }}
      aria-hidden={done}
    >
      <div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--text1)",
            marginBottom: 8,
          }}
        >
          {PERSONAL.name}
        </div>
        <div
          style={{
            height: 2,
            background: "var(--accent)",
            borderRadius: 1,
            transform: "scaleX(0)",
            transformOrigin: "left",
            animation: done
              ? "none"
              : "loaderLine 0.9s var(--ease-expo) forwards",
          }}
        />
      </div>
    </div>
  );
}

export default Loader;
