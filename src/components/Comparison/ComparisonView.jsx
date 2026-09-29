import { HiXCircle, HiCheckCircle } from "react-icons/hi";

const ComparisonView = ({ title, leftTitle, rightTitle, points = [] }) => {
  return (
    <div className="rounded-2xl border border-[#222A32] bg-[#101419] p-6 md:p-8">
      <div className="mb-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#5CE6A8]">
          Architecture Comparison
        </span>
        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F2F5F7] mt-1">
          {title}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: Traditional Approach */}
        <div className="rounded-xl border border-red-950/50 bg-[#080A0C] p-5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-400 mb-4 pb-2 border-b border-[#222A32]">
            <HiXCircle size={16} />
            {leftTitle}
          </div>
          <ul className="space-y-3">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-[#8B96A3] leading-relaxed">
                <strong className="text-[#F2F5F7] block mb-0.5">{p.aspect}</strong>
                {p.traditional}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Engineered Solution */}
        <div className="rounded-xl border border-[#5CE6A8]/30 bg-[#080A0C] p-5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#5CE6A8] mb-4 pb-2 border-b border-[#222A32]">
            <HiCheckCircle size={16} />
            {rightTitle}
          </div>
          <ul className="space-y-3">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-[#F2F5F7] leading-relaxed">
                <strong className="text-[#5CE6A8] block mb-0.5">{p.aspect}</strong>
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
