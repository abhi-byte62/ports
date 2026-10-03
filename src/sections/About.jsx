import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const About = () => {
  return (
    <Section id="about" className="py-24 bg-[#08080C] text-white border-t border-white/[0.08]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-white">
              About & Technical Focus
            </h2>
          </div>

          {/* Editorial Narrative */}
          <div className="space-y-6 text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            <p>
              I am a software engineer focused on systems programming, quantitative infrastructure, distributed backends, and security tooling.
            </p>

            <p>
              I enjoy working close to the machine—where CPU cache lines, memory allocations, and socket polling behavior dictate real system throughput. Much of my engineering time is spent designing sub-microsecond limit order book engines, AST static/dynamic taint analyzers, and optimistic concurrency state machines that guarantee deterministic consistency without unbounded lock contention.
            </p>

            <p>
              Technically, I care deeply about mechanical sympathy, predictable latency bounds, and deterministic verification. Rather than relying on guesswork, I build test harnesses that assert state invariants under chaotic network flapping and adversarial inputs.
            </p>

            <p>
              Beyond standalone projects, I actively contribute upstream to critical open-source systems like <span className="text-white font-medium">Valkey</span>, <span className="text-white font-medium">Fastify</span>, <span className="text-white font-medium">QuantConnect Lean</span>, and <span className="text-white font-medium">QuickFIX</span>, optimizing message parsers and stream iterators for high-throughput production environments.
            </p>
          </div>

          {/* Academic Foundation Footnote */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-sm text-neutral-400 font-sans gap-2">
            <div>
              <strong className="text-white font-medium">B.Tech in Computer Science & Engineering</strong> &bull; Presidency University
            </div>
            <div className="text-xs font-mono text-neutral-500">
              DSA &bull; OS &bull; Networks &bull; Distributed Systems &bull; DBMS
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;