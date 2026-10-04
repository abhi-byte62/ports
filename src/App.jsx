import { useEffect, useState, useRef, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import CommandPalette from "./components/CommandPalette/CommandPalette";
import PageLoading from "./components/Loading/PageLoading";

import MainLayout from "./layout/MainLayout";

// Route-level code splitting for lightning-fast initial load
const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const DontTrust = lazy(() => import("./pages/DontTrust"));
const StackLens = lazy(() => import("./pages/StackLens"));
const TradeForge = lazy(() => import("./pages/TradeForge"));
const LiquidityLens = lazy(() => import("./pages/LiquidityLens"));
const TaskFlow = lazy(() => import("./pages/TaskFlow"));
const PacketSniffer = lazy(() => import("./pages/PacketSniffer"));
const SpecterProxy = lazy(() => import("./pages/SpecterProxy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Prevent browser from restoring scroll down to section anchor on refresh
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Check if the page is being reloaded / refreshed
    const isReload = (() => {
      try {
        const navEntries = performance.getEntriesByType("navigation");
        if (navEntries && navEntries.length > 0) {
          return navEntries[0].type === "reload";
        }
        return performance.navigation && performance.navigation.type === 1;
      } catch {
        return false;
      }
    })();

    if (isInitialMount.current) {
      isInitialMount.current = false;

      if (isReload || hash) {
        // Clear section hash from URL and reset to top of page on reload
        if (hash) {
          window.history.replaceState(null, "", pathname || "/");
        }
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        return;
      }
    }

    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Clean hash prior to page unload / reload
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname || "/");
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

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
            <Route path="/donttrust" element={<DontTrust />} />
            <Route path="/stacklens" element={<StackLens />} />
            <Route path="/tradeforge" element={<TradeForge />} />
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
