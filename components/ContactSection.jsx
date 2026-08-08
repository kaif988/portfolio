"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "mohammadkaif9380@gmail.com"; // Replace with your actual email

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative z-10 py-20 md:py-32 bg-black overflow-hidden border-t border-white/5">
      
      {/* AMBIENT GLOWS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[15%] top-[25%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute right-[10%] bottom-[15%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN */}
        <div>
          {/* AVAILABILITY BADGE */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
              Available for opportunities
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.08] tracking-tight text-white">
            Building systems <br />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-white bg-clip-text text-transparent">
              where engineering
            </span> <br />
            meets clarity.
          </h2>

          <p className="mt-8 text-white/50 text-base sm:text-lg leading-relaxed max-w-xl">
            Focused on scalable infrastructure, CI/CD automation pipelines, and modern web applications built with performance and reliability at their core.
          </p>

          {/* QUICK EMAIL COPY BUTTON */}
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={copyToClipboard}
              className="group relative inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="text-sm font-mono text-white/80 group-hover:text-cyan-300 transition-colors">
                {copied ? "Email Copied to Clipboard!" : email}
              </span>
              <svg
                className={`w-4 h-4 transition-colors ${copied ? "text-cyan-400" : "text-white/40 group-hover:text-cyan-400"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {copied ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT PANEL - CONNECT CARD */}
        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl p-8 sm:p-10 shadow-2xl overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
            
            {/* SUBTLE GLOW BAR */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            {/* HEADER */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-xl font-semibold text-white">Direct Connect</h3>
                <p className="text-xs text-white/40 font-mono mt-1">// Response time: &lt; 24h</p>
              </div>

              <motion.span
                animate={{
                  backgroundPosition: ["200% center", "-200% center"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="text-xs uppercase tracking-[0.25em] font-mono text-transparent bg-clip-text bg-[linear-gradient(110deg,#00f2fe_40%,#fff_50%,#00f2fe_60%)] bg-[length:250%_100%]"
              >
                SIGNAL ACTIVE
              </motion.span>
            </div>

            {/* LINK ROWS */}
            <div className="space-y-3.5">
              {[
                { name: "GitHub", href: "https://github.com/kaif988", sub: "github.com/kaif988" },
                { name: "LinkedIn", href: "https://linkedin.com", sub: "linkedin.com/in/mohammadkaif" },
                { name: "Gmail", href: `mailto:${email}`, sub: email },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-cyan-500/5 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div>
                    <div className="text-sm font-medium text-white/90 group-hover/link:text-cyan-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-white/40 font-mono mt-0.5">
                      {item.sub}
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover/link:text-cyan-400 group-hover/link:bg-cyan-400/10 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* CARD FOOTER */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-mono">
              <span>Designed & Developed by Kaif</span>
              <span className="text-cyan-400/60">ASIA-SOUTH1</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}