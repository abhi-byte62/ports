import { useState } from "react";

const DontTrustShowcase = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      source: "req.headers['x-user-id']",
      transformation: "Babel AST Parser -> Taint Propagator -> Scope Resolver",
      sink: "UserContext.findUnique({ id: req.headers['x-user-id'] })",
      finding: "BOLA / IDOR: Missing authorization check on tenant partition boundary",
      status: "INTERCEPTED",
    },
    {
      source: "req.query.targetUrl",
      transformation: "AST CallExpression -> URL Parser -> RFC 1918 Address Check",
      sink: "fetch(req.query.targetUrl)",
      finding: "SSRF: Unvalidated internal IP range traversal attempt",
      status: "BLOCKED",
    },
  ];

  const current = cases[selectedCase];

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0A0A10] p-5 sm:p-6 text-neutral-300 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          <span className="text-white font-medium">AST Source-to-Sink Taint Propagation</span>
        </div>
        <div className="flex gap-2">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedCase(i)}
              className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                selectedCase === i ? "bg-white/10 text-white font-semibold" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              Case #{i + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-4">
        {/* Source -> Transformation -> Sink Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-neutral-500 uppercase">1. Source (Entrypoint)</div>
            <div className="mt-1 text-sky-400 font-medium break-all">{current.source}</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-neutral-500 uppercase">2. AST Transformation</div>
            <div className="mt-1 text-neutral-300 break-all">{current.transformation}</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            <div className="text-[10px] text-neutral-500 uppercase">3. Sink (Execution Point)</div>
            <div className="mt-1 text-rose-400 font-medium break-all">{current.sink}</div>
          </div>
        </div>

        {/* Security Finding Evaluation */}
        <div className="p-3.5 rounded-xl bg-rose-500/[0.04] border border-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-rose-400 font-semibold uppercase">Security Finding</div>
            <div className="text-neutral-200 text-xs mt-0.5">{current.finding}</div>
          </div>
          <span className="self-start sm:self-auto px-2.5 py-1 rounded bg-rose-500/10 text-rose-300 text-[10px] font-bold tracking-wide">
            {current.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DontTrustShowcase;
