const MetricsGrid = ({ metrics = [] }) => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0C0C12] p-5 transition-colors duration-200 hover:border-white/[0.18]"
        >
          <div className="flex items-center justify-between text-xs text-neutral-400 font-medium">
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">{m.category || "METRIC"}</span>
            {m.badge && (
              <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] font-mono text-neutral-300 border border-white/[0.06]">
                {m.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="text-3xl font-semibold tracking-tight text-white">
              {m.value}
            </span>
            {m.unit && <span className="text-xs font-mono text-neutral-400">{m.unit}</span>}
          </div>
          <p className="mt-1.5 text-xs font-medium text-neutral-200 font-sans">{m.label}</p>
          {m.description && (
            <p className="mt-2 text-xs leading-relaxed text-neutral-400 font-sans">{m.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
