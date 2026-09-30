import packetImage from "../assets/images/packet-sniffer.png";
import specterImage from "../assets/images/specter-proxy.png";
import taskflowImage from "../assets/images/taskflow/04_kanban_board_full.png";
import liquiditylensImage from "../assets/images/liquiditylens/01_order_book_depth_ladder.png";
import stacklensImage from "../assets/images/stacklens/01-landing-hero-dashboard.png";

export const projects = [
  {
    id: 1,
    title: "StackLens",
    subtitle: "Website Engineering Intelligence & Architecture Inference Engine",
    category: "Distributed Systems & Backend",
    featured: true,
    description:
      "A developer-focused platform that performs safe, deep reverse-engineering of public web systems. Combines 200+ weighted signature evaluations, SSRF/DNS-rebinding perimeter defense, interactive system DAG generation, and build-from-scratch engineering blueprints.",
    problem:
      "Understanding the production architecture and security posture of third-party web apps requires tedious manual header inspection, script analysis, and reverse engineering, while raw automated scanning risks SSRF vulnerabilities.",
    solution:
      "Constructed a multi-layer asynchronous probe engine in Java 21 & Spring Boot 3 using RabbitMQ event queues, Redis caching, and an SSRF-hardened perimeter validator that parses signatures and outputs interactive DAG topologies.",
    keyDecisions: [
      "SSRF perimeter guard validates resolved target IPs against private RFC 1918 subnets before dispatching crawler workers.",
      "Asynchronous message-driven architecture with RabbitMQ isolates slow external target handshakes from user-facing APIs.",
      "Synthesizes full DDL schemas and REST/GraphQL API specifications based on detected data access patterns.",
    ],
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "React 19",
      "TypeScript",
      "RabbitMQ",
      "PostgreSQL 16",
      "Redis 7.2",
      "Docker",
    ],
    metrics: "200+ Signatures • Sub-Second DAG • SSRF Shield",
    image: stacklensImage,
    github: "https://github.com/abhi-byte62/stackl",
    route: "/stacklens",
  },
  {
    id: 2,
    title: "LiquidityLens",
    subtitle: "Event-Driven Market Microstructure & C++ Execution Simulator",
    category: "Quantitative & Systems Programming",
    featured: true,
    description:
      "An ultra-low-latency quantitative research platform and C++ matching engine for studying limit order book dynamics, exact FIFO queue positioning, latency sensitivity (10µs → 500µs), and zero look-ahead adverse selection markouts.",
    problem:
      "Standard financial backtesters rely on discrete 1-minute OHLCV bars, ignoring queue priority, latency slip, and aggressive market order impact in fast-moving books.",
    solution:
      "Built a deterministic C++17 matching engine paired with a FastAPI and React telemetry frontend, modeling microsecond-level tick events, synthetic Hawkes process order arrivals, and exact FIFO fill simulations.",
    keyDecisions: [
      "Utilized int64_t fixed-point arithmetic across the matching pipeline to completely eliminate IEEE-754 floating-point drift.",
      "Continuous FIFO queue tracking calculates true adverse selection markouts at 10ms, 100ms, and 1s horizons without look-ahead bias.",
      "High-throughput WebSocket streaming pipe pushes real-time L2 depth ladder updates directly to the browser.",
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
    github: "https://github.com/abhi-byte62/liqudity",
    route: "/liquiditylens",
  },
  {
    id: 3,
    title: "TaskFlow",
    subtitle: "Real-Time Collaborative Kanban & Distributed State Engine",
    category: "Full-Stack & Distributed State",
    featured: true,
    description:
      "A real-time collaborative task workspace built with optimistic concurrency control (OCC) to prevent stale writes, gap-based float positioning for O(1) drag reordering, server-side RBAC, and atomic Prisma transactions.",
    problem:
      "Multi-user concurrent board modifications frequently result in lost updates, clobbered descriptions, or expensive O(N) database shifts on card reordering.",
    solution:
      "Implemented integer revision tags for optimistic concurrency locking, coupled with mid-point float ranking for O(1) reordering and room-scoped Socket.io state synchronization.",
    keyDecisions: [
      "Optimistic concurrency control (OCC) rejects stale edits with 409 Conflict triggers, ensuring clean branch resolution.",
      "Fractional indexing calculates card position as (prev + next) / 2, eliminating cascading database updates on drag events.",
      "Strict role-based access control (Admin, Member, Viewer) enforced at both the API gateway and database query levels.",
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
    metrics: "Sub-10ms Sync • OCC Versioning • 100% Type-Safe",
    image: taskflowImage,
    github: "https://github.com/abhi-byte62/taskflow",
    route: "/taskflow",
  },
  {
    id: 4,
    title: "Packet Sniffer 3D",
    subtitle: "Real-Time PCAP Ingestion & WebGL Spatial Topology Engine",
    category: "Systems & Hardware-Accelerated Graphics",
    featured: false,
    description:
      "An interactive network visualizer translating binary PCAP frame captures into a 3D topology. Leverages zero-copy ArrayBuffer decoding and WebGL instanced rendering to stream 50,000+ packet positions with only 3 GPU draw calls.",
    problem:
      "Analyzing multi-gigabyte network packet captures in flat text-heavy tools like Wireshark makes spotting volumetric DDoS bursts and spatial routing anomalies difficult.",
    solution:
      "Developed a browser-based binary PCAP parser using TypedArrays and Three.js instanced meshes that renders thousands of network nodes and packet vectors at 60 FPS.",
    keyDecisions: [
      "Zero-copy TypedArray slicing extracts Ethernet/IP/TCP headers without garbage collection thrashing.",
      "InstancedMesh GPU instancing batches 50,000 active packets into just 3 draw calls per frame.",
    ],
    technologies: ["Three.js", "WebGL", "PCAP Binary Parser", "Zero-Copy Buffers", "Vite"],
    metrics: "50K Packets @ 60 FPS • 3 Draw Calls",
    image: packetImage,
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
    route: "/packet-sniffer",
  },
  {
    id: 5,
    title: "Specter Proxy",
    subtitle: "Stream Backpressure & Ephemeral TLS Interception Proxy",
    category: "Networking & Protocol Security",
    featured: false,
    description:
      "A stream-oriented forward proxy for real-time packet inspection and synthetic network degradation. Implements dynamic in-memory SNI certificate synthesis and strict backpressure flow control to maintain a steady ~35MB heap footprint.",
    problem:
      "Forward proxies capturing high-bandwidth HTTP/TLS traffic frequently encounter memory bloat or out-of-memory crashes when client and upstream connection speeds diverge.",
    solution:
      "Designed a Node.js stream pipeline that enforces highWaterMark backpressure flow pause/resume cycles, coupled with on-the-fly certificate generation signed by an ephemeral root CA.",
    keyDecisions: [
      "Strict Stream backpressure flow control prevents heap runaway when proxying large payloads across asymmetric networks.",
      "Dynamic SNI certificate generation generates and caches in-memory X.509 certs for seamless TLS MITM debugging.",
    ],
    technologies: ["Node.js Streams", "TLS Termination", "Backpressure", "Dynamic SNI", "MITM"],
    metrics: "<4.2ms Latency Overhead • 35MB Heap",
    image: specterImage,
    github: "https://github.com/abhi-byte62/specter-proxy",
    route: "/specter-proxy",
  },
];

