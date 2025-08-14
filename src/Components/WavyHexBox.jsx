import React, { useEffect, useRef } from "react";

export default function WavyHexBox() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function fitCanvas() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    fitCanvas();
    window.addEventListener("resize", fitCanvas);

    const prefersReduced = matchMedia("(prefers-reduced-motion: reduce)");
    let start = performance.now();

    // Wavy hexagon parameters
    const waves = [
      { amp: 8, freq: 2, speed: 0.8, phase: 0 },
      { amp: 4, freq: 5, speed: -1.2, phase: 1.2 },
    ];

    function getHexPoints(cx, cy, radius) {
      const points = [];
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6; // flat-top hex
        points.push({
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
        });
      }
      return points;
    }

    function draw(t) {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const baseR = Math.min(width, height) * 0.38;

      const hexPoints = getHexPoints(cx, cy, baseR);
      const wavyPoints = [];

      const segmentsPerEdge = 20;
      hexPoints.forEach((p, i) => {
        const next = hexPoints[(i + 1) % hexPoints.length];
        for (let j = 0; j <= segmentsPerEdge; j++) {
          const tEdge = j / segmentsPerEdge;
          const x = p.x + (next.x - p.x) * tEdge;
          const y = p.y + (next.y - p.y) * tEdge;
          const nx = y - cy;
          const ny = -(x - cx);
          const len = Math.sqrt(nx * nx + ny * ny);
          const nxNorm = nx / len;
          const nyNorm = ny / len;

          let disp = 0;
          for (const w of waves) {
            disp +=
              w.amp *
              Math.sin(t * w.speed + tEdge * Math.PI * w.freq + w.phase);
          }

          wavyPoints.push({
            x: x + nxNorm * disp,
            y: y + nyNorm * disp,
          });
        }
      });

      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#60a5fa");
      grad.addColorStop(1, "#a78bfa");

      ctx.beginPath();
      wavyPoints.forEach((pt, idx) => {
        if (idx === 0) ctx.moveTo(pt.x, pt.y);
        else ctx.lineTo(pt.x, pt.y);
      });
      ctx.closePath();

      ctx.fillStyle = grad;
      ctx.shadowColor = "rgba(96,165,250,0.4)";
      ctx.shadowBlur = 25;
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.stroke();
    }

    function loop(now) {
      if (prefersReduced.matches) {
        draw(0);
        return;
      }
      const t = (now - start) / 1000;
      draw(t);
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", fitCanvas);
    };
  }, []);

  const styles = {
    shell: {
      position: "relative",
      width: "min(900px, 92vw)",
      aspectRatio: "16 / 10",
      margin: "2rem auto",
      display: "grid",
      placeItems: "center",
    },
    canvas: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      display: "block",
    },
    content: {
      position: "relative",
      zIndex: 1,
      textAlign: "center",
      background: "rgba(255,255,255,.25)",
      backdropFilter: "blur(10px)",
      padding: "1.5rem 2rem",
      borderRadius: "1rem",
      color: "#0b1220",
      fontFamily: "sans-serif",
    },
    button: {
      marginTop: "0.8rem",
      padding: "0.7rem 1.2rem",
      border: 0,
      borderRadius: "0.8rem",
      background: "#111827",
      color: "white",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.shell}>
      <canvas ref={canvasRef} style={styles.canvas} />
      <div style={styles.content}>
        <h2>Energy Booster</h2>
        <p>Made with organic ginseng, maca root, and vitamin B12.</p>
        <button style={styles.button}>Order Now</button>
      </div>
    </div>
  );
}
