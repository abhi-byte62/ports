import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const tenets = [
  {
    number: "01",
    title: "Deterministic Memory Over Blind Buffering",
    description:
      "Unbounded in-memory accumulation is the number one cause of production GC pauses and OOM failures. I design stream pipelines using explicit highWaterMark limits and backpressure propagation.",
  },
  {
    number: "02",
    title: "Spatial Topology Over Tabular Noise",
    description:
      "Rows of text logs hide multi-hop network anomalies. By projecting binary PCAPs into hardware-accelerated 3D topologies, packet flow relationships and congestion hotspots become instantly apparent.",
  },
  {
    number: "03",
    title: "Mastering Protocols from the Wire Up",
    description:
      "True engineering resilience comes from understanding RFC specifications, TLS SNI negotiation, and TCP socket lifecycles—not blindly treating networking libraries as opaque black boxes.",
  },
];

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          tag="ENGINEERING PHILOSOPHY"
          title="Building Resilient Systems Beyond CRUD"
          subtitle="A systems-first engineering approach centered on low-level protocols, stream architectures, and deterministic performance."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-12 lg:grid-cols-12"
        >
          {/* Left Column - Engineering Narrative */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="space-y-6 text-base leading-relaxed text-zinc-400">
              <p>
                I am a Software Engineer dedicated to constructing high-performance systems, network developer tooling, and interactive 3D visualizations.
              </p>
              <p>
                Rather than building cookie-cutter CRUD applications, I focus on solving foundational engineering challenges: parsing binary PCAP frames in real-time, engineering MITM proxies with zero-copy stream backpressure, and rendering 50,000+ spatial packet particles at 60 FPS in WebGL.
              </p>
              <p>
                My approach combines deep curiosity about how protocols operate across the wire with rigorous attention to runtime efficiency and memory predictability.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Current Research & Focus
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                High-throughput network proxies, distributed consensus mechanisms, WebAssembly protocol decoders, and WebGL shader pipelines.
              </p>
            </div>
          </div>

          {/* Right Column - Engineering Tenets */}
          <div className="space-y-4 lg:col-span-7">
            {tenets.map((tenet) => (
              <div
                key={tenet.number}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-blue-400">
                    {tenet.number}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-base md:text-lg font-bold text-zinc-100">
                    {tenet.title}
                  </h3>
                </div>
                <p className="mt-3 text-xs md:text-sm leading-relaxed text-zinc-400">
                  {tenet.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;