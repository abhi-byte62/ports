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
      className="
        fixed
        bottom-6
        right-6
        z-40
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        border
        border-[#222A32]
        bg-[#101419]/90
        text-[#8B96A3]
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-200
        hover:border-[#5CE6A8]
        hover:text-[#5CE6A8]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#5CE6A8]
      "
    >
      <HiArrowUp className="text-base" />
    </button>
  );
};

export default ScrollTop;
