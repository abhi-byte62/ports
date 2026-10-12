import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import PixelMissionArtwork from "../components/ProjectShowcase/PixelMissionArtwork";

import tradeForgeImg from "../assets/images/tradeforge/01_tradeforge_terminal_overview.png";
import ladderImg from "../assets/images/liquiditylens/01_order_book_depth_ladder.png";
import stackLensImg from "../assets/images/stacklens/01-landing-hero-dashboard.png";
import taskFlowImg from "../assets/images/taskflow/04_kanban_board_full.png";

const projects = [
  {
    id: "liquiditylens",
    category: "Quantitative Systems · C++17",
    categoryKey: "quant",
    title: "LiquidityLens",
    subtitle: "Market Microstructure & LOB Matching Engine",
    description:
      "Deterministic C++17 limit order book and market microstructure engine benchmarked at ~220ns core latency. Implements tick-level order processing, adverse selection markout curves, FIFO queue priority dynamics, and synthetic Hawkes jump processes with zero runtime memory allocations.",
    metrics: [
      { value: "~220ns", label: "Core latency" },
      { value: "4.5M+", label: "Events / sec" },
      { value: "Fixed-Point", label: "int64_t math" },
      { value: "Zero-Alloc", label: "Runtime memory" },
    ],
    image: ladderImg,
    link: "/liquiditylens",
    github: "https://github.com/abhi-byte62/liquiditylens",
    tags: ["C++17", "FastAPI", "React 19", "Fixed-Point Math", "Hawkes Processes", "Docker"],
  },
  {
    id: "tradeforge",
    category: "Fintech & Electronic Trading · TypeScript",
    categoryKey: "quant",
    title: "TradeForge",
    subtitle: "Real-Time Paper Trading & Market Simulation Terminal",
    description:
      "In-memory deterministic matching engine benchmarked at 247,000+ orders/sec. Features synchronous pre-trade margin gates (5x MIS leverage), stochastic tick price simulations, Level-2 depth ladders, and atomic balance reconciliation.",
    metrics: [
      { value: "247K", label: "Orders / sec" },
      { value: "4.1µs", label: "Matching latency" },
      { value: "5x MIS", label: "Pre-trade margin" },
      { value: "Strict ACID", label: "Balance invariants" },
    ],
    image: tradeForgeImg,
    link: "/tradeforge",
    github: "https://github.com/abhi-byte62/tradeforge",
    tags: ["TypeScript", "Node.js", "React 19", "WebSockets", "PostgreSQL", "Canvas API"],
  },
  {
    id: "stacklens",
    category: "Developer Infrastructure · Java 21 & Spring Boot 3",
    categoryKey: "infra",
    title: "StackLens",
    subtitle: "Website Architecture Intelligence & Signature Engine",
    description:
      "Asynchronous web technology detection engine parsing 200+ signatures to infer infrastructure topologies. Features an RFC 1918 SSRF-hardened perimeter validator, RabbitMQ worker queues, and sub-1.2s DAG topology synthesis.",
    metrics: [
      { value: "200+", label: "Signatures" },
      { value: "RFC 1918", label: "SSRF shield" },
      { value: "RabbitMQ", label: "Worker queues" },
      { value: "<1.2s", label: "DAG synthesis" },
    ],
    image: stackLensImg,
    link: "/stacklens",
    github: "https://github.com/abhi-byte62/stacklens",
    tags: ["Java 21", "Spring Boot 3", "RabbitMQ", "PostgreSQL 16", "Redis 7.2", "React 19"],
  },
  {
    id: "taskflow",
    category: "Distributed State & Real-Time Sync",
    categoryKey: "distributed",
    title: "TaskFlow",
    subtitle: "Real-Time Collaborative Workspace with OCC",
    description:
      "Collaborative project workspace using optimistic concurrency control (OCC) to guarantee deterministic writes without lost updates. Employs fractional float midpoint indexing for O(1) drag reordering and room-scoped Socket.io state synchronization.",
    metrics: [
      { value: "OCC", label: "Version vectors" },
      { value: "O(1)", label: "Midpoint reorder" },
      { value: "<10ms", label: "Socket sync" },
      { value: "PostgreSQL", label: "ACID isolation" },
    ],
    image: taskFlowImg,
    link: "/taskflow",
    github: "https://github.com/abhi-byte62/taskflow",
    tags: ["React 18", "Node.js", "PostgreSQL 17", "Prisma ORM", "Socket.io", "@dnd-kit"],
  },
];

