import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import Container from "../components/Container/Container";

import packetImage from "../assets/images/packet-sniffer.png";

const features = [
  {
    title: "PCAP Parsing",
    description:
      "Parses captured network packets and converts them into structured data for visualization.",
  },
  {
    title: "3D Network Topology",
    description:
      "Displays packet movement across routers, switches and endpoints using an interactive Three.js scene.",
  },
  {
    title: "Traffic Playback",
    description:
      "Animates packet flow chronologically to simulate real network activity.",
  },
  {
    title: "Interactive Camera",
    description:
      "Supports orbit controls, zoom, and multiple viewpoints for inspecting different areas of the topology.",
  },
];

const PacketSniffer = () => {
  return (
    <main className="min-h-screen bg-[#09090B] py-32 text-white">
      <Container>
        {/* ================= HERO ================= */}

        <section className="mb-24">
          <p className="mb-4 uppercase tracking-[0.25em] text-blue-400">
            Networking • Three.js • Visualization
          </p>

          <h1 className="font-['Space_Grotesk'] text-6xl font-bold md:text-7xl">
            Packet Sniffer 3D
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-400">
            Interactive visualization of network traffic using PCAP parsing,
            Three.js, and real-time packet animation.
          </p>
        </section>

        {/* ================= IMAGE ================= */}

        <img
          src={packetImage}
          alt="Packet Sniffer 3D"
          className="mb-24 rounded-3xl border border-zinc-800 shadow-2xl"
        />

        {/* ================= OVERVIEW ================= */}

        <section className="mb-24">
          <h2 className="mb-6 text-4xl font-bold">Overview</h2>

          <p className="text-lg leading-8 text-zinc-400">
            Packet Sniffer 3D is an interactive visualization platform that
            transforms captured network packets into animated traffic flowing
            through a virtual network topology. Instead of reading thousands of
            lines of packet logs, users can visually understand how data moves
            between hosts, switches, TAP devices, and routers.
          </p>
        </section>

        {/* ================= PROBLEM ================= */}

        <section className="mb-24">
          <h2 className="mb-6 text-4xl font-bold">Problem Statement</h2>

          <p className="text-lg leading-8 text-zinc-400">
            Traditional packet analyzers display traffic as large streams of
            text, making it difficult to understand packet movement across a
            network. This project was built to convert packet captures into an
            intuitive visual representation that makes networking concepts
            easier to explore and understand.
          </p>
        </section>

        {/* ================= TECH STACK ================= */}

        <section className="mb-24">
          <h2 className="mb-8 text-4xl font-bold">Tech Stack</h2>

          <div className="flex flex-wrap gap-4">
            {["Three.js", "JavaScript", "Vite", "HTML", "CSS", "PCAP"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </section>

        {/* ================= ARCHITECTURE ================= */}

        <section className="mb-24">
          <h2 className="mb-8 text-4xl font-bold">Architecture</h2>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-10">
            <pre className="overflow-x-auto text-lg leading-8 text-blue-400">
              {`
         PCAP File / Live Traffic
                    │
                    ▼
             Packet Parser
                    │
                    ▼
        Packet Processing Engine
                    │
                    ▼
     Topology & Animation Engine
                    │
                    ▼
            Three.js Renderer
                    │
                    ▼
      Interactive 3D Visualization
`}
            </pre>
          </div>
        </section>

        {/* ================= FEATURES ================= */}

        <section className="mb-24">
          <h2 className="mb-10 text-4xl font-bold">Key Features</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition hover:border-blue-500"
              >
                <h3 className="text-2xl font-semibold">{feature.title}</h3>

                <p className="mt-4 leading-8 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ENGINEERING ================= */}

        <section className="mb-24">
          <h2 className="mb-10 text-4xl font-bold">Engineering Challenges</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold">
                Rendering High-Frequency Traffic
              </h3>

              <p className="mt-4 text-lg leading-8 text-zinc-400">
                Efficient rendering techniques were used to keep the animation
                responsive while visualizing continuous packet movement without
                causing unnecessary rendering overhead.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Maintaining Packet Order
              </h3>

              <p className="mt-4 text-lg leading-8 text-zinc-400">
                Packets must remain synchronized with timestamps while
                travelling between network nodes to preserve the original
                traffic sequence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Interactive Camera Controls
              </h3>

              <p className="mt-4 text-lg leading-8 text-zinc-400">
                Multiple viewing modes and smooth camera movement were designed
                to allow users to inspect traffic from different perspectives
                without losing spatial context.
              </p>
            </div>
          </div>
        </section>

        {/* ================= PERFORMANCE ================= */}

        <section className="mb-24">
          <h2 className="mb-10 text-4xl font-bold">
            Performance Optimizations
          </h2>

          <ul className="space-y-5 text-lg text-zinc-400">
            <li>✓ Optimized rendering pipeline using Three.js.</li>
            <li>✓ Reused geometry and materials to reduce GPU overhead.</li>
            <li>✓ Minimized unnecessary DOM updates.</li>
            <li>✓ Smooth animation loop for packet playback.</li>
          </ul>
        </section>

        {/* ================= LEARNINGS ================= */}

        <section className="mb-24">
          <h2 className="mb-8 text-4xl font-bold">Lessons Learned</h2>

          <p className="text-lg leading-8 text-zinc-400">
            Building Packet Sniffer 3D deepened my understanding of packet
            structures, visualization pipelines, Three.js rendering, performance
            optimization, and designing developer tools that make complex
            networking concepts easier to understand.
          </p>
        </section>

        {/* ================= FUTURE ================= */}

        <section className="mb-24">
          <h2 className="mb-8 text-4xl font-bold">Future Improvements</h2>

          <ul className="space-y-4 text-lg text-zinc-400">
            <li>• Live packet capture from localhost.</li>
            <li>• Wireshark integration.</li>
            <li>• Packet search and filtering.</li>
            <li>• Timeline playback controls.</li>
            <li>• WebSocket traffic visualization.</li>
          </ul>
        </section>

        {/* ================= FOOTER ================= */}

        <div className="flex flex-wrap items-center gap-8 border-t border-zinc-800 pt-12">
          <a
            href="https://github.com/abhi-byte62/packet-sniffer-3d-"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-lg text-blue-400 transition hover:text-blue-300"
          >
            <FaGithub />
            View Source Code
          </a>

          <Link
            to="/"
            className="text-lg text-zinc-400 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default PacketSniffer;
