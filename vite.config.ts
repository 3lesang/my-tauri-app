import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
  server: {
    port: 3000, // Ensure it matches the dev server URL in Tauri config
  },
  build: {
    target: ["es2021", "chrome100", "safari13"], // Compatible with Tauri
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
