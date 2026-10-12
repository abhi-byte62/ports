import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "../components/Container/Container";
import OrderBookMicroSimulator from "../components/Simulators/OrderBookMicroSimulator";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center pt-12 pb-20 bg-[#090A0F] text-[#EDEDED] overflow-hidden"
    >
      <Container>
        <div className="max-w-6xl mx-auto space-y-10">
          {/* Top Status Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.06] text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-neutral-200 font-medium">Abhishek M R</span>
              <span className="text-neutral-700">/</span>
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-neutral-400">Available for Software Engineering Roles</span>
            </div>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Low-Latency Systems · Distributed Architecture</span>
              </div>

              {/* Developer Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  Building high-performance systems with mechanical sympathy.
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                  I&apos;m a software engineer focused on sub-microsecond matching engines, distributed state machines, and performance-critical infrastructure in C++, Java, and Go.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#projects"
                  className="btn-primary"
                >
                  <span>Featured projects</span>
                  <HiArrowRight size={13} />
                </a>

                <a
                  href="#opensource"
                  className="btn-secondary"
                >
                  <span>Open source work</span>
                </a>

                <Link
                  to="/resume"
                  className="btn-secondary"
                >
                  <span>Resume</span>
                </Link>
              </div>

              {/* Technical Stack Pills */}
              <div className="pt-5 border-t border-white/[0.06] flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="text-neutral-500 mr-1">Primary Tools:</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">C++17</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Java 21</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Go</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">TypeScript</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">PostgreSQL</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">RabbitMQ</span>
                <span className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">Valkey / Redis</span>
              </div>
            </div>

            {/* Right Interactive Telemetry Column (6 cols) */}
            <div className="lg:col-span-6">
              <OrderBookMicroSimulator title="Live Matching Engine Telemetry" className="my-0" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;