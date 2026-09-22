import { FaGithub } from "react-icons/fa";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const Hero = () => {
  return (
    <Section id="hero" className="relative min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1 text-xs font-mono text-zinc-400 mb-6">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span>SYSTEMS & NETWORK ENGINEERING</span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Abhishek
            <br />
            M R
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400">
            Software Engineer specializing in network protocol engineering, high-concurrency stream pipelines, and hardware-accelerated 3D telemetry visualizations.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Explore Case Studies
              <HiArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-lg border border-zinc-700 bg-zinc-900/40 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <FaGithub />
              GitHub
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#projects"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-400 transition-colors"
        aria-label="Scroll to featured engineering work"
      >
        <HiArrowDown size={24} />
      </a>
    </Section>
  );
};

export default Hero;