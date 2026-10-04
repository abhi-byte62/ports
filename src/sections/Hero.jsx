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
            "radial-gradient(ellipse 60% 40% at 50% 15%, rgba(255, 255, 255, 0.03) 0%, transparent 80%)",
        }}
      />

      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3.5 py-1 text-xs font-mono text-neutral-400 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>SYSTEMS · PERFORMANCE · QUANTITATIVE SOFTWARE</span>
          </div>

          {/* Confident Name Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-none">
            Abhishek M R
          </h1>

          {/* Role & Specialization */}
          <div className="mt-5 text-xl sm:text-2xl md:text-3xl font-medium text-neutral-300">
            Software Engineer
          </div>

          {/* Narrative Statement */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-neutral-400 font-normal leading-relaxed font-sans">
            Building low-latency systems, developer infrastructure, and distributed software with a focus on performance and correctness.
          </p>

          {/* Simple & Confident CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-sm"
            >
              <span>Selected Projects</span>
              <HiArrowRight size={14} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.03] px-6 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white hover:border-white/[0.24] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Editorial Divider / Accent Anchor */}
        <div className="mt-20 max-w-5xl mx-auto pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Low-latency architecture & upstream open-source</span>
          </div>
          <div className="text-neutral-500">
            C++17 · Java · Go · TypeScript · Python
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;