const secondaryProjects = [
  {
    title: "DontTrust",
    category: "Application Security & Static Analysis",
    stack: "TypeScript · Node.js · Babel AST · Cytoscape.js · SARIF v2.1.0",
    description:
      "AST data-flow engine tracking tainted input propagation to detect DOM-based XSS, multi-identity authorization differentials (BOLA/IDOR), and privilege escalation with 100% benchmark precision.",
    link: "/donttrust",
    github: "https://github.com/abhi-byte62/dontTrust",
    metrics: "100% Precision",
  },
  {
    title: "Specter Proxy",
    category: "Networking & Protocol Security",
    stack: "Node.js Streams · TLS Dynamic MITM · Backpressure · SNI Inspection",
    description:
      "Stream-oriented HTTP/TLS forward proxy for packet inspection, using highWaterMark backpressure flow control to bound memory usage to ~35MB across asymmetric client/upstream network speeds.",
    link: "/specter-proxy",
    github: "https://github.com/abhi-byte62/specter-proxy",
    metrics: "<4.2ms Overhead",
  },
  {
    title: "Packet Sniffer 3D",
    category: "Systems & GPU Spatial Graphics",
    stack: "Three.js · WebGL · PCAP Binary Parser · Zero-Copy Buffers · Vite",
    description:
      "Browser binary PCAP network packet capture parser using TypedArrays and Three.js instanced GPU meshes, rendering 50,000+ network nodes and packet vectors at 60 FPS in 3 draw calls.",
    link: "/packet-sniffer",
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
    metrics: "50K Packets @ 60 FPS",
  },
];

const filterCategories = [
  { key: "all", label: "All projects" },
  { key: "quant", label: "Systems & Quant" },
  { key: "infra", label: "Developer Tools" },
  { key: "distributed", label: "Distributed Systems" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewModes, setViewModes] = useState({});

  const toggleViewMode = (id) => {
    setViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === "artwork" ? "screenshot" : "artwork",
    }));
  };

  const filteredProjects = projects.filter((p) =>
    activeFilter === "all" ? true : p.categoryKey === activeFilter
  );

  return (
    <Section id="projects" className="py-24 bg-[#090A0F] text-[#EDEDED] border-t border-white/[0.06]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Projects & Case Studies
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
            Production-focused implementations across sub-microsecond limit order books, AST taint analysis engines, architecture DAG synthesizers, and distributed state engines.
          </p>

          {/* Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2" role="tablist" aria-label="Project category filters">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeFilter === cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === cat.key
                    ? "bg-white text-neutral-950 font-semibold"
                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800 hover:bg-neutral-850"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Major Project Panels */}
        <div className="space-y-10 sm:space-y-12">
          {filteredProjects.map((p) => {
            const isArtwork = viewModes[p.id] === "artwork";

            return (
              <div
                key={p.id}
                className="rounded-2xl border border-neutral-800/80 bg-[#0C0D13] p-6 sm:p-8 lg:p-9 transition-colors"
              >
                {/* Top Category & View Mode Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-white/[0.06] text-xs">
                  <span className="font-medium text-neutral-400 text-xs">
                    {p.category}
                  </span>
                  <div>
                    <button
                      onClick={() => toggleViewMode(p.id)}
                      aria-pressed={isArtwork}
                      aria-label={`Toggle view for ${p.title}`}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      {isArtwork ? "Show screenshot" : "Show architecture diagram"}
                    </button>
                  </div>
                </div>

                {/* Grid: Left Details, Right Graphic */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Left Column (6 cols) */}
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {p.title}
                      </h3>
                      <div className="text-sm text-neutral-400 font-normal mt-1">
                        {p.subtitle}
                      </div>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      {p.description}
                    </p>

                    {/* Clean Typographic Metrics Strip (No nested boxes) */}
                    <div className="flex flex-wrap items-center gap-6 sm:gap-8 py-3 border-y border-white/[0.06]">
                      {p.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-base sm:text-lg font-semibold text-white font-mono tracking-tight">
                            {m.value}
                          </span>
                          <span className="text-xs text-neutral-400 font-sans mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800/80 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        to={p.link}
                        className="btn-primary"
                      >
                        <span>Case study</span>
                        <HiArrowRight size={13} />
                      </Link>

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary"
                        >
                          <FaGithub size={13} />
                          <span>Source</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Preview */}
                  <div className="lg:col-span-6">
                    {isArtwork ? (
                      <div className="aspect-[16/11] w-full rounded-xl overflow-hidden border border-neutral-800 bg-[#090A0F]">
                        <PixelMissionArtwork projectId={p.id} title={p.title} />
                      </div>
                    ) : (
                      <Link
                        to={p.link}
                        className="group relative block w-full aspect-[16/11] rounded-xl overflow-hidden border border-neutral-800 bg-[#090A0F] hover:border-neutral-700 transition-colors shadow-md"
                        aria-label={`View ${p.title} deep-dive case study`}
                      >
                        <img
                          src={p.image}
                          alt={`Case study interface for ${p.title}`}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-200"
                          loading="lazy"
                          decoding="async"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Implementations */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Specialized Systems & Security Tooling
            </h3>
            <p className="text-sm text-neutral-400 mt-1">
              Focused utilities built for binary packet inspection, AST taint tracking, and TLS proxies.
            </p>
          </div>

          <div className="space-y-3.5">
            {secondaryProjects.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-800/80 bg-[#0C0D13] p-5 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-neutral-700 transition-colors"
              >
                <div className="max-w-2xl space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      {item.metrics}
                    </span>
                  </div>

                  <div className="text-xs font-mono text-neutral-400">
                    {item.stack}
                  </div>

                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <Link
                    to={item.link}
                    className="btn-primary !text-xs !py-1.5 !px-3"
                  >
                    <span>Details</span>
                    <HiArrowRight size={12} />
                  </Link>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !text-xs !py-1.5 !px-2.5"
                    title="View GitHub Repository"
                  >
                    <FaGithub size={13} />
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