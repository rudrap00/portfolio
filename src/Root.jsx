import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

export default function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
