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
    code: "MISSION_01",
    category: "QUANTITATIVE SYSTEMS · C++17",
    categoryKey: "quant",
    title: "LiquidityLens",
    subtitle: "Market Microstructure & Matching Engine",
    description:
      "Deterministic C++17 limit order book and market microstructure simulator processing tick-by-tick order flows with sub-microsecond latency. Evaluates adverse selection markout curves, FIFO queue priority dynamics, and Hawkes jump processes without dynamic runtime allocations.",
    problem:
      "Standard financial backtesters rely on discrete 1-minute OHLCV bars, ignoring queue priority, latency slip, and aggressive market order impact in fast-moving books.",
    solution:
      "Constructed a deterministic C++17 matching engine paired with a FastAPI and React telemetry frontend, modeling microsecond-level tick events, synthetic Hawkes process order arrivals, and exact FIFO fill simulations.",
    metrics: [
      { value: "~220ns", label: "LATENCY" },
      { value: "4.5M+", label: "EVENTS/SEC" },
      { value: "Fixed-Point", label: "INT64_T MATH" },
      { value: "Zero-Alloc", label: "RUNTIME MEMORY" },
    ],
    image: ladderImg,
    link: "/liquiditylens",
    github: "https://github.com/abhi-byte62/liquiditylens",
    tags: ["C++17", "FastAPI", "React 19", "Fixed-Point Math", "Hawkes Processes", "Docker"],
  },
  {
    id: "tradeforge",
    code: "MISSION_02",
    category: "FINTECH & ELECTRONIC TRADING · TYPESCRIPT",
    categoryKey: "quant",
    title: "TradeForge",
    subtitle: "Real-Time Paper Trading & Market Simulation",
    description:
      "Real-time paper trading terminal with an in-memory deterministic FIFO matching engine benchmarked at 247,000+ orders/sec, synchronous pre-trade margin gates (5x MIS leverage), and stochastic tick price simulation.",
    problem:
      "Testing algorithmic execution strategies against realistic Level-2 market microstructure and margin-enforced risk rules typically requires expensive exchange sandbox access or naive bar-based simulators.",
    solution:
      "Built an in-memory TypeScript matching engine paired with a stochastic price simulator, Level-2 depth ladder, 5x MIS leverage margin calculations, and atomic position P&L tracking.",
    metrics: [
      { value: "247K", label: "ORDERS/SEC" },
      { value: "4.1µs", label: "CORE LATENCY" },
      { value: "5x MIS", label: "PRE-TRADE MARGIN" },
      { value: "Invariant", label: "P&L BALANCE" },
    ],
    image: tradeForgeImg,
    link: "/tradeforge",
    github: "https://github.com/abhi-byte62/tradeforge",
    tags: ["TypeScript", "Node.js", "React 19", "WebSockets", "PostgreSQL", "Canvas API"],
  },
  {
    id: "stacklens",
    code: "MISSION_03",
    category: "DEVELOPER INFRASTRUCTURE · JAVA 21 & SPRING BOOT 3",
    categoryKey: "infra",
    title: "StackLens",
    subtitle: "Website Architecture Intelligence Engine",
    description:
      "Asynchronous website technology detection engine that parses 200+ signatures to infer infrastructure topologies, protected by SSRF-hardened perimeter guards and asynchronous event queues.",
    problem:
      "Understanding the infrastructure posture of third-party web apps requires manual header analysis and reverse engineering, while automated scanning risks SSRF vulnerabilities.",
    solution:
      "Constructed an asynchronous probe engine in Java 21 & Spring Boot 3 using RabbitMQ event queues, Redis caching, and an SSRF-hardened perimeter validator that parses signatures and outputs interactive DAG topologies.",
    metrics: [
      { value: "200+", label: "SIGNATURES" },
      { value: "RFC 1918", label: "SSRF SHIELD" },
      { value: "RabbitMQ", label: "WORKER QUEUE" },
      { value: "<1.2s", label: "DAG SYNTHESIS" },
    ],
    image: stackLensImg,
    link: "/stacklens",
    github: "https://github.com/abhi-byte62/stacklens",
    tags: ["Java 21", "Spring Boot 3", "RabbitMQ", "PostgreSQL 16", "Redis 7.2", "React 19"],
  },
  {
    id: "taskflow",
    code: "MISSION_04",
    category: "DISTRIBUTED STATE · OCC REAL-TIME",
    categoryKey: "distributed",
    title: "TaskFlow",
    subtitle: "Real-Time Collaborative State Engine",
    description:
      "Distributed collaborative workspace with optimistic concurrency control (OCC) to prevent stale writes, fractional indexing for O(1) drag reordering, and room-scoped Socket.io state synchronization.",
    problem:
      "Multi-user concurrent board modifications frequently result in lost updates, clobbered descriptions, or expensive O(N) database shifts on card reordering.",
    solution:
      "Implemented integer revision tags for optimistic concurrency locking, coupled with mid-point float ranking for O(1) reordering and room-scoped Socket.io state synchronization.",
    metrics: [
      { value: "OCC", label: "VERSION VECTORS" },
      { value: "O(1)", label: "MIDPOINT REORDER" },
      { value: "<10ms", label: "SOCKET SYNC" },
      { value: "Postgres", label: "ACID ISOLATION" },
    ],
    image: taskFlowImg,
    link: "/taskflow",
    github: "https://github.com/abhi-byte62/taskflow",
    tags: ["React 18", "Node.js", "PostgreSQL 17", "Prisma ORM", "Socket.io", "@dnd-kit"],
  },
];

