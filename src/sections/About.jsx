import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const About = () => {
  return (
    <Section id="about" className="py-20 bg-[#080D1A] text-[#E6EAF2] border-t-2 border-[#334366]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] text-[#FFD166]">
              <span className="h-2 w-2 bg-[#FFD166]" />
              <span>CHARACTER KERNEL // 04</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-pixel-heading">
              Engineering Focus & Philosophy
            </h2>
          </div>

          {/* Retro Profile Box */}
          <div className="pixel-frame p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-[#334366] text-[9px] font-pixel text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#55E6C1]" />
                <span className="text-white">SYS_MANIFESTO.DAT</span>
              </div>
              <span className="text-[#55E6C1]">[VERIFIED]</span>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-[#E6EAF2] leading-relaxed font-mono">
              <p>
                I am a software engineer focused on <strong className="text-white font-bold">systems programming</strong>, <strong className="text-white font-bold">quantitative infrastructure</strong>, <strong className="text-white font-bold">distributed backends</strong>, and <strong className="text-white font-bold">security tooling</strong>.
              </p>

              <p className="text-[#94A3B8]">
                I enjoy working close to the machine—where CPU cache lines, memory allocations, and socket polling behavior dictate real system throughput. Much of my engineering time is spent designing sub-microsecond limit order book engines, AST static/dynamic taint analyzers, and optimistic concurrency state machines that guarantee deterministic consistency without unbounded lock contention.
              </p>

              <div className="p-4 bg-[#0F172A] border-2 border-[#55E6C1] shadow-[3px_3px_0px_#04070D] font-mono text-xs text-[#E6EAF2]">
                <div className="text-[#55E6C1] font-pixel text-[8px] mb-1">CORE INVARIANT &gt;&gt;</div>
                Mechanical sympathy, predictable latency bounds, and deterministic verification over speculative assumptions.
              </div>

              <p className="text-[#94A3B8]">
                Rather than relying on guesswork, I build test harnesses that assert state invariants under chaotic network flapping, high-throughput bursts, and adversarial payloads.
              </p>

              <p className="text-[#94A3B8]">
                Beyond standalone projects, I actively contribute upstream to critical open-source software like <span className="text-white font-bold">Checkstyle</span>, <span className="text-white font-bold">Valkey</span>, <span className="text-white font-bold">Fastify</span>, <span className="text-white font-bold">QuantConnect Lean</span>, and <span className="text-white font-bold">QuickFIX</span>, optimizing compiler AST validators, message parsers, and stream iterators for high-throughput and correct production environments.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <div className="pt-6 border-t-2 border-[#334366] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#94A3B8] gap-3 font-mono">
              <div>
                <span className="text-white font-pixel text-xs block">B.Tech in Computer Science & Engineering</span>
                <span className="text-[#64748B]">Presidency University</span>
              </div>
              <div className="text-[10px] font-pixel bg-[#080D1A] px-3 py-1.5 border-2 border-[#334366] text-[#55E6C1] shadow-[2px_2px_0px_#04070D]">
                DSA · OS · NETWORKS · DBMS
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;