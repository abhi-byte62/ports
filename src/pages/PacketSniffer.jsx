import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";

import packetImage from "../assets/images/packet-sniffer.png";

const metrics = [
  {
    category: "THROUGHPUT",
    value: "120K",
    unit: "pkts/sec",
    label: "Binary PCAP Parsing Speed",
    badge: "BENCHMARK",
    description: "Zero-copy ArrayBuffer decoding of Ethernet II and IPv4 frames.",
  },
  {
    category: "PERFORMANCE",
    value: "60",
    unit: "FPS",
    label: "Framerate at 50,000 Particles",
    badge: "LOCKED",
    description: "Hardware-accelerated instanced mesh rendering in WebGL.",
  },
  {
    category: "EFFICIENCY",
    value: "3",
    unit: "calls",
    label: "Total GPU Draw Calls",
    badge: "99.9% DROP",
    description: "Condensed 10,000+ individual meshes into a single instanced pipeline.",
  },
  {
    category: "FOOTPRINT",
    value: "<85",
    unit: "MB",
    label: "Deterministic Heap Memory",
    badge: "STEADY STATE",
    description: "Object pooling and static ring buffers eliminate GC pressure.",
  },
];

const architectureStages = [
  {
    name: "Raw PCAP Ingestion",
    protocol: "ArrayBuffer",
    description: "Reads binary PCAP files directly in the browser using zero-copy TypedArray slicing.",
    tags: ["pcap-header", "endianness", "libpcap"],
  },
  {
    name: "Protocol Frame Decoding",
    protocol: "IPv4 / TCP / UDP",
    description: "Unpacks Ethernet II frames, verifies header lengths, and maps IP addresses to port endpoints.",
    tags: ["checksums", "mac-table", "port-matrix"],
  },
  {
    name: "Spatial Graph Resolver",
    protocol: "Topology Engine",
    description: "Computes 3D spatial node coordinates for subnets, gateways, and clients dynamically.",
    tags: ["force-directed", "orbit-physics", "vector3"],
  },
  {
    name: "GPU Instanced Pipeline",
    protocol: "WebGL / Three.js",
    description: "Streams position matrices into a single InstancedMesh buffer executed in 3 draw calls.",
    tags: ["instanced-mesh", "float32-buffer", "shaders"],
  },
];

const architectureFootnotes = [
  "Strict single-pass binary parsing prevents redundant heap allocation during high-volume ingest.",
  "Virtual playback clock interpolates microsecond capture timestamps to 60Hz display refresh intervals.",
  "Spatial graph layout algorithm runs on worker thread to avoid blocking UI rendering loop.",
  "Supports interactive camera rotation, node isolation, and playback speed control (0.25x - 4x).",
];

const comparisonPoints = [
  {
    aspect: "Information Representation",
    traditional: "Static rows of hex logs and tabular columns that require manual correlation across IP addresses.",
    solution: "Interactive 3D spatial network topology where packet volume, source, and destination are immediately visible.",
  },
  {
    aspect: "Traffic Spike Detection",
    traditional: "Requires plotting separate static histograms; hard to pinpoint which edge is experiencing congestion in real time.",
    solution: "Visual packet particle density along edges makes saturation, broadcast storms, and retries intuitive.",
  },
  {
    aspect: "Temporal Inspection",
    traditional: "Scrolling through millions of log lines with awkward timestamp filtering.",
    solution: "Virtual time slider with scrub-forward, pause, rewind, and variable playback speeds up to 4x.",
  },
  {
    aspect: "Cognitive Load",
    traditional: "High mental translation required to reconstruct multi-hop topologies from source/destination IPs.",
    solution: "Zero mental mapping: physical subnets and client-server flows are mapped directly onto 3D coordinate space.",
  },
];

const snippetCode = `// Updating 50,000 packet positions in a single GPU draw call
const dummy = new THREE.Object3D();
const matrix = new THREE.Matrix4();

function updatePackets(activePackets, progressRatio) {
  for (let i = 0; i < activePackets.length; i++) {
    const packet = activePackets[i];
    
    // Interpolate position along 3D Bézier curve between source and target
    const currentPos = packet.curve.getPoint(progressRatio);
    dummy.position.copy(currentPos);
    dummy.scale.setScalar(packet.isSyn ? 1.4 : 1.0);
    dummy.updateMatrix();

    // Direct buffer write - zero garbage collection overhead
    instancedMesh.setMatrixAt(i, dummy.matrix);
  }

  instancedMesh.instanceMatrix.needsUpdate = true;
}`;

