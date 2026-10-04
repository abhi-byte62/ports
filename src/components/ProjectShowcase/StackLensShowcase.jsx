import { useState } from "react";
import dagImg from "../../assets/images/stacklens/03-architecture-dag-interactive.png";
import overviewImg from "../../assets/images/stacklens/02-full-inspector-overview.png";
import heroImg from "../../assets/images/stacklens/01-landing-hero-dashboard.png";
import techImg from "../../assets/images/stacklens/04-technologies-detection-table.png";

const tabs = [
  {
    id: "dag",
    label: "Architecture DAG",
    image: dagImg,
    caption: "Interactive multi-tier architecture DAG mapping frontend, gateway, services & database tiers.",
  },
  {
    id: "overview",
    label: "Full Inspector",
    image: overviewImg,
    caption: "Complete inspection overview with automated technology fingerprinting & header security auditing.",
  },
  {
    id: "hero",
    label: "Endpoint Scanner",
    image: heroImg,
    caption: "Live domain reconnaissance engine with RFC 1918 private network SSRF protection.",
  },
  {
    id: "tech",
    label: "Detection Matrix",
    image: techImg,
    caption: "Deterministic signature catalog matching server response headers, cookies & script fingerprints.",
  },
];

const StackLensShowcase = () => {
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
            stacklens // {activeTab.label.toLowerCase().replace(/ /g, "-")}
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

export default StackLensShowcase;
