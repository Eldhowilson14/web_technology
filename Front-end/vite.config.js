import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://web-technology-jllh.onrender.com/",
      // "/api": "https://InfoSystem-c4541e1462c2.herokuapp.com/",
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
