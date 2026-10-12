import { useEffect, useState } from "react";

const SYSTEM_LOGS = [
  "INITIALIZING_RUNTIME_ENVIRONMENT",
  "ALLOCATING_FIXED_POINT_RING_BUFFERS",
  "HYDRATING_STATE_MACHINE_INVARIANTS",
  "SYNCHRONIZING_NANOSECOND_TELEMETRY",
  "SYSTEMS_READY",
];

export default function PageLoading() {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(18);

  useEffect(() => {
    const logTimer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % SYSTEM_LOGS.length);
    }, 450);

    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev < 92 ? prev + Math.floor(Math.random() * 18) + 6 : 98));
    }, 180);

    return () => {
      clearInterval(logTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center bg-[#090A0F] text-[#EDEDED] p-6 select-none relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Terminal Kernel Frame */}
      <div className="relative w-full max-w-sm rounded-xl border border-white/[0.08] bg-[#0C0D14] p-5 shadow-2xl backdrop-blur-md space-y-4">
        {/* Titlebar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <span className="text-[11px] text-neutral-400 font-medium tracking-tight ml-1">
              KERNEL // INIT
            </span>
          </div>

          <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/40 border border-emerald-500/20 px-1.5 py-0.5 rounded">
            MEM_OK
          </span>
        </div>

        {/* Dynamic Telemetry Status */}
        <div className="space-y-1.5 font-mono">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white font-semibold tracking-tight">
              Booting High-Performance Runtime
            </span>
            <span className="text-emerald-400 text-[11px]">
              {progress}%
            </span>
          </div>

          <div className="text-[11px] text-neutral-400 truncate flex items-center gap-1.5">
            <span className="text-emerald-400 text-xs">›</span>
            <span>{SYSTEM_LOGS[logIndex]}</span>
          </div>
        </div>

        {/* Precision Progress Bar */}
        <div className="space-y-1">
          <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[9.5px] font-mono text-neutral-400 pt-0.5">
            <span>THREAD_0: PINNED</span>
            <span>LATENCY: 218ns</span>
          </div>
        </div>
      </div>

      {/* Subtext */}
      <div className="mt-4 flex items-center gap-2 text-xs font-mono text-neutral-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Synthesizing system state & telemetry...</span>
      </div>
    </div>
  );
}
