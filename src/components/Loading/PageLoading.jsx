export default function PageLoading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#08080C] text-white p-6">
      <div className="relative flex items-center justify-center">
        <div className="h-10 w-10 rounded-full border-2 border-white/10 border-t-white animate-spin" />
      </div>
      <div className="mt-4 font-mono text-xs text-neutral-400 tracking-wider uppercase animate-pulse">
        Loading Case Study...
      </div>
    </div>
  );
}
