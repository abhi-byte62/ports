import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { openSourceContributions } from "../data/opensource";

const OpenSource = () => {
  return (
    <Section id="opensource" className="py-20 bg-[#080D1A] text-[#E6EAF2] border-t-2 border-[#334366]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-12">
          <div className="flex items-center gap-2 mb-2 font-pixel text-[10px] text-[#8AA4FF]">
            <span className="h-2 w-2 bg-[#8AA4FF]" />
            <span>UPSTREAM PATCHES // 02</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-pixel-heading">
            Open Source & Upstream Engineering
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed font-mono">
            Direct upstream patches to Java AST static analysis tools, distributed databases, high-throughput web frameworks, and institutional quantitative trading engines.
          </p>
        </div>

        {/* Patch Ledger Grid */}
        <div className="space-y-5">
          {openSourceContributions.map((c) => (
            <div
              key={c.id}
              className="pixel-frame p-5 sm:p-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left Column: Repo & Metadata (4 cols) */}
                <div className="lg:col-span-4 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="pixel-tag pixel-tag-teal">
                      {c.type}
                    </span>
                    <span className="text-[9px] font-pixel text-[#FFD166]">
                      ★ {c.stars}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-pixel-heading">
                    {c.org || c.repo.split("/")[0]}
                  </h3>

                  <div className="text-xs font-mono text-[#8AA4FF]">
                    {c.repo}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                    <a
                      href={c.commitUrl || c.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="pixel-btn !py-1 !px-2.5 !text-[8px] !bg-[#0F172A] !text-[#55E6C1]"
                    >
                      <FaGithub size={11} />
                      <span>{c.commit ? `SHA: ${c.commit}` : "UPSTREAM"}</span>
                      <HiExternalLink size={10} />
                    </a>
                    <span className="text-[10px] font-pixel text-[#64748B]">{c.date}</span>
                  </div>
                </div>

                {/* Right Column: Title, Description & Verified Impact (8 cols) */}
                <div className="lg:col-span-8 space-y-3 font-mono text-xs sm:text-sm">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 flex items-start gap-2 font-pixel-heading">
                      <span className="text-[#55E6C1] mt-0.5">&gt;</span>
                      <span>{c.title}</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {c.description}
                    </p>
                  </div>

                  <div className="p-3 bg-[#0F172A] border-2 border-[#334366] text-xs shadow-[2px_2px_0px_#04070D]">
                    <div className="text-[#55E6C1] font-pixel text-[8px] mb-1">
                      VERIFIED IMPACT &gt;&gt;
                    </div>
                    <p className="text-[#E6EAF2] leading-relaxed font-mono">
                      {c.impact}
                    </p>
                  </div>

                  {c.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {c.tags.map((t) => (
                        <span key={t} className="text-[9px] font-pixel bg-[#080D1A] border border-[#334366] px-2 py-0.5 text-[#94A3B8]">
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default OpenSource;
