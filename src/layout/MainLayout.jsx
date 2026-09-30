import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ onOpenCommandPalette }) => {
  return (
    <>
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;