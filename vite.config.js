import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  root: "src",
  base: "/profile/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "../dist",
    sourcemap: true,
  },
  plugins: [react()],
});
