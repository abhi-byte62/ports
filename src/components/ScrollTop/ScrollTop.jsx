import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll back to top"
      className="fixed bottom-20 right-6 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#0E1526]/90 backdrop-blur-md text-slate-300 shadow-lg shadow-black/30 hover:border-emerald-400 hover:text-emerald-400 hover:scale-105 transition-all focus:outline-none"
    >
      <HiArrowUp className="text-base" />
    </button>
  );
};

export default ScrollTop;
