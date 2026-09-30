import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const tenets = [
  {
    number: "01",
    title: "Explicit State & Concurrency Control",
    description:
      "Preventing race conditions and dirty writes requires deliberate concurrency patterns. I rely on optimistic locking (OCC), atomic database transactions, and deterministic event ordering over naive client-side assumptions.",
  },
  {
    number: "02",
    title: "Bounded Memory & Stream Backpressure",
    description:
      "High throughput without memory bounds leads to latency spikes and OOM failures. I design data pipelines with chunked stream transforms, object pooling, and strict highWaterMark backpressure flow control.",
  },
  {
    number: "03",
    title: "End-to-End Correctness & Verification",
    description:
      "A distributed system is only complete when edge cases are verified. I build automated test suites covering malformed packet parsing, abrupt socket disconnects, conflict resolution, and deterministic recovery.",
  },
  {
    number: "04",
    title: "Foundations Over Framework Transience",
    description:
      "Frameworks evolve, but computer science fundamentals remain constant. Strong understanding of the TCP/IP stack, event loops, OS memory models, and algorithmic complexity informs better architectural decisions.",
  },
];

const About = () => {
  return (
    <Section id="about" className="relative">
      <Container>
        <SectionTitle
          tag="ENGINEERING PROFILE"
          title="Background & Architectural Approach"
          subtitle="How I approach building reliable software systems, managing concurrency, and structuring maintainable codebases."
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 grid gap-10 lg:grid-cols-12"
        >
          {/* Left Column - Engineering Narrative & Background */}
          <div className="flex flex-col justify-between lg:col-span-5 space-y-6">
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-[#8D99B5]">
              <p>
                I am a software engineer with a strong Computer Science foundation, focused on backend architectures, high-performance engines, and developer tooling.
              </p>
              <p>
                My work spans designing distributed microservices with <span className="text-[#F5F7FF] font-medium">Java, Spring Boot, RabbitMQ, and PostgreSQL</span> to low-level systems programming in <span className="text-[#F5F7FF] font-medium">C++17</span> (limit order book matching engines), custom TLS forward proxies, and WebGL telemetry engines.
              </p>
              <p>
                I prioritize clarity over cleverness: modular architectural boundaries, explicit error handling, predictable algorithmic complexity, and comprehensive verification.
              </p>
            </div>

            {/* Background & Education Summary Card */}
            <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-5">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
                Education & Technical Track
              </div>
              <div className="mt-3 space-y-2 text-xs text-[#8D99B5]">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#F5F7FF]">Computer Science & Engineering</span>
                  <span className="font-mono text-[10px] text-[#5F6B83]">B.E.</span>
                </div>
                <p className="text-[#8D99B5] leading-relaxed">
                  Focus on Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, and Distributed Computing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Engineering Tenets */}
          <div className="space-y-3.5 lg:col-span-7">
            <div className="mb-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#8D99B5]">
              Core Architectural Principles
            </div>
            {tenets.map((tenet) => (
              <div
                key={tenet.number}
                className="group rounded-xl border border-[#1C2942] bg-[#0D1424] p-5 sm:p-6 transition-all duration-200 hover:border-[#4D7CFF]/40 hover:bg-[#10182A]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#4D7CFF]">
                    {tenet.number}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-base md:text-lg font-bold text-[#F5F7FF] group-hover:text-[#6D96FF] transition-colors">
                    {tenet.title}
                  </h3>
                </div>
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#8D99B5]">
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