"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FULLSCREEN CANVAS ANIMATED BACKGROUND (MOBILE ONLY & SSR SAFE)
function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Do not run JS canvas animation on desktop screens (>= 768px)
    if (window.innerWidth >= 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      // If resized to desktop, cancel animation
      if (window.innerWidth >= 768) {
        cancelAnimationFrame(animationFrameId);
        return;
      }
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 2 + 1,
      color: ["#818cf8", "#c084fc", "#38bdf8", "#f472b6"][
        Math.floor(Math.random() * 4)
      ],
    }));

    const render = () => {
      if (window.innerWidth >= 768) return; // Guard clause for desktop

      ctx.fillStyle = "#090d16";
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.6 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full md:hidden"
    />
  );
}

export default function MobilePortfolio() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const email = "mohammadkaif9380@gmail.com";

  const copyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const certificates = [
    {
      title: "Develop Serverless Applications on Cloud Run",
      issuer: "Google Cloud",
      date: "2024",
      id: "GCP-ACE-8921",
      icon: "☁️",
      tag: "Cloud Architecture",
      verifyUrl: "https://www.credly.com/badges/5c6850f0-011c-4ace-8a9f-486b3c9968e4/public_url",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "2024",
      id: "CKA-40291",
      icon: "🔒",
      tag: "Security",
      verifyUrl: "https://www.credly.com/badges/712d179c-f7e9-42ab-9dc7-b9fcb802bdef/public_url",
    },
  ];

  const projects = [
    {
      title: "Smart Billing Infrastructure",
      tag: "Cloud / Fullstack",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      desc: "Scalable billing and invoice management system focused on performance, high reliability, and structured data flow.",
      github: "https://github.com/kaif988/Billing-app.git",
    },
    {
      title: "Modern Markdown Publishing",
      tag: "Platform",
      tech: ["Next.js", "Tailwind", "Node.js"],
      desc: "Clean editorial reading experience with optimized dynamic UI structure and fast SSG/ISR rendering.",
      github: "https://github.com/kaif988/My-blogs.git",
    },
  ];

  const skills = [
    { name: "Docker & Kubernetes", category: "devops" },
    { name: "CI/CD & GitHub Actions", category: "devops" },
    { name: "GCP & Serverless", category: "cloud" },
    { name: "React & Next.js", category: "frontend" },
    { name: "Node.js & Express", category: "backend" },
    { name: "Linux Administration", category: "devops" },
    { name: "Bash & Automation", category: "devops" },
    { name: "System Architecture", category: "cloud" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skills
      : skills.filter((s) => s.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    /* `block md:hidden` ensures this component only renders on screens smaller than 768px */
    <div className="block md:hidden relative w-full min-h-screen text-slate-100 font-sans p-4 pb-16 selection:bg-indigo-500 selection:text-white bg-[#090d16]">
      {/* CANVAS BACKGROUND */}
      <CanvasBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-md mx-auto space-y-5 relative z-10"
      >
        {/* TOP BRANDING BAR */}
        <motion.header
          variants={itemVariants}
          className="flex items-center justify-between bg-slate-900/40 backdrop-blur-md p-3.5 rounded-2xl border border-slate-700/60 shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white font-mono font-bold flex items-center justify-center text-sm shadow-md shadow-indigo-900/50">
                MK
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
            </div>
            <div>
              <h1 className="font-bold text-slate-100 text-sm leading-tight flex items-center gap-1.5">
                Mohammad Kaif
              </h1>
              <p className="text-[11px] font-mono text-indigo-400 font-medium">
                kaif@devops-cluster:~
              </p>
            </div>
          </div>
          <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Live
          </span>
        </motion.header>

        {/* HERO CARD */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-slate-700/60 space-y-4"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wide">
              <span>🚀</span> DevOps & Cloud System Engineer
            </div>
            <h2 className="text-lg font-extrabold text-slate-100 tracking-tight leading-snug">
              Automating deployments & building resilient cloud infrastructure.
            </h2>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            Specializing in CI/CD pipeline automation, Docker/Kubernetes container orchestration, serverless cloud solutions, and full-stack development.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${email}`}
              className="py-2.5 bg-indigo-600/90 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-indigo-950/50 flex items-center justify-center gap-1.5 transition-colors"
            >
              Get In Touch
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              href="https://drive.google.com/file/d/1twqjxpdZMGzEtgQOAq13TReLeptCgq7H/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 bg-slate-800/80 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1 transition-colors"
            >
              View Resume ↗
            </motion.a>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section variants={itemVariants} className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              // Skills & Stack
            </h3>
            <div className="flex gap-1 bg-slate-900/60 p-0.5 rounded-lg text-[10px] font-medium border border-slate-700/60">
              {["all", "devops", "cloud"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-0.5 rounded-md capitalize transition-all ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 gap-2">
            <AnimatePresence>
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -2 }}
                  className="bg-slate-900/40 backdrop-blur-md p-3 rounded-2xl border border-slate-700/60 flex items-center gap-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-400 shrink-0"></span>
                  <span className="text-xs font-semibold text-slate-200">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.section>

        {/* CERTIFICATIONS SECTION */}
        <motion.section variants={itemVariants} className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              // Certifications
            </h3>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
              Verified Credentials
            </span>
          </div>

          <div className="space-y-2.5">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-slate-900/40 backdrop-blur-md p-4 rounded-2xl border border-slate-700/60 space-y-3 relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-lg shrink-0">
                      {cert.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 text-xs leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-medium">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded-md">
                    ID: {cert.id}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-0.5"
                  >
                    Verify Credential ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FEATURED PROJECTS */}
        <motion.section variants={itemVariants} className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono px-1">
            // Featured Projects
          </h3>

          <div className="space-y-3">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -2 }}
                className="bg-slate-900/40 backdrop-blur-md p-5 rounded-2xl border border-slate-700/60 space-y-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <h4 className="font-bold text-slate-100 text-sm">
                    {p.title}
                  </h4>
                  <span className="text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md shrink-0">
                    {p.tag}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono bg-slate-800/80 text-slate-300 px-2 py-0.5 rounded-md font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <div className="pt-1">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:underline"
                  >
                    View Source Repository ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT CHANNEL */}
        <motion.section
          variants={itemVariants}
          className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-5 border border-slate-700/60 space-y-3.5"
        >
          <div>
            <h3 className="font-bold text-slate-100 text-sm">Get in Touch</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Send an inquiry or reach out directly on professional networks:
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={copyEmail}
            className="w-full p-3 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-200 font-mono flex justify-between items-center transition-colors"
          >
            <span className="truncate">{email}</span>
            <span className="text-indigo-400 font-bold font-sans ml-2 shrink-0">
              {copied ? "✓ Copied!" : "Copy Email"}
            </span>
          </motion.button>

          <div className="grid grid-cols-2 gap-2 text-xs pt-0.5">
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kaif988"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800/80 text-white rounded-xl text-center font-semibold border border-slate-700 hover:bg-slate-700 transition-colors"
            >
              GitHub ↗
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/mohammad-kaif-03bb60280"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-indigo-600/90 text-white rounded-xl text-center font-semibold hover:bg-indigo-500 transition-colors"
            >
              LinkedIn ↗
            </motion.a>
          </div>
        </motion.section>

        {/* FOOTER */}
        <motion.footer
          variants={itemVariants}
          className="text-center font-mono text-[10px] text-slate-500 pt-2"
        >
          © 2026 Mohammad Kaif • Built with Next.js & Tailwind
        </motion.footer>
      </motion.div>
    </div>
  );
}