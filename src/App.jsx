import { BrowserRouter, Routes, Route } from "react-router-dom";

import CursorGlow from "./components/CursorGlow/CursorGlow";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";

import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import PacketSniffer from "./pages/PacketSniffer";
import SpecterProxy from "./pages/SpecterProxy";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* Global Effects */}
      <CursorGlow />
      <ScrollProgress />
      <ScrollTop />

      {/* Routes */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/packet-sniffer" element={<PacketSniffer />} />
          <Route path="/specter-proxy" element={<SpecterProxy />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
