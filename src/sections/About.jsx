import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const tenets = [
  {
    number: "01",
    title: "Clean Architecture & Modular Design",
    description:
      "Writing maintainable software requires strict separation of concerns between business domain logic, data streaming pipelines, and presentation layers. I prioritize decoupled modular interfaces and predictable data flow.",
  },
  {
    number: "02",
    title: "Algorithmic Efficiency & Memory Predictability",
    description:
      "From choosing optimal data structures (ring buffers, LRU caches, typed array buffers) to mitigating runtime garbage collection pauses, I design software with deterministic time and space complexity.",
  },
  {
    number: "03",
    title: "End-to-End Reliability & Verification",
    description:
      "A production system is only as resilient as its failure handling. I build comprehensive automated test suites covering boundary parsing errors, abrupt socket terminations, and graceful degradation under high load.",
  },
  {
    number: "04",
    title: "Deep Understanding Beyond Framework Abstractions",
    description:
      "Frameworks come and go, but foundational engineering remains invariant. Understanding how Node.js coordinates the libuv event loop, how browsers schedule GPU draws, and how TCP handles congestion makes every abstraction easier to master.",
  },
];

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          tag="ENGINEERING APPROACH"
          title="Software Engineering Principles & System Design"
          subtitle="A disciplined software engineering philosophy centered on scalable architecture, clean codebases, algorithmic efficiency, and robust backend reliability."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid gap-10 lg:grid-cols-12"
        >
          {/* Left Column - Engineering Narrative */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="space-y-5 text-base leading-relaxed text-[#8B96A3]">
              <p>
                I am a Software Engineer passionate about designing resilient backend systems, scalable web applications, and developer-centric tooling.
              </p>
              <p>
                My engineering journey bridges full-stack application development (<span className="text-[#F2F5F7]">Java, Spring Boot, Node.js, React</span>) with low-level systems programming (binary protocol parsers, custom HTTP/HTTPS proxies, and WebGL graphics engines).
              </p>
              <p>
                Whether architecting microservices, implementing real-time event pipelines, or solving algorithmic challenges, I focus on building reliable, clean, and well-tested software that scales seamlessly.
              </p>
            </div>

            <div className="mt-8 rounded-xl border border-[#222A32] bg-[#101419] p-5 shadow-sm">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#5CE6A8]">
                Core Software Engineering Focus
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#8B96A3]">
                Full-Stack Web Engineering, Scalable Backend Services, Data Structures & Algorithms, Distributed Systems, and Low-Level Network Tooling.
              </p>
            </div>
          </div>

          {/* Right Column - Engineering Tenets */}
          <div className="space-y-4 lg:col-span-7">
            {tenets.map((tenet) => (
              <div
                key={tenet.number}
                className="group rounded-xl border border-[#222A32] bg-[#101419] p-6 transition-all duration-200 hover:border-[#5CE6A8]/40 hover:bg-[#151B22]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs font-bold text-[#5CE6A8]">
                    {tenet.number}
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-base md:text-lg font-bold text-[#F2F5F7] group-hover:text-[#72F0B5] transition-colors">
                    {tenet.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-[#8B96A3]">
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