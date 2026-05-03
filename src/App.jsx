import { lazy, Suspense, useEffect, useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import ParticleCanvas from "./components/ParticleCanvas";
import Hero from "./components/section/Hero";
import MarqueeStrip from "./components/section/MarqueeStrip";
import CursorDot from "./components/ui/CursorDot";
import LazyMount from "./components/ui/LazyMount";
import Loader from "./components/ui/Loader";
import ScrollScene from "./components/ui/ScrollScene";
import { useTheme } from "./context/ThemeContext";

const WorkSection = lazy(() => import("./components/section/WorkSection"));
const SkillsSection = lazy(() => import("./components/section/SkillsSection"));
const ExperienceSection = lazy(
  () => import("./components/section/ExperienceSection"),
);
const AboutSection = lazy(() => import("./components/section/AboutSection"));
const ContactSection = lazy(
  () => import("./components/section/ContactSection"),
);
const Footer = lazy(() => import("./components/section/Footer"));

function App() {
  const { theme } = useTheme();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <>
      <GlobalStyles theme={theme} />
      <a className="skip" href="#main">
        Skip to content asadafasfaf
      </a>
      <Loader done={loaded} />
      <CursorDot />
      <ParticleCanvas />
      <Navbar />
      <main id="main">
        <Hero />
        <MarqueeStrip />
        <ScrollScene>
          <LazyMount height={700}>
            <WorkSection />
          </LazyMount>
        </ScrollScene>
        <ScrollScene>
          <LazyMount>
            <SkillsSection />
          </LazyMount>
        </ScrollScene>
        <ScrollScene>
          <LazyMount>
            <ExperienceSection />
          </LazyMount>
        </ScrollScene>
        <ScrollScene>
          <LazyMount>
            <AboutSection />
          </LazyMount>
        </ScrollScene>
        <ScrollScene>
          <LazyMount>
            <ContactSection />
          </LazyMount>
        </ScrollScene>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
