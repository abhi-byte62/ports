import packetImage from "../assets/images/packet-sniffer.png";
import specterImage from "../assets/images/specter-proxy.png";
import taskflowImage from "../assets/images/taskflow/04_kanban_board_full.png";
import liquiditylensImage from "../assets/images/liquiditylens/01_order_book_depth_ladder.png";

export const projects = [
  {
    id: 1,
    title: "LiquidityLens",
    subtitle: "Event-Driven Market Microstructure & C++ Execution Simulator",
    description:
      "An ultra-low-latency quantitative research platform and C++ matching engine for studying limit order book dynamics, exact FIFO queue positioning, latency sensitivity (10µs → 500µs), and zero look-ahead adverse selection markouts.",
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
    id: 2,
    title: "TaskFlow",
    subtitle: "Real-Time Collaborative Kanban & Distributed State Engine",
    description:
      "A real-time collaborative task workspace built with optimistic concurrency control (OCC) to prevent stale writes, gap-based float positioning for O(1) drag reordering, server-side RBAC, and atomic Prisma transactions.",
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
    id: 3,
    title: "Packet Sniffer 3D",
    subtitle: "Real-Time PCAP Ingestion & WebGL Spatial Topology Engine",
    description:
      "An interactive network visualizer translating binary PCAP frame captures into a 3D topology. Leverages zero-copy ArrayBuffer decoding and WebGL instanced rendering to stream 50,000+ packet positions with only 3 GPU draw calls.",
    technologies: ["Three.js", "WebGL", "PCAP Binary Parser", "Zero-Copy Buffers", "Vite"],
    metrics: "50K Packets @ 60 FPS • 3 Draw Calls",
    image: packetImage,
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
    route: "/packet-sniffer",
  },
  {
    id: 4,
    title: "Specter Proxy",
    subtitle: "Stream Backpressure & Ephemeral TLS Interception Proxy",
    description:
      "A stream-oriented forward proxy for real-time packet inspection and synthetic network degradation. Implements dynamic in-memory SNI certificate synthesis and strict backpressure flow control to maintain a steady ~35MB heap footprint.",
    technologies: ["Node.js Streams", "TLS Termination", "Backpressure", "Dynamic SNI", "MITM"],
    metrics: "<4.2ms Latency Overhead • 35MB Heap",
    image: specterImage,
    github: "https://github.com/abhi-byte62/specter-proxy",
    route: "/specter-proxy",
  },
];
