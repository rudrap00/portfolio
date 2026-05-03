import useInView from "../../hooks/use-inView";
import useReducedMotion from "../../hooks/use-reduced-motion";

function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView();
  const reducedMotion = useReducedMotion();
  const transforms = {
    up: "translateY(44px) scale(0.985)",
    left: "translateX(-40px) scale(0.985)",
    right: "translateX(40px) scale(0.985)",
    scale: "scale(0.94)",
    none: "none",
  };
  const hidden = reducedMotion ? "none" : transforms[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: reducedMotion || inView ? 1 : 0,
        filter: reducedMotion || inView ? "blur(0)" : "blur(8px)",
        transform: reducedMotion || inView ? "none" : hidden,
        transition: `opacity 0.9s var(--ease-apple) ${delay}ms, transform 0.9s var(--ease-apple) ${delay}ms, filter 0.9s var(--ease-apple) ${delay}ms`,
        willChange: reducedMotion || inView ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;
