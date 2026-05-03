import { useEffect, useState } from "react";
import { PERSONAL } from "../../constants/personal";
import useReducedMotion from "../../hooks/use-reduced-motion";

function Hero() {
  const reducedMotion = useReducedMotion();
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    if (reducedMotion) return;

    let timeoutId;
    const id = setInterval(() => {
      setWordVisible(false);
      timeoutId = setTimeout(() => {
        setWordIdx((i) => (i + 1) % PERSONAL.heroWords.length);
        setWordVisible(true);
      }, 350);
    }, 2600);

    return () => {
      clearInterval(id);
      clearTimeout(timeoutId);
    };
  }, [reducedMotion]);

  const orbStyle = (w, h, top, right, bottom, left, delay, color) => ({
    position: "absolute",
    width: w,
    height: h,
    borderRadius: "50%",
    background: color,
    filter: "blur(90px)",
    pointerEvents: "none",
    top,
    right,
    bottom,
    left,
    animation: reducedMotion
      ? "none"
      : `orbFloat 9s ease-in-out ${delay}s infinite`,
  });

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 64,
        paddingBottom: 64,
        position: "relative",
        overflow: "hidden",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% -5%, var(--accent2) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 65%)",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, black 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={orbStyle(
          440,
          440,
          "8%",
          "-6%",
          undefined,
          undefined,
          0,
          "var(--accent2)",
        )}
      />
      <div
        aria-hidden
        style={orbStyle(
          300,
          300,
          undefined,
          undefined,
          "12%",
          "5%",
          3,
          "rgba(99,102,241,0.06)",
        )}
      />

      <div
        className="page-shell"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 40,
            opacity: 0,
            animation: reducedMotion
              ? "none"
              : "fadeUp 0.8s var(--ease-expo) 0.2s forwards",
            ...(reducedMotion ? { opacity: 1 } : {}),
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#4ade80",
              boxShadow: "0 0 0 3px rgba(74,222,128,.2)",
              animation: reducedMotion ? "none" : "pulse 2.5s infinite",
              display: "block",
            }}
            aria-hidden
          />
          <span
            style={{ fontSize: 13, color: "var(--text2)", fontWeight: 500 }}
          >
            {PERSONAL.availability}
          </span>
          <span
            style={{
              width: 1,
              height: 14,
              background: "var(--border2)",
              display: "inline-block",
              margin: "0 4px",
            }}
          />
          <span style={{ fontSize: 13, color: "var(--text3)" }}>
            {PERSONAL.location}
          </span>
        </div>

        {/* Heading */}
        <h1
          id="hero-heading"
          className="hero-heading"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(52px, 9vw, 128px)",
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            marginBottom: 36,
          }}
        >
          {["Full Stack", null, PERSONAL.firstName].map((line, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  animation: reducedMotion
                    ? "none"
                    : `slideUp 0.9s var(--ease-expo) ${0.3 + i * 0.15}s both`,
                }}
              >
                {line === null ? (
                  <span
                    style={{
                      color: wordVisible ? "var(--accent)" : "transparent",
                      fontStyle: "italic",
                      transition: "all color 0.3s ease 0.35s var(--ease-expo)",
                      display: "inline-block",
                      transform: wordVisible
                        ? "translateY(0)"
                        : "translateY(-8px)",
                    }}
                  >
                    {PERSONAL.heroWords[wordIdx]}
                  </span>
                ) : i === 2 ? (
                  <span
                    style={{
                      WebkitTextStroke: "1.5px var(--text1)",
                      color: "transparent",
                      fontStyle: "italic",
                    }}
                  >
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            </span>
          ))}
        </h1>

        {/* Bio */}
        <p
          className="hero-copy"
          style={{
            fontSize: "clamp(16px,1.8vw,20px)",
            color: "var(--text2)",
            maxWidth: 520,
            lineHeight: 1.72,
            marginBottom: 52,
            opacity: 0,
            animation: reducedMotion
              ? "none"
              : "fadeUp 0.8s var(--ease-expo) 0.75s forwards",
            ...(reducedMotion ? { opacity: 1 } : {}),
          }}
        >
          {PERSONAL.bio}
        </p>

        {/* CTAs */}
        <div
          className="hero-cta"
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            opacity: 0,
            animation: reducedMotion
              ? "none"
              : "fadeUp 0.8s var(--ease-expo) 0.9s forwards",
            ...(reducedMotion ? { opacity: 1 } : {}),
          }}
        >
          <a
            href="#work"
            style={{
              padding: "14px 32px",
              borderRadius: 12,
              background: "var(--text1)",
              color: "var(--bg)",
              fontWeight: 700,
              fontSize: 15,
              fontFamily: "var(--font-display)",
              transition: "opacity .2s, transform .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = ".85";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "none";
            }}
          >
            View work ↓
          </a>
          <a
            href={PERSONAL.resumeUrl}
            style={{
              padding: "14px 32px",
              borderRadius: 12,
              border: "1px solid var(--border2)",
              color: "var(--text1)",
              fontWeight: 600,
              fontSize: 15,
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent3)";
              e.currentTarget.style.borderColor = "var(--text2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border2)";
            }}
          >
            Resume ↗
          </a>
        </div>

        {/* Social */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 48,
            opacity: 0,
            animation: reducedMotion
              ? "none"
              : "fadeUp 0.8s var(--ease-expo) 1.05s forwards",
            ...(reducedMotion ? { opacity: 1 } : {}),
          }}
        >
          {Object.entries(PERSONAL.social).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={key}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                color: "var(--text3)",
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                transition: "all .2s",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text1)";
                e.currentTarget.style.borderColor = "var(--border2)";
                e.currentTarget.style.background = "var(--accent3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text3)";
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {key[0].toUpperCase()}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
          opacity: 0,
          animation: reducedMotion ? "none" : "fadeUp 1s ease 1.5s forwards",
          ...(reducedMotion ? { opacity: 1 } : {}),
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--text3)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 44,
            background: `linear-gradient(to bottom, var(--border2), transparent)`,
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
