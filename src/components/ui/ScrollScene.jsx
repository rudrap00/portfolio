import { useEffect, useRef } from "react";
import useReducedMotion from "../../hooks/use-reduced-motion";

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ScrollScene({ children, className = "" }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const el = ref.current;
    let raf;

    const update = () => {
      raf = undefined;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const progress = clamp(
        (viewport - rect.top) / (viewport + rect.height),
        0,
        1,
      );
      const scale = 0.955 + progress * 0.045;
      const translate = (1 - progress) * 28;
      const opacity = 0.72 + progress * 0.28;

      el.style.opacity = opacity.toFixed(3);
      el.style.transform = `translate3d(0, ${translate.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`;
    };

    const requestUpdate = () => {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className={`scroll-scene ${className}`}
      style={{
        opacity: reducedMotion ? 1 : 0.72,
        transform: reducedMotion
          ? "none"
          : "translate3d(0, 28px, 0) scale(0.955)",
      }}
    >
      {children}
    </div>
  );
}

export default ScrollScene;
