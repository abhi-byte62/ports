import { FaGithub } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const Hero = () => {
  return (
    <Section id="hero" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Restrained subtle navy radial background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse 60% 45% at 50% 0%, rgba(24, 58, 145, 0.18) 0%, rgba(5, 9, 20, 0) 70%)",
        }}
      />

      <Container>
        <div className="max-w-3xl">
          {/* Engineering Role Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1C2942] bg-[#0D1424] px-3.5 py-1 text-xs font-mono text-[#8D99B5] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4D7CFF]" />
            <span>SOFTWARE ENGINEER // SYSTEMS & FULL-STACK</span>
          </div>

          {/* Name & Primary Headline */}
          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F7FF] leading-[1.1]">
            Abhishek M R
          </h1>

          {/* Concrete Engineering Focus */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-[#8D99B5]">
            I build distributed backend architectures, real-time collaborative applications, and performance-critical systems. Focused on concurrency control, stream pipelines, clean API design, and predictable memory footprint.
          </p>

          {/* Technical Specialties */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-[#8D99B5]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#4D7CFF]">▹</span> Java & Spring Boot
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#4D7CFF]">▹</span> Node.js & React
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#4D7CFF]">▹</span> PostgreSQL & Redis
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[#4D7CFF]">▹</span> WebSockets & Stream Processing
            </span>
          </div>

          {/* Compact, purposeful CTAs */}
          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#4D7CFF] px-5 py-2.5 text-sm font-semibold text-[#050914] transition-all hover:bg-[#6D96FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D7CFF]"
            >
              View Engineering Projects
              <HiArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-[#1C2942] bg-[#0D1424] px-4 py-2.5 text-sm font-medium text-[#F5F7FF] transition-colors hover:border-[#4D7CFF] hover:text-[#6D96FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D7CFF]"
            >
              Resume
            </a>

            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#1C2942] bg-[#0D1424]/60 px-4 py-2.5 text-sm font-medium text-[#8D99B5] transition-colors hover:border-[#4D7CFF] hover:text-[#F5F7FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D7CFF]"
            >
              <FaGithub size={15} />
              GitHub
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5F6B83] hover:text-[#4D7CFF] transition-colors"
        aria-label="Scroll to featured projects"
      >
        <HiArrowDown size={20} />
      </a>
    </Section>
  );
};

export default Hero;