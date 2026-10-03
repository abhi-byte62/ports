import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";

const skillGroups = [
  {
    category: "Languages",
    items: ["C++17 / C++20", "Java 21", "Go", "TypeScript / JavaScript", "Python 3", "C", "SQL"],
  },
  {
    category: "Systems & Backend",
    items: [
      "Spring Boot 3",
      "Node.js & Express",
      "FastAPI",
      "WebSocket & Socket.io",
      "RabbitMQ",
      "RESTful API Design",
    ],
  },
  {
    category: "Databases & Caching",
    items: ["PostgreSQL 16 / 17", "Redis 7 / Valkey Cluster", "Prisma ORM", "ACID Transactions"],
  },
  {
    category: "Infrastructure & Tooling",
    items: ["Docker & Compose", "Linux / POSIX Shell", "Git & GitHub Actions", "CI/CD Workflows"],
  },
  {
    category: "Core CS & Engineering Foundations",
    items: [
      "Data Structures & Algorithms",
      "Distributed Concurrency (OCC)",
      "Network Protocols & Sockets",
      "Zero-Allocation Memory Modeling",
      "Time & Space Complexity (Big-O)",
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-[#08080C] text-white border-t border-white/[0.08]">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Technical Foundation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
            Core competencies across systems programming, backend architectures, data stores, and foundational computer science.
          </p>
        </div>

        {/* Natural Categorized Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillGroups.map((group) => (
            <div key={group.category} className="space-y-4">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white pb-2 border-b border-white/[0.08]">
                {group.category}
              </h3>
              <ul className="space-y-2 text-sm text-neutral-300 font-sans">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-neutral-500 font-mono text-xs">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Problem Solving & Verification */}
          <div className="space-y-4">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white pb-2 border-b border-white/[0.08]">
              Algorithmic Problem Solving
            </h3>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              Active verification across trees, dynamic programming, graphs, and amortized complexity bounds.
            </p>
            <div className="pt-2 space-y-2 text-xs font-mono">
              <a
                href="https://leetcode.com/u/playboldAbhi/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <SiLeetcode className="text-[#FFA116]" size={14} />
                <span>LeetCode (700+ Solved)</span>
                <HiArrowRight size={12} className="text-sky-400" />
              </a>

              <a
                href="https://codeforces.com/profile/playboldAbhi"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
              >
                <SiCodeforces className="text-[#1F8ACB]" size={14} />
                <span>Codeforces Profile</span>
                <HiArrowRight size={12} className="text-sky-400" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;