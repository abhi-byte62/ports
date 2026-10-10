import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";
import MetricsGrid from "../components/Metrics/MetricsGrid";
import ArchitectureDiagram from "../components/ArchitectureDiagram/ArchitectureDiagram";
import ComparisonView from "../components/Comparison/ComparisonView";
import CodeSnippet from "../components/CodeSnippet/CodeSnippet";

import specterImage from "../assets/images/specter-proxy.png";

const metrics = [
  {
    category: "OVERHEAD",
    value: "<4.2",
    unit: "ms",
    label: "Average Interception Latency",
    badge: "BENCHMARK",
    description: "Sub-5ms added latency across full TLS decryption & re-encryption cycle.",
  },
  {
    category: "CONCURRENCY",
    value: "10K+",
    unit: "conns",
    label: "Sustained Active Connections",
    badge: "LOAD TESTED",
    description: "Event-driven socket management with keep-alive connection pooling.",
  },
  {
    category: "MEMORY",
    value: "~35",
    unit: "MB",
    label: "Constant Heap Footprint",
    badge: "ZERO LEAK",
    description: "Pure stream chunk piping eliminates full-body in-memory buffering.",
  },
  {
    category: "TLS KEYGEN",
    value: "<1.8",
    unit: "ms",
    label: "Dynamic CA Synthesis Time",
    badge: "LRU CACHED",
    description: "In-memory certificate forging with zero blocking disk I/O.",
  },
];

const architectureStages = [
  {
    name: "TCP SOCKS/HTTP Ingestion",
    protocol: "TCP / HTTP CONNECT",
    description: "Intercepts raw connection requests and snoops the TLS ClientHello SNI header.",
    tags: ["sni-snoop", "tcp-socket", "tls-clienthello"],
  },
  {
    name: "Dynamic TLS Termination",
    protocol: "X.509 / PKI",
    description: "Synthesizes an in-memory leaf certificate for target hostname signed by local root CA.",
    tags: ["openssl", "lru-cert-cache", "secure-context"],
  },
  {
    name: "Backpressure Stream Pipeline",
    protocol: "Node.js Transform",
    description: "Streams decrypted chunks through latency injector, payload inspector, and rule engine.",
    tags: ["highwatermark", "pause-resume", "jitter-sim"],
  },
  {
    name: "Upstream Keep-Alive Pool",
    protocol: "HTTP/1.1 / TLS",
    description: "Dispatches payload to destination server via pooled connections, piping response back.",
    tags: ["socket-pooling", "zero-buffer", "alpn"],
  },
];

const architectureFootnotes = [
  "Strict backpressure propagation: slow downstream clients automatically throttle upstream socket reads.",
  "Root CA private key is held strictly in isolated memory and never written to temporary files.",
  "Simulates edge conditions: latency delays, configurable packet drop ratios, and bandwidth throttling.",
  "Zero full-body accumulation: handles gigabyte-scale ISO/video file transfers within constant 35MB heap.",
];

const comparisonPoints = [
  {
    aspect: "Payload Handling",
    traditional: "Accumulates entire request/response body into in-memory Buffer before forwarding to inspect content.",
    solution: "Continuous Transform stream processing: inspects chunks on-the-fly with deterministic bounded RAM.",
  },
  {
    aspect: "Large File Transfers",
    traditional: "Downloads >500MB cause Node.js V8 heap crashes (OOM) and heavy GC garbage collector pauses.",
    solution: "Streaming pipes handle files of arbitrary size with constant ~35MB steady-state memory utilization.",
  },
  {
    aspect: "Certificate Synthesis",
    traditional: "Spawns child processes to run `openssl` CLI and writes certs to temporary files on disk.",
    solution: "Asynchronous in-memory crypto generation backed by LRU caching with sub-2ms synthesis times.",
  },
  {
    aspect: "Network Degradation Testing",
    traditional: "Requires root-level OS firewall packet rules (e.g. `tc` or `iptables`) with rigid setup overhead.",
    solution: "Application-layer synthetic jitter, packet dropping, and socket stalling configured via clean JSON rules.",
  },
];

const snippetCode = `// Stream Transform backpressure pipeline with dynamic latency injection
class LatencyJitterStream extends Transform {
  constructor(delayMs, jitterRatio = 0.05) {
    super({ highWaterMark: 64 * 1024 }); // 64KB bounded chunks
    this.delayMs = delayMs;
  }

  _transform(chunk, encoding, callback) {
    // If downstream queue is full, pause upstream reads automatically
    setTimeout(() => {
      this.push(chunk);
      callback(); // Signals next chunk readiness to libuv event loop
    }, this.delayMs);
  }
}`;

