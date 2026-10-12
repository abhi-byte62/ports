import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const About = () => {
  return (
    <Section id="about" className="py-24 bg-[#090A0F] text-[#EDEDED] border-t border-white/[0.06]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Background & Philosophy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering Focus & Approach
            </h2>
          </div>

          {/* Profile Card */}
          <div className="rounded-2xl border border-neutral-800/80 bg-[#0C0D13] p-6 sm:p-10 space-y-7">
            <div className="space-y-5 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              <p>
                I am a software engineer focused on <strong className="text-white font-semibold">systems programming</strong>, <strong className="text-white font-semibold">low-latency infrastructure</strong>, <strong className="text-white font-semibold">distributed backends</strong>, and <strong className="text-white font-semibold">security tooling</strong>.
              </p>

              <p>
                I love working close to the machine—where cache line alignment, memory allocation patterns, and socket polling behavior dictate real system throughput. Much of my time is spent building deterministic limit order books in C++, AST data-flow analyzers, and optimistic concurrency state machines that guarantee correctness under high concurrency.
              </p>

              <div className="p-4 bg-neutral-900/60 border-l-2 border-neutral-600 rounded-r-lg text-sm text-neutral-200">
                <span className="text-neutral-400 font-mono text-xs block mb-1">Core Principle:</span>
                Mechanical sympathy, predictable latency bounds, and verifiable correctness over speculative assumptions.
              </div>

              <p>
                Rather than relying on guesswork, I build rigorous test harnesses that stress state invariants under simulated network flapping, burst throughput, and adverse payloads.
              </p>

              <p>
                Outside of standalone projects, I actively contribute upstream to critical open-source systems including <span className="text-white font-semibold">Valkey</span>, <span className="text-white font-semibold">Fastify</span>, <span className="text-white font-semibold">QuantConnect Lean</span>, and <span className="text-white font-semibold">QuickFIX</span>, optimizing message parsers, AST validators, and stream pipelines.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between text-sm text-neutral-400 gap-4">
              <div>
                <span className="text-white font-semibold block">B.Tech in Computer Science & Engineering</span>
                <span className="text-neutral-500 text-xs">Presidency University · Bengaluru</span>
              </div>
              <div className="text-xs font-mono bg-neutral-900 border border-neutral-800/80 px-3 py-1.5 rounded-md text-neutral-300">
                DSA · Operating Systems · Networks · DBMS
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;