"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Overview" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");
  const [dotPositions, setDotPositions] = useState([0, 33, 66, 100]);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const headY = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Calculate real section positions relative to total page scroll height
  useEffect(() => {
    const calculatePositions = () => {
      const totalScrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (totalScrollable <= 0) return;

      const positions = SECTIONS.map(({ id }, index) => {
        if (index === 0) return 0;
        if (index === SECTIONS.length - 1) return 100;

        const el = document.getElementById(id);
        if (!el) return (index / (SECTIONS.length - 1)) * 100;

        const rect = el.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;

        return Math.min(
          Math.max((elementTop / totalScrollable) * 100, 0),
          100
        );
      });

      setDotPositions(positions);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);

    // Active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.1 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("resize", calculatePositions);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col items-center z-[9999]">
      <div className="relative h-[60vh] w-[2px] bg-white/10 rounded-full">
        {/* PROGRESS LINE */}
        <motion.div
          style={{ scaleY: smoothProgress }}
          className="absolute top-0 left-0 w-full h-full bg-cyan-400 origin-top shadow-[0_0_12px_#22d3ee]"
        />

        {/* GLOWING HEAD */}
        <motion.div
          style={{ top: headY }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee] z-20 pointer-events-none"
        />

        {/* DYNAMICALLY POSITIONED WAYPOINTS */}
        {SECTIONS.map(({ id, label }, index) => {
          const isActive = activeSection === id;
          const topPosition = `${dotPositions[index]}%`;

          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              style={{ top: topPosition }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center focus:outline-none z-10 transition-all duration-300"
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                  isActive
                    ? "bg-cyan-400 border-cyan-200 scale-125 shadow-[0_0_10px_#22d3ee]"
                    : "bg-black border-white/30 group-hover:border-cyan-400 group-hover:scale-110"
                }`}
              />

              <span
                className={`absolute left-7 text-xs font-mono tracking-widest uppercase transition-all duration-300 whitespace-nowrap pointer-events-none ${
                  isActive
                    ? "opacity-100 translate-x-0 text-cyan-400 font-semibold"
                    : "opacity-0 -translate-x-2 text-white/50 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}