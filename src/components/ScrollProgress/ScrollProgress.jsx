import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left bg-[#55E6C1] shadow-[0_0_8px_#55E6C1]"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
};

export default ScrollProgress;
