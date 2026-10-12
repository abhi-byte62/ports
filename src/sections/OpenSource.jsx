import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import { openSourceContributions } from "../data/opensource";

const OpenSource = () => {
  return (
    <Section id="opensource" className="py-24 bg-[#090A0F] text-[#EDEDED] border-t border-white/[0.06]">
      <Container>
        {/* Section Header */}
        <div className="max-w-4xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-medium mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Upstream Contributions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Open Source & Infrastructure Patches
          </h2>
          <p className="mt-3 text-base text-neutral-400 leading-relaxed max-w-2xl font-normal">
            Direct upstream patches merged into distributed databases, static analysis tools, web frameworks, and institutional quantitative trading engines.
          </p>
        </div>

        {/* Contributions Ledger Grid */}
        <div className="space-y-5">
          {openSourceContributions.map((c) => (
            <div
              key={c.id}
              className="rounded-2xl border border-neutral-800/80 bg-[#0C0D13] p-6 sm:p-8 hover:border-neutral-700 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Left Column: Repo & Metadata (4 cols) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-neutral-300 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">
                      {c.type}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      ★ {c.stars}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {c.org || c.repo.split("/")[0]}
                  </h3>

                  <div className="text-xs font-mono text-neutral-400">
                    {c.repo}
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
                    <a
                      href={c.commitUrl || c.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary !text-xs !py-1.5 !px-3"
                    >
                      <FaGithub size={13} />
                      <span>{c.commit ? `Commit ${c.commit.slice(0, 7)}` : "Pull request"}</span>
                      <HiExternalLink size={12} />
                    </a>
                    <span className="text-xs font-mono text-neutral-500">{c.date}</span>
                  </div>
                </div>

                {/* Right Column: Title, Description & Impact (8 cols) */}
                <div className="lg:col-span-8 space-y-3.5">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1.5">
                      {c.title}
                    </h4>
                    <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                      {c.description}
                    </p>
                  </div>

                  <div className="p-3 bg-neutral-900/60 border border-neutral-800/80 rounded-lg">
                    <div className="text-neutral-400 text-xs font-mono font-medium mb-0.5">
                      Technical Impact
                    </div>
                    <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                      {c.impact}
                    </p>
                  </div>

                  {c.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {c.tags.map((t) => (
                        <span key={t} className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800/80 px-2 py-0.5 rounded">
                          {t}
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
