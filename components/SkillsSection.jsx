"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-16 md:py-24 bg-black text-white overflow-hidden">
      
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/5 blur-[160px] pointer-events-none rounded-full" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.25em] font-mono text-xs mb-3">
            Capabilities & Stack
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Tools, cloud platforms, and security practices I leverage to engineer automated CI/CD pipelines and high-availability infrastructure.
          </p>
        </motion.div>

        {/* BENTO GRID SKILLS */}
        <div className="grid grid-cols-12 gap-6">

          {/* 1. DEVOPS & CONTAINERIZATION (MAIN FOCUS) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="group relative bg-white/5 border border-cyan-500/20 rounded-3xl p-7 md:p-8 min-h-[260px] hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
              
              <p className="text-cyan-400 text-xs font-mono mb-3 uppercase tracking-widest">
                DevOps & Cloud Automation
              </p>
              <h3 className="text-2xl font-bold mb-4">
                Containerization & Infrastructure Workflows
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                Building efficient container environments, automating deployment pipelines via GitHub Actions, and configuring scalable cloud infrastructure.
              </p>
              
              <div className="flex flex-wrap gap-2.5 font-mono text-xs">
                {["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux / Bash", "Nginx"].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2. BACKEND & APIS */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="group bg-white/5 border border-purple-500/20 rounded-3xl p-7 md:p-8 min-h-[260px] hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-1">
              <p className="text-purple-400 text-xs font-mono mb-3 uppercase tracking-widest">
                Backend Systems
              </p>
              <h3 className="text-xl font-bold mb-4">
                APIs & Server Architecture
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Designing performant REST APIs, microservices, and database layers for web applications.
              </p>
              
              <div className="flex flex-wrap gap-2.5 font-mono text-xs">
                {["Node.js", "Express", "MongoDB", "REST API", "Python"].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. CLOUD PLATFORMS & SECURITY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="group relative bg-white/5 border border-emerald-500/20 rounded-3xl p-7 md:p-8 min-h-[260px] hover:border-emerald-400/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-400/10 blur-2xl rounded-full pointer-events-none" />

              <p className="text-emerald-400 text-xs font-mono uppercase tracking-[0.2em] mb-3">
                Cloud Architecture & Security
              </p>
              <h3 className="text-2xl font-bold mb-4">
                Secure Cloud Deployments & GRC
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mb-6">
                Integrating security protocols, managing Google Cloud serverless platforms, and adhering to cybersecurity governance standards.
              </p>

              <div className="flex flex-wrap gap-2.5 font-mono text-xs">
                {["Google Cloud (GCP)", "Cloud Run", "Cybersecurity", "GRC Practices", "IAM & Auth"].map((skill, idx) => (
                  <span key={idx} className="px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4. FRONTEND UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-4"
          >
            <div className="group bg-white/5 border border-orange-500/20 rounded-3xl p-7 md:p-8 min-h-[260px] hover:border-orange-400/50 transition-all duration-300 hover:-translate-y-1">
              <p className="text-orange-400 text-xs font-mono mb-3 uppercase tracking-widest">
                Frontend Interface
              </p>
              <h3 className="text-xl font-bold mb-4">
                Modern & Responsive UI
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Creating intuitive, visually sharp web interfaces and dashboard displays.
              </p>

              <div className="flex flex-wrap gap-2.5 font-mono text-xs">
                {["React.js", "Next.js", "Tailwind CSS", "Framer Motion"].map((skill, idx) => (
                  <span key={idx} className="px-3 py-1.5 rounded-full bg-orange-400/10 border border-orange-400/20 text-orange-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* CERTIFICATIONS SECTION */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 max-w-3xl"
          >
            <p className="text-amber-400 uppercase tracking-[0.25em] font-mono text-xs mb-3">
              Certifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Verified Credentials
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Official industry certifications validating my technical competence in cloud serverless deployments and cybersecurity.
            </p>
          </motion.div>

          {/* CERTIFICATION CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GOOGLE */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-amber-400/20 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300"
            >
              <div>
                <p className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                  Google Cloud
                </p>
                <h3 className="text-xl font-bold mb-6 leading-snug">
                  Develop Serverless Applications on Cloud Run
                </h3>
              </div>
              <a
                href="https://www.credly.com/badges/5c6850f0-011c-4ace-8a9f-486b3c9968e4/public_url"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-mono hover:text-amber-200 transition-colors group"
              >
                <span>View Credential</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </motion.div>

            {/* IBM CYBERSECURITY */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-blue-400/20 rounded-3xl p-7 flex flex-col justify-between hover:border-blue-400/50 transition-all duration-300"
            >
              <div>
                <p className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-3">
                  IBM
                </p>
                <h3 className="text-xl font-bold mb-6 leading-snug">
                  Cybersecurity Fundamentals
                </h3>
              </div>
              <a
                href="https://www.credly.com/badges/712d179c-f7e9-42ab-9dc7-b9fcb802bdef/public_url"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-300 text-xs font-mono hover:text-blue-200 transition-colors group"
              >
                <span>View Credential</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </motion.div>

            {/* IBM GRC */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-purple-400/20 rounded-3xl p-7 flex flex-col justify-between hover:border-purple-400/50 transition-all duration-300"
            >
              <div>
                <p className="text-purple-400 text-xs font-mono uppercase tracking-widest mb-3">
                  IBM
                </p>
                <h3 className="text-xl font-bold mb-6 leading-snug">
                  Governance, Risk & Compliance (GRC)
                </h3>
              </div>
              <a
                href="https://www.credly.com/badges/ed3642fd-4bd0-4f14-98cb-91097a8c99f7/public_url"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-300 text-xs font-mono hover:text-purple-200 transition-colors group"
              >
                <span>View Credential</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </a>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}