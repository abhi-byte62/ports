import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";

const ArchitectureDiagram = ({ title, subtitle, stages = [], footnotes = [] }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            System Architecture
          </span>
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-zinc-100 mt-1">
            {title}
          </h3>
        </div>
        {subtitle && <p className="text-xs text-zinc-400 max-w-sm">{subtitle}</p>}
      </div>

      {/* Pipeline Flow Stages */}
      <div className="grid gap-3 md:grid-cols-4 relative">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="relative flex flex-col rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 transition-all hover:border-zinc-700"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-semibold text-blue-400">
                STAGE 0{idx + 1}
              </span>
              {stage.protocol && (
                <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                  {stage.protocol}
                </span>
              )}
            </div>

            <h4 className="mt-3 text-sm font-semibold text-zinc-100">{stage.name}</h4>
            <p className="mt-1 text-xs text-zinc-400 leading-relaxed">{stage.description}</p>

            {stage.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-900">
                {stage.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-zinc-500">
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Desktop Direction Indicator */}
            {idx < stages.length - 1 && (
              <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-zinc-900 border border-zinc-700 items-center justify-center text-zinc-400">
                <HiArrowNarrowRight size={10} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footnotes / Invariants */}
      {footnotes.length > 0 && (
        <div className="mt-6 border-t border-zinc-800/80 pt-4 grid gap-2 sm:grid-cols-2 text-xs text-zinc-400">
          {footnotes.map((fn, i) => (
            <div key={i} className="flex items-start gap-2">
              <HiCheckCircle className="text-blue-400 shrink-0 mt-0.5" size={14} />
              <span>{fn}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