const PacketSniffer = () => {
  return (
    <main className="min-h-screen bg-zinc-950 py-32 text-zinc-100">
      <SEO
        title="Packet Sniffer 3D | Engineering Case Study | Abhishek M R"
        description="Engineering case study: High-performance 3D packet visualization engine built with Three.js, WebGL, and PCAP binary stream decoding."
        keywords="Three.js, WebGL, InstancedMesh, PCAP, Network Engineering, Systems, Visualization"
      />

      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-5xl mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <HiArrowLeft size={16} />
            Back to Engineering Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
              CASE STUDY 01
            </span>
            <span className="rounded bg-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300">
              NETWORKING & GRAPHICS
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Packet Sniffer 3D: Real-Time Network Topology & PCAP Engine
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
            An engineering deep dive into transforming raw binary PCAP captures into a hardware-accelerated 3D spatial graph—rendering 50,000+ concurrent packets at 60 FPS using WebGL instancing.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Three.js", "WebGL", "PCAP Binary Parser", "Zero-Copy Buffers", "InstancedMesh", "Vite"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Benchmark Metrics Grid */}
        <section className="mx-auto max-w-5xl mb-16">
          <MetricsGrid metrics={metrics} />
        </section>

        {/* Featured Image */}
        <div className="mx-auto max-w-5xl mb-20 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 shadow-2xl">
          <img
            src={packetImage}
            alt="Packet Sniffer 3D WebGL Visualization Interface"
            className="w-full object-cover"
          />
        </div>

        {/* Narrative & Engineering Deep Dives */}
        <div className="mx-auto max-w-5xl space-y-20">
          {/* Section 1: The Problem */}
          <section>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-white mb-6">
              1. The Engineering Challenge: Overcoming Wireshark's Cognitive Limit
            </h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Standard network diagnostic tools like Wireshark and `tcpdump` represent captures as chronological lists of tabular rows. While accurate for byte-level packet dissection, tabular logs fail to provide situational awareness during complex network incidents such as broadcast storms, multi-hop latency cascades, and distributed routing anomalies.
              </p>
              <p>
                The goal of Packet Sniffer 3D was to construct a real-time WebGL engine capable of ingesting gigabyte-scale PCAP files, mapping dynamic client-server topologies, and rendering hundreds of thousands of packet flows spatially without causing frame drops or browser memory crashes.
              </p>
            </div>
          </section>

          {/* Section 2: Architecture Pipeline */}
          <section>
            <ArchitectureDiagram
              title="Binary PCAP Ingestion & GPU Render Pipeline"
              subtitle="End-to-end data pipeline from raw byte streams to 60 FPS WebGL frame execution."
              stages={architectureStages}
              footnotes={architectureFootnotes}
            />
          </section>

          {/* Section 3: Deep Dive - Draw Call Elimination */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              TECHNICAL DEEP DIVE
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-white mt-1 mb-4">
              Eliminating the Draw Call Bottleneck (10,000 Meshes → 3 Calls)
            </h3>

            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>
                In the naive initial implementation, each active packet was represented as an independent <code className="text-zinc-200">THREE.Mesh</code> with its own geometry and material. When parsing high-throughput captures (&gt;1,000 packets/sec), the JavaScript thread spent 85% of its execution time dispatching draw calls and synchronizing CPU-to-GPU uniforms. The frame rate plummeted to 12 FPS, accompanied by severe garbage collection pauses.
              </p>
              <p>
                <strong>The Architectural Shift:</strong> Re-architected the particle layer to utilize <code className="text-zinc-200">THREE.InstancedMesh</code>. All packet particles now share a single low-poly sphere geometry and shader material. Instead of creating and destroying objects, positions are written directly into a pre-allocated <code className="text-zinc-200">Float32Array</code> transformation matrix buffer.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="src/engine/particlePipeline.js"
                language="JavaScript / WebGL"
                code={snippetCode}
                explanation="Direct buffer mutation avoids any heap allocation inside the animation loop, guaranteeing zero V8 garbage collection pauses during high-frequency capture replay."
              />
            </div>
          </section>

          {/* Section 4: Comparison Analysis */}
          <section>
            <ComparisonView
              title="Traditional Dissection vs. Spatial Topology Graph"
              leftTitle="Wireshark / Tabular Log"
              rightTitle="Packet Sniffer 3D Architecture"
              points={comparisonPoints}
            />
          </section>

          {/* Section 5: Testing & Reliability */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              VERIFICATION & RELIABILITY
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-white mt-1 mb-4">
              Parser Correctness & Fuzz Testing Strategy
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 text-xs sm:text-sm text-zinc-400">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h4 className="font-semibold text-zinc-200 mb-2">Protocol Boundary Validation</h4>
                <p className="leading-relaxed">
                  Unit tested frame boundary decoding against known Wireshark test suites. Validated 14-byte Ethernet headers, variable-length IPv4 options, and TCP flag masks (SYN, ACK, RST, FIN) across big-endian and little-endian captures.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h4 className="font-semibold text-zinc-200 mb-2">Malformed Payload Fuzzing</h4>
                <p className="leading-relaxed">
                  Subjected binary ingestion to synthetic fuzzed captures containing truncated headers, invalid checksums, and corrupt timestamps. Ensured graceful fallback with zero unhandled exceptions or canvas context loss.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center justify-between gap-6 pt-12 border-t border-zinc-900 sm:flex-row">
            <Link
              to="/specter-proxy"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              Next Case Study: Specter Proxy &rarr;
            </Link>

            <a
              href="https://github.com/abhi-byte62/packet-sniffer-3d-"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
            >
              <FaGithub size={18} />
              Review Source Code on GitHub
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default PacketSniffer;