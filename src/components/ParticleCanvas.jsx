import { useEffect, useRef } from "react";
import useMousePosition from "../hooks/use-mousePosition";
import useVisualEffectsEnabled from "../hooks/use-visual-effects-enabled";

const MAX_PARTICLES = 80;
const MAX_DPR = 1.5;

function ParticleCanvas() {
  const canvasRef = useRef(null);
  const enabled = useVisualEffectsEnabled();
  const mouse = useMousePosition(enabled);
  const particles = useRef([]);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor(x, y) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 20 + Math.random() * 30;
        this.x = x + Math.cos(angle) * radius;
        this.y = y + Math.sin(angle) * radius;
        this.ox = this.x;
        this.oy = this.y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1;
        this.decay = 0.012 + Math.random() * 0.015;
        this.size = 1.5 + Math.random() * 2.5;
        this.hue = 40 + Math.random() * 30; // warm gold
      }
      update() {
        this.vx *= 0.97;
        this.vy *= 0.97;
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
      }
      draw(ctx) {
        const radius = Math.max(0, this.size * this.life);

        if (radius === 0) {
          return;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life) * 0.7;
        ctx.fillStyle = `hsl(${this.hue}, 80%, 70%)`;
        ctx.shadowColor = `hsl(${this.hue}, 90%, 60%)`;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Spawn particles on movement
      const dx = mouse.raw.current.x - mouse.smooth.current.x;
      const dy = mouse.raw.current.y - mouse.smooth.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      if (
        particles.current.length < MAX_PARTICLES &&
        speed > 1.5 &&
        frame % 2 === 0
      ) {
        for (let i = 0; i < 2; i++) {
          particles.current.push(
            new Particle(mouse.smooth.current.x, mouse.smooth.current.y),
          );
        }
      }

      // Draw ring around cursor
      const rx = mouse.smooth.current.x;
      const ry = mouse.smooth.current.y;
      ctx.save();
      ctx.strokeStyle = "rgba(232,213,176,0.25)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(rx, ry, 22, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = "rgba(232,213,176,0.1)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(rx, ry, 38, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Update & draw particles
      particles.current.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      particles.current = particles.current.filter((p) => p.life > 0);

      raf = requestAnimationFrame(animate);
    };
    const start = () => {
      if (!raf) {
        raf = requestAnimationFrame(animate);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = undefined;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    const onVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("resize", resize);
    };
  }, [enabled, mouse]);

  if (!enabled) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
      }}
      aria-hidden="true"
    />
  );
}

export default ParticleCanvas;
