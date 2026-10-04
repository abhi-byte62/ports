import tradeforgeImage from "../assets/images/tradeforge/01_tradeforge_terminal_overview.png";
import liquiditylensImage from "../assets/images/liquiditylens/01_order_book_depth_ladder.png";
import stacklensImage from "../assets/images/stacklens/01-landing-hero-dashboard.png";
import taskflowImage from "../assets/images/taskflow/04_kanban_board_full.png";
import specterImage from "../assets/images/specter-proxy.png";
import packetImage from "../assets/images/packet-sniffer.png";

export const projects = [
  {
    id: 1,
    title: "TradeForge",
    subtitle: "Real-Time Paper Trading & Market Simulation",
    category: "Fintech Systems & Electronic Trading",
    featured: true,
    description:
      "Real-time paper trading terminal with an in-memory deterministic FIFO matching engine, synchronous pre-trade margin gates (5x MIS), and stochastic tick simulation.",
    problem:
      "Testing algorithmic execution strategies against realistic Level-2 market microstructure and margin-enforced risk rules typically requires expensive exchange sandbox access or naive bar-based simulators.",
    solution:
      "Built an in-memory TypeScript matching engine benchmarked at 247,000+ orders/sec, paired with a stochastic price simulator, Level-2 depth ladder, 5x MIS leverage margin calculations, and atomic position P&L tracking.",
    keyDecisions: [
      "FIFO matching algorithm with O(1) hash-map cancellations and multi-level VWAP fills.",
      "Synchronous pre-trade risk engine enforcing 5x margin limits, tick increments, and ±10% circuit bands.",
      "Canvas-based candlestick chart with 5-level market depth ladder and WebSocket streams.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "React 19",
      "Native WebSockets",
      "PostgreSQL",
      "Tailwind CSS",
      "Canvas API",
      "Docker",
    ],
    metrics: "247K Orders/sec • 4.1µs Latency • Invariant P&L",
    image: tradeforgeImage,
    github: "https://github.com/abhi-byte62/tradeforge",
    route: "/tradeforge",
  },
  {
    id: 2,
    title: "LiquidityLens",
    subtitle: "Market Microstructure & Matching Engine",
    category: "Quantitative Systems & Market Microstructure",
    featured: true,
    description:
      "C++17 limit order book and market microstructure simulator for analyzing deterministic FIFO queue priority, latency sensitivity (10µs → 500µs), and adverse selection markouts.",
    problem:
      "Standard financial backtesters rely on discrete 1-minute OHLCV bars, ignoring queue priority, latency slip, and aggressive market order impact in fast-moving books.",
    solution:
      "Built a deterministic C++17 matching engine paired with a FastAPI and React telemetry frontend, modeling microsecond-level tick events, synthetic Hawkes process order arrivals, and exact FIFO fill simulations.",
    keyDecisions: [
      "Fixed-point int64_t integer arithmetic eliminates floating-point drift and achieves ~220ns event latency.",
      "FIFO queue tracker computes execution decay across 7 tiers with zero look-ahead markouts.",
      "FastAPI and React telemetry frontend streams real-time depth ladders over WebSockets.",
    ],
    technologies: [
      "C++17",
      "Python 3.10",
      "FastAPI",
      "React 19",
      "Fixed-Point Math",
      "Hawkes Processes",
      "WebSocket",
      "Docker",
    ],
    metrics: "4.5M+ Evt/s • ~220ns Latency • Invariant P&L",
    image: liquiditylensImage,
    github: "https://github.com/abhi-byte62/liquiditylens",
    route: "/liquiditylens",
  },
  {
    id: 3,
    title: "StackLens",
    subtitle: "Website Architecture Intelligence Engine",
    category: "Distributed Systems & Security",
    featured: true,
    description:
      "Asynchronous website technology detection engine that parses 200+ signatures to infer infrastructure topologies, protected by SSRF-hardened perimeter guards.",
    problem:
      "Understanding the infrastructure posture of third-party web apps requires manual header analysis and reverse engineering, while automated scanning risks SSRF vulnerabilities.",
    solution:
      "Constructed an asynchronous probe engine in Java 21 & Spring Boot 3 using RabbitMQ event queues, Redis caching, and an SSRF-hardened perimeter validator that parses signatures and outputs interactive DAG topologies.",
    keyDecisions: [
      "SSRF perimeter guard validates resolved target IPs against private RFC 1918 subnets before dispatching workers.",
      "RabbitMQ event-driven pipeline isolates slow external target handshakes from user-facing APIs.",
      "Infers relational schemas and API specifications from detected web asset patterns.",
    ],
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "RabbitMQ",
      "PostgreSQL 16",
      "Redis 7.2",
      "React 19",
      "TypeScript",
      "Docker",
    ],
    metrics: "200+ Signatures • Sub-Second DAG • SSRF Shield",
    image: stacklensImage,
    github: "https://github.com/abhi-byte62/stacklens",
    route: "/stacklens",
  },
  {
    id: 4,
    title: "DontTrust",
    subtitle: "Application Security Assessment & Attack-Surface Intelligence Platform",
    category: "Application Security & Distributed Analysis",
    featured: false,
    description:
      "Distributed web application security assessment platform in TypeScript across 17 monorepo workspaces, integrating discovery, AST source-to-sink data flow analysis, multi-identity differential authorization, and SARIF v2.1.0 reporting.",
    problem:
      "Traditional heuristic security scanners blindly fire noisy payloads leading to high false-positive rates and potential data corruption without understanding application topology, state transitions, or auth boundaries.",
    solution:
      "Engineered an AST-based JavaScript data-flow engine, multi-identity differential authorization matrix, deterministic SHA-256 state graphs, and non-destructive verification probes achieving 100% precision with zero false positives across benchmark suites.",
    keyDecisions: [
      "Client-side AST Source-to-Sink data-flow engine detecting DOM-based XSS with zero third-party runtime dependencies.",
      "Multi-identity differential authorization matrix testing Horizontal BOLA/IDOR and Vertical Privilege Escalation.",
      "Deterministic SHA-256 application state graph with automated secret redaction and SARIF v2.1.0 exports.",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "React 19",
      "Cytoscape.js",
      "AST Analysis",
      "WebSockets",
      "Playwright",
      "Vitest",
      "Docker",
      "SARIF",
    ],
    metrics: "100% Precision • 0 False Positives • SARIF v2.1.0",
    image: null,
    github: "https://github.com/abhi-byte62/dontTrust",
    route: "/donttrust",
  },
  {
    id: 5,
    title: "Specter Proxy",
    subtitle: "Stream Backpressure & TLS Proxy",
    category: "Networking & Protocol Security",
    featured: false,
    description:
      "Stream-oriented HTTP/TLS forward proxy for packet inspection, using highWaterMark backpressure flow control to bound memory usage to ~35MB.",
    problem:
      "Forward proxies capturing high-bandwidth HTTP/TLS traffic frequently encounter memory bloat or out-of-memory crashes when client and upstream connection speeds diverge.",
    solution:
      "Designed a Node.js stream pipeline that enforces highWaterMark backpressure flow pause/resume cycles, coupled with on-the-fly certificate generation signed by an ephemeral root CA.",
    keyDecisions: [
      "Stream backpressure pause/resume cycles prevent buffer bloat across asymmetric connections.",
      "In-memory dynamic SNI certificate generation signed by an ephemeral root CA for TLS inspection.",
    ],
    technologies: ["Node.js Streams", "TLS Termination", "Backpressure", "Dynamic SNI"],
    metrics: "<4.2ms Latency Overhead • ~35MB Heap",
    image: specterImage,
    github: "https://github.com/abhi-byte62/specter-proxy",
    route: "/specter-proxy",
  },
  {
    id: 6,
    title: "TaskFlow",
    subtitle: "Real-Time Collaborative State Engine",
    category: "Full-Stack & Distributed State",
    featured: false,
    description:
      "Collaborative Kanban workspace with optimistic concurrency control (OCC) to prevent stale writes, fractional indexing for O(1) drag reordering, and Socket.io sync.",
    problem:
      "Multi-user concurrent board modifications frequently result in lost updates, clobbered descriptions, or expensive O(N) database shifts on card reordering.",
    solution:
      "Implemented integer revision tags for optimistic concurrency locking, coupled with mid-point float ranking for O(1) reordering and room-scoped Socket.io state synchronization.",
    keyDecisions: [
      "Integer revision tags reject stale concurrent writes with 409 Conflict triggers.",
      "Midpoint float ranking eliminates cascading database updates on card reordering.",
      "Server-side role permissions (Admin, Member, Viewer) enforced on Prisma queries.",
    ],
    technologies: [
      "React 18",
      "Node.js",
      "PostgreSQL 17",
      "Prisma ORM",
      "Socket.io",
      "TanStack Query",
      "@dnd-kit",
      "Tailwind CSS",
    ],
    metrics: "Sub-10ms Sync • OCC Versioning • Type-Safe",
    image: taskflowImage,
    github: "https://github.com/abhi-byte62/taskflow",
    route: "/taskflow",
  },
  {
    id: 7,
    title: "Packet Sniffer 3D",
    subtitle: "Real-Time PCAP Ingestion & WebGL Spatial Topology Engine",
    category: "Systems & Hardware-Accelerated Graphics",
    featured: false,
    description:
      "Network packet capture visualizer that parses binary PCAP files into a 3D topology using zero-copy ArrayBuffer slicing and WebGL instanced rendering.",
    problem:
      "Analyzing multi-gigabyte network packet captures in flat text-heavy tools like Wireshark makes spotting volumetric DDoS bursts and spatial routing anomalies difficult.",
    solution:
      "Developed a browser-based binary PCAP parser using TypedArrays and Three.js instanced meshes that renders thousands of network nodes and packet vectors at 60 FPS.",
    keyDecisions: [
      "Zero-copy TypedArray decoding extracts Ethernet/IP/TCP headers without GC pauses.",
      "InstancedMesh GPU rendering batches 50,000+ packet positions into 3 draw calls at 60 FPS.",
    ],
    technologies: ["Three.js", "WebGL", "PCAP Binary Parser", "Zero-Copy Buffers", "Vite"],
    metrics: "50K Packets @ 60 FPS • 3 Draw Calls",
    image: packetImage,
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
    route: "/packet-sniffer",
  },
];
