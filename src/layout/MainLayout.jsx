import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ onOpenCommandPalette }) => {
  return (
    <div className="relative min-h-screen bg-[#0B1020] text-[#E6EAF2] flex flex-col pixel-grid-bg selection:bg-[#55E6C1] selection:text-[#0B1020]">
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />

      <main className="flex-grow relative">
        <Outlet />
      </main>

      <Footer />

      {/* Subtle atmospheric scanlines texture (soft 10% opacity) */}
      <div className="fixed inset-0 pointer-events-none pixel-scanlines opacity-10 z-40" />
    </div>
  );
};

MainLayout.propTypes = {
  onOpenCommandPalette: PropTypes.func,
};

export default MainLayout;