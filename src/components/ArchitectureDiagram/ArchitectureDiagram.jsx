import { HiArrowNarrowRight, HiCheckCircle } from "react-icons/hi";

const ArchitectureDiagram = ({ title, subtitle, stages = [], footnotes = [] }) => {
  return (
    <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
            System Architecture
          </span>
          <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FF] mt-1">
            {title}
          </h3>
        </div>
        {subtitle && <p className="text-xs text-[#8D99B5] max-w-sm">{subtitle}</p>}
      </div>

      {/* Pipeline Flow Stages */}
      <div className="grid gap-3 md:grid-cols-4 relative">
        {stages.map((stage, idx) => (
          <div
            key={idx}
            className="relative flex flex-col rounded-xl border border-[#1C2942] bg-[#050914] p-4 transition-all duration-200 hover:border-[#4D7CFF]/40"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-semibold text-[#4D7CFF]">
                STAGE 0{idx + 1}
              </span>
              {stage.protocol && (
                <span className="rounded bg-[#0D1B3A] px-1.5 py-0.5 text-[10px] font-mono text-[#6D96FF] border border-[#4D7CFF]/20">
                  {stage.protocol}
                </span>
              )}
            </div>

            <h4 className="mt-3 text-sm font-semibold text-[#F5F7FF]">{stage.name}</h4>
            <p className="mt-1 text-xs text-[#8D99B5] leading-relaxed">{stage.description}</p>

            {stage.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-[#1C2942]">
                {stage.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono text-[#5F6B83]">
                    #{t}
                  </span>
                ))}
              </div>
            )}

            {/* Desktop Direction Indicator */}
            {idx < stages.length - 1 && (
              <div className="hidden md:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-[#0D1424] border border-[#1C2942] items-center justify-center text-[#4D7CFF]">
                <HiArrowNarrowRight size={10} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footnotes / Invariants */}
      {footnotes.length > 0 && (
        <div className="mt-6 border-t border-[#1C2942] pt-4 grid gap-2 sm:grid-cols-2 text-xs text-[#8D99B5]">
          {footnotes.map((fn, i) => (
            <div key={i} className="flex items-start gap-2">
              <HiCheckCircle className="text-[#4D7CFF] shrink-0 mt-0.5" size={14} />
              <span>{fn}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArchitectureDiagram;