const secondaryProjects = [
  {
    code: "ARCHIVE_01",
    title: "DontTrust",
    category: "Application Security & Distributed Analysis",
    stack: "TypeScript · Node.js · Babel AST · Cytoscape.js · SARIF v2.1.0",
    description:
      "AST-based JavaScript data-flow engine tracking tainted input propagation to detect DOM-based XSS, multi-identity differential authorization testing Horizontal BOLA/IDOR and Vertical Privilege Escalation with 100% benchmark precision.",
    link: "/donttrust",
    github: "https://github.com/abhi-byte62/dontTrust",
    metrics: "100% Precision · 0 False Positives",
  },
  {
    code: "ARCHIVE_02",
    title: "Specter Proxy",
    category: "Networking & Protocol Security",
    stack: "Node.js Streams · TLS Dynamic MITM · Backpressure · SNI Inspection",
    description:
      "Stream-oriented HTTP/TLS forward proxy for packet inspection, using highWaterMark backpressure flow control to bound memory usage to ~35MB across asymmetric client/upstream network speeds.",
    link: "/specter-proxy",
    github: "https://github.com/abhi-byte62/specter-proxy",
    metrics: "<4.2ms Overhead · ~35MB Heap",
  },
  {
    code: "ARCHIVE_03",
    title: "Packet Sniffer 3D",
    category: "Systems & GPU Spatial Graphics",
    stack: "Three.js · WebGL · PCAP Binary Parser · Zero-Copy Buffers · Vite",
    description:
      "Browser-based binary PCAP network packet capture parser using TypedArrays and Three.js instanced GPU meshes, rendering 50,000+ network nodes and packet vectors at 60 FPS in 3 draw calls.",
    link: "/packet-sniffer",
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
    metrics: "50K Packets @ 60 FPS · 3 Draw Calls",
  },
];

