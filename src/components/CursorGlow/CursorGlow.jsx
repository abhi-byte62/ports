import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 160,
        y: position.y - 160,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 250,
        mass: 0.3,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        h-80
        w-80
        rounded-full
        bg-blue-500/10
        blur-3xl
      "
    />
  );
};

export default CursorGlow;
