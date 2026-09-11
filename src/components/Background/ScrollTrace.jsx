import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "BOOT" },
  { id: "about", label: "INFO" },
  { id: "projects", label: "PROJECTS" },
  { id: "skills", label: "STACK" },
  { id: "contact", label: "UPLINK" },
];

const ScrollTrace = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollY / docHeight);

      // Find which section is currently in view
      let currentIdx = 0;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.5) {
          currentIdx = i;
          break;
        }
      }
      setActiveIndex(currentIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end">
      {/* Progress line */}
      <div className="relative h-64 w-1">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#2e2e3a] transition-all duration-200"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      {/* Section markers */}
      <div className="flex flex-col items-end gap-10 mt-6">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`flex items-center gap-3 transition-all duration-300 ${
              index === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            <span
              className={`font-terminal text-xs tracking-widest ${
                index === activeIndex
                  ? "text-[#00ff9d] glow-border"
                  : "text-[#8f8f9a]"
              }`}
            >
              [{index + 1 < 10 ? `0${index + 1}` : index + 1}]
            </span>

            <span
              className={`font-terminal text-[10px] tracking-widest ${
                index === activeIndex ? "text-[#00f0ff]" : "text-[#8f8f9a]/70"
              }`}
            >
              {section.label}
            </span>

            {/* Active dot */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-[#00ff9d] box-shadow-glow"
                  : "bg-[#2e2e3a]"
              }`}
            />
          </div>
        ))}

        {/* End marker */}
        <div className="opacity-40 mt-2">
          <span className="font-terminal text-[9px] tracking-widest text-[#a855f7]">
            [END]
          </span>
          <div className="mt-1 w-2 h-2 rounded-full bg-[#a855f7]/30" />
        </div>
      </div>

      {/* Telemetry */}
      <div className="mt-8 text-right font-terminal text-[10px] text-[#8f8f9a]">
        <div>y: {Math.round(progress * 100)}%</div>
        <div className="mt-1">t: {Math.floor(progress * 1200)}s</div>
        <div className="mt-1">fps: 60</div>
      </div>
    </div>
  );
};

export default ScrollTrace;