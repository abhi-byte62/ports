import { HiArrowRight } from "react-icons/hi";
import Container from "../components/Container/Container";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 bg-[#08080C] text-white overflow-hidden"
    >
      {/* Subtle Environmental Atmospheric Gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 20%, rgba(56, 189, 248, 0.08) 0%, rgba(14, 165, 233, 0.02) 40%, transparent 75%)",
        }}
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Confident Name Title */}
          <h1 className="font-['Space_Grotesk'] text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-none">
            ABHISHEK M R
          </h1>

          {/* Role & Specialization */}
          <div className="mt-4 sm:mt-6 font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl font-medium text-neutral-300">
            Software Engineer
          </div>

          <div className="mt-2 text-sm sm:text-base font-mono text-sky-400 font-normal tracking-wide">
            Quantitative Systems &bull; Backend &bull; Security &bull; Open Source
          </div>

          {/* Narrative Statement */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-normal leading-relaxed font-sans">
            Specializing in sub-microsecond market simulation engines, AST static/dynamic taint analyzers, and resilient distributed state machines with mechanical sympathy.
          </p>

          {/* Simple & Confident CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors shadow-lg"
            >
              <span>View My Work</span>
              <HiArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Editorial Divider / Accent Anchor */}
        <div className="mt-20 max-w-5xl mx-auto pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span className="text-neutral-400">Low-latency architecture & upstream contributions</span>
          </div>
          <div className="text-neutral-500">
            C++17 &bull; Java &bull; Go &bull; TypeScript &bull; C
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;