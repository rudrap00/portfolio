import { useEffect, useRef } from "react";

function useMousePosition(enabled = true) {
  const pos = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const raf = useRef();

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    const tick = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.1;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  return { raw: pos, smooth };
}

export default useMousePosition;
