import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";

import specterImage from "../assets/images/specter-proxy.png";

const features = [
  {
    title: "Transparent Interception",
    description: "Intercepts and forwards HTTP/HTTPS traffic between clients and servers without requiring client configuration changes.",
  },
  {
    title: "TLS Analysis",
    description: "Performs MITM decryption using dynamically generated certificates to log and inspect TLS handshakes at the application layer.",
  },
  {
    title: "Latency Injection",
    description: "Configurable network simulation allowing developers to inject artificial delays, jitter, and packet loss.",
  },
  {
    title: "Stream-Oriented Pipeline",
    description: "Built on Node.js streams to process payloads as buffered chunks, ensuring low memory pressure and zero full-body buffering.",
  }
];

const SpecterProxy = () => {
  return (
    <main className="min-h-screen bg-zinc-950 py-32 text-zinc-100">
      <SEO
        title="Specter Proxy | Abhishek M R"
        description="High-performance HTTP/HTTPS proxy for packet inspection and network simulation."
        keywords="Node.js Proxy, MITM, TLS, Networking, Streams"
      />
      <Container>
        {/* Header */}
        <section className="mx-auto max-w-4xl text-center mb-24">
          <Link to="/" className="inline-block text-zinc-500 hover:text-zinc-300 mb-8 transition-colors">
            &larr; Back to Portfolio
          </Link>

          <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Specter Proxy
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            A high-performance HTTP/HTTPS proxy engineered for packet inspection, TLS analysis, and latency simulation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Node.js", "Streams", "TLS", "HTTP/HTTPS", "MITM"].map((tech) => (
              <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Feature Image */}
        <div className="mx-auto max-w-5xl mb-24 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
          <img src={specterImage} alt="Specter Proxy Interface" className="w-full object-cover" />
        </div>

        <div className="mx-auto max-w-3xl space-y-24">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p>
                Debugging network-bound applications often requires answering two questions: "What is the client truly sending?" and "How does the app behave under degraded network conditions?".
              </p>
              <p>
                Specter Proxy is a stream-oriented Node.js proxy built to provide deep traffic inspection. Unlike standard forwarding proxies, it terminates TLS to decrypt traffic, allows realistic latency injection, and processes every request/response through an inspect-and-forward stream pipeline. It serves as a unified tool for internal debugging, MITM security evaluation, and resilience testing.
              </p>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Technical Features</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
                  <h3 className="text-lg font-semibold text-zinc-100 mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Engineering Architecture</h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p>
                <strong>Backpressure & Streaming:</strong> Forwarding large payloads across multiple transform stages requires strict end-to-end backpressure handling. The pipeline ensures slow downstream consumers automatically pause upstream readers, preventing memory leaks and silent packet drops.
              </p>
              <p>
                <strong>On-the-fly CA Generation:</strong> Simulating a transparent TLS proxy requires generating CA certificates dynamically for arbitrary hostnames and trusting a local root, all without leaking private keys.
              </p>
              <p>
                <strong>Connection Pooling:</strong> Implemented Keep-Alive and upstream connection pooling to amortize the overhead of TCP handshakes on high-frequency proxy requests.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mx-auto max-w-3xl mt-24 pt-8 border-t border-zinc-800 flex justify-center">
          <a
            href="https://github.com/abhi-byte62/specter-proxy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-zinc-100 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-white"
          >
            <FaGithub className="text-lg" />
            View Source Code
          </a>
        </div>
      </Container>
    </main>
  );
};

export default SpecterProxy;