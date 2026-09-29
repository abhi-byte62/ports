const MetricsGrid = ({ metrics = [] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl border border-[#1C2942] bg-[#0D1424] p-5 transition-all duration-200 hover:border-[#4D7CFF]/40 hover:bg-[#10182A]"
        >
          <div className="flex items-center justify-between text-xs text-[#8D99B5] font-medium">
            <span className="font-mono text-[11px] text-[#5F6B83]">{m.category || "BENCHMARK"}</span>
            {m.badge && (
              <span className="rounded bg-[#0D1B3A] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#6D96FF] border border-[#4D7CFF]/20">
                {m.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-[#F5F7FF]">
              {m.value}
            </span>
            {m.unit && <span className="text-sm font-medium text-[#8D99B5]">{m.unit}</span>}
          </div>
          <p className="mt-1 text-xs font-semibold text-[#F5F7FF]">{m.label}</p>
          {m.description && (
            <p className="mt-2 text-xs leading-relaxed text-[#8D99B5]">{m.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
