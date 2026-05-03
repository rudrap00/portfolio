import { createContext, useCallback, useContext, useState } from "react";

const ThemeCtx = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("pf-theme") || "dark"
      : "dark",
  );
  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      localStorage.setItem("pf-theme", next);
      return next;
    });
  }, []);
  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>
  );
}
const useTheme = () => useContext(ThemeCtx);

export { ThemeProvider, useTheme };