const filterCategories = [
  { key: "all", label: "ALL MISSIONS" },
  { key: "quant", label: "QUANT & SYSTEMS" },
  { key: "infra", label: "DEV TOOLS" },
  { key: "distributed", label: "DISTRIBUTED STATE" },
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
    <Section id="projects" className="py-20 bg-[#080D1A] text-[#E6EAF2] border-t-2 border-[#334366]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] text-[#55E6C1]">
            <span className="h-2 w-2 bg-[#55E6C1]" />
            <span>MISSION LOG // 01</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-pixel-heading">
            Selected Engineering Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-mono">
            Deep-dive case studies across sub-microsecond limit order books, AST taint analysis engines, architecture DAG synthesizers, and distributed synchronization platforms.
          </p>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`pixel-btn !py-2 !px-3 !text-[8px] ${
                  activeFilter === cat.key
                    ? "pixel-btn-primary"
                    : "!bg-[#141E36] !text-[#94A3B8]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Major Project Panels */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((p) => {
            const isArtwork = viewModes[p.id] === "artwork";

            return (
              <div
                key={p.id}
                className="pixel-frame p-6 sm:p-8 lg:p-10"
              >
                {/* Top Stamp Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b-2 border-[#334366] text-[9px] font-pixel text-[#94A3B8]">
                  <div className="flex items-center gap-2.5">
                    <span className="bg-[#55E6C1] text-[#080D1A] px-2 py-0.5 font-bold shadow-[2px_2px_0px_#04070D]">
                      {p.code}
                    </span>
                    <span className="text-[#8AA4FF]">{p.category}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => toggleViewMode(p.id)}
                      className="pixel-btn !py-1 !px-2.5 !text-[8px] !bg-[#0F172A] !text-[#FFD166] hover:!text-[#55E6C1]"
                    >
                      MODE: {isArtwork ? "BLUEPRINT ART" : "SCREENSHOT"}
                    </button>
                  </div>
                </div>

                {/* Grid: Left Details, Right Graphic */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Left Column (6 cols) */}
                  <div className="lg:col-span-6 space-y-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-pixel-heading">
                        {p.title}
                      </h3>
                      <div className="text-xs font-pixel text-[#55E6C1] mt-1">
                        {p.subtitle}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-mono">
                      {p.description}
                    </p>

                    {/* Engineering Facts / Metrics 4-Box Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 pb-2">
                      {p.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="bg-[#0F172A] border-2 border-[#334366] p-2.5 shadow-[2px_2px_0px_#04070D]"
                        >
                          <div className="text-sm sm:text-base font-bold text-white font-pixel">
                            {m.value}
                          </div>
                          <div className="text-[8px] font-pixel text-[#64748B] mt-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tags.map((t) => (
                        <span key={t} className="pixel-tag">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-[#334366]">
                      <Link
                        to={p.link}
                        className="pixel-btn pixel-btn-primary"
                      >
                        <span>EXPLORE CASE STUDY</span>
                        <HiArrowRight size={12} />
                      </Link>

                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="pixel-btn pixel-btn-secondary"
                        >
                          <FaGithub size={12} />
                          <span>SOURCE</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Visual Blueprint or Screenshot */}
                  <div className="lg:col-span-6">
                    {isArtwork ? (
                      <div className="aspect-[16/11] w-full">
                        <PixelMissionArtwork projectId={p.id} title={p.title} />
                      </div>
                    ) : (
                      <Link
                        to={p.link}
                        className="group relative block w-full aspect-[16/11] border-2 border-[#334366] bg-[#090E1C] overflow-hidden shadow-[4px_4px_0px_#04070D] hover:border-[#55E6C1] transition-all"
                        aria-label={`View ${p.title} deep-dive case study`}
                      >
                        <img
                          src={p.image}
                          alt={`Case study interface for ${p.title}`}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                        <div className="absolute top-2 right-2 bg-[#080D1A]/95 border-2 border-[#334366] px-2 py-0.5 text-[8px] font-pixel text-[#55E6C1]">
                          CLICK TO INSPECT
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* -------------------------------------------------------------
            SPECIALIZED SYSTEMS ARCHIVE
           ------------------------------------------------------------- */}
        <div className="mt-16 pt-10 border-t-2 border-[#334366]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-2 border-b-2 border-[#334366]">
            <h3 className="text-lg sm:text-2xl font-bold text-white font-pixel-heading">
              Specialized Implementations & Security Tooling
            </h3>
            <span className="text-[9px] font-pixel text-[#64748B]">
              [SECONDARY_LOGS: 3 ENTRIES]
            </span>
          </div>

          <div className="space-y-4">
            {secondaryProjects.map((item) => (
              <div
                key={item.title}
                className="pixel-frame-interactive p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="max-w-2xl space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[8px] font-pixel text-[#FFD166] bg-[#0F172A] px-2 py-0.5 border border-[#334366]">
                      {item.code}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white font-pixel-heading">
                      {item.title}
                    </h4>
                    <span className="text-xs font-mono text-[#55E6C1]">
                      ({item.metrics})
                    </span>
                  </div>

                  <div className="text-xs font-mono text-[#8AA4FF]">
                    {item.stack}
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed font-mono">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    to={item.link}
                    className="pixel-btn pixel-btn-primary !py-2 !px-3.5 !text-[8px]"
                  >
                    <span>CASE STUDY</span>
                    <HiArrowRight size={11} />
                  </Link>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pixel-btn pixel-btn-secondary !py-2 !px-3 !text-[8px]"
                  >
                    <FaGithub size={12} />
                    <HiExternalLink size={10} />
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