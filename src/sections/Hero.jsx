import { FaGithub } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const Hero = () => {
  return (
    <Section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Extremely subtle faint dark mint radial background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 65% 50% at 50% -10%, rgba(16, 38, 28, 0.45) 0%, rgba(8, 10, 12, 0) 75%)",
        }}
      />

      <Container>
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#222A32] bg-[#101419] px-3.5 py-1.5 text-xs font-mono text-[#8B96A3] mb-6 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#5CE6A8] animate-pulse" />
            <span>SOFTWARE ENGINEER // FULL-STACK & SYSTEMS</span>
          </div>

          {/* Main Name & Title */}
          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.08] tracking-tight text-[#F2F5F7]">
            Abhishek
            <br />
            M R
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-[#8B96A3]">
            Software Engineer specializing in <span className="text-[#5CE6A8] font-medium">high-concurrency backend architectures</span>, full-stack collaborative platforms, and low-level network systems engineering. Focused on building robust, scalable software with deterministic performance.
          </p>

          {/* Quick SWE competencies highlight */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-mono text-[#8B96A3]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#5CE6A8]">▹</span> Java & Spring Boot
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#5CE6A8]">▹</span> Node.js & React 18/19
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#5CE6A8]">▹</span> Distributed Systems & REST APIs
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#5CE6A8]">▹</span> Real-Time WebSockets & Concurrency
            </span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#5CE6A8] px-5 py-2.5 text-sm font-semibold text-[#080A0C] transition-all hover:bg-[#72F0B5] hover:shadow-sm"
            >
              View Engineering Projects
              <HiArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-lg border border-[#222A32] bg-[#101419] px-5 py-2.5 text-sm font-medium text-[#F2F5F7] transition-colors hover:border-[#5CE6A8] hover:text-[#5CE6A8]"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#222A32] bg-[#101419]/60 px-5 py-2.5 text-sm font-medium text-[#8B96A3] transition-colors hover:border-[#5CE6A8] hover:text-[#F2F5F7]"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8B96A3]/60 hover:text-[#5CE6A8] transition-colors"
        aria-label="Scroll to featured engineering work"
      >
        <HiArrowDown size={22} />
      </a>
    </Section>
  );
};

export default Hero;