import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/hello": {
        target: "https://hono-backend.exit-deguchi0508.workers.dev/",
        changeOrigin: true,
      },
      "/projects": {
        target: "https://hono-backend.exit-deguchi0508.workers.dev/projects",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/projects/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
