"use client";

import { useState } from "react";

export default function MobilePortfolio() {
  const [copied, setCopied] = useState(false);
  const email = "mohammadkaif9380@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const projects = [
    {
      title: "Smart Billing Infrastructure",
      tag: "Full Stack / Cloud",
      tech: ["React", "Tailwind", "Node.js", "MongoDB"],
      desc: "Scalable billing and invoice management system focused on performance and structured data flow.",
      github: "https://github.com/kaif988",
    },
    {
      title: "Modern Markdown Publishing",
      tag: "Content Platform",
      tech: ["Next.js", "Tailwind", "Node.js"],
      desc: "Clean editorial reading experience with optimized UI structure.",
      github: "https://github.com/kaif988",
    },
  ];

  const skills = [
    "Docker & Kubernetes",
    "CI/CD Pipelines & GitHub Actions",
    "GCP & Serverless Architecture",
    "React & Next.js",
    "Node.js & Express APIs",
    "Linux System Administration",
    "automation & scripting",
    "web development & responsive design",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-5 pb-12 space-y-6 selection:bg-indigo-100">
      {/* HEADER BRANDING */}
      <header className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-sm">
            MK
          </div>
          <div>
            <h1 className="font-bold text-slate-900 text-sm leading-none">
              Mohammad Kaif
            </h1>
            <p className="text-[11px] text-slate-500 font-medium mt-1">
              DevOps & Cloud Engineer
            </p>
          </div>
        </div>
        <span className="text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Available
        </span>
      </header>

      {/* HERO CARD */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
            Overview
          </span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug">
            Automating deployments & building scalable cloud systems.
          </h2>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          I specialize in bridging development and operations with automated CI/CD pipelines, containerized apps, and serverless infrastructure on GCP.
        </p>

        <div className="flex flex-col gap-2.5 pt-1">
          <a
            href={`mailto:${email}`}
            className="w-full text-center py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-xs transition-transform active:scale-95"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1YeF8VozzDOoAysigAnFgDexlKIsmTmRJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200/80 transition-transform active:scale-95"
          >
            View Resume ↗
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
          Skills & Expertise
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-2xs text-xs font-medium text-slate-700 flex items-center gap-2 transition-transform active:scale-95"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
          Featured Projects
        </h3>
        <div className="space-y-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm space-y-3 transition-transform active:scale-[0.98]"
            >
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-bold text-slate-900 text-sm">{p.title}</h4>
                <span className="text-[10px] font-semibold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2 py-0.5 rounded-md shrink-0">
                  {p.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-indigo-600 hover:underline pt-1"
              >
                View Repository ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact-mobile"
        className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4"
      >
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Contact Channel</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Reach out directly via email or check out social profiles:
          </p>
        </div>

        <button
          onClick={copyEmail}
          className="w-full p-3 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-800 font-medium flex justify-between items-center transition-transform active:scale-95"
        >
          <span className="truncate">{email}</span>
          <span className="text-indigo-600 font-bold ml-2 shrink-0">
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </button>

        <div className="grid grid-cols-2 gap-2 text-xs pt-1">
          <a
            href="https://github.com/kaif988"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 text-white rounded-xl text-center font-medium shadow-2xs transition-transform active:scale-95"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/mohammad-kaif-03bb60280"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-xl text-center font-medium shadow-2xs transition-transform active:scale-95"
          >
            LinkedIn ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-[11px] text-slate-400 pt-2">
        © {new Date().getFullYear()} Mohammad Kaif | Built with Next.js & Tailwind CSS
      </footer>
    </div>
  );
}