import { useEffect, useRef, useState } from "react";

function useInView({
  root = null,
  rootMargin = "0px 0px -60px 0px",
  threshold = 0.1,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { root, rootMargin, threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [root, rootMargin, threshold]);

  return [ref, inView];
}

export default useInView;
