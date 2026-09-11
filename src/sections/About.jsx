import { motion } from "framer-motion";

import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import SectionTitle from "../components/SectionTitle/SectionTitle";

const systemInfo = [
  { key: "PROFILE", value: "Abhishek M R", color: "text-white" },
  { key: "ROLE", value: "Software Engineering Student", color: "text-[#00f0ff]" },
  { key: "MEMO", value: "\"Build tools, not CRUD\"", color: "text-[#facc15]" },
];

const interests = [
  "Frontend Systems",
  "Network Tracing",
  "Container Orchestration",
  "Developer Tools",
  "Packets & Protocols",
];

const learning = ["Spring Boot", "Docker", "System Design", "Advanced DSA"];

const About = () => {
  return (
    <Section id="about">
      <Container>
        <SectionTitle
          subtitle="About Me"
          title="Building Software Beyond CRUD Applications"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 mt-14"
        >
          {/* Left - Terminal Text */}
          <div className="font-terminal text-sm leading-7">
            <p className="text-[#8f8f9a]">
              <span className="text-[#00ff9d]">$</span> cat /thoughts/why.txt
            </p>

            <p className="mt-4 text-[#e5e5e5] leading-8 text-base">
              I'm a Software Engineering student who finds{" "}
              <span className="text-[#00f0ff]">packet logs beautiful</span>,
              protocol internals fascinating, and builds frontend + networking
              tools because generic web apps don't scratch the itch.
            </p>

            <p className="mt-4 text-[#c4c4cc] leading-8 text-base">
              Rather than churning out CRUD, I solve engineering problems
              involving{" "}
              <span className="text-[#a855f7]">packet inspection</span>,{" "}
              <span className="text-[#a855f7]">network visualization</span>,{" "}
              <span className="text-[#a855f7]">HTTP proxies</span>, and{" "}
              <span className="text-[#a855f7]">scalable systems</span> — things
              that make observability automatic.
            </p>

            <p className="mt-6 text-[#00ff9d]">
              <span className="text-[#8f8f9a]">#</span> exit 0 — no bugs shipped
              today, but the packets flowed.
            </p>
          </div>

          {/* Right - System Info Card */}
          <div className="space-y-6">
            {/* Info Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#2e2e3a] bg-[#121216]/80 p-6 font-terminal text-sm glow-border"
            >
              <div className="mb-4 flex items-center gap-2 border-b border-[#2e2e3a] pb-3">
                <span className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff2a2a]/70" />
                  <span className="h-3 w-3 rounded-full bg-[#facc15]/70" />
                  <span className="h-3 w-3 rounded-full bg-[#00ff9d]/70" />
                </span>
                <span className="ml-2 text-xs text-[#8f8f9a]">
                  abhishek@system: ~/profile
                </span>
              </div>

              {systemInfo.map((info) => (
                <div key={info.key} className="flex gap-2 py-1.5">
                  <span className="shrink-0 text-[#a855f7] w-24">
                    {info.key}:
                  </span>
                  <span className={info.color}>{info.value}</span>
                </div>
              ))}
            </motion.div>

            {/* Interests Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#2e2e3a] bg-[#121216]/80 p-6 font-terminal text-sm"
            >
              <div className="mb-3 text-[#facc15]">$ ls ./interests</div>
              {interests.map((interest) => (
                <div key={interest} className="flex items-center gap-2 py-1 text-[#c4c4cc]">
                  <span className="text-[#00ff9d]">[✓]</span>
                  {interest}
                </div>
              ))}
            </motion.div>

            {/* Learning Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg border border-[#2e2e3a] bg-[#121216]/80 p-6 font-terminal text-sm"
            >
              <div className="mb-3 text-[#00f0ff]">$ uptime --stack</div>
              <div className="flex flex-wrap gap-2">
                {learning.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-[#a855f7]/50 bg-[#a855f7]/10 px-3 py-1 text-[#c4c4cc]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default About;