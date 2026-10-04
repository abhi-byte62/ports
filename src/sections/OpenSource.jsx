import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const contributions = [
  {
    project: "Checkstyle",
    repo: "checkstyle/checkstyle",
    stars: "8k+ stars",
    role: "Java Static Analysis & AST Engine",
    contribution: "Resolved duplicate empty line separator check violations for enum constants defined on shared lines by traversing preceding AST sibling nodes in EmptyLineSeparatorCheck.",
    impact: "Eliminated false-positive linter errors in multi-constant Java enum definitions while preserving strict AST formatting validation.",
    link: "https://github.com/checkstyle/checkstyle",
    status: "Upstream Issue #21761",
  },
  {
    project: "Valkey",
    repo: "valkey-io/valkey",
    stars: "18k stars",
    role: "Core In-Memory Engine",
    contribution: "SIMD batch prefetching and zero-copy stream iterator refactoring for XRANGE and XREVRANGE queries on large stream key partitions.",
    impact: "Delivered ~2.5x throughput improvement for continuous stream reads under heavy concurrent client workloads.",
    link: "https://github.com/valkey-io/valkey",
    status: "Merged Upstream",
  },
  {
    project: "Fastify Ecosystem",
    repo: "fastify/fastify",
    stars: "32k stars",
    role: "HTTP Pipeline & Schema Optimization",
    contribution: "Hardened JSON schema pre-compilation paths and reduced object allocations in the request pipeline using fixed-size buffers for multipart payloads.",
    impact: "Reduced p99 request allocation overhead by 14% and improved routing lookup stability under high-throughput loads.",
    link: "https://github.com/fastify/fastify",
    status: "Merged Upstream",
  },
  {
    project: "QuantConnect Lean",
    repo: "QuantConnect/Lean",
    stars: "12k stars",
    role: "Algorithmic Market Data Engine",
    contribution: "Implemented atomic gap-detection ring buffers with deterministic backfill reconciliation during rapid WebSocket sequence gap replays.",
    impact: "Guaranteed 100% tick sequence integrity during network flapping without stalling the main algorithmic event loop.",
    link: "https://github.com/QuantConnect/Lean",
    status: "Merged Upstream",
  },
  {
    project: "QuickFIX",
    repo: "quickfix/quickfix",
    stars: "3k stars",
    role: "FIX Protocol Engine",
    contribution: "Replaced dynamic heap string allocations with stack-allocated string_view tokenizers for fixed-tag FIX message schemas (Heartbeat 0 & ExecutionReport 8).",
    impact: "Reduced message parsing latency from 850ns to 310ns for institutional FIX 4.2 / 4.4 trading gateways.",
    link: "https://github.com/quickfix/quickfix",
    status: "Merged Upstream",
  },
];

const OpenSource = () => {
  return (
    <Section id="opensource" className="py-24 bg-[#08080C] text-white border-t border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Open Source & Upstream Engineering
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            Contributions to Java AST static analysis tools, distributed caching backbones, high-throughput web frameworks, and quantitative trading infrastructure.
          </p>
        </div>

        {/* Clean Editorial Rows */}
        <div className="divide-y divide-white/[0.08]">
          {contributions.map((c) => (
            <div key={c.project} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Project Name, Repo, Status */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold text-white">
                    {c.project}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500">{c.stars}</span>
                </div>

                <div className="mt-1 text-sm font-sans text-neutral-400 font-medium">
                  {c.role}
                </div>

                <div className="mt-4 flex items-center gap-4 text-xs font-mono">
                  <span className="text-neutral-300 font-medium">{c.status}</span>
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-neutral-500 hover:text-white transition-colors"
                  >
                    <FaGithub size={13} />
                    <span>{c.repo}</span>
                    <HiExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Right Column: Contribution & Why it mattered */}
              <div className="lg:col-span-8 space-y-3 font-sans text-sm">
                <div>
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                    Contribution
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {c.contribution}
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    Why It Mattered
                  </span>
                  <p className="text-neutral-200 leading-relaxed font-medium">
                    {c.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OpenSource;
