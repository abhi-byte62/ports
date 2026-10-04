import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";

const ArchitectureDiagram = ({ title, subtitle, stages = [], footnotes = [] }) => {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8 shadow-sm">
      <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <div>
          <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-500">
            System Architecture
          </span>
          <h3 className="text-xl font-semibold text-white mt-1 tracking-tight">
            {title}
          </h3>
        </div>
        {subtitle && <p className="text-xs text-neutral-400 max-w-sm font-sans leading-relaxed">{subtitle}</p>}
      </div>

      {/* Pipeline Flow Stages */}
      <div className="grid gap-3 md:grid-cols-4 relative">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-between rounded-lg border border-white/[0.06] bg-white/[0.01] p-4 transition-colors duration-200 hover:border-white/[0.15]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-500 font-medium">
                  STAGE 0{idx + 1}
                </span>
                {stage.protocol && (
                  <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-neutral-300 border border-white/[0.06]">
                    {stage.protocol}
                  </span>
                )}
              </div>

              <h4 className="mt-3 text-sm font-semibold text-white tracking-tight">{stage.name}</h4>
              <p className="mt-1.5 text-xs text-neutral-400 leading-relaxed font-sans">{stage.description}</p>
            </div>

            {stage.tags && (
              <div className="mt-3.5 flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                {stage.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-neutral-500">
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Desktop Direction Indicator */}
            {idx < stages.length - 1 && (
              <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#0C0C12] border border-white/[0.12] items-center justify-center text-neutral-400">
                <HiArrowNarrowRight size={10} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footnotes / Invariants */}
      {footnotes.length > 0 && (
        <div className="mt-6 border-t border-white/[0.06] pt-4 grid gap-2 sm:grid-cols-2 text-xs text-neutral-400 font-sans">
          {footnotes.map((fn, i) => (
            <div key={i} className="flex items-start gap-2">
              <HiCheckCircle className="text-emerald-400 shrink-0 mt-0.5" size={14} />
              <span className="leading-relaxed">{fn}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
