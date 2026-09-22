const MetricsGrid = ({ metrics = [] }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((m, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-colors hover:border-zinc-700 hover:bg-zinc-900/60"
        >
          <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
            <span>{m.category || "BENCHMARK"}</span>
            {m.badge && (
              <span className="rounded bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
                {m.badge}
              </span>
            )}
          </div>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="font-['Space_Grotesk'] text-3xl font-bold tracking-tight text-white">
              {m.value}
            </span>
            {m.unit && <span className="text-sm font-medium text-zinc-400">{m.unit}</span>}
          </div>
          <p className="mt-1 text-xs font-medium text-zinc-200">{m.label}</p>
          {m.description && (
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">{m.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default MetricsGrid;
