const MetricsGrid = ({ metrics = [] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl border border-[#222A32] bg-[#101419] p-5 transition-all duration-200 hover:border-[#5CE6A8]/40 hover:bg-[#151B22]"
        >
          <div className="flex items-center justify-between text-xs text-[#8B96A3] font-medium">
            <span className="font-mono text-[11px]">{m.category || "BENCHMARK"}</span>
            {m.badge && (
              <span className="rounded bg-[#10261C] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#5CE6A8] border border-[#5CE6A8]/20">
                {m.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F2F5F7]">
              {m.value}
            </span>
            {m.unit && <span className="text-sm font-medium text-[#8B96A3]">{m.unit}</span>}
          </div>
          <p className="mt-1 text-xs font-semibold text-[#F2F5F7]">{m.label}</p>
          {m.description && (
            <p className="mt-2 text-xs leading-relaxed text-[#8B96A3]">{m.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
