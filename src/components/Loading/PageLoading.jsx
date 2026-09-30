export default function PageLoading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#050914] text-[#F5F7FF] p-6">
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-2 border-[#1C2942] border-t-[#4D7CFF] animate-spin" />
        <div className="absolute h-8 w-8 rounded-full bg-[#4D7CFF]/10 blur-sm" />
      </div>
      <div className="mt-4 font-mono text-xs text-[#8D99B5] tracking-widest uppercase animate-pulse">
        Loading System Case Study...
      </div>
    </div>
  );
}
