"use client";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <div className="relative z-20 mb-2 flex flex-col items-center justify-center w-full">

      {/* subtle background glow */}
      <motion.div
        className="absolute w-44 h-24 bg-cyan-400/10 blur-3xl rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1.5 }}
      />

      <svg
        viewBox="10 10 130 80"
        className="w-36 md:w-48 will-change-transform"
        fill="none"
      >
        {/* 🧠 BASE LOGO */}
        <motion.path
          d="
            M20 80 
            V20 
            L50 55 
            L80 20 
            V80 
            L50 55 

            M80 50 
            L130 20 
            M80 50 
            L130 80
          "
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        />
        {/* ✨ SPARKLES */}

        {/* glow */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>

      
  );
}