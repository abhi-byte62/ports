import { HiXCircle, HiCheckCircle } from "react-icons/hi";

const ComparisonView = ({ title, leftTitle, rightTitle, points = [] }) => {
  return (
    <div className="rounded-2xl border border-[#1C2942] bg-[#0D1424] p-6 md:p-8">
      <div className="mb-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#4D7CFF]">
          Architecture Comparison
        </span>
        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#F5F7FF] mt-1">
          {title}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: Traditional Approach */}
        <div className="rounded-xl border border-red-950/50 bg-[#050914] p-5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-red-400 mb-4 pb-2 border-b border-[#1C2942]">
            <HiXCircle size={16} />
            {leftTitle}
          </div>
          <ul className="space-y-3">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-[#8D99B5] leading-relaxed">
                <strong className="text-[#F5F7FF] block mb-0.5">{p.aspect}</strong>
                {p.traditional}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Engineered Solution */}
        <div className="rounded-xl border border-[#4D7CFF]/30 bg-[#050914] p-5">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#4D7CFF] mb-4 pb-2 border-b border-[#1C2942]">
            <HiCheckCircle size={16} />
            {rightTitle}
          </div>
          <ul className="space-y-3">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-[#F5F7FF] leading-relaxed">
                <strong className="text-[#4D7CFF] block mb-0.5">{p.aspect}</strong>
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
