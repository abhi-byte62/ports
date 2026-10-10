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
      className="fixed bottom-6 right-6 z-40 flex h-9 w-9 items-center justify-center border-2 border-[#34415D] bg-[#171F35] text-[#A5B0C5] shadow-[3px_3px_0px_#060913] hover:border-[#55E6C1] hover:text-[#55E6C1] hover:translate-x-[1px] hover:translate-y-[1px] transition-all focus:outline-none"
    >
      <HiArrowUp className="text-base" />
    </button>
  );
};

export default ScrollTop;
