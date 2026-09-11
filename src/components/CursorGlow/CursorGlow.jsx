import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Add trail point
      setTrail((prev) => [
        ...prev.slice(-8),
        { x: e.clientX, y: e.clientY, opacity: 1, time: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", move);

    // Trail fade animation
    const interval = setInterval(() => {
      setTrail((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.15 }))
          .filter((p) => p.opacity > 0.05)
      );
    }, 50);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trail.map((point, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: point.opacity, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.1 }}
          className="
            pointer-events-none
            fixed
            left-0
            top-0
            z-0
            w-2 h-2
            rounded-full
            bg-[#00f0ff]
            -translate-x-1/2 -translate-y-1/2
          "
          style={{
            left: point.x,
            top: point.y,
          }}
        />
      ))}

      {/* Main glow */}
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
          bg-[#00f0ff]/8
          blur-3xl
        "
      />
    </>
  );
};

export default CursorGlow;