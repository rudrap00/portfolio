import { useEffect, useRef, useState } from "react";
import useVisualEffectsEnabled from "../../hooks/use-visual-effects-enabled";

function CursorDot() {
  const ref = useRef(null);
  const enabled = useVisualEffectsEnabled();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const dot = ref.current;
    if (!dot) return;

    const onMove = (e) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };
    const onOver = (e) => {
      if (e.target.closest("a,button,[role=button]")) {
        setHover(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest("a,button,[role=button]")) {
        setHover(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`cursor-dot${hover ? " hover" : ""}`}
      aria-hidden
    />
  );
}

export default CursorDot;
