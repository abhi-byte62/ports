import { useState } from "react";
import ladderImg from "../../assets/images/liquiditylens/01_order_book_depth_ladder.png";
import curvesImg from "../../assets/images/liquiditylens/03_adverse_selection_markout_curves.png";
import benchImg from "../../assets/images/liquiditylens/07_cpp_hardware_benchmarks.png";

const tabs = [
  {
    id: "ladder",
    label: "L2 Depth Ladder",
    image: ladderImg,
    caption: "Sub-microsecond L2 order book ladder with price-time queue priority & continuous tick ingestion.",
  },
  {
    id: "curves",
    label: "Markout Curves",
    image: curvesImg,
    caption: "Adverse selection markout analysis across 1ms - 5000ms horizons evaluating toxicity & alpha decay.",
  },
  {
    id: "benchmarks",
    label: "C++ Benchmarks",
    image: benchImg,
    caption: "Hardware telemetry profile: zero-allocation memory footprint & sub-250ns execution latency.",
  },
];

const LiquidityLensShowcase = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="w-full rounded-xl border border-white/[0.08] bg-[#0C0C12] overflow-hidden">
      {/* Window Titlebar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] bg-[#0A0A0E] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/[0.15]" />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 pl-2">
            liquiditylens-v2.8 // {activeTab.label.toLowerCase().replace(/ /g, "-")}
          </span>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 rounded-md bg-white/[0.04] p-0.5 border border-white/[0.06]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`rounded px-2.5 py-1 text-[11px] font-mono transition-colors ${
                activeTab.id === tab.id
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Screen Frame */}
      <div className="bg-[#08080C] p-3 sm:p-4">
        <div className="overflow-hidden rounded-lg border border-white/[0.06] bg-[#050508]">
          <img
            src={activeTab.image}
            alt={activeTab.label}
            className="w-full h-auto max-h-[380px] object-contain object-top"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Footer Caption */}
      <div className="border-t border-white/[0.06] bg-[#0A0A0E] px-4 py-2.5 text-[11px] font-mono text-neutral-400">
        {activeTab.caption}
      </div>
    </div>
  );
};

export default LiquidityLensShowcase;
