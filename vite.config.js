import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router-dom") || id.includes("react-dom") || id.includes("react")) {
              return "vendor";
            }
            if (id.includes("react-icons")) {
              return "icons";
            }
            if (id.includes("framer-motion") || id.includes("motion")) {
              return "motion";
            }
          }
        },
      },
    },
  },
});
