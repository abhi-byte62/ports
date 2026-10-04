import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "@fontsource-variable/geist";
import "@fontsource/cascadia-mono/400.css";
import "@fontsource/cascadia-mono/500.css";
import "@fontsource/cascadia-mono/600.css";
import "@fontsource/cascadia-mono/700.css";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
