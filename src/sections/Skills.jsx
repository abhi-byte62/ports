import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { skillsMatrix } from "../data/skills";

const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-[#090A0F] text-[#EDEDED] border-t border-white/[0.06]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Core Skills & Engineering Stack
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
            Low-latency systems programming, concurrent backend services, distributed data stores, and algorithmic foundations.
          </p>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsMatrix.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-neutral-800/80 bg-[#0C0D13] p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="pb-3 mb-4 border-b border-white/[0.06]">
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {group.focus}
                  </p>
                </div>

                {/* Nodes List */}
                <div className="space-y-1.5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-neutral-900/60 border border-neutral-800/80 rounded-md px-3 py-2 flex items-center justify-between text-xs"
                    >
                      <span className="font-medium text-neutral-200">{item.name}</span>
                      <span className="text-[11px] font-mono text-neutral-400">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Problem Solving & Algorithmic Profiles Card */}
          <div className="rounded-2xl border border-neutral-800/80 bg-[#0C0D13] p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
            <div>
              <div className="pb-3 mb-4 border-b border-white/[0.06]">
                <h3 className="text-base font-semibold text-white">
                  Algorithms & Problem Solving
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Active problem solving across dynamic programming, graph algorithms, and asymptotic complexity bounds.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <a
                  href="https://leetcode.com/u/playboldAbhi/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 rounded-lg p-3 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <SiLeetcode className="text-[#FFA116]" size={18} />
                    <div>
                      <div className="text-xs font-medium text-white group-hover:text-neutral-200 transition-colors">
                        LeetCode Profile
                      </div>
                      <div className="text-xs font-mono text-neutral-400">
                        @playboldAbhi
                      </div>
                    </div>
                  </div>
                  <HiArrowRight size={13} className="text-neutral-500 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://codeforces.com/profile/playboldAbhi"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 rounded-lg p-3 flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <SiCodeforces className="text-[#1F8ACB]" size={18} />
                    <div>
                      <div className="text-xs font-medium text-white group-hover:text-neutral-200 transition-colors">
                        Codeforces Profile
                      </div>
                      <div className="text-xs font-mono text-neutral-400">
                        @playboldAbhi
                      </div>
                    </div>
                  </div>
                  <HiArrowRight size={13} className="text-neutral-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs font-mono text-neutral-400">
              Active Contestant & Problem Solver
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Skills;