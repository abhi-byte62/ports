import { HiXCircle, HiCheckCircle } from "react-icons/hi";

const ComparisonView = ({ title, leftTitle, rightTitle, points = [] }) => {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#0C0C12] p-6 md:p-8 shadow-sm">
      <div className="mb-6">
        <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-500">
          Architecture Trade-offs
        </span>
        <h3 className="text-xl font-semibold text-white mt-1 tracking-tight">
          {title}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: Traditional Approach */}
        <div className="rounded-lg border border-white/[0.06] bg-white/[0.01] p-5">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-neutral-400 mb-4 pb-2.5 border-b border-white/[0.06]">
            <HiXCircle size={15} className="text-rose-400" />
            <span>{leftTitle}</span>
          </div>
          <ul className="space-y-3.5">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-neutral-400 leading-relaxed font-sans">
                <strong className="text-neutral-200 block mb-0.5 font-medium">{p.aspect}</strong>
                {p.traditional}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Engineered Solution */}
        <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
          <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider text-white mb-4 pb-2.5 border-b border-white/[0.08]">
            <HiCheckCircle size={15} className="text-emerald-400" />
            <span>{rightTitle}</span>
          </div>
          <ul className="space-y-3.5">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-neutral-300 leading-relaxed font-sans">
                <strong className="text-white block mb-0.5 font-medium">{p.aspect}</strong>
                {p.solution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ComparisonView;
