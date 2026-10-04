import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] origin-left bg-white/70"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;
