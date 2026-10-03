import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ onOpenCommandPalette }) => {
  return (
    <div className="relative min-h-screen bg-[#08080C] text-white selection:bg-sky-500/25 selection:text-white flex flex-col">
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;