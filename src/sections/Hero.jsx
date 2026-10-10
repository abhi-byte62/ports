import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import PixelWorldScene from "../components/PixelHero/PixelWorldScene";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-8 pb-16 bg-[#080D1A] text-[#E6EAF2] overflow-hidden"
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Top Retro HUD Status Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#334366] pb-3 text-[9px] font-pixel text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#55E6C1] animate-pixel-blink" />
              <span className="text-[#55E6C1]">PLAYER: ABHISHEK_M_R</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#8AA4FF]">CLASS: SYSTEMS_ARCHITECT</span>
              <span className="text-[#334366] hidden sm:inline">|</span>
              <span className="text-[#FFD166] hidden sm:inline">STATUS: AVAILABLE_FOR_ROLES</span>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Retro Badge */}
              <div className="inline-flex items-center gap-2 pixel-tag pixel-tag-teal">
                <span className="h-1.5 w-1.5 bg-[#55E6C1]" />
                <span>LOW-LATENCY · DISTRIBUTED INFRASTRUCTURE</span>
              </div>

              {/* Developer Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none font-pixel-heading">
                  Abhishek M R
                </h1>
                <div className="text-lg sm:text-2xl font-pixel text-[#55E6C1]">
                  Software Engineer
                </div>
              </div>

              {/* Narrative Statement */}
              <p className="text-sm sm:text-base text-[#94A3B8] font-mono leading-relaxed max-w-xl">
                Building low-latency matching engines, website architecture topology synthesizers, and distributed systems with a focus on mechanical sympathy, deterministic invariants, and verified correctness.
              </p>

              {/* 3D Pixel Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="pixel-btn pixel-btn-primary"
                >
                  <span>SELECTED PROJECTS</span>
                  <HiArrowRight size={13} />
                </a>

                <a
                  href="#contact"
                  className="pixel-btn pixel-btn-secondary"
                >
                  <span>GET IN TOUCH</span>
                </a>

                <Link
                  to="/resume"
                  className="pixel-btn pixel-btn-warm"
                >
                  <span>RESUME.EXE</span>
                </Link>
              </div>

              {/* Technical Stack Pixel Tags */}
              <div className="pt-4 border-t-2 border-[#334366] flex flex-wrap items-center gap-2 text-[9px] font-pixel text-[#94A3B8]">
                <span className="text-[#55E6C1]">STACK:</span>
                <span className="pixel-tag">C++17</span>
                <span className="pixel-tag">Java 21</span>
                <span className="pixel-tag">Go</span>
                <span className="pixel-tag">TypeScript</span>
                <span className="pixel-tag">Python 3</span>
                <span className="pixel-tag">PostgreSQL</span>
                <span className="pixel-tag">RabbitMQ</span>
              </div>
            </div>

            {/* Right Interactive Pixel Scene Column (6 cols) */}
            <div className="lg:col-span-6">
              <PixelWorldScene />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;