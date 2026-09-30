import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const tenets = [
  {
    number: "01",
    title: "Explicit State & Concurrency Control",
    description:
      "Preventing race conditions and dirty writes requires deliberate concurrency models. I design systems around optimistic concurrency control (OCC), atomic database transactions, and deterministic event sequences over unvalidated client assumptions.",
  },
  {
    number: "02",
    title: "Bounded Memory & Stream Backpressure",
    description:
      "Unbounded queues under high throughput cause GC thrashing and out-of-memory failures. I enforce strict stream backpressure (highWaterMark), zero-copy buffer slicing, and fixed-point integer math to keep memory footprints constant.",
  },
  {
    number: "03",
    title: "Deterministic Replay & Invariant Verification",
    description:
      "A distributed or financial system is only reliable when invariants hold unconditionally. I build deterministic seed-based test harnesses and assert book balance conservation (Equity = Cash + Positions × Mid) across all states.",
  },
  {
    number: "04",
    title: "Systems Foundations Over Transient Abstractions",
    description:
      "Frameworks shift, but systems fundamentals endure. Deep intuition for the TCP/IP stack, OS memory management, event loop mechanics, and amortized complexity guides robust architectural design.",
  },
];

const About = () => {
  return (
    <Section id="about" className="relative">
      <Container>
        <SectionTitle
          tag="ABOUT"
          title="Background & Architectural Approach"
          subtitle="How I approach building reliable software systems, concurrency control, and bounded resource utilization."
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
            <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-[#BAC5D8]">
              <p>
                Software engineer with strong Computer Science fundamentals, focusing on distributed backends, market simulation engines, and low-latency systems.
              </p>
              <p>
                My work spans enterprise microservice architectures in <span className="text-[#F5F7FF] font-medium">Java 21 / Spring Boot 3</span> with message queues (RabbitMQ), low-level systems in <span className="text-[#F5F7FF] font-medium">C++17</span> (matching engines & fixed-point order books), and real-time state synchronization.
              </p>
              <p className="text-xs text-[#8D99B5]">
                I emphasize modular boundaries, bounded resource utilization, predictable algorithmic complexity, and invariant-driven automated verification.
              </p>
            </div>

            {/* Background & Education Summary Card */}
            <div className="rounded-xl border border-[#1C2942] bg-[#0D1424] p-5">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF]">
                Education & Technical Foundations
              </div>
              <div className="mt-3 space-y-1.5 text-xs text-[#8D99B5]">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-[#F5F7FF]">Computer Science & Engineering</span>
                  <span className="font-mono text-[10px] text-[#5F6B83]">B.E.</span>
                </div>
                <p className="text-[#BAC5D8] leading-relaxed">
                  Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Distributed Computing.
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
                <p className="mt-2 text-xs md:text-sm leading-relaxed text-[#BAC5D8]">
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