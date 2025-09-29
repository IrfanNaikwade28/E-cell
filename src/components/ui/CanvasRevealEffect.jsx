"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * CanvasRevealEffect — simplified, self-contained particle animation.
 * Props:
 * - animationSpeed: number (multiplier for velocity)
 * - containerClassName: string (classes for outer absolute container)
 * - colors: number[][] (array of [r,g,b])
 * - opacities: number[] (alpha values to pick from)
 * - dotSize: number (radius of each dot in px)
 */
export const CanvasRevealEffect = ({
  animationSpeed = 4,
  containerClassName,
  colors = [
    [59, 130, 246],
    [139, 92, 246],
  ],
  opacities = [0.2, 0.3, 0.4, 0.6, 1],
  dotSize = 2,
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const rand = (min, max) => Math.random() * (max - min) + min;
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

    function initParticles() {
      const area = width * height;
      // Particle count scaled to area with a cap for perf
      const count = Math.min(120, Math.max(40, Math.floor(area / 9000)));
      particlesRef.current = Array.from({ length: count }, () => {
        const [r, g, b] = pick(colors);
        const a = pick(opacities);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: rand(-0.5, 0.5) * animationSpeed,
          vy: rand(-0.5, 0.5) * animationSpeed,
          r,
          g,
          b,
          a,
        };
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // update
        p.x += p.vx * 0.016; // scale approximately to frame time
        p.y += p.vy * 0.016;
        // wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        // draw dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.a})`;
        ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    }

    initParticles();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [animationSpeed, colors, opacities, dotSize]);

  return (
    <div className={cn("absolute inset-0", containerClassName)} aria-hidden>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default CanvasRevealEffect;
