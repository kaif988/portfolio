"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      id: "project-1",
      category: "Full Stack Platform",
      title: "Smart Billing & Invoice Infrastructure",
      description:
        "A scalable billing and invoice management system focused on performance, structured data flow, and modern dashboard experiences.",
      tech: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
      highlights: [
        "Structured invoice workflow system",
        "Secure backend data handling",
        "Dashboard-oriented UI architecture",
        "Scalable component structure",
      ],
      github: "https://github.com/kaif988/Billing-app",
      accentColor: "cyan",
      previewType: "billing",
    },
    {
      id: "project-2",
      category: "Content Platform",
      title: "Modern Markdown Publishing System",
      description:
        "A modern blog publishing experience designed with clean typography, responsive layouts, and structured content presentation.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      highlights: [
        "Clean editorial reading experience",
        "Responsive content system",
        "Optimized UI structure",
        "Modern publishing workflow",
      ],
      github: "https://github.com/kaif988/My-blogs",
      accentColor: "purple",
      previewType: "cms",
    },
    {
      id: "project-3",
      category: "AI & Developer Tools",
      title: "AI-Powered Code Review & Analytics",
      description:
        "An automated static code analysis pipeline integrated with LLMs to detect vulnerabilities, performance bottlenecks, and syntax flaws in real time.",
      tech: ["Next.js", "OpenAI API", "Node.js", "Redis"],
      highlights: [
        "Automated pull request code auditing",
        "Real-time token usage analytics",
        "Distributed task queues with Redis",
        "Interactive syntax diff visualization",
      ],
      github: "https://github.com/kaif988",
      accentColor: "emerald",
      previewType: "ai",
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-16 md:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Selected work & engineering systems
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A collection of projects focused on scalable architecture, modern frontend systems, and polished user experiences.
          </p>
        </motion.div>

        {/* PROJECTS CONTAINER */}
        <div className="space-y-20 md:space-y-32">
          {/* PROJECT 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* PREVIEW */}
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden min-h-[260px] md:min-h-[420px]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-400/5 rounded-full blur-3xl" />
                </div>

                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-400/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <div className="w-3 h-3 rounded-full bg-green-400/70" />
                </div>

                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                      <p className="text-sm text-cyan-300 mb-2">Revenue</p>
                      <h4 className="text-3xl font-bold text-white">$48.2K</h4>
                      <p className="text-xs text-cyan-200/70 mt-2">+12.4% this month</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-sm text-gray-400 mb-2">Invoices</p>
                      <h4 className="text-3xl font-bold text-white">128</h4>
                      <p className="text-xs text-emerald-300/70 mt-2">18 pending payments</p>
                    </div>
                  </div>

                  <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden">
                    <motion.div
                      animate={{ opacity: [0.08, 0.16, 0.08], scale: [1, 1.08, 1] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[320px] h-[180px] bg-cyan-400/10 blur-3xl rounded-full" />
                    </motion.div>
                    <div className="flex items-end gap-3 h-28 md:h-40">
                      {[35, 55, 75, 60, 90, 70].map((height, index) => (
                        <motion.div
                          key={index}
                          animate={{ scaleY: [0.92, 1, 0.96] }}
                          transition={{
                            duration: 3 + index * 0.2,
                            repeat: Infinity,
                            repeatType: "mirror",
                            ease: "easeInOut",
                          }}
                          style={{ height: `${height}%`, originY: 1 }}
                          className="w-full rounded-t-xl bg-cyan-400/40"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <motion.div
                        key={item}
                        whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.05)" }}
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 cursor-default"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20" />
                          <div>
                            <p className="text-white text-sm font-medium">Invoice Payment</p>
                            <p className="text-xs text-gray-500">Transaction completed</p>
                          </div>
                        </div>
                        <p className="text-cyan-300 font-medium">+$1,240</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="col-span-12 lg:col-span-5">
              <p className="text-cyan-400 uppercase tracking-[0.25em] text-sm mb-4">
                Full Stack Platform
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Smart Billing & Invoice Infrastructure
              </h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
                A scalable billing and invoice management system focused on performance, structured data flow, and modern dashboard experiences.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Next.js", "MongoDB", "Node.js", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-3 mb-10 text-gray-300">
                <p>• Structured invoice workflow system</p>
                <p>• Secure backend data handling</p>
                <p>• Dashboard-oriented UI architecture</p>
                <p>• Scalable component structure</p>
              </div>
              <a
                href="https://github.com/kaif988/Billing-app"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <span>GitHub</span>
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* CONTENT */}
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <p className="text-purple-400 uppercase tracking-[0.25em] text-sm mb-4">
                Content Platform
              </p>
              <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                Modern Markdown Publishing System
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                A modern blog publishing experience designed with clean typography, responsive layouts, and structured content presentation.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["React", "Tailwind", "Node.js", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-purple-400/20 bg-purple-400/10 text-purple-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-3 mb-10 text-gray-300">
                <p>• Clean editorial reading experience</p>
                <p>• Responsive content system</p>
                <p>• Optimized UI structure</p>
                <p>• Modern publishing workflow</p>
              </div>
              <a
                href="https://github.com/kaif988/My-blogs"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-500 text-black font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <span>GitHub</span>
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>

            {/* PREVIEW */}
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden transition-all duration-500 hover:border-purple-400/20 hover:bg-white/[0.045] hover:-translate-y-1">
                <div className="p-5 md:p-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/35">
                      <span>Frontend Engineering</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span>May 2025</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span>8 min read</span>
                    </div>
                    <div className="relative h-2 w-20 rounded-full bg-white/5 overflow-hidden">
                      <div className="absolute left-[18%] top-0 h-full w-[38%] rounded-full bg-gradient-to-r from-purple-500/70 via-violet-300/90 to-purple-500/70" />
                    </div>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-5">
                    <div className="md:col-span-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.25em] text-purple-300/70 mb-6">
                        Content
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Published</span>
                          <span className="text-white font-medium">24</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Drafts</span>
                          <span className="text-white font-medium">08</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">Users</span>
                          <span className="text-white font-medium">140</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-white font-medium">Recent Articles</h3>
                        <span className="text-xs text-white/30">Updated now</span>
                      </div>
                      <div className="space-y-4">
                        {[
                          "Building secure auth systems",
                          "MongoDB indexing strategies",
                          "Scalable EJS architecture",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center justify-between border-b border-white/5 pb-3 transition-colors duration-300 group-hover:border-white/10"
                          >
                            <p className="text-white/55 group-hover:text-white/75 transition-colors duration-300">
                              {item}
                            </p>
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 3 (NEW ADDITION) */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* PREVIEW */}
            <div className="col-span-12 lg:col-span-7">
              <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden p-6 md:p-8 transition-all duration-500 hover:border-emerald-400/20 hover:-translate-y-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-300 font-mono">
                      AI_REVIEW_PIPELINE // RUNNING
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">LATENCY: 12ms</span>
                </div>

                <div className="space-y-4 font-mono text-sm">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                    <p className="text-gray-400">// Inspecting AST & Security Vulnerabilities</p>
                    <p className="text-emerald-400">&gt; npm run audit:ai --path=/api/v1/auth</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10">
                      <p className="text-xs text-emerald-300">Quality Score</p>
                      <p className="text-2xl font-bold text-white mt-1">98.4%</p>
                    </div>
                    <div className="p-4 rounded-xl border border-white/10 bg-white/[0.03]">
                      <p className="text-xs text-gray-400">Tokens Processed</p>
                      <p className="text-2xl font-bold text-white mt-1">1.2M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-span-12 lg:col-span-5">
              <p className="text-emerald-400 uppercase tracking-[0.25em] text-sm mb-4">
                AI & Developer Tools
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
                AI-Powered Code Review Engine
              </h3>
              <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-8">
                An automated static code analysis pipeline integrated with LLMs to detect vulnerabilities, performance bottlenecks, and syntax flaws in real time.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Next.js", "OpenAI API", "Node.js", "Redis"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="space-y-3 mb-10 text-gray-300">
                <p>• Automated pull request code auditing</p>
                <p>• Real-time token usage analytics</p>
                <p>• Caching & rate-limiting with Redis</p>
                <p>• Interactive syntax diff visualizer</p>
              </div>
              <a
                href="https://github.com/kaif988"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-400 text-black font-medium transition-all duration-300 hover:scale-[1.02]"
              >
                <span>GitHub</span>
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* FOOTER CALLOUT */}
        <div className="py-20 text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/30 mb-6">
            Beyond these featured projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-white leading-tight">
            More builds on GitHub
          </h2>
          <p className="mt-6 text-white/45 max-w-2xl mx-auto leading-relaxed">
            Experimental interfaces, backend systems, authentication flows, and engineering explorations beyond the featured work showcased here.
          </p>
          <a
            href="https://github.com/kaif988"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white/80 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}