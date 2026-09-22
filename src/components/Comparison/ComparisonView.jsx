import { HiXCircle, HiCheckCircle } from "react-icons/hi";

const ComparisonView = ({ title, leftTitle, rightTitle, points = [] }) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
          Architecture Comparison
        </span>
        <h3 className="font-['Space_Grotesk'] text-xl font-bold text-zinc-100 mt-1">
          {title}
        </h3>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Left: Traditional Approach */}
        <div className="rounded-xl border border-red-950/40 bg-zinc-950/60 p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-400 mb-4 pb-2 border-b border-zinc-800">
            <HiXCircle size={16} />
            {leftTitle}
          </div>
          <ul className="space-y-3">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-zinc-400 leading-relaxed">
                <strong className="text-zinc-300 block mb-0.5">{p.aspect}</strong>
                {p.traditional}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Engineered Solution */}
        <div className="rounded-xl border border-blue-900/40 bg-zinc-950/80 p-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4 pb-2 border-b border-zinc-800">
            <HiCheckCircle size={16} />
            {rightTitle}
          </div>
          <ul className="space-y-3">
            {points.map((p, idx) => (
              <li key={idx} className="text-xs text-zinc-300 leading-relaxed">
                <strong className="text-blue-300 block mb-0.5">{p.aspect}</strong>
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
