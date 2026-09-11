import { motion } from "framer-motion";

const TerminalButton = ({
  children,
  href = "#",
  target,
  download,
  className = "",
}) => {
  return (
    <motion.a
      href={href}
      target={target}
      {...(download ? { download: true } : {})}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      whileHover={{
        x: 2,
        boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2

        border
        border-[#00f0ff]
        rounded

        px-6
        py-3

        font-terminal
        text-sm
        tracking-wider

        text-[#00f0ff]

        glow-border
        transition-all
        duration-300

        hover:bg-[#00f0ff10]
        hover:text-white
        ${className}
      `}
    >
      <span className="cursor-blink text-[#00ff9d]">▸</span>
      {children}
    </motion.a>
  );
};

export default TerminalButton;