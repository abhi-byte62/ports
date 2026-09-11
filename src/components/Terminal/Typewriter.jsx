import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Typewriter = ({
  text,
  speed = 30,
  className = "",
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return (
    <motion.span
      className={`font-terminal ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayedText}
      <span className="cursor-blink text-[#00ff9d]">▮</span>
    </motion.span>
  );
};

export default Typewriter;