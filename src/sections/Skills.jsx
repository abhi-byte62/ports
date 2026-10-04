import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const skillGroups = [
  {
    category: "Languages",
    items: ["C++17 / C++20", "Java 21", "TypeScript", "Python 3", "Go", "C", "SQL"],
  },
  {
    category: "Systems",
    items: [
      "Distributed Concurrency (OCC)",
      "Memory Modeling & Cache Locality",
      "Network Protocols & Sockets",
      "Zero-Allocation Buffers",
      "Amortized Complexity (Big-O)",
    ],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot 3",
      "Node.js & Express",
      "FastAPI",
      "PostgreSQL 16 / 17",
      "Redis 7 / Valkey Cluster",
      "RabbitMQ",
    ],
  },
  {
    category: "Infrastructure",
    items: [
      "Docker & Compose",
      "Linux / POSIX Shell",
      "Git & GitHub Actions",
      "CI/CD Pipelines",
      "Network Telemetry",
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-[#08080C] text-white border-t border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Technical Foundation
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            Core competencies across systems programming, backend architectures, data stores, and foundational computer science.
          </p>
        </div>

        {/* Natural Categorized Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono pb-2 border-b border-white/[0.08]">
                {group.category}
              </h3>
              <ul className="space-y-1.5 text-xs font-mono text-neutral-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-neutral-500">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Problem Solving & Verification */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono pb-2 border-b border-white/[0.08]">
              Problem Solving & Verification
            </h3>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Active algorithmic verification across dynamic programming, graph theory, and amortized complexity bounds.
            </p>
            <div className="pt-2 space-y-2 text-xs font-mono">
              <a
                href="https://leetcode.com/u/playboldAbhi/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <SiLeetcode className="text-[#FFA116]" size={14} />
                <span>LeetCode Profile</span>
                <HiArrowRight size={12} className="text-neutral-500" />
              </a>

              <a
                href="https://codeforces.com/profile/playboldAbhi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <SiCodeforces className="text-[#1F8ACB]" size={14} />
                <span>Codeforces Profile</span>
                <HiArrowRight size={12} className="text-neutral-500" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;