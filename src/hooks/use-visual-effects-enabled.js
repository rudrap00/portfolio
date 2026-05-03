import { useEffect, useState } from "react";
import useReducedMotion from "./use-reduced-motion";

function useVisualEffectsEnabled() {
  const reducedMotion = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    const update = () => setFinePointer(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return finePointer && !reducedMotion;
}

export default useVisualEffectsEnabled;
