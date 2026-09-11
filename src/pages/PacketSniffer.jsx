import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import SEO from "../components/SEO/SEO";
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
    <main className="min-h-screen bg-[#0a0a0c] py-32 text-white">
      <SEO
        title="Packet Sniffer 3D | Abhishek M R"
        description="Interactive 3D packet visualization built using Three.js and PCAP parsing."
        keywords="Three.js, PCAP, Networking, Packet Sniffer"
      />
      <Container>
        {/* ================= HERO ================= */}

        <section className="mb-20">
          <p className="mb-4 font-terminal text-xs md:text-sm tracking-[0.25em] text-[#a855f7]">
            {">"} node_modules/packet-sniffer — status: CAPTURING
          </p>

          <h1 className="font-['Space_Grotesk'] text-6xl font-bold md:text-7xl">
            Packet Sniffer <span className="text-[#00f0ff]">3D</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-[#8f8f9a]">
            Interactive visualization of network traffic using{" "}
            <span className="text-[#00f0ff]">PCAP parsing</span>,{" "}
            <span className="text-[#a855f7]">Three.js</span>, and real-time
            packet animation.
          </p>

          <div className="mt-6 font-terminal text-xs text-[#8f8f9a]">
            <span className="text-[#00ff9d]">$</span> ./parse --input capture.pcap
            --render webgl
          </div>
        </section>

        {/* ================= IMAGE ================= */}

        <img
          src={packetImage}
          alt="Packet Sniffer 3D"
          className="mb-20 rounded-xl border border-[#2e2e3a] shadow-2xl"
        />

        {/* ================= OVERVIEW ================= */}

        <section className="mb-20">
          <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold">
            ✓ Overview
          </h2>

          <p className="text-lg leading-8 text-[#8f8f9a]">
            Packet Sniffer 3D is an interactive visualization platform that
            transforms captured network packets into animated traffic flowing
            through a virtual network topology. Instead of reading thousands of
            lines of packet logs, users can visually understand how data moves
            between hosts, switches, TAP devices, and routers.
          </p>
        </section>

        {/* ================= PROBLEM ================= */}

        <section className="mb-20">
          <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold">
            ✘ Problem Statement
          </h2>

          <p className="text-lg leading-8 text-[#8f8f9a]">
            Traditional packet analyzers display traffic as large streams of
            text, making it difficult to understand packet movement across a
            network. This project was built to convert packet captures into an
            intuitive visual representation that makes networking concepts
            easier to explore and understand.
          </p>
        </section>

        {/* ================= TECH STACK ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ⤓ Tech Stack
          </h2>

          <div className="flex flex-wrap gap-3">
            {["Three.js", "JavaScript", "Vite", "HTML", "CSS", "PCAP"].map(
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
            ♻ Architecture
          </h2>

          <pre className="overflow-x-auto rounded-xl border border-[#2e2e3a] bg-[#121216] p-8 font-terminal text-sm leading-8 text-[#00f0ff]">
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
                Rendering High-Frequency Traffic
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#8f8f9a]">
                Efficient rendering techniques were used to keep the animation
                responsive while visualizing continuous packet movement without
                causing unnecessary rendering overhead.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                Maintaining Packet Order
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#8f8f9a]">
                Packets must remain synchronized with timestamps while
                travelling between network nodes to preserve the original
                traffic sequence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white">
                Interactive Camera Controls
              </h3>

              <p className="mt-4 text-lg leading-8 text-[#8f8f9a]">
                Multiple viewing modes and smooth camera movement were designed
                to allow users to inspect traffic from different perspectives
                without losing spatial context.
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
              <span className="text-[#00ff9d]">✓</span> Optimized rendering
              pipeline using Three.js.
            </li>
            <li>
              <span className="text-[#00ff9d]">✓</span> Reused geometry and
              materials to reduce GPU overhead.
            </li>
            <li>
              <span className="text-[#00ff9d]">✓</span> Minimized unnecessary
              DOM updates.
            </li>
            <li>
              <span className="text-[#00ff9d]">✓</span> Smooth animation loop
              for packet playback.
            </li>
          </ul>
        </section>

        {/* ================= LEARNINGS ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ▣ Lessons Learned
          </h2>

          <p className="text-lg leading-8 text-[#8f8f9a]">
            Building Packet Sniffer 3D deepened my understanding of packet
            structures, visualization pipelines, Three.js rendering, performance
            optimization, and designing developer tools that make complex
            networking concepts easier to understand.
          </p>
        </section>

        {/* ================= FUTURE ================= */}

        <section className="mb-20">
          <h2 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold">
            ▶ Future Improvements
          </h2>

          <ul className="space-y-4 font-terminal text-base text-[#c4c4cc]">
            <li>• Live packet capture from localhost.</li>
            <li>• Wireshark integration.</li>
            <li>• Packet search and filtering.</li>
            <li>• Timeline playback controls.</li>
            <li>• WebSocket traffic visualization.</li>
          </ul>
        </section>

        {/* ================= FOOTER ================= */}

        <div className="flex flex-wrap items-center gap-8 border-t border-[#2e2e3a] pt-10 font-terminal text-sm">
          <a
            href="https://github.com/abhi-byte62/packet-sniffer-3d-"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#00f0ff] transition hover:text-white"
          >
            <FaGithub />
            &gt; view source [packet-sniffer]
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

export default PacketSniffer;
