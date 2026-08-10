"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Logo from "./ui/Logo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Hero() {
  const [isMobileOS, setIsMobileOS] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect mobile OS specifically (iOS / Android)
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    if (mobileRegex.test(userAgent)) {
      setIsMobileOS(true);
    }
    setIsLoaded(true);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [8, -8]),
    { stiffness: 120, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-8, 8]),
    { stiffness: 120, damping: 20 }
  );

  const moveX = useSpring(
    useTransform(mouseX, [-300, 300], [-12, 12]),
    { stiffness: 100, damping: 20 }
  );

  const moveY = useSpring(
    useTransform(mouseY, [-300, 300], [-12, 12]),
    { stiffness: 100, damping: 20 }
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (!isLoaded) return null;

  return (
    <section 
      id="hero" 
      className={`min-h-screen relative z-10 flex items-center py-20 transition-colors duration-300 ${
        isMobileOS ? "bg-slate-50 text-slate-900" : "bg-black text-white"
      }`}
    >
      {/* Changed md:grid-cols to min-[550px]:grid-cols so split desktop screen stays 2-column */}
      <div className="max-w-6xl mx-auto px-4 sm:px-12 w-full grid grid-cols-[1.1fr_0.9fr] gap-4 sm:gap-8 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.12, 
            delayChildren: 0.1
          }}
        >
          {/* AVAILABLE BADGE */}
          <motion.div
            variants={fadeUp}
            className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border mb-6 ${
              isMobileOS 
                ? "border-emerald-600/30 bg-emerald-500/10 text-emerald-700" 
                : "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
            }`}
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Available for Infrastructure & DevOps Roles</span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className={`font-mono text-sm uppercase tracking-widest mb-1 ${
              isMobileOS ? "text-slate-500" : "text-gray-400"
            }`}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1
            variants={fadeUp}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight ${
              isMobileOS ? "text-slate-900" : "text-white"
            }`}
          >
            Mohammad Kaif
          </motion.h1>

          {/* DEVOPS TAGLINE */}
          <motion.p
            variants={fadeUp}
            className={`font-mono text-sm md:text-base mb-6 font-medium ${
              isMobileOS ? "text-cyan-700" : "text-cyan-400"
            }`}
          >
            Automating deployments, containerizing applications & building scalable cloud systems.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="mailto:mohammadkaif9380@gmail.com"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-cyan-500 text-black font-semibold text-sm px-6 py-3 rounded-lg relative overflow-hidden shadow-lg shadow-cyan-500/20 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <span>→</span>
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1YeF8VozzDOoAysigAnFgDexlKIsmTmRJ/view?usp=drive_link"
              target="_blank"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`border px-6 py-3 text-sm rounded-lg transition-all duration-300 font-mono ${
                isMobileOS 
                  ? "border-slate-300 text-slate-700 hover:bg-slate-200/50" 
                  : "border-white/20 text-gray-300 hover:border-white/40 hover:bg-white/5"
              }`}
            >
              View Resume
            </motion.a>
          </motion.div>

          {/* ABOUT DEVOPS SUMMARY */}
          <motion.p
            variants={fadeUp}
            className={`text-sm md:text-base max-w-xl leading-relaxed mb-6 ${
              isMobileOS ? "text-slate-600" : "text-gray-400"
            }`}
          >
            I am a Cloud & DevOps Engineer specializing in bridging the gap between development and operations. 
            I construct automated CI/CD pipelines, orchestrate containerized applications with Docker, and architect serverless cloud infrastructure on GCP.
          </motion.p>

          {/* TECH PILLS */}
          <motion.div 
            variants={fadeUp} 
            className={`flex flex-wrap gap-2 mb-8 font-mono text-[11px] ${
              isMobileOS ? "text-slate-700" : "text-gray-300"
            }`}
          >
            {[
              "🐳 Docker", 
              "⚙️ GitHub Actions", 
              "☁️ GCP", 
              "☸️ Kubernetes", 
              "🐧 Linux"
            ].map((pill, idx) => (
              <span 
                key={idx} 
                className={`px-2.5 py-1 border rounded-md ${
                  isMobileOS 
                    ? "bg-slate-200/60 border-slate-300" 
                    : "bg-white/5 border-white/10"
                }`}
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6">
            {[
              { name: "GitHub", href: "https://github.com/kaif988" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/mohammad-kaif-03bb60280" },
              { name: "Contact", href: "#contact" },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                whileHover="hover"
                initial="rest"
                animate="rest"
                href={link.href}
                className={`relative inline-flex items-center py-1 transition-colors duration-300 tracking-[0.2em] text-[11px] font-mono ${
                  isMobileOS 
                    ? "text-slate-600 hover:text-slate-900" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <motion.span variants={{ rest: { x: 0 }, hover: { x: 3 } }}>
                  {link.name}
                </motion.span>
                <motion.span
                  variants={{ rest: { opacity: 0, x: -4 }, hover: { opacity: 1, x: 4 } }}
                  className={isMobileOS ? "text-cyan-600" : "text-cyan-400"}
                >
                  ↗
                </motion.span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE (Changed hidden md:flex to hidden min-[550px]:flex) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            x: moveX,
            y: moveY,
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="flex justify-center items-center perspective-1000"
        >
          <div className={`w-full max-w-sm p-6 lg:p-8 rounded-2xl border backdrop-blur-xl shadow-2xl relative group ${
            isMobileOS
              ? "bg-white/80 border-slate-200 text-slate-900"
              : "bg-gradient-to-b from-white/10 via-white/5 to-transparent border-white/15 text-white"
          }`}>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className={`ml-auto font-mono text-[10px] ${
                isMobileOS ? "text-slate-400" : "text-gray-500"
              }`}>
                devops-node.sh
              </span>
            </div>

            <div className="flex justify-center py-4">
              <Logo />
            </div>

            <div className={`mt-4 pt-4 border-t font-mono text-[11px] flex justify-between items-center ${
              isMobileOS ? "border-slate-200 text-slate-500" : "border-white/10 text-gray-400"
            }`}>
              <span>Status: <span className="text-emerald-500">ACTIVE</span></span>
              <span>Region: <span className="text-cyan-500">India</span></span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}