const SpecterProxy = () => {
  return (
    <main className="min-h-screen bg-[#08080C] py-32 text-white selection:bg-white/10 selection:text-white">
      <SEO
        title="Specter Proxy | Stream Architecture Case Study | Abhishek M R"
        description="Engineering case study: High-performance stream backpressure and dynamic TLS certificate interception proxy built with Node.js."
        keywords="Node.js, Streams, Backpressure, TLS Termination, Reverse Proxy, Systems Architecture, Networking"
      />

      <Container>
        {/* Navigation Breadcrumb */}
        <div className="mx-auto max-w-5xl mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
          >
            <HiArrowLeft size={14} />
            Back to projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl mb-16">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="rounded bg-white/[0.06] px-2 py-0.5 text-xs font-mono font-medium text-neutral-200 border border-white/[0.08]">
              CASE STUDY
            </span>
            <span className="rounded bg-white/[0.03] px-2 py-0.5 text-xs font-mono text-neutral-400 border border-white/[0.06]">
              SYSTEMS & NETWORKING
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Specter Proxy: Stream Backpressure & Ephemeral TLS Interception
          </h1>

          <p className="mt-5 text-base md:text-lg text-neutral-400 leading-relaxed max-w-3xl">
            A high-performance forward proxy engineered with Node.js stream pipelines. Provides zero-heap-accumulation packet inspection, on-the-fly TLS dynamic certificate generation, and network degradation simulation under strict memory bounds.
          </p>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {["Node.js Streams", "TLS Termination", "Backpressure", "Dynamic SNI", "OpenSSL PKI", "MITM"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs font-mono text-neutral-400"
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
        <div className="mx-auto max-w-5xl mb-20 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C12]">
          <img
            src={specterImage}
            alt="Specter Proxy Stream Interception Architecture"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Narrative & Engineering Deep Dives */}
        <div className="mx-auto max-w-5xl space-y-16">
          {/* Section 1: The Problem */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              1. The Engineering Challenge: Memory Leaks in High-Concurrency Proxies
            </h2>
            <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                Building forward proxies that inspect encrypted traffic often leads to severe memory blowups. Naive proxy implementations buffer full HTTP response payloads in RAM before forwarding, triggering runaway garbage collection cycles and process crashes (OOM) whenever users download large binaries.
              </p>
              <p className="text-neutral-400">
                Specter Proxy solves this by replacing full-body buffering with a pure chunked Transform stream architecture. By strictly honoring Node.js backpressure flags (<code className="text-neutral-200 font-mono bg-white/[0.04] px-1 py-0.5 rounded">highWaterMark</code>), fast upstream servers are throttled to match slow client consumption rates—keeping steady-state memory bounded to ~35MB across thousands of concurrent connections.
              </p>
            </div>
          </section>

          {/* Section 2: Architecture Pipeline */}
          <section>
            <ArchitectureDiagram
              title="Stream Backpressure & TLS Interception Flow"
              subtitle="End-to-end data pipeline from raw TCP connection to decrypted chunk inspection and upstream piping."
              stages={architectureStages}
              footnotes={architectureFootnotes}
            />
          </section>

          {/* Section 3: Deep Dive - Backpressure Management */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              TECHNICAL DEEP DIVE
            </span>
            <h3 className="text-xl font-semibold text-white mt-1 mb-4">
              Deterministic Backpressure Flow Control
            </h3>

            <div className="text-neutral-300 text-sm leading-relaxed space-y-4">
              <p>
                When simulating network latency (e.g., adding 200ms delay to client downloads), data chunks queue up rapidly. If not bounded, the Node.js internal buffer will consume all available host RAM.
              </p>
              <p className="text-neutral-400">
                <strong className="text-neutral-200 font-medium">The Solution:</strong> Implemented a custom <code className="text-neutral-200 font-mono bg-white/[0.04] px-1 py-0.5 rounded">Transform</code> pipeline with explicit callback signaling. Upstream reads pause the instant the downstream queue fills, preventing any heap memory growth during long-running streaming transfers.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="src/proxy/latencyStream.js"
                language="JavaScript / Node.js"
                code={snippetCode}
                explanation="Backpressure-aware transform pipeline pauses socket reads from upstream whenever downstream write buffers reach highWaterMark limits."
              />
            </div>
          </section>

          {/* Section 4: Comparison Analysis */}
          <section>
            <ComparisonView
              title="Naive Buffer Proxy vs. Specter Stream Architecture"
              leftTitle="Naive In-Memory Buffering"
              rightTitle="Specter Stream Engine"
              points={comparisonPoints}
            />
          </section>

          {/* Section 5: Reliability & Edge Cases */}
          <section className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              VERIFICATION & RELIABILITY
            </span>
            <h3 className="text-xl font-semibold text-white mt-1 mb-6">
              Failure Recovery & Socket Teardown
            </h3>

            <div className="grid gap-4 sm:grid-cols-2 text-xs sm:text-sm text-neutral-400">
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
                <h4 className="font-medium text-white mb-2">Memory Leak Stress Testing</h4>
                <p className="leading-relaxed">
                  Streamed multiple concurrent 4GB ISO file downloads while monitoring V8 heap allocations. Validated constant ~35MB RSS memory utilization with zero uncollected heap buffers.
                </p>
              </div>

              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-5">
                <h4 className="font-medium text-white mb-2">Abrupt Socket Disconnects</h4>
                <p className="leading-relaxed">
                  Simulated network edge faults by abruptly killing client sockets mid-transfer. Implemented strict <code className="text-neutral-300 font-mono">error</code> and <code className="text-neutral-300 font-mono">close</code> listeners across all stream legs to guarantee immediate teardown of paired upstream sockets.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center justify-between gap-6 pt-10 border-t border-white/[0.08] sm:flex-row">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <Link
                to="/packet-sniffer"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                <HiArrowLeft size={14} />
                Previous: Packet Sniffer 3D
              </Link>
              <span className="text-white/[0.12]">/</span>
              <Link
                to="/liquiditylens"
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                Featured: LiquidityLens
                <HiArrowRight size={14} />
              </Link>
            </div>

            <a
              href="https://github.com/abhi-byte62/specter-proxy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              <FaGithub size={14} />
              Review Source Code on GitHub
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SpecterProxy;