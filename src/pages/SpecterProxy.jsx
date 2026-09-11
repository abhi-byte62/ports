import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";

import specterImage from "../assets/images/specter-proxy.png";

const features = [
  {
    title: "Transparent Interception",
    description:
      "Sits between client and server, intercepting and forwarding HTTP/HTTPS traffic without requiring any client configuration changes.",
  },
  {
    title: "TLS Analysis",
    description:
      "Performs MITM decryption with dynamically generated certificates so TLS handshakes can be inspected and logged at the application layer.",
  },
  {
    title: "Latency Injection",
    description:
      "Simulates real-world network conditions by injecting configurable delays, jitter, and packet loss into forwarded streams.",
  },
  {
    title: "Stream-Oriented Pipeline",
    description:
      "Built around Node.js streams so large payloads flow through as buffered chunks — zero full-body buffering, low memory pressure.",
  },
];

const SpecterProxy = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0c] py-32 text-white">
      <SEO
        title="Specter Proxy | Abhishek M R"
        description="High-performance HTTP/HTTPS proxy for packet inspection, TLS analysis, latency injection and network simulation."
        keywords="Node.js Proxy, MITM, TLS, Networking, Streams"
      />
      <Container>
        {/* ================= HERO ================= */}

        <section className="mb-20">
          <p className="mb-4 font-terminal text-xs md:text-sm tracking-[0.25em] text-[#a855f7]">
            {">"} node_modules/specter-proxy — status: RUNNING
          </p>

          <h1 className="font-['Space_Grotesk'] text-6xl font-bold md:text-7xl">
            Specter <span className="text-[#00f0ff]">Proxy</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#8f8f9a]">
            A high-performance HTTP/HTTPS proxy built for{" "}
            <span className="text-[#00f0ff]">packet inspection</span>,{" "}
            <span className="text-[#a855f7]">TLS analysis</span>, latency
            injection, and network simulation.
          </p>

          <div className="mt-6 font-terminal text-xs text-[#8f8f9a]">
            <span className="text-[#00ff9d]">$</span> ./specter --intercept
            --analyze-tls --jitter=40ms
          </div>
        </section>

        {/* ================= IMAGE ================= */}

        <img
          src={specterImage}
          alt="Specter Proxy"
          className="mb-20 rounded-xl border border-[#2e2e3a] shadow-2xl"
        />

        {/* ================= OVERVIEW ================= */}

        <section className="mb-20">
          <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold">
            ✓ Overview
          </h2>

          <p className="text-lg leading-8 text-[#8f8f9a]">
            Specter Proxy is a stream-oriented Node.js proxy engineered for
            deep traffic inspection. Unlike typical forwarding proxies, it
            terminates TLS to decrypt traffic, lets you inject realistic
            latency, and pushes every request/response through an
            inspect-and-forward pipeline — making it a single tool for
            debugging, MITM labs, and resilience testing.
          </p>
        </section>

        {/* ================= PROBLEM ================= */}

        <section className="mb-20">
          <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold">
            ✘ Problem Statement
          </h2>

          <p className="text-lg leading-8 text-[#8f8f9a]">
            Debugging network-bound applications is painful when you can't see
            what actually crosses the wire — and most proxies either forward
            blindly or buffer entire bodies into memory. Specter Proxy answers
            two questions:{" "}
            <span className="text-[#facc15]">
              "what is the client really sending,"
            </span>{" "}
            and{" "}
            <span className="text-[#facc15]">
              "how does this app behave under degraded networks?"
            </span>
          </p>
        </section>

        {/* ================= TECH STACK ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ⤓ Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {["Node.js", "Streams", "TLS", "HTTP", "HTTPS", "MITM"].map(
              (tech) => (
                <span
                  key={tech}
                  className="font-terminal text-xs rounded border border-[#00f0ff]/40 bg-[#00f0ff]/5 px-4 py-2 text-[#00f0ff]"
                >
                  {tech.toUpperCase()}
                </span>
              ),
            )}
          </div>
        </section>

        {/* ================= ARCHITECTURE ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ♻️ Architecture
          </h2>

          <pre className="overflow-x-auto rounded-xl border border-[#2e2e3a] bg-[#121216] p-8 font-terminal text-sm leading-8 text-[#00f0ff]">
            {`
  Client ──► CONNECT / HTTP ──► Specter Core
                                     │
                    ┌────────────────┼────────────────┐
                    ▼                ▼                ▼
              Stream Parser     TLS Terminator    Request Inspect
                    │                │                │
                    └────────────────┼────────────────┘
                                     │
                             Forwarder / Injector
                                     │
                          (latency, jitter, drop)
                                     │
                                    ▼
                                Upstream
`}
          </pre>
        </section>

        {/* ================= FEATURES ================= */}

        <section className="mb-20">
          <h2 className="mb-10 font-['Space_Grotesk'] text-4xl font-bold">
            ⌘ Key Features
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[#2e2e3a] bg-[#121216]/70 p-8 transition hover:border-[#00f0ff]/60 hover:glow-border"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-[#8f8f9a]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ENGINEERING ================= */}

        <section className="mb-20">
          <h2 className="mb-10 font-['Space_Grotesk'] text-4xl font-bold">
            ⚙ Engineering Challenges
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Backpressure Without Blocking
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#8f8f9a]">
                Piping through many transform stages means respecting
                backpressure end-to-end. Each stage pauses upstream when its
                consumers lag, so slow servers don't silently drop payloads.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                Trusting Our Own CA
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#8f8f9a]">
                Intercepting TLS requires generating on-the-fly certificates
                for arbitrary hostnames and trusting a local root CA — handling
                the handshake and session caching without leaking secrets.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                Realistic Latency Injection
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#8f8f9a]">
                Simulating jitter and loss must feel like a real degraded
                network, not a predictable sleep — so delays use randomized
                distributions and loss percentages applied per-chunk.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PERFORMANCE ================= */}

        <section className="mb-20">
          <h2 className="mb-10 font-['Space_Grotesk'] text-4xl font-bold">
            📈 Performance Optimizations
          </h2>

          <ul className="space-y-5 font-terminal text-base text-[#c4c4cc]">
            <li>
              <span className="text-[#00ff9d]">✓</span> Chunk-level streaming
              — no full-body buffering, bounded memory.
            </li>
            <li>
              <span className="text-[#00ff9d]">✓</span> Reused TLS context and
              certificate cache to cut handshake overhead.
            </li>
            <li>
              <span className="text-[#00ff9d]">✓</span> Single-pass inspect +
              forward pipeline, avoids decode/re-encode cycles.
            </li>
            <li>
              <span className="text-[#00ff9d]">✓</span> Connection pooling to
              upstream hosts to amortize TCP handshakes.
            </li>
          </ul>
        </section>

        {/* ================= LEARNINGS ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ▣ Lessons Learned
          </h2>

          <p className="text-lg leading-8 text-[#8f8f9a]">
            Building Specter Proxy taught me how TLS interception really works
            under the hood, how backpressure shapes a streaming architecture,
            and why observing real traffic beats guessing at protocol behavior.
            It also made clear how much tooling around transparent proxying
            depends on careful certificate handling.
          </p>
        </section>

        {/* ================= FUTURE ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ▶ Future Improvements
          </h2>

          <ul className="space-y-4 font-terminal text-base text-[#c4c4cc]">
            <li>• Rule-based traffic rewriting per-host.</li>
            <li>• WebSocket and HTTP/2 support.</li>
            <li>• Live traffic dashboard with request timelines.</li>
            <li>• Replay captured sessions for regression testing.</li>
            <li>• gRPC protocol inspection.</li>
          </ul>
        </section>

        {/* ================= FOOTER ================= */}

        <div className="flex flex-wrap items-center gap-8 border-t border-[#2e2e3a] pt-10 font-terminal text-sm">
          <a
            href="https://github.com/abhi-byte62/specter-proxy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#00f0ff] transition hover:text-white"
          >
            <FaGithub />
            &gt; view source [specter-proxy]
          </a>

          <Link
            to="/"
            className="text-[#8f8f9a] transition hover:text-white"
          >
            ← back to portfolio
          </Link>

          <span className="ml-auto text-xs text-[#a855f7]">
            $ exit 0
          </span>
        </div>
      </Container>
    </main>
  );
};

export default SpecterProxy;