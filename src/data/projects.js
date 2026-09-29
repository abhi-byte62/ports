import packetImage from "../assets/images/packet-sniffer.png";
import specterImage from "../assets/images/specter-proxy.png";
import taskflowImage from "../assets/images/taskflow/04_kanban_board_full.png";

export const projects = [
  {
    id: 1,
    title: "TaskFlow",
    subtitle: "Real-Time Collaborative Kanban & Distributed Task Management Engine",
    description:
      "Engineered a production-grade, FAANG-level collaborative workspace with real-time Socket.io presence, optimistic concurrency control (OCC), gap-based float positioning, server-side RBAC, and atomic Prisma transactions.",
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
    id: 2,
    title: "Packet Sniffer 3D",
    subtitle: "Real-Time PCAP Ingestion & WebGL Spatial Topology Engine",
    description:
      "Engineered a high-throughput network visualizer translating binary PCAP frame captures into an interactive 3D topology. Uses WebGL instancing to render 50,000+ packets at 60 FPS with only 3 GPU draw calls.",
    technologies: ["Three.js", "WebGL", "PCAP Binary Parser", "Zero-Copy Buffers", "Vite"],
    metrics: "50K Packets @ 60 FPS • 3 Draw Calls",
    image: packetImage,
    github: "https://github.com/abhi-byte62/packet-sniffer-3d-",
    route: "/packet-sniffer",
  },
  {
    id: 3,
    title: "Specter Proxy",
    subtitle: "Stream Backpressure & Ephemeral TLS Interception Proxy",
    description:
      "Built a stream-oriented HTTP/HTTPS forward proxy for packet inspection and network degradation simulation. Implements dynamic SNI certificate forging and strict backpressure to sustain a constant ~35MB RAM footprint.",
    technologies: ["Node.js Streams", "TLS Termination", "Backpressure", "Dynamic SNI", "MITM"],
    metrics: "<4.2ms Latency Overhead • 35MB Heap",
    image: specterImage,
    github: "https://github.com/abhi-byte62/specter-proxy",
    route: "/specter-proxy",
  },
];
