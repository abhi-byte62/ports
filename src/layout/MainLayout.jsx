import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ArchitectureTopology from "../components/Background/ArchitectureTopology";

const MainLayout = ({ onOpenCommandPalette }) => {
  return (
    <div className="relative min-h-screen bg-[#050914] text-[#F5F7FF] selection:bg-[#4D7CFF]/30 selection:text-[#F5F7FF]">
      {/* 3D Systems Architecture Topology Background */}
      <ArchitectureTopology />

      {/* Page Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenCommandPalette={onOpenCommandPalette} />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;