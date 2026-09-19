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
        rounded-full
        border
        border-zinc-700/60
        bg-zinc-900/90
        text-zinc-400
        shadow-lg
        backdrop-blur-md
        transition-all
        duration-200
        hover:border-zinc-500
        hover:bg-zinc-800
        hover:text-white
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-blue-500
      "
    >
      <HiArrowUp className="text-base" />
    </button>
  );
};

export default ScrollTop;
