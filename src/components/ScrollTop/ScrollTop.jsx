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
      className="fixed bottom-6 right-6 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#0C0C12]/90 text-neutral-400 shadow-sm backdrop-blur-md transition-colors duration-200 hover:border-white/[0.25] hover:text-white hover:bg-white/[0.08] focus:outline-none"
    >
      <HiArrowUp className="text-sm" />
    </button>
  );
};

export default ScrollTop;
