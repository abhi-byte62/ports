export default function PageLoading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#090A0F] text-[#EDEDED] select-none p-6">
      <div className="flex flex-col items-center gap-3">
        {/* Clean brand indicator */}
        <div className="flex items-center gap-2.5 text-xs text-neutral-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="font-semibold text-white tracking-tight">Abhishek M R</span>
          <span className="text-neutral-700">/</span>
          <span className="text-neutral-400 font-normal">Loading</span>
        </div>

        {/* Minimalist hairline progress runner */}
        <div className="w-32 h-[1.5px] bg-white/[0.08] overflow-hidden rounded-full relative">
          <div className="h-full w-12 bg-white/70 rounded-full animate-hairline-runner" />
        </div>
      </div>
    </div>
  );
}
