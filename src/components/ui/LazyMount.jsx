import { Suspense } from "react";
import useInView from "../../hooks/use-inView";

function LazyMount({ children, fallback = null, height = 360 }) {
  const [ref, inView] = useInView({ rootMargin: "360px 0px" });

  return (
    <div
      ref={ref}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: `${height}px`,
        minHeight: inView ? undefined : height,
      }}
    >
      {inView ? <Suspense fallback={fallback}>{children}</Suspense> : null}
    </div>
  );
}

export default LazyMount;
