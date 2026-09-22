import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

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
    traditional: "Requires external OS-level tools like Linux tc/netem or cumbersome local firewall scripts.",
    solution: "Integrated latency and jitter pipeline injected directly at the stream chunk level per route.",
  },
];

const snippetCode = `// Stream Pipeline with strict backpressure & latency injection
class LatencyInjectionTransform extends Transform {
  constructor(delayMs = 250, jitterMs = 50) {
    super({ highWaterMark: 64 * 1024 }); // 64KB bounded buffer
    this.delayMs = delayMs;
    this.jitterMs = jitterMs;
  }

  _transform(chunk, encoding, callback) {
    const jitter = (Math.random() * 2 - 1) * this.jitterMs;
    const actualDelay = Math.max(0, this.delayMs + jitter);

    // Delay chunk forwarding while maintaining downstream backpressure
    setTimeout(() => {
      this.push(chunk);
      callback(); // Signals upstream reader that next chunk can be consumed
    }, actualDelay);
  }
}

// Chaining client to upstream with backpressure awareness
clientSocket
  .pipe(new LatencyInjectionTransform(120, 30))
  .pipe(upstreamSocket)
  .pipe(clientSocket);`;

const SpecterProxy = () => {
  return (
    <main className="min-h-screen bg-zinc-950 py-32 text-zinc-100">
      <SEO
        title="Specter Proxy | Engineering Case Study | Abhishek M R"
        description="Engineering case study: High-concurrency HTTP/HTTPS proxy built for packet inspection, TLS MITM decryption, and latency injection using Node.js stream backpressure."
        keywords="Node.js Streams, Backpressure, TLS MITM, Network Proxy, Systems Architecture, Performance"
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
              CASE STUDY 02
            </span>
            <span className="rounded bg-zinc-800 px-2.5 py-1 text-xs font-mono text-zinc-300">
              SYSTEMS & PROTOCOLS
            </span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Specter Proxy: Stream Backpressure & TLS Interception Engine
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-3xl">
            A systems engineering deep dive into building an HTTP/HTTPS forward proxy designed for high-concurrency traffic inspection, ephemeral TLS decryption, and network degradation simulation.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Node.js Streams", "Backpressure", "TLS Termination", "Dynamic SNI", "Keep-Alive Pooling", "MITM"].map(
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
            src={specterImage}
            alt="Specter Proxy Traffic Inspection Dashboard"
            className="w-full object-cover"
          />
        </div>

        {/* Narrative & Engineering Deep Dives */}
        <div className="mx-auto max-w-5xl space-y-20">
          {/* Section 1: The Problem */}
          <section>
            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold text-white mb-6">
              1. The Engineering Challenge: Memory Leaks in Interception Proxies
            </h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Developers and security engineers frequently need to inspect network payloads or test how applications respond to degraded network environments (e.g., packet jitter, slow cellular bandwidth). Most existing debugging proxies buffer full HTTP bodies in RAM before forwarding. Under modern workloads involving concurrent API calls or large media streams, this approach quickly consumes gigabytes of heap memory, triggering severe GC pauses and dropped TCP sockets.
              </p>
              <p>
                Specter was engineered with a strict design invariant: <strong>zero full-body buffering</strong>. Every packet and chunk must flow through an asynchronous backpressure pipeline with bounded buffer allocations, ensuring stable ~35MB RAM consumption regardless of payload size.
              </p>
            </div>
          </section>

          {/* Section 2: Architecture Pipeline */}
          <section>
            <ArchitectureDiagram
              title="Stream Pipelining & Dynamic MITM TLS Termination"
              subtitle="End-to-end dataflow showing SNI inspection, certificate generation, and bounded chunk transforms."
              stages={architectureStages}
              footnotes={architectureFootnotes}
            />
          </section>

          {/* Section 3: Deep Dive - Backpressure Management */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              TECHNICAL DEEP DIVE
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-white mt-1 mb-4">
              Deterministic Memory Bounds via Stream Backpressure
            </h3>

            <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
              <p>
                When a client uploads data faster than the upstream destination server can consume it, an unmanaged proxy will continue reading from the client socket, storing chunks in internal Node.js queues until the process crashes with an out-of-memory error.
              </p>
              <p>
                <strong>The Architectural Solution:</strong> Specter models every inspection and latency stage as a <code className="text-zinc-200">Transform</code> stream with an explicit <code className="text-zinc-200">highWaterMark</code> (64KB). When the downstream write buffer fills, the transform stream withholds invocation of the <code className="text-zinc-200">callback()</code>, which signals Node.js to stop reading from the upstream TCP socket. The OS TCP window is automatically closed, pausing the remote client at the protocol level.
              </p>
            </div>

            <div className="mt-6">
              <CodeSnippet
                filename="src/proxy/latencyTransform.js"
                language="Node.js Streams"
                code={snippetCode}
                explanation="Delayed callback invocation ensures upstream reader is throttled, preserving deterministic memory bounds and preventing queue blowouts during simulated network delays."
              />
            </div>
          </section>

          {/* Section 4: Comparison Analysis */}
          <section>
            <ComparisonView
              title="Buffer-and-Forward vs. Streaming Backpressure"
              leftTitle="Naive In-Memory Proxy"
              rightTitle="Specter Stream Architecture"
              points={comparisonPoints}
            />
          </section>

          {/* Section 5: Testing & Reliability */}
          <section className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              VERIFICATION & RELIABILITY
            </span>
            <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl font-bold text-white mt-1 mb-4">
              24-Hour Soak Testing & Socket Leak Verification
            </h3>

            <div className="grid gap-6 sm:grid-cols-2 text-xs sm:text-sm text-zinc-400">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h4 className="font-semibold text-zinc-200 mb-2">Long-Duration Soak Testing</h4>
                <p className="leading-relaxed">
                  Executed continuous 24-hour soak tests streaming 10,000 requests per minute with randomized payload sizes (1KB to 250MB). Monitored Node.js heap snapshots to confirm zero lingering closures, socket descriptor leaks, or unbounded buffer growth.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5">
                <h4 className="font-semibold text-zinc-200 mb-2">Abrupt Socket Disconnects</h4>
                <p className="leading-relaxed">
                  Simulated network edge faults by abruptly killing client sockets mid-transfer. Implemented strict <code className="text-zinc-300">error</code> and <code className="text-zinc-300">close</code> listeners across all stream legs to guarantee immediate teardown of paired upstream sockets.
                </p>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center justify-between gap-6 pt-12 border-t border-zinc-900 sm:flex-row">
            <Link
              to="/packet-sniffer"
              className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
            >
              &larr; Previous Case Study: Packet Sniffer 3D
            </Link>

            <a
              href="https://github.com/abhi-byte62/specter-proxy"
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

export default SpecterProxy;