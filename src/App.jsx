import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import PageLoading from "./components/Loading/PageLoading";

import MainLayout from "./layout/MainLayout";

// Route-level code splitting for lightning-fast initial load
const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const StackLens = lazy(() => import("./pages/StackLens"));
const LiquidityLens = lazy(() => import("./pages/LiquidityLens"));
const TaskFlow = lazy(() => import("./pages/TaskFlow"));
const PacketSniffer = lazy(() => import("./pages/PacketSniffer"));
const SpecterProxy = lazy(() => import("./pages/SpecterProxy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTopOnRoute() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function GlobalShortcuts({ onOpenCommandPalette }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenCommandPalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onOpenCommandPalette]);

  return null;
}

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <BrowserRouter>
      <ScrollToTopOnRoute />
      <ScrollProgress />
      <ScrollTop />
      
      <GlobalShortcuts onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
      
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />

      <Suspense fallback={<PageLoading />}>
        <Routes>
          <Route element={<MainLayout onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />}>
            <Route path="/" element={<Home onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/stacklens" element={<StackLens />} />
            <Route path="/liquiditylens" element={<LiquidityLens />} />
            <Route path="/taskflow" element={<TaskFlow />} />
            <Route path="/packet-sniffer" element={<PacketSniffer />} />
            <Route path="/specter-proxy" element={<SpecterProxy />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}


export default App;
