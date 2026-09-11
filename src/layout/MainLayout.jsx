import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import StatusOverlay from "../components/Background/StatusOverlay";
import ScrollTrace from "../components/Background/ScrollTrace";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <StatusOverlay />
      <ScrollTrace />

      {/* Diff-style page transition */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(4px)",
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-10"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default MainLayout;