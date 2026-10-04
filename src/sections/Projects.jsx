import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

import tradeForgeImg from "../assets/images/tradeforge/01_tradeforge_terminal_overview.png";
import ladderImg from "../assets/images/liquiditylens/01_order_book_depth_ladder.png";
import stackLensImg from "../assets/images/stacklens/01-landing-hero-dashboard.png";
import taskFlowImg from "../assets/images/taskflow/04_kanban_board_full.png";

const projects = [
  {
    id: "liquiditylens",
    category: "QUANTITATIVE SYSTEMS · C++17",
    title: "LiquidityLens",
    description:
      "High-frequency market simulation engine processing tick-by-tick order flows with sub-microsecond latency. Evaluates adverse selection markout curves, FIFO queue priority dynamics, and Hawkes jump processes without dynamic runtime allocations.",
    metrics: [
      { value: "<250ns", label: "Target Latency" },
      { value: "Zero-Alloc", label: "Memory Runtime" },
      { value: "L2 Depth", label: "Order Book Ladder" },
    ],
    image: ladderImg,
    link: "/liquiditylens",
    github: "https://github.com/abhi-byte62/liquiditylens",
    isReversed: false,
  },
  {
    id: "tradeforge",
    category: "QUANTITATIVE SYSTEMS · C++20",
    title: "TradeForge",
    description:
      "Real-time algorithmic trading and market simulation platform featuring sub-millisecond risk evaluation, live Binance/Coinbase WebSocket ingestion, and an ultra-low latency portfolio PnL execution engine.",
    metrics: [
      { value: "<1ms", label: "Target Latency" },
      { value: "C++20", label: "Execution Engine" },
      { value: "Live WS", label: "Market Data Stream" },
    ],
    image: tradeForgeImg,
    link: "/tradeforge",
    github: "https://github.com/abhi-byte62/tradeforge",
    isReversed: true,
  },
  {
    id: "stacklens",
    category: "DEVELOPER INFRASTRUCTURE · GO",
    title: "StackLens",
    description:
      "Automated web infrastructure inspection engine that reconstructs complete backend and frontend architecture topologies from live endpoints with RFC 1918 private network SSRF defense and technology fingerprinting.",
    metrics: [
      { value: "200+", label: "Weighted Signatures" },
      { value: "RFC 1918", label: "SSRF Defense" },
      { value: "DAG", label: "Topology Graph" },
    ],
    image: stackLensImg,
    link: "/stacklens",
    github: "https://github.com/abhi-byte62/stacklens",
    isReversed: false,
  },
  {
    id: "taskflow",
    category: "DISTRIBUTED SYSTEMS · REAL-TIME",
    title: "TaskFlow",
    description:
      "Distributed collaboration engine with optimistic concurrency control (OCC) version vectors and zero-lock fractional indexing midpoint reordering, guaranteeing deterministic state synchronization over WebSockets.",
    metrics: [
      { value: "OCC", label: "Version Vectors" },
      { value: "O(1)", label: "Reordering Locks" },
      { value: "WebSocket", label: "Real-Time Broadcast" },
    ],
    image: taskFlowImg,
    link: "/taskflow",
    github: "https://github.com/abhi-byte62/taskflow",
    isReversed: true,
  },
];

const secondaryProjects = [
  {
    title: "DontTrust",
    stack: "TypeScript, Babel AST, Security Runtime",
    description:
      "Hybrid static and dynamic analysis engine tracking tainted input propagation across JavaScript AST nodes to intercept BOLA/IDOR vulnerabilities with zero false positives.",
    link: "/donttrust",
    github: "https://github.com/abhi-byte62/dontTrust",
  },
  {
    title: "Specter Proxy",
    stack: "Go, Linux Sockets, HTTP/2",
    description:
      "High-throughput reverse proxy with dynamic token-bucket rate limiting, IP reputation scoring, and zero-allocation streaming body inspectors.",
    link: "/specter-proxy",
    github: "https://github.com/abhi-byte62/specter-proxy",
  },
  {
    title: "Packet Sniffer 3D",
    stack: "C++, WebGL, PCAP Engine",
    description:
      "PCAP network traffic capture parser with zero-copy ArrayBuffer decoding and GPU spatial network packet telemetry visualization.",
    link: "/packet-sniffer",
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="py-24 bg-[#08080C] text-white">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Selected Engineering Projects
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            In-depth case studies across sub-microsecond market simulation engines, AST taint runtimes, architecture inspectors, and distributed synchronization platforms.
          </p>
        </div>

        {/* Editorial Alternating Project Cards */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {projects.map((p) => (
            <div
              key={p.id}
              className="rounded-[28px] sm:rounded-[32px] border border-white/[0.08] bg-[#0A0A0F] p-8 sm:p-12 lg:p-14 hover:border-white/[0.14] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Project Information Column */}
                <div
                  className={`flex flex-col justify-between ${
                    p.isReversed
                      ? "lg:col-span-5 order-1 lg:order-2"
                      : "lg:col-span-5 order-1"
                  }`}
                >
                  <div>
                    {/* Category Label with Dot */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        {p.category}
                      </span>
                    </div>

                    {/* Large Project Name */}
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                      {p.title}
                    </h3>

                    {/* Short Human Description */}
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-lg mb-8">
                      {p.description}
                    </p>

                    {/* Key Metrics / Engineering Facts */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 pb-6 border-t border-white/[0.06] mb-8">
                      {p.metrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white font-mono">
                            {m.value}
                          </div>
                          <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 mt-1 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore & Source Action Links */}
                  <div className="flex items-center gap-6">
                    <Link
                      to={p.link}
                      className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors"
                    >
                      <span>Explore</span>
                      <HiArrowRight
                        className="transition-transform duration-200 group-hover:translate-x-1"
                        size={16}
                      />
                    </Link>

                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors flex items-center gap-1.5"
                      >
                        <FaGithub size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Large Project Image Column */}
                <div
                  className={`${
                    p.isReversed
                      ? "lg:col-span-7 order-2 lg:order-1"
                      : "lg:col-span-7 order-2"
                  }`}
                >
                  <Link
                    to={p.link}
                    className="group relative block w-full aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/11] rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#07070A]"
                    aria-label={`View ${p.title} case study`}
                  >
                    <img
                      src={p.image}
                      alt={`Case study interface overview for ${p.title}`}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      loading="lazy"
                      decoding="async"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* -------------------------------------------------------------
            SPECIALIZED SYSTEMS ARCHIVE (Minimal Editorial Rows)
           ------------------------------------------------------------- */}
        <div className="pt-16 sm:pt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-3 border-b border-white/[0.08]">
            <h3 className="text-xl font-semibold text-white">
              Specialized Implementations & Tooling
            </h3>
            <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0">
              SECONDARY ARCHIVE
            </span>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {secondaryProjects.map((item) => (
              <div
                key={item.title}
                className="py-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-neutral-500">
                      {item.stack}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 font-sans">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono">
                  <Link
                    to={item.link}
                    className="text-neutral-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Case Study</span>
                    <HiArrowRight size={12} />
                  </Link>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 hover:text-neutral-300 flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <HiExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;