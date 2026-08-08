"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "./sparkles";
import Logo from "./Logo";

export function SparklesPreview() {
  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative z-0 overflow-hidden">

      {/* 1. Subtle Cyber Grid Pattern (Desktop Only Background) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Top Cyan Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* 3. Live System Status Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="absolute top-6 right-6 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[11px] font-mono text-gray-400 shadow-xl"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>System: Online</span>
      </motion.div>

      {/* LOGO */}
      <div className="relative z-20 mb-4 flex justify-center">
        <div className="scale-100">
          <Logo />
        </div>
      </div>

      {/* NAME + DEVOPS TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="relative z-20 flex flex-col items-center justify-center gap-2 mt-2 uppercase tracking-[0.35em] font-light text-center"
      >
        {/* Glowing Gradient Name */}
        <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent font-semibold text-2xl tracking-[0.4em]">
          Mohammad Kaif
        </span>

        {/* DevOps Subtitle */}
        <span className="text-xs text-cyan-400/90 font-mono tracking-[0.25em] mt-1">
          DevOps & Cloud Engineer
        </span>
      </motion.div>

      {/* LINE + PARTICLES (DESKTOP LAYOUT) */}
      <div className="w-full max-w-[40rem] h-44 relative">

        {/* ✨ EXPANDING LINE */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1]}}
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4"
        />

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.6, duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 blur-sm"
        />

        {/* PARTICLES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="w-full h-full transform-gpu"
        >
          <SparklesCore
            background="transparent"
            minSize={0.2}
            maxSize={0.6}
            particleDensity={600}
            speed={0.3}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </motion.div>

        {/* MASK */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(420px_220px_at_top,transparent_10%,white)]"></div>
      </div>

    </div>
  );
}