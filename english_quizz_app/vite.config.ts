import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from "tailwindcss";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({
    svgrOptions: {
      plugins: ["@svgr/plugin-jsx"]
    },
    include: "**/*.svg",
    exclude: "",
  })],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
