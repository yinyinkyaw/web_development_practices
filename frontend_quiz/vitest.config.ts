import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-jsx"],
      },
      include: "**/*.svg",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    // setupFiles: "/src/tests/test-utils.test.tsx",
    alias: {
      "@/components": "/src/components",
      "@/utils": "/src/utils",
      "@/icons": "/src/assets/icons",
      "@/images": "/src/assets/images",
      "@/interfaces": "/src/interfaces",
      "@/layouts": "/src/layouts",
      "@/store": "/src/store",
      "@/tests": "/src/tests",
    },
  },
});
