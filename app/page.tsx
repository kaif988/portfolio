"use client";

import { SparklesPreview } from "@/components/ui/SparklesPreview";
import Hero from "@/components/Hero";
import SkillsSection from "@/components/SkillsSection";
import ScrollProgress from "@/components/ScrollProgress";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import MobileTerminalPortfolio from "@/components/MobileTerminalPortfolio";

export default function Home() {
  return (
    <main className="w-full bg-black min-h-screen">
      {/* DESKTOP VIEW */}
      <div className="hidden md:block relative">
        <ScrollProgress />

        <div id="hero">
          <div className="relative z-0">
            <SparklesPreview />
          </div>
          <div className="relative z-10">
            <Hero />
          </div>
        </div>

        <div id="skills" className="relative z-10">
          <SkillsSection />
        </div>

        <div id="projects" className="relative z-10">
          <ProjectSection />
        </div>

        <div id="contact" className="relative z-10">
          <ContactSection />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="block md:hidden">
        <MobileTerminalPortfolio />
      </div>
    </main>
  );
}