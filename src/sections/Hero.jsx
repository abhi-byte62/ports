import { FaGithub } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const Hero = () => {
  return (
    <Section id="hero" className="relative min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
            Software Engineer
          </p>

          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Abhishek
            <br />
            M R
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            A Software Engineer focused on full-stack development, backend systems, and scalable web applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/abhi-byte62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
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
        aria-label="Scroll down"
      >
        <HiArrowDown size={24} />
      </a>
    </Section>
  );
};

export default Hero;