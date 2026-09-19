import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import SEO from "../components/SEO/SEO";
import Container from "../components/Container/Container";

import packetImage from "../assets/images/packet-sniffer.png";

const features = [
  {
    title: "PCAP Stream Parsing",
    description: "Ingests and parses captured network packets directly from PCAP files, translating binary frames into structured data structures.",
  },
  {
    title: "3D Topology Rendering",
    description: "Visualizes packet flow between endpoints, routers, and switches using a dynamic WebGL/Three.js spatial scene.",
  },
  {
    title: "Chronological Playback",
    description: "Replays network events according to relative timestamp offsets, allowing detailed inspection of historical traffic spikes.",
  },
  {
    title: "Spatial Camera Controls",
    description: "Full orbit controls, zooming, and focus modes that let users isolate subnets or inspect individual node connections.",
  }
];

const PacketSniffer = () => {
  return (
    <main className="min-h-screen bg-zinc-950 py-32 text-zinc-100">
      <SEO
        title="Packet Sniffer 3D | Abhishek M R"
        description="Interactive 3D packet visualization built using Three.js and PCAP parsing."
        keywords="Three.js, PCAP, Networking, Packet Sniffer, WebGL"
      />
      <Container>
        {/* Header */}
        <section className="mx-auto max-w-4xl text-center mb-24">
          <Link to="/" className="inline-block text-zinc-500 hover:text-zinc-300 mb-8 transition-colors">
            &larr; Back to Portfolio
          </Link>

          <h1 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Packet Sniffer 3D
          </h1>

          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            An interactive 3D visualization platform that renders network traffic using PCAP parsing, WebGL, and packet playback.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {["Three.js", "JavaScript", "PCAP", "WebGL", "Vite"].map((tech) => (
              <span key={tech} className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1.5 text-sm text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Feature Image */}
        <div className="mx-auto max-w-5xl mb-24 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">
          <img src={packetImage} alt="Packet Sniffer 3D Visualization" className="w-full object-cover" />
        </div>

        <div className="mx-auto max-w-3xl space-y-24">
          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p>
                Standard packet inspection tools display network captures as endless rows of text logs. While exhaustive, this approach obscures spatial relationships, bottlenecks, and overall flow topology.
              </p>
              <p>
                Packet Sniffer 3D bridges this gap by translating PCAP traces into an interactive 3D visual graph. Data packets are modeled as discrete particles traversing edges between computed nodes, making abstract traffic streams intuitive to observe.
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

          {/* Engineering */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Engineering Challenges</h2>
            <div className="prose prose-invert prose-zinc max-w-none text-zinc-400">
              <p>
                <strong>High-Frequency Particle Instancing:</strong> To prevent GPU draw call saturation under heavy captures, instances of standard geometries were grouped and updated within a single requestAnimationFrame loop.
              </p>
              <p>
                <strong>Timestamp Synchronization:</strong> Packets must travel across network topology in strict chronological order relative to real capture time, requiring a resilient animation clock mechanism.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mx-auto max-w-3xl mt-24 pt-8 border-t border-zinc-800 flex justify-center">
          <a
            href="https://github.com/abhi-byte62/packet-sniffer-3d-"
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

export default PacketSniffer;