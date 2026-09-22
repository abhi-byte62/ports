export const skillsMatrix = [
  {
    category: "Systems & Network Protocols",
    focus: "Low-level socket programming, packet dissection, and secure proxy architectures.",
    items: [
      { name: "TCP/IP & Sockets", tag: "Transport Layer" },
      { name: "TLS / SSL & MITM", tag: "Security & PKI" },
      { name: "PCAP Stream Analysis", tag: "Packet Dissection" },
      { name: "Stream Backpressure", tag: "Flow Control" },
      { name: "C (Memory Management)", tag: "Systems" },
      { name: "HTTP/1.1 & HTTP/2", tag: "Application Layer" },
    ],
  },
  {
    category: "Backend & Concurrency",
    focus: "Asynchronous stream pipelines, scalable REST services, and database persistence.",
    items: [
      { name: "Node.js (Streams & Crypto)", tag: "Runtime" },
      { name: "Java & OOP Principles", tag: "Core Language" },
      { name: "Spring Boot", tag: "Microservices" },
      { name: "MySQL & MongoDB", tag: "Storage Engines" },
      { name: "Connection Pooling", tag: "Resilience" },
      { name: "RESTful API Design", tag: "Architecture" },
    ],
  },
  {
    category: "Graphics & Frontend Engineering",
    focus: "Hardware-accelerated 3D spatial rendering, responsive layouts, and performance.",
    items: [
      { name: "Three.js & WebGL", tag: "GPU Acceleration" },
      { name: "Instanced Mesh Rendering", tag: "Draw Call Reduction" },
      { name: "React 19", tag: "UI Framework" },
      { name: "Tailwind CSS", tag: "Design Systems" },
      { name: "Vite Bundler", tag: "Modern Tooling" },
      { name: "Spatial Graph Physics", tag: "Vector Math" },
    ],
  },
  {
    category: "Tooling, Reliability & DevOps",
    focus: "Continuous integration, containerized deployments, and diagnostic inspection.",
    items: [
      { name: "Wireshark & tcpdump", tag: "Packet Diagnostics" },
      { name: "Docker", tag: "Containerization" },
      { name: "Git & Version Control", tag: "Collaboration" },
      { name: "Postman", tag: "API Verification" },
      { name: "Linux / Bash", tag: "POSIX Environment" },
      { name: "Unit & Fuzz Testing", tag: "Reliability" },
    ],
  },
];

// Backward-compatible export for any legacy references
export const skills = skillsMatrix;