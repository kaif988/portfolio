"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export const SparklesCore = ({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 800,
  className,
  particleColor = "#FFFFFF",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < particleDensity; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.5 + 0.2,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6, 
      });
    }
    let animationFrameId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur =  window.innerWidth < 768 ? 0 : 8;
      ctx.shadowColor = "#ffffff";

      particles.forEach((p) => {
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;
      });
      

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  })

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ background }}
    />
  );